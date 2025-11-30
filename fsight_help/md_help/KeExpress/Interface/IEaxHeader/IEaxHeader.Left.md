# IEaxHeader.Left

IEaxHeader.Left
-


# IEaxHeader.Left


## Синтаксис


Left: [IEaxHeaderPart](../IEaxHeaderPart/IEaxHeaderPart.htm);


## Описание


Свойство Left возвращает левую
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

	    HeaderPart := Header.Left;

	End Sub UserProc;


После выполнения примера в переменной «HeaderPart» будет содержаться
 левая часть верхнего колонтитула экспресс-отчета. Идентификатор экспресс-отчета
 - EXPRESS_REPORT.


См. также:


[IEaxHeader](IEaxHeader.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
