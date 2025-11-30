# IStandardCubeServerAggregationDimension.GroupIndex

IStandardCubeServerAggregationDimension.GroupIndex
-


# IStandardCubeServerAggregationDimension.GroupIndex


## Синтаксис


GroupIndex: Integer;


## Описание


Свойство GroupIndex определяет
 индекс группы, в которую входит измерение. Нумерация групп сквозная и
 начинается с нуля.


## Комментарии


Если необходимо рассчитать агрегацию только по столбцам или только по
 строкам, то следует использовать одну группу измерений. Если нужны итоги
 и по столбцам и по строкам, то следует использовать две группы измерений.


## Пример


Использование свойства приведено в примере для [IStandardCubeInstance.CreateAggregator](../IStandardCubeInstance/IStandardCubeInstance.CreateAggregator.htm).


См. также:


[IStandardCubeServerAggregationDimension](IStandardCubeServerAggregationDimension.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
