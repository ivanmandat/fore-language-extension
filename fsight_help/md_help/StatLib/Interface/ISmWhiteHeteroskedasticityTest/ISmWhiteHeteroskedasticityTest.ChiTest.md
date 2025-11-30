# ISmWhiteHeteroskedasticityTest.ChiTest

ISmWhiteHeteroskedasticityTest.ChiTest
-


# ISmWhiteHeteroskedasticityTest.ChiTest


## Синтаксис


ChiTest: [ISpecificationTestStatistic](../ISpecificationTestStatistic/ISpecificationTestStatistic.htm);


## Описание


Свойство ChiTest возвращает
 значения статистики хи-квадрат.


## Комментарии


Для получения статистических характеристик используйте свойство [ISmWhiteHeteroskedasticityTest.SummaryStatistics](ISmWhiteHeteroskedasticityTest.SummaryStatistics.htm).


## Пример


Для выполнения примера добавьте ссылку на системную сборку Stat.


			Sub UserProc;

Var

    test: SmWhiteHeteroskedasticityTest;

    y, x, y1, y2: Array[43] Of Double;

    d0, d: Double;

    res, i: Integer;

    v: Array Of Double;

Begin

    test := New SmWhiteHeteroskedasticityTest.Create;

    // значения y, x, y1, y2

    y[00] := 6209; x[00] := 4110; y1[00] := 3415; y2[00] := 2822;

    y[01] := 6385; x[01] := 4280; y1[01] := 3673; y2[01] := 3023;

    y[02] := Double.Nan; x[02] := 4459; y1[02] := 4013; y2[02] := 3131;

    y[03] := 6837; x[03] := 4545; y1[03] := 4278; y2[03] := 3351;

    y[04] := 6495; x[04] := 4664; y1[04] := 4577; y2[04] := 3463;

    y[05] := 6907; x[05] := 4861; y1[05] := 5135; y2[05] := 3686;

    y[06] := 7349; x[06] := 5195; y1[06] := 5388; y2[06] := 3815;

    y[07] := 7213; x[07] := 5389; y1[07] := 5610; y2[07] := 3960;

    y[08] := Double.Nan; x[08] := 5463; y1[08] := 5787; y2[08] := 4119;

    y[09] := 7180; x[09] := 5610; y1[09] := 6181; y2[09] := 4351;

    y[10] := 7132; x[10] := 5948; y1[10] := 6633; y2[10] := 4641;

    y[11] := 7137; x[11] := 6218; y1[11] := 6910; y2[11] := 5008;

    y[12] := 7473; x[12] := 6521; y1[12] := 7146; y2[12] := 5305;

    y[13] := 7722; x[13] := 6788; y1[13] := 7248; y2[13] := 5611;

    y[14] := 8088; x[14] := 7222; y1[14] := 7689; y2[14] := 5693;

    test.Explained.Value := y;

    test.Explanatories.Add.Value := x;

    test.Explanatories.Add.Value := y1;

    test.Explanatories.Add.Value := y2;

    test.ModelCoefficients.Intercept.Mode := InterceptMode.AutoEstimate;

    test.ModelPeriod.FirstPoint := 1;

    test.ModelPeriod.LastPoint := 43;

    test.MissingData.Method := MissingDataMethod.SampleAverage;

    test.CrossProduction := True;

    res := test.Execute;

    If res <> 0 Then

        Debug.WriteLine(test.Errors);

    Else

        Debug.WriteLine("=== Тест хи-квадрат ===");

        d0 := test.ChiTest.Statistic;

        Debug.WriteLine("значение: " + d0.ToString);

        d0 := test.ChiTest.Probability;

        Debug.WriteLine("вероятность: " + d0.ToString);

        Debug.WriteLine("== Коэффициенты вспомогательной
 модели ==");

        v := test.ModelCoefficients.Coefficients.Estimate;

        For i := 0 To v.Length - 1 Do

            d := v[i];

            Debug.WriteLine(i.ToString + ", " + d.ToString);

        End For;

        Debug.WriteLine("== Константа ==");

        d := test.ModelCoefficients.Intercept.Estimate;

        Debug.WriteLine(d);

    End If;

End Sub UserProc;


После выполнения примера в окно консоли будут выведены результаты расчетов
 теста:


=== Тест хи-квадрат ===

значение: 28.202805679616048

вероятность: 0.00088220200250368531

== Коэффициенты вспомогательной модели ==

0, -1.9736354612786495

1, -0.0020307450890754224

2, 0.0037765161703100761

3, 0.00057743836791185658

4, -0.73486089530202447

5, -0.00076172996893037772

6, -0.0025194364753011907

7, 1.2152955550526394

8, 0.0010562426725125331

== Константа ==

6318.469666998958


См. также:


[ISmWhiteHeteroskedasticityTest](ISmWhiteHeteroskedasticityTest.htm)


		Справочная
		 система на версию ERROR: Variable (Version_lts) is undefined.
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
