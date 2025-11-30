# IMsCrossDimensionAggregationOptions.TreatEmptyWeightsAs

IMsCrossDimensionAggregationOptions.TreatEmptyWeightsAs
-


# IMsCrossDimensionAggregationOptions.TreatEmptyWeightsAs


## Синтаксис


		TreatEmptyWeightsAs: Double;


## Описание


Свойство TreatEmptyWeightsAs определяет
 значение, которое используется для заполнения пропусков в данных весов
 агрегации.


## Комментарии


Значение по умолчанию Double.Nan.


Если свойство принимает значение «0», то ряды, имеющие пустые значения
 в весах, будут игнорироваться при расчёте агрегации. Для исключения из
 расчёта рядов, для которых все значения весов пустые, установите свойству
 [IMsCrossDimensionAggregationOptions.SkipIfWholeWeightIsEmpty](IMsCrossDimensionAggregationOptions.SkipIfWholeWeightIsEmpty.htm)
 значение True.


## Пример


Использование свойства приведено в примере для [IMsCrossDimensionAggregationOptions.SkipIfWholeWeightIsEmpty](IMsCrossDimensionAggregationOptions.SkipIfWholeWeightIsEmpty.htm).


См. также:


[IMsCrossDimensionAggregationOptions](IMsCrossDimensionAggregationOptions.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
