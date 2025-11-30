# OptimizationStubType

OptimizationStubType
-


# OptimizationStubType


## Описание


Перечисление OptimizationStubType
 используется для определения типа источника данных при настройке [блока
 линейной оптимизации](CalculationAlgorithm.chm::/Desktop/Linear_optimization_block/Linear_optimization_block.htm).


Используется следующим свойством и методом:


	- [IStubSelection.Type](../Interface/IStubSelection/IStubSelection.Type.htm);


	- [ICalcLinearOptimizationBlock.InitInterntalStub](../Interface/ICalcLinearOptimizationBlock/ICalcLinearOptimizationBlock.InitInterntalStub.htm).


## Допустимые значения


		 Значение
		 Краткое описание


		 0
		 Coefficient. Источник
		 данных для формирования [коэффициентов
		 целевой функции](CalculationAlgorithm.chm::/Desktop/Linear_optimization_block/TargetFunctionCoefficients_LinOpt.htm).


		 1
		 Values. Источник
		 данных для хранения [начальных
		 значений управляющих переменных](CalculationAlgorithm.chm::/Desktop/Linear_optimization_block/Variables_LinOpt.htm).


		 2
		 Fixed. Зарезервировано
		 на будущее.


		 3
		 LowRestriction. Источник
		 данных для хранения значений нижних границ при [простом
		 ограничении управляющих переменных](CalculationAlgorithm.chm::/Desktop/Linear_optimization_block/VariablesRestriction_LinOpt.htm).


		 4
		 HighRestriction. Источник
		 данных для хранения значений верхних границ при [простом
		 ограничении управляющих переменных](CalculationAlgorithm.chm::/Desktop/Linear_optimization_block/VariablesRestriction_LinOpt.htm).


		 5
		 ExpressionRestriction.
		 Источник данных для хранения значений выражений при [сложных
		 ограничениях управляющих переменных](CalculationAlgorithm.chm::/Desktop/Linear_optimization_block/ExpressionsRestriction_LinOpt.htm).


		 6
		 ResultFunction. Источник
		 данных для хранения результатов расчёта [задачи
		 оптимизации](CalculationAlgorithm.chm::/Desktop/Linear_optimization_block/TargetFunction_LinOpt.htm).


		 7
		 Target. Источник данных
		 для хранения [расчёта](CalculationAlgorithm.chm::/Desktop/Linear_optimization_block/TargetFunction_LinOpt.htm)
		 блока линейной оптимизации.


См. также:


[Перечисления
 сборки Algo](KeAlgo_Enums.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
