# IChartCaption.HorizontalAlignment

IChartCaption.HorizontalAlignment
-


# IChartCaption.HorizontalAlignment


## Синтаксис


HorizontalAlignment: [ChartHorizontalAlignment](../../Enums/ChartHorizontalAlignment.htm);


## Описание


Свойство HorizontalAlignment
 определяет выравнивание текста заголовка.


## Пример


Для выполнения примера предполагается наличие регламентного отчета с
 идентификатором «REGL_CHART», содержащим диаграмму.


Добавьте ссылки на системные сборки «Metabase», «Chart», «Report», «Tab».


			Sub UserProc;

Var

    mb: IMetabase;

    report: IPrxReport;

    chart: IChart;

Begin

    mb := MetabaseClass.Active;

    report := mb.ItemById("REGL_CHART").Edit As IPrxReport;

    chart := (report.ActiveSheet As IPrxTable).TabSheet.Objects.Item(0).Extension As IChart;

    chart.Caption.HorizontalAlignment := ChartHorizontalAlignment.Right;

    (report As IMetabaseObject).Save;

End Sub UserProc;


После выполнения примера текст заголовка диаграммы будет выровнен по
 правому краю.


См. также:


[IChartCaption](IChartCaption.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
