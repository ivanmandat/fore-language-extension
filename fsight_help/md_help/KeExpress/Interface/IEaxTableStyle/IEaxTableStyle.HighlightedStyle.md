# IEaxTableStyle.HighlightedStyle

IEaxTableStyle.HighlightedStyle
-


# IEaxTableStyle.HighlightedStyle


## Синтаксис


HighlightedStyle: [ITabCellStyle](TabSheet.chm::/Interface/ITabCellStyle/ITabCellStyle.htm);


## Описание


Свойство HighlightedStyle определяет
 стиль оформления подсвеченных ячеек таблицы.


## Пример


	Sub UserProc;

	Var

	    MB: IMetabase;

	    MObj: IMetabaseObject;

	    Expr: IEaxAnalyzer;

	    Grid: IEaxGrid;

	    Style: IEaxTableStyle;

	    HS: ITabCellStyle;

	Begin

	    MB := MetabaseClass.Active;

	    MObj := MB.ItemById("EXPRESS_REPORT").Edit;

	    Expr := MObj As IEaxAnalyzer;

	    Grid := Expr.Grid;

	    Style := Grid.Style;

	    HS := Style.HighlightedStyle;

	    HS.BackgroundColor := GxColor.FromName("Gold");

	    MObj.Save;

	End Sub UserProc;


После выполнения примера для подсвеченных ячеек таблицы будет установлен
 золотистый фон. Идентификатор экспресс-отчета - EXPRESS_REPORT.


См. также:


[IEaxTableStyle](IEaxTableStyle.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
