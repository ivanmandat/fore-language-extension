# IEaxTableStyle.FixedCornerStyle

IEaxTableStyle.FixedCornerStyle
-


# IEaxTableStyle.FixedCornerStyle


## Синтаксис


FixedCornerStyle: [ITabCellStyle](TabSheet.chm::/Interface/ITabCellStyle/ITabCellStyle.htm);


## Описание


Свойство FixedCornerStyle определяет
 стиль оформления угловой ячейки таблицы.


## Пример


	Sub UserProc;

	Var

	    MB: IMetabase;

	    MObj: IMetabaseObject;

	    Expr: IEaxAnalyzer;

	    Grid: IEaxGrid;

	    Style: IEaxTableStyle;

	    FCS: ITabCellStyle;

	Begin

	    MB := MetabaseClass.Active;

	    MObj := MB.ItemById("EXPRESS_REPORT").Edit;

	    Expr := MObj As IEaxAnalyzer;

	    Grid := Expr.Grid;

	    Style := Grid.Style;

	    FCS := Style.FixedCornerStyle;

	    FCS.BackgroundColor := GxColor.FromName("Yellow");

	    MObj.Save;

	End Sub UserProc;


После выполнения примера для угловой ячейки таблицы будет установлен
 желтый фон. Идентификатор экспресс-отчета - EXPRESS_REPORT.


См. также:


[IEaxTableStyle](IEaxTableStyle.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
