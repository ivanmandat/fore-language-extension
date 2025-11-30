# IGxICMManager.GetScreenProfiles

IGxICMManager.GetScreenProfiles
-


# IGxICMManager.GetScreenProfiles


## Синтаксис


GetScreenProfiles: [IGxDeviceICMProfiles](../IGxDeviceICMProfiles/IGxDeviceICMProfiles.htm);


## Описание


Метод GetScreenProfiles возвращает
 список цветовых профилей, сопоставленных с монитором.


## Пример


			Sub UserProc;

Var

    ICMMan: IGxICMManager;

    DeviceProf: IGxDeviceICMProfiles;

    i: Integer;

Begin

    ICMMan := New GxICMManager.Create;

    DeviceProf := ICMMan.GetScreenProfiles;

    Debug.WriteLine("Цветовые профили, сопоставленные с монитором");

    Debug.Indent;

    For i := 0 To DeviceProf.Count - 1 Do

        Debug.WriteLine(DeviceProf.Item(i));

    End For;

    Debug.Unindent;

End Sub UserProc;


При выполнении примера в консоль среды разработки будет выведен список
 цветовых профилей, сопоставленных с монитором.


См. также:


[IGxICMManager](IGxICMManager.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
