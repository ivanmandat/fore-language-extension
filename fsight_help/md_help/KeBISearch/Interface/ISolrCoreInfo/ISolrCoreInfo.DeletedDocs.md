# ISolrCoreInfo.DeletedDocs

ISolrCoreInfo.DeletedDocs
-


# ISolrCoreInfo.DeletedDocs


## Синтаксис


DeletedDocs: Integer;


## Описание


Свойство DeletedDocs возвращает
 количество документов Solr, которые были удалены.


## Комментарии


В документах Solr хранятся индексированные данные. Для удаления определенных
 документов используйте метод [ISolrOperations.RemoveDocsByFieldName](../ISolrOperations/ISolrOperations.RemoveDocsByFieldName.htm),
 для удаления всех документов, созданных для определенного экземпляра Solr
 - метод [ISolrOperations.ClearAll](../ISolrOperations/ISolrOperations.ClearAll.htm).


## Пример


Пример использования приведён в описании метода [ISolrOperations.GetOverview](../ISolrOperations/ISolrOperations.GetOverview.htm).


См. также:


[ISolrCoreInfo](ISolrCoreInfo.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
