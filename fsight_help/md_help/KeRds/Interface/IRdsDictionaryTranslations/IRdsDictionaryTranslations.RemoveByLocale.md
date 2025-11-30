# IRdsDictionaryTranslations.RemoveByLocale

IRdsDictionaryTranslations.RemoveByLocale
-


# IRdsDictionaryTranslations.RemoveByLocale


## Синтаксис


RemoveByLocale(Locale: [LocaleCodeID](ForeSys.chm::/Enums/LocaleCodeID.htm)):
 Boolean;


## Параметры


Locale. Уникальный числовой
 идентификатор языка.


## Описание


Метод RemoveByLocale удаляет
 настройку для указанного языка из коллекции.


## Комментарии


В качестве параметра Locale
 нельзя указывать значение LocaleCodeID.None.


Если удаление прошло успешно, то метод возвращает значение True,
 значение свойства [IRdsDictionaryTranslations.Count](IRdsDictionaryTranslations.Count.htm)
 уменьшается на единицу; в обратном случае - False.


## Пример


Использование свойства приведено в примере для [IRdsDictionaryTranslations.Locale](IRdsDictionaryTranslations.Locale.htm).


См. также:


[IRdsDictionaryTranslations](IRdsDictionaryTranslations.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
