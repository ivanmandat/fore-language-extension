# IPrxSlice.TopHeader

IPrxSlice.TopHeader
-


# IPrxSlice.TopHeader


## Синтаксис


TopHeader: [IPrxSliceHeader](../IPrxSliceHeader/IPrxSliceHeader.htm);


## Описание


Свойство TopHeader возвращает
 объект, содержащий все измерения среза, расположенные по столбцам.


## Пример


			Sub UserProc;

Var

    MB: IMetabase;

    MObj: IMetabaseObject;

    Report: IPrxReport;

    DtSources: IPrxDataSources;

    Slices: IPrxSlices;

    Slice: IPrxSlice;

    TopSlice: IPrxSliceHeader;

    i: Integer;

Begin

    MB := MetabaseClass.Active;

    MObj := MB.ItemById("REPORT").Bind;

    Report := MObj As IPrxReport;

    DtSources := Report.DataSources;

    Slices := DtSources.Item(0).Slices;

    Slice := Slices.Item(0);

    TopSlice := Slice.TopHeader;

    i := TopSlice.Count;

End Sub UserProc;


После выполнения примера в переменной «i» будет содержаться количество
 измерений первого среза, расположенных по столбцам. Идентификатор регламентного
 отчета - «Report».


См. также:


[IPrxSlice](IPrxSlice.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
