# ValidationRevisionComparisonType

ValidationRevisionComparisonType
-


# ValidationRevisionComparisonType


## Описание


Перечисление ValidationRevisionComparisonType
 содержит типы изменения значения между ревизиями. Используется следующими
 свойствами:


	- [IValidationComponentMismatch.ComparisonType](../Interface/IValidationComponentMismatch/IValidationComponentMismatch.ComparisonType.htm);


	- [IValidationRevisionComparison.ComparisonType](../Interface/IValidationRevisionComparison/IValidationRevisionComparison.ComparisonType.htm).


## Допустимые значения


		 Значение
		 Краткое описание


		 0
		 Change. Значение изменилось.


		 1
		 Increase. Значение
		 увеличилось.


		 2
		 Decrease. Значение
		 уменьшилось.


		 3
		 AddedValue. Добавление
		 значения.


		 4
		 RemovedValue. Удаление
		 значения.


		 5
		 NonChanged. Значение
		 не изменилось.


## Комментарии


	- Change, NonChanged,
	 Increase, Decrease.
	 Если хотя бы одно из сравниваемых значений пустое, то результат сравнения
	 False. Таким образом, данные
	 типы валидаций проверяют только изменение уже существующих значений.


	- AddedValue. Если значение
	 было пустое, а стало непустым, то результат сравнения True.
	 В остальных случаях результат сравнения False.


	- RemovedValue. Если значение
	 было непустое, а стало пустым, то результат сравнения True.
	 В остальных случаях результат сравнения False.


См. также:


[Перечисления сборки Ms](KeMs_Enums.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
