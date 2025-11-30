# IEaxHeader.IsEmpty

IEaxHeader.IsEmpty
-


# IEaxHeader.IsEmpty


## Синтаксис


IsEmpty: Boolean;


## Описание


Метод IsEmpty возвращает True если колонтитул пуст.


## Пример


	Sub UserProc;

	Var

	    MB: IMetabase;

	    Expr: IEaxAnalyzer;

	    Header: IEaxHeader;

	Begin

	    MB := MetabaseClass.Active;

	    Expr := MB.ItemById("EXPRESS_REPORT").Bind As IEaxAnalyzer;

	    Header := Expr.Header;

	    If Header.IsEmpty Then

	        s := "Empty";

	    Else

	        s := "Don't Empty";

	    End If;

	End Sub UserProc;


После выполнения примера в переменной «s» будет содержаться «Empty»
 если верхний колонтитул пуст. Идентификатор экспресс-отчета - EXPRESS_REPORT.


См. также:


[IEaxHeader](IEaxHeader.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
