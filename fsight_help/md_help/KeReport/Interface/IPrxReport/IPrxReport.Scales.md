# IPrxReport.Scales

IPrxReport.Scales
-


# IPrxReport.Scales


## Синтаксис


Scales: [IPrxMapScales](../IPrxMapScales/IPrxMapScales.htm);


## Описание


Свойство Scales возвращает объект,
 содержащий все шкалы регламентного отчета.


## Пример


	Sub UserProc;

	Var

	    MB: IMetabase;

	    Report: IPrxReport;

	    Scales: IPrxMapScales;

	    i: Integer;

	Begin

	    MB := MetabaseClass.Active;

	    Report := MB.ItemById("Report").Bind As IPrxReport;

	    Scales := Report.Scales;

	    i := Scales.Count;

	End Sub UserProc;


После выполнения примера в переменной «i»
 будет содержаться количество шкал регламентного отчета с идентификатором
 «Report».


См. также:


[IPrxReport](IPrxReport.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
