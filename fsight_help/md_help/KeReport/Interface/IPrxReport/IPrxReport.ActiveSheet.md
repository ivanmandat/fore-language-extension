# IPrxReport.ActiveSheet

IPrxReport.ActiveSheet
-


# IPrxReport.ActiveSheet


## Синтаксис


ActiveSheet: [IPrxSheet](../IPrxSheet/IPrxSheet.htm);


## Описание


Свойство ActiveSheet определяет
 активный лист регламентного отчета.


## Пример


	Sub UserProc;

	Var

	    MB: IMetabase;

	    Report: IPrxReport;

	    Sheet: IPrxSheet;

	    s: String;

	Begin

	    MB := MetabaseClass.Active;

	    Report := MB.ItemById("Report").Bind As IPrxReport;

	    Sheet := Report.ActiveSheet;

	    s := Sheet.Name;

	End Sub UserProc;


После выполнения примера в переменной «s»
 будет содержаться наименование активного листа регламентного отчета с
 идентификатором «Report».


См. также:


[IPrxReport](IPrxReport.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
