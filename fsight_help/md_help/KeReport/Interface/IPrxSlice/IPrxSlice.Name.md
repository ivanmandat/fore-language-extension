# IPrxSlice.Name

IPrxSlice.Name
-


# IPrxSlice.Name


## Синтаксис


Name: String;


## Описание


Свойство Name определяет наименование
 среза источника данных регламентного отчета.


## Пример


			Sub UserProc;

Var

    MB: IMetabase;

    MObj: IMetabaseObject;

    Report: IPrxReport;

    DtSources: IPrxDataSources;

    Slices: IPrxSlices;

    Slice: IPrxSlice;

    s: String;

Begin

    MB := MetabaseClass.Active;

    MObj := MB.ItemById("REPORT").Bind;

    Report := MObj As IPrxReport;

    DtSources := Report.DataSources;

    Slices := DtSources.Item(0).Slices;

    Slice := Slices.Item(0);

    s := Slice.Name;

End Sub UserProc;


После выполнения примера в переменной «s» будет содержаться наименование
 первого среза первого источника данных регламентного отчета. Идентификатор
 регламентного отчета - «Report».


См. также:


[PrxSlice](IPrxSlice.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
