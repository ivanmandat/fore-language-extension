# IChartCorridor.SerieIndex1

IChartCorridor.SerieIndex1
-


# IChartCorridor.SerieIndex1


## Синтаксис


SerieIndex1: Integer;


## Описание


Свойство SerieIndex1 определяет
 индекс первого ряда коридора.


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

	    IdC := Corridor.Add(0, 2);

	    Corridor.Item(IdC).SerieIndex1 := 1;

	End Sub Cor;


После выполнения примера на диаграмму будет добавлен коридор между первым
 и третьим рядами. Затем первый ряд коридора будет изменен с первого на
 второй ряд диаграммы.


См. также:


[IChartCorridor](IChartCorridor.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
