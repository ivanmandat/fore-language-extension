# TabEmptyValuesTreatmentType

TabEmptyValuesTreatmentType
-


# TabEmptyValuesTreatmentType


## Описание


Перечисление TabEmptyValuesTreatmentType
 содержит варианты действий, которые необходимо произвести для формул,
 ссылающихся на пустые ячейки.


Используется следующим свойством:


	-  [ITabErrorCheckingOptions.EmptyValuesTreatmentType](../Interface/ITabErrorCheckingOptions/ITabErrorCheckingOptions.EmptyValuesTreatmentType.htm).


## Допустимые значения


		 Значение
		 Краткое описание


		 -1
		 Undefined. Считать
		 пустое значение нулём.


		 0
		 AsZero.
		 Пустое значение заменить нулем и вычислять формулу.


		 1
		 AsZeroWithInfo.
		 Пустое значение заменить нулем и вычислять формулу, а также отображать
		 индикатор ошибки и выводить контекстную кнопку для управления
		 ошибкой в формуле при установке фокуса в ячейку.


		 2
		 ThrowException.
		 Не вычислять формулу, выводить сообщение об ошибке в качестве
		 текста ячейки.


См. также:


[Перечисления
 сборки Tab](TabSheet_Enums.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
