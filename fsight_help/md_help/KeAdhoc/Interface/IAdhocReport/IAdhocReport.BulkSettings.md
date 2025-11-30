# IAdhocReport.BulkSettings

IAdhocReport.BulkSettings
-


# IAdhocReport.BulkSettings


## Синтаксис


BulkSettings: [IAdhocBulkSettings](../IAdhocBulkSettings/IAdhocBulkSettings.htm);


## Описание


Свойство BulkSettings
 возвращает параметры пакетных операций, выполняемых с аналитической панелью.


## Комментарии


Для пакетного экспорта аналитической панели используйте интерфейс [IAdhocReportExporter](../IAdhocReportExporter/IAdhocReportExporter.htm).


## Пример


Для выполнения примера в репозитории предполагается наличие аналитической
 панели с идентификатором «DASHBOARD_EXPORT».


Добавьте ссылки на системные сборки: Adhoc, Metabase.


			Sub UserProc;

Var

    mb: IMetabase;

    Dashboard: IAdhocReport;

    BulkSett: IAdhocBulkSettings;

    Exp: IAdhocReportExporter;

Begin

    mb := MetabaseClass.Active;

    // Получаем аналитическую панель

    Dashboard := mb.ItemById("DASHBOARD_EXPORT").Bind As IAdhocReport;

    // Получаем параметры выполнения пакетных операций

    BulkSett := Dashboard.BulkSettings;

    // Создаем объект для экспорта аналитической панели

    Exp := New AdhocReportExporter.Create;

    // Задаем параметры пакетного экспорта

    Exp.BulkSettings := BulkSett;

    // Задаем экспортируемый отчет

    Exp.AdhocReport := BulkSett.Report;

    // Выполняем экспорт

    Exp.ExportToFile("C:\Аналитическая панель.PDF", "PDF");

End Sub UserProc;


В результате выполнения примера будет выполнен пакетный экспорт аналитической
 панели «DASHBOARD_EXPORT» в формат PDF. Результирующие файлы будут иметь
 следующий формат наименований: «Аналитическая панель_N.PDF», где
 N - это тип визуализатора,
 содержащегося в аналитической панели.


См. также:


[IAdhocReport](IAdhocReport.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
