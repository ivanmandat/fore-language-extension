# ISearchEngineImportScheduledTask.IsSharedEngine

ISearchEngineImportScheduledTask.IsSharedEngine
-


# ISearchEngineImportScheduledTask.IsSharedEngine


## Синтаксис


IsSharedEngine: Boolean;


## Описание


Свойство IsSharedEngine возвращает
 признак использования поискового сервиса, настроенного для репозитория.


## Комментарии


Допустимые значения:


	- True. Используется поисковый
	 сервис, настроенный для репозитория (Свойство [ISearchEngineImportScheduledTask.Engine](ISearchEngineImportScheduledTask.Engine.htm)
	 возвращает параметры поискового сервиса, заданного в [ISharedParams.SearchEngine](KeFore.chm::/Interface/ISharedParams/ISharedParams.SearchEngine.htm));


	- False. Используется
	 собственный поисковый сервис (В свойстве [ISearchEngineImportScheduledTask.Engine](ISearchEngineImportScheduledTask.Engine.htm)
	 заданы настройки собственного поискового сервиса).


См. также:


[ISearchEngineImportScheduledTask](ISearchEngineImportScheduledTask.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
