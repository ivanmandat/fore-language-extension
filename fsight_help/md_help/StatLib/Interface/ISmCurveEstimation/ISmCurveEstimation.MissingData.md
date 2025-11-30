# ISmCurveEstimation.MissingData

ISmCurveEstimation.MissingData
-


# ISmCurveEstimation.MissingData


## Синтаксис


MissingData: [IMissingData](../IMissingData/IMissingData.htm);


## Описание


Свойство MissingData определяет
 параметры обработки пропусков.


## Комментарии


По умолчанию обработка пропусков не выполняется.


## Пример


Добавьте ссылку на системную сборку Stat.


	Sub UserProc;

	Var

	    trend: SmCurveEstimation;

	    ar: Array[25] Of Double;

	    d0: Double;

	    MData: IMissingData;

	    status, i, s: Integer;

	    Forms: IDependenceForms;

	    Poly: IDependenceForm;

	    Forecast: IForecast;

	    Period: IStatPeriod;

	Begin

	    // Создаем объект для расчета метода

	    trend := New SmCurveEstimation.Create;

	    // Задаем значения объясняемого ряда

	    ar[00] := 4110; ar[01] := 4280; ar[02] := 4459; ar[03] := 4545; ar[04] := 4664;

	    ar[05] := 4861; ar[06] := 5195; ar[07] := 4664; ar[08] := 9054; ar[09] := Double.Nan;

	    ar[10] := 5948; ar[11] := Double.Nan; ar[12] := 6521; ar[13] := 6788; ar[14] := 7222;

	    ar[15] := 7486; ar[16] := 7832; ar[17] := 8153; ar[18] := 8468; ar[19] := Double.Nan;

	    ar[20] := 9499; ar[21] := 9866; ar[22] := 10217; ar[23] := 10763; ar[24] := 10683;

	    trend.Explained.Value := ar;

	    // Задаем параметры объясняющего ряда

	    trend.Explanatory.IsTrend := True;

	    // Задаем период идентификации

	    Period := trend.ModelPeriod;

	    Period.FirstPoint := 10;

	    Period.LastPoint := 20;

	    // Задаем границы периода прогнозирования

	    trend.ForecastFirstPoint := 20;

	    trend.ForecastLastPoint := 30;

	    // Определяем значимость доверительных границ прогнозного ряда

	    trend.ForecastConfidenceLevel := 0.85;

	    // Определяем тип критерия отбора лучшей формы зависимости

	    trend.Criterion := DependenceCriterion.R2Adj;

	    // Задаем параметры сезонной составляющей

	    trend.SeasonalComponent.Mode := SeasonalityType.Additive;

	    trend.SeasonalComponent.Cycle := 4;

	    // Задаем степень полинома для полиномиальной формы зависимости

	    trend.PolynomOrder := 4;

	    // Задаем параметры метода обработки пропусков

	    MData := trend.MissingData;

	    MData.Method := MissingDataMethod.SampleAverage;


	    // Выполняем расчет

	    status := trend.Execute;

	    If status <> 0 Then

	        // Если расчет завершился с ошибками, то выводим их в окно консоли

	        Debug.WriteLine(trend.Errors);

	        Else

	            // Если расчет завершился удачно, то выводим в окно консоли значения

	            Debug.WriteLine("== Модельный ряд == ");

	            Debug.Indent;

	            For i := 0 To trend.Explained.Value.Length - 1 Do

	                Debug.WriteLine(trend.Explained.Value[i]);

	            End For;

	            Debug.Unindent;

	            Debug.WriteLine("== Исходный ряд ==");

	            Debug.Indent;

	            For i := 0 To trend.Explained.Value.Length - 1 Do

	                Debug.WriteLine(trend.Explained.OriginalValue[i]);

	            End For;

	            Debug.Unindent;

	            Forms := trend.DependenceForms;

	            Debug.WriteLine("== Значения критерия ==");

	            For i := 0 To Forms.Count - 3 Do

	                s := trend.SortedModelList[i];

	                d0 := Forms.Item(s).CriterionValue;

	                Debug.WriteLine(Forms.Item(s).DisplayName + ": " + d0.ToString);

	            End For;

	            Debug.WriteLine("== Лучшая зависимость ==");

	            Debug.WriteLine(trend.BestDependenceForm);

	            Poly := Forms.Item(2);

	            Forecast := Poly.Forecast;

	            Debug.WriteLine("Зависимость " + Poly.DisplayName + " значение критерия " + Poly.CriterionValue.ToString);

	            Debug.WriteLine("== Прогнозный ряд ==");

	            Debug.Indent;

	            For i := trend.ForecastFirstPoint To Forecast.Value.Length - 1 Do

	                Debug.WriteLine(Forecast.Value[i]);

	            End For;

	            Debug.Unindent;

	            Debug.WriteLine("== Сезонная составляющая ==");

	            Debug.Indent;

	            For i := Period.FirstPoint To trend.SeasonalAdjustment.Length - 1 Do

	                d0 := trend.SeasonalAdjustment[i];

	                Debug.WriteLine(d0.ToString);

	            End For;

	            Debug.Unindent;

	    End If;

	End Sub UserProc;


После выполнения примера в окно консоли будут выведены модельный и исходный
 ряды, значения критерия для зависимостей, номер лучшей зависимости, прогнозный
 ряд, рассчитанный в помощью полиномиальной зависимости, значения сезонной
 составляющей.


См. также:


[ISmCurveEstimation](ISmCurveEstimation.htm)


		Справочная
		 система на версию ERROR: Variable (Version_lts) is undefined.
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
