# IEaxDrillSerieResult.Serie

IEaxDrillSerieResult.Serie
-


# IEaxDrillSerieResult.Serie


## Синтаксис


Serie: [IChartSerie](Chart.chm::/Interface/IChartSerie/IChartSerie.htm);


## Описание


Свойство Serie возвращает параметры
 ряда данных диаграммы.


## Комментарии


Данное свойство возвращает параметры того ряда, для которого был выполнен
 метод [IEaxAnalyzeCore.DrillSerie](../IEaxAnalyzeCore/IEaxAnalyzeCore.DrillSerie.htm).


## Пример


Для выполнения примера предполагается наличие формы, содержащей компонент
 Button с наименованием «Button1»
 и компонент UiErAnalyzer с наименованием
 «UiErAnalyzer1», являющегося источником данных для компонента ChartBox
 с наименованием «ChartBox1». Таблица экспресс-отчёта, указанного в качестве
 источника для «UiErAnalyzer1», должна содержать хотя бы один ряд данных.
 Установите для компонента «UiErAnalyzer1» свойство Active = True.


Добавьте ссылки на системные сборки: Chart, Express.


Процедура является обработчиком события OnClick для компонента «Button1».


	Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);

	Var

	    Expr: IEaxAnalyzer;

	    Serie: IChartSerie;

	    Series: IChartSeries;

	    EaxChart: IEaxChart;

	    Chart: IChart;

	    DrillSerie: IEaxDrillSerieResult;

	Begin

	    Expr := UiErAnalyzer1.ErAnalyzer;

	    EaxChart := Expr.Chart;

	    Chart := EaxChart.Chart;

	    Series := Chart.Series;

	    Serie := Series.Item(0);

	    DrillSerie := Expr.DrillSerie(Serie);

	    DrillSerie.Serie.Selected := True;

	End Sub Button1OnClick;


При нажатии на кнопку будет выделен ряд, для которого был выполнен метод [IEaxAnalyzeCore.DrillSerie](../IEaxAnalyzeCore/IEaxAnalyzeCore.DrillSerie.htm).


См. также:


[IEaxDrillSerieResult](IEaxDrillSerieResult.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
