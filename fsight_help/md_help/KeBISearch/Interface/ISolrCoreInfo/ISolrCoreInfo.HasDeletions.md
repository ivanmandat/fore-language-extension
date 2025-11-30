# ISolrCoreInfo.HasDeletions

ISolrCoreInfo.HasDeletions
-


# ISolrCoreInfo.HasDeletions


## Синтаксис


HasDeletions: Boolean;


## Описание


Свойство HasDeletions возвращает
 признак наличия удаленных документов экземпляра Solr.


## Комментарии


Если свойство возвращает значение True,
 то для текущего экземпляра Solr удалялись какие-либо документы. Количество
 удаленных документов возвращает свойство [ISolrCoreInfo.DeletedDocs](ISolrCoreInfo.DeletedDocs.htm).


## Пример


Пример использования приведён в описании метода [ISolrOperations.GetOverview](../ISolrOperations/ISolrOperations.GetOverview.htm).


См. также:


[ISolrCoreInfo](ISolrCoreInfo.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
