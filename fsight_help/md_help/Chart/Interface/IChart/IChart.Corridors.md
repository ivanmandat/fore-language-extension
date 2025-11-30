# IChart.Corridors

IChart.Corridors
-


# IChart.Corridors


## Синтаксис


Corridors: [IChartCorridors](../IChartCorridors/IChartCorridors.htm);


## Описание


Свойство Corridors возвращает
 коллекцию коридоров диаграммы.


## Пример


Для выполнения примера предполагается наличие линейной диаграммы на
 листе регламентного отчета с идентификатором «REGULAR_REPORT». На диаграмме
 должно быть больше двух рядов. Подключите системные сборки: Report, Tab,
 Chart и Metabase.


			Sub UserProc;

Var

    ActiveReport: IPrxReport;

    Sheet: IPrxSheet;

    PrxTable: IPrxTable;

    TabSheet: ITabSheet;

    C: IChart;

    Corridor: IChartCorridors;

    IdC: Integer;

    MB: IMetabase;

Begin

    MB:=MetabaseClass.Active;

    ActiveReport:=MB.ItemById("REGULAR_REPORT").Edit As IPrxReport;

    Sheet:=ActiveReport.Sheets.Item(0);

    PrxTable := Sheet As IPrxTable;

    TabSheet := PrxTable.TabSheet;

    C := TabSheet.Objects.Item(0).Extension As IChart;

    Corridor := C.Corridors;

    IdC := Corridor.Add(0, 2);

    (ActiveReport As IMetabaseObject).Save;

End Sub UserProc;


Для диаграммы регламентного отчета будет добавлен коридор между первым
 и третьим рядами. Переменная IdC
 будет хранить индекс добавленного коридора.


См. также:


[IChart](IChart.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
