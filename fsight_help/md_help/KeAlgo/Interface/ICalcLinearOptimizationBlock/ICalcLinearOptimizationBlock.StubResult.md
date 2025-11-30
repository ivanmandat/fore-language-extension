# ICalcLinearOptimizationBlock.StubResult

ICalcLinearOptimizationBlock.StubResult
-


# ICalcLinearOptimizationBlock.StubResult


## Синтаксис


StubResult: [IStubSelection](../IStubSelection/IStubSelection.htm);


## Описание


Свойство StubResult определяет
 источник данных для хранения результатов расчёта [задачи
 оптимизации](CalculationAlgorithm.chm::/Desktop/Linear_optimization_block/TargetFunction_LinOpt.htm).


## Комментарии


Для определения приёмника данных, в который будут записываться результаты
 расчёта задачи оптимизации, используйте свойство [ICalcLinearOptimizationBlock.StubOut](ICalcLinearOptimizationBlock.StubOut.htm).


Для сохранения значений управляющих переменных при расчёте задачи оптимизации
 используется куб с идентификатором CUBE_RESULTS, создаваемый автоматическки
 при настройке целевой функции. При использовании свойства StubResult
 можно изменить используемый куб на другой. Для просмотра куба нажмите
 кнопку «Открыть экспресс-отчёт»
 в окне «[Внешний
 вид целевой функции](CalculationAlgorithm.chm::/Desktop/Linear_optimization_block/ViewTagretFunction_LinOpt.htm)».


## Пример


Использование свойства приведено в примере для [ICalcLinearOptimizationBlock.Database](ICalcLinearOptimizationBlock.Database.htm).


См. также:


[ICalcLinearOptimizationBlock](ICalcLinearOptimizationBlock.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
