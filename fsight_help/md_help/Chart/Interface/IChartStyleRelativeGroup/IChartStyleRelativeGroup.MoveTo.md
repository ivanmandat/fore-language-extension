# IChartStyleRelativeGroup.MoveTo

IChartStyleRelativeGroup.MoveTo
-


# IChartStyleRelativeGroup.MoveTo


## Синтаксис


MoveTo(Index: Integer; RelativeGroupIndex: Integer; ToTheBeginning: Boolean);


## Параметры


Index. Абсолютный индекс ряда, который необходимо переместить.


RelativeGroupIndex. Индекс относительной группы, в которую необходимо переместить указанный ряд.


ToTheBeginning. Признак, указывающий на необходимость переместить ряд в начало или конец относительной группы рядов диаграммы.


## Описание


Метод MoveTo перемещает ряд из одной относительной группы рядов диаграммы в другую.


## Комментарии


Абсолютный индекс ряда это порядковый номер указанного ряда среди всех рядов диаграммы.


## Пример


Для выполнения примера понадобится форма с расположенными на ней компонентами UiChart, ChartBox и Button с идентификаторами «UiChart1», «ChartBox1» и «Button1» соответственно. Компонент «UiChart1» должен являться источником данных для компонента «ChartBox1» и в нём для диаграммы должен быть установлен тип шкалы «Смешанный».


			Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);

Var

    Chart: IChart;

Begin

    Chart := ChartBox1.Chart;

    Chart.StyleGroup.Item(0).MoveTo(0, 1, True);

End Sub Button1OnClick;


После выполнения примера при нажатии на компонент «Button1» указанный ряд будет перемещён из одной относительной группы рядов в начало другой.


См. также:


[IChartStyleRelativeGroup](IChartStyleRelativeGroup.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
