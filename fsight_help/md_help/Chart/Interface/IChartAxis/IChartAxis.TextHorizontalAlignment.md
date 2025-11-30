# IChartAxis.TextHorizontalAlignment

IChartAxis.TextHorizontalAlignment
-


# IChartAxis.TextHorizontalAlignment


## Синтаксис


TextHorizontalAlignment: [ChartHorizontalAlignment](../../Enums/ChartHorizontalAlignment.htm);


## Описание


Свойство TextHorizontalAlignment
 определяет положение текста многострочной подписи для оси категорий по
 горизонтали.


## Комментарии


Свойство актуально только для оси категорий, при попытке установки свойства
 для других типов осей возникает исключительная ситуация. Значение по умолчанию
 - по центру.


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

    aX.TextHorizontalAlignment := ChartHorizontalAlignment.Right;

    (report As IMetabaseObject).Save;

End Sub macro;


После выполнения примера текст подписей будет выровнен по правому краю.


См. также:


[IChartAxis](IChartAxis.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
