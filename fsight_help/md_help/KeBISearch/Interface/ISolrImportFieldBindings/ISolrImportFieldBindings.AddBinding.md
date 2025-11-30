# ISolrImportFieldBindings.AddBinding

ISolrImportFieldBindings.AddBinding
-


# ISolrImportFieldBindings.AddBinding


## Синтаксис


AddBinding(Type: [SolrFieldBindingType](../../Enums/SolrFieldBindingType.htm);
 Field: [ISolrField](../ISolrField/ISolrField.htm)): [ISolrImportFieldBinding](../ISolrImportFieldBinding/ISolrImportFieldBinding.htm);


## Параметры


Type. Тип привязки пользовательского
 поля.


Field. Пользовательское поле.


## Описание


Метод AddBinding создает привязку
 для автоматического заполнения значений пользовательского поля.


## Комментарии


В зависимости от указанного способа привязки для определения дополнительных
 параметров приведите результат выполнения метода к одному из следующих
 интерфейсов:


	- [ISolrImportAttributeFieldBinding](../ISolrImportAttributeFieldBinding/ISolrImportAttributeFieldBinding.htm);


	- [ISolrImportFieldToFieldBinding](../ISolrImportFieldToFieldBinding/ISolrImportFieldToFieldBinding.htm);


	- [ISolrImportDocumentExtensionBinding](../ISolrImportDocumentExtensionBinding/ISolrImportDocumentExtensionBinding.htm).


## Пример


Пример использования приведён в описании свойств [ISolrImportAttributeFieldBinding.Dimension](../ISolrImportAttributeFieldBinding/ISolrImportAttributeFieldBinding.Dimension.htm),
 [ISolrImportFieldToFieldBinding.SourceField](../ISolrImportFieldToFieldBinding/ISolrImportFieldToFieldBinding.SourceField.htm),
 [ISolrImportDocumentExtensionBinding.Element](../ISolrImportDocumentExtensionBinding/ISolrImportDocumentExtensionBinding.Element.htm).


См. также:


[ISolrImportFieldBindings](ISolrImportFieldBindings.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
