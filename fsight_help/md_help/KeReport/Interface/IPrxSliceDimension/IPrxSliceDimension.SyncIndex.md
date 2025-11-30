# IPrxSliceDimension.SyncIndex

IPrxSliceDimension.SyncIndex
-


# IPrxSliceDimension.SyncIndex


## Синтаксис


SyncIndex: Integer;


## Описание


Свойство SyncIndex определяет
 индекс синхронизации измерения среза.


## Пример


			Sub UserProc;

Var

    MB: IMetabase;

    Report: IPrxReport;

    DtSources: IPrxDataSources;

    Slices: IPrxSlices;

    SliceDims: IPrxSliceDimensions;

    SliceDim: IPrxSliceDimension;

    i: Integer;

Begin

    MB := MetabaseClass.Active;

    Report := MB.ItemById("REPORT").Bind As IPrxReport;

    DtSources := Report.DataSources;

    Slices := DtSources.Item(0).Slices;

    SliceDims := Slices.Item(0).Dimensions;

    SliceDim := SliceDims.Item(0);

    i := SliceDim.SyncIndex;

End Sub UserProc;


После выполнения примера в переменной «i» будет содержаться индекс синхронизации
 первого измерения первого среза источника данных регламентного отчета.
 Идентификатор регламентного отчета - «Report».


См. также:


[IPrxSliceDimension](IPrxSliceDimension.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
