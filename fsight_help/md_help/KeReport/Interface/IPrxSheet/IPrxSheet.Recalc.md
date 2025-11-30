# IPrxSheet.Recalc

IPrxSheet.Recalc
-


# IPrxSheet.Recalc


## Синтаксис


Recalc;


## Описание


Метод Recalc осуществляет вычисление
 листа.


## Пример


			Sub UserProc;

Var

    MB: IMetabase;

    MObj: IMetabaseObject;

    Report: IPrxReport;

    Sheet: IPrxSheet;

Begin

    MB := MetabaseClass.Active;

    MObj := MB.ItemById("REPORT").Edit;

    Report := MObj As IPrxReport;

    Sheet := Report.ActiveSheet;

    Sheet.Recalc;

    MObj.Save;

End Sub UserProc;


После выполнения примера произойдет вычисление активного листа отчета.
 Идентификатор регламентного отчета - «Report». Идентификатор регламентного
 отчета - «Report».


См. также:


[IPrxSheet](IPrxSheet.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
