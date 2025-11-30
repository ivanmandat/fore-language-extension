# Введение: Сборка BISearch

Введение: Сборка BISearch
-


# Введение в сборку BISearch


В данном разделе представлено описание сборки BISearch,
 содержащей средства для индексации и поиска на языках Fore. В интерфейсах
 сборки реализованы все необходимые средства для настройки параметров поискового
 сервиса, подключения к нему, задание параметров и проведения индексации,
 а также различные варианты поиска.


Основными интерфейсами сборки BISearch
 являются:


	- [ISearchEngineService](../Interface/ISearchEngineService/ISearchEngineService.htm) -
	 базовый интерфейс, используемый для получения доступа к параметрам
	 индексации и поиска.


	- IImportExecutor - получение
	 доступа к параметрам индексации, осуществление индексации.


	- [ISearchExecutor](../Interface/ISearchExecutor/ISearchExecutor.htm)
	 - получение доступа к параметрам поиска, поиск и получение результатов.


	- [ISolrOperations](../Interface/ISolrOperations/ISolrOperations.htm)
	 - используется для взаимодействия и получения различных параметров
	 поисковой платформы Apache Solr.


Более подробно об этапах работы
 с интерфейсами и их взаимодействием читайте в подразделах:


	- [Получение доступа к поисковому сервису](get_access.htm).


	- [Индексация](indexing.htm).


	- [Поиск](BISearchData.htm).


	- [Иерархия
	 сборки BISearch](KeBISearch_Hierarchy.htm).


См. также:


[Интерфейсы
 сборки BISearch](../Interface/KeBISearch_Interface.htm) | [Перечисления
 сборки BISearch](../Enums/KeBISearch_Enums.htm) | [Классы сборки
 BISearch](../Class/KeBISearch_Class.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
