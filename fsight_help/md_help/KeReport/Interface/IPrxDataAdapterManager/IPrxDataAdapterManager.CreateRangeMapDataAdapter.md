# IPrxDataAdapterManager.CreateRangeMapDataAdapter

IPrxDataAdapterManager.CreateRangeMapDataAdapter
-


# IPrxDataAdapterManager.CreateRangeMapDataAdapter


## Синтаксис


CreateRangeMapDataAdapter(AdapterType: [PrxMapAdapter](../../Enums/PrxMapAdapter.htm);
 Sheet: [IPrxSheet](../IPrxSheet/IPrxSheet.htm)): [IPrxMapDataAdapter](../IPrxMapDataAdapter/IPrxMapDataAdapter.htm);


## Параметры


AdapterType. Тип
 адаптера для отображения исходных данных на карте.


Sheet. Страница, содержащая
 диапазоны значений, которые необходимо отобразить на карте.


## Описание


Метод CreateRangeMapDataAdapter
 создаёт адаптер данных для карты, позволяющий отображать данные из определённого
 диапазона значений.


## Комментарии


Идентификаторы регионов для карты и значения для них необходимо указывать
 в отдельных диапазонах.


## Пример


Для выполнения примера предполагается наличие регламентного отчета с
 идентификатором «REGULAR_REPORT», на первом листе которого расположена
 карта со слоем «Regions», а на втором листе таблица с данными по каким-либо
 регионам. В модуле подключите системные сборки: Metabase, Report, Tab,
 Map.


			Sub UserProc;

Var

    Mb: IMetabase;

    MObj: IMetabaseObject;

    Report: IPrxReport;

    Tab: ITabSheet;

    Map: IMap;

    BarVisual: IMapBarVisual;

    PrxDA: IPrxMapDataAdapter;

    Range: IPrxRange;

    DataAdapterM: IPrxDataAdapterManager;

Begin

    Mb := MetabaseClass.Active;

    MObj := Mb.ItemById("REGULAR_REPORT").Edit;

    Report := MObj As IPrxReport;

    Tab := (Report.ActiveSheet As IPrxTable).TabSheet;

    // Добавим столбиковый показатель на карту

    Map := Tab.Objects.Item(0).Extension As IMap;

    BarVisual := Map.Layers.FindByName("Regions").Visuals.AddBarVisual;

    // Создаем адаптер данных для карты

    DataAdapterM := New PrxDataAdapterManager.Create;

    PrxDA := DataAdapterM.CreateRangeMapDataAdapter(PrxMapAdapter.Static, Report.ActiveSheet);

    // Определим лист с данными

    PrxDa.Sheet := Report.Sheets.Item(1);

    // Зададим диапазон ячеек, содержащий идентификаторы регионов

    PrxDA.IdRange := Tab.ParseRange("B35:B37");

    // Зададим диапазон ячеек отображаемых данных на карте

    PrxDa.DataRange := Tab.ParseRange("C35:C37");

    BarVisual.DataAdapter := PrxDA As IMapDataAdapter;

    MObj.Save;

End Sub UserProc;


После выполнения примера для карты будет создан новый столбиковый показатель,
 отображающий данные по указанным регионам.


См. также:


[IPrxDataAdapterManager](IPrxDataAdapterManager.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
