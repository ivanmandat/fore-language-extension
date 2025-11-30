# IEaxAnalyzeCore.KeepOnlyChartElements

IEaxAnalyzeCore.KeepOnlyChartElements
-


# IEaxAnalyzeCore.KeepOnlyChartElements


## Синтаксис


KeepOnlyChartElements(Elements: Array);


## Параметры


Elements. Массив, содержащий
 [ряды](Chart.chm::/Interface/IChartSerie/IChartSerie.htm)
 или [точки](Chart.chm::/Interface/IChartSerie/IChartSerie.SeriePoint.htm)
 диаграммы, которые необходимо оставить доступными.


## Описание


Метод KeepOnlyChartElements
 изменяет отметку таким образом, что доступными остаются только указанные
 элементы диаграммы.


## Комментарии


Если в массиве заданы только точки, то доступными останутся только выбранные
 точки, если заданы ряды и точки, то доступными останутся указанные ряды
 и ряды указанных точек.


## Пример


Для выполнения примера предполагается наличие формы, содержащей компонент
 Button с наименованием «Button1»
 и компонент UiErAnalyzer с наименованием
 «UiErAnalyzer1», являющегося источником данных для компонента ChartBox
 с наименованием «ChartBox1». Диаграмма экспресс-отчёта, указанного в качестве
 источника для «UiErAnalyzer1», должна содержать не меньше двух рядов.
 Установите для компонента «UiErAnalyzer1» свойство Active = True.


Добавьте ссылки на системные сборки: Chart, Express.


Процедура является обработчиком события OnClick для компонента «Button1».


	Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);

	Var

	    Eax: IEaxAnalyzer;

	    Chart: IChart;

	    Series: IChartSeries;

	    Arr: Array Of Variant;

	Begin

	    Eax := UiErAnalyzer1.ErAnalyzer;

	    Chart := Eax.Chart.Chart;

	    Arr := New Variant[2];

	    Series := Chart.Series;

	    Arr[0] := Series.Item(0).SeriePoint(0);

	    Arr[1] := Series.Item(1).SeriePoint(0);

	    Eax.KeepOnlyChartElements(Arr);

	    Debug.WriteLine(Series.Count.ToString);

	End Sub Button1OnClick;


При нажатии на кнопку на диаграмме останутся доступными только первые
 точки двух указанных рядов.


См. также:


[IEaxAnalyzeCore](IEaxAnalyzeCore.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
