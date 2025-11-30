# IPrxReport.DataSources

IPrxReport.DataSources
-


# IPrxReport.DataSources


## Синтаксис


DataSources: [IPrxDataSources](../IPrxDataSources/IPrxDataSources.htm);


## Описание


Свойство DataSources возвращает
 объект, содержащий все источники данных регламентного отчета.


## Пример


	Sub UserProc;

	Var

	    MB: IMetabase;

	    Report: IPrxReport;

	    DS: IPrxDataSources;

	    i: Integer;

	Begin

	    MB := MetabaseClass.Active;

	    Report := MB.ItemById("Report").Bind As IPrxReport;

	    DS := Report.DataSources;

	    i := DS.Count;

	End Sub UserProc;


После выполнения примера в переменной «i»
 будет содержаться количество источников данных регламентного отчета с
 идентификатором «Report».


См. также:


[IPrxReport](IPrxReport.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
