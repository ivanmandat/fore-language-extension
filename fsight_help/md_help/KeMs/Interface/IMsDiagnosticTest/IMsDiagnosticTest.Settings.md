# IMsDiagnosticTest.Settings

IMsDiagnosticTest.Settings
-


# IMsDiagnosticTest.Settings


## Синтаксис


		Settings: [IMsDiagnosticTestSettings](../IMsDiagnosticTestSettings/IMsDiagnosticTestSettings.htm);


## Описание


Свойство Settings возвращает
 параметры выполнения теста.


## Комментарии


Settings возвращает базовые
 параметры всех тестов. Для настройки теста определённого типа приведите
 возвращаемый объект к одному из интерфейсов:


	- [IMsChowTestSettings](../IMsChowTestSettings/IMsChowTestSettings.htm).
	 Тесты Чоу;


	- [IMsOmittedVariablesTestSettings](../IMsOmittedVariablesTestSettings/IMsOmittedVariablesTestSettings.htm).
	 Тест пропущенных переменных (критерий пропущенных переменных);


	- [IMsRamseyRessetTestSettings](../IMsRamseyRessetTestSettings/IMsRamseyRessetTestSettings.htm).
	 Тест функциональной формы Рамсея (критерий функциональной формы);


	- [IMsRedundantVariablesTestSettings](../IMsRedundantVariablesTestSettings/IMsRedundantVariablesTestSettings.htm).
	 Тест избыточных переменных (критерий избыточных переменных);


	- [IMsSerialCorellationLMTestSettings](../IMsSerialCorellationLMTestSettings/IMsSerialCorellationLMTestSettings.htm). Тест
	 Годфри (критерий Годфри автокорреляции остатков);


	- [IMsWhiteHeteroskedasticityTestSettings](../IMsWhiteHeteroskedasticityTestSettings/IMsWhiteHeteroskedasticityTestSettings.htm).
	 Тест Уайта на гетероскедастичность.


## Пример


Использование свойства приведено в примере для [IMsLinearRegressionTransform.DiagnosticTests](../IMsLinearRegressionTransform/IMsLinearRegressionTransform.DiagnosticTests.htm).


См. также:


[IMsDiagnosticTest](IMsDiagnosticTest.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
