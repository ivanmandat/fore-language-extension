# IDmPivotTableDataSource.PivotTable

IDmPivotTableDataSource.PivotTable
-


# IDmPivotTableDataSource.PivotTable


## Синтаксис


		PivotTable: [IPivotTable](KePivot.chm::/Interface/IPivotTable/IPivotTable.htm);


## Описание


Свойство PivotTable определяет
 таблицу данных, содержащую данные для интеллектуального анализа.


## Комментарии


Если данные для интеллектуального анализа расположены в таблице репозитория,
 то используйте интерфейс [IDmTableDataSource](../IDmTableDataSource/IDmTableDataSource.htm).


## Пример


Для выполнения примера в репозитории предполагается наличие:


	- экспресс-отчёта с идентификатором EXPRESS, содержащего данные
	 для анализа;


	- регламентного отчёта с идентификатором DM_REPORT_RES, в который
	 будут выгружены результаты анализа.


Добавьте ссылки на системные сборки: Express, Ms, Metabase, Pivot, Report,
 Stat, Tab.


					Sub UserProc;

		Var

		    mb: IMetabase;

		    OLAP: IEaxAnalyzer;

		    PivotTableDS: IDmPivotTableDataSource;

		    Pivot: IPivot;

		    ReportDS, ExDS: IDmReportDataSource;

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

		    OLAP := mb.ItemByID("EXPRESS_DATAMINING").Bind As IEaxAnalyzer;

		    // Источник данных, являющийся таблицей с данными

		    PivotTableDS := (New PivotTableDataSource.Create) As IDmPivotTableDataSource;

		    Pivot := OLAP.Pivot;

		    PivotTableDS.PivotTable := Pivot.ObtainTable;

		    // Создаем метод расчёта

		    Method := (New DataMiningMethod.Create) As IDmMethod;

		    // Указываем тип метода

		    Method.Kind := DmMethodKind.HighlightExceptions;

		    // Задаем входной источник данных

		    Method.InputDataSource := PivotTableDS As IDmDataSource;

		    // Создаем источник данных, являющийся регламентным отчётом

		    ReportDS := (New ReportDataSource.Create) As IDmReportDataSource;

		    // Задаем приёмник данных

		    Method.OutputDataSource := ReportDS;

		    // Настраиваем параметры метода расчёта

		    DM := Method.Details As IDmHighlightExceptions;

		    j := PivotTableDS.FieldCount;

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


В результате выполнения примера для данных экспресс-отчёта EXPRESS будет
 выполнен интеллектуальный анализа данных «Поиск
 исключений». Результаты анализа будут выгружены в отчёт DM_REPORT_RES.


См. также:


[IDmPivotTableDataSource](IDmPivotTableDataSource.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
