# IChartExporter.Chart

IChartExporter.Chart
-


# IChartExporter.Chart


## Синтаксис


Chart: [IChart](../IChart/IChart.htm);


## Описание


Свойство Chart определяет диаграмму
 для экспорта.


## Пример


Для выполнения примера предполагается наличие формы, расположенной на
 ней кнопки с наименованием "Button1" и компонентов UiErAnalyzer
 и ImageBox с наименованиями "UiErAnalyzer1" и "ImageBox1"
 соответственно.


	Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);

	Var

	    Chart: IChart;

	    Exp: IChartExporter;

	Begin

	    Chart := UiErAnalyzer1.ErAnalyzer.Chart.Chart;

	    Exp := New ChartExporter.Create;

	    Exp.Chart := Chart;

	    ImageBox1.Image := Exp.GetBitmap;

	End Sub Button1OnClick;


При нажатии на кнопку, в компонент "ImageBox1" будет загружено
 графическое изображение диаграммы, используемой в экспресс-отчете


См. также:


[IChartExporter](IChartExporter.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
