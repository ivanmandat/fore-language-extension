# IMsTargetConstraintCommon.TimeMoment

IMsTargetConstraintCommon.TimeMoment
-


# IMsTargetConstraintCommon.TimeMoment


## Синтаксис


TimeMoment: Integer;


## Описание


Свойство TimeMoment определяет
 момент времени, к которому относится ограничение.


## Комментарии


Момент времени задаётся индексом, соответствующим точке в периоде прогнозирования.
 Индексация моментов времени сквозная и начинается с нуля. Например, период
 прогнозирования содержит 20 точек. Момент времени для первой точки - это
 «0», для второй - «1», для последней - «19».


## Пример


Использование свойства приведено в примере для [IMsBaseOptimizationProblem.CriterionFunction](../IMsBaseOptimizationProblem/IMsBaseOptimizationProblem.CriterionFunction.htm).


См. также:


[IMsTargetConstraintCommon](IMsTargetConstraintCommon.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
