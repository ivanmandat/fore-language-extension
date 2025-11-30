# IChartAxis.EnableReducingLabelSize

IChartAxis.EnableReducingLabelSize
-


# IChartAxis.EnableReducingLabelSize


## Синтаксис


EnableReducingLabelSize: Boolean;


## Описание


Свойство EnableReducingLabelSize
 определяет возможность автоматического уменьшения размера шрифта подписей
 на оси значений.


## Комментарии


Допустимые значения:


	- True. Размер
	 шрифта подписей на оси значений будет автоматически уменьшен при уменьшении
	 размера диаграммы;


	- False. Значение по умолчанию.
	 Размер шрифта подписей на оси значений не будет изменяться при уменьшении
	 размера диаграммы.


## Пример


Для выполнения примера предполагается наличие формы, содержащей следующие
 компоненты:


	- Кнопку с идентификатором «Button1»;


	- ChartBox с наименованием
	 «ChartBox1», свойство [Source](../IChartBox/IChartBox.Source.htm)
	 должно быть настроено на источник данных «UiChart1»;


	- UiChart с наименованием
	 «UiChart1», являющийся источником данных для «ChartBox1». Следует
	 задать произвольные значения свойствам [PointCount](../IChart/IChart.PointsCount.htm) и SerieCount.


Добавьте ссылки на системные сборки: MathFin, Forms, Chart.


Пример является обработчиком события OnClick
 для компонента «Button1». Для отображения данных в диаграмме для компонента
 «UiChart1» добавьте обработчик события [OnGetDataValue](../../Class/UiChart/UiChart.OnGetDataValue.htm),
 в котором будут задаваться случайные значения для диаграммы и фиксированный
 шаг для оси значений.


	Class TestForm: Form

	    UiChart1: UiChart;

	    ChartBox1: ChartBox;

	    Button1: Button;


	    Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);

	    Var

	        Chart : IChart;

	        Axis1 : IChartAxis;

	    Begin

	        Chart := UiChart1.Chart;

	        Axis1 := Chart.AxisY;

	        // Задаем автоматическое
	 уменьшение размера шрифта подписей на оси значений Y

	        Axis1.EnableReducingLabelSize := True;

	    End Sub Button1OnClick;


	// Заполняем диаграмму случайными данными

	    Sub UiChart1OnGetDataValue(Sender: Object; Args: IUiChartGetDataValueEventArgs);

	    Var

	        Chart : IChart;

	        Axis1 : IChartAxis;

	    Begin

	        // Заполняем диаграмму случайными данными

	        Args.Result := True;

	        Args.Value := Math.RandBetween(10,40);

	        // Задаем фиксированный шаг для оси
	 значений Y

	        Chart := UiChart1.Chart;

	        Axis1 := Chart.AxisY;

	        Axis1.StepMode := ChartAxisStepMode.FixedStep;

	        Axis1.StepValue := 5;

	    End Sub UiChart1OnGetDataValue;


	End Class TestForm;


После выполнения примера при ручном изменении размеров диаграммы размер
 шрифта подписей на оси значений будет уменьшаться, только если была нажата
 кнопка «Button1».


См. также:


[IChartAxis](IChartAxis.htm)
 | [IChartAxis.StepValue](IChartAxis.StepValue.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
