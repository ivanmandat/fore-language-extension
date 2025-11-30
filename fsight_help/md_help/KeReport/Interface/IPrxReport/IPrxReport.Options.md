# IPrxReport.Options

IPrxReport.Options
-


# IPrxReport.Options


## Синтаксис


Options: [IPrxReportOptions](../IPrxReportOptions/IPrxReportOptions.htm);


## Описание


Свойство Options возвращает
 объект, содержащий параметры настройки регламентного отчета.


## Пример


	Sub UserProc;

	Var

	    MB: IMetabase;

	    Report: IPrxReport;

	    Options: IPrxReportOptions;

	Begin

	    MB := MetabaseClass.Active;

	    Report := MB.ItemById("Report").Bind As IPrxReport;

	    Options := Report.Options;

	End Sub UserProc;


После выполнения примера в переменной «Options»
 будут содержаться параметры настройки регламентного отчета с идентификатор
 «Report».


См. также:


[IPrxReport](IPrxReport.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
