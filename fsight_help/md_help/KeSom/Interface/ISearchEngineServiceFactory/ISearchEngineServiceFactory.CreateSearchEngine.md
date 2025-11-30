# ISearchEngineServiceFactory.CreateSearchEngine

ISearchEngineServiceFactory.CreateSearchEngine
-


# ISearchEngineServiceFactory.CreateSearchEngine


## Синтаксис


CreateSearchEngine(pMetabase: [IMetabase](../IMetabase/IMetabase.htm)):
 [ISearchEngineServiceBase](../ISearchEngineServiceBase/ISearchEngineServiceBase.htm);


## Параметры


pMeatabase. Репозиторий, для
 которого инициализируется платформа BI-поиска.


## Описание


Метод CreateSearchEngine инициализирует
 новый экземпляр поискового сервиса.


## Комментарии


Полученный экземпляр поискового сервиса может использоваться для индексации
 источников и выполнения BI-поиска.


## Пример


Пример использования приведен в описании методов [ISearchEngineServiceBase.SaveToXml](../ISearchEngineServiceBase/ISearchEngineServiceBase.SaveToXml.htm),
 [ISearchEngineServiceBase.LoadFromXml](../ISearchEngineServiceBase/ISearchEngineServiceBase.LoadFromXml.htm).


См. также:


[ISearchEngineServiceFactory](ISearchEngineServiceFactory.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
