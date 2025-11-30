# IWinApplication.LicenseManager

IWinApplication.LicenseManager
-


# IWinApplication.LicenseManager


## Синтаксис


LicenseManager: IUiLicenseManager;


## Описание


Свойство LicenseManager возвращает менеджер лицензий.


## Пример


Для выполнения примера предполагается наличие формы, расположенной на ней кнопки и компонента EditBox с наименованием «EditBox1».


			Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);

Var

    LicManager: IUiLicenseManager;

    Feature: String;

    FeatureInfo: IUiLicenseFeatureInfo;

    Status: UiLicenseStatusCode;

Begin

    LicManager := WinApplication.Instance.LicenseManager;

    Feature := EditBox1.Text;

    FeatureInfo := LicManager.GetFeatureInfo(Feature);

    If FeatureInfo.CommuterAllowed Then

        Status := LicManager.CheckoutCommuterLicense(Feature);

        LicManager.Refresh;

        If Status <> 0 Then

            WinApplication.InformationBox(Status.ToString);

        End If;

    End If;

End Sub Button1OnClick;


Для введенной в поле ввода единицы лицензирования будет получена локальная лицензия, в случае если это возможно. При возникновении ошибки будет выдано сообщение с ее кодом.


См. также:


[IWinApplication](IWinApplication.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
