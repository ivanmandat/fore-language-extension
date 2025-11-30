# IRdsAttributeTranslation

IRdsAttributeTranslation
-


# IRdsAttributeTranslation


## Описание


Интерфейс IRdsAttributeTranslation
 предназначен для работы с настройкой перевода атрибута справочника НСИ.


## Комментарии


Настройка может быть только у строкового атрибута и она предназначена
 для работы с одним языком, возвращаемым свойством [Locale](IRdsAttributeTranslation.Locale.htm).
 У одного строкового атрибута может быть несколько настроек. Их количество
 соответствует количеству языков, на которые переводится справочник НСИ
 (свойство [IRdsDictionaryTranslations.Count](../IRdsDictionaryTranslations/IRdsDictionaryTranslations.Count.htm)).


## Свойства


		 Имя свойства
		 Краткое описание


		 ![](../../Property_Image.gif)
		 [Attribute](IRdsAttributeTranslation.Attribute.htm)


		 Свойство Attribute определяет
		 атрибут, для которого предназначена настройка.


		 ![](../../Property_Image.gif)
		 [Locale](IRdsAttributeTranslation.Locale.htm)


		 Свойство Locale возвращает
		 идентификатор языка, для которого предназначена настройка.


		 ![](../../Property_Image.gif)
		 [Name](IRdsAttributeTranslation.Name.htm)


		 Свойство Name определяет
		 наименование атрибута для языка настройки.


См. также:


[Интерфейсы сборки Rds](../KeRds_Interface.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
