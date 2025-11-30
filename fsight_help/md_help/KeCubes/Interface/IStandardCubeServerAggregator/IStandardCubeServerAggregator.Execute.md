# IStandardCubeServerAggregator.Execute

IStandardCubeServerAggregator.Execute
-


# IStandardCubeServerAggregator.Execute


## Синтаксис


Execute(Selection: [IDimSelectionSet](KeDims.chm::/interface/IDimSelectionSet/IDimSelectionSet.htm)):
 [IMatrix](KeMatrix.chm::/Interface/IMatrix/IMatrix.htm);


## Параметры


Selection. Отметка измерений,
 по которой будет произведен расчет.


## Описание


Метод Execute осуществляет расчет
 агрегации и возвращает матрицу с рассчитанными данными.


## Комментарии


В данной матрице присутствует дополнительное измерение, содержащее итоги
 агрегации. Координата в дополнительном измерении соответствует индексу
 агрегации.


Примечание.
 В матрице расчета агрегации для измерений, по которым рассчитан агрегат
 Other ([IStandardCubeServerAggregationDimension.Others](../IStandardCubeServerAggregationDimension/IStandardCubeServerAggregationDimension.Others.htm)),
 координата будет «-1».


## Пример


Использование свойства приведено в примере для [IStandardCubeInstance.CreateAggregator](../IStandardCubeInstance/IStandardCubeInstance.CreateAggregator.htm).


См. также:


[IStandardCubeServerAggregator](IStandardCubeServerAggregator.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
