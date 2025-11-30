# IMsDFTestSettings

IMsDFTestSettings
-


# IMsDFTestSettings


Сборка: Ms;


## Описание


Интерфейс IMsDFTestSettings
 предназначен для настройки параметров расчёта расширенного теста Дики-Фуллера.


## Иерархия наследования


           [IMsVariableTestSettings](../IMsVariableTestSettings/IMsVariableTestSettings.htm)


           IMsDFTestSettings


## Комментарии


Расширенный тест Дики-Фуллера является средством проверки стационарности
 временного ряда.


Для получения параметров расчёта теста приведите значение, возвращаемое
 свойством [IMsVariableTest.Settings](../IMsVariableTest/IMsVariableTest.Settings.htm),
 к интерфейсу IMsDFTestSettings.


## Свойства


		 Имя свойства
		 Краткое описание


		 ![](../../Property_Image.gif)
		 [AutoRegressionOrder](IMsDFTestSettings.AutoRegressionOrder.htm)
		 Свойство AutoRegressionOrder
		 определяет порядок авторегрессии.


		 ![](../../Property_Image.gif)
		 [EquationType](IMsDFTestSettings.EquationType.htm)
		 Свойство EquationType
		 определяет тип модели, используемой для расчёта теста.


		 ![](../../Property_Image.gif)
		 [TestedSeries](IMsDFTestSettings.TestedSeries.htm)
		 Свойство TestedSeries
		 определяет метод дифференцирования ряда.


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
 | Библиотека методов и моделей: [Тест Дики-Фуллера](Lib.chm::/05_statistics/uimodelling_df_test.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
