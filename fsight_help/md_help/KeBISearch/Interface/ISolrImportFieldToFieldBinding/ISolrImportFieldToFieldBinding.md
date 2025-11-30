# ISolrImportFieldToFieldBinding

ISolrImportFieldToFieldBinding
-


# ISolrImportFieldToFieldBinding


Сборка: BISearch;


## Описание


Интерфейс ISolrImportFieldToFieldBinding
 содержит свойства для привязки пользовательского поля к другому полю.


## Иерархия наследования


           [ISolrImportFieldBinding](../ISolrImportFieldBinding/ISolrImportFieldBinding.htm)


           ISolrImportFieldToFieldBinding


## Комментарии


Интерфейс используется, если при [создании
 привязки](../ISolrImportFieldBindings/ISolrImportFieldBindings.AddBinding.htm) выбран тип - [SolrFieldBindingType.ByField](../../Enums/SolrFieldBindingType.htm).
 Для настройки параметров приведите привязку, описываемую интерфейсом [ISolrImportFieldBinding](../ISolrImportFieldBinding/ISolrImportFieldBinding.htm),
 к интерфейсу ISolrImportFieldToFieldBinding.


## Свойства


		 Имя свойства
		 Краткое описание


		 ![](../../Property_Image.gif)
		 [SourceField](ISolrImportFieldToFieldBinding.SourceField.htm)
		 Свойство SourceField
		 определяет поле, к которому осуществляется привязка.


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
