# ISearchDataSourcesItem.IsFreeDimsHighlighted

ISearchDataSourcesItem.IsFreeDimsHighlighted
-


# ISearchDataSourcesItem.IsFreeDimsHighlighted


## Синтаксис


IsFreeDimsHighlighted: Boolean;


## Описание


Свойство IsFreeDimsHighlighted
 возвращает признак получения результатов поиска с учетом фильтрации по
 свободным измерениям.


## Комментарии


Допустимые значения:


	- True. При BI-поиске
	 были учтены значения по свободным измерениям, результат отфильтрован
	 с их учетом. Информацию о свободных измерениях можно получить в свойстве
	 [FreeDims](ISearchDataSourcesItem.FreeDims.htm);


	- False. Свободные измерения
	 отсутствуют, BI-поиск произведен по индексированным измерениям, информацию
	 по которым можно получить в свойстве [Selection](ISearchDataSourcesItem.Selection.htm).


См. также:


[ISearchDataSourcesItem](ISearchDataSourcesItem.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
