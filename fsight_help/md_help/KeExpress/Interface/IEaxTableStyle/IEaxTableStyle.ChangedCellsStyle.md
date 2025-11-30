# IEaxTableStyle.ChangedCellsStyle

IEaxTableStyle.ChangedCellsStyle
-


# IEaxTableStyle.ChangedCellsStyle


## Синтаксис


ChangedCellsStyle: [ITabCellStyle](TabSheet.chm::/Interface/ITabCellStyle/ITabCellStyle.htm);


## Описание


Свойство ChangedCellsStyle определяет
 стиль оформления ячеек, содержащих измененные данные.


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

	    ChangedStyle: ITabCellStyle;

	Begin

	    MB := MetabaseClass.Active;

	    MObj := MB.ItemById("EXPRESS_REPORT").Edit;

	    Expr := MObj As IEaxAnalyzer;

	    Grid := Expr.Grid;

	    Style := Grid.Style;

	    ChangedStyle := Style.ChangedCellsStyle;

	    ChangedStyle.BackgroundColor := GxColor.FromName("Silver");

	    ChangedStyle.Font.Bold := TriState.OnOption;

	    ChangedStyle.Font.Italic := TriState.OnOption;

	    MObj.Save;

	End Sub UserProc;


После выполнения примера для экспресс-отчета будет изменен стиль оформления
 ячеек, содержащих измененные значения. Значения будут отображаться жирным
 курсивным шрифтом на сером фоне.


См. также:


[IEaxTableStyle](IEaxTableStyle.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
