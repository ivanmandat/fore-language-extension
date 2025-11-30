# IEaxTableStyle.ABCFormatConditions

IEaxTableStyle.ABCFormatConditions
-


# IEaxTableStyle.ABCFormatConditions


## Синтаксис


ABCFormatConditions: [ITabFormatConditions](TabSheet.chm::/Interface/ITabFormatConditions/ITabFormatConditions.htm);


## Описание


Свойство ABCFormatConditions
 возвращает коллекцию условных форматов применяемых для ячеек столбца,
 по которому включен [анализ
 80/20](../IEaxGrid/IEaxGrid.Activate8020.htm).


## Пример


Для выполнения примера предполагается наличие в репозитории экспресс-отчета
 с идентификатором EXPRESS_REPORT.


	Sub UserProc;

	Var

	    MB: IMetabase;

	    MObj: IMetabaseObject;

	    Expr: IEaxAnalyzer;

	    Grid: IEaxGrid;

	    GridStyle: IEaxTableStyle;

	    Conditions: ITabFormatConditions;

	    Condition: ITabFormatCondition;

	    ValFormat: ITabFormatRankValues;

	    Style: ITabCellStyle;

	Begin

	    // Стиль для условного формата

	    Style := New TabCellStyle.Create;

	    Style.BackgroundColor := GxColor.FromName("Red");

	    MB := MetabaseClass.Active;

	    MObj := MB.ItemById("EXPRESS_REPORT").Edit;

	    Expr := MObj As IEaxAnalyzer;

	    Grid := Expr.Grid;

	    GridStyle := Grid.Style;

	    Conditions := GridStyle.ABCFormatConditions;

	    Condition := Conditions.Add;

	    Condition.Type := TabConditionType.MinMax;

	    ValFormat := Condition.Details As ITabFormatRankValues;

	    ValFormat.Count := 2;

	    ValFormat.Style := Style;

	    ValFormat.Type := TabFormatRankType.Top;

	    // Столбец, по которому осуществляется анализ 80/20

	    Expr.Pivot.ABCColumn := 2;

	    MObj.Save;

	End Sub UserProc;


После выполнения примера для экспресс-отчета будет добавлено условное
 форматирование ячеек столбца, для которого будет применяться анализ "80/20".
 Анализ будет осуществляться по данным третьего столбца таблицы. Ячейки,
 содержащие два максимальных значения, будут подсвечены красным цветом.


См. также:


[IEaxTableStyle](IEaxTableStyle.htm)|[IEaxGrid.Activate8020](../IEaxGrid/IEaxGrid.Activate8020.htm)|[Анализ
 80/20](UiExpress.chm::/Table/OperationTable/UiExpress_Tabl_Operation_80_20.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
