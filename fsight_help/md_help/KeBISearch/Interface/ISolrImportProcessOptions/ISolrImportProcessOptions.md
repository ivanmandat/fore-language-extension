# ISolrImportProcessOptions

ISolrImportProcessOptions
-


# ISolrImportProcessOptions


Сборка: BISearch;


## Описание


Интерфейс ISolrImportProcessOptions
 содержит свойства для настройки параметров, которые используются при индексации
 данных.


## Иерархия наследования


ISolrImportProcessOptions


## Комментарии


Параметры, используемые при индексации данных, можно получить в свойстве
 [ISolrSearchEngineSchema.ImportProcessOptions](../ISolrSearchEngineSchema/ISolrSearchEngineSchema.ImportProcessOptions.htm).


При индексации предварительно отстраивается матрица с данными для источника
 данных. По матрице отбираются элементы измерений, по которым имеются данные.
 Эти элементы и будут проиндексированы в Solr.


## Свойства


		 Имя свойства
		 Краткое описание


		 ![](../../Property_Image.gif)
		 [BlockSize](ISolrImportProcessOptions.BlockSize.htm)
		 Свойство BlockSize
		 определяет количество элементов по самому большому измерению,
		 которые будут обрабатываться при вычислении матрицы.


		 ![](../../Property_Image.gif)
		 [ImportBinding](ISolrImportProcessOptions.ImportBinding.htm)
		 Свойство ImportBinding
		 возвращает настройки, которые будут использоваться при обработке
		 пользовательских полей.


		 ![](../../Property_Image.gif)
		 [NeedSmartSearch](ISolrImportProcessOptions.NeedSmartSearch.htm)
		 Свойство NeedSmartSearch
		 определяет признак необходимости индексации свободных измерений
		 для использования смарт-поиска.


		 ![](../../Property_Image.gif)
		 [QueryMaxSize](ISolrImportProcessOptions.QueryMaxSize.htm)
		 Свойство QueryMaxSize
		 определяет максимальный размер формируемого XML-документа с данными,
		 который будет передаваться для индексации на сервер Apache Solr.


		 ![](../../Property_Image.gif)
		 [ThreadsCount](ISolrImportProcessOptions.ThreadsCount.htm)
		 Свойство ThreadsCount
		 определяет число потоков, в рамках которых будет осуществляться
		 построение матрицы с данными.


См. также:


[Интерфейсы
 сборки BISearch](../KeBISearch_Interface.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
