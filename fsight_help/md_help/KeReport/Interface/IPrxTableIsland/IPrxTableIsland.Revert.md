# IPrxTableIsland.Revert

IPrxTableIsland.Revert
-


# IPrxTableIsland.Revert


## Синтаксис


Revert;


## Описание


Метод Revert отменяет изменения,
 внесенные при редактировании реляционной области данных.


## Пример


			Sub UserProc;

Var

    MB: IMetabase;

    MObj: IMetabaseObject;

    Report: IPrxReport;

    TabIs: IPrxTableIslands;

    TI: IPrxTableIsland;

    Sources: IPrxTableSources;

    Range: ITabRange;

Begin

    MB := MetabaseClass.Active;

    MObj := MB.ItemById("REPORT").Edit;

    Report := MObj As IPrxReport;

    TabIs := Report.TableIslands;

    TI := TabIs.Item(0);

    TI := TI.Edit;

    Sources := Report.TableSources;

    TI.Source := Sources.Item(1);

    TI.Sheet := Report.Sheets.Item(1);

    Range := (TI.Sheet As IPrxTable).TabSheet.Cell(20, 1);

    TI.Range := Range;

    TI.Revert;

    MObj.Save;

End Sub UserProc;


После выполнения примера параметры реляционной области не будут изменены.
 «Report» - идентификатор регламентного отчета.


См. также:


[IPrxTableIsland](IPrxTableIsland.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
