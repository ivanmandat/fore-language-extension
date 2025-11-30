# ILicenseManager.IsCheckedOut

ILicenseManager.IsCheckedOut
-


# ILicenseManager.IsCheckedOut


## Синтаксис


IsCheckedOut(FeatureName: String): Boolean;


## Параметры


FeatureName. Наименование единицы
 лицензирования.


## Описание


Метод IsCheckedOut проверяет,
 была ли взята временная локальная лицензия с сервера лицензий.


## Комментарии


Метод возвращает значение True,
 если локальная лицензия была взята с сервера лицензий, и False,
 если локальная лицензия не была получена с сервера лицензий.


Метод актуален при использовании
 сетевой лицензии, которая позволяет получать [временные
 локальные лицензии](Setup.chm::/08_Licensing/Admin_Licensing_Variants.htm#network).


Использование метода приведено в примере для [ILicenseManager.CheckinCommuterLicense](ILicenseManager.CheckinCommuterLicense.htm).


См. также:


[ILicenseManager](ILicenseManager.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
