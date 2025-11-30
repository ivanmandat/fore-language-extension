# IDependenceForm.ResidualsSeason

IDependenceForm.ResidualsSeason
-


# IDependenceForm.ResidualsSeason


## Синтаксис


ResidualsSeason: Array;


## Описание


Свойство ResidualsSeason возвращает
 ряд остатков формы зависимости с учетом сезонности.


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

        Debug.WriteLine("Форма зависимости " + Dep.DisplayName);

        Debug.WriteLine("=== Ряд остатков с учетом сезонности ===");

        For i := 0 To Dep.ResidualsSeason.Length -1 Do

            d0 := Dep.ResidualsSeason[i];

            Debug.WriteLine(i.ToString + ": " + d0.ToString);

        End For;

    End If;

End Sub UserProc;


После выполнения примера в окно консоли будут выведены следующие результаты:


Выполнение модуля начато


Форма зависимости Квадратичная


=== Ряд остатков с учетом сезонности ===


0: -43.3474452554756


1: 32.5518248175176


2: 17.8510948905105


3: -49.8496350364976


4: -19.0751824817535


5: 20.6744525547429


6: 97.8240875912397


7: 74.9737226277357


8: -2.40145985401614


9: -75.8014598540167


10: -57.8014598540167


11: -67.8014598540167


12: 20.6737226277346


13: 4.124087591239


14: 54.9744525547421


15: -24.1751824817538


16: 44.1503649635015


17: 18.451094890509


18: -112.848175182486


19: 66.8525547445224


Выполнение модуля завершено


См. также:


[IDependenceForm](IDependenceForm.htm)


		Справочная
		 система на версию ERROR: Variable (Version_lts) is undefined.
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
