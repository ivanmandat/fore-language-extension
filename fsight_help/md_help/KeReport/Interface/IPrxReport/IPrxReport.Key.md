# IPrxReport.Key

IPrxReport.Key
-


# IPrxReport.Key


## Синтаксис


Key: Integer;


## Описание


Свойство Key возвращает ключ
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

	    i := Report.Key;

	End Sub UserProc;


После выполнения примера в переменной «i»
 будет содержаться ключ регламентного отчета с идентификатором «Report».


См. также:


[IPrxReport](IPrxReport.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
