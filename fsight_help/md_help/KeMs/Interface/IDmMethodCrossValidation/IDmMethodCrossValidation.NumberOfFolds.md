# IDmMethodCrossValidation.NumberOfFolds

IDmMethodCrossValidation.NumberOfFolds
-


# IDmMethodCrossValidation.NumberOfFolds


## Синтаксис


		NumberOfFolds: Integer;


## Описание


Свойство NumberOfFolds
 определяет количество блоков.


## Комментарии


Свойство учитывается, если используется кросс-валидация по K
 блокам, то есть свойство [IDmMethodCrossValidation.SamplingType](IDmMethodCrossValidation.SamplingType.htm)
 имеет значение [CrossValidationSamplingType.Kfold](StatLib.chm::/Enums/CrossValidationSamplingType.htm).


Диапазон допустимых значений: [1,
 количество наблюдений].


Значение по умолчанию: «5».


## Пример


Для выполнения примера в репозитории предполагается наличие таблицы
 с идентификатором DM_TABLE, содержащей данные для анализа.


Добавьте ссылки на системные сборки: Metabase, Ms, Stat.


					Sub UserProc;

		Var

		    MB: IMetabase;

		    ReportDS: IDmReportDataSource;

		    TableDS: IDmTableDataSource;

		    Method: IDmMethod;

		    DM: IDmLogisticRegression;

		    i, j: Integer;

		    Attrs: Array Of Integer;

		    CrossValidation: IDmMethodCrossValidation;

		    Reports: IDmReports;

		    DmReport: IDmReport;

		    CrossValPerf: ICrossValidationPerformanceScores;

		    CategoriesList, KfoldIntervals: Array Of Integer;

		    PerformanceMatrix: Array Of Double;

		Begin

		    MB := MetabaseClass.Active;

		    // Создаем метод расчёта

		    Method := (New DataMiningMethod.Create) As IDmMethod;

		    // Указываем тип метода

		    Method.Kind := DmMethodKind.LogisticRegression;

		    // Создаем табличный источник данных

		    TableDS := (New TableDataSource.Create) As IDmTableDataSource;

		    // Указываем таблицу-источник

		    TableDS.Table := MB.ItemByID("DM_TABLE").Bind;

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

		    // Задаем метод кросс-валидации: валидация по K блокам

		    CrossValidation.SamplingType := CrossValidationSamplingType.Kfold;

		    // Задаем количество блоков

		    CrossValidation.NumberOfFolds := 4;

		    // Выполняем анализ и выгружаем результаты

		    Reports := Method.Execute;

		    // Выводим результаты кросс-валидации

		    DmReport := Reports.FindByType(DmReportType.CrossValidation);

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

		    Debug.WriteLine("Интервалы для блоков:");

		    Debug.Indent;

		    KfoldIntervals := CrossValPerf.KfoldIntervals;

		    For i := 0 To KfoldIntervals.Length - 1 Do

		        Debug.WriteLine(KfoldIntervals[i]);

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


В результате выполнения примера будет выполнена кросс-валидация, её
 результаты будут выведены в окно консоли.


См. также:


[IDmMethodCrossValidation](IDmMethodCrossValidation.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
