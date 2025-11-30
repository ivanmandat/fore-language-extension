# IPrxTableIslands.Report

IPrxTableIslands.Report
-


# IPrxTableIslands.Report


## Синтаксис


Report : [IPrxReport](../IPrxReport/IPrxReport.htm);


## Описание


Свойство Report возвращает регламентный
 отчет, которому принадлежит коллекция реляционных областей данных.


## Пример


			Sub UserProc;

Var

    MB: IMetabase;

    Report, Rep: IPrxReport;

    TabIs: IPrxTableIslands;

    Key: Integer;

Begin

    MB := MetabaseClass.Active;

    Report := MB.ItemById("REPORT").Bind As IPrxReport;

    TabIs := Report.TableIslands;

    Rep := TabIs.Report;

    Key := Rep.Key;

    Debug.WriteLine(Key.ToString);

End Sub UserProc;


После выполнения примера в окно консоли будет выведено значение ключа
 регламентного отчета. «Report» - идентификатор регламентного отчета, на
 листе которого расположена реляционная область данных.


См. также:


[IPrxTableIslands](IPrxTableIslands.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
