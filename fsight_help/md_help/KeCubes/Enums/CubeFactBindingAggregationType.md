# CubeFactBindingAggregationType

CubeFactBindingAggregationType
-


# CubeFactBindingAggregationType


## Описание


Перечисление CubeFactBindingAggregationType
 содержит методы расчета агрегации на сервере.


Используется следующими свойствами и методами:


	- [IStandardCubeFactBinding.AggregationType](../Interface/IStandardCubeFactBinding/IStandardCubeFactBinding.AggregationType.htm);


	- [IStandardCubeServerAggregation.AggregationType](../Interface/IStandardCubeServerAggregation/IStandardCubeServerAggregation.AggregationType.htm);


	- [ICubeCreatorFact.AggregationType](../Interface/ICubeCreatorFact/ICubeCreatorFact.AggregationType.htm);


	- [ICubeLoaderFactBinding.CubeFactAggregationType](../Interface/ICubeLoaderFactBinding/ICubeLoaderFactBinding.CubeFactAggregationType.htm).


## Допустимые значения


		 Значение
		 Краткое описание


		 0
		 None.
		 Метод расчета не определен.


		 1
		 Sum. Сумма.


		 2
		 Count.
		 Количество значений.


		 3
		 Avg. Среднее.


		 4
		 Min. Минимум.


		 5
		 Max. Максимум.


		 6
		 StdDev.
		 Среднеквадратичное отклонение.
		Примечание.
		 Не поддерживается при работе с СУБД SQLite.


		 7
		 Median.
		 Медиана.
		Примечание.
		 Не поддерживается при работе с СУБД SQLite.


		 8
		 StdDevP.
		 Приведенное среднеквадратичное отклонение.
		Примечание.
		 Не поддерживается при работе с СУБД SQLite.


		 9
		 CountDistinct.
		 Количество различных значений.


		 10
		 Custom. Для
		 расчета будет использоваться пользовательский метод агрегации.


Примечание.
 Расчёт значений для методов Count
 и CountDistinct производится при
 выполнении запроса к серверу СУБД.


См. также:


[Перечисления сборки Cubes](KeCubes_Enums.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
