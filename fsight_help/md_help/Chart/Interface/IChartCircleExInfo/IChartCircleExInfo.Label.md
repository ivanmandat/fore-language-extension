# IChartCircleExInfo.Label

IChartCircleExInfo.Label
-


# IChartCircleExInfo.Label


## Синтаксис


Label: [IChartLabel](../IChartLabel/IChartLabel.htm);


## Описание


Свойство доступно только для чтения.


Свойство Label возвращает параметры
 подписи данных для объединенной группы рядов. Поведение данной подписи
 данных аналогично поведению подписи данных на круговой диаграмме.


## Пример


Для выполнения примера предполагается наличие листа регламентного отчета
 с расположенной на нем диаграммой.


	Sub UserProc;

	Var

	    C: IChart;

	    CircleEx: IChartCircleExInfo;

	    s: String;

	Begin

	    C := (PrxReport.ActiveReport.ActiveSheet.Table.Objects.Item(0).Extension As IChart);

	    C.Type := ChartType.SecondaryBars;

	    CircleEx := C.CircleInfoEx;

	    s := C.CircleInfoEx.Label.Text;

	    PrxReport.ActiveReport.ActiveSheet.Recalc;

	End Sub UserProc;


После выполнения примера в переменной s
 будет храниться текст подписи данных объединенной группы рядов.


См. также:


[IChartCircleExInfo](IChartCircleExInfo.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
