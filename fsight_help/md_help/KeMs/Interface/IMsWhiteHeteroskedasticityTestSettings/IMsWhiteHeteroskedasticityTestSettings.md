# IMsWhiteHeteroskedasticityTestSettings

IMsWhiteHeteroskedasticityTestSettings
-


# IMsWhiteHeteroskedasticityTestSettings


Сборка: Ms;


## Описание


Интерфейс IMsWhiteHeteroskedasticityTestSettings предназначен
 для работы с параметрами диагностического теста «Тест Уайта на гетероскедастичность».


## Иерархия наследования


           [IMsDiagnosticTestSettings](../IMsDiagnosticTestSettings/IMsDiagnosticTestSettings.htm)


           IMsWhiteHeteroskedasticityTestSettings


## Комментарии


«Тест Уайта на гетероскедастичность» позволяет проверить гетероскедастичность
 остатков модели линейной регрессии. Для работы с параметрами данного теста
 приведите значение, возвращаемое свойством [IMsDiagnosticTest.Settings](../IMsDiagnosticTest/IMsDiagnosticTest.Settings.htm),
 к интерфейсу IMsWhiteHeteroskedasticityTestSettings.


## Свойства


		 Имя свойства
		 Краткое описание


		 ![](../../Property_Image.gif)
		 [CrossProduct](IMsWhiteHeteroskedasticityTestSettings.CrossProduct.htm)
		 Свойство CrossProduct
		 определяет, включать ли попарные произведения.


## Свойства, унаследованные от [IMsDiagnosticTestSettings](../IMsDiagnosticTestSettings/IMsDiagnosticTestSettings.htm)


		 Имя свойства
		 Краткое описание


		 ![](../../Property_Image.gif)
		 [ConfidenceLevel](../IMsDiagnosticTestSettings/IMsDiagnosticTestSettings.ConfidenceLevel.htm)


		 Свойство ConfidenceLevel
		 определяет уровень значимости, при котором гипотеза отвергается.


		 ![](../../Property_Image.gif)
		 [IncludedExplanatories](../IMsDiagnosticTestSettings/IMsDiagnosticTestSettings.IncludedExplanatories.htm)


		 Свойство IncludedExplanatories
		 определяет индексы объясняющих рядов.


		 ![](../../Property_Image.gif)
		 [SupportsR](../IMsDiagnosticTestSettings/IMsDiagnosticTestSettings.SupportsR.htm)


		 Свойство SupportsR
		 определяет признак возможности расчёта диагностического теста
		 с помощью R.


		 ![](../../Property_Image.gif)
		 [UseR](../IMsDiagnosticTestSettings/IMsDiagnosticTestSettings.UseR.htm)


		 Свойство UseR
		 определяет признак использования подключения к R при расчёте диагностического
		 теста.


## Методы, унаследованные от [IMsDiagnosticTestSettings](../IMsDiagnosticTestSettings/IMsDiagnosticTestSettings.htm)


		 Имя метода
		 Краткое описание


		 ![](../../Sub_Image.gif)
		 [RefreshIncluded](../IMsDiagnosticTestSettings/IMsDiagnosticTestSettings.RefreshIncluded.htm)


		 Метод RefreshIncluded
		 обновляет индексы объясняющих рядов.


См. также:


[Интерфейсы сборки Ms](../KeMs_Interface.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
