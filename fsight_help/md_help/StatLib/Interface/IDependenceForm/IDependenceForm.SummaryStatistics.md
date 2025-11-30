# IDependenceForm.SummaryStatistics

IDependenceForm.SummaryStatistics
-


# IDependenceForm.SummaryStatistics


## Синтаксис


SummaryStatistics: [ISummaryStatistics](../ISummaryStatistics/ISummaryStatistics.htm);


## Описание


Свойство SummaryStatistics возвращает
 статистические характеристики формы зависимости.


## Комментарии


В линеаризуемых моделях тренда статистики рассчитываются для исходной
 (нелинейной) модели.


## Пример


Для выполнения примера добавьте ссылку на системную сборку Stat.


	Sub UserProc;

	Var

	    trend: SmCurveEstimation;

	    Stat: Double;

	    status: Integer;

	    ar: Array[25] Of Double;

	    Forms: IDependenceForms;

	    Dep: IDependenceForm;

	Begin

	    trend := New SmCurveEstimation.Create;

	    ar[00] := 4110; ar[01] := 4280; ar[02] := 4459; ar[03] := 4545; ar[04] := 4664;

	    ar[05] := 4861; ar[06] := 5195; ar[07] := 5389; ar[08] := 5463; ar[09] := 5610;

	    ar[10] := 5948; ar[11] := 6218; ar[12] := 6521; ar[13] := 6788; ar[14] := 7222;

	    ar[15] := 7486; ar[16] := 7832; ar[17] := 8153; ar[18] := 8468; ar[19] := 9054;

	    ar[20] := 9499; ar[21] := 9866; ar[22] := 10217; ar[23] := 10763; ar[24] := 10683;

	    trend.Explained.Value := ar;

	    trend.Explanatory.IsTrend := True;

	    trend.ModelPeriod.LastPoint := 20;

	    trend.ForecastLastPoint := 30;

	    trend.SeasonalComponent.Mode := SeasonalityType.Additive;

	    trend.SeasonalComponent.Cycle := 4;

	    status := trend.Execute;

	    If status <> 0 Then

	        Debug.WriteLine(trend.Errors);

	        Else

	            Forms := trend.DependenceForms;

	            Dep := Forms.Item(1);

	            Debug.WriteLine("Форма зависимости " + Dep.DisplayName);

	            Stat := Dep.SummaryStatistics.DW;

	            Debug.WriteLine("=== Статистика Дарбина-Уотсона ===");

	            Debug.WriteLine(Stat);

	            Stat := Dep.SummaryStatistics.AIC;

	            Debug.WriteLine("=== Информационный критерий Акаике ===");

	            Debug.WriteLine(Stat);

	    End If;

	End Sub UserProc;


После выполнения примера в окно консоли будут выведены следующие результаты:


Форма зависимости Квадратичная


=== Статистика Дарбина-Уотсона
 ===


1,58869528521005


=== Информационный критерий
 Акаике ===


11,4737970155917


См. также:


[IDependenceForm](IDependenceForm.htm)


		Справочная
		 система на версию ERROR: Variable (Version_lts) is undefined.
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
