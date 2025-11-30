# IPrxSheet.CopyFrom

IPrxSheet.CopyFrom
-


# IPrxSheet.CopyFrom


## Синтаксис


CopyFrom(Source: [IPrxSheet](IPrxSheet.htm));


## Параметры


Source - лист-источник данных.


## Описание


Метод CopyFrom осуществляет
 копирование данных из листа, передаваемого посредством параметра Source.


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

    Sheet := Report.Sheets.Add("New_Sheet");

    Sheet.CopyFrom(Report.Sheets.Item(0));

    MObj.Save;

End Sub UserProc;


После выполнения примера в регламентном отчете с идентификатором «Report»
 будет создан новый лист и на него будут скопированы данные с первого листа
 отчета. Идентификатор регламентного отчета - «Report».


См. также:


[IPrxSheet](IPrxSheet.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
