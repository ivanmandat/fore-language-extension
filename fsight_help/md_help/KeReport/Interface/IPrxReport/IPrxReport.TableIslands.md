# IPrxReport.TableIslands

IPrxReport.TableIslands
-


# IPrxReport.TableIslands


## Синтаксис


TableIslands : [IPrxTableIslands](../IPrxTableIslands/IPrxTableIslands.htm);


## Описание


Свойство TableIslands определяет
 коллекцию реляционных областей данных.


## Пример


	Sub UserProc;

	Var

	    MB: IMetabase;

	    MObj: IMetabaseObject;

	    Report: IPrxReport;

	    TabIs: IPrxTableIslands;

	    TI: IPrxTableIsland;

	    Range: ITabRange;

	Begin

	    MB := MetabaseClass.Active;

	    MObj := MB.ItemById("Report").Edit;

	    Report := MObj As IPrxReport;

	    TabIs := Report.TableIslands;

	    TI := TabIs.Item(0);

	    TI := TI.Edit;

	    TI.Source := Report.TableSources.Item(1);

	    TI.Sheet := Report.Sheets.Item(1);

	    Range := (TI.Sheet As IPrxTable).TabSheet.Cell(1, 1);

	    TI.Range := Range;

	    TI.Save;

	    MObj.Save;

	End Sub UserProc;


После выполнения примера будут изменены параметры заданной реляционной
 области данных. «Report» - идентификатор
 регламентного отчета.


См. также:


[IPrxReport](IPrxReport.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
