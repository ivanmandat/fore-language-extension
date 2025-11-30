# IEaxTableStyle.ABCHeaderStyle

IEaxTableStyle.ABCHeaderStyle
-


# IEaxTableStyle.ABCHeaderStyle


## Синтаксис


ABCHeaderStyle: [ITabCellStyle](TabSheet.chm::/Interface/ITabCellStyle/ITabCellStyle.htm);


## Описание


Свойство ABCHeaderStyle определяет
 стиль оформления заголовка столбца, по которому включен [анализ
 80/20](../IEaxGrid/IEaxGrid.Activate8020.htm), в таблице экспресс-отчета.


## Пример


Для выполнения примера предполагается наличие в репозитории экспресс-отчета
 с идентификатором EXPRESS_REPORT.


	Sub UserProc;

	Var

	    MB: IMetabase;

	    MObj: IMetabaseObject;

	    Expr: IEaxAnalyzer;

	    Grid: IEaxGrid;

	    Style: IEaxTableStyle;

	    HeaderStyle, CellStyle: ITabCellStyle;

	    Begin

	    MB := MetabaseClass.Active;

	    MObj := MB.ItemById("EXPRESS_REPORT").Edit;

	    Expr := MObj As IEaxAnalyzer;

	    Grid := Expr.Grid;

	    // Стиль для заголовков

	    HeaderStyle := New TabCellStyle.Create;

	    HeaderStyle.BackgroundColor := GxColor.FromName("Green");

	    HeaderStyle.Font.Bold := TriState.OnOption;

	    // Стиль для ячеек

	    CellStyle := New TabCellStyle.Create;

	    CellStyle.BackgroundColor := GxColor.FromName("Yellow");

	    Style := Grid.Style;

	    Style.ABCHeaderStyle := HeaderStyle;

	    Style.ABCStyle := CellStyle;

	    // Столбец, по которому осуществляется анализ 80/20

	    Expr.Pivot.ABCColumn := 2;

	    MObj.Save;

	End Sub UserProc;


После выполнения примера для экспресс-отчета будут изменены стили оформления
 заголовка и ячеек столбца, для которого будет применяться анализ "80/20".
 Анализ будет осуществляться по данным третьего столбца таблицы.


См. также:


[IEaxTableStyle](IEaxTableStyle.htm)|[IEaxGrid.Activate8020](../IEaxGrid/IEaxGrid.Activate8020.htm)|[Анализ
 80/20](UiExpress.chm::/Table/OperationTable/UiExpress_Tabl_Operation_80_20.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
