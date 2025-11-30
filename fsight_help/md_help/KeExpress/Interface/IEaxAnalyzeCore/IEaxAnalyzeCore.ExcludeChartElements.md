# IEaxAnalyzeCore.ExcludeChartElements

IEaxAnalyzeCore.ExcludeChartElements
-


# IEaxAnalyzeCore.ExcludeChartElements


## Синтаксис


ExcludeChartElements(Elements: Array);


## Параметры


Elements. Массив, содержащий
 элементы диаграммы, которые необходимо исключить.


## Описание


Метод ExcludeChartElements исключает
 из отметки указанные элементы измерений.


## Комментарии


Массив, заданный в параметре Elements,
 может содержать ряды или точки диаграммы. При выполнении метода элементы
 измерений, соответствующие выбранным элементам диаграммы, будут исключены
 из отметки.


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

	     Arr[0] := Series.Item(0);

	     Arr[1] := Series.Item(1);

	     Eax.ExcludeChartElements(Arr);

	End Sub Button1OnClick;


При нажатии на кнопку будут удалены
 первые два ряда диаграммы.


См. также:


[IEaxAnalyzeCore](IEaxAnalyzeCore.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
