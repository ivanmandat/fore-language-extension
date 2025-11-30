# IUiLicenseRequestSettings.ShowActivationWizard

IUiLicenseRequestSettings.ShowActivationWizard
-


# IUiLicenseRequestSettings.ShowActivationWizard


## Синтаксис


ShowActivationWizard: Boolean;


## Описание


Свойство ShowActivationWizard
 отвечает за появление окна «[Активация
 модуля](setup.chm::/08_Licensing/RMS/Intro_LicMngr_ActivateModule.htm)», когда
 запрашиваемая единица лицензирования недоступна.


## Комментарии


Допустимые значения:


	- True. Отображается диалог
	 активации модуля;


	- False. По умолчанию.
	 Диалог активации модуля не отображается.


Примечание.
 Значение параметра True используется
 только для проверки автономной лицензии, при проверке сетевой лицензии
 и отсутствии запрашиваемой единицы лицензирования появится сообщение об
 ошибке.


## Пример


Использование свойства приведено в примере для [ILicenseManager.RequestLicense](KeSomHost.chm::/Interface/ILicenseManager/ILicenseManager.RequestLicense.htm).


См. также:


[IUiLicenseRequestSettings](IUiLicenseRequestSettings.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
