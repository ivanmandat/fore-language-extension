# IPrxMapDataAdapter.Attribute

IPrxMapDataAdapter.Attribute
-


# IPrxMapDataAdapter.Attribute


## Синтаксис


Attribute: String;


## Описание


Свойство Attribute определяет
 атрибут слоя карты.


## Пример


Для выполнения
 примера предполагается наличие регламентного отчёта с идентификатором
 «REGULAR_REPORT», на активной странице которого создана карта со слоем
 «Regions». В список источников данных отчёта добавлен куб, в котором находится
 измерение «Территориальные образования». Подключите системные сборки:
 Metabase, Report, Tab, Map, Dimensions.


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

    MapDAdapt: IPrxMapDataAdapter;

    i, j: Integer;

Begin

    Mb := MetabaseClass.Active;

    MObj := Mb.ItemById("REGULAR_REPORT").Edit;

    Report := MObj As IPrxReport;

    Tab := (Report.ActiveSheet As IPrxTable).TabSheet;

    Map := Tab.Objects.Item(1).Extension As IMap;

    BarVisual := Map.Layers.FindByName("Regions").Visuals.AddBarVisual;

    Slice := Report.DataSources.Item(0).Slices.Item(0);

    PrxDA := Slice.CreateMapDataAdapter(PrxMapAdapter.Dynamic);

    PrxDA.Dimension := Slice.Dimensions.FindByName("Территориальные образования").Dimension.Dimension;

    PrxDa.Index := PrxDA.Dimension.Indexes.PrimaryIndex;

    PrxDA.Attribute := "ID";

    BarVisual.DataAdapter := PrxDA As IMapDynamicDataAdapter;

    PrxDA.Expression.AsString := "AT[Id]+" + Char.Chr(34) + ")" + Char.Chr(34) + "+AT[Name]";

    PrxDa.Expression2.AsString := "VALUE";

    Map.Layers.FindByName("Regions").TerritoryInfoAdapter := PrxDa;

    MObj.Save;

End Sub UserProc;


После выполнения примера для слоя карты «Regions» будет создан столбиковый
 показатель и задан пользовательский формат подписи для наименований и
 идентификаторов в расшифровке территорий слоя карты.


См. также:


[IPrxMapDataAdapter](IPrxMapDataAdapter.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
