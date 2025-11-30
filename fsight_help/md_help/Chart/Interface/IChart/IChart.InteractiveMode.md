# IChart.InteractiveMode

IChart.InteractiveMode
-


# IChart.InteractiveMode


## Синтаксис


InteractiveMode: [ChartInteractiveMode](../../Enums/ChartInteractiveMode.htm);


## Описание


Свойство InteractiveMode определяет
 режим интерактивности.


## Комментарии


По умолчанию используется режим «Selection»
 - режим выделения объектов диаграммы.


## Пример


Для выполнения примера создайте форму, добавьте на нее кнопку с наименованием
 «Button1», компонент ChartBox с наименованием «ChartBox1», компонент UiChart
 с наименованием «UiChart1», укажите «UiChart1» в качестве источника компонента
 ChartBox, у компонента UiChart укажите значения свойств PointCount
 и SerieCount, в инспекторе сборок модуля добавьте ссылки на системные
 сборки Chart, MathFin.


	Class TESTForm: Form

	    Button1: Button;

	    UiChart1: UiChart;

	    ChartBox1: ChartBox;

	    Sub UiChart1OnGetDataValue(Sender: Object; Args: IUiChartGetDataValueEventArgs);

	    Begin

	        Args.Result := True;

	        Args.Value := Math.Rand;

	    End Sub UiChart1OnGetDataValue;

	    Sub UiChart1OnGetSerieName(Sender: Object; Args: IUiChartSerieNameEventArgs);

	    Begin

	        Args.Result := "Ряд " + Args.SerieIndex.ToString;

	    End Sub UiChart1OnGetSerieName;

	    Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);

	    Var

	        Chart: IChart;

	    Begin

	        Chart := UiChart1.Chart;

	        Chart.InteractiveMode := ChartInteractiveMode.EditByPoint;

	        Chart.EditedSerie := 0;

	    End Sub Button1OnClick;

	End Class TESTForm;


При нажатии на кнопку «Button1» будет установлен режим интерактивности
 «EditByPoint» и выбран для редактирования
 ряд с индексом «0».


См. также:


[IChart](IChart.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
