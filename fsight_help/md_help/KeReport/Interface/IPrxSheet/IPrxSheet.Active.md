# IPrxSheet.Active

IPrxSheet.Active
-


# IPrxSheet.Active


## Синтаксис


Active: Booelan;


## Описание


Свойство Active определяет,
 будет ли данный лист активным.


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

    Sheet := Report.Sheets.Item(0);

    Sheet.Active := True;

    MObj.Save;

End Sub UserProc


После выполнения примера для регламентного отчета с идентификатором
 «Report» будет установлен активным
 первый лист.


См. также:


[IPrxSheet](IPrxSheet.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
