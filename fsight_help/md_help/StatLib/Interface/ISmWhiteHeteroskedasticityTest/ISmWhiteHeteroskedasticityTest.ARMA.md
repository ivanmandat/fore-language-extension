# ISmWhiteHeteroskedasticityTest.ARMA

ISmWhiteHeteroskedasticityTest.ARMA
-


# ISmWhiteHeteroskedasticityTest.ARMA


## Синтаксис


ARMA: [ISlARMA](../ISlARMA/ISlARMA.htm);


## Описание


Свойство ARMA определяет порядки
 авторегрессии и скользящего среднего.


## Комментарии


По умолчанию параметры авторегрессии и скользящего среднего не заданы.


## Пример


Для выполнения примера добавьте ссылку на системную сборку Stat.


	Sub UserProc;

	Var

	    test: SmWhiteHeteroskedasticityTest;

	    d0, d: Double;

	    res, i: Integer;

	    y, x, y1, y2: Array[29] Of Double;

	    v: Array Of Double;

	    ARorder: Array Of Integer;

	Begin

	    test := New SmWhiteHeteroskedasticityTest.Create;

	   // значения y, x, y1, y2

	    y[00] := 6209; x[00] := 4110; y1[00] := 3415; y2[00] := 2822;

	    y[01] := 6385; x[01] := 4280; y1[01] := 3673; y2[01] := 3023;

	    y[02] := 6752; x[02] := 4459; y1[02] := 4013; y2[02] := 3131;

	    y[03] := 6837; x[03] := 4545; y1[03] := 4278; y2[03] := 3351;

	    y[04] := 6495; x[04] := 4664; y1[04] := 4577; y2[04] := 3463;

	    y[05] := 6907; x[05] := 4861; y1[05] := 5135; y2[05] := 3686;

	    y[06] := 7349; x[06] := 5195; y1[06] := 5388; y2[06] := 3815;

	    y[07] := 7213; x[07] := 5389; y1[07] := 5610; y2[07] := 3960;

	    y[08] := 7061; x[08] := 5463; y1[08] := 5787; y2[08] := 4119;

	    y[09] := 7180; x[09] := 5610; y1[09] := 6181; y2[09] := 4351;

	    y[10] := 7132; x[10] := 5948; y1[10] := 6633; y2[10] := 4641;

	    y[11] := 7137; x[11] := 6218; y1[11] := 6910; y2[11] := 5008;

	    y[12] := 7473; x[12] := 6521; y1[12] := 7146; y2[12] := 5305;

	    y[13] := 7722; x[13] := 6788; y1[13] := 7248; y2[13] := 5611;

	    y[14] := 8088; x[14] := 7222; y1[14] := 7689; y2[14] := 5693;

	    y[15] := 8516; x[15] := 7486; y1[15] := 8046; y2[15] := 5804;

	    y[16] := 8941; x[16] := 7832; y1[16] := 8143; y2[16] := 6121;

	    y[17] := 9064; x[17] := 8153; y1[17] := 8064; y2[17] := 6546;

	    y[18] := 9380; x[18] := 8468; y1[18] := 8556; y2[18] := 6918;

	    y[19] := 9746; x[19] := 9054; y1[19] := 9177; y2[19] := 7349;

	    y[20] := 9907; x[20] := 9499; y1[20] := 9705; y2[20] := 7769;

	    y[21] := 10333; x[21] := 9866; y1[21] := 9923; y2[21] := 7809;

	    y[22] := 10863; x[22] := 10217; y1[22] := 10268; y2[22] := 7951;

	    y[23] := 11693; x[23] := 10763; y1[23] := 10681; y2[23] := 8395;


    y[24] := 12242; x[24] := 10683; y1[24] := 10448; y2[24] := 8653;

    y[25] := 12227; x[25] := 10494; y1[25] := 10366; y2[25] := 8304;

    y[26] := 12910; x[26] := 10938; y1[26] := 10958; y2[26] := 8809;

    y[27] := 13049; x[27] := 11198; y1[27] := 11292; y2[27] := 9028;

    y[28] := 13384; x[28] := 11546; y1[28] := 11726; y2[28] := 9314;

    test.Explained.Value := y;

    test.Explanatories.Add.Value := x;

    test.Explanatories.Add.Value := y1;

    test.Explanatories.Add.Value := y2;

    test.ModelCoefficients.Intercept.Mode := InterceptMode.AutoEstimate;

    test.ModelPeriod.FirstPoint := 1;

    test.ModelPeriod.LastPoint := 29;

    test.MissingData.Method := MissingDataMethod.SampleAverage;

    test.CrossProduction := True;

    AROrder := New integer[1];

    AROrder[0] := 4;

    test.ARMA.OrderAR := ARorder;

    res := test.Execute;

    If res <> 0 Then

        Debug.WriteLine(test.Errors);

    Else

        Debug.WriteLine("=== Тест хи-квадрат ===");

        d0 := test.ChiTest.Statistic;

        Debug.WriteLine("значение: " + d0.ToString);

        d0 := test.ChiTest.Probability;

        Debug.WriteLine("вероятность: " + d0.ToString);

        Debug.WriteLine("== Коэффициенты вспомогательной модели ==");

        v := test.ModelCoefficients.Coefficients.Estimate;

        For i := 0 To v.Length - 1 Do

            d := v[i];

            Debug.WriteLine(i.ToString + ", " + d.ToString);

        End For;

        Debug.WriteLine("== Константа ==");

        d := test.ModelCoefficients.Intercept.Estimate;

        Debug.WriteLine(d.ToString);

    End If;

End Sub UserProc;


После выполнения примера в окно консоли будут выведены результаты расчетов
 теста с учетом заданной авторегрессии:


=== Тест хи-квадрат ===

значение: 14.863556241971898

вероятность: 0.094752683108926344

== Коэффициенты вспомогательной модели ==

0, -2047.8219148824237

1, -1.8183891124642606

2, 1.6177117723168264

3, 2.771300938164003

4, 42.870400877127082

5, 0.040252006347645655

6, -2.1441961041098123

7, 1882.2769152088426

8, -0.488043514966221

== Константа ==

2150720.8383350251


См. также:


[ISmWhiteHeteroskedasticityTest](ISmWhiteHeteroskedasticityTest.htm)


		Справочная
		 система на версию ERROR: Variable (Version_lts) is undefined.
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
