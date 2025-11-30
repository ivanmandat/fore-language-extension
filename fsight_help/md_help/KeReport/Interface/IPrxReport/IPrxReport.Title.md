# IPrxReport.Title

IPrxReport.Title
-


# IPrxReport.Title


## Синтаксис


Title: [IPrxReportTitle](../IPrxReportTitle/IPrxReportTitle.htm);


## Описание


Свойство Title возвращает объект,
 содержащий заголовки листов регламентного отчета.


## Пример


	Sub UserProc;

	Var

	    MB: IMetabase;

	    Report: IPrxReport;

	    Title: IPrxReportTitle;

	    s: String;

	Begin

	    MB := MetabaseClass.Active;

	    Report := MB.ItemById("Report").Bind As IPrxReport;

	    Title := Report.Title;

	    s := Title.Center.Text;

	End Sub UserProc;


После выполнения примера в переменной «s»
 будет содержаться текст центральной части заголовка листа регламентного
 отчета с идентификатором «Report».


См. также:


[IPrxReport](IPrxReport.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
