# IPrxSlice.FixedHeader

IPrxSlice.FixedHeader
-


# IPrxSlice.FixedHeader


## Синтаксис


FixedHeader: [IPrxSliceHeader](../IPrxSliceHeader/IPrxSliceHeader.htm);


## Описание


Свойство FixedHeader возвращает
 объект, содержащий все фиксированные измерения среза.


## Пример


			Sub UserProc;

Var

    MB: IMetabase;

    MObj: IMetabaseObject;

    Report: IPrxReport;

    DtSources: IPrxDataSources;

    Slices: IPrxSlices;

    Slice: IPrxSlice;

    FixedSlice: IPrxSliceHeader;

    i: Integer;

Begin

    MB := MetabaseClass.Active;

    MObj := MB.ItemById("REPORT").Bind;

    Report := MObj As IPrxReport;

    DtSources := Report.DataSources;

    Slices := DtSources.Item(0).Slices;

    Slice := Slices.Item(0);

    Slice.Execute;

    FixedSlice := Slice.FixedHeader;

    i := FixedSlice.Count;

End Sub UserProc;


После выполнения примера в переменной «i» будет содержаться количество
 фиксированных измерений первого среза источника данных. Идентификатор
 регламентного отчета - «Report».


См. также:


[PrxSlice](IPrxSlice.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
