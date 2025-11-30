# IRdsAttributeTranslations

IRdsAttributeTranslations
-


# IRdsAttributeTranslations


## Описание


Интерфейс IRdsAttributeTranslations
 предназначен для работы с коллекцией настроек, содержащих параметры перевода
 наименования атрибута справочника НСИ на различные языки.


## Комментарии


Изначально в коллекции содержится настройка для языка, установленного
 по умолчанию для репозитория пользователя. Чтобы переводить наименование
 атрибута справочника на различные языки необходимо установить значение
 True в свойства [IRdsDictionaryTranslations.IsOn](../IRdsDictionaryTranslations/IRdsDictionaryTranslations.IsOn.htm)
 и [IRdsAttributeTranslations.IsOn](IRdsAttributeTranslations.IsOn.htm).


Для работы с элементами коллекции предназначен интерфейс [IRdsAttributeTranslation](../IRdsAttributeTranslation/IRdsAttributeTranslation.htm).


## Свойства


		 Имя свойства
		 Краткое описание


		 ![](../../Property_Image.gif)
		 [Attribute](IRdsAttributeTranslations.Attribute.htm)


		 Свойство Attribute
		 определяет дополнительный атрибут, предназначенный для перевода.


		 ![](../../Property_Image.gif)
		 [DefaultAttribute](IRdsAttributeTranslations.DefaultAttribute.htm)


		 Свойство DefaultAttribute
		 возвращает основной атрибут, значения которого должны переводится
		 на различные языки.


		 ![](../../Property_Image.gif)
		 [IsOn](IRdsAttributeTranslations.IsOn.htm)


		 Свойство IsOn определяет,
		 переводить ли значения атрибута на различные языки.


		 ![](../../Property_Image.gif)
		 [IsTranslation](IRdsAttributeTranslations.IsTranslation.htm)


		 Свойство IsTranslation
		 возвращает признак того, является ли данный атрибут дополнительным
		 атрибутом, предназначенным для перевода.


		 ![](../../Property_Image.gif)
		 [Item](IRdsAttributeTranslations.Item.htm)


		 Свойство Item возвращает
		 настройку перевода атрибута для указанного языка.


		 ![](../../Property_Image.gif)
		 [Name](IRdsAttributeTranslations.Name.htm)


		 Свойство Name определяет
		 наименование атрибута на указанном языке.


		 ![](../../Property_Image.gif)
		 [TranslationLocale](IRdsAttributeTranslations.TranslationLocale.htm)


		 Свойство TranslationLocale
		 возвращает идентификатор языка, для перевода на который предназначен
		 атрибут.


См. также:


[Интерфейсы сборки Rds](../KeRds_Interface.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
