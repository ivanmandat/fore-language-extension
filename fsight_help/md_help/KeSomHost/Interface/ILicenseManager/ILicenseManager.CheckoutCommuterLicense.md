# ILicenseManager.CheckoutCommuterLicense

ILicenseManager.CheckoutCommuterLicense
-


# ILicenseManager.CheckoutCommuterLicense


## Синтаксис


CheckoutCommuterLicense(FeatureName: String): [UiLicenseStatusCode](ForeSys.chm::/Enums/UiLicenseStatusCode.htm);


## Параметры


FeatureName. Наименование единицы
 лицензирования.


## Описание


Метод CheckoutCommuterLicense
 получает локальную лицензию с сервера лицензий, которая позволяет временно
 использовать приложение вне сетевого окружения.


## Комментарии


Метод актуален при использовании сетевой лицензии, которая позволяет
 получать [временные
 локальные лицензии](Setup.chm::/08_Licensing/Admin_Licensing_Variants.htm#network).


По истечении периода использования лицензию необходимо вернуть на сервер
 лицензий с помощью метода [ILicenseManager.CheckinCommuterLicense](ILicenseManager.CheckinCommuterLicense.htm).
 Если на сервере лицензий единицы лицензирования имеют ограничение по количеству
 пользователей, то при получении временной лицензии количество одновременно
 работающих пользователей сокращается на одного, при возвращении лицензии
 количество одновременно работающих пользователей восстанавливается.


Примечание.
 Некоторые сетевые лицензии позволяют использовать приложение вне сетевого
 окружения до 30 дней, например, для использования на ноутбуках в командировках.
 Для этого сетевая лицензия позволяет [получить временную
 локальную лицензию](Setup.chm::/08_Licensing/RMS/Intro_LicenseManager.htm#checkingout_licenses).


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

    If FeatureInfo.CommuterAllowed Then

        StatusCode := LicManager.CheckoutCommuterLicense(Feature);

        If StatusCode = UiLicenseStatusCode.Success Then

            WinApplication.InformationBox("Лицензия взята успешно");

        Else

            WinApplication.InformationBox("Ошибка: " + StatusCode.ToString);

        End If;

    End If;

End Sub Button1OnClick;


Введите в Editbox наименование предустановленной единицы лицензирования,
 например PP_OLAP, и нажмите на кнопку. Для указанной единицы лицензирования
 будет получена временная локальная лицензия, если это возможно, а также
 будет выдано сообщение с результатом взятия временной лицензии или с [кодом](ForeSys.chm::/Enums/UiLicenseStatusCode.htm)
 возникшей ошибки.


См. также:


[ILicenseManager](ILicenseManager.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
