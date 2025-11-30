# IDmLanerDataSource.Laner

IDmLanerDataSource.Laner
-


# IDmLanerDataSource.Laner


## Синтаксис


Laner: [ILaner](Laner.chm::/Interface/ILaner/ILaner.htm);


## Описание


Свойство Laner определяет рабочую
 книгу базы данных временных рядов, содержащую данные для интеллектуального
 анализа.


## Комментарии


Если данные для интеллектуального анализа расположены в таблице репозитория,
 то используйте интерфейс [IDmTableDataSource](../IDmTableDataSource/IDmTableDataSource.htm).


## Пример


Для выполнения примера в репозитории предполагается наличие:


	- рабочей книги с идентификатором WORKBOOK, содержащей данные
	 для анализа;


	- регламентного отчёта с идентификатором DM_REPORT_RES, в который
	 будут выгружены результаты анализа.


Добавьте ссылки на системные сборки: Express, Metabase, Ms, Report,
 Stat, Tab.


			Sub UserProc;

Var

    mb: IMetabase;

    OLAP: IEaxAnalyzer;

    LanerDS: IDmLanerDataSource;

    ReportDS: IDmReportDataSource;

    Method: IDmMethod;

    Report: IPrxReport;

    Shs: IPrxSheets;

    Sheet: ITabSheet;

    DM: IDmHighlightExceptions;

    i, j: Integer;

    Attrs: Array Of Integer;

    Reports: IDmReports;

    DmReport: IDmReport;

Begin

    mb := MetabaseClass.Active;

    OLAP := mb.ItemByID("WORKBOOK_TEST").Bind As IEaxAnalyzer;

    // Источник данных, являющийся рабочей книгой

    LanerDS := (New LanerDataSource.Create) As IDmLanerDataSource;

    LanerDS.Laner := OLAP.Laner;

    // Создаем источник данных, являющийся регламентным отчётом

    ReportDS := (New ReportDataSource.Create) As IDmReportDataSource;

    // Создаем метод расчёта

    Method := (New DataMiningMethod.Create) As IDmMethod;

    // Указываем тип метода

    Method.Kind := DmMethodKind.HighlightExceptions;

    // Задаем входной источник данных

    Method.InputDataSource := LanerDS As IDmDataSource;

    // Задаем приёмник данных

    Method.OutputDataSource := ReportDS;

    // Настраиваем параметры метода расчёта

    DM := Method.Details As IDmHighlightExceptions;

    j := LanerDS.FieldCount;

    Attrs := New Integer[j - 1];

    For i := 0 To j - 2 Do

        Attrs[i] := i + 1;

    End For;

    DM.Attributes := Attrs;

    // Задаем пороговое значение

    DM.Threshold := 0.4;

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

End Sub UserProc;


В результате выполнения примера для данных рабочей книги WORKBOOK будет
 выполнен интеллектуальный анализа данных «Поиск
 исключений». Результаты анализа будут выгружены в отчёт DM_REPORT_RES.


См. также:


[IDmLanerDataSource](IDmLanerDataSource.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
