# LicenseManager

LicenseManager
-


# LicenseManager


Сборка: Host;


## Описание


Класс LicenseManager реализует
 объект, предназначенный для управления лицензиями.


## Свойства объекта класса, унаследованные от [ILicenseManager](../../Interface/ILicenseManager/ILicenseManager.htm)


		 Имя свойства
		 Краткое описание


		 ![](../../Property_Image.gif)


		 [FeatureDescription](../../Interface/ILicenseManager/ILicenseManager.FeatureDescription.htm)


		 Свойство FeatureDescription
		 возвращает наименование системной единицы лицензирования.


		 ![](../../Property_Image.gif)
		 [IsStandalone](../../Interface/ILicenseManager/ILicenseManager.IsStandalone.htm)


		 Свойство IsStandalone
		 возвращает значение True, если используется автономная
		 лицензия (standalone), в противном случае возвращает False.


		 ![](../../Property_Image.gif)
		 [Server](../../Interface/ILicenseManager/ILicenseManager.Server.htm)


		 Свойство Server
		 возвращает имя сервера лицензий, с которого используется лицензия.


## Методы объекта класса, унаследованные от [ILicenseManager](../../Interface/ILicenseManager/ILicenseManager.htm)


		 Имя метода
		 Краткое описание


		 ![](../../Sub_Image.gif)
		 [AddFeature](../../Interface/ILicenseManager/ILicenseManager.AddFeature.htm)


		 Метод AddFeature
		 добавляет код лицензии.


		 ![](../../Sub_Image.gif)
		 [CheckinCommuterLicense](../../Interface/ILicenseManager/ILicenseManager.CheckinCommuterLicense.htm)


		 Метод CheckinCommuterLicense
		 возвращает локальную лицензию на сервер лицензий, которая позволяла
		 временно использовать приложение вне сетевого окружения.


		 ![](../../Sub_Image.gif)
		 [CheckoutCommuterLicense](../../Interface/ILicenseManager/ILicenseManager.CheckoutCommuterLicense.htm)


		 Метод CheckoutCommuterLicense
		 получает локальную лицензию с сервера лицензий, которая позволяет
		 временно использовать приложение вне сетевого окружения.


		 ![](../../Sub_Image.gif)
		 [CommuterInfo](../../Interface/ILicenseManager/ILicenseManager.CommuterInfo.htm)


		 Метод CommuterInfo
		 получает информацию о временной локальной единице лицензирования,
		 полученной с сервера лицензий.


		 ![](../../Sub_Image.gif)
		 [DeleteFeature](../../Interface/ILicenseManager/ILicenseManager.DeleteFeature.htm)


		 Метод DeleteFeature
		 удаляет код лицензии из текущей сессии.


		 ![](../../Sub_Image.gif)
		 [FeatureInfo](../../Interface/ILicenseManager/ILicenseManager.FeatureInfo.htm)


		 Метод FeatureInfo
		 получает информацию о единице лицензирования.


		 ![](../../Sub_Image.gif)
		 [GetAllFeatures](../../Interface/ILicenseManager/ILicenseManager.GetAllFeatures.htm)


		 Метод GetAllFeatures
		 возвращает список всех доступных единиц лицензирования.


		 ![](../../Sub_Image.gif)
		 [IsCheckedOut](../../Interface/ILicenseManager/ILicenseManager.IsCheckedOut.htm)


		 Метод IsCheckedOut
		 проверяет, была ли взята временная локальная лицензия с сервера
		 лицензий.


		 ![](../../Sub_Image.gif)
		 [RequestLicense](../../Interface/ILicenseManager/ILicenseManager.RequestLicense.htm)


		 Метод RequestLicense
		 проверяет наличие заданной единицы лицензирования в лицензии и
		 возвращает результат проверки.


См. также:


[Классы
 сборки Host](../KeHost_Class.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
