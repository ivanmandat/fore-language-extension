# IRdsDictionaryTranslations.Add

IRdsDictionaryTranslations.Add
-


# IRdsDictionaryTranslations.Add


## Синтаксис


Add(Locale: [LocaleCodeID](ForeSys.chm::/Enums/LocaleCodeID.htm)):
 [IRdsDictionaryTranslation](../IRdsDictionaryTranslation/IRdsDictionaryTranslation.htm);


## Параметры


Locale. Уникальный числовой
 идентификатор языка.


## Описание


Метод Add добавляет настройку
 для указанного языка в коллекцию.


## Комментарии


Метод возвращает добавленную настройку. Настройка добавляется в конец
 коллекции, значение свойства [IRdsDictionaryTranslations.Count](IRdsDictionaryTranslations.Count.htm)
 увеличивается на единицу.


В качестве параметра Locale
 нельзя указывать значение LocaleCodeID.None.


При добавлении языковой настройки будут созданы дополнительные атрибуты
 справочника. Они создаются для всех строковых атрибутов, значения которых
 должны переводиться (свойство [IRdsAttributeTranslations.IsOn](../IRdsAttributeTranslations/IRdsAttributeTranslations.IsOn.htm)),
 и являются копиями данных атрибутов. Идентификатор дополнительных атрибутов
 будет состоять из идентификатора основного атрибута с добавлением суффикса
 - международной аббревиатуры языка. Например, при добавлении настройки
 перевода на английский язык (США) для атрибута «NAME» будет создан дополнительный
 атрибут «NAME_EN». Для всех дополнительных атрибутов перевода значение
 свойства [IRdsAttributeTranslations.IsTranslation](../IRdsAttributeTranslations/IRdsAttributeTranslations.IsTranslation.htm)
 - True.


## Пример


Использование свойства приведено в примере для [IRdsDictionary.Translations](../IRdsDictionary/IRdsDictionary.Translations.htm).


См. также:


[IRdsDictionaryTranslations](IRdsDictionaryTranslations.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
