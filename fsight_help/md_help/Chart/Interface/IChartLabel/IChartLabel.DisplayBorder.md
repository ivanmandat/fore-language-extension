# IChartLabel.DisplayBorder

IChartLabel.DisplayBorder
-


# IChartLabel.DisplayBorder


## Синтаксис


DisplayBorder: Boolean;


## Описание


Свойство DisplayBorder определяет,
 будет ли отображаться граница подписи данных.


## Комментарии


Если значение данного свойства True,
 то граница подписи данных будет отображаться, при значении False
 граница подписи данных будет не видна.


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

    Chart.Series.DefaultLabel.DisplayShadow := True;

    Chart.Series.DefaultLabel.DisplayBorder := False;

End Sub UserProc;


После выполнения примера для подписи данных будет отображаться тень,
 а границы подписи данных отображаться не будут.


См. также:


[IChartLabel](IChartLabel.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
