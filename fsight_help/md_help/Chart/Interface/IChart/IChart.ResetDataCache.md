# IChart.ResetDataCache

IChart.ResetDataCache
-


# IChart.ResetDataCache;


## Синтаксис


ResetDataCache;


## Описание


Метод ResetDataCache перезаписывает кеш диаграммы.


## Комментарии


Метод актуален для диаграмм с большим количеством точек, чтобы не было необходимости подгружать каждый раз данные из источника.


## Пример


Для выполнения примера предполагается наличие формы, расположенной на ней кнопки с наименованием «Button1», компонентов ChartBox и UiChart, являющегося источником данных.


			Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);

Var

    Chart: IChart;

Begin

    Chart:= UiChart1.Chart;

    UiChart1.SetPointSerieCount(15,15);

    Chart.ResetDataCache;

End Sub Button1OnClick;


После нажатия кнопки «Button1» будет перезаписан кеш диаграммы.


См. также:


[IChart](IChart.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
