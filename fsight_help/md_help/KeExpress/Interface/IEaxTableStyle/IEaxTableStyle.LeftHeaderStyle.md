# IEaxTableStyle.LeftHeaderStyle

IEaxTableStyle.LeftHeaderStyle
-


# IEaxTableStyle.LeftHeaderStyle


## Синтаксис


LeftHeaderStyle: [ITabCellStyle](TabSheet.chm::/Interface/ITabCellStyle/ITabCellStyle.htm);


## Описание


Свойство LeftHeaderStyle определяет
 стиль оформления заголовков строк таблицы.


## Пример


	Sub UserProc;

	Var

	    MB: IMetabase;

	    MObj: IMetabaseObject;

	    Expr: IEaxAnalyzer;

	    Grid: IEaxGrid;

	    Style: IEaxTableStyle;

	    LHS: ITabCellStyle;

	Begin

	    MB := MetabaseClass.Active;

	    MObj := MB.ItemById("EXPRESS_REPORT").Edit;

	    Expr := MObj As IEaxAnalyzer;

	    Grid := Expr.Grid;

	    Style := Grid.Style;

	    LHS := Style.LeftHeaderStyle;

	    LHS.BackgroundColor := GxColor.FromName("Red");

	    MObj.Save;

	End Sub UserProc;


После выполнения примера для заголовков строк таблицы будет установлен
 красный фон. Идентификатор экспресс-отчета - EXPRESS_REPORT.


См. также:


[IEaxTableStyle](IEaxTableStyle.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
