# IChart.IsDirty

IChart.IsDirty
-


# IChart.IsDirty


## Синтаксис


IsDirty: Boolean;


## Описание


Свойство IsDirty определяет, присутствуют ли изменения в параметрах диаграммы.


## Комментарии


Установка свойству значения True свидетельствует о том, что параметры диаграммы были изменены. Значение False означает, что изменения отсутствуют.


## Пример


Для выполнения примера предполагается наличие формы, расположенной на ней кнопки с наименованием «Button1», компонентов ChartBox и UiChart, являющегося источником данных.


			Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);

Var

    Chart: IChart;

Begin

    Chart:= UiChart1.Chart;

    Chart.CircleInfoEx.ShowMode:= ChartSecondaryShowMode.OnlySecondary;

    Chart.MakeBlackAndWhite;

    debug.WriteLine(Chart.IsDirty);

End Sub Button1OnClick;


После нажатия кнопки «Button1» в окно консоли будет выведена информация о наличии изменений в параметрах диаграммы.


См. также:


[IChart](IChart.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
