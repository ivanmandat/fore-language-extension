# ISmOmittedVariablesTest.Explained

ISmOmittedVariablesTest.Explained
-


# ISmOmittedVariablesTest.Explained


## Синтаксис


Explained: [ISlSerie](../ISlSerie/ISlSerie.htm);


## Описание


Свойство Explained определяет
 объясняемый ряд.


## Комментарии


Для задания объясняющих рядов используйте свойство [ISmOmittedVariablesTest.Explanatories](ISmOmittedVariablesTest.Explanatories.htm).


## Пример


Для выполнения примера добавьте ссылку на системную сборку Stat.


	Sub UserProc;

	Var

	    OVtest: SmOmittedVariablesTest;

	    d0: Double;

	    res: Integer;

	    ARMA: ISlARMA;

	    OrderList: Array[1] Of Integer;

	    y, x, y1, y2: Array[43] Of Double;

	    // Процедура вывода данных

	    Sub Print(Data: Array Of Double);

	    Var

	        i: Integer;

	    Begin

	        Debug.WriteLine("---Начало данных---");

	        For i := 0 To Data.Length - 1 Do

	            If Double.IsNan(Data[i]) Then

	                Debug.WriteLine(i.ToString + ", ---пусто---");

	            Else

	                Debug.WriteLine(i.ToString + ", " + Data[i].ToString);

	            End If;

	        End For;

	        Debug.WriteLine("---Окончание данных---");

	    End Sub Print;


	Begin


    // Задаем значения y, y1, y2, x

    y[00] := 6209; x[00] := 4110; y1[00] := 3415; y2[00] := 2822;

    y[01] := 6385; x[01] := 4280; y1[01] := 3673; y2[01] := 3023;

    y[02] := 6752; x[02] := 4459; y1[02] := 4013; y2[02] := 3131;

    y[03] := 6837; x[03] := 4545; y1[03] := 4278; y2[03] := 3351;

    y[04] := 6495; x[04] := 4664; y1[04] := 4577; y2[04] := 3463;

    y[05] := 6907; x[05] := 4861; y1[05] := 5135; y2[05] := 3686;

    y[06] := 7349; x[06] := 5195; y1[06] := 5388; y2[06] := 3815;

    y[07] := 7213; x[07] := 5389; y1[07] := 5610; y2[07] := 3960;

    y[08] := 7061; x[08] := 5463; y1[08] := 5787; y2[08] := 4119;

    y[09] := Double.Nan; x[09] := 5610; y1[09] := 6181; y2[09] := 4351;

    y[10] := 7132; x[10] := 5948; y1[10] := 6633; y2[10] := 4641;

    y[11] := 7137; x[11] := 6218; y1[11] := 6910; y2[11] := 5008;

    y[12] := 7473; x[12] := 6521; y1[12] := 7146; y2[12] := 5305;

    y[13] := 7722; x[13] := 6788; y1[13] := Double.Nan; y2[13] := 5611;

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

    y[29] := 14036; x[29] := 11865; y1[29] := 12172; y2[29] := 9820;

    y[30] := 14242; x[30] := 11781; y1[30] := 12058; y2[30] := 10246;

    y[31] := 14704; x[31] := 11681; y1[31] := 11804; y2[31] := 10153;

    y[32] := Double.Nan; x[32] := 11903; y1[32] := 11682; y2[32] := 10197;

    y[33] := 14197; x[33] := 11900; y1[33] := 12001; y2[33] := 10294;

    y[34] := 15010; x[34] := 11986; y1[34] := 12300; y2[34] := 10555;

    y[35] := 15589; x[35] := 12206; y1[35] := 12535; y2[35] := 10808;

    y[36] := 15932; x[36] := 12734; y1[36] := 13173; y2[36] := 11318;

    y[37] := 16631; x[37] := 12990; y1[37] := 13482; y2[37] := 11683;

    y[38] := 17394; x[38] := 13516; y1[38] := 13945; y2[38] := 12153;

    y[39] := 17758; x[39] := 13866; y1[39] := 14278; y2[39] := 12464;

    y[40] := 17308; x[40] := 14141; y1[40] := 14840; y2[40] := 12782;

    y[41] := 16444; x[41] := 14141; y1[41] := 15263; y2[41] := 13066;

    y[42] := 16413; x[42] := 14237; y1[42] := Double.Nan; y2[42] := 13113;


    OVtest := New SmOmittedVariablesTest.Create;

    // Задаем объясняемую и объясняющую переменные

    OVtest.Explained.Value := y;

    OVtest.Explanatories.Add.Value := y1;

    OVtest.Explanatories.Add.Value := y2;

    // Задаем дополнительный регрессор

    OVtest.OmittedExplanatories.Add.Value := x;

    // Задаем константу

    OVtest.ModelCoefficients.Intercept.Mode := InterceptMode.AutoEstimate;

    // Задаем период расчёта

    OVtest.ModelPeriod.FirstPoint := 1;

    OVtest.ModelPeriod.LastPoint := 43;

    // Задаем параметры скользящего среднего

    ARMA := OVtest.ARMA;

    OrderList[0] := 1;

    ARMA.OrderMA := OrderList;

    ARMA.CalcInitMode := ARMAInitType.Auto;

    // Задаем метод обработки пропусков

    OVtest.MissingData.Method := MissingDataMethod.LinInterpolation;

    // Выполняем расчёт и выводим результаты

    res := OVtest.Execute;

    If res <> 0 Then

        Debug.WriteLine(OVtest.Errors);

    Else

        Debug.WriteLine("Тест Фишера");

        d0 := OVtest.FTest.Statistic;

        Debug.WriteLine("значение: " + d0.ToString);

        d0 := OVtest.FTest.Probability;

        Debug.WriteLine("вероятность: " + d0.ToString);

        Debug.WriteLine("Тест хи-квадрат");

        d0 := OVtest.ChiTest.Statistic;

        Debug.WriteLine("значение: " + d0.ToString);

        d0 := OVtest.ChiTest.Probability;

        Debug.WriteLine("вероятность: " + d0.ToString);

        Debug.WriteLine("Модельный ряд");

        Print(OVtest.Fitted);

    End If;

End Sub UserProc;


В результате выполнения примера в окно консоли будут выведены значения
 тестов Фишера, хи-квадрат и модельный ряд.


См. также:


[ISmOmittedVariablesTest](ISmOmittedVariablesTest.htm)


		Справочная
		 система на версию ERROR: Variable (Version_lts) is undefined.
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
