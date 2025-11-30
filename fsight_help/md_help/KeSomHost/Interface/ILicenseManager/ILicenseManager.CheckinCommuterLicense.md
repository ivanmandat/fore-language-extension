# ILicenseManager.CheckinCommuterLicense

ILicenseManager.CheckinCommuterLicense
-


# ILicenseManager.CheckinCommuterLicense


## Синтаксис


CheckinCommuterLicense(FeatureName: String): [UiLicenseStatusCode](ForeSys.chm::/Enums/UiLicenseStatusCode.htm);


## Параметры


FeatureName. Наименование единицы
 лицензирования.


## Описание


Метод CheckinCommuterLicense
 возвращает локальную лицензию на сервер лицензий, которая позволяла временно
 использовать приложение вне сетевого окружения.


## Комментарии


Метод актуален после получения временной лицензии с сервера лицензий
 с помощью метода [ILicenseManager.CheckoutCommuterLicense](ILicenseManager.CheckoutCommuterLicense.htm).


Для успешного возвращения лицензии на сервер [настройки
 поиска лицензий](Setup.chm::/08_Licensing/RMS/Intro_LicMngr_SearchLic.htm) должны совпадать с настройками, которые
 были заданы в момент взятия временной лицензии с сервера лицензий.


## Пример


Для выполнения примера разместите на форме компоненты Button и Editbox
 с наименованиями «Button1» и «Editbox1» соответственно.


Добавьте ссылки на системные сборки: Host, Ui, Forms.


Пример является обработчиком события OnClick для компонента «Button1».


	Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);

	Var

	    LicManager: ILicenseManager;

	    Feature: String;

	    FeatureInfo: ILicenseFeatureInfo;

	    StatusCode: UiLicenseStatusCode;

	Begin

	    LicManager := WinApplication.Instance.LicenseManager;

	    Feature := EditBox1.Text;

	    FeatureInfo := LicManager.FeatureInfo(Feature);

	    If LicManager.IsCheckedOut(Feature) Then

	        StatusCode := LicManager.CheckinCommuterLicense(Feature);

	        If StatusCode = UiLicenseStatusCode.Success Then

	            WinApplication.InformationBox("Лицензия возвращена успешно");

	        Else

	            WinApplication.InformationBox("Ошибка: " + StatusCode.ToString);

	        End If;

	    Else

	        WinApplication.InformationBox("Лицензия не была получена с сервера");

	    End If;

	End Sub Button1OnClick;


Введите в Editbox наименование предустановленной единицы лицензирования,
 например PP_OLAP, и нажмите на кнопку. Если указанная единица лицензирования
 ранее была получена с сервера лицензий, то она будет возвращена. Если
 при возвращении возникнут ошибки, то будет выдано сообщение с [кодом](ForeSys.chm::/Enums/UiLicenseStatusCode.htm)
 возникшей ошибки.


См. также:


[ILicenseManager](ILicenseManager.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
