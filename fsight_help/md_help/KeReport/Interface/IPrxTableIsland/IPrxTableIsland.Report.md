# IPrxTableIsland.Report

IPrxTableIsland.Report
-


# IPrxTableIsland.Report


## Синтаксис


Report : [IPrxReport](../IPrxReport/IPrxReport.htm);


## Описание


Свойство Report возвращает регламентный
 отчет, которому принадлежит реляционная область данных.


## Пример


			Sub UserProc;

Var

    MB: IMetabase;

    MObj: IMetabaseObject;

    Report: IPrxReport;

    TabIs: IPrxTableIslands;

    TI: IPrxTableIsland;

    Key: Integer;

Begin

    MB := MetabaseClass.Active;

    MObj := MB.ItemById("REPORT").Edit;

    Report := MObj As IPrxReport;

    TabIs := Report.TableIslands;

    TI := TabIs.Item(0);

    Key := TI.Report.Key;

    Debug.WriteLine(Key.ToString);

End Sub UserProc;


После выполнения примера в окно консоли будет выведен ключ регламентного
 отчета. «Report» - идентификатор регламентного отчета.


См. также:


[IPrxTableIsland](IPrxTableIsland.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
