# ISlSimultaneousEquation.SpecificInstrumental

ISlSimultaneousEquation.SpecificInstrumental
-


# ISlSimultaneousEquation.SpecificInstrumental


## Синтаксис


SpecificInstrumental: [ISlSeries](../ISlSeries/ISlSeries.htm);


## Описание


Свойство SpecificInstrumental
 возвращает параметры специальных переменных уравнения.


## Комментарии


Свойство актуально только для методов SimultaneousSystemMode.TSLS
 и SimultaneousSystemMode.3SLS.


## Пример


Для выполнения примера добавьте ссылку на системную сборку Stat.


	Sub UserProc;

	Var

	    simeq: SmSimultaneousSystem;

	    eqs: ISlSimultaneousEquations;

	    eq: ISlSimultaneousEquation;

	    can, fra, ger, ita, jpn, us, uk: Array[20] Of Double;

	    i, j, res: Integer;

	Begin

	    simeq := New SmSimultaneousSystem.Create;


    //значения can,fra,ger,ita,jpn,us,uk

    can[00] := 6209; fra[00] := 4110; ger[00] := 3415; ita[00] := 2822; jpn[00] := 1475; uk[00] := 5320; us[00] := 8680;

    can[01] := 6385; fra[01] := 4280; ger[01] := 3673; ita[01] := 3023; jpn[01] := 1649; uk[01] := 5484; us[01] := 9132;

    can[02] := 6752; fra[02] := 4459; ger[02] := 4013; ita[02] := 3131; jpn[02] := 1787; uk[02] := 5517; us[02] := 9213;

    can[03] := 6837; fra[03] := 4545; ger[03] := 4278; ita[03] := 3351; jpn[03] := 1884; uk[03] := 5791; us[03] := 9450;

    can[04] := 6495; fra[04] := 4664; ger[04] := 4577; ita[04] := 3463; jpn[04] := 1972; uk[04] := 5971; us[04] := 9177;

    can[05] := 6907; fra[05] := 4861; ger[05] := 5135; ita[05] := 3686; jpn[05] := 2108; uk[05] := 6158; us[05] := 9756;

    can[06] := 7349; fra[06] := 5195; ger[06] := 5388; ita[06] := 3815; jpn[06] := 2249; uk[06] := 6238; us[06] := 9756;

    can[07] := 7213; fra[07] := 5389; ger[07] := 5610; ita[07] := 3960; jpn[07] := 2394; uk[07] := 6322; us[07] := 9724;

    can[08] := 7061; fra[08] := 5463; ger[08] := 5787; ita[08] := 4119; jpn[08] := 2505; uk[08] := 6340; us[08] := 9476;

    can[09] := 7180; fra[09] := 5610; ger[09] := 6181; ita[09] := 4351; jpn[09] := 2714; uk[09] := 6569; us[09] := 9913;

    can[10] := 7132; fra[10] := 5948; ger[10] := 6633; ita[10] := 4641; jpn[10] := 3052; uk[10] := 6813; us[10] := 9974;

    can[11] := 7137; fra[11] := 6218; ger[11] := 6910; ita[11] := 5008; jpn[11] := 3453; uk[11] := 6974; us[11] := 10046;

    can[12] := 7473; fra[12] := 6521; ger[12] := 7146; ita[12] := 5305; jpn[12] := 3666; uk[12] := 6994; us[12] := 10467;

    can[13] := 7722; fra[13] := 6788; ger[13] := 7248; ita[13] := 5611; jpn[13] := 4008; uk[13] := 7220; us[13] := 10740;

    can[14] := 8088; fra[14] := 7222; ger[14] := 7689; ita[14] := 5693; jpn[14] := 4486; uk[14] := 7570; us[14] := 11157;

    can[15] := 8516; fra[15] := 7486; ger[15] := 8046; ita[15] := 5804; jpn[15] := 4663; uk[15] := 7686; us[15] := 11738;

    can[16] := 8941; fra[16] := 7832; ger[16] := 8143; ita[16] := 6121; jpn[16] := 5115; uk[16] := 7811; us[16] := 12274;

    can[17] := 9064; fra[17] := 8153; ger[17] := 8064; ita[17] := 6546; jpn[17] := 5655; uk[17] := 8012; us[17] := 12450;

    can[18] := 9380; fra[18] := 8468; ger[18] := 8556; ita[18] := 6918; jpn[18] := 6358; uk[18] := 8265; us[18] := 12874;


    // период расчета

    simeq.ModelPeriod.FirstPoint := 1;

    simeq.ModelPeriod.LastPoint := 20;

    // метод обработки пропусков

    simeq.MissingData.Method := MissingDataMethod.LinTrend;

    // метод оценивания для систем одновременных уравнений

    simeq.SimultaneousSystemMethod := SimultaneousSystemMode.General;

    // использование константы в качестве инструментальной переменной

    simeq.UseConstantAsInstrument := True;

    eqs := simeq.Equations;

    // ПЕРВОЕ УРАВНЕНИЕ

    eq := eqs.Add;

    // параметры зависимой переменной в модели

    eq.DependentVariable.Value := can;

    // параметры эндогенных переменных в уравнении

    eq.EndogenousVariables.Add.Value := fra;

    eq.EndogenousVariables.Add.Value := ger;

    // параметры экзогенных переменных в уравнении

    eq.ExogenousVariables.Add.Value := us;

    eq.ExogenousVariables.Add.Value := uk;

    // параметры константы для уравнения

    eq.Intercept.Mode := InterceptMode.AutoEstimate;


    // ВТОРОЕ УРАВНЕНИЕ

    eq := eqs.Add;

    eq.DependentVariable.Value := fra;

    eq.EndogenousVariables.Add.Value := ger;

    eq.EndogenousVariables.Add.Value := ita;

    eq.ExogenousVariables.Add.Value := jpn;

    eq.ExogenousVariables.Add.Value := us;

    // стековые интрументальные переменные

    eq.SpecificInstrumental.Add.Value := us;

    // максимальное число итераций

    simeq.MaxIteration := 250;

    // точность решения

    simeq.Tolerance := 0.0001;

    // расчет модели и вывод результатов

    res := simeq.Execute;

    Debug.WriteLine(simeq.Errors);

    Debug.WriteLine("Первое уравнение");

    Debug.Indent;

    Debug.WriteLine("Оценка коэффициентов уравнения");

    Debug.WriteLine("Константа: " + eqs.Item(0).Intercept.Estimate.ToString + " " +

        eqs.Item(0).Intercept.StandardError.ToString + " " +

        eqs.Item(0).Intercept.TStatistic.ToString + " " +

        eqs.Item(0).Intercept.Probability.ToString);

    Debug.WriteLine("Эндогенные коэффициенты:");

    For i := 0 To eqs.Item(0).EndogenousCoefficients.Estimate.Length - 1 Do

        Debug.WriteLine("X " + (i + 1).ToString + ": " +

            eqs.Item(0).EndogenousCoefficients.Estimate[i].ToString + " " +

            eqs.Item(0).EndogenousCoefficients.StandardError[i].ToString + " " +

            eqs.Item(0).EndogenousCoefficients.TStatistic[i].ToString + " " +

            eqs.Item(0).EndogenousCoefficients.Probability[i].ToString);

    End For;


    Debug.WriteLine("Экзогенные коэффициенты:");

    For i := 0 To eqs.Item(0).ExogenousCoefficients.Estimate.Length - 1 Do

        Debug.WriteLine("Z " + (i + 1).ToString + ": " +

            eqs.Item(0).ExogenousCoefficients.Estimate[i].ToString + " " +

            eqs.Item(0).ExogenousCoefficients.StandardError[i].ToString + " " +

            eqs.Item(0).ExogenousCoefficients.TStatistic[i].ToString + " " +

            eqs.Item(0).ExogenousCoefficients.Probability[i].ToString);

    End For;

    Debug.WriteLine("Модельный ряд:");

    For i := 0 To eqs.Item(0).Fitted.Length - 1 Do

        Debug.Write(i.ToString + " ");

        Debug.WriteLine(eqs.Item(0).Fitted[i]);

    End For;

    Debug.WriteLine("Ряд остатков:");

    For j := 0 To simeq.ModelPeriod.LastPoint - 1 Do

        Debug.Write(j.ToString + " ");

        Debug.WriteLine(eqs.Item(0).Residuals[j]);

    End For;

    Debug.Unindent;

    Debug.WriteLine("Второе уравнение");

    Debug.Indent;

    Debug.WriteLine("Оценка коэффициентов уравнения");

    Debug.WriteLine("Константа: " + eqs.Item(1).Intercept.Estimate.ToString + " " +

        eqs.Item(1).Intercept.StandardError.ToString + " " +

        eqs.Item(1).Intercept.TStatistic.ToString + " " +

        eqs.Item(1).Intercept.Probability.ToString);

    Debug.WriteLine("Эндогенные коэффициенты:");

    For i := 0 To eqs.Item(1).EndogenousCoefficients.Estimate.Length - 1 Do

        Debug.WriteLine("X" + (i + 1).ToString + ": " +

            eqs.Item(1).EndogenousCoefficients.Estimate[i].ToString + " " +

            eqs.Item(1).EndogenousCoefficients.StandardError[i].ToString + " " +

            eqs.Item(1).EndogenousCoefficients.TStatistic[i].ToString + " " +

            eqs.Item(1).EndogenousCoefficients.Probability[i].ToString);

    End For;


    Debug.WriteLine("Экзогенные коэффициенты:");

    For i := 0 To eqs.Item(1).ExogenousCoefficients.Estimate.Length - 1 Do

        Debug.WriteLine("Z" + (i + 1).ToString + ": " +

            eqs.Item(1).ExogenousCoefficients.Estimate[i].ToString + " " +

            eqs.Item(1).ExogenousCoefficients.StandardError[i].ToString + " " +

            eqs.Item(1).ExogenousCoefficients.TStatistic[i].ToString + " " +

            eqs.Item(1).ExogenousCoefficients.Probability[i].ToString);

    End For;

    Debug.WriteLine("Модельный ряд:");

    For i := 0 To simeq.ModelPeriod.LastPoint - 1 Do

        Debug.Write(i.ToString + " ");

        Debug.WriteLine(eqs.Item(1).Fitted[i]);

    End For;

    Debug.WriteLine("Ряд остатков:");

    For j := 0 To simeq.ModelPeriod.LastPoint - 1 Do

        Debug.Write(j.ToString + " ");

        Debug.WriteLine(eqs.Item(1).Residuals[j]);

    End For;

    Debug.Unindent;

    Debug.WriteLine("Статистические характеристики");

    Debug.WriteLine("Первое уравнение");

    Debug.Indent;

    Debug.WriteLine("Критерий Акаике: " + eqs.Item(0).SummaryStatistics.AIC.ToString);

    Debug.WriteLine("Статистика Дарбина-Уотсона: " + eqs.Item(0).SummaryStatistics.DW.ToString);

    Debug.Unindent;

    Debug.WriteLine("Второе уравнение");

    Debug.Indent;

    Debug.WriteLine("Критерий Акаике: " + eqs.Item(1).SummaryStatistics.AIC.ToString);

    Debug.WriteLine("Статистика Дарбина-Уотсона: " + eqs.Item(1).SummaryStatistics.DW.ToString);

    Debug.Unindent;

End Sub UserProc;


После выполнения примера в окно консоли будут выведены статистические
 характеристики, эндогенные и экзогенные коэффициенты уравнений, модельные
 ряды и ряды остатков для обоих уравнений.


См. также:


[ISlSimultaneousEquation](ISlSimultaneousEquation.htm) | [SimultaneousSystemMode](../../Enums/SimultaneousSystemMode.htm)


		Справочная
		 система на версию ERROR: Variable (Version_lts) is undefined.
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
