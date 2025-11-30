# IChartSerieBase.Visible

IChartSerieBase.Visible
-


# IChartSerieBase.Visible


## Синтаксис


Visible: Boolean;


## Описание


Свойство Visible определяет
 видимость ряда данных.


## Комментарии


Если значение данного свойства True,
 то ряд будет отображаться на графике, при значении False
 - этого не происходит.


## Пример


Для выполнения примера предполагается наличие формы, расположенной на
 ней кнопки с наименованием «Button1», компонента [UiErAnalyzer](UiDevEnv.chm::/02_Components_constructor_forms/03_Components_of_the_access_to_data/UiErAnalyzer.htm)
 с наименованием «UiErAnalyzer1», являющегося источником данных для компонента
 [ChartBox](UiDevEnv.chm::/02_Components_constructor_forms/03_Components_of_the_access_to_data/ChartBox.htm).


	Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);

	Var

	    ErAnalyzer: IEaxAnalyzer;

	    EaxChart: IEaxChart;

	    Chart: IChart;

	    Series: IChartSeries;

	    ChartSerie: IChartSerie;

	Begin

	    ErAnalyzer := UiErAnalyzer1.ErAnalyzer;

	    EaxChart := ErAnalyzer.Chart;

	    Chart := EaxChart.Chart;

	    Series := Chart.Series;

	    ChartSerie := Series.Item(0);

	    ChartSerie.Visible := False;

	End Sub Button1OnClick;


После выполнения примера первый ряд данных диаграммы будет скрыт.


См. также:


[IChartSerieBase](IChartSerieBase.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
