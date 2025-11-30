# ISolrSearchEngineSchema

ISolrSearchEngineSchema
-


# ISolrSearchEngineSchema


Сборка: BISearch;


## Описание


Интерфейс ISolrSearchEngineSchema
 содержит свойства и методы для настройки функциональности поискового сервиса
 на базе Apache Solr.


## Иерархия наследования


           [ISearchEngineSchema](../ISearchEngineSchema/ISearchEngineSchema.htm)


           ISolrSearchEngineSchema


## Комментарии


Для настройки функциональности поискового сервиса на базе Apache Solr
 приведите значение, которое возвращает свойство [ISearchEngineService.SearchEngineSchema](../ISearchEngineService/ISearchEngineService.SearchEngineSchema.htm),
 к интерфейсу ISolrSearchEngineSchema.


## Свойства


		 Имя свойства
		 Краткое описание


		 ![](../../Property_Image.gif)
		 [Fields](ISolrSearchEngineSchema.Fields.htm)
		 Свойство Fields возвращает
		 коллекцию полей, по которым хранятся индексированные данные.


		 ![](../../Property_Image.gif)
		 [ImportProcessOptions](ISolrSearchEngineSchema.ImportProcessOptions.htm)
		 Свойство ImportProcessOptions
		 возвращает параметры, используемые при индексации данных/метаданных.


		 ![](../../Property_Image.gif)
		 [SearchOptions](ISolrSearchEngineSchema.SearchOptions.htm)
		 Свойство SearchOptions
		 возвращает параметры, используемые при поиске данных.


## Свойства, унаследованные от [ISearchEngineSchema](../ISearchEngineSchema/ISearchEngineSchema.htm)


		 Имя свойства
		 Краткое описание


		 ![](../../Property_Image.gif)
		 [SearchExecutor](../ISearchEngineSchema/ISearchEngineSchema.SearchExecutor.htm)
		 Свойство SearchExecutor
		 возвращает объект, используемый для поиска по индексированным
		 данным, в зависимости от заданного типа поискового сервиса.


## Методы


		 Имя метода
		 Краткое описание


		 ![](../../Sub_Image.gif)
		 [FillSchemaOptions](ISolrSearchEngineSchema.FillSchemaOptions.htm)
		 Метод FillSchemaOptions
		 осуществляет заполнение списка полей в соответствии с настройками,
		 которые заданы в конфигурационном файле для текущего экземпляра
		 Solr.


См. также:


[Интерфейсы
 сборки BISearch](../KeBISearch_Interface.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
