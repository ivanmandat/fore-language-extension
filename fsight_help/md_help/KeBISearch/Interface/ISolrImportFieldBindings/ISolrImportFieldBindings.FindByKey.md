# ISolrImportFieldBindings.FindByKey

ISolrImportFieldBindings.FindByKey
-


# ISolrImportFieldBindings.FindByKey


## Синтаксис


FindByKey(Key: Integer): [ISolrImportFieldBinding](../ISolrImportFieldBinding/ISolrImportFieldBinding.htm);


## Параметры


Key. Ключ параметров привязки
 пользовательского поля.


## Описание


Метод FindByKey осуществляет
 поиск параметров привязки по ключу.


## Комментарии


Метод возвращает параметры привязки в случае удачного поиска и Null, если параметры привязки с
 указанным ключом не существуют.


В зависимости от [типа
 привязки](../ISolrImportFieldBinding/ISolrImportFieldBinding.Type.htm) для определения дополнительных параметров приведите результат
 выполнения метода к одному из следующих интерфейсов:


	- [ISolrImportAttributeFieldBinding](../ISolrImportAttributeFieldBinding/ISolrImportAttributeFieldBinding.htm);


	- [ISolrImportFieldToFieldBinding](../ISolrImportFieldToFieldBinding/ISolrImportFieldToFieldBinding.htm);


	- [ISolrImportDocumentExtensionBinding](../ISolrImportDocumentExtensionBinding/ISolrImportDocumentExtensionBinding.htm).


## Пример


Пример работы с коллекцией ISolrImportFieldBindings приведён в описании
 свойств [ISolrImportAttributeFieldBinding.Dimension](../ISolrImportAttributeFieldBinding/ISolrImportAttributeFieldBinding.Dimension.htm),
 [ISolrImportFieldToFieldBinding.SourceField](../ISolrImportFieldToFieldBinding/ISolrImportFieldToFieldBinding.SourceField.htm),
 [ISolrImportDocumentExtensionBinding.Element](../ISolrImportDocumentExtensionBinding/ISolrImportDocumentExtensionBinding.Element.htm).


См. также:


[ISolrImportFieldBindings](ISolrImportFieldBindings.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
