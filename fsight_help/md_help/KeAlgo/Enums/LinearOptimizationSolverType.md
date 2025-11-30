# LinearOptimizationSolverType

LinearOptimizationSolverType
-


# LinearOptimizationSolverType


## Описание


Перечисление LinearOptimizationSolverType
 используется для определения [типа
 модуля расчёта](CalculationAlgorithm.chm::/Desktop/Linear_optimization_block/DataBase_LinOpt.htm), который будет использоваться при расчёте
 [блока
 линейной оптимизации](CalculationAlgorithm.chm::/Desktop/Linear_optimization_block/Linear_optimization_block.htm).


Используется следующим свойством:


	- [ICalcLinearOptimizationBlock.SolverType](../Interface/ICalcLinearOptimizationBlock/ICalcLinearOptimizationBlock.SolverType.htm).


## Допустимые значения


		 Значение
		 Краткое описание


		 0
		 Lpsolve. Модуль для
		 решения линейных задач Lpsolve. Предварительно должна быть проведена
		 [интеграция
		 с LPSolve](UiNav.chm::/02_Navigator/CommonSettings/Integration.htm#lpsolve).


		 1
		 Gurobi. Внешний
		 модуль расчёта Gurobi. Для использования данного модуля расчёта
		 на компьютере должно быть установлено соответствующее программное
		 обеспечение, получена лицензия и [произведены
		 настройки](CalculationAlgorithm.chm::/FAQ/Connect_Gurobi.htm).


См. также:


[Перечисления
 сборки Algo](KeAlgo_Enums.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
