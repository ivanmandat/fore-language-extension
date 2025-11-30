# IDependenceForm.ForecastSeasonality

IDependenceForm.ForecastSeasonality
-


# IDependenceForm.ForecastSeasonality


## Синтаксис


ForecastSeasonality: [IForecast](../IForecast/IForecast.htm);


## Описание


Свойство ForecastSeasonality
 определяет параметры прогнозного ряда формы зависимости с учетом сезонности.


## Комментарии


Последняя точка прогноза и значимость доверительных границ устанавливаются
 из свойств [ISmCurveEstimation.ForecastLastPoint](../ISmCurveEstimation/ISmCurveEstimation.ForecastLastPoint.htm)
 и [ISmCurveEstimation.ForecastConfidenceLevel](../ISmCurveEstimation/ISmCurveEstimation.ForecastConfidenceLevel.htm)
 соответственно.


## Пример


Добавьте ссылку на системную сборку Stat.


					Sub UserProc;

		Var

		    trend: SmCurveEstimation;

		    d0: Double;

		    status, i: Integer;

		    ar: Array Of Double;

		    Forms: IDependenceForms;

		    Dep: IDependenceForm;

		    ForecastS: IForecast;

		Begin

		    // Создаем объект для подбора формы зависимости

		    trend := New SmCurveEstimation.Create;

		    // Задаём значения объясняемого ряда

		    ar := New Double[25];

		    ar[00] := 4110; ar[01] := 4280; ar[02] := 4459;

		    ar[03] := 4545; ar[04] := 4664; ar[05] := 4861;

		    ar[06] := 5195; ar[07] := 5389; ar[08] := 5463;

		    ar[09] := 5610; ar[10] := 5948; ar[11] := 6218;

		    ar[12] := 6521; ar[13] := 6788; ar[14] := 7222;

		    ar[15] := 7486; ar[16] := 7832; ar[17] := 8153;

		    ar[18] := 8468; ar[19] := 9054; ar[20] := 9499;

		    ar[21] := 9866; ar[22] := 10217; ar[23] := 10763;

		    ar[24] := 10683;

		    trend.Explained.Value := ar;

		    // Задаём автоматическую генерацию объясняющего ряда

		    trend.Explanatory.IsTrend := True;

		    // Задаём конечную точку периода идентификации

		    trend.ModelPeriod.LastPoint := 20;

		    // Задаём последнюю точку прогнозного ряда

		    trend.ForecastLastPoint := 30;

		    // Определяем тип сезонности

		    trend.SeasonalComponent.Mode := SeasonalityType.additive;

		    // Определяем период сезонности

		    trend.SeasonalComponent.Cycle := 4;

		    // Выполняем расчёт и выводим результаты

		    status := trend.Execute;

		    If status <> 0 Then

		        Debug.WriteLine(trend.Errors);

		        Else

		            Forms := trend.DependenceForms;

		            Dep := Forms.Item(1);

		            d0 := Dep.CriterionValue;

		            Debug.WriteLine("Форма зависимости " + Dep.DisplayName);

		            Debug.WriteLine("Значение критерия " + ": " + d0.ToString);

		            ForecastS := Dep.ForecastSeasonality;

		            Debug.WriteLine("=== Прогнозный ряд с учетом сезонности ===");

		            For i := trend.ModelPeriod.LastPoint To ForecastS.Value.Length - 1 Do

		                d0 := ForecastS.Value[i];

		                Debug.WriteLine(i.ToString + ": " + d0.ToString);

		            End For;

		    End If;

		End Sub UserProc;


В результате выполнения примера в окно консоли будут выведены: форма
 зависимости, значение критерия и значения прогнозного ряда с учетом сезонности.


См. также:


[IDependenceForm](IDependenceForm.htm)


		Справочная
		 система на версию ERROR: Variable (Version_lts) is undefined.
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
