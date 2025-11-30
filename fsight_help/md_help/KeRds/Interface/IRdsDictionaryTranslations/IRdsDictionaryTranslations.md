# IRdsDictionaryTranslations

IRdsDictionaryTranslations
-


# IRdsDictionaryTranslations


## Описание


Интерфейс IRdsDictionaryTranslations
 предназначен для работы с коллекцией настроек, содержащих параметры перевода
 справочники НСИ на различные языки.


## Комментарии


Данная коллекция позволяет создавать мультиязычные справочники НСИ.
 Все его элементы и наименования атрибутов будут отображаться на языке,
 установленном по умолчанию для [репозитория](KeSom.chm::/Interface/IMetabase/IMetabase.DefaultLocale.htm).
 Если перевод справочника для текущего языка репозитория не предусмотрен,
 то справочник отображается на языке, установленном по умолчанию для справочника.


Изначально в коллекции содержится настройка для языка, установленного
 по умолчанию для репозитория пользователя. Чтобы настройки из коллекции
 применялись к справочнику НСИ для него должен быть разрешен перевод на
 другие языки, т.е. свойство [IRdsDictionaryTranslations.IsOn](IRdsDictionaryTranslations.IsOn.htm)
 установлено в True.


## Свойства


		 Имя свойства
		 Краткое описание


		 ![](../../Property_Image.gif)
		 [Count](IRdsDictionaryTranslations.Count.htm)


		 Свойство Count возвращает
		 количество языков, на которые переводится справочник.


		 ![](../../Property_Image.gif)
		 [DefaultLocale](IRdsDictionaryTranslations.DefaultLocale.htm)


		 Свойство DefaultLocale
		 возвращает язык по умолчанию для справочника.


		 ![](../../Property_Image.gif)
		 [IsOn](IRdsDictionaryTranslations.IsOn.htm)


		 Свойство IsOn определяет,
		 переводить ли справочник на различные языки.


		 ![](../../Property_Image.gif)
		 [Item](IRdsDictionaryTranslations.Item.htm)


		 Свойство Item возвращает
		 настройку из коллекции по индексу.


		 ![](../../Property_Image.gif)
		 [Locale](IRdsDictionaryTranslations.Locale.htm)


		 Свойство Locale возвращает
		 уникальный числовой идентификатор языка, для которого предназначена
		 настройка с указанным индексом.


		 ![](../../Property_Image.gif)
		 [Name](IRdsDictionaryTranslations.Name.htm)


		 Свойство Name определяет
		 наименование справочника на указанном языке.


## Методы


		 Имя метода
		 Краткое описание


		 ![](../../Sub_Image.gif)
		 [Add](IRdsDictionaryTranslations.Add.htm)


		 Метод Add добавляет
		 настройку для указанного языка в коллекцию.


		 ![](../../Sub_Image.gif)
		 [Clear](IRdsDictionaryTranslations.Clear.htm)


		 Метод Clear очищает
		 коллекцию настроек.


		 ![](../../Sub_Image.gif)
		 [FindByLocale](IRdsDictionaryTranslations.FindByLocale.htm)


		 Метод FindByLocale
		 осуществляет поиск настройки для указанного языка в коллекции.


		 ![](../../Sub_Image.gif)
		 [Remove](IRdsDictionaryTranslations.Remove.htm)


		 Метод Remove удаляет
		 настройку с указанным индексом из коллекции.


		 ![](../../Sub_Image.gif)
		 [RemoveByLocale](IRdsDictionaryTranslations.RemoveByLocale.htm)


		 Метод RemoveByLocale
		 удаляет настройку для указанного языка из коллекции.


См. также:


[Интерфейсы сборки Rds](../KeRds_Interface.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
