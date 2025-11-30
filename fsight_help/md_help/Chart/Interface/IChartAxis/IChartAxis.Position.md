# IChartAxis.Position

IChartAxis.Position
-


# IChartAxis.Position


## Синтаксис


Position: [ChartAxisPosition](../../Enums/ChartAxisPosition.htm);


## Описание


Свойство Position определяет
 положение пересечения оси с ортогональной осью диаграммы.


## Комментарии


По умолчанию свойство имеет значение ChartAxisPosition.Auto
 и ось пересекается с ортогональной осью в минимальном значении/категории.


Если свойство установлено в значение ChartAxisPosition.Custom,
 то необходимо указать значение [IChartAxis.PositionValue](IChartAxis.PositionValue.htm).


Для дополнительной оси значений нет возможности задать положение пересечения
 с ортогональной осью. В этом случае свойство Position
 всегда равно ChartAxisPosition.Auto
 и при попытке задать ему другое значение будет сгенерирована исключительная
 ситуация.


## Пример


Для выполнения примера предполагается наличие регламентного отчета,
 на листе которого расположена диаграмма. К отчету добавлен модуль, из
 которого с помощью гиперссылки вызывается процедура UserProc. В инспекторе
 сборок модуля должны быть указаны ссылки на системные сборки Chart, Report,
 Tab.


			Sub UserProc1;

Var

    Chart: IChart;

    Axis : IChartAxis;

Begin

    Chart :=(PrxReport.ActiveReport.ActiveSheet As IPrxTable).TabSheet.Objects.Item(0).Extension As IChart;

    Axis := Chart.AxisX;

    Axis.Position := ChartAxisPosition.Maximum;

 End Sub UserProc1;


После выполнения примера ось X будет пересекать ортогональную ось в
 максимальном значении.


См. также:


[IChartAxis](IChartAxis.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
