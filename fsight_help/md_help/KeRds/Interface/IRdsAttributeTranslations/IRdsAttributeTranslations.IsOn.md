# IRdsAttributeTranslations.IsOn

IRdsAttributeTranslations.IsOn
-


# IRdsAttributeTranslations.IsOn


## Синтаксис


IsOn: Boolean;


## Описание


Свойство IsOn определяет, переводить
 ли значения атрибута на различные языки.


## Комментарии


Переведены могут быть лишь значения строковых атрибутов, если для справочника
 НСИ [разрешен
 перевод](../IRdsDictionaryTranslations/IRdsDictionaryTranslations.IsOn.htm) на различные языки.


Допустимые значения:


	- True. Значение атрибута
	 может быть переведено на различные языки;


	- False. Значение по умолчанию
	 для всех нестроковых атрибутов. Атрибут предназначен для работы на
	 одном языке и не требует перевода.


Для всех строковых атрибутов значение по умолчанию совпадает с текущим
 значением свойства [IRdsDictionaryTranslations.IsOn](../IRdsDictionaryTranslations/IRdsDictionaryTranslations.IsOn.htm).


## Пример


Использование свойства приведено в примере для [IRdsDictionary.Translations](../IRdsDictionary/IRdsDictionary.Translations.htm).


См. также:


[IRdsAttributeTranslations](IRdsAttributeTranslations.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
