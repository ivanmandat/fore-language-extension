# IEaxDrillPointResult.Point

IEaxDrillPointResult.Point
-


# IEaxDrillPointResult.Point


## Синтаксис


Point: [IChartSeriePoint](Chart.chm::/Interface/IChartSeriePoint/IChartSeriePoint.htm);


## Описание


Свойство Point возвращает параметры
 точки ряда данных диаграммы.


## Комментарии


Данное свойство возвращает параметры той точки, для которой был выполнен
 метод [IEaxAnalyzeCore.DrillPoint](../IEaxAnalyzeCore/IEaxAnalyzeCore.DrillPoint.htm).


## Пример


Для выполнения примера на форме предполагается наличие кнопки с наименованием
 «Button1», компонента ChartBox
 с наименованием «ChartBox1» и компонента UiErAnalyzer
 с наименованием «UiErAnalyzer», являющегося источником для «ChartBox1».
 Экспресс-отчет, подключенный в «UiErAnalyzer1», должен содержать хотя
 бы один ряд данных.


Процедура является обработчиком события OnClick
 для кнопки «Button1». Пример будет выполняться при нажатии кнопки.


	Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);

	Var

	    Expr: IEaxAnalyzer;

	    Serie: IChartSerie;

	    Series: IChartSeries;

	    EaxChart: IEaxChart;

	    Chart: IChart;

	    Point: IChartSeriePoint;

	    DrillPoint: IEaxDrillPointResult;

	Begin

	    Expr := UiErAnalyzer1.ErAnalyzer;

	    EaxChart := Expr.Chart;

	    Chart := EaxChart.Chart;

	    Series := Chart.Series;

	    Serie := Series.Item(0);

	    Point := Serie.SeriePoint(0);

	    DrillPoint := Expr.DrillPoint(Point);

	    DrillPoint.Point.Selected := True;

	End Sub Button1OnClick;


После выполнения примера будет выделена точка ряда, для которой был
 выполнен метод [IEaxAnalyzeCore.DrillPoint](../IEaxAnalyzeCore/IEaxAnalyzeCore.DrillPoint.htm).


См. также:


[IEaxDrillPointResult](IEaxDrillPointResult.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
