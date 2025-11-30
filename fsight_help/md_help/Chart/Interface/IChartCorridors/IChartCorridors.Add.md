# IChartCorridors.Add

IChartCorridors.Add
-


# IChartCorridors.Add


## Синтаксис


Add(SerieIdx1: Integer; SerieIdx2: Integer): Integer;


## Параметры


SerieIdx1 - индекс первого
 ряда коридора.


SerieIdx2 - индекс второго
 ряда коридора.


## Описание


Свойство Add добавляет на диаграмму
 новый коридор и возвращает его индекс в коллекции.


## Пример


Для выполнения примера предполагается наличие листа регламентного отчета,
 с расположенной на нем линейной диаграммой. На диаграмме должно быть больше
 двух рядов.


	Sub Corridors;

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

	    Corridor := C.Corridors;

	    IdC := Corridor.Add(0, 2);

	End Sub Corridors;


После выполнения примера на диаграмму будет добавлен коридор между первым
 и третьим рядами. Переменная IdC
 будет хранить индекс добавленного коридора.


См. также:


[IChartCorridors](IChartCorridors.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
