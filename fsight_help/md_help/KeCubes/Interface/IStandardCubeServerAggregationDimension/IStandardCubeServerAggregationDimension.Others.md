# IStandardCubeServerAggregationDimension.Others

IStandardCubeServerAggregationDimension.Others
-


# IStandardCubeServerAggregationDimension.Others


## Синтаксис


Others: Boolean;


## Описание


Свойство Others определяет,
 рассчитывать ли агрегацию для элементов измерения, не вошедших в отметку
 (агрегат Other).


## Комментарии


Допустимые значения:


	- True. Рассчитывать
	 агрегат Other;


	- False.
	 Не рассчитывать агрегат Other.


Примечание.
 В матрице расчета агрегации для измерений, по которым рассчитан агрегат
 Other, координата будет «-1».


## Пример


Использование свойства приведено в примере для [IStandardCubeInstance.CreateAggregator](../IStandardCubeInstance/IStandardCubeInstance.CreateAggregator.htm).


См. также:


[IStandardCubeServerAggregationDimension](IStandardCubeServerAggregationDimension.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
