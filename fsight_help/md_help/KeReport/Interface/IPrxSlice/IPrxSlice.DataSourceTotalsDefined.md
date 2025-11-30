# IPrxSlice.DataSourceTotalsDefined

IPrxSlice.DataSourceTotalsDefined
-


# IPrxSlice.DataSourceTotalsDefined


## Синтаксис


DataSourceTotalsDefined: Boolean;


## Описание


Свойство DataSourceTotalsDefined
 возвращает True, если в источнике
 данных среза есть настроенная агрегация.


## Комментарии


Имеется в виду агрегация, настроенная непосредственно факту куба (
 [серверная
 агрегация](KeCubes.chm::/Interface/IStandardCubeFactBinding/IStandardCubeFactBinding.AggregationType.htm)  ). Если данной агрегации в кубе нет, то свойство
 возвращает False.


## Пример


В рассматриваемом примере предполагается существование объекта Report
 типа IPrxReport. В регламентном отчете должна быть область данных с идентификатором
 DATAISLAND.


			Sub UserProc;

Var

    MB: IMetabase;

    MObj: IMetabaseObject;

    Report: IPrxReport;

    DIs: IPrxDataIslands;

    DI: IPrxDataIsland;

    Prop: IPrxDataIslandProperties;

    Totals: IPrxDataIslandTotals;

    Dim: IDimInstance;

    DimProp: IPrxDataIslandDimension;

    Slice: IPrxSlice;

Begin

    MB := MetabaseClass.Active;

    MObj := MB.ItemById("REPORT").Edit;

    Report := MObj As IPrxReport;

    DIs := Report.DataIslands;

    DI := DIs.FindById("DATAISLAND").Edit;

    Prop := DI.Properties;

    Dim := DI.Slice.LeftHeader.Item(0).Dimension;

    DimProp := Prop.Dimension(Dim.Dimension);

    Totals := DimProp.LevelTotals;

    Totals.Totals := TriState.OnOption;

    Slice := Report.DataSources.Item(0).Slices.FindByName("Срез1");

    If Slice.DataSourceTotalsDefined Then

        Totals.MethodFromDataSource := TriState.OnOption;

    End If;

    MObj.Save;

End Sub UserProc;


В случае если в источнике данных настроена агрегация непосредственно
 у факта, то для расчета итогов будет использоваться метод, заданный для
 агрегации.


См. также:


[IPrxSlice](IPrxSlice.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
