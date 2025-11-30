# IPrxReport.TableSources

IPrxReport.TableSources
-


# IPrxReport.TableSources


## Синтаксис


TableSources : [IPrxTableSources](../IPrxTableSources/IPrxTableSources.htm);


## Описание


Свойство TableSources определяет
 коллекцию реляционных источников данных.


## Пример


	Sub UserProc;

	Var

	    MB: IMetabase;

	    MObj: IMetabaseObject;

	    Report: IPrxReport;

	    TabIs: IPrxTableIslands;

	    TI: IPrxTableIsland;

	    Sources: IPrxTableSources;

	Begin

	    MB := MetabaseClass.Active;

	    MObj := MB.ItemById("Report").Edit;

	    Report := MObj As IPrxReport;

	    TabIs := Report.TableIslands;

	    TI := TabIs.Item(0);

	    TI := TI.Edit;

	    Sources := Report.TableSources;

	    TI.Source := Sources.Item(1);

	    TI.Save;

	    MObj.Save;

	End Sub UserProc;


После выполнения примера будет изменен источник реляционной области
 данных. «Report» - идентификатор
 регламентного отчета.


См. также:


[IPrxReport](IPrxReport.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
