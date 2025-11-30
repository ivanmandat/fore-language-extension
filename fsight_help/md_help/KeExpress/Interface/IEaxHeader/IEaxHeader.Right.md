# IEaxHeader.Right

IEaxHeader.Right
-


# IEaxHeader.Right


## Синтаксис


Right: [IEaxHeaderPart](../IEaxHeaderPart/IEaxHeaderPart.htm);


## Описание


Свойство Right возвращает правую
 часть колонтитула экспресс-отчета.


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

	    HeaderPart := Header.Right;

	End Sub UserProc;


После выполнения примера в переменной «HeaderPart» будет содержаться
 правая часть верхнего колонтитула экспресс-отчета. Идентификатор экспресс-отчета
 - EXPRESS_REPORT.


См. также:


[IEaxHeader](IEaxHeader.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
