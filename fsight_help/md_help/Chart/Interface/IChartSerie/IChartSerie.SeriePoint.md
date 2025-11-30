# IChartSerie.SeriePoint

IChartSerie.SeriePoint
-


# IChartSerie.SeriePoint


## Синтаксис


SeriePoint(Index: Integer): [IChartSeriePoint](../IChartSeriePoint/IChartSeriePoint.htm);


## Параметры


Index. Индекс точки ряда данных.


## Описание


Свойство SeriePoint определяет
 настройки точки ряда данных по заданному индексу.


## Пример


Для выполнения примера предполагается наличие в репозитории регламентного
 отчёта с идентификатором REGULAR_REPORT. На активном листе отчёта должна
 содержаться диаграмма с идентификатором «PrxChart1».


Добавьте ссылки на системные сборки: Metabase, Report, Chart, Tab, Drawing.


			Sub UserProc;

Var

    mb: IMetabase;

    rep: IPrxReport;

    chart: IChart;

    SeriePoint: IChartSeriePoint;

Begin

    mb := MetabaseClass.Active;

    rep := mb.ItemById("REGULAR_REPORT").Edit As IPrxReport;

    chart := (rep.ActiveSheet As IprxTable).TabSheet.Objects.Object("PrxChart1").Extension As IChart;

    SeriePoint := chart.Series.Item(0).SeriePoint(0);

    SeriePoint.Selected := True;

    SeriePoint.Background.Type := ChartBackgroundType.Color;

    SeriePoint.Background.Color := New GxColor.CreateARGB(255, 245, 120, 255);

    SeriePoint.Label.Visible := True;

    SeriePoint.Label.Type := ChartLabelType.Noteline;

    (rep As IMetabaseObject).Save;

End Sub UserProc;


После выполнения примера точка с номером «0» ряда данных с номером «0»
 будет сиреневого цвета.


См. также:


[IChartSerie](IChartSerie.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
