# IPrxReport.Controls

IPrxReport.Controls
-


# IPrxReport.Controls


## Синтаксис


Controls: [IPrxReportControls](../IPrxReportControls/IPrxReportControls.htm);


## Описание


Свойство Controls возвращает
 коллекцию элементов управления регламентного отчета.


## Пример


	Sub UserProc;

	Var

	    MB: IMetabase;

	    Report: IPrxReport;

	    Contr: IPrxReportControls;

	    i: Integer;

	Begin

	    MB := MetabaseClass.Active;

	    Report := MB.ItemById("Report").Bind As IPrxReport;

	    Contr := Report.Controls;

	    i := Contr.Count;

	End Sub UserProc;


После выполнения примера в переменной «i»
 будет содержаться количество элементов управления регламентного отчета
 с идентификатором «Report».


См. также:


[IPrxReport](IPrxReport.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
