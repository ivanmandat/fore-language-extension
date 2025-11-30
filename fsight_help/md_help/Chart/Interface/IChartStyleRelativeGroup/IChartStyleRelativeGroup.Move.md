# IChartStyleRelativeGroup.Move

IChartStyleRelativeGroup.Move
-


# IChartStyleRelativeGroup.Move


## Синтаксис


Move(Index: Integer; IndexBefore: Integer);


## Параметры


Index. Индекс ряда , который необходимо переместить.


IndexBefore. Индекс ряда, после которого необходимо поместить перемещаемый ряд.


## Описание


Метод Move перемещает ряд в пределах одной относительной группы рядов диаграммы.


## Комментарии


Индексы рядов указываются в рамках одной относительной группы рядов, в которой будет происходить перемещение.


## Пример


Для выполнения примера понадобится форма с расположенными на ней компонентами UiChart, ChartBox и Button с идентификаторами «UiChart1», «ChartBox1» и «Button1» соответственно. Компонент «UiChart1» должен являться источником данных для компонента «ChartBox1» и в нём для диаграммы должен быть установлен тип шкалы «Смешанный».


			Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);

Var

    Chart: IChart;

Begin

    Chart := ChartBox1.Chart;

    Chart.StyleGroup.Item(0).Move(0, 1);

End Sub Button1OnClick;


После выполнения примера при нажатии на компонент «Button1» указанный ряд будет перемещён в пределах его относительной группы рядов.


См. также:


[IChartStyleRelativeGroup](IChartStyleRelativeGroup.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
