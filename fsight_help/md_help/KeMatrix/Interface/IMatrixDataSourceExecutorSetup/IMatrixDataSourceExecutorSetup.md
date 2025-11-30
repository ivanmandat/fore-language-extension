# IMatrixDataSourceExecutorSetup

IMatrixDataSourceExecutorSetup
-


# IMatrixDataSourceExecutorSetup


Сборка: Matrix;


## Описание


Интерфейс IMatrixDataSourceExecutorSetup
 содержит свойства для определения параметров расчета результирующей матрицы
 многомерного источника данных.


## Иерархия наследования


IMatrixDataSourceExecutorSetup


## Комментарии


Для определения параметров расчета необходимо привести к данному типу
 объект, имеющий тип [IMatrixDataSourceExecutor](../IMatrixDataSourceExecutor/IMatrixDataSourceExecutor.htm):


			Var

    //...

    MatrDS: IMatrixDataSource;

    Executor: IMatrixDataSourceExecutor;

    ExecutorSetup: IMatrixDataSourceExecutorSetup;

    //...

Begin

    //...

    MatrDS := //Получение многомерного источника данных

    Executor := MatrDS.CreateExecutor;

    ExecutorSetup := Executor As IMatrixDataSourceExecutorSetup;

    //...


## Свойства


		 Имя свойства
		 Краткое описание


		 ![](../../Property_Image.gif)
		 [DimensionsIntegrityCheck](IMatrixDataSourceExecutorSetup.DimensionsIntegrityCheck.htm)
		 Свойство DimensionsIntegrityCheck
		 определяет, будет ли перед расчетом производиться проверка построения
		 справочников, входящих в отметку.


См. также:


[Интерфейсы
 сборки Matrix](../KeMatrix_Interface.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
