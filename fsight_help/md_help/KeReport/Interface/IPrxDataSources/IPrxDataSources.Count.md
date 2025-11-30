# IPrxDataSources.Count

IPrxDataSources.Count
-


# IPrxDataSources.Count


## Синтаксис


Count: Integer;


## Описание


Свойство Count возвращает количество
 источников данных.


## Пример


Для выполнения примера предполагается наличие регламентного отчета с
 идентификатором «REGULAR_REPORT», в котором содержатся [источники
 данных](UiReport.chm::/desktop/Source/Window/UiReport_Source_Window_AreaSource.htm#add_data_source1). В модуле подключите системные сборки: Metabase,
 Report.


			Sub UserProc;

Var

    MB: IMetabase;

    Report: IPrxReport;

    DtSources: IPrxDataSources;

    DtSource: IPrxDataSource;

    Name: String;

    i: Integer;

Begin

    MB := MetabaseClass.Active;

    Report := MB.ItemById("REGULAR_REPORT").Bind As IPrxReport;

    DtSources := Report.DataSources;

    i := DtSources.Count;

    DtSource := DtSources.Item(0);

    Name := DtSource.Name;

    Debug.WriteLine(i);

    Debug.WriteLine(Name);

    Debug.WriteLine(DtSources.Report.Name);

End Sub UserProc;


После выполнения примера в консоль будет выведено количество источников
 данных, наименование первого источника данных, наименование регламентного
 отчета.


См. также:


[IPrxDataSources](IPrxDataSources.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
