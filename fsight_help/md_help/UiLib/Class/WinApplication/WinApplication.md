# WinApplication

WinApplication
-


# WinApplication


Сборка: Ui;


## Описание


Класс WinApplication реализует
 объект, используемый для управления запущенным приложением и всеми его
 объектами.


## Статические свойства класса, унаследованные от [IWinApplicationClass](../../Interface/IWinApplicationClass/IWinApplicationClass.htm)


		 Имя свойства
		 Краткое описание


		 ![](../../Property_Image.gif)
		 [ApplicationSettings](../../Interface/IWinApplicationClass/IWinApplicationClass.ApplicationSettings.htm)
		 Свойство ApplicationSettings
		 возвращает настройки оформления, используемые текущим приложением.


		 ![](../../Property_Image.gif)
		 [Binary](../../Interface/IWinApplicationClass/IWinApplicationClass.Binary.htm)
		 Свойство Binary возвращает
		 путь и имя исполняемого файла, с помощью которого был запущен
		 текущий экземпляр платформы.


		 ![](../../Property_Image.gif)
		 [CursorPosition](../../Interface/IWinApplicationClass/IWinApplicationClass.CursorPosition.htm)
		 Свойство CursorPosition
		 возвращает точку, содержащую текущие экранные координаты курсора
		 мыши.


		 ![](../../Property_Image.gif)
		 [Help](../../Interface/IWinApplicationClass/IWinApplicationClass.Help.htm)
		 Свойство Help возвращает
		 настройки справки приложения.


		 ![](../../Property_Image.gif)
		 [Instance](../../Interface/IWinApplicationClass/IWinApplicationClass.Instance.htm)
		 Свойство Instance возвращает
		 объект, предназначенный для работы с запущенным приложением.


		 ![](../../Property_Image.gif)
		 [WaitCursor](../../Interface/IWinApplicationClass/IWinApplicationClass.WaitCursor.htm)
		 Свойство WaitCursor
		 определяет, будет ли курсор мыши отображаться в виде курсора ожидания.


## Статические методы класса, унаследованные от [IWinApplicationClass](../../Interface/IWinApplicationClass/IWinApplicationClass.htm)


		 Имя метода
		 Краткое описание


		 ![](../../Sub_Image.gif)
		 [ConfirmationBox](../../Interface/IWinApplicationClass/IWinApplicationClass.ConfirmationBox.htm)
		 Метод ConfirmationBox
		 вызывает стандартный диалог подтверждения.


		 ![](../../Sub_Image.gif)
		 [ErrorBox](../../Interface/IWinApplicationClass/IWinApplicationClass.ErrorBox.htm)
		 Метод ErrorBox вызывает
		 стандартный диалог с сообщением об ошибке.


		 ![](../../Sub_Image.gif)
		 [ExclamationBox](../../Interface/IWinApplicationClass/IWinApplicationClass.ExclamationBox.htm)
		 Метод ExclamationBox
		 вызывает стандартный диалог с предупреждением.


		 ![](../../Sub_Image.gif)
		 [GetAsyncKeyState](../../Interface/IWinApplicationClass/IWinApplicationClass.GetAsyncKeyState.htm)
		 Метод GetAsyncKeyState
		 возвращает состояние клавиши (нажата/не нажата) вне очереди сообщений.


		 ![](../../Sub_Image.gif)
		 [GetKeyState](../../Interface/IWinApplicationClass/IWinApplicationClass.GetKeyState.htm)
		 Метод GetKeyState возвращает
		 состояние клавиши (нажата/не нажата) из очереди сообщений.


		 ![](../../Sub_Image.gif)
		 [InformationBox](../../Interface/IWinApplicationClass/IWinApplicationClass.InformationBox.htm)
		 Метод InformationBox
		 вызывает стандартный информационный диалог.


		 ![](../../Sub_Image.gif)
		 [InputBox](../../Interface/IWinApplicationClass/IWinApplicationClass.InputBox.htm)
		 Метод InputBox вызывает
		 стандартный диалог для ввода данных.


		 ![](../../Sub_Image.gif)
		 [NotImplementedBox](../../Interface/IWinApplicationClass/IWinApplicationClass.NotImplementedBox.htm)
		 Метод NotImplementedBox
		 вызывает диалог с сообщением "Извините, данная функция находится
		 в стадии разработки".


		 ![](../../Sub_Image.gif)
		 [ShellExecute](../../Interface/IWinApplicationClass/IWinApplicationClass.ShellExecute.htm)
		 Метод ShellExecute
		 осуществляет открытие файла (приложения).


		 ![](../../Sub_Image.gif)
		 [YesNoCancelBox](../../Interface/IWinApplicationClass/IWinApplicationClass.YesNoCancelBox.htm)
		 Метод YesNoCancelBox
		 вызывает стандартный диалог подтверждения, содержащий три варианта
		 ответа.


