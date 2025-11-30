# IChartSerie.DisplayStacked

IChartSerie.DisplayStacked
-


# IChartSerie.DisplayStacked


## Синтаксис


		DisplayStacked: Boolean;


## Описание


Свойство DisplayStacked определяет
 участие ряда в накоплении в зависимости от его типа и привязки к основной
 или дополнительной оси.


## Комментарии


Свойство актуально только для диаграмм смешанного типа с накоплением
 и процентных. При установке свойства для ряда оно также устанавливается
 для всех рядов того же типа, привязанных к той же оси.


Свойство сохраняется вместе с диаграммой.


## Пример


Для выполнения примера предполагается наличие регламентного отчёта с
 идентификатором «Rep1», на листе которого расположена смешанная диаграмма
 с накоплением. Диаграмма содержит столбиковые ряды, привязанные к дополнительной
 оси. В инспекторе сборок модуля должны быть указаны ссылки на системные
 сборки Chart, Report, Tab, Metabase.


			Sub UserProc;

Var

    mb:IMetabase;

    report:IPrxReport;

    chart:IChart;

    serie:IChartSerie;

Begin

    mb:= MetabaseClass.Active;

    report:= mb.ItemById("Rep1").Edit As IPrxReport;

    report.Recalc;

    chart:= (report.ActiveSheet As IPrxTable).TabSheet.Objects.Item(0).Extension As IChart;

    For Each serie In chart.Series Do

        If (serie.SerieType=ChartSerieType.Bars) And (serie.AtSecondaryAxis=True) Then

            serie.DisplayStacked:= False;

            Break;

        End If;

    End For;

    (report As IMetabaseObject).Save;

End Sub UserProc;


После выполнения примера со столбиковых рядов, привязанных к дополнительной
 оси, будет снято накопление.


См. также:


[IChartSerie](IChartSerie.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
