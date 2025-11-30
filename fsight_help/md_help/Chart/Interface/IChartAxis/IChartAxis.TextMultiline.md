# IChartAxis.TextMultiline

IChartAxis.TextMultiline
-


# IChartAxis.TextMultiline


## Синтаксис


TextMultiline: [TextMultilineType](../../Enums/TextMultilineType.htm);


## Описание


Свойство TextMultiline определяет
 тип переноса текста подписей.


## Комментарии


Свойство может быть установлено только для оси категорий (оси X) для
 неточечных типов диаграмм. Данное свойство сохраняется с диаграммой.


## Пример


Для выполнения примера предполагается наличие формы, содержащей компонент
 Button с идентификатором «Button1», компонент
 ChartBox
 с идентификатором «ChartBox1» и компонент UiErAnalyzer с идентификатором
 «UiErAnalyzer1». Укажите «UiErAnalyzer1» в качестве источника данных для
 компонента «ChartBox1». В качестве источника данных для компонента «ChartBox1»
 используется экспресс-отчет с настроенной диаграммой на активном листе.


Пример является обработчиком
 события OnClick для компонента «Button1».


	Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);

	Var

	    Chart: IChart;

	    ChartAxis: IChartAxis;

	Begin

	    Chart := ChartBox1.Chart;

	    Chart.TickLabelSpacingAuto := True;

	    ChartAxis:=Chart.AxisX;

	    ChartAxis.TextMultiline := TextMultilineType.MultilineBySymbols;

	End Sub Button1OnClick


После нажатия кнопки к тексту подписи оси категории будет применен перенос
 по символам.


См. также:


[IChartAxis](IChartAxis.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
