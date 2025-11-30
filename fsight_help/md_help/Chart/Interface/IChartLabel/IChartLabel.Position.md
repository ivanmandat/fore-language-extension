# IChartLabel.Position

IChartLabel.Position
-


# IChartLabel.Position


## Синтаксис


Position: [ChartLabelPosition](../../Enums/ChartLabelPosition.htm);


## Описание


Свойство Position определяет
 положение подписи данных относительно ряда (столбика, сектора, линии и
 т.д.).


## Комментарии


Перечисление [ChartLabelPosition](../../Enums/ChartLabelPosition.htm)
 содержит варианты положений в зависимости от типа ряда: для столбиков
 и секторов предусмотрены одни варианты; для линий, областей и точек –
 другие.


При размещении подписей данных столбика «У вершины внутри», «У вершины
 снаружи» от вершины столбика до подписи данных будет оставлен зазор в
 1мм. При размещении подписей данных столбика «У основания внутри» от основания
 столбика до подписи данных будет оставлен зазор в 1мм.


## Пример


Для выполнения примера предполагается наличие регламентного отчета,
 на листе которого расположена гистограмма. К отчету добавлен модуль, из
 которого с помощью гиперссылки вызывается процедура GetChart. В инспекторе
 сборок модуля должны быть указаны ссылки на системные сборки Chart, Report,
 Tab.


			Sub GetChart;

Var

    chart: IChart;

    objs: ITabObjects;

Begin

    objs := (PrxReport.ActiveReport.ActiveSheet As IPrxTable).TabSheet.Objects;

    chart := objs.Item(0).Extension As IChart;

    chart.Series.DisplayLabels := True;

    chart.Series.DefaultLabel.Position := ChartLabelPosition.BaseInside;

End Sub GetChart;


После нажатия на гиперссылку для рядов будут отображены подписи данных,
 расположенные у основания столбиков.


См. также:


[IChartLabel](IChartLabel.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
