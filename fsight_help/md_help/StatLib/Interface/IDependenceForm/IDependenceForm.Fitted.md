# IDependenceForm.Fitted

IDependenceForm.Fitted
-


# IDependenceForm.Fitted


## Синтаксис


Fitted: Array;


## Описание


Свойство Fitted возвращает массив
 значений модельного ряда формы зависимости без учета сезонности.


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

        Debug.WriteLine("=== Модельный ряд без учета сезонности ===");

        For i := trend.ModelPeriod.FirstPoint To Dep.Fitted.Length - 1 Do

            d0 := Dep.Fitted[i];

            Debug.WriteLine(i.ToString + ": " + d0.ToString);

        End For;

    End If;

End Sub UserProc;


После выполнения примера в окно консоли будут выведены следующие результаты:


Выполнение модуля начато


Форма зависимости Квадратичная


Значение критерия : 0.998640353781097


=== Модельный ряд без учета сезонности ===


1: 4289.03572080292


2: 4413.57395072993


3: 4553.89958941606


4: 4710.01263686132


5: 4881.9130930657


6: 5069.6009580292


7: 5273.07623175183


8: 5492.33891423358


9: 5727.38900547446


10: 5978.22650547445


11: 6244.85141423358


12: 6527.26373175183


13: 6825.4634580292


14: 7139.4505930657


15: 7469.22513686132


16: 7814.78708941606


17: 8176.13645072993


18: 8553.27322080292


19: 8946.19739963504


Выполнение модуля завершено


См. также:


[IDependenceForm](IDependenceForm.htm)


		Справочная
		 система на версию ERROR: Variable (Version_lts) is undefined.
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
