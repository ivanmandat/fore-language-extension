# IPrxSlice.Key

IPrxSlice.Key
-


# IPrxSlice.Key


## Синтаксис


Key: Integer;


## Описание


Свойство Key возвращает ключ
 среза источника данных.


## Пример


			Sub UserProc;

Var

    MB: IMetabase;

    MObj: IMetabaseObject;

    Report: IPrxReport;

    DtSources: IPrxDataSources;

    Slices: IPrxSlices;

    Slice: IPrxSlice;

    i: Integer;

Begin

    MB := MetabaseClass.Active;

    MObj := MB.ItemById("REPORT").Bind;

    Report := MObj As IPrxReport;

    DtSources := Report.DataSources;

    Slices := DtSources.Item(0).Slices;

    Slice := Slices.Item(0);

    Slice.Execute;

    i := Slice.Key;

End Sub UserProc;


После выполнения примера в переменной «i» будет содержаться ключ первого
 среза источника данных. Идентификатор регламентного отчета - «Report».


См. также:


[PrxSlice](IPrxSlice.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
