# IPrxSlices.DataSource

IPrxSlices.DataSource
-


# IPrxSlices.DataSource


## Синтаксис


DataSource: [IPrxDataSource](../IPrxDataSource/IPrxDataSource.htm);


## Описание


Свойство DataSource возвращает
 объект-родитель.


## Пример


			Sub UserProc;

Var

    MB: IMetabase;

    Report: IPrxReport;

    DIs: IPrxDataIslands;

    DI: IPrxDataIsland;

    DTSource: IPrxDataSource;

Begin

    MB := MetabaseClass.Active;

    Report := MB.ItemById("REPORT").Bind As IPrxReport;

    DIs := Report.DataIslands;

    DI := DIs.Item(0);

    DTSource := DI.Slice.Slices.DataSource;

End Sub UserProc;


После выполнения примера в переменной «DTSource» будет содержаться источник
 данных, в котором содержится срез, являющийся основой для первой области
 данных регламентного отчета.


См. также:


[IPrxSlices](IPrxSlices.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
