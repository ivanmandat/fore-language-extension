# IChartCorridors.Remove

IChartCorridors.Remove
-


# IChartCorridors.Remove


## Синтаксис


Remove(Index: Integer): Boolean;


## Параметры


Index. Индекс коридора в коллекции.
 Нумерация начинается с нуля.


## Описание


Свойство Remove позволяет удалить
 конкретный коридор диаграммы. Свойство возвращает значение True
 при успешном удалении и False
 - в обратном случае.


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

	    R: Boolean;

	Begin

	    ActiveReport := PrxReport.ActiveReport;

	    Sheet := ActiveReport.Sheets.Item(0);

	    PrxTable := Sheet As IPrxTable;

	    TabSheet := PrxTable.TabSheet;

	    C := TabSheet.Objects.Item(0).Extension As IChart;

	    Corridor := С.Corridors;

	    R := Corridor.Remove(0);

	End Sub Cor;


После выполнения примера с диаграммы должен быть удален первый коридор.
 Переменная R будет хранить результат
 удаления.


См. также:


[IChartCorridors](IChartCorridors.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
