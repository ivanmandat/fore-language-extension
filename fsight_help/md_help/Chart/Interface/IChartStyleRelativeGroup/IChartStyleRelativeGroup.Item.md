# IChartStyleRelativeGroup.Item

IChartStyleRelativeGroup.Item
-


# IChartStyleRelativeGroup.Item


## Синтаксис


Item(Index: Integer): Integer;


## Параметры


Index. Индекс ряда в относительной группе, к которой он принадлежит.


## Описание


Свойство Item возвращает абсолютный индекс ряда по его индексу в относительной группе рядов диаграммы, к которой он принадлежит.


## Комментарии


Абсолютный индекс ряда это порядковый номер указанного ряда среди всех рядов диаграммы.


## Пример


Для выполнения примера понадобится форма с расположенными на ней компонентами UiChart, ChartBox и Button с идентификаторами «UiChart1», «ChartBox1» и «Button1» соответственно. Компонент «UiChart1» должен являться источником данных для компонента «ChartBox1» и в нём для диаграммы должен быть установлен тип шкалы «Смешанный».


			Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);

Var

    Chart: IChart;

Begin

    Chart := ChartBox1.Chart;

    Debug.WriteLine(Chart.StyleGroup.Item(0).Item(0).ToString);

End Sub Button1OnClick;


После выполнения примера при нажатии на компонент «Button1» в консоль будет выведен абсолютный индекс указанного ряда.


См. также:


[IChartStyleRelativeGroup](IChartStyleRelativeGroup.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
