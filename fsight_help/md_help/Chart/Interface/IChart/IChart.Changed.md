# IChart.Changed

IChart.Changed
-


# IChart.Changed


## Синтаксис


Changed: Boolean;


## Описание


Свойство Changed возвращает признак наличия изменений в текущей диаграмме.


## Комментарии


Свойство возвращает следующие значения:


-
True. Параметры диаграммы были изменены;


-
False. Параметры диаграммы не изменялись либо редактирование было отменено.


## Пример


Для выполнения примера предполагается наличие формы, расположенной на ней кнопки с наименованием «Button1», компонентов ChartBox и UiChart, являющегося источником данных.


			Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);

Var

    Chart: IChart;

Begin

    Chart:= UiChart1.Chart;

    Chart.CircleInfoEx.ShowMode:= ChartSecondaryShowMode.OnlySecondary;

    Chart.MakeBlackAndWhite;

    debug.WriteLine(Chart.Changed);

End Sub Button1OnClick;


После нажатия кнопки «Button1» в окно консоли будет выведена информация о наличии изменений в диаграмме.


См. также:


[IChart](IChart.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
