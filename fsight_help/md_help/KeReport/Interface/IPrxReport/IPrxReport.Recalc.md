# IPrxReport.Recalc

IPrxReport.Recalc
-


# IPrxReport.Recalc


## Синтаксис


Recalc;


## Описание


Метод Recalc вычисляет отчет
 целиком.


## Пример


	Sub UserProc;

	Var

	    MB: IMetabase;

	    MObj: IMetabaseObject;

	    Report: IPrxReport;

	Begin

	    MB := MetabaseClass.Active;

	    MObj := MB.ItemById("Report").Edit;

	    Report := MObj As IPrxReport;

	    Report.Recalc;

	    MObj.Save;

	End Sub UserProc;


После выполнения примера произойдет вычисление регламентного отчета
 и сохранение изменений.


См. также:


[IPrxReport](IPrxReport.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
