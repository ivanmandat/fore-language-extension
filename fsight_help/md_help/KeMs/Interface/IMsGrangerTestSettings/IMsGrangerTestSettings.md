# IMsGrangerTestSettings

IMsGrangerTestSettings
-


# IMsGrangerTestSettings


Сборка: Ms;


## Описание


Интерфейс IMsGrangerTestSettings
 предназначен для настройки параметров расчёта теста Гранжера.


## Иерархия наследования


           [IMsVariableTestSettings](../IMsVariableTestSettings/IMsVariableTestSettings.htm)


           IMsGrangerTestSettings


## Комментарии


Тест Гранжера предназначен для проверки гипотезы о причинно-следственной
 зависимости временных рядов.


Для получения параметров расчёта теста приведите значение, возвращаемое
 свойством [IMsVariableTest.Settings](../IMsVariableTest/IMsVariableTest.Settings.htm),
 к интерфейсу IMsGrangerTestSettings.


## Свойства


		 Имя свойства
		 Краткое описание


		 ![](../../Property_Image.gif)
		 [ConfidenceLevel](IMsGrangerTestSettings.ConfidenceLevel.htm)
		 Свойство ConfidenceLevel
		 определяет уровень значимости, при котором гипотеза отвергается.


		 ![](../../Property_Image.gif)
		 [Lag](IMsGrangerTestSettings.Lag.htm)
		 Свойство Lag определяет
		 значение лага для тестируемых переменных.


## Свойства, унаследованные от [IMsVariableTestSettings](../IMsVariableTestSettings/IMsVariableTestSettings.htm)


		 Имя свойства
		 Краткое описание


		 ![](../../Property_Image.gif)
		 [EndDate](../IMsVariableTestSettings/IMsVariableTestSettings.EndDate.htm)


		 Свойство EndDate определяет
		 конечную точку расчёта.


		 ![](../../Property_Image.gif)
		 [IncludedSources](../IMsVariableTestSettings/IMsVariableTestSettings.IncludedSources.htm)


		 Свойство IncludedSources
		 возвращает коллекцию переменных, для которых рассчитывается описательная
		 статистика.


		 ![](../../Property_Image.gif)
		 [MissingData](../IMsVariableTestSettings/IMsVariableTestSettings.MissingData.htm)


		 Свойство MissingData
		 возвращает параметры обработки пропусков.


		 ![](../../Property_Image.gif)
		 [StartDate](../IMsVariableTestSettings/IMsVariableTestSettings.StartDate.htm)


		 Свойство StartDate
		 определяет начальную точку расчёта.


		 ![](../../Property_Image.gif)
		 [SupportsR](../IMsVariableTestSettings/IMsVariableTestSettings.SupportsR.htm)


		 Свойство SupportsR
		 определяет, возможен ли расчет описательной статистики с помощью
		 R.


		 ![](../../Property_Image.gif)
		 [UseR](../IMsVariableTestSettings/IMsVariableTestSettings.UseR.htm)


		 Свойство UseR
		 определяет, используется ли при расчете описательной статистики
		 подключение к R.


См. также:


[Интерфейсы сборки Ms](../KeMs_Interface.htm)
 | Библиотека методов и моделей: [Тест Гранжера](Lib.chm::/05_statistics/uimodelling_grangertest.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
