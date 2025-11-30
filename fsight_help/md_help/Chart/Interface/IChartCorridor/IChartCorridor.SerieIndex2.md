# IChartCorridor.SerieIndex2

IChartCorridor.SerieIndex2
-


# IChartCorridor.SerieIndex2


## Синтаксис


SerieIndex2: Integer;


## Описание


Свойство SerieIndex2 определяет
 индекс второго ряда коридора.


## Пример


Для выполнения примера предполагается наличие листа регламентного отчета,
 с расположенной на нем линейной диаграммой. На диаграмме должно быть больше
 двух рядов.


	Sub Cor;

	Var

	    C: IChart;

	    Corridor: IChartCorridors;

	    IdC: Integer;

	Begin

	    C := (PrxReport.ActiveReport.ActiveSheet.Table.Objects.Item(0).Extension As IChart);

	    Corridor := С.Corridors;

	    IdC := Corridor.Add(0, 1);

	    Corridor.Item(IdC).SerieIndex2 := 2;

	End Sub Cor;


После выполнения примера на диаграмму будет добавлен коридор между первым
 и вторым рядами. Затем второй ряд коридора будет изменен с первого на
 третий ряд диаграммы.


См. также:


[IChartCorridor](IChartCorridor.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
