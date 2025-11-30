# IChartCorridors.Count

IChartCorridors.Count
-


# IChartCorridors.Count


## Синтаксис


Count: Integer;


## Описание


Свойство доступно только для чтения.


Свойство Count возвращает текущее
 количество коридоров на диаграмме.


## Пример


Для выполнения примера предполагается наличие листа регламентного отчета,
 с расположенной на нем линейной диаграммой. На диаграмме должно быть больше
 двух рядов.


	Sub Cor;

	Var

	    ActiveReport: IPrxReport;

	    Sheet: IPrxSheet;

	    PrxTable: IPrxTable;

	    TabSheet: ITabSheet;

	    C: IChart;

	    Corridor: IChartCorridors;

	    I: Integer;

	Begin

	    ActiveReport := PrxReport.ActiveReport;

	    Sheet := ActiveReport.Sheets.Item(0);

	    PrxTable := Sheet As IPrxTable;

	    TabSheet := PrxTable.TabSheet;

	    C := TabSheet.Objects.Item(0).Extension As IChart;

	    Corridor := С.Corridors;

	    I := Corridor.Count

	End Sub Cor;


После выполнения примера в переменной I
 будет храниться количество коридоров на диаграмме.


См. также:


[IChartCorridors](IChartCorridors.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
