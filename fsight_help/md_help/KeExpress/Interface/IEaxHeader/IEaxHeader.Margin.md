# IEaxHeader.Margin

IEaxHeader.Margin
-


# IEaxHeader.Margin


## Синтаксис


Margin: Double;


## Описание


Свойство Margin определяет отступ
 колонтитула экспресс-отчета.


## Пример


	Sub UserProc;

	Var

	    MB: IMetabase;

	    Expr: IEaxAnalyzer;

	    Header: IEaxHeader;

	    HeaderPart: IEaxHeaderPart;

	Begin

	    MB := MetabaseClass.Active;

	    Expr := MB.ItemById("EXPRESS_REPORT").Bind As IEaxAnalyzer;

	    Header := Expr.Header;

	    Header.Margin := 15.5;

	End Sub UserProc;


После выполнения примера для верхнего колонтитула экспресс-отчета будет
 установлен отступ «15,5». Идентификатор экспресс-отчета - EXPRESS_REPORT.


См. также:


[IEaxHeader](IEaxHeader.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
