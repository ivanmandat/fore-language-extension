# IDependenceForm.ModelCoefficients

IDependenceForm.ModelCoefficients
-


# IDependenceForm.ModelCoefficients


## Синтаксис


ModelCoefficients: [IModelCoefficients](../IModelCoefficients/IModelCoefficients.htm);


## Описание


Свойство ModelCoefficients возвращает
 коэффициенты формы зависимости.


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

    Coefficients: ICoefficients;

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

        Debug.WriteLine(Dep.DisplayName);

        Coefficients := Dep.ModelCoefficients.Coefficients;

        For i := 0 To Coefficients.Estimate.Length - 1 Do

            d0 := Coefficients.Estimate[i];

            Debug.WriteLine(d0.ToString);

        End For;

    End If;

End Sub UserProc;


После выполнения примера в окно консоли будут выведены оцененные значения
 коэффициентов квадратичной формы зависимости:


Выполнение модуля начато


Квадратичная


85.0697080291973


7.89370437956204


Выполнение модуля завершено


См. также:


[IDependenceForm](IDependenceForm.htm)


		Справочная
		 система на версию ERROR: Variable (Version_lts) is undefined.
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
