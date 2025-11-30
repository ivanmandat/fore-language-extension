# ISearchEngineImportScheduledTask.Engine

ISearchEngineImportScheduledTask.Engine
-


# ISearchEngineImportScheduledTask.Engine


## Синтаксис


Engine: [ISearchEngineService](../ISearchEngineService/ISearchEngineService.htm);


## Описание


Свойство Engine определяет поисковый
 сервис, с которым будет осуществляться работа.


## Комментарии


По умолчанию свойство возвращает поисковый сервис, который настроен
 для репозитория и доступен в свойстве [ISharedParams.SearchEngine](KeFore.chm::/Interface/ISharedParams/ISharedParams.SearchEngine.htm).


При необходимости можно [динамически
 создать](KeSom.chm::/Interface/ISearchEngineServiceFactory/ISearchEngineServiceFactory.CreateSearchEngine.htm) и настроить собственный поисковый сервис. После
 чего указать его в свойстве Engine
 для использования.


Примечание.
 Рекомендуется использовать поисковый сервис, настроенный для репозитория.


См. также:


[ISearchEngineImportScheduledTask](ISearchEngineImportScheduledTask.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
