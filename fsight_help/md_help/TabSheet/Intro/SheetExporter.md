# Экспорт таблицы

Экспорт таблицы
-


# Экспорт таблицы


Для экспорта таблицы предназначен интерфейс [ITabSheetExporter](../Interface/ITabSheetExporter/ITabSheetExporter.htm).


Приведен пример экспорта в формат XLSX листа регламентного отчета с
 идентификатором «REPORT_TAB». Отчет содержит аналитическую область данных.


В результате выполнения примера лист регламентного отчета будет экспортирован
 в файл «Таблица.xlsx». Файл будет располагаться в корне диска «C».


## Пример


Для выполнения примера добавьте ссылки на системные сборки: Metabase,
 Report, Tab.


			Sub Export;

Var

    mb: IMetabase;

    Report: IPrxReport;

    Table: ITabSheet;

    Exp: ITabSheetExporter;

Begin

    // Получаем текущий репозиторий

    mb := MetabaseClass.Active;

    // Получаем регламентный отчет

    Report := mb.ItemById("REPORT_TAB").Bind As IPrxReport;

    // Получаем таблицу

    Table := (Report.ActiveSheet As IPrxTable).TabSheet;

    // Создаем объект для экспорта

    Exp := New TabSheetExporter.Create;

    // Указываем экспортируемую таблицу

    Exp.TabSheet := Table;

    // Указываем, что экспортируем скрытые строки и столбцы

    Exp.ExportHiddenCells := True;

    // Указываем, что экспортируем формулы

    Exp.ExportFormulas := True;

    // Указываем, что объекты не экспортируются

    Exp.ExportObjects := False;

    // Указываем, что экспортируем параметры защиты листов и ячеек

    Exp.SheetAccess := True;

    // Выполняем экспорт

    Exp.ExportToFile("C:\Таблица.xlsx", "XLSX");

End Sub Export;


См. также:


[Общие
 принципы программирования с использованием сборки Tab](Programming_principles.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
