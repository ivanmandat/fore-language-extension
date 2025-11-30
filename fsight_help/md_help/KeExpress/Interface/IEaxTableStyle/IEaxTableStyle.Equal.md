# IEaxTableStyle.Equal

IEaxTableStyle.Equal
-


# IEaxTableStyle.Equal


## Синтаксис


Equal(Value: [IEaxTableStyle](IEaxTableStyle.htm)):
 Boolean;


## Описание


Метод Equal осуществляет сравнение
 оформления таблицы экспресс-отчета с оформлением, передаваемым посредством
 параметра Value.


## Пример


	Sub UserProc;

	Var

	    MB: IMetabase;

	    Expr, Expr1: IEaxAnalyzer;

	    Grid: IEaxGrid;

	    Style: IEaxTableStyle;

	    s: String;

	Begin

	    MB := MetabaseClass.Active;

	    Expr := MB.ItemById("EXPRESS_REPORT").Bind As IEaxAnalyzer;

	    Expr1 := MB.ItemById("EXPRESS_REPORT1").Bind As IEaxAnalyzer;

	    Grid := Expr.Grid;

	    Style := Grid.Style;

	    If Style.Equal(Expr1.Grid.Style) Then

	        s := "Yes";

	    Else

	        s := "No";

	    End If;

	End Sub UserProc;


После выполнения примера в переменной «s» будет содержаться «Yes» если
 оформление таблицы экспресс-отчета с идентификатором EXPRESS_REPORT совпадает
 с оформлением таблицы экспресс-отчета EXPRESS_REPORT1.


См. также:


[IEaxTableStyle](IEaxTableStyle.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
