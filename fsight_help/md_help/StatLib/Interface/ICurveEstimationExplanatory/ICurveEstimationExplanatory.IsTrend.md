# ICurveEstimationExplanatory.IsTrend

ICurveEstimationExplanatory.IsTrend
-


# ICurveEstimationExplanatory.IsTrend


## Синтаксис


IsTrend: Boolean;


## Описание


Свойство IsTrend определяет, каким образом задается объясняющий ряд - в виде автоматически генерируемого ряда времени, или пользователем.


## Комментарии


Допустимые значения:


-
True. Значение по умолчанию. Объясняющий ряд является автоматически генерируемым рядом времени. Первая точка ряда задается через свойство [ICurveEstimationExplanatory.ReferencePoint](ICurveEstimationExplanatory.ReferencePoint.htm);


-
False. Объясняющий ряд задается пользователем через свойство [ICurveEstimationExplanatory.Serie](ICurveEstimationExplanatory.Serie.htm).


## Пример


Для выполнения примера добавьте ссылку на системную сборку Stat.


			Sub Main;
Var

    trend: SmCurveEstimation;

    d0: Double;

    status, i: Integer;

    ar: Array[25] Of Double;
Begin

    trend := New SmCurveEstimation.Create;

    ar[00] := 4110; ar[01] := 4280; ar[02] := 4459; ar[03] := 4545; ar[04] := 4664;

    ar[05] := 4861; ar[06] := 5195; ar[07] := 5389; ar[08] := 5463; ar[09] := 5610;

    ar[10] := 5948; ar[11] := 6218; ar[12] := 6521; ar[13] := 6788; ar[14] := 7222;

    ar[15] := 7486; ar[16] := 7832; ar[17] := 8153; ar[18] := 8468; ar[19] := 9054;

    ar[20] := 9499; ar[21] := 9866; ar[22] := 10217; ar[23] := 10763; ar[24] := 10683;

    trend.Explained.Value := ar;

    trend.Explanatory.IsTrend := True; // объясняющий ряд - автоматически генерируемый ряд времени
    trend.Explanatory.ReferencePoint := 99; // первая точка объясняющего ряда времени
    trend.ModelPeriod.LastPoint := 20;

    trend.ForecastLastPoint := 30;

    trend.SeasonalComponent.Mode := SeasonalityType.Additive;

    trend.SeasonalComponent.Cycle := 4;

    status := trend.Execute;

    If status <> 0 Then

        Debug.WriteLine(trend.Errors);

        Else

            For i := 0 To 10 Do

                d0 := trend.DependenceForms.Item(i).CriterionValue;

                Debug.WriteLine(trend.DependenceForms.Item(i).Name + ": " + d0.ToString);

            End For;

    End If;
End Sub Main;


После выполнения примера в окно консоли будут выведены следующие результаты:


Linear: 0.97313512972825955


Quadratic: 0.99853888260620438


Polynomial: 0.99862028141069137


Compound: 0.99520880118290411


Growth: 0.99520880118290367


Logarithmic: 0.96515890582692698


Hyperbolic: 0.98683741835754846


Exponential: 0.99520880118290367


Inverse: 0.95615061432260506


Power: 0.99166441790463866


Logistic: 0.18896590355019971


См. также:


[ICurveEstimationExplanatory](ICurveEstimationExplanatory.htm)


		Справочная
		 система на версию ERROR: Variable (Version_lts) is undefined.
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
