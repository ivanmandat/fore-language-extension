# IMsDiagnosticTest.Type

IMsDiagnosticTest.Type
-


# IMsDiagnosticTest.Type


## Синтаксис


		Type: [MsDiagnosticTestType](../../Enums/MsDiagnosticTestType.htm);


## Описание


Свойство Type возвращает тип
 теста.


## Комментарии


Интерфейс для работы с настройками теста выбирается исходя из значения
 свойства:


	- MsDiagnosticTestType.OmittedVariables.
	 Интерфейс [IMsOmittedVariablesTestSettings](../IMsOmittedVariablesTestSettings/IMsOmittedVariablesTestSettings.htm);


	- MsDiagnosticTestType.RedundantVariables.
	 Интерфейс [IMsRedundantVariablesTestSettings](../IMsRedundantVariablesTestSettings/IMsRedundantVariablesTestSettings.htm);


	- MsDiagnosticTestType.SerialCorellationLM.
	 Интерфейс [IMsSerialCorellationLMTestSettings](../IMsSerialCorellationLMTestSettings/IMsSerialCorellationLMTestSettings.htm);


	- MsDiagnosticTestType.WhiteHeteroskedasticity.
	 Интерфейс [IMsWhiteHeteroskedasticityTestSettings](../IMsWhiteHeteroskedasticityTestSettings/IMsWhiteHeteroskedasticityTestSettings.htm);


	- MsDiagnosticTestType.RamseyResset.
	 Интерфейс [IMsRamseyRessetTestSettings](../IMsRamseyRessetTestSettings/IMsRamseyRessetTestSettings.htm);


	- MsDiagnosticTestType.Chow.
	 Интерфейс [IMsChowTestSettings](../IMsChowTestSettings/IMsChowTestSettings.htm).


## Пример


Использование свойства приведено в примере для [IMsRamseyRessetTestSettings.Power](../IMsRamseyRessetTestSettings/IMsRamseyRessetTestSettings.Power.htm).


См. также:


[IMsDiagnosticTest](IMsDiagnosticTest.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
