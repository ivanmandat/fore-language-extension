# IGxPrinters.Item

IGxPrinters.Item
-


# IGxPrinters.Item


## Синтаксис


Item(Index: Integer): [IGxPrinter](../IGxPrinter/IGxPrinter.htm);


## Параметры


Index.
 Индекс принтера.


## Описание


Свойство Item возвращает принтер,
 индекс которого передается посредством входного параметра.


## Пример


	Sub UserProc;

	Var

	    Printers: IGxPrinters;

	    Printer: IGxPrinter;

	    i, c: Integer;

	Begin

	    Printers := New GxPrinters.Create;

	    c := Printers.Count;

	    For i := 0 To c - 1 Do

	        Printer := Printers.Item(i);

	        Debug.WriteLine(Printer.Name);

	    End For;

	End Sub UserProc;


При выполнении примера в консоль среды разработки будут выведены наименования
 всех принтеров, установленных в операционной системе.


См. также:


[IGxPrinters](IGxPrinters.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
