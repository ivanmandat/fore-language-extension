# IWinApplication

IWinApplication
-


# IWinApplication


## Описание


Интерфейс IWinApplication содержит
 свойства и методы для управления запущенным приложением.


## Иерархия наследования


           [IApplication](KeSomHost.chm::/Interface/IApplication/iapplication.htm)


           IWinApplication


## Свойства


		 Имя свойства
		 Краткое описание


		 ![](../../Property_Image.gif)
		 [ApplicationSettings](../IWinApplicationClass/IWinApplicationClass.ApplicationSettings.htm)
		 Свойство ApplicationSettings
		 возвращает настройки оформления, используемые текущим приложением.


		 ![](../../Property_Image.gif)
		 [CommandActionCustomize](IWinApplication.CommandActionCustomize.htm)
		 Свойство CommandActionCustomize
		 возвращает настройки для действий, которые доступны для различных
		 объектов репозитория.


		 ![](../../Property_Image.gif)
		 [CustomParams](IWinApplication.CustomParams.htm)
		 Свойство CustomParams
		 возвращает пользовательские параметры, передаваемые при запуске
		 платформы с ключом "-Customparam".


		 ![](../../Property_Image.gif)
		 [Globals](IWinApplication.Globals.htm)
		 Свойство Globals возвращает
		 коллекцию глобальных переменных приложения.


		 ![](../../Property_Image.gif)
		 [LicenseManager](IWinApplication.LicenseManager.htm)
		 Свойство LicenseManager
		 возвращает менеджер лицензий.


		 ![](../../Property_Image.gif)
		 [Params](IWinApplication.Params.htm)
		 Свойство Params возвращает
		 коллекцию параметров, с которыми осуществляется запуск платформы.


		 ![](../../Property_Image.gif)
		 [Windows](IWinApplication.Windows.htm)
		 Свойство Windows возвращает
		 коллекцию окон, связанных с приложением.


## Свойства, унаследованные от [IApplication](KeSomHost.chm::/Interface/IApplication/iapplication.htm)


		 Имя свойства
		 Краткое описание


		 ![](../../Property_Image.gif)
		 [RegistryPath](KeSomHost.chm::/Interface/IApplication/IApplication.RegistryPath.htm)
		 Свойство RegistryPath
		 возвращает путь к настройкам приложения в реестре.


## Методы


		 Имя метода
		 Краткое описание


		 ![](../../Sub_Image.gif)
		 [DisableProcessWindowsGhosting](IWinApplication.DisableProcessWindowsGhosting.htm)
		 Метод DisableProcessWindowsGhosting
		 отключает функцию проверки состояния окон платформы менеджером
		 окон Windows.


		 ![](../../Sub_Image.gif)
		 [GetObjectTarget](IWinApplication.GetObjectTarget.htm)
		 Метод GetObjectTarget
		 создает объект, осуществляющий выполнение каких-либо действий
		 над объектами репозитория с помощью зарезервированных команд.


		 ![](../../Sub_Image.gif)
		 [GetOperatingSystemVersion](IWinApplication.GetOperatingSystemVersion.htm)
		 Метод GetOperatingSystemVersion
		 возвращает информацию о версии операционной системы, установленной
		 на компьютере.


		 ![](../../Sub_Image.gif)
		 [GetPluginTarget](IWinApplication.GetPluginTarget.htm)
		 Метод GetPluginTarget
		 создает объект, осуществляющий выполнение команды заданного плагина.


		 ![](../../Sub_Image.gif)
		 [ProcessMessages](IWinApplication.ProcessMessages.htm)
		 Метод ProcessMessages
		 отправляет запрос на обработку системных сообщений, вызывающих
		 перерисовку окна приложения.


		 ![](../../Sub_Image.gif)
		 [ProcessMouseMessages](IWinApplication.ProcessMouseMessages.htm)
		 Метод ProcessMouseMessages
		 отправляет запрос на обработку системных сообщений, адресованных
		 приложению.


## Методы, унаследованные от [IApplication](KeSomHost.chm::/Interface/IApplication/iapplication.htm)


		 Имя метода
		 Краткое описание


		 ![](../../Sub_Image.gif)
		 [GetMemoryStatus](KeSomHost.chm::/Interface/IApplication/IApplication.GetMemoryStatus.htm)
		 Метод GetMemoryStatus
		 возвращает информацию о физической и виртуальной памяти компьютера.


См. также:


[Интерфейсы сборки Ui](../Ui_Intefrace.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
