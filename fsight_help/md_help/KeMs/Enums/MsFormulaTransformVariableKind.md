# MsFormulaTransformVariableKind

MsFormulaTransformVariableKind
-


# MsFormulaTransformVariableKind


## Описание


Перечисление MsFormulaTransformVariableKind
 содержит виды переменной.


Используется следующим свойством:


	- [IMsFormulaTransformVariable.Kind](../Interface/IMsFormulaTransformVariable/IMsFormulaTransformVariable.Kind.htm).


## Описание


		 Значение
		 Краткое описание


		 0
		 Stub. Переменная, содержащая
		 данные.


		 1
		 Parameter. Переменная,
		 являющаяся параметром.


		 2
		 Attribute. Переменная,
		 построенная на источнике данных и атрибуте.


## Комментарии


Переменная, построенная на источнике данных и атрибуте, предназначена
 для использования в выражениях. Для указания атрибута используйте свойство
 [IMsFormulaTransformVariable.AttributeId](../Interface/IMsFormulaTransformVariable/IMsFormulaTransformVariable.AttributeId.htm).
 Если атрибут не задан, то переменная рассматривается как набор значений,
 если атрибут задан - то как значение атрибута.


См. также:


[Перечисления
 сборки Ms](KeMs_Enums.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
