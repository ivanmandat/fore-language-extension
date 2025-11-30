# IChartWidget.Source

IChartWidget.Source
-


# IChartWidget.Source


## Синтаксис


Source: [IChartSource](../IChartSource/IChartSource.htm);


## Описание


Свойство Source определяет источник
 данных для компонента ChartWidget.


## Пример


Для выполнения примера в репозитории предполагается наличие формы, содержащей
 компоненты:


	- NavigationBar с идентификатором
	 «NavigationBar1»;


	- ChartWidget с идентификатором
	 «ChartWidget1»;


	- ChartBox с идентификатором
	 «ChartBox1»;


	- UiChart с идентификатором
	 «UiChart1». Для «UiChart1» необходимо задать количество точек и рядов.
	 Для построения диаграммы необходимо создать обработчики событий [OnGetDataValue](../../Class/UiChart/UiChart.OnGetDataValue.htm)
	 и [OnGetSerieName](../../Class/UiChart/UiChart.OnGetSerieName.htm).


			Sub UserProc;

Begin

    // Укажем источник данных для компонента ChartBox

    ChartBox1.Source := UiChart1 As IChartSource;

    // Активируем компонент ChartWidget

    ChartWidget1.Active := True;

    // Подключим компонент NavigationBar к ChartWidget

    ChartWidget1.NavBar := NavigationBar1;

    // Укажем источник данных для компонента ChartWidget

    ChartWidget1.Source := UiChart1 As IChartSource;

End Sub UserProc;


После выполнения примера появится возможность работать с диаграммой
 с помощью компонента NavigationBar.


См. также:


[IChartWidget](IChartWidget.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
