# IStandardCubeServerAggregationDimensions.CalcOther

IStandardCubeServerAggregationDimensions.CalcOther
-


# IStandardCubeServerAggregationDimensions.CalcOther


## Синтаксис


CalcOther(Index: Integer): Boolean;


## Параметры


Index.
 Индекс измерения.


## Описание


Свойство CalcOther определяет,
 рассчитывать ли агрегацию для элементов измерения, не вошедших в отметку
 (агрегат Other).


## Комментарии


Допустимые значения:


	- True. Рассчитывать агрегат
	 Other;


	- False. Значение по умолчанию.
	 Не рассчитывать агрегат Other.


В матрице расчета агрегации для измерений, по которым рассчитан агрегат
 Other, координата будет «-1».


См. также:


[IStandardCubeServerAggregationDimensions](IStandardCubeServerAggregationDimensions.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
