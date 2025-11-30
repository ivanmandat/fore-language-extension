# IApplication.RegistryPath

IApplication.RegistryPath
-


# IApplication.RegistryPath


## Синтаксис


RegistryPath([SubVersion: Boolean = False]): String;


## Параметры


SubVersion. Признак получения
 пути с учётом [основной
 версии](../IApplicationVersion/IApplicationVersion.Major.htm) приложения.


## Описание


Свойство RegistryPath возвращает
 путь к настройкам приложения в реестре.


## Комментарии


Возвращаемый путь не содержит наименование основного раздела реестра,
 в котором могут храниться настройки. Для формирования полного пути, по
 которому могут быть получены настройки, необходимо в коде указать необходимый
 раздел: HKEY_CURRENT_USER для работы с настройками текущего пользователя
 или HKEY_LOCAL_MACHINE для работы с настройками всех пользователей.


Различные настройки, которые могут быть получены/изменены в реестре,
 представлены в разделе «[Настройки
 в системном реестре](Setup.chm::/UiWebSetup/03_Setup_Web/BI_Server_Registry_Key.htm)». Дальнейшая работа с настройками
 возможна с использованием ресурсов сборки [Registry](ModRegistry.chm::/ModRegistry_Title.htm).


## Пример


Добавьте ссылку на системную сборку Host.


	Sub UserProc;

	Var

	    App: IApplication;

	    Version: IApplicationVersion;

	Begin

	    App := Application.Instance;

	    Version := New ApplicationVersion.Create;

	    Debug.WriteLine("Общие настройки всех пользователей: " + "[HKEY_LOCAL_MACHINE\" + App.RegistryPath + ']');

	    Debug.WriteLine("Общие настройки для версии " + Version.ShortDescription + ": [HKEY_LOCAL_MACHINE\" + App.RegistryPath(True) + ']');

	End Sub UserProc;


При выполнении примера в консоль среды разработки будут выведены полные
 пути в реестре с общими настройками всех пользователей и пользователей
 текущего релиза платформы.


См. также:


[IApplication](iapplication.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
