# PivotTransformationSelectionOperation

PivotTransformationSelectionOperation
-


# PivotTransformationSelectionOperation


## Описание


Перечисление PivotTransformationSelectionOperation
 используется для определения типа операции модификации отметки.


Используется следующим методом и свойством:


	- [IEaxDataAreaTransformation.Modifier](../Interface/IEaxDataAreaTransformation/IEaxDataAreaTransformation.Modifier.htm);


	- [IEaxDataAreaTransformation.ModifierOperation](../Interface/IEaxDataAreaTransformation/IEaxDataAreaTransformation.ModifierOperation.htm).


## Допустимые значения


		 Значение
		 Краткое описание


		 0
		 None. По умолчанию.
		 Без модификации отметки.


		 1
		 Union. Объединение.


		 2
		 Intersection. Пересечение.


		 3
		 Difference. Разность.


		 4
		 SymmetricDifference.
		 Симметричная разность.


		 5
		 Replace. Замена.


## Комментарии


Union. Отметка, содержащая в
 себе все элементы обеих исходных отметок.


Intersection.
 Отметка, которой принадлежат только те элементы, которые одновременно
 принадлежат обеим исходным отметкам.


Difference.
 Отметка, в которую входят все элементы первой исходной отметки, не входящие
 во вторую исходную отметку.


SymmetricDifference. Отметка,
 включающая все элементы исходных отметок, не принадлежащие одновременно
 обеим исходным отметкам. Симметричная разность - это сумма разностей двух
 отметок.


См. также:


[Перечисления
 сборки Express](KeExpress_Enums.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
