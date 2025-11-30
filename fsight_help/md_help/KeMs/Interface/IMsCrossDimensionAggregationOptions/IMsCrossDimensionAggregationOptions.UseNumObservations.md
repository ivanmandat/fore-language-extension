# IMsCrossDimensionAggregationOptions.UseNumObservations

IMsCrossDimensionAggregationOptions.UseNumObservations
-


# IMsCrossDimensionAggregationOptions.UseNumObservations


## Синтаксис


		UseNumObservations: Boolean;


## Описание


Свойство UseNumObservations
 определяет признак накладывания ограничения на минимальное количество
 наблюдений в общем периоде.


## Комментарии


Свойство актуально, если агрегация рассчитывается на общем периоде данных,
 т.е. свойство [IMsCrossDimensionAggregationOptions.UseCommon](IMsCrossDimensionAggregationOptions.UseCommon.htm) принимает
 значение True.


Допустимые значения:


	- True. Накладывается
	 ограничение на минимальное количество наблюдений в общем периоде.
	 Минимальное количество наблюдений определяет свойство [IMsCrossDimensionAggregationOptions.NumObservations](IMsCrossDimensionAggregationOptions.NumObservations.htm);


	- False. По умолчанию.
	 Отсутствует ограничение на минимальное количество наблюдений в общем
	 периоде.


## Пример


Использование свойства приведено в примере для [IMsCrossDimensionAggregationOptions.SkipIfWholeWeightIsEmpty](IMsCrossDimensionAggregationOptions.SkipIfWholeWeightIsEmpty.htm).


См. также:


[IMsCrossDimensionAggregationOptions](IMsCrossDimensionAggregationOptions.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
