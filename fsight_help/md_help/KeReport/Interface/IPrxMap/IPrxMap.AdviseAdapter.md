# IPrxMap.AdviseAdapter

IPrxMap.AdviseAdapter
-


# IPrxMap.AdviseAdapter


## Синтаксис


AdviseAdapter(Value: [IPrxMapDataAdapter](../IPrxMapDataAdapter/IPrxMapDataAdapter.htm));


## Параметры


Value. Источник данных для
 карты.


## Описание


Метод AdviseAdapter информирует
 адаптер данных карты об изменении данных в источнике. Данные в адаптере
 будут обновляться при вычислении листа регламентного отчета.


## Пример


Для выполнения примера предполагается наличие регламентного отчета с
 идентификатором «REGULAR_REPORT», на листе которого расположена карта
 (.tbs) с исходными данными. В модуле подключите системные сборки: Metabase,
 Report, Tab, Map, Dimensions.


	Sub UserProc;

	Var

	    Metabase: IMetabase;

	    Report: IPrxReport;

	    Tab: ITabSheet;

	    PrxMap: IPrxMap;

	    Map: IMap;

	    DtSources: IPrxDataSources;

	    Slices: IPrxSlices;

	    Slice: IPrxSlice;

	    DimInst: IDimInstance;

	    MapDAdapt: IPrxMapDataAdapter;

	    Visual: IMapVisual;

	Begin

	    Metabase := MetabaseClass.Active;

	    Report := Metabase.ItemById("REGULAR_REPORT").Edit As IPrxReport;

	    Tab := (Report.ActiveSheet As IPrxTable).TabSheet;

	    PrxMap := Tab.Objects.Item(0).Extension As IPrxMap;

	    Map := PrxMap As IMap;

	    DtSources := Report.DataSources;

	    Slices := DtSources.Item(0).Slices;

	    Slice := Slices.Item(0);

	    MapDAdapt := Slice.CreateMapDataAdapter(PrxMapAdapter.Static);

	    DimInst := Slice.Dimensions.Item(0).Dimension;

	    MapDAdapt.Dimension := DimInst.Dimension;

	    MapDAdapt.Index := DimInst.Indexes.Item(0).Index;

	    Visual := Map.Layers.Item(0).Visuals.AddAreaVisual As IMapVisual;

	    Visual.AttributeName := "Id";

	    Visual.DataAdapter := MapDAdapt;

	    Visual.Name := "Картографический показатель";

	    PrxMap.AdviseAdapter(MapDAdapt);

	    Report.MetabaseObject.Save;

	End Sub UserProc;


После выполнения примера для карты регламентного отчета будет создан
 новый картографический показатель. Если в источнике присутствуют измененные
 данные, они будут обновлены в адаптере данных карты при вычислении листа
 регламентного отчета.


См. также:


[IPrxMap](IPrxMap.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
