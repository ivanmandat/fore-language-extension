# IAdhocReportExporter.AdhocReport

IAdhocReportExporter.AdhocReport
-


# IAdhocReportExporter.AdhocReport


## Синтаксис


AdhocReport: [IAdhocReport](../IAdhocReport/IAdhocReport.htm);


## Описание


Свойство AdhocReport определяет
 экспортируемый отчёт.


## Комментарии


Если необходимо экспортировать лишь часть блоков, содержащихся в отчёте,
 то используйте свойство [IAdhocReportExporter.Sources](IAdhocReportExporter.Sources.htm).


## Пример


Для выполнения примера предполагается наличие в репозитории аналитической
 панели с идентификатором «ADHOC», содержащей блок с идентификатором «IQY1DKCFA3U5BTQP».


Добавьте ссылки на системные сборки «Metabase», «Adhoc».


			Sub UserProc;

Var

    mb: IMetabase;

    Rep: IAdhocReport;

    Ex: IAdhocReportExporter;

Begin

    mb := MetabaseClass.Active;

    // Получаем аналитическую панель

    Rep := mb.ItemById("ADHOC").Bind As IAdhocReport;

    // Создаем объект экспорта

    Ex := New AdhocReportExporter.Create;

    // Задаем экспортируемую панель

    Ex.AdhocReport := Rep;

    // Выполняем экспорт

    Ex.ExportToFile("C:\Dashboard.xls", "XLS");

End Sub UserProc;


После выполнения примера аналитическая панель будет экспортирована в
 файл «C:\Dashboard.xls».


См. также:


[IAdhocReportExporter](IAdhocReportExporter.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
