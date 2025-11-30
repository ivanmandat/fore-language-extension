# IMsRamseyRessetTestSettings

IMsRamseyRessetTestSettings
-


# IMsRamseyRessetTestSettings


Сборка:Ms;


## Описание


Интерфейс IMsRamseyRessetTestSettings предназначен
 для работы с параметрами диагностического теста «Критерий
 функциональной формы».


## Иерархия наследования


           [IMsDiagnosticTestSettings](../IMsDiagnosticTestSettings/IMsDiagnosticTestSettings.htm)


           IMsRamseyRessetTestSettings


## Комментарии


Тест «Критерий функциональной формы»
 - это обобщенный тест на наличие следующих ошибок спецификации модели
 линейной регрессии:


	- Наличие пропущенных переменных. Регрессия содержит не все объясняющие
	 переменные.


	- Неверная функциональная форма. Некоторые или все переменные
	 должны быть преобразованы с помощью логарифмической, степенной, обратной
	 или какой-либо другой функции.


	- Корреляция между факторами Х и случайной составляющей модели,
	 которая может быть вызвана ошибками измерения факторов, рассмотрением
	 систем уравнений или другими причинами.


Ошибки такого рода приводят к смещению среднего остатков регрессионной
 модели.


Для работы с параметрами данного теста приведите значение, возвращаемое
 свойством [IMsDiagnosticTest.Settings](../IMsDiagnosticTest/IMsDiagnosticTest.Settings.htm),
 к интерфейсу IMsRamseyRessetTestSettings.


## Свойства


		 Имя свойства
		 Краткое описание


		 ![](../../Property_Image.gif)
		 [Power](IMsRamseyRessetTestSettings.Power.htm)
		 Свойство Power определяет
		 число дополнительных регрессоров, входящих в тестовую регрессию.


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
