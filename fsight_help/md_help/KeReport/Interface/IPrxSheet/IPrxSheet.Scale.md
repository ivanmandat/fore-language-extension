# IPrxSheet.Scale

IPrxSheet.Scale
-


# IPrxSheet.Scale


## Синтаксис


Scale: Double;


## Описание


Свойство Scale определяет масштаб
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

    Sheet.Scale := 175;

    MObj.Save;

End Sub UserProc;


После выполнения примера для активного листа регламентного отчета будет
 установлен масштаб - «175%». Идентификатор регламентного отчета - «Report».


См. также:


[IPrxSheet](IPrxSheet.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