## Свойства объекта класса, унаследованные от [IWinApplication](../../Interface/IWinApplication/IWinApplication.htm)


		 Имя свойства
		 Краткое описание


		 ![](../../Property_Image.gif)
		 [ApplicationSettings](../../Interface/IWinApplicationClass/IWinApplicationClass.ApplicationSettings.htm)
		 Свойство ApplicationSettings
		 возвращает настройки оформления, используемые текущим приложением.


		 ![](../../Property_Image.gif)
		 [CommandActionCustomize](../../Interface/IWinApplication/IWinApplication.CommandActionCustomize.htm)
		 Свойство CommandActionCustomize
		 возвращает настройки для действий, которые доступны для различных
		 объектов репозитория.


		 ![](../../Property_Image.gif)
		 [CustomParams](../../Interface/IWinApplication/IWinApplication.CustomParams.htm)
		 Свойство CustomParams
		 возвращает пользовательские параметры, передаваемые при запуске
		 платформы с ключом "-Customparam".


		 ![](../../Property_Image.gif)
		 [Globals](../../Interface/IWinApplication/IWinApplication.Globals.htm)
		 Свойство Globals возвращает
		 коллекцию глобальных переменных приложения.


		 ![](../../Property_Image.gif)
		 [LicenseManager](../../Interface/IWinApplication/IWinApplication.LicenseManager.htm)
		 Свойство LicenseManager
		 возвращает менеджер лицензий.


		 ![](../../Property_Image.gif)
		 [Params](../../Interface/IWinApplication/IWinApplication.Params.htm)
		 Свойство Params возвращает
		 коллекцию параметров, с которыми осуществляется запуск платформы.


		 ![](../../Property_Image.gif)
		 [Windows](../../Interface/IWinApplication/IWinApplication.Windows.htm)
		 Свойство Windows возвращает
		 коллекцию окон, связанных с приложением.


## Свойства объекта класса, унаследованные от [IApplication](KeSomHost.chm::/Interface/IApplication/iapplication.htm)


		 Имя свойства
		 Краткое описание


		 ![](../../Property_Image.gif)
		 [RegistryPath](KeSomHost.chm::/Interface/IApplication/IApplication.RegistryPath.htm)
		 Свойство RegistryPath
		 возвращает путь к настройкам приложения в реестре.


## Методы объекта класса, унаследованные от [IWinApplication](../../Interface/IWinApplication/IWinApplication.htm)


		 Имя метода
		 Краткое описание


		 ![](../../Sub_Image.gif)
		 [DisableProcessWindowsGhosting](../../Interface/IWinApplication/IWinApplication.DisableProcessWindowsGhosting.htm)
		 Метод DisableProcessWindowsGhosting
		 отключает функцию проверки состояния окон платформы менеджером
		 окон Windows.


		 ![](../../Sub_Image.gif)
		 [GetObjectTarget](../../Interface/IWinApplication/IWinApplication.GetObjectTarget.htm)
		 Метод GetObjectTarget
		 создает объект, осуществляющий выполнение каких-либо действий
		 над объектами репозитория с помощью зарезервированных команд.


		 ![](../../Sub_Image.gif)
		 [GetOperatingSystemVersion](../../Interface/IWinApplication/IWinApplication.GetOperatingSystemVersion.htm)
		 Метод GetOperatingSystemVersion
		 возвращает информацию о версии операционной системы, установленной
		 на компьютере.


		 ![](../../Sub_Image.gif)
		 [GetPluginTarget](../../Interface/IWinApplication/IWinApplication.GetPluginTarget.htm)
		 Метод GetPluginTarget
		 создает объект, осуществляющий выполнение команды заданного плагина.


		 ![](../../Sub_Image.gif)
		 [ProcessMessages](../../Interface/IWinApplication/IWinApplication.ProcessMessages.htm)
		 Метод ProcessMessages
		 отправляет запрос на обработку системных сообщений, вызывающих
		 перерисовку окна приложения.


		 ![](../../Sub_Image.gif)
		 [ProcessMouseMessages](../../Interface/IWinApplication/IWinApplication.ProcessMouseMessages.htm)
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


[Классы сборки Ui](../Ui_Class.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
