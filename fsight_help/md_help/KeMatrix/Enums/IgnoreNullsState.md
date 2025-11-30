# IgnoreNullsState

IgnoreNullsState
-


# IgnoreNullsState


## Описание


Перечисление IgnoreNullsState
 содержит способ обработки пустых значений при агрегации данных.


Используется следующими свойствами и методами:


	- [IBasicMatrixAggregator.IgnoreNulls](../Interface/IBasicMatrixAggregator/IBasicMatrixAggregator.IgnoreNulls.htm).


## Допустимые значения


		 Значение
		 Краткое описание


		 0
		 None. Пустые значения
		 участвуют в агрегации.


		 1
		 WithChildrenNulls.
		 Если результат агрегации по дочерним элементам равен пустому значению
		 и при этом в родительском элементе уже имеется значение, то оно
		 будет заменено пустым значением.


		 2
		 IgnoreAllNulls. Пустые
		 значения не участвуют в агрегации.


См. также:


[Перечисления
 сборки Matrix](KeMatrix_Enums.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
