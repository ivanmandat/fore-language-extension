# IChartLegend.ElementVerticalAlignment

IChartLegend.ElementVerticalAlignment
-


# IChartLegend.ElementVerticalAlignment


## Синтаксис


ElementVerticalAlignment: [ChartLegendElementVerticalAlignment](../../Enums/ChartLegendElementVerticalAlignment.htm);


## Описание


Свойство ElementVerticalAlignment
 определяет тип вертикального выравнивания элементов внутренней легенды.


## Комментарии


По умолчанию используется выравнивание по центру ([ChartLegendElementHorizontalAlignment.Center](../../Enums/ChartLegendElementVerticalAlignment.htm)).


## Пример


Для выполнения примера добавьте ссылки на системные сборки Chart,
 Metabase, Report,
 Tab. Предполагается наличие регламентного
 отчета с идентификатором «OBJ_1». Отчет должен содержать два листа: на
 первом листе располагается диаграмма с внутренней легендой, на втором
 - с внешней.


			Sub UserProc;

Var

    mb: IMetabase;

    report: IprxReport;

    legend: IChartLegend;

    externallegend: IChartExternLegend;

    chart: Ichart;

Begin

    mb := MetabaseClass.Active;

    report := Mb.ItemById("OBJ_1").Edit As IPrxReport;

    //Обращаемся к внутренней легенде

    chart := (report.Sheets.Item(0) As IPrxTable).TabSheet.Objects.Item(0).Extension As Ichart;

    legend := chart.Legend;

    legend.ElementVerticalAlignment := ChartLegendElementVerticalAlignment.Bottom; //по нижнему краю

    (report As IMetabaseObject).Save;

    //Обращаемся к внешней легенде

    externallegend := (report.Sheets.Item(1) As IPrxTable).TabSheet.Objects.Item(1).Extension As IChartExternLegend;

    externallegend.ElementVerticalAlignment := ChartLegendElementVerticalAlignment.Top; //по верхнему краю

    (report As IMetabaseObject).Save;

End Sub UserProc;


После выполнения примера будет изменено вертикальное выравнивание элементов
 внутри легенды: на первом листе «По нижнему краю», на втором листе «По
 верхнему краю».


См. также:


[IChartLegend](IChartLegend.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
