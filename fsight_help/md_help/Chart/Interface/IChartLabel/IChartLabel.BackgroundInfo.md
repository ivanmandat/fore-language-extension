# IChartLabel.BackgroundInfo

IChartLabel.BackgroundInfo
-


# IChartLabel.BackgroundInfo


## Синтаксис


BackgroundInfo: [IChartBackgroundInfo](../IChartBackgroundInfo/IChartBackgroundInfo.htm);


## Описание


Свойство BackgroundInfo определяет
 свойства заливки фона подписи данных.


## Пример


Для выполнения примера предполагается наличие регламентного отчёта,
 на листе которого расположена диаграмма. К отчету добавлен модуль, из
 которого с помощью гиперссылки вызывается процедура UserProc. В инспекторе
 сборок модуля должны быть указаны ссылки на системные сборки Chart, Report,
 Tab, Drawing.


			Sub UserProc;

Var

    Chart: IChart;

Begin

    Chart := (PrxReport.ActiveReport.ActiveSheet As IPrxTable).TabSheet.Objects.Item(0).Extension As IChart;

    Chart.Series.DisplayLabels := True;

    Chart.Series.DefaultLabel.BackgroundInfo.Color := New GxColor.CreateARGB( 255, 255, 0, 0);

End Sub UserProc;


После выполнения примера цвет фона подписей данных изменится на красный.


См. также:


[IChartLabel](IChartLabel.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
