# ISearchExecutor.CreateContext

ISearchExecutor.CreateContext
-


# ISearchExecutor.CreateContext


## Синтаксис


CreateContext: [ISearchEngineSearchContext](../ISearchEngineSearchContext/ISearchEngineSearchContext.htm);


## Описание


Метод CreateContext создает
 контекст для осуществления поиска.


## Комментарии


В зависимости от того, какой тип поискового сервиса был [выбран](../ISearchEngineSchema/ISearchEngineSchema.SearchExecutor.htm)
 при получении интерфейса [ISearchExecutor](ISearchExecutor.htm),
 результат метода CreateContext
 необходимо привести к одному из следующих интерфейсов:


	- [ISolrMbObjectsSearchContext](../ISolrMbObjectsSearchContext/ISolrMbObjectsSearchContext.htm).
	 Для поиска по индексированным метаданным объектов репозитория;


	- [ISolrSourceDataSearchContext](../ISolrSourceDataSearchContext/ISolrSourceDataSearchContext.htm).
	 Для поиска по индексированным структурам источников данных и свободным
	 измерениям.


## Пример


Пример использования приведён в описании метода [ISearchExecutor.Search](ISearchExecutor.Search.htm).


См. также:


[ISearchExecutor](ISearchExecutor.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
