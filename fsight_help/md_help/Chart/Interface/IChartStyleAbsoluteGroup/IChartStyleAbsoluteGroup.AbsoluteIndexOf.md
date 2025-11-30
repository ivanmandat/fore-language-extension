# IChartStyleAbsoluteGroup.AbsoluteIndexOf

IChartStyleAbsoluteGroup.AbsoluteIndexOf
-


# IChartStyleAbsoluteGroup.AbsoluteIndexOf


## Синтаксис


AbsoluteIndexOf(Serie: [IChartSerie](../IChartSerie/IChartSerie.htm)): Integer;


## Параметры


Serie. Ряд, индекс относительной группы которого необходимо получить.


## Описание


Свойство AbsoluteIndexOf возвращает индекс относительной группы рядов диаграммы, к которой принадлежит указанный ряд.


## Комментарии


Относительная группа формируется суммированием значений рядов. Итоговая диаграмма в этом случае выглядит следующим образом:


![](MakeRelative.gif)


## Пример


Для выполнения примера понадобится форма с расположенными на ней компонентами UiChart, ChartBox и Button с идентификаторами «UiChart1», «ChartBox1» и «Button1» соответственно. Компонент «UiChart1» должен являться источником данных для компонента «ChartBox1» и в нём для диаграммы должен быть установлен тип шкалы «Смешанный». Также для диаграммы должен быть установлен [режим гиперссылок](../../Enums/ChartInteractiveMode.htm).


			Sub ChartBox1OnSerieClick(Sender: Object; Args: IChartSerieClickEventArgs);

Var

    Chart: IChart;

Begin

    Chart := ChartBox1.Chart;

    Debug.WriteLine(Chart.StyleGroup.AbsoluteIndexOf(Chart.Series.Item(Args.SerieIndex)).ToString);

End Sub ChartBox1OnSerieClick;


После выполнения примера при нажатии на определённый ряд диаграммы в консоль будет выведен индекс относительной группы рядов, к которой он принадлежит.


См. также:


[IChartStyleAbsoluteGroup](IChartStyleAbsoluteGroup.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
