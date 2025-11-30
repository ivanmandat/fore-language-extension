# IWinApplication.GetOperatingSystemVersion

IWinApplication.GetOperatingSystemVersion
-


# IWinApplication.GetOperatingSystemVersion


## Синтаксис


GetOperatingSystemVersion: [IOperatingSystemVersion](../IOperatingSystemVersion/IOperatingSystemVersion.htm);


## Описание


Метод GetOperatingSystemVersion
 возвращает информацию о версии операционной системы, установленной на
 компьютере.


## Пример


			Sub UserProc;

Var

    WinApp: IWinApplication;

    OSVer: IOperatingSystemVersion;

Begin

    WinApp := WinApplication.Instance;

    OSVer := WinApp.GetOperatingSystemVersion;

    Debug.WriteLine("Основная версия ОС: " + OSVer.MajorVersion.ToString);

    Debug.WriteLine("Промежуточная версия ОС: " + OSVer.MinorVersion.ToString);

    Debug.WriteLine("Наименование обновления: " + OSVer.CSDVersion);

    Debug.WriteLine("Полное наименование ОС: " + OSVer.FullName);

    Debug.WriteLine("Наименование ОС: " + OSVer.Name);

    Debug.WriteLine("Идентификатор платформы ОС: " + OSVer.PlatformId.ToString);

End Sub UserProc;


При выполнении примера в консоль среды разработки будет выведена информация
 о версии операционной системы.


См. также:


[IWinApplication](IWinApplication.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
