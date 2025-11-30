# IEaxHeader.Center

IEaxHeader.Center
-


# IEaxHeader.Center


## Синтаксис


Center: [IEaxHeaderPart](../IEaxHeaderPart/IEaxHeaderPart.htm);


## Описание


Свойство Center возвращает центральную
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

	    HeaderPart := Header.Center;

	End Sub UserProc;


После выполнения примера в переменной «HeaderPart» будет содержаться
 центральная часть верхнего колонтитула экспресс-отчета. Идентификатор
 экспресс-отчета - EXPRESS_REPORT.


См. также:


[IEaxHeader](IEaxHeader.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
