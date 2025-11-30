# IDmReportDataSource.CopyToTabSheet

IDmReportDataSource.CopyToTabSheet
-


# IDmReportDataSource.CopyToTabSheet


## Синтаксис


CopyToTabSheet: [ITabSheet](TabSheet.chm::/Interface/ITabSheet/ITabSheet.htm);


## Описание


Метод CopyToTabSheet копирует
 данные в отдельную таблицу.


## Комментарии


Метод может использоваться для сохранения результатов анализа на отдельный
 лист регламентного отчёта.


## Пример


Для выполнения примера в репозитории предполагается наличие регламентного
 отчёта с идентификатором REPORT_DATA_DM. На первом листе отчёта должны
 содержаться числовые значения в диапазоне A0:D36. В столбце D36 должна
 отсутствовать часть значений.


Добавьте ссылки на системные сборки: Metabase, Ms, Report, Stat, Tab.


	Sub UserProc;

	Var

	    mb: IMetabase;

	    ReportDS: IDmReportDataSource;

	    Report: IPrxReport;

	    Shs: IPrxSheets;

	    Sheet, SheetRes: ITabSheet;

	    Method: IDmMethod;

	    BackProp: IDmBackPropagation;

	    i: Integer;

	    Attrs: Array Of Integer;

	    Reports: IDmReports;

	    DmReport: IDmReport;

	Begin

	    mb := MetabaseClass.Active;

	    // Создаем источник данных, являющийся регламентным отчётом

	    ReportDS := (New ReportDataSource.Create) As IDmReportDataSource;

	    // Получаем регламентный отчёт

	    Report := mb.ItemByID("REPORT_DATA_DM").Edit As IPrxReport;

	    Shs := Report.Sheets;

	    // Указываем страницу с данными

	    Sheet := (Shs.Item(0) As IPrxTable).TabSheet;

	    ReportDS.TabSheet := Sheet;

	    // Указываем диапазон данных

	    ReportDS.Range := Sheet.Cells(0, 0, 36, 3);

	    // Создаем метод расчёта

	    Method := (New DataMiningMethod.Create) As IDmMethod;

	    // Указываем тип метода

	    Method.Kind := DmMethodKind.BackPropagation;

	    // Задаем входной источник данных

	    Method.InputDataSource := ReportDS;

	    // Задаем приёмник данных

	    Method.OutputDataSource := ReportDS;

	    // Настраиваем параметры метода расчёта

	    BackProp := Method.Details As IDmBackPropagation;

	    // Указываем столбец для анализа

	    BackProp.Target := ReportDS.FieldCount - 1;

	    // Задаем факторы, влияющие на анализ

	    Attrs := New Integer[ReportDS.FieldCount - 2];

	    For i := 0 To Attrs.Length - 1 Do

	        Attrs[i] := i + 1;

	    End For;

	    BackProp.Attributes := Attrs;

	    // Выполняем анализ

	    Reports := Method.Execute;

	    DmReport := Reports.FindByType(DmReportType.TemplateFill);

	    // Проверяем, доступна ли выгрузка результатов

	    If ReportDS.SupportsEdit = True Then

	        // Выгружаем результаты на новый лист во отчете

	        Sheet := (Shs.Add("", PrxSheetType.Table) As IPrxTable).TabSheet;

	        SheetRes := DmReport.Generate.CopyToTabSheet;

	        SheetRes.View.Selection.SelectAll;

	        SheetRes.View.Selection.Copy;

	        Sheet.Paste;

	        (Report As IMetabaseObject).Save;

	    Else

	        // Выводим сообщение, что выгрузка недоступна

	        Debug.WriteLine("Источник не поддерживает редактирование. " +

	            "Сохранение результатов недоступно." );

	    End If;

	End Sub UserProc;


В результате выполнения примера в отчёте REPORT_DATA_DM в столбце D36
 будет выполнено заполнение пропусков с помощью сети обратного распространения.
 Результаты заполнения будут выгружены на отдельный лист и добавлены в
 отчёт.


См. также:


[IDmReportDataSource](IDmReportDataSource.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
