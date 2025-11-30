# BasicAggregatorOperation

BasicAggregatorOperation
-


# BasicAggregatorOperation


## Описание


Перечисление BasicAggregatorOperation
 используется для определения метода расчёта [основного
 механизма агрегации](UiNavObj.chm::/Cube/Work_Cube/Tuning_agr/UiMd_Cube_Work_Cube_Tuning_agr_Basic.htm).


Используется следующими свойствами и методами:


	- [ICubeDimensionFix.Operation](KeCubes.chm::/Interface/ICubeDimensionFix/ICubeDimensionFix.Operation.htm);


	- [IAutoCubeSourceDimensionFix.Operation](KeCubes.chm::/Interface/IAutoCubeSourceDimensionFix/IAutoCubeSourceDimensionFix.Operation.htm);


	- [ICubeLoaderDimensionFix.Operation](KeCubes.chm::/Interface/ICubeLoaderDimensionFix/ICubeLoaderDimensionFix.Operation.htm);


	- [IAggrDestCell.Operation](../Interface/IAggrDestCell/IAggrDestCell.Operation.htm);


	- [IBasicMatrixLevelAggregator.Operation](../Interface/IBasicMatrixLevelAggregator/IBasicMatrixLevelAggregator.Operation.htm);


	- [IMsParametrizedDimensionAggregation.Type](kems.chm::/Interface/IMsParametrizedDimensionAggregation/IMsParametrizedDimensionAggregation.Type.htm);


	- [IPrxSliceDimension.AggregatorOperation](KeReport.chm::/Interface/IPrxSliceDimension/IPrxSliceDimension.AggregatorOperation.htm);


	- [IPrxDataIslandTotals.Method](KeReport.chm::/Interface/IPrxDataIslandTotals/IPrxDataIslandTotals.Method.htm);


	- [IPrxDataIslandTotals.MethodValue](KeReport.chm::/Interface/IPrxDataIslandTotals/IPrxDataIslandTotals.MethodValue.htm);


	- [IPrxTableIslandGroupingMethod.Method](KeReport.chm::/Interface/IPrxTableIslandGroupingMethod/IPrxTableIslandGroupingMethod.Method.htm);


	- [IMsFormulaGenTerm.Aggregation](KeMs.chm::/Interface/IMsFormulaGenTerm/IMsFormulaGenTerm.Aggregation.htm).


## Допустимые значения


		 Значение
		 Краткое описание


		 0
		 None. Не осуществлять
		 агрегацию.


		 1
		 Sum. Сумма.


		 2
		 Min. Минимальное значение.


		 3
		 Max. Максимальное значение.


		 4
		 Count. Количество непустых.


		 5
		 CountNull. Количество
		 пустых.


		 6
		 CountAll. Количество
		 дочерних.


		 7
		 ArithmeticalMean. Арифметическое
		 среднее.


		 8
		 ActualMean. Фактическое
		 среднее.


		 9
		 First. Первое фактическое.


		 10
		 Last. Последнее фактическое.


		 11
		 StandardDeviationP.
		 Среднеквадратическое отклонение.


		 12
		 Median. Медиана.


		 13
		 StandardDeviation.
		 Среднеквадратическое отклонение по выборке.


		 14
		 UniqueValues. Количество
		 различных значений.


См. также:


[Перечисления сборки Matrix](KeMatrix_Enums.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
