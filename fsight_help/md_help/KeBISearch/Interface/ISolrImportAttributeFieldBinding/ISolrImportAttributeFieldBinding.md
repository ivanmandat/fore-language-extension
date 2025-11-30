# ISolrImportAttributeFieldBinding

ISolrImportAttributeFieldBinding
-


# ISolrImportAttributeFieldBinding


Сборка: BISearch;


## Описание


Интерфейс ISolrImportAttributeFieldBinding
 содержит свойства для привязки пользовательского поля к атрибуту измерения.


## Иерархия наследования


           [ISolrImportFieldBinding](../ISolrImportFieldBinding/ISolrImportFieldBinding.htm)


           ISolrImportAttributeFieldBinding


## Комментарии


Интерфейс используется, если при [создании
 привязки](../ISolrImportFieldBindings/ISolrImportFieldBindings.AddBinding.htm) выбран тип - [SolrFieldBindingType.ByAttribute](../../Enums/SolrFieldBindingType.htm).
 Для настройки параметров приведите привязку, описываемую интерфейсом [ISolrImportFieldBinding](../ISolrImportFieldBinding/ISolrImportFieldBinding.htm),
 к интерфейсу ISolrImportAttributeFieldBinding.


## Свойства


		 Имя свойства
		 Краткое описание


		 ![](../../Property_Image.gif)
		 [Attribute](ISolrImportAttributeFieldBinding.Attribute.htm)
		 Свойство Attribute
		 определяет атрибут измерения, значения которого будут подставляться
		 в качестве значения пользовательского поля при индексации.


		 ![](../../Property_Image.gif)
		 [Dimension](ISolrImportAttributeFieldBinding.Dimension.htm)
		 Свойство Dimension
		 определяет измерение источника данных, к атрибуту которого осуществляется
		 привязка.


## Свойства, унаследованные от [ISolrImportFieldBinding](../ISolrImportFieldBinding/ISolrImportFieldBinding.htm)


		 Имя свойства
		 Краткое описание


		 ![](../../Property_Image.gif)
		 [Field](../ISolrImportFieldBinding/ISolrImportFieldBinding.Field.htm)
		 Свойство Field возвращает
		 пользовательское поле, для которого создана привязка.


		 ![](../../Property_Image.gif)
		 [Key](../ISolrImportFieldBinding/ISolrImportFieldBinding.Key.htm)
		 Свойство Key возвращает
		 ключ привязки.


		 ![](../../Property_Image.gif)
		 [Type](../ISolrImportFieldBinding/ISolrImportFieldBinding.Type.htm)
		 Свойство Type возвращает
		 тип привязки пользовательского поля.


См. также:


[Интерфейсы
 сборки BISearch](../KeBISearch_Interface.htm) | [ISolrSearchEngineSchema.Fields](../ISolrSearchEngineSchema/ISolrSearchEngineSchema.Fields.htm)
 | [Системные
 и пользовательские поля](Setup.chm::/BISearch/Desktop_application_setting.htm#fields)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
