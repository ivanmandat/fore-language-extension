# PP.App.getEnabledLicenseFeature

PP.App.getEnabledLicenseFeature
-


# PP.App.getEnabledLicenseFeature


## Синтаксис


getEnabledLicenseFeature(licenseFeatureType): Boolean;


## Параметры


licenseFeatureType. String.
 Тип модуля.


## Описание


Метод getEnabledLicenseFeature
 возвращает информацию о наличии лицензии для выбранного модуля.


## Комментарии


Доступные типы модулей можно получить из свойства PP.AppConfig.Licenses.


## Пример


Для выполнения примера запустите веб-приложение. В консоли введем следующий
 код:


// Определим наличие лицензии на аналитические запросы
PP.App.getEnabledLicenseFeature("OLAP");
// -> true
В результате выполнения примера была получена информация о наличии лицензии
 модуля аналитические запросы.


См. также:


[PP.App](../PP.App.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
