# IPrxSheet.ProtectFromGlobalRecalc

IPrxSheet.ProtectFromGlobalRecalc
-


# IPrxSheet.ProtectFromGlobalRecalc


## Синтаксис


ProtectFromGlobalRecalc: Boolean;


## Описание


Свойство ProtectFromGlobalRecalc
 определяет состояние опции «Не вычислять при вычислении отчета».


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

    Sheet.ProtectFromGlobalRecalc := True;

    MObj.Save;

End Sub UserProc;


После выполнения примера для активного листа регламентного отчета будет
 включена опция «Не вычислять при вычислении отчета». Идентификатор регламентного
 отчета - «Report».


См. также:


[IPrxSheet](IPrxSheet.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
