# ISolrImportDocumentExtensionBinding

ISolrImportDocumentExtensionBinding
-


# ISolrImportDocumentExtensionBinding


Сборка: BISearch;


## Описание


Интерфейс ISolrImportDocumentExtensionBinding
 содержит свойства для привязки пользовательского поля к внешнему источнику
 данных.


## Иерархия наследования


           [ISolrImportFieldBinding](../ISolrImportFieldBinding/ISolrImportFieldBinding.htm)


           ISolrImportDocumentExtensionBinding


## Комментарии


Интерфейс используется, если при [создании
 привязки](../ISolrImportFieldBindings/ISolrImportFieldBindings.AddBinding.htm) выбран тип - [SolrFieldBindingType.ByDocumentExtension](../../Enums/SolrFieldBindingType.htm). Для настройки
 параметров приведите привязку, описываемую интерфейсом [ISolrImportFieldBinding](../ISolrImportFieldBinding/ISolrImportFieldBinding.htm),
 к интерфейсу ISolrImportAttributeFieldBinding.


## Свойства


		 Имя свойства
		 Краткое описание


		 ![](../../Property_Image.gif)
		 [Element](ISolrImportDocumentExtensionBinding.Element.htm)
		 Свойство Element определяет
		 индекс элемента, данные по которому будут подставляться в качестве
		 значений пользовательского атрибута.


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
