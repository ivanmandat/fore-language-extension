# IPrxSheet.PageSettings

IPrxSheet.PageSettings
-


# IPrxSheet.PageSettings


## Синтаксис


PageSettings: [IPrxPageSettings](../IPrxPageSettings/IPrxPageSettings.htm);


## Описание


Свойство PageSettings возвращает
 объект, содержащий параметры листа регламентного отчета.


## Пример


			Sub UserProc;

Var

    MB: IMetabase;

    Report: IPrxReport;

    Sheet: IPrxSheet;

    PageSet: IPrxPageSettings;

Begin

    MB := MetabaseClass.Active;

    Report := MB.ItemById("REPORT").Bind As IPrxReport;

    Sheet := Report.ActiveSheet;

    PageSet := Sheet.PageSettings;

End Sub UserProc;


После выполнения примера в переменной «PageSet» будут содержаться параметры
 печати активного листа регламентного отчета. Идентификатор регламентного
 отчета - «Report».


См. также:


[IPrxSheet](IPrxSheet.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
