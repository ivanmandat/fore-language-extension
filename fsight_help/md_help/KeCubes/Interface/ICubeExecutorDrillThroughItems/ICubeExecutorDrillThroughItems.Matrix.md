# ICubeExecutorDrillThroughItems.Matrix

ICubeExecutorDrillThroughItems.Matrix
-


# ICubeExecutorDrillThroughItems.Matrix


## Синтаксис


Matrix: [IMatrix](kematrix.chm::/interface/imatrix/imatrix.htm);


## Описание


Свойство Matrix возвращает данные
 детализации в виде матрицы при расчете куба.


## Комментарии


В матрице содержатся:


	- все измерения куба, кроме измерения фактов;


	- два фиктивных измерения:


		- измерение номеров строк;


		- измерение источников и полей:


			- на первом уровне источники;


			- на втором уровне поля;


			- все факты из измерения фактов.


## Пример


Использование свойства приведено в примере для [ICubeInstanceDestinationExecutor.DrillThrough](../ICubeInstanceDestinationExecutor/ICubeInstanceDestinationExecutor.DrillThrough.htm).


См. также:


[ICubeExecutorDrillThroughItems](ICubeExecutorDrillThroughItems.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
