# IChartCircleExInfo.ShowMode

IChartCircleExInfo.ShowMode
-


# IChartCircleExInfo.ShowMode


## Синтаксис


ShowMode : [ChartSecondaryShowMode](../../Enums/ChartSecondaryShowMode.htm);


## Описание


Свойство ShowMode определяет режимы отображения вторичной диаграммы.


## Комментарии


При установке режимов отображения OnlyPrimary, OnlySecondary флаг [CollapseLegendItems](IChartCircleExInfo.CollapseLegendItems.htm) не влияет на отображение пиктограмм в легенде, будут отображаться пиктограммы рядов, отображаемых в данный момент на диаграмме.


## Пример


Для выполнения примера предполагается наличие формы, расположенной на ней кнопки с наименованием «Button1», компонентов ChartBox и UiChart, являющегося источником данных.


			Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);

Begin

    // Установка типа диаграммы - Вторичная столбиковая
    UiChart1.Chart.Type := ChartType.SecondaryBars;

    // Установка отображения только основной диаграммы
    UiChart1.Chart.CircleInfoEx.ShowMode := ChartSecondaryShowMode.OnlyPrimary;

End Sub Button1OnClick;


После нажатия кнопки «Button1» будет отображаться только основная диаграмма.


См. также:


[IChartCircleExInfo](IChartCircleExInfo.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
