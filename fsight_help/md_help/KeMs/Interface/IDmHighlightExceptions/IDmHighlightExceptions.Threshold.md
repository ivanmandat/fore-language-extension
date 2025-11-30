# IDmHighlightExceptions.Threshold

IDmHighlightExceptions.Threshold
-


# IDmHighlightExceptions.Threshold


## Синтаксис


Threshold: Double;


## Описание


Свойство Threshold определяет
 пороговое значение для выявления исключений.


## Комментарии


Диапазон допустимых значений: [0, 1].


Пороговое значение - это максимальная доля исключений, содержащихся
 в данных.


## Пример


Для выполнения примера в репозитории предполагается наличие:


	- таблицы с идентификатором DM_TABLE, содержащей данные для анализа;


	- регламентного отчёта с идентификатором DM_REPORT_RES, в который
	 будут выгружены результаты анализа.


Добавьте ссылки на системные сборки: Metabase, Ms, Report, Stat, Tab.


			Sub UserHiEx;

Var

    mb: IMetabase;

    ReportDS: IDmReportDataSource;

    TableDS: IDmTableDataSource;

    Method: IDmMethod;

    Report: IPrxReport;

    Shs: IPrxSheets;

    Sheet: ITabSheet;

    DM: IDmHighlightExceptions;

    i: Integer;

    Attrs: Array Of Integer;

    Reports: IDmReports;

    DmReport: IDmReport;

Begin

    mb := MetabaseClass.Active;

    // Создаем метод расчёта

    Method := (New DataMiningMethod.Create) As IDmMethod;

    // Указываем тип метода

    Method.Kind := DmMethodKind.HighlightExceptions;

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

    DM := Method.Details As IDmHighlightExceptions;

    // Задаем факторы для поиска исключений

    Attrs := New Integer[TableDS.FieldCount];

    For i := 0 To Attrs.Length - 1 Do

        Attrs[i] := i;

    End For;

    DM.Attributes := Attrs;

    // Задаем пороговое значение

    DM.Threshold := 0.57;

    // Выполняем анализ и выгружаем результаты

    Reports := Method.Execute;

    DmReport := reports.FindByType(DmReportType.HighlightExceptions);

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

End Sub UserHiEx;


В результате выполнения примера для данных из таблицы DM_TABLE будет
 выполнен интеллектуальный анализ данных методом «Поиск
 исключений». Результаты анализа будут выгружены в отчёт DM_REPORT_RES.


См. также:


[IDmHighlightExceptions](IDmHighlightExceptions.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
