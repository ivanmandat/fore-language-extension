# IDmForecasting.ForecastingMethod

IDmForecasting.ForecastingMethod
-


# IDmForecasting.ForecastingMethod


## Синтаксис


ForecastingMethod: [DmForecastingMethod](../../Enums/DmForecastingMethod.htm);


## Описание


Свойство ForecastingMethod возвращает
 метод, применяемый для прогнозирования значений.


## Комментарии


Для определения числа периодов прогнозирования используйте свойство
 [IDmForecasting.ForecastingPointsCount](IDmForecasting.ForecastingPointsCount.htm).


## Пример


Для выполнения примера в репозитории предполагается наличие:


	- таблицы с идентификатором DM_TABLE, содержащей данные для анализа;


	- регламентного отчёта с идентификатором DM_REPORT_RES, в который
	 будут выгружены результаты анализа.


Добавьте ссылки на системные сборки: Dimensions, Metabase, Ms, Report,
 Stat, Tab.


			Sub UserF;

Var

    mb: IMetabase;

    ReportDS: IDmReportDataSource;

    TableDS: IDmTableDataSource;

    Method: IDmMethod;

    Report: IPrxReport;

    Shs: IPrxSheets;

    Sheet: ITabSheet;

    DM: IDmForecasting;

    i: Integer;

    Attrs: Array Of Integer;

    Reports: IDmReports;

    DmReport: IDmReport;

Begin

    mb := MetabaseClass.Active;

    // Создаем метод расчёта

    Method := (New DataMiningMethod.Create) As IDmMethod;

    // Указываем тип метода

    Method.Kind := DmMethodKind.ExponentialSmoothing;

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

    DM := Method.Details As IDmForecasting;

    // Задаем факторы, влияющие на анализ

    Attrs := New Integer[3];

    For i := 0 To 2 Do

        Attrs[i] := i + 1;

    End For;

    DM.Attributes := Attrs;

    If DM.ForecastingMethod = DmForecastingMethod.ExponentialSmoothing Then

        Debug.WriteLine("Экспоненциальное сглаживание");

        // Задаем число периодов прогнозирования

        DM.ForecastingPointsCount := 20;

        // Указываем календарную динамику

        DM.Level := DimCalendarLevel.Year;

        // Указываем поле данных, содержащее подписи для оси X

        DM.Labels := 0;

        // Добавляем строки для результатов прогнозирования

        ReportDS.AddResultRows(20);

    End If;

    // Выполняем анализ и выгружаем результаты

    Reports := Method.Execute;

    DmReport := reports.FindByType(DmReportType.Forecasting);

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

End Sub UserF;


В результате выполнения примера для данных из таблицы DM_TABLE будет
 выполнено прогнозирование значений с помощью экспоненциального сглаживания.
 Результаты анализа будут выгружены в отчёт DM_REPORT_RES.


См. также:


[IDmForecasting](IDmForecasting.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
