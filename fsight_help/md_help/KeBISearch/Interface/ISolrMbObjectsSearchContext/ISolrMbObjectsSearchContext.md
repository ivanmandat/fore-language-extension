# ISolrMbObjectsSearchContext

ISolrMbObjectsSearchContext
-


# ISolrMbObjectsSearchContext


Сборка: BISearch;


## Описание


Интерфейс ISolrMbObjectsSearchContext
 содержит свойства для настройки контекста поиска индексированных метаданных
 различных объектов репозитория в Apache Solr.


## Иерархия наследования


           [ISearchEngineSearchContext](../ISearchEngineSearchContext/ISearchEngineSearchContext.htm)


           [ISolrSearchContext](../ISolrSearchContext/ISolrSearchContext.htm)


           ISolrMbObjectsSearchContext


## Комментарии


Для создания контекста используйте метод [ISearchExecutor.CreateContext](../ISearchExecutor/ISearchExecutor.CreateContext.htm)
 и приведите результат его выполнения к интерфейсу ISolrMbObjectsSearchContext.
 Настроенный контекст в дальнейшем используется методом [ISearchExecutor.Search](../ISearchExecutor/ISearchExecutor.Search.htm).


## Свойства


		 Имя свойства
		 Краткое описание


		 ![](../../Property_Image.gif)
		 [NeedDocumentContent](ISolrMbObjectsSearchContext.NeedDocumentContent.htm)
		 Свойство NeedDocumentContent
		 определяет признак загрузки содержимого объектов «Документ».


## Свойства, унаследованные от [ISolrSearchContext](../ISolrSearchContext/ISolrSearchContext.htm)


		 Имя свойства
		 Краткое описание


		 ![](../../Property_Image.gif)
		 [FilterContext](../ISolrSearchContext/ISolrSearchContext.FilterContext.htm)
		 Свойство FilterContext
		 возвращает параметры фильтрации результатов поиска.


		 ![](../../Property_Image.gif)
		 [ItemsOnPage](../ISolrSearchContext/ISolrSearchContext.ItemsOnPage.htm)
		 Свойство ItemsOnPage
		 определяет количество результатов, доступных на одной странице.


		 ![](../../Property_Image.gif)
		 [Locale](../ISolrSearchContext/ISolrSearchContext.Locale.htm)
		 Свойство Locale определяет
		 идентификатор языка, на котором осуществляется поиск.


		 ![](../../Property_Image.gif)
		 [Page](../ISolrSearchContext/ISolrSearchContext.Page.htm)
		 Свойство Page определяет
		 номер страницы с результатами, которая будет загружена после поиска.


		 ![](../../Property_Image.gif)
		 [RelevanceImpactFormula](../ISolrSearchContext/ISolrSearchContext.RelevanceImpactFormula.htm)
		 Свойство RelevanceImpactFormula
		 определяет формулу влияния на релевантность поиска.


		 ![](../../Property_Image.gif)
		 [SearchType](../ISolrSearchContext/ISolrSearchContext.SearchType.htm)
		 Свойство SearchType
		 определяет тип поиска.


		 ![](../../Property_Image.gif)
		 [SortContext](../ISolrSearchContext/ISolrSearchContext.SortContext.htm)
		 Свойство SortContext
		 возвращает параметры сортировки результатов поиска.


## Свойства, унаследованные от [ISearchEngineSearchContext](../ISearchEngineSearchContext/ISearchEngineSearchContext.htm)


		 Имя свойства
		 Краткое описание


		 ![](../../Property_Image.gif)
		 [Text](../ISearchEngineSearchContext/ISearchEngineSearchContext.Text.htm)
		 Свойство Text определяет
		 текст поискового запроса.


См. также:


[Интерфейсы
 сборки BISearch](../KeBISearch_Interface.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
