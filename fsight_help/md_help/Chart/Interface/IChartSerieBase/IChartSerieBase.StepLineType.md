# IChartSerieBase.StepLineType

IChartSerieBase.StepLineType
-


# IChartSerieBase.StepLineType


## Синтаксис


		StepLineType: [ChartSerieStepLineType](../../Enums/ChartSerieStepLineType.htm);


## Описание


Свойство StepLineType определяет
 тип ступенчатого ряда.


## Комментарии


Ступенчатая диаграмма отображает абсолютные значения ряда. Ступенька
 представляет собой ломаную линию, соединяющую два соседних значения ряда.


Для задания ступенчатого типа диаграммы задайте [IChart.Type](../IChart/IChart.Type.htm) = ChartType.StepLine.


## Пример


Для выполнения примера предполагается наличие регламентного отчета с
 идентификатором «StepLineType». На активном листе регламентного отчета
 должна быть создана диаграмма.


Добавьте ссылки на системные сборки «Metabase», «Chart», «Report», «Tab».


			Sub UserProc;

Var

    mb: IMetabase;

    Report: IPrxReport;

    Chart: IChart;

    Series: IChartSerie;

Begin

    mb := MetabaseClass.Active;

    Report := mb.ItemById("StepLineType").Edit As IPrxReport;

    Chart := (Report.ActiveSheet As IPrxTable).TabSheet.Objects.Item(0).Extension As IChart;

    Chart.Type := ChartType.StepLine; // Ступенчатая диаграмма

    Series := Chart.Series.Item(0);

    Series.StepLineType := ChartSerieStepLineType.Center;

    (Report As IMetabaseObject).Save;

End Sub UserProc;


После выполнения примера график регламентного отчета изменит свой тип
 на ступенчатый, ступенька будет расположена по середине линии между соседними
 точками ряда.


См. также:


[IChartSerieBase](IChartSerieBase.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
