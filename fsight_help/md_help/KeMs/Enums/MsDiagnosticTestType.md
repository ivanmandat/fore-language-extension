# MsDiagnosticTestType

MsDiagnosticTestType
-


# MsDiagnosticTestType


## Описание


Перечисление MsDiagnosticTestType
 используется для определения типа диагностического теста.


Используется следующими свойствами и методами:


	- [IMsDiagnosticTest.Type](../Interface/IMsDiagnosticTest/IMsDiagnosticTest.Type.htm);


	- [IMsDiagnosticTestList.FindByType](../Interface/IMsDiagnosticTestList/IMsDiagnosticTestList.FindByType.htm).


## Допустимые значения


		 Значение
		 Краткое описание


		 0
		 OmittedVariables. Критерий
		 пропущенных переменных.


		 1
		 RedundantVariables.
		 Критерий избыточных переменных.


		 2
		 SerialCorellationLM.
		 Критерий Годфри автокорреляции остатков.


		 3
		 WhiteHeteroskedasticity.
		 Тест Уайта на гетероскедастичность.


		 4
		 RamseyResset. Критерий
		 функциональной формы.


		 5
		 Chow. Тесты Чоу.


## Комментарии


Диагностические тесты применяются только для модели [линейная
 регрессия (оценка МНК)](../Interface/IMsLinearRegressionTransform/IMsLinearRegressionTransform.htm).


См. также:


[Перечисления
 сборки Ms](KeMs_Enums.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
