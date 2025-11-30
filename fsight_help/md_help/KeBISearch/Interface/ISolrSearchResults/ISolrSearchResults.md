# ISolrSearchResults

ISolrSearchResults
-


# ISolrSearchResults


Сборка: BISearch;


## Описание


Интерфейс ISolrSearchResults
 содержит свойства для работы с результатами поиска поискового сервиса
 на базе Apache Solr.


## Иерархия наследования


           [ISearchResults](../ISearchResults/ISearchResults.htm)


           ISolrSearchResults


## Комментарии


Результаты поиска возвращает метод [ISearchExecutor.Search](../ISearchExecutor/ISearchExecutor.Search.htm).
 Приведите полученный результат к интерфейсу ISolrSearchResults.


## Свойства


		 Имя свойства
		 Краткое описание


		 ![](../../Property_Image.gif)
		 [FacetSearchResults](ISolrSearchResults.FacetSearchResults.htm)
		 Свойство FacetSearchResults
		 возвращает результат [фасетного поиска](UiNav.chm::/Glossary.htm#facetsearch).


## Свойства, унаследованные от [ISearchResults](../ISearchResults/ISearchResults.htm)


		 Имя свойства
		 Краткое описание


		 ![](../../Property_Image.gif)
		 [Count](../ISearchResults/ISearchResults.Count.htm)
		 Свойство Count возвращает
		 количество загруженных результатов поиска.


		 ![](../../Property_Image.gif)
		 [Item](../ISearchResults/ISearchResults.Item.htm)
		 Свойство Item возвращает
		 указанную запись с результатами поиска.


		 ![](../../Property_Image.gif)
		 [TotalCount](../ISearchResults/ISearchResults.TotalCount.htm)
		 Свойство TotalCount
		 возвращает общее количество записей с результатами поиска.


См. также:


[Интерфейсы
 сборки BISearch](../KeBISearch_Interface.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
