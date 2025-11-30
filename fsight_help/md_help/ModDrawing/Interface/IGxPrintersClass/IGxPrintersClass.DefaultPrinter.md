# IGxPrintersClass.DefaultPrinter

IGxPrintersClass.DefaultPrinter
-


# IGxPrintersClass.DefaultPrinter


## Синтаксис


DefaultPrinter: [IGxPrinter](../IGxPrinter/IGxPrinter.htm);


## Описание


Свойство DefaultPrinter возвращает
 принтер, установленный в операционной системе по умолчанию.


## Пример


	Sub UserProc;

	Var

	    Printer: IGxPrinter;

	    s: String;

	Begin

	    Printer := GxPrinters.DefaultPrinter;

	    Debug.WriteLine(Printer.Name);

	End Sub UserProc;


При выполнении примера в консоль среды разработки будет выведено наименование
 принтера, установленного в операционной системе по умолчанию.


См. также:


[IGxPrintersClass](IGxPrintersClass.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
