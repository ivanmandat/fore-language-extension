# IChart.Refresh

IChart.Refresh
-


# IChart.Refresh


## Синтаксис


Refresh;


## Описание


Метод Refresh осуществляет обновление диаграммы при внесении изменений в набор данных источника диаграммы.


## Пример


Для выполнения примера предполагается наличие формы, расположенной на ней кнопки с наименованием «Button1», компонентов ChartBox и UiChart, являющегося источником данных.


			Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);

Var

    Chart: IChart;

Begin

    Chart:= UiChart1.Chart;

    UiChart1.SetPointSerieCount(5,5);

    Chart.Refresh;

End Sub Button1OnClick;


После нажатия кнопки «Button1» будет произведено обновление диаграммы.


См. также:


[IChart](IChart.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
