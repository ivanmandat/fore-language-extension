# HPSmoothingParameterModeType

HPSmoothingParameterModeType
-


# HPSmoothingParameterModeType


## Описание


Перечисление HPSmoothingParameterModeType
 содержит способы задания параметра сглаживания для фильтра Ходрика-Прескотта.


Используется следующими свойствами и методами:


	- [IMsHodrickPrescottFilterTransform.SmoothingParameterMode](KeMs.chm::/Interface/IMsHodrickPrescottFilterTransform/IMsHodrickPrescottFilterTransform.SmoothingParameterMode.htm);


	- [ISmHodrickPrescottFilter.SmoothingParameterMode](../Interface/ISmHodrickPrescottFilter/ISmHodrickPrescottFilter.SmoothingParameterMode.htm).


## Допустимые значения


		 Значение
		 Краткое описание


		 ![](../Element%20Enums.gif)
		 0
		 EditDirectly. Параметр
		 сглаживания определяется значением лямбды.


		 ![](../Element%20Enums.gif)
		 1
		 SetByFrequencyRule.
		 Параметр сглаживания определяется значением степени.


## Комментарии


Параметр сглаживания управляет мерой гладкости ряда. Чем больше значение
 параметра, тем более гладким получается ряд. Если значение параметра сглаживания
 стремится к бесконечности, то ряд превращается в линейный тренд.


См. также:


[Перечисления
 сборки Stat](StatLib_Enums.htm)


		Справочная
		 система на версию ERROR: Variable (Version_lts) is undefined.
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
