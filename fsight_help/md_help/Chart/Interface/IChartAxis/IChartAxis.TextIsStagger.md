# IChartAxis.TextIsStagger

IChartAxis.TextIsStagger
-


# IChartAxis.TextIsStagger


## Синтаксис


TextIsStagger: Boolean;


## Описание


Свойство TextIsStagger определяет
 возможность расположения подписей оси категорий диаграмм в шахматном порядке.


## Комментарии


Свойство актуально только для оси категорий, при попытке установки свойства
 для других типов осей возникает исключительная ситуация.


Подписи можно расположить в шахматном порядке, только если:


	- угол поворота подписей равен нулю – для ориентации диаграммы
	 слева направо;


	- угол поворота подписей равен 90 градусов – для ориентации диаграммы
	 сверху вниз.


Свойство сохраняется вместе с диаграммой.


## Пример


Для выполнения примера предполагается наличие регламентного отчета с
 идентификатором «Rep_1», на листе которого расположена диаграмма. В инспекторе
 сборок модуля должны быть указаны ссылки на системные сборки Chart, Report,
 Tab, Metabase.


			Sub macro;

Var

    mb: IMetabase;

    report: IPrxReport;

    chart: IChart;

    aX: IChartAxis;

Begin

    mb := MetabaseClass.Active;

    report := mb.ItemById("Rep_1").Edit As IPrxReport;

    chart := (report.ActiveSheet As IPrxTable).TabSheet.Objects.Item(0).Extension As IChart;

    aX := chart.AxisX;

    aX.TextHorizontalAlignment := ChartHorizontalAlignment.Left;

    aX.TextIsStagger := True;

    aX.TextStaggerOddFirst := True;

    (report As IMetabaseObject).Save;

End Sub macro;


После выполнения примера подписи оси категорий будут расположены в шахматном
 порядке, выровнены по левому краю и в первом ряду будут располагаться
 нечетные подписи.


См. также:


[IChartAxis](IChartAxis.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
