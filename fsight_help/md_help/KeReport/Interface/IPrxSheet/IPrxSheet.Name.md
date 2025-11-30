# IPrxSheet.Name

IPrxSheet.Name
-


# IPrxSheet.Name


## Синтаксис


Name: String;


## Описание


Свойство Name определяет наименование
 страницы регламентного отчета.


## Пример


			Sub UserProc;

Var

    MB: IMetabase;

    Report: IPrxReport;

    Sheet: IPrxSheet;

    s: String;

Begin

    MB := MetabaseClass.Active;

    Report := MB.ItemById("REPORT").Bind As IPrxReport;

    Sheet := Report.ActiveSheet;

    s := Sheet.Name;

End Sub UserProc;


После выполнения примера в переменной «s» будет содержаться наименование
 активного листа регламентного отчета. Идентификатор регламентного отчета
 - «Report».


См. также:


[IPrxSheet](IPrxSheet.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
