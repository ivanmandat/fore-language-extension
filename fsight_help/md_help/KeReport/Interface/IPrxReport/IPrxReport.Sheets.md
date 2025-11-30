# IPrxReport.Sheets

IPrxReport.Sheets
-


# IPrxReport.Sheets


## Синтаксис


Sheets: [IPrxSheets](../IPrxSheets/IPrxSheets.htm);


## Описание


Свойство Sheets возвращает коллекцию
 листов регламентного отчета.


## Пример


	Sub UserProc;

	Var

	    MB: IMetabase;

	    Report: IPrxReport;

	    Sheets: IPrxSheets;

	    i: Integer;

	Begin

	    MB := MetabaseClass.Active;

	    Report := MB.ItemById("Report").Bind As IPrxReport;

	    Sheets := Report.Sheets;

	    i := Sheets.Count;

	End Sub UserProc;


После выполнения примера в переменной i будет содержаться количество
 листов регламентного отчета с идентификатором Report.


См. также:


[IPrxReport](IPrxReport.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
