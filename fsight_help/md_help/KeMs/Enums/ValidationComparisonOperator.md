# ValidationComparisonOperator

ValidationComparisonOperator
-


# ValidationComparisonOperator


## Описание


Перечисление ValidationComparisonOperator
 используется для определения оператора сравнения значений.


Используется следующим свойством:


	- [IValidationComparisonValue.ComparisonOperator](../Interface/IValidationComparisonValue/IValidationComparisonValue.ComparisonOperator.htm).


## Допустимые значения


		 Значение
		 Краткое описание


		 0
		 More. Больше.


		 1
		 Less. Меньше.


		 2
		 Between. Все значения
		 в диапазоне.


		 3
		 Notbetween. Все значения,
		 не входящие в диапазон.


		 4
		 MoreOrEqual. Больше
		 или равно.


		 5
		 LessOrEqual. Меньше
		 или равно.


		 6
		 Equal. Равно.


		 7
		 NotEqual. Не равно.


## Комментарии


Для значений Between и Notbetween начало диапазона значений
 определяется свойством [IValidationComparisonValue.Value1](../Interface/IValidationComparisonValue/IValidationComparisonValue.Value1.htm),
 окончание - [IValidationComparisonValue.Value2](../Interface/IValidationComparisonValue/IValidationComparisonValue.Value2.htm).


Значение Between учитывает граничные
 значения диапазона, то есть Between
 будет возвращать True, если проверяемое
 значение больше или равно [IValidationComparisonValue.Value1](../Interface/IValidationComparisonValue/IValidationComparisonValue.Value1.htm)
 и меньше или равно [IValidationComparisonValue.Value2](../Interface/IValidationComparisonValue/IValidationComparisonValue.Value2.htm).


Значение Notbetween не учитывает
 граничные значения диапазона, то есть Notbetween
 будет возвращать True, если проверяемое
 значение строго меньше [IValidationComparisonValue.Value1](../Interface/IValidationComparisonValue/IValidationComparisonValue.Value1.htm)
 или строго больше [IValidationComparisonValue.Value2](../Interface/IValidationComparisonValue/IValidationComparisonValue.Value2.htm).


Для всех остальных значений перечисления ValidationComparisonOperator
 сравниваемое число определяется только свойством [IValidationComparisonValue.Value1](../Interface/IValidationComparisonValue/IValidationComparisonValue.Value1.htm).


См. также:


[Перечисления сборки Ms](KeMs_Enums.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
