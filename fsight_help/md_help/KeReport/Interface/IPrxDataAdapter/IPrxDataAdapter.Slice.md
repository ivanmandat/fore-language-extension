# IPrxDataAdapter.Slice

IPrxDataAdapter.Slice
-


# IPrxDataAdapter.Slice


## Синтаксис


Slice : [IPrxSlice](../IPrxSlice/IPrxSlice.htm);


## Описание


Свойство Slice возвращает срез,
 который используется в качестве источника данных.


## Пример


Для выполнения примера предполагается наличие регламентного отчета с идентификатором
 «REGULAR_REPORT», в котором добавлен срез данных на карту. Подключите
 системные сборки: Metabase, Report, Tab, Map.


			Sub UserProc;

Var

    MB: IMetabase;

    Report: IPrxReport;

    Sheet: IPrxSheet;

    PrxTable: IPrxTable;

    Tab: ITabSheet;

    Map: IMap;

    PrxDA: IPrxMapDataAdapter;

Begin

    MB := MetabaseClass.Active;

    Report := MB.ItemById("REGULAR_REPORT").Edit As IPrxReport;

    Sheet := Report.Sheets.Item(0);

    PrxTable := Sheet As IPrxTable;

    Tab := PrxTable.TabSheet;

    Map := Tab.Objects.Item(0).Extension As IMap;

    PrxDA := Map.Layers.FindByName("Regions").Visuals.Item(0).DataAdapter As IPrxMapDataAdapter;

    Tab.CellValue(1, 1) := PrxDa.Slice.Name;

    Debug.WriteLine("0-Объекта нет, 1-Карта, 2-График: " + PrxDA.Consumer.ToString);

    (Report As IMetabaseObject).Save;

End Sub UserProc;


В заданную ячейку будет выведено наименование
 среза, который является источником для показателя. В окно консоли выведется
 тип объекта, который использует источник данных.


См. также:


[IPrxDataAdapter](IPrxDataAdapter.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
