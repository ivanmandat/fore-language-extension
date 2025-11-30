# IMsDiagnosticTestSettings

IMsDiagnosticTestSettings
-


# IMsDiagnosticTestSettings


Сборка: Ms;


## Описание


Интерфейс IMsDiagnosticTestSettings
 предназначен для работы с параметрами выполнения диагностического теста.


## Иерархия наследования


           IMsDiagnosticTestSettings


## Комментарии


Интерфейс является базовым. Для настройки теста определенного типа
 приведите IMsDiagnosticTestSettings
 к одному из интерфейсов:


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


## Свойства


		 Имя свойства
		 Краткое описание


		 ![](../../Property_Image.gif)
		 [ConfidenceLevel](IMsDiagnosticTestSettings.ConfidenceLevel.htm)


		 Свойство ConfidenceLevel
		 определяет уровень значимости, при котором гипотеза отвергается.


		 ![](../../Property_Image.gif)
		 [IncludedExplanatories](IMsDiagnosticTestSettings.IncludedExplanatories.htm)


		 Свойство IncludedExplanatories
		 определяет индексы объясняющих рядов.


		 ![](../../Property_Image.gif)
		 [SupportsR](IMsDiagnosticTestSettings.SupportsR.htm)


		 Свойство SupportsR
		 определяет признак возможности расчёта диагностического теста
		 с помощью R.


		 ![](../../Property_Image.gif)
		 [UseR](IMsDiagnosticTestSettings.UseR.htm)


		 Свойство UseR
		 определяет признак использования подключения к R при расчёте диагностического
		 теста.


## Методы


		 Имя метода
		 Краткое описание


		 ![](../../Sub_Image.gif)
		 [RefreshIncluded](IMsDiagnosticTestSettings.RefreshIncluded.htm)


		 Метод RefreshIncluded
		 обновляет индексы объясняющих рядов.


См. также:


[Интерфейсы сборки Ms](../KeMs_Interface.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
