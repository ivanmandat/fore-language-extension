# IGxICMManager.GetProfiles

IGxICMManager.GetProfiles
-


# IGxICMManager.GetProfiles


## Синтаксис


GetProfiles(Printer: [IGxPrinter](../IGxPrinter/IGxPrinter.htm)):
 [IGxDeviceICMProfiles](../IGxDeviceICMProfiles/IGxDeviceICMProfiles.htm);


## Параметры


Printer - принтер, для которого
 необходимо получить список сопоставленных цветовых профилей.


## Описание


Метод GetProfiles возвращает
 список цветовых профилей, сопоставленных с указанным принтером.


## Пример


			Sub UserProc;

Var

    ICMMan: IGxICMManager;

    DeviceProf: IGxDeviceICMProfiles;

    Printers: IGxPrinters;

    Printer: IGxPrinter;

    i, j: Integer;

Begin

    ICMMan := New GxICMManager.Create;

    Printers := New GxPrinters.Create;

    For i := 0 To Printers.Count - 1 Do

        Printer := Printers.Item(i);

        Debug.WriteLine("Принтер: " + Printer.Name);

        DeviceProf := ICMMan.GetProfiles(Printer);

        Debug.WriteLine("Сопоставленные цветовые профили: " + DeviceProf.Count.ToString);

        Debug.Indent;

        For j := 0 To DeviceProf.Count - 1 Do

                Debug.WriteLine(DeviceProf.Item(j));

        End For;

        Debug.Unindent;

    End For;

End Sub UserProc;


При выполнении примера в консоль среды разработки будет выведен список
 всех принтеров, установленных на компьютере. Для каждого принтера будет
 выведен список сопоставленных цветовых профилей.


См. также:


[IGxICMManager](IGxICMManager.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
