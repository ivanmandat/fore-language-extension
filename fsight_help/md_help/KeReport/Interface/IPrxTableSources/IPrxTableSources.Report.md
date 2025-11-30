# IPrxTableSources.Report

IPrxTableSources.Report
-


# IPrxTableSources.Report


## Синтаксис


Report : [IPrxReport](../IPrxReport/IPrxReport.htm);


## Описание


Свойство Report возвращает регламентный
 отчет, которому принадлежит коллекция реляционных источников данных.


## Пример


			Sub UserProc;

Var

    MB: IMetabase;

    Report: IPrxReport;

    TSources: IPrxTableSources;

    Key: Integer;

Begin

    MB := MetabaseClass.Active;

    Report := MB.ItemById("REPORT").Bind As IPrxReport;

    TSources := Report.TableSources;

    Key := TSources.Report.Key;

    Debug.WriteLine(Key.ToString);

End Sub UserProc;


После выполнения примера в окно консоли буде выведен ключ регламентного
 отчета. «Report» - идентификатор регламентного отчета.


См. также:


[IPrxTableSources](IPrxTableSources.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
