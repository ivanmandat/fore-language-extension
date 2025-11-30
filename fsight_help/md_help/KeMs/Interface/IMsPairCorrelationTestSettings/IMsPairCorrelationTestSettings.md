# IMsPairCorrelationTestSettings

IMsPairCorrelationTestSettings
-


# IMsPairCorrelationTestSettings


Сборка: Ms;


## Описание


Интерфейс IMsPairCorrelationTestSettings
 предназначен для настройки параметров расчёта парных коэффициентов корреляции.


## Иерархия наследования


           [IMsVariableTestSettings](../IMsVariableTestSettings/IMsVariableTestSettings.htm)


           IMsPairCorrelationTestSettings


## Комментарии


Корреляция служит для оценки тесноты и направления линейной стохастической
 зависимости между изучаемыми переменными.


Для получения параметров расчёта парных коэффициентов корреляции приведите
 значение, возвращаемое свойством [IMsVariableTest.Settings](../IMsVariableTest/IMsVariableTest.Settings.htm),
 к интерфейсу IMsPairCorrelationTestSettings.


## Свойства


		 Имя свойства
		 Краткое описание


		 ![](../../Property_Image.gif)
		 [BalancedSample](IMsPairCorrelationTestSettings.BalancedSample.htm)
		 Свойство BalancedSample
		 определяет, по каким наблюдениям рассчитываются коэффициенты корреляции.


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


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
