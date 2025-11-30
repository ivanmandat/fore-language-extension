# IChart.ZoomMode

IChart.ZoomMode
-


# IChart.ZoomMode


## Синтаксис


ZoomMode: [ChartZoomMode](../../Enums/ChartZoomMode.htm);


## Описание


Свойство ZoomMode определяет
 тип масштабирования.


## Комментарии


По умолчанию используется тип масштабирования «AxisXY»
 - масштабирование по осям X и Y.


Перед заданием типа масштабирования необходимо задать соответствующий
 интерактивный режим - свойство [InteractiveMode](IChart.InteractiveMode.htm)
 установить в Zoom.


## Пример


Для выполнения примера предполагается наличие регламентного отчёта,
 на листе которого расположена диаграмма. К отчету добавлен модуль, с помощью
 которого по гиперссылке вызывается процедура GetZoom. Подключите системные
 сборки: Chart, Report, Tab.


			Sub GetZoom;

Var

    Chart: IChart;

Begin

    Chart := PrxReport.ActiveReport.ActiveSheet.Table.Objects.Item(0).Extension As IChart;

    Chart.InteractiveMode := ChartInteractiveMode.Zoom;

    Chart.ZoomMode := ChartZoomMode.AxisY;

End Sub GetZoom;


После выполнения примера будет установлен режим масштабирования и выбран
 тип масштабирования «только по оси Y» .


См. также:


[IChart](IChart.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
