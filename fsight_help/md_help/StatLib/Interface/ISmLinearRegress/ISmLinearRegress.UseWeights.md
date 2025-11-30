# ISmLinearRegress.UseWeights

ISmLinearRegress.UseWeights
-


# ISmLinearRegress.UseWeights


## Синтаксис


UseWeights: Boolean;


## Описание


Свойство UseWeights определяет
 признак использования заданных весов.


## Комментарии


Допустимые значения:


	- True. Веса используются. Значение
	 весов определяет свойство [ISmLinearRegress.GLSMatrix](ISmLinearRegress.GLSMatrix.htm).
	 Веса учитываются только для базовой модели линейной регрессии, т.е. для
	 модели без авторегрессии, скользящего среднего, лаговых переменных
	 и лагов Койка;


	- False. Значение по умолчанию.
	 Веса не используются.


## Пример


Использование свойства приведено в примере для [ISmLinearRegress.Fitted](ISmLinearRegress.Fitted.htm).


См. также:


[ISmLinearRegress](ISmLinearRegress.htm)


		Справочная
		 система на версию ERROR: Variable (Version_lts) is undefined.
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
