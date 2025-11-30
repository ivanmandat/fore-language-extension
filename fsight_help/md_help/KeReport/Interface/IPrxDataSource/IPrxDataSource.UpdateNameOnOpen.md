# IPrxDataSource.UpdateNameOnOpen

IPrxDataSource.UpdateNameOnOpen
-


# IPrxDataSource.UpdateNameOnOpen


## Синтаксис


UpdateNameOnOpen: Boolean;


## Описание


Свойство UpdateNameOnOpen определяет
 обновление наименования и идентификатора источников данных регламентного
 отчета.


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

Begin

    MB := MetabaseClass.Active;

    Report := MB.ItemById("REGULAR_REPORT").Edit As IPrxReport;

    DtSources := Report.DataSources;

    For Each DtSource In DtSources Do

        DtSource.UpdateNameOnOpen := True;

    End For;

    (Report As IMetabaseObject).Save;

End Sub UserProc;


После выполнения примера перед открытием регламентного отчета смените
 наименование одного из источников данных. После открытия регламентного
 отчета будет обновлено наименование и идентификатор у всех источников
 данных.


См. также:


[IPrxDataSource](IPrxDataSource.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
