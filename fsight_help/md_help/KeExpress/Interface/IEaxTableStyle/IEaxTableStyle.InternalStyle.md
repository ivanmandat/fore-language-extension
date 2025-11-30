# IEaxTableStyle.InternalStyle

IEaxTableStyle.InternalStyle
-


# IEaxTableStyle.InternalStyle


## Синтаксис


InternalStyle: [ITabCellStyle](TabSheet.chm::/Interface/ITabCellStyle/ITabCellStyle.htm);


## Описание


Свойство InternalStyle определяет
 стиль оформления области данных таблицы.


## Пример


	Sub UserProc;

	Var

	    MB: IMetabase;

	    MObj: IMetabaseObject;

	    Expr: IEaxAnalyzer;

	    Grid: IEaxGrid;

	    Style: IEaxTableStyle;

	    InS: ITabCellStyle;

	Begin

	    MB := MetabaseClass.Active;

	    MObj := MB.ItemById("EXPRESS_REPORT").Edit;

	    Expr := MObj As IEaxAnalyzer;

	    Grid := Expr.Grid;

	    Style := Grid.Style;

	    InS := Style.InternalStyle;

	    InS.BackgroundColor := GxColor.FromName("Orange");

	    MObj.Save;

	End Sub UserProc;


После выполнения примера для области данных таблицы будет установлен
 оранжевый фон. Идентификатор экспресс-отчета - EXPRESS_REPORT.


См. также:


[IEaxTableStyle](IEaxTableStyle.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
