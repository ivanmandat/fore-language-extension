# IMissingData.MethodParameter

IMissingData.MethodParameter
-


# IMissingData.MethodParameter


## Синтаксис


MethodParameter: Integer;


## Описание


Свойство MethodParameter определяет дополнительный параметр для метода обработки пропусков.


## Комментарии


MethodParameter может принимать только положительные значения. Свойство актуально для следующих методов обработки пропусков:


-
MissingDataMethod.NPointsAverage. Среднее по N соседним точкам. MethodParameter определяет N - количество соседних точек;


-
PreviousGrowthRate. SucceedingGrowthRate. Темп роста к предыдущему/следующему периоду. MethodParameter определяет число периодов.


## Пример


Использование свойства приведено в примере для [IMissingData.Method](IMissingData.Method.htm).


См. также:


[IMissingData](IMissingData.htm) | [MissingDataMethod](../../Enums/MissingDataMethod.htm)


		Справочная
		 система на версию ERROR: Variable (Version_lts) is undefined.
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
