# ISearchEngineServiceFactory

ISearchEngineServiceFactory
-


# ISearchEngineServiceFactory


Сборка: Metabase;


## Описание


Интерфейс ISearchEngineServiceFactory
 содержит метод для инициализации нового поискового сервиса.


## Иерархия наследования


ISearchEngineServiceFactory


## Комментарии


Поисковый сервис позволяет индексировать структуру/метаданные многомерных
 источников данных репозитория, а затем производить поиск по индексированным
 данным.


В «Форсайт. Аналитическая платформа»
 на базе поисковой платформы Apache Solr реализован [сервис BI-поиска](Setup.chm::/BISearch/BISearch_Setup.htm).
 Для работы с ним используйте интерфейс [ISolrSearchEngineService](KeBISearch.chm::/Interface/ISolrSearchEngineService/ISolrSearchEngineService.htm).


## Методы


		 Имя метода
		 Краткое описание


		 ![](../../Sub_Image.gif)
		 [CreateSearchEngine](ISearchEngineServiceFactory.CreateSearchEngine.htm)
		 Метод CreateSearchEngine
		 инициализирует новый экземпляр поисковой платформы.


См. также:


[Интерфейсы
 сборки Metabase](../KeSom_Interface.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
