# IChartAxis.DisplaySelectedPoints

IChartAxis.DisplaySelectedPoints
-


# IChartAxis.DisplaySelectedPoints


## Синтаксис


DisplaySelectedPoints([FitToAll: Boolean = false]);


## Параметры


FitToAll. Режим масштабирования
 диаграммы.


## Описание


Метод DisplaySelectedPoints
 масштабирует диаграмму таким образом, чтобы отображались все выделенные
 точки.


## Комментарии


Метод предназначен для работы с диаграммой, у которой применено масштабирование
 к оси категорий, то есть свойство [IChart.InteractiveMode](../IChart/IChart.InteractiveMode.htm)
 принимает значение [ChartInteractiveMode.Zoom](../../Enums/ChartInteractiveMode.htm),
 а свойство [IChart.ZoomMode](../IChart/IChart.ZoomMode.htm)
 - значение [ChartZoomMode.AxisX](../../Enums/ChartZoomMode.htm).


Допустимые значения параметра FitToAll:


	- True. Все выделенные
	 точки будут отображены на диаграмме в максимальном масштабе;


	- False. Значение по умолчанию
	 для Fore. Если все выделенные точки отображаются на диаграмме, то
	 перестроение диаграммы не происходит; если есть выделенные точки за
	 пределами видимой области, то масштаб диаграммы будет изменён таким
	 образом, чтобы все точки отображались на диаграмме.


## Пример


Для выполнения примера предполагается наличие формы, содержащей компонент
 ChartBox с идентификатором «ChartBox1»
 и компонент UiChart с идентификатором
 «UiChart1», являющийся источником данных для «ChartBox1». Компонент «UiChart1»
 должен содержать два или более ряда, каждый ряд должен содержать больше
 десяти точек.


			Sub UserProc;

Var

    Chart: IChart;

    Series: IChartSeries;

    Serie: IChartSerie;

Begin

    // Получаем диаграмму

    Chart := UiChart1.Chart;

    // Устанавливаем режим масштабирования для оси категорий

    Chart.InteractiveMode := ChartInteractiveMode.Zoom;

    Chart.ZoomMode := ChartZoomMode.AxisX;

    // Получаем ряды диаграммы

    Series := Chart.Series;

    // Получаем первый ряд и выделяем вторую и четвертую точки

    Serie := Series.Item(0);

    Serie.SeriePoint(1).Selected := True;

    Serie.SeriePoint(3).Selected := True;

    // Получаем второй ряд и выделяем шестую и девятую точки

    Serie := Series.Item(1);

    Serie.SeriePoint(5).Selected := True;

    Serie.SeriePoint(8).Selected := True;

    // Перестраиваем диаграмму таким образом, чтобы отображались все выделенные точки

    Chart.AxisX.DisplaySelectedPoints(True);

End Sub UserProc;


В результате выполнения примера на диаграмме будут выделены вторая и
 четвертая точки первого ряда и шестая и девятая точка второго ряда. Масштаб
 диаграммы будет изменен таким образом, чтобы выделенные точки отображались
 в максимальном масштабе.


См. также:


[IChartAxis](IChartAxis.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
