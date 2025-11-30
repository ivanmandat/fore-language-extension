# IMsCrossDimensionAggregationOptions.UseCommon

IMsCrossDimensionAggregationOptions.UseCommon
-


# IMsCrossDimensionAggregationOptions.UseCommon


## Синтаксис


		UseCommon: Boolean;


## Описание


Свойство UseCommon определяет
 признак использования общего периода для расчёта агрегации.


## Комментарии


Общий период - это период, на котором у всех агрегируемых рядов есть
 данные.


Допустимые значения:


	- True. Агрегация рассчитывается
	 на общем периоде данных. Доступен параметр, позволяющий ограничить
	 минимальное количество наблюдений в общем периоде: [IMsCrossDimensionAggregationOptions.UseNumObservations](IMsCrossDimensionAggregationOptions.UseNumObservations.htm);


	- False. По умолчанию.
	 Агрегация рассчитывается на периоде модели.


## Пример


Использование свойства приведено в примере для [IMsCrossDimensionAggregationOptions.SkipIfWholeWeightIsEmpty](IMsCrossDimensionAggregationOptions.SkipIfWholeWeightIsEmpty.htm).


См. также:


[IMsCrossDimensionAggregationOptions](IMsCrossDimensionAggregationOptions.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
