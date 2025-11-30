# IEaxGrid.Style

IEaxGrid.Style
-


# IEaxGrid.Style


## Синтаксис


Style: [IEaxTableStyle](../IEaxTableStyle/IEaxTableStyle.htm);


## Описание


Свойство Style возвращает объект,
 содержащий параметры оформления таблицы экспресс-отчета.


## Пример


	Sub UserProc;

	Var

	    MB: IMetabase;

	    MObj: IMetabaseObject;

	    Expr: IEaxAnalyzer;

	    Grid: IEaxGrid;

	    Style: IEaxTableStyle;

	Begin

	    MB := MetabaseClass.Active;

	    MObj := MB.ItemById("EXPRESS_REPORT").Edit;

	    Expr := MObj As IEaxAnalyzer;

	    Grid := Expr.Grid;

	    Style := Grid.Style;

	    Style.TotalsStyle.Font.Italic := TriState.OnOption;

	    Style.TotalsStyle.Font.Color := GxColor.FromName("Red");

	    MObj.Save;

	End Sub UserProc;


После выполнения примера будут изменены параметры оформления итогов
 в таблице экспресс-отчета. Идентификатор экспресс-отчета - EXPRESS_REPORT.


См. также:


[IEaxGrid](IEaxGrid.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
