# ISolrSearchContext.Page

ISolrSearchContext.Page
-


# ISolrSearchContext.Page


## Синтаксис


Page: Integer;


## Описание


Свойство Page определяет номер
 страницы с результатами, которая будет загружена после поиска.


## Комментарии


После поиска Solr разбивает все результаты на отдельные страницы. Количество
 результатов на одной странице задается в свойстве [ISolrSearchContext.ItemsOnPage](ISolrSearchContext.ItemsOnPage.htm).
 В результате метода [ISearchExecutor.Search](../ISearchExecutor/ISearchExecutor.Search.htm)
 будут доступны результаты страницы с номером Page.


## Пример


Пример использования приведён в описании свойства [ISolrSearchContext.ItemsOnPage](ISolrSearchContext.ItemsOnPage.htm).


См. также:


[ISolrSearchContext](ISolrSearchContext.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
