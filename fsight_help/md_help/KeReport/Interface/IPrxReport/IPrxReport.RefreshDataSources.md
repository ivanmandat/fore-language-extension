# IPrxReport.RefreshDataSources

IPrxReport.RefreshDataSources
-


# IPrxReport.RefreshDataSources


## Синтаксис


RefreshDataSources;


## Описание


Метод RefreshDataSources обновляет
 метаданные источников данных регламентного отчета.


## Комментарии


Для обновления измерений среза используйте метод [IPrxDataSource.Refresh](../IPrxDataSource/IPrxDataSource.Refresh.htm).


## Пример


Для выполнения примера в репозитории предполагается наличие регламентного
 отчёта с идентификатором REPORT. Источником данных для отчёта является
 куб.


Добавьте ссылки на системные сборки Metabase, Report.


			Sub UserProc;

Var

    MB: IMetabase;

    Report: IPrxReport;

Begin

    // Получим репозиторий

    MB := MetabaseClass.Active;

    // Получим регламентный отчёт

    Report := MB.ItemById("REPORT").Edit As IPrxReport;

    // Получим количество источников данных отчёта

    Debug.WriteLine(Report.DataSources.Count);

    // Обновим источники даннных отчёта

    Report.RefreshDataSources;

    // Сохраним отчёт

    (Report As IMetabaseObject).Save;

End Sub UserProc;


В результате выполнения примера источники данных будут [переоткрыты](UIReport.chm::/desktop/Reports/OperationReport/UiReport_Reports_Operation_Execute.htm):
 если данные в источнике были изменены, в отчёте будут измененные значения.


См. также:


[IPrxReport](IPrxReport.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
