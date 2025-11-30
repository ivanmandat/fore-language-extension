# PivotEvaluatorDimCalcType

PivotEvaluatorDimCalcType
-


# PivotEvaluatorDimCalcType


## Описание


Перечисление PivotEvaluatorDimCalcType
 содержит типы вычисляемого показателя, рассчитываемого для экспресс-отчета.


Используется свойством [IPivotEvaluatorDimCalculatesItem.Type](../Interface/IPivotEvaluatorDimCalculatesItem/IPivotEvaluatorDimCalculatesItem.Type.htm).


## Допустимые значения


		 Значение
		 Краткое описание


		 0
		 Custom. Пользовательский
		 вычисляемый показатель. Вычисляемый показатель рассчитывается
		 по формуле, указанной в выражении [Expression](../Interface/IPivotEvaluatorDimCalculatesItem/IPivotEvaluatorDimCalculatesItem.Expression.htm).


		 1
		 PercentToTotal. Процент
		 к итогу. Значения вычисляемого показателя рассчитывается в процентном
		 соотношении к общему итогу.


		 2
		 PercentToSubTotal.
		 Процент к промежуточному итогу. Для значений расчет вычисляемых
		 показателей осуществляется в процентном соотношении относительно
		 промежуточных итогов. Значения промежуточных итогов рассчитываются
		 в процентном соотношении к общему итогу по показателю.


См. также:


[Перечисления сборки Pivot](KePivot_Enums.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
