# IPrxReport.Name

IPrxReport.Name
-


# IPrxReport.Name


## Синтаксис


Name: String;


## Описание


Свойство Name возвращает наименование
 регламентного отчета.


## Пример


	Sub UserProc;

	Var

	    MB: IMetabase;

	    Report: IPrxReport;

	    s: String;

	Begin

	    MB := MetabaseClass.Active;

	    Report := MB.ItemById("Report").Bind As IPrxReport;

	    s := Report.Name;

	End Sub UserProc;


После выполнения примера в переменной «s»
 будет содержаться наименование регламентного отчета с идентификатором
 «Report».


См. также:


[IPrxReport](IPrxReport.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
