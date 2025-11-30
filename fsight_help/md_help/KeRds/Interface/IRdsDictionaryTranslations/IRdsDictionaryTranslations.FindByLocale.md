# IRdsDictionaryTranslations.FindByLocale

IRdsDictionaryTranslations.FindByLocale
-


# IRdsDictionaryTranslations.FindByLocale


## Синтаксис


FindByLocale(Locale: [LocaleCodeID](ForeSys.chm::/Enums/LocaleCodeID.htm)):
 [IRdsDictionaryTranslation](../IRdsDictionaryTranslation/IRdsDictionaryTranslation.htm);


## Параметры


Locale. Уникальный числовой
 идентификатор языка.


## Описание


Метод FindByLocale осуществляет
 поиск настройки для указанного языка в коллекции.


## Комментарии


Если поиск прошел успешно, то метод возвращает настройку для языка,
 указанного в параметре Locale.
 Если настройки для указанного языка в коллекции не существует, то метод
 возвращает значение Null.


## Пример


Использование свойства приведено в примере для [IRdsDictionary.Translations](../IRdsDictionary/IRdsDictionary.Translations.htm).


См. также:


[IRdsDictionaryTranslations](IRdsDictionaryTranslations.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
