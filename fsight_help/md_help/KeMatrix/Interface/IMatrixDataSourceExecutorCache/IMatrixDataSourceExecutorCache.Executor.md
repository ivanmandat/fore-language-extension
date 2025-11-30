# IMatrixDataSourceExecutorCache.Executor

IMatrixDataSourceExecutorCache.Executor
-


# IMatrixDataSourceExecutorCache.Executor


## Синтаксис


Executor: [IMatrixDataSourceExecutor](../IMatrixDataSourceExecutor/IMatrixDataSourceExecutor.htm);


## Описание


Свойство Executor определяет объект, для которого создан кеш.


## Комментарии


По умолчанию данное свойство возвращает объект, для которого был вызван метод [CreateCache](../IMatrixDataSourceExecutor/IMatrixDataSourceExecutor.CreateCache.htm).


Если был получен новый источник данных и для него создан новый объект для работы с данными, реализуемый интерфейсом [IMatrixDataSourceExecutor](../IMatrixDataSourceExecutor/IMatrixDataSourceExecutor.htm), то данный объект можно установить в качестве значения свойства Executor. В этом случае при одинаковом наборе измерений будет использоваться существующий кеш. Если набор измерений отличается, то кеш будет сброшен.


См. также:


[IMatrixDataSourceExecutorCache](IMatrixDataSourceExecutorCache.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
