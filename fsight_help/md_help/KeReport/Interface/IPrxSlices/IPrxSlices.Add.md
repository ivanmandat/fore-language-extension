# IPrxSlices.Add

IPrxSlices.Add
-


# IPrxSlices.Add


## Синтаксис


Add: [IPrxSlice](../IPrxSlice/IPrxSlice.htm);


## Описание


Метод Add осуществляет добавление
 нового среза данных.


## Пример


			Sub UserProc;

Var

    MB: IMetabase;

    MObj: IMetabaseObject;

    Report: IPrxReport;

    DtSources: IPrxDataSources;

    Slices: IPrxSlices;

    Slice: IPrxSlice;

Begin

    MB := MetabaseClass.Active;

    MObj := MB.ItemById("REPORT").Edit;

    Report := MObj As IPrxReport;

    DtSources := Report.DataSources;

    Slices := DtSources.Item(0).Slices;

    Slice := Slices.Add;

    MObj.Save;

End Sub UserProc;


После выполнения примера в первом источнике данных регламентного отчета
 будет создан новый срез данных. Идентификатор регламентного отчета - «Report».


См. также:


[IPrxSlices](IPrxSlices.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
