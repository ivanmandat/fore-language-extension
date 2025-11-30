# IMsJohansenTestSettings

IMsJohansenTestSettings
-


# IMsJohansenTestSettings


Сборка: Ms;


## Описание


Интерфейс IMsJohansenTestSettings
 предназначен для настройки параметров расчёта теста Йохансена.


## Иерархия наследования


           [IMsVariableTestSettings](../IMsVariableTestSettings/IMsVariableTestSettings.htm)


           IMsJohansenTestSettings


## Комментарии


Тест Йохансена позволяет выявить наличие стационарных линейных комбинаций
 временных рядов, являющихся интегрированными первого порядка, и является
 одним из методов оценки систем, использующих метод максимального правдоподобия
 применительно к векторным авторегрессионным моделям.


Для получения параметров расчёта теста приведите значение, возвращаемое
 свойством [IMsVariableTest.Settings](../IMsVariableTest/IMsVariableTest.Settings.htm),
 к интерфейсу IMsJohansenTestSettings.


## Свойства


		 Имя свойства
		 Краткое описание


		 ![](../../Property_Image.gif)
		 [AutoRegressionOrder](IMsJohansenTestSettings.AutoRegressionOrder.htm)
		 Свойство AutoRegressionOrder
		 определяет порядок авторегрессии.


		 ![](../../Property_Image.gif)
		 [ExogenousSources](IMsJohansenTestSettings.ExogenousSources.htm)
		 Свойство ExogenousSources
		 возвращает коллекцию экзогенных переменных.


		 ![](../../Property_Image.gif)
		 [ModelType](IMsJohansenTestSettings.ModelType.htm)
		 Свойство ModelType
		 определяет используемый тип модели коррекции ошибок.


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
 | Библиотека методов и моделей: [Тест
 Йохансена](Lib.chm::/05_statistics/uimodelling_johansen_test.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
