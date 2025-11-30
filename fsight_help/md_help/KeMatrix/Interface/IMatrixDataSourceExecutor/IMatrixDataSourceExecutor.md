# IMatrixDataSourceExecutor

IMatrixDataSourceExecutor
-


# IMatrixDataSourceExecutor


Сборка: Matrix;


## Описание


Интерфейс IMatrixDataSourceExecutor
 содержит методы для работы с данными многомерного источника данных.


## Иерархия наследования


IMatrixDataSourceExecutor


## Комментарии


Методы данного интерфейса позволяют получить результирующую матрица
 многомерного источника данных в соответствии с [заданными
 настройками](../IMatrixDataSourceExecutorSetup/IMatrixDataSourceExecutorSetup.htm). Также доступна работа с кешированными данными источника
 данных.


Объект, реализуемый данным интерфейсом, также реализует интерфейс [IMatrixDataSourceExecutorSetup](../IMatrixDataSourceExecutorSetup/IMatrixDataSourceExecutorSetup.htm).
 Для определения параметров расчета необходимо объект данного типа привести
 к типу [IMatrixDataSourceExecutorSetup](../IMatrixDataSourceExecutorSetup/IMatrixDataSourceExecutorSetup.htm).


## Методы


		 Имя метода
		 Краткое описание


		 ![](../../Sub_Image.gif)
		 [CreateCache](IMatrixDataSourceExecutor.CreateCache.htm)
		 Метод CreateCache создает
		 кеш данных для источника.


		 ![](../../Sub_Image.gif)
		 [Execute](IMatrixDataSourceExecutor.Execute.htm)
		 Метод Execute осуществляет
		 расчет матрицы с данными в соответствии с указанной отметкой элементов
		 и [параметров
		 расчета](../IMatrixDataSourceExecutorSetup/IMatrixDataSourceExecutorSetup.htm).


См. также:


[Интерфейсы
 сборки Matrix](../KeMatrix_Interface.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
