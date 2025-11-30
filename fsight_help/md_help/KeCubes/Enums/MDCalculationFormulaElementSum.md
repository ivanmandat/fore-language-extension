# MDCalculationFormulaElementSum

MDCalculationFormulaElementSum
-


# MDCalculationFormulaElementSum


## Описание


Перечисление MDCalculationFormulaElementSum
 содержит способы суммирования значений дочерних элементов.


Используется следующими свойствами и методами:


	- [IMDCalculationExpressionParser.TermSum](../Interface/IMDCalculationExpressionParser/IMDCalculationExpressionParser.TermSum.htm);


	- [IMDCalculationFormulaElement.Sum](../Interface/IMDCalculationFormulaElement/IMDCalculationFormulaElement.Sum.htm).


## Допустимые значения


		 Значение
		 Краткое описание


		 0
		 None.
		 Способ суммирование не определен.


		 1
		 SumOwner.
		 Суммировать значения дочерних элементов вместе со значением родительского
		 элемента.


		 2
		 Mask.
		 Суммировать по маске. Осуществляется суммирование значений элементов,
		 у которых значение атрибута, по которому создан [индекс
		 связи](../Interface/IMDCalculationSliceFree/IMDCalculationSliceFree.Index.htm), начинается со значения атрибута элемента по которому
		 настраивается суммирование.

Пример:
		 индекс измерения создан по полю Id.
		 В формулу добавлен элемент с идентификатором 110. При суммировании
		 по маске, будет осуществляться суммирование значений элементов,
		 идентификатор которых имеет значение 110*, где * - любое число.


		 3
		 Sum. Суммировать
		 значения дочерних элементов.


См. также:


[Перечисления сборки Cubes](KeCubes_Enums.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
