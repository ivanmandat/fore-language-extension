# IDmClusteringDetails.CategoriesCount

IDmClusteringDetails.CategoriesCount
-


# IDmClusteringDetails.CategoriesCount


## Синтаксис


CategoriesCount: Integer;


## Описание


Свойство CategoriesCount определяет
 количество кластеров, на которые будут разделены исходные данные.


## Комментарии


По умолчанию данные разделяются на два кластера.


## Пример


Для выполнения примера в репозитории предполагается наличие:


	- таблицы с идентификатором DM_TABLE, содержащей данные для анализа;


	- регламентного отчёта с идентификатором DM_REPORT_RES, в который
	 будут выгружены результаты анализа.


Добавьте ссылки на системные сборки: Metabase, Ms, Report, Stat, Tab.


			Sub UserKModes;

Var

    mb: IMetabase;

    ReportDS: IDmReportDataSource;

    TableDS: IDmTableDataSource;

    Method: IDmMethod;

    Report: IPrxReport;

    Shs: IPrxSheets;

    Sheet: ITabSheet;

    DM: IDmKmodesClusterAnalysis;

    i, j: Integer;

    Attrs: Array Of Integer;

    Reports: IDmReports;

    DmReport: IDmReport;

Begin

    mb := MetabaseClass.Active;

    // Создаем метод расчёта

    Method := (New DataMiningMethod.Create) As IDmMethod;

    // Указываем тип метода

    Method.Kind := DmMethodKind.KmodesClusterAnalysis;

    // Создаем табличный источник данных

    TableDS := (New TableDataSource.Create) As IDmTableDataSource;

    // Указываем таблицу-источник

    TableDS.Table := mb.ItemByID("DM_TABLE").Bind;

    // Задаем входной источник данных

    Method.InputDataSource := TableDS;

    // Создаем источник данных, являющийся регламентным отчётом

    ReportDS := (New ReportDataSource.Create) As IDmReportDataSource;

    // Задаем приёмник данных

    Method.OutputDataSource := ReportDS;

    // Настраиваем параметры метода расчёта

    DM := Method.Details As IDmKmodesClusterAnalysis;

    // Задаем прогнозируемые данные

    Attrs := New Integer[6];

    For i := 0 To 5 Do

        Attrs[i] := i;

    End For;

    DM.Attributes := Attrs;

    // Задаем количество кластеров

    DM.CategoriesCount := 3;

    // Выполняем анализ и выгружаем результаты

    Reports := Method.Execute;

    DmReport := reports.FindByType(DmReportType.KmodesClusterAnalysis);

    ReportDS := DmReport.Generate;

    ReportDS.TabSheet.View.Selection.SelectAll;

    ReportDS.TabSheet.View.Selection.Copy;

    // Получаем регламентный отчет, в который будут выгружены результаты

    Report := mb.ItemByID("DM_REPORT_RES").Edit As IPrxReport;

    Shs := Report.Sheets;

    Shs.Clear;

    Sheet := (Shs.Add("", PrxSheetType.Table) As IPrxTable).TabSheet;

    Sheet.Table.Paste;

    Sheet.Columns(0, 1).AdjustWidth;

    Sheet.Rows(0, 1).AdjustHeight;

    Report.Sheets.Item(0).Name := ReportDS.Caption;

    // Сохраняем выгруженные денные

    (Report As IMetabaseObject).Save;

    // Выводим в окно консоли анализируемые данные

    For i := 0 To TableDS.RecordCount - 1 Do

        For j := 0 To TableDS.FieldCount - 1 Do

            Debug.Write(TableDS.Item(i, j) + "; ");

        End For;

        Debug.WriteLine("");

    End For;

End Sub UserKModes;


В результате выполнения примера для данных из таблицы DM_TABLE будет
 произведена кластеризация методом «K-мод».
 Результаты анализа будут выгружены в отчёт DM_REPORT_RES. Анализируемые
 данные будут выведены в окно консоли.


См. также:


[IDmClusteringDetails](IDmClusteringDetails.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
