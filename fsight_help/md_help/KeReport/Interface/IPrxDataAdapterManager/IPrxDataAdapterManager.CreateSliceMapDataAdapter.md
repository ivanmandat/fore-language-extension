# IPrxDataAdapterManager.CreateSliceMapDataAdapter

IPrxDataAdapterManager.CreateSliceMapDataAdapter
-


# IPrxDataAdapterManager.CreateSliceMapDataAdapter


## Синтаксис


CreateSliceMapDataAdapter(AdapterType: [PrxMapAdapter](../../Enums/PrxMapAdapter.htm);
 Slice: [IPrxSlice](../IPrxSlice/IPrxSlice.htm)): [IPrxMapDataAdapter](../IPrxMapDataAdapter/IPrxMapDataAdapter.htm);


## Параметры


AdapterType. Тип
 адаптера для отображения исходных данных на карте;


Slice. Срез, данные которого
 необходимо отобразить на карте.


## Описание


Метод CreateSliceMapDataAdapter
 создаёт адаптер данных для карты, позволяющий отображать на ней данные
 из среза.


## Пример


Для выполнения примера предполагается наличие регламентного отчёта с
 идентификатором REGULAR_REPORT, на активной странице которого создана
 карта со слоем «Regions». В список источников данных отчёта добавлен куб
 с идентификатором CUBE_SEP, на базе куба создан срез «Map». В структуре
 куба имеется измерение «Территориальные образования».


Добавьте ссылки на системные сборки: Dimensions, Map, Metabase, Report,
 Tab.


			Sub UserProc;

Var

    Mb: IMetabase;

    MObj: IMetabaseObject;

    Report: IPrxReport;

    Tab: ITabSheet;

    Map: IMap;

    BarVisual: IMapBarVisual;

    PrxDA: IPrxMapDataAdapter;

    Slice: IPrxSlice;

    DataAdapterM: IPrxDataAdapterManager;

Begin

    Mb := MetabaseClass.Active;

    MObj := Mb.ItemById("REGULAR_REPORT").Edit;

    Report := MObj As IPrxReport;

    Tab := (Report.ActiveSheet As IPrxTable).TabSheet;

    Map := Tab.Objects.Item(0).Extension As IMap;

    BarVisual := Map.Layers.FindByName("Regions").Visuals.AddBarVisual;

    Slice := Report.DataSources.FindById("CUBE_SEP").Slices.FindByName("Map");

    DataAdapterM := New PrxDataAdapterManager.Create;

    PrxDA := DataAdapterM.CreateSliceMapDataAdapter(PrxMapAdapter.Static, Slice);

    PrxDA.Dimension := Slice.Dimensions.FindByName("Территориальные образования").Dimension.Dimension;

    PrxDa.Index := PrxDA.Dimension.Indexes.PrimaryIndex;

    PrxDA.Attribute := "ID";

    BarVisual.DataAdapter := PrxDA As IMapDataAdapter;

    MObj.Save;

End Sub UserProc;


После выполнения примера на карте будет создан новый столбиковый показатель,
 отображающий данные указанного среза.


См. также:


[IPrxDataAdapterManager](IPrxDataAdapterManager.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
