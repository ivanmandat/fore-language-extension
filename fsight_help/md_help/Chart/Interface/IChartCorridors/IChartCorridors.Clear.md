# IChartCorridors.Clear

IChartCorridors.Clear
-


# IChartCorridors.Clear


## Синтаксис


Clear;


## Описание


Метод Clear позволяет удалять
 все коридоры диаграммы.


## Пример


Для выполнения примера предполагается наличие листа регламентного отчета,
 с расположенной на нем линейной диаграммой. На диаграмме должны быть заданы
 коридоры.


	Sub Cor;

	Var

	    ActiveReport: IPrxReport;

	    Sheet: IPrxSheet;

	    PrxTable: IPrxTable;

	    TabSheet: ITabSheet;

	    C: IChart;

	    Corridor: IChartCorridors;

	    IdC: Integer;

	Begin

	    ActiveReport := PrxReport.ActiveReport;

	    Sheet := ActiveReport.Sheets.Item(0);

	    PrxTable := Sheet As IPrxTable;

	    TabSheet := PrxTable.TabSheet;

	    C := TabSheet.Objects.Item(0).Extension As IChart;

	    Corridor := С.Corridors;

	    Corridor.Clear;

	End Sub Cor;


После выполнения примера с диаграммы будут удалены все коридоры.


См. также:


[IChartCorridors](IChartCorridors.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
