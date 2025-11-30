# IRdsDictionaryTranslations.Name

IRdsDictionaryTranslations.Name
-


# IRdsDictionaryTranslations.Name


## Синтаксис


Name(Locale: [LocaleCodeID](ForeSys.chm::/Enums/LocaleCodeID.htm)):
 String;


## Параметры


Locale. Уникальный числовой
 идентификатор языка.


## Описание


Свойство Name определяет наименование
 справочника на указанном языке.


## Комментарии


В качестве параметра Locale
 нельзя указывать значение LocaleCodeID.None.


Если в Locale указан язык,
 настройка для которого не существует, то она будет добавлена в конец коллекции.
 Значение свойства [IRdsDictionaryTranslations.Count](IRdsDictionaryTranslations.Count.htm)
 увеличивается на единицу.


## Пример


Использование свойства приведено в примере для [IRdsDictionary.Translations](../IRdsDictionary/IRdsDictionary.Translations.htm).


См. также:


[IRdsDictionaryTranslations](IRdsDictionaryTranslations.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
