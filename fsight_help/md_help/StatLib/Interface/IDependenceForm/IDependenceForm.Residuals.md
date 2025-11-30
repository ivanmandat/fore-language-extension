# IDependenceForm.Residuals

IDependenceForm.Residuals
-


# IDependenceForm.Residuals


## Синтаксис


Residuals: Array;


## Описание


Свойство Residuals возвращает
 ряд остатков формы зависимости без учета сезонности.


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

        Debug.WriteLine("=== Ряд остатков без учета сезонности ===");

        For i := 0 To Dep.Residuals.Length - 1 Do

            d0 := Dep.Residuals[i];

            Debug.WriteLine(i.ToString + ": " + d0.ToString);

        End For;

    End If;

End Sub UserProc;


После выполнения примера в окно консоли будут выведены следующие результаты:


Выполнение модуля начато


Форма зависимости Квадратичная


=== Ряд остатков без учета сезонности ===


0: -70.2848996350376


1: -9.03572080292088


2: 45.4260492700723


3: -8.89958941605983


4: -46.0126368613155


5: -20.9130930656956


6: 125.399041970802


7: 115.923768248173


8: -29.3389142335782


9: -117.389005474455


10: -30.2265054744548


11: -26.8514142335789


12: -6.26373175182744


13: -37.4634580291995


14: 82.549406934304


15: 16.7748631386839


16: 17.2129105839394


17: -23.1364507299295


18: -85.2732208029229


19: 107.802600364961


Выполнение модуля завершено


См. также:


[IDependenceForm](IDependenceForm.htm)


		Справочная
		 система на версию ERROR: Variable (Version_lts) is undefined.
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
