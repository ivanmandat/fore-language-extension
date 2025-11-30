# ISolrSearchOptions.UseSmartSearch

ISolrSearchOptions.UseSmartSearch
-


# ISolrSearchOptions.UseSmartSearch


## Синтаксис


UseSmartSearch: Boolean;


## Описание


Свойство UseSmartSearch определяет
 признак поиска по свободным измерениям.


## Комментарии


Свободное измерение - это измерение, по которому производится поиск,
 но элементы этого измерения не включаются в наименование результата поиска.
 Предварительно свободные измерения должны быть проиндексированы, для этого
 в настройках индексации свойству [ISolrImportProcessOptions.NeedSmartSearch](../ISolrImportProcessOptions/ISolrImportProcessOptions.NeedSmartSearch.htm)
 установите значение True.


Допустимые значения для UseSmartSearch:


	- True. Значение по умолчанию.
	 Осуществлять поиск по свободным измерениям;


	- False. Не искать по
	 свободным измерениям.


## Пример


Пример использования приведён в описании свойства [ISolrSearchEngineSchema.SearchOptions](../ISolrSearchEngineSchema/ISolrSearchEngineSchema.SearchOptions.htm).


См. также:


[ISolrSearchOptions](ISolrSearchOptions.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
