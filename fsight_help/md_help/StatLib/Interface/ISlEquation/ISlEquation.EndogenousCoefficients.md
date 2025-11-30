# ISlEquation.EndogenousCoefficients

ISlEquation.EndogenousCoefficients
-


# ISlEquation.EndogenousCoefficients


## Синтаксис


EndogenousCoefficients: [ICoefficients](../ICoefficients/ICoefficients.htm);


## Описание


Свойство EndogenousCoefficients
 возвращает коэффициенты эндогенных переменных.


## Пример


Для выполнения примера добавьте ссылку на системную сборку Stat.


	Sub UserProc;

	Var

	    y1, y2, x: Array[43] Of Double;

	    i, j, k, status: Integer;

	    d: Double;

	    VarModel: ISmVectorAutoRegress;

	    Eqs: ISlEquations;

	    Eq: ISlEquation;

	    ARO: Array[2] Of Integer;

	Begin

	    // Значения массивов y1, y2 и x

	    y1[00] := 6209; y2[00] := 4110; x[00] := 3415;

	    y1[01] := 6385; y2[01] := 4280; x[01] := 3673;

	    y1[02] := 6752; y2[02] := 4459; x[02] := 4013;

	    y1[03] := 6837; y2[03] := 4545; x[03] := 4278;

	    y1[04] := 6495; y2[04] := 4664; x[04] := 4577;

	    y1[05] := 6907; y2[05] := 4861; x[05] := 5135;

	    y1[06] := 7349; y2[06] := 5195; x[06] := 5388;

	    y1[07] := 7213; y2[07] := 5389; x[07] := 5610;

	    y1[08] := 7061; y2[08] := 5463; x[08] := 5787;

	    y1[09] := 7180; y2[09] := 5610; x[09] := 6181;

	    y1[10] := 7132; y2[10] := 5948; x[10] := 6633;

	    y1[11] := 7137; y2[11] := 6218; x[11] := 6910;

	    y1[12] := 7473; y2[12] := 6521; x[12] := 7146;

	    y1[13] := 7722; y2[13] := 6788; x[13] := 7248;

	    y1[14] := 8088; y2[14] := 7222; x[14] := 7689;

	    y1[15] := 8516; y2[15] := 7486; x[15] := 8046;

	    y1[16] := 8941; y2[16] := 7832; x[16] := 8143;

	    y1[17] := 9064; y2[17] := 8153; x[17] := 8064;

	    y1[18] := 9380; y2[18] := 8468; x[18] := 8556;


	    y1[19] := 9746; y2[19] := 9054; x[19] := 9177;

	    y1[20] := 9907; y2[20] := 9499; x[20] := 9705;

	    y1[21] := 10333; y2[21] := 9866; x[21] := 9923;

	    y1[22] := 10863; y2[22] := 10217; x[22] := 10268;

	    y1[23] := 11693; y2[23] := 10763; x[23] := 10681;

	    y1[24] := 12242; y2[24] := 10683; x[24] := 10448;

	    y1[25] := 12227; y2[25] := 10494; x[25] := 10366;

	    y1[26] := 12910; y2[26] := 10938; x[26] := 10958;

	    y1[27] := 13049; y2[27] := 11198; x[27] := 11292;

	    y1[28] := 13384; y2[28] := 11546; x[28] := 11726;

	    y1[29] := 14036; y2[29] := 11865; x[29] := 12172;

	    y1[30] := 14242; y2[30] := 11781; x[30] := 12058;

	    y1[31] := 14704; y2[31] := 11681; x[31] := 11804;

	    y1[32] := 13802; y2[32] := 11903; x[32] := 11682;

	    y1[33] := 14197; y2[33] := 11900; x[33] := 12001;

	    y1[34] := 15010; y2[34] := 11986; x[34] := 12300;

	    y1[35] := 15589; y2[35] := 12206; x[35] := 12535;

	    y1[36] := 15932; y2[36] := 12734; x[36] := 13173;

	    y1[37] := 16631; y2[37] := 12990; x[37] := 13482;

	    y1[38] := 17394; y2[38] := 13516; x[38] := 13945;

	    y1[39] := 17758; y2[39] := 13866; x[39] := 14278;

	    y1[40] := 17308; y2[40] := 14141; x[40] := 14840;

	    y1[41] := 16444; y2[41] := 14141; x[41] := 15263;

	    y1[42] := 16413; y2[42] := 14237; x[42] := 15357;

	    ARO[0] := 1;

	    ARO[1] := 2;


	    VarModel := New SmVectorAutoRegress.Create;

	    Eqs := VarModel.Equations;

	    Eq := Eqs.Add;

	    Eq.Serie.Value := y1;

	    Eq.AutoRegressionOrder := ARO;

	    Eq.Forecast.LastPoint := 43;

	    Eq.Intercept.Mode := InterceptMode.AutoEstimate;

	    Eq.ExogenousVariables.Add.Value := x;

	    Eq := Eqs.Add;

	    Eq.Serie.Value := y2;

	    Eq.AutoRegressionOrder := ARO;

	    Eq.Forecast.LastPoint := 43;

	    Eq.Intercept.Mode := InterceptMode.AutoEstimate;

	    Eq.ExogenousVariables.Add.Value := x;

	    VarModel.ModelPeriod.FirstPoint := 1;

	    VarModel.ModelPeriod.LastPoint := 40;

	    status := VarModel.Execute;


	    If status <> 0 Then

	        Debug.WriteLine(VarModel.Errors);

	    Else

	        For i := 0 To VarModel.Equations.Count-1 Do//по уравнениям

	            Debug.Write(i.ToString + ": ");

	            For j := 0 To VarModel.Equations.Item(i).AutoRegressionOrder.Length-1 Do//по лагам

	                For k := 0 To VarModel.Equations.Count-1 Do//по переменным

	                    d := VarModel.Equations.Item(i).EndogenousCoefficients.Estimate[j+k*VarModel.Equations.Count];

	                    Debug.Write(d.ToString + ", ");

	                End For;

	            End For;

	            Debug.WriteLine(" ");

	        End For;

	    End If;

	End Sub UserProc;


После выполнения примера в окно консоли будут выведены коэффициенты
 эндогенных переменных для каждого имеющегося уравнения векторной авторегрессии:


Выполнение модуля начато


0: 0.8999376820101, 0.0643681913561947, 0.0149082213049337,
 -0.128275457572588,


1: 0.0642911453969478, 0.703887699096533, -0.0957408988348485,
 -0.0162800712325337,


Выполнение модуля завершено


См. также:


[ISlEquation](ISlEquation.htm)


		Справочная
		 система на версию ERROR: Variable (Version_lts) is undefined.
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
