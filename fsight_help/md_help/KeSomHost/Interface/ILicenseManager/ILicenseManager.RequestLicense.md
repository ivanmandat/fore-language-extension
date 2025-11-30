# ILicenseManager.RequestLicense

ILicenseManager.RequestLicense
-


# ILicenseManager.RequestLicense


## Синтаксис


LicenseRequest(FeatureName: String; Var License:
 [ILicense](../ILicense/ILicense.htm); [Settings: [ILicenseRequestSettings](../ILicenseRequestSettings/ILicenseRequestSettings.htm)
 = Null]): [UiLicenseStatusCode](ForeSys.chm::/Enums/UiLicenseStatusCode.htm);


## Параметры


FeatureName. Наименование единицы
 лицензирования;


Примечание.
 Параметр принимает пустое значение, если параметр Settings
 передает тип единицы лицензирования с помощью свойства [FeatureType](../ILicenseRequestSettings/ILicenseRequestSettings.FeatureType.htm).


License. Лицензия;


Settings. Объект для работы
 с [мастером
 активации модуля](setup.chm::/08_Licensing/RMS/Intro_LicMngr_ActivateModule.htm). Если запрашиваемая единица лицензирования
 недоступна используйте свойство [IUiLicenseRequestSettings.ShowActivationWizard](UiLib.chm::/Interface/IUiLicenseRequestSettings/IUiLicenseRequestSettings.ShowActivationWizard.htm)
 для отображения окна «[Активация
 модуля](Setup.chm::/08_Licensing/RMS/Intro_LicMngr_ActivateModule.htm)».
 По умолчанию свойство принимает значение False,
 диалог активации не отображается;


Примечание.
 Значение свойства True используется
 только для проверки автономной лицензии, при проверке сетевой лицензии
 и отсутствии запрашиваемой единицы лицензирования появится сообщение об
 ошибке.


## Описание


Метод LicenseRequest проверяет
 наличие заданной единицы лицензирования в лицензии и возвращает результат
 проверки.


## Комментарии


Проверка единицы лицензирования может быть выполнена как для сетевой,
 так и для автономной лицензии.


После получения лицензии ее необходимо обновить [ILicense.LicenseUpdate](../ILicense/ILicense.LicenseUpdate.htm).


После завершения работы с лицензируемым блоком лицензию необходимо освободить
 с помощью [ILicense.LicenseRelease](../ILicense/ILicense.LicenseRelease.htm),
 то есть удалить объект с лицензией.


При использовании прикладных единиц лицензирования необходимо создание
 специального lsinit.exe, содержащего информацию о них. Подробнее смотрите
 в статье «[Лицензирование
 прикладных систем](Setup.chm::/08_Licensing/ApplicationSystemLicensing.htm)».


В случае, если в диалоге активации модуля был указан валидный код активации,
 то код единицы лицензирования будет сохранен в файл. Файл автономной лицензии
 хранится по следующему пути: %PROGRAMDATA%\Foresight\Foresight Analytics Platform\lservrc.


При использовании метода проверяется тип лицензии:


	- если используется сетевая лицензии и нет запрашиваемой единицы
	 лицензирования, то вместо окна активации появится сообщение об ошибке.
	 Активация лицензий не поддерживается для сетевого режима;


	- если на сервере есть запрашиваемая лицензия, то для текущего
	 пользователя будут изменены настройки поиска лицензии на автономную
	 лицензию;


	- если используется автономная лицензии и нет запрашиваемой единицы
	 лицензирования, то появится окно активации.


## Пример


Для выполнения примера разместите на форме компонент Button с наименованием
 «Button1».


Добавьте ссылки на системные сборки: Host, Forms, Ui, Fore.


Пример является обработчиком события OnClick для компонента «Button1».
 Выполните пример [без
 отладки](UiDevEnv.chm::/01_Development_Environment/02_Work_in_Development_Environment/Run_Debug.htm).


	Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);

	Var

	    LicManager: ILicenseManager;

	    Feature: String;

	    Lic: ILicense;

	    StatusCode: UiLicenseStatusCode;

	    Settings: IUiLicenseRequestSettings;

	Begin

	    LicManager := WinApplication.Instance.LicenseManager;

	    //Feature := "PP_WordAddIn";

	    Settings := New UiLicenseRequestSettings.Create;

	    Settings.FeatureType := UiLicenseFeatureType.WordAddin;

	    Settings.ShowActivationWizard := True;

	    //StatusCode := LicManager.RequestLicense(Feature, Lic, Settings);

	    StatusCode := LicManager.RequestLicense("", Lic, Settings);

	    If StatusCode = UiLicenseStatusCode.Success Then

	        Lic.LicenseUpdate;

	    Else

	        // обработка ошибок лицензирования

	        //...

	    End If;

	    //Работа с лицензируемым блоком

	    //...

	    //После завершения работы освобождаем лицензию

	    If Lic <> Null Then

	        Lic.LicenseRelease;

	    End If;

	End Sub Button1OnClick;


При нажатии на кнопку будет запрошена единица лицензирования «PP_WordAddin».
 В случае если она недоступна, будет выдан диалог «[Активация
 модуля](Setup.chm::/08_Licensing/RMS/Intro_LicMngr_ActivateModule.htm)».


См. также:


[ILicenseManager](ILicenseManager.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
