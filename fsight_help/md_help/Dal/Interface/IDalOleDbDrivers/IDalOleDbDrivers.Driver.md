# IDalOleDbDrivers.Driver

IDalOleDbDrivers.Driver
-


# IDalOleDbDrivers.Driver


## Синтаксис


Driver(Index: Integer): [IDalDriver](../IDalDriver/IDalDriver.htm);


## Параметры


Index.
 Индекс драйвера.


## Описание


Свойство Driver возвращает настройки
 OLE DB драйвера с указанным индексом.


## Пример


Добавьте ссылки на системные сборки: Collections, Dal, Metabase.


	Sub UserProc;

	Var

	    MB: IMetabase;

	    OleDrivers: IDalOleDbDrivers;

	    Driver: IDalDriver;

	    Descriptor: IDalConnectionDescriptor;

	    Params: IDalConnectionDescriptorParams;

	    Param: IDalConnectionDescriptorParam;

	    i, c: Integer;

	Begin

	    MB := MetabaseClass.Active;

	    OleDrivers := New DalOleDbDrivers.Create;

	    c := OleDrivers.Count;

	    For i := 0 To c - 1 Do

	        Debug.WriteLine("Driver name: " + OleDrivers.DriverName(i));

	        Debug.WriteLine("---Driver Parameters---");

	        Driver := OleDrivers.Driver(i);

	        Debug.Indent;

	        Descriptor := Driver.CreateDescriptor;

	        Params := Descriptor.Params;

	        For Each Param In Params Do

	            Debug.WriteLine(Param.Name);

	        End For;

	        Debug.Unindent;

	        Debug.WriteLine("");

	    End For;

	End Sub UserProc;


При выполнении примера в консоль среды разработки будет выведен список
 установленных в операционной системе OLE DB драйверов, а также их параметры.


См. также:


[IDalOleDbDrivers](IDalOleDbDrivers.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
