# RatingChart.getVisibleSeriesCount

RatingChart.getVisibleSeriesCount
-


# RatingChart.getVisibleSeriesCount


## Синтаксис


getVisibleSeriesCount(includeAggregated: Boolean):
 Number;


## Параметры


*includeAggregated.* Параметр
 определяет, будет ли строка агрегации учитываться при подсчете количества
 рядов данных.


## Описание


Метод getVisibleSeriesCount
 возвращает количество отображаемых рядов данных.


## Комментарии


Параметр *includeAggregated*
 может принимать значения:


	- true.
	 Строка агрегации будет учитываться при подсчете количества рядов данных;


	- false.
	 Строка агрегации не будет учитываться при подсчете количества рядов
	 данных.


Для определения индекса строки, после которой значения рядов данных
 будут агрегированы, используйте свойство [RatingChart.AggregationAfter](RatingChart.AggregationAfter.htm).


## Пример


Использование метода приведено в примере для [RatingChart.getVisibleSeriesHeight](RatingChart.getVisibleSeriesHeight.htm).


См. также:


[RatingChart](RatingChart.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
