# IPrxReport.FormulaIslands

IPrxReport.FormulaIslands
-


# IPrxReport.FormulaIslands


## Синтаксис


FormulaIslands: [IPrxFormulaIslands](../IPrxFormulaIslands/IPrxFormulaIslands.htm);


## Описание


Свойство FormulaIslands возвращает
 объект, содержащий области формул регламентного отчета.


## Пример


	Sub UserProc;

	Var

	    MB: IMetabase;

	    Report: IPrxReport;

	    Formula: IPrxFormulaIslands;

	    i: Integer;

	Begin

	    MB := MetabaseClass.Active;

	    Report := MB.ItemById("Report").Bind As IPrxReport;

	    Formula := Report.FormulaIslands;

	    i := Formula.Count;

	End Sub UserProc;


После выполнения примера в переменной «i»
 будет содержаться количество областей формул регламентного отчета с идентификатором
 «Report».


См. также:


[IPrxReport](IPrxReport.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
