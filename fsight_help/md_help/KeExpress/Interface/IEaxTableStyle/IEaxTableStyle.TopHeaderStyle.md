# IEaxTableStyle.TopHeaderStyle

IEaxTableStyle.TopHeaderStyle
-


# IEaxTableStyle.TopHeaderStyle


## Синтаксис


TopHeaderStyle: [ITabCellStyle](TabSheet.chm::/Interface/ITabCellStyle/ITabCellStyle.htm);


## Описание


Свойство TopHeaderStyle определяет
 стиль оформления заголовков столбцов таблицы.


## Пример


	Sub UserProc;

	Var

	    MB: IMetabase;

	    MObj: IMetabaseObject;

	    Expr: IEaxAnalyzer;

	    Grid: IEaxGrid;

	    Style: IEaxTableStyle;

	    THS: ITabCellStyle;

	Begin

	    MB := MetabaseClass.Active;

	    MObj := MB.ItemById("EXPRESS_REPORT").Edit;

	    Expr := MObj As IEaxAnalyzer;

	    Grid := Expr.Grid;

	    Style := Grid.Style;

	    THS := Style.TopHeaderStyle;

	    THS.BackgroundColor := GxColor.FromName("Green");

	    MObj.Save;

	End Sub UserProc;


После выполнения примера для заголовков столбцов таблицы будет установлен
 зеленый фон. Идентификатор экспресс-отчета - EXPRESS_REPORT.


См. также:


[IEaxTableStyle](IEaxTableStyle.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
