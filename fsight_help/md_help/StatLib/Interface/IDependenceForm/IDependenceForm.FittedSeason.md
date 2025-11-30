# IDependenceForm.FittedSeason

IDependenceForm.FittedSeason
-


# IDependenceForm.FittedSeason


## Синтаксис


FittedSeason: Array;


## Описание


Свойство FittedSeason возвращает
 массив значений модельного ряда формы зависимости с учетом сезонности.


## Пример


Для выполнения примера добавьте ссылку на системную сборку Stat.


			Sub UserProc;

Var

    trend: SmCurveEstimation;

    d0: Double;

    status, i: Integer;

    ar: Array Of Double;

    Forms: IDependenceForms;

    Dep: IDependenceForm;

Begin

    trend := New SmCurveEstimation.Create;

    ar := New Double[25];

    ar[00] := 4110;

    ar[01] := 4280;

    ar[02] := 4459;

    ar[03] := 4545;

    ar[04] := 4664;

    ar[05] := 4861;

    ar[06] := 5195;

    ar[07] := 5389;

    ar[08] := 5463;

    ar[09] := 5610;

    ar[10] := 5948;

    ar[11] := 6218;

    ar[12] := 6521;

    ar[13] := 6788;

    ar[14] := 7222;

    ar[15] := 7486;

    ar[16] := 7832;

    ar[17] := 8153;

    ar[18] := 8468;

    ar[19] := 9054;

    ar[20] := 9499;

    ar[21] := 9866;

    ar[22] := 10217;

    ar[23] := 10763;

    ar[24] := 10683;

    trend.Explained.Value := ar;

    trend.Explanatory.IsTrend := True;

    trend.ModelPeriod.LastPoint := 20;

    trend.ForecastLastPoint := 30;

    trend.SeasonalComponent.Mode := SeasonalityType.additive;

    trend.SeasonalComponent.Cycle := 4;

    status := trend.Execute;

    If status <> 0 Then

        Debug.WriteLine(trend.Errors);

    Else

        Forms := trend.DependenceForms;

        Dep := Forms.Item(1);

        d0 := Dep.CriterionValue;

        Debug.WriteLine("Форма зависимости " + Dep.DisplayName);

        Debug.WriteLine("Значение критерия "+ ": " + d0.ToString);

        Debug.WriteLine("=== Модельный ряд с учетом сезонности ===");

        For i := 0 To Dep.FittedSeason.Length - 1 Do

            d0 := Dep.FittedSeason[i];

            Debug.WriteLine(i.ToString + ": " + d0.ToString);

        End For;

    End If;

End Sub UserProc;


После выполнения примера в окно консоли будут выведены следующие результаты:


Выполнение модуля начато


Форма зависимости Квадратичная


Значение критерия : 0.998640353781097


=== Модельный ряд с учетом сезонности ===


0: 4153.34744525548


1: 4247.44817518248


2: 4441.14890510949


3: 4594.8496350365


4: 4683.07518248175


5: 4840.32554744526


6: 5097.17591240876


7: 5314.02627737226


8: 5465.40145985402


9: 5685.80145985402


10: 6005.80145985402


11: 6285.80145985402


12: 6500.32627737227


13: 6783.87591240876


14: 7167.02554744526


15: 7510.17518248175


16: 7787.8496350365


17: 8134.54890510949


18: 8580.84817518249


19: 8987.14744525548


Выполнение модуля завершено


См. также:


[IDependenceForm](IDependenceForm.htm)


		Справочная
		 система на версию ERROR: Variable (Version_lts) is undefined.
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
