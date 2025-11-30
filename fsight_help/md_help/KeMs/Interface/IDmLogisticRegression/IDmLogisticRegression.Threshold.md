# IDmLogisticRegression.Threshold

IDmLogisticRegression.Threshold
-


# IDmLogisticRegression.Threshold


## Синтаксис


Threshold: Double;


## Описание


Свойство Threshold определяет
 пороговое значение.


## Комментарии


Диапазон допустимых значений: (0, 1).


## Пример


Для выполнения примера в репозитории предполагается наличие:


	- таблицы с идентификатором DM_TABLE, содержащей данные для анализа;


	- регламентного отчёта с идентификатором DM_REPORT_RES, в который
	 будут выгружены результаты анализа.


Добавьте ссылки на системные сборки: Metabase, Ms, Report, Stat, Tab.


			Sub UserProc;

Var

    mb: IMetabase;

    ReportDS: IDmReportDataSource;

    TableDS: IDmTableDataSource;

    Method: IDmMethod;

    Report: IPrxReport;

    Shs: IPrxSheets;

    Sheet: ITabSheet;

    DM: IDmLogisticRegression;

    i, j: Integer;

    Attrs: Array Of Integer;

    CrossValidation: IDmMethodCrossValidation;

    Reports: IDmReports;

    DmReport: IDmReport;

    CrossValPerf: ICrossValidationPerformanceScores;

    CategoriesList: Array Of Integer;

    PerformanceMatrix: Array Of Double;

Begin

    mb := MetabaseClass.Active;

    // Создаем метод расчёта

    Method := (New DataMiningMethod.Create) As IDmMethod;

    // Указываем тип метода

    Method.Kind := DmMethodKind.LogisticRegression;

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

    DM := Method.Details As IDmLogisticRegression;

    // Задаем факторы, влияющие на анализируемый признак

    Attrs := New Integer[TableDS.FieldCount - 1];

    For i := 0 To Attrs.Length - 1 Do

        Attrs[i] := i + 1;

    End For;

    DM.Attributes := Attrs;

    // Указываем анализируемый объект

    DM.Target := ReportDS.FieldCount;

    // Задаем пороговое значение

    DM.Threshold := 0.57;

    // Настраиваем параметры кросс-валидации

    CrossValidation := DM.CrossValidation;

    // Указываем, что кросс-валидация используется

    CrossValidation.Active := True;

    // Задаем метод кросс-валидации: валидация последовательным случайным разбиением

    CrossValidation.SamplingType := CrossValidationSamplingType.RandomSampling;

    // Задаем число повторений

    CrossValidation.NumberOfRandomTests := 15;

    // Задаем размер обучающего набора

    CrossValidation.TrainingSetSize := 75;

    // Выполняем анализ и выгружаем результаты

    Reports := Method.Execute;

    DmReport := reports.FindByType(DmReportType.LogisticRegression);

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

    // Выводим результаты кросс-валидации

    DmReport := reports.FindByType(DmReportType.CrossValidation);

    DmReport.Generate;

    CrossValPerf := CrossValidation.Results;

    Debug.WriteLine("Результаты кросс-валидации:");

    Debug.Indent;

    Debug.WriteLine("Анализируемый признак: " + CrossValPerf.ClassificatorName);

    Debug.Write("Количество факторов, влияющих на анализируемый признак: ");

    Debug.WriteLine(CrossValPerf.FactorsNumber);

    Debug.WriteLine("Количество наблюдений: " + CrossValPerf.ObservationsNumber.ToString);

    Debug.WriteLine("Количество повторений: " + CrossValidation.NumberOfRandomTests.ToString);

    Debug.WriteLine("Точность классификации: " + CrossValPerf.ClassificationAccuracy.ToString);

    Debug.WriteLine("Категории:");

    Debug.Indent;

    CategoriesList := CrossValPerf.CategoriesList;

    For i := 0 To CategoriesList.Length - 1 Do

        Debug.WriteLine(CategoriesList[i]);

    End For;

    Debug.Unindent;

    Debug.WriteLine("Корректная классификация:");

    Debug.Indent;

    PerformanceMatrix := CrossValPerf.PerformanceMatrix;

    For i := 0 To PerformanceMatrix.GetUpperBound(1) Do

        For j := 0 To PerformanceMatrix.GetUpperBound(2) Do

            Debug.Write(PerformanceMatrix[i, j].ToString + #9);

        End For;

    Debug.WriteLine("");

    End For;

    Debug.Unindent;

    Debug.Unindent;

End Sub UserProc;


В результате выполнения примера для данных из таблицы DM_TABLE будет
 выполнено заполнение пропусков с помощью логистической регрессии. Результаты
 анализа будут выгружены в отчёт DM_REPORT_RES. Результаты кросс-валидации
 будут выведены в окно консоли.


См. также:


[IDmLogisticRegression](IDmLogisticRegression.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
