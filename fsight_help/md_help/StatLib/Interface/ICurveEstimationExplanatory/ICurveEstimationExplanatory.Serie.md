# ICurveEstimationExplanatory.Serie

ICurveEstimationExplanatory.Serie
-


# ICurveEstimationExplanatory.Serie


## Синтаксис


Serie: [ISlSerie](../ISlSerie/ISlSerie.htm);


## Описание


Свойство Serie определяет объясняющий ряд данных.


## Комментарии


Свойство актуально, если [ICurveEstimationExplanatory.IsTrend](ICurveEstimationExplanatory.IsTrend.htm) = False.


## Пример


Для выполнения примера добавьте ссылку на системную сборку Stat.


			Sub UserProc;

Var

    trend: SmCurveEstimation;

    d0: Double;

    status, i: Integer;

    ar: Array[25] Of Double;

    Factor: Array[30] Of Double;

Begin

    trend := New SmCurveEstimation.Create;

    ar[00] := 4110; ar[01] := 4280; ar[02] := 4459; ar[03] := 4545; ar[04] := 4664;

    ar[05] := 4861; ar[06] := 5195; ar[07] := 5389; ar[08] := 5463; ar[09] := 5610;

    ar[10] := 5948; ar[11] := 6218; ar[12] := 6521; ar[13] := 6788; ar[14] := 7222;

    ar[15] := 7486; ar[16] := 7832; ar[17] := 8153; ar[18] := 8468; ar[19] := 9054;

    ar[20] := 9499; ar[21] := 9866; ar[22] := 10217; ar[23] := 10763; ar[24] := 10683;

    trend.Explained.Value := ar;

    Factor := New Double[30];

    For i := 0 To Factor.Length - 1 Do

        Factor[i] := 12 * i * i + 3;

    End For;

    trend.Explanatory.IsTrend := False; // объясняющий ряд задается пользователем
    trend.Explanatory.Serie.Value := Factor;

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

End Sub UserProc;


После выполнения примера в окно консоли будут выведены следующие результаты:


Linear: 0.987988137462419


Quadratic: 0.99542916076208


Polynomial: 0.996962811420135


Compound: 0.956993803296965


Growth: 0.956993803296965


Logarithmic: 0.716101862160297


Hyperbolic: 0.195983710349197


Exponential: 0.999999998876106


Inverse: 0.167424873636996


Power: 0.999999994509856


Logistic: 0.157635693973965


См. также:


[ICurveEstimationExplanatory](ICurveEstimationExplanatory.htm)


		Справочная
		 система на версию ERROR: Variable (Version_lts) is undefined.
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
