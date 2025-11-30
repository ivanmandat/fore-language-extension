# IChart.UseAutoVisibleZoomScrollbars

IChart.UseAutoVisibleZoomScrollbars
-


# IChart.UseAutoVisibleZoomScrollbars


## Синтаксис


UseAutoVisibleZoomScrollbars: Boolean;


## Описание


Свойство UseAutoVisibleZoomScrollbars определяет необходимость отображения полос прокрутки для масштабируемой диаграммы.


## Комментарии


При масштабировании диаграммы появляются полосы прокрутки, и если диаграмма активна, то при установке значения свойства False, они всегда отображаются. При установке значения True, полосы прокрутки появляются только при наведении мыши на то место диаграммы, где должны располагаться эти полосы прокрутки.


## Пример


Для выполнения примера предполагается наличие формы, расположенной на ней кнопки с наименованием «Button1», компонентов ChartBox и UiChart, являющегося источником данных.


			Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);

Var

    Chart: IChart;

Begin

    Chart:= UiChart1.Chart;

    Chart.InteractiveMode := ChartInteractiveMode.Zoom;

    Chart.ZoomMode := ChartZoomMode.AxisXY;

    Chart.UseAutoVisibleZoomScrollbars:= True;

End Sub Button1OnClick;


После нажатия кнопки «Button1» на диаграмме будут отображаться полосы прокрутки.


См. также:


[IChart](IChart.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
