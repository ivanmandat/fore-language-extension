# IJohansenTestEquation.ExogenousVariables

IJohansenTestEquation.ExogenousVariables
-


# IJohansenTestEquation.ExogenousVariables


## Синтаксис


ExogenousVariables: [ISlSeries](../ISlSeries/ISlSeries.htm);


## Описание


Свойство ExogenousVariables
 определяет экзогенные переменные.


## Пример


Для выполнения примера добавьте ссылку на системную сборку Stat.


			Sub UserProc;

Var

    Dl,Rl,D,Exg: Array[17] Of Double;

    i,res: Integer;

    d0,d1,d2,d3: Double;

    Jtest: SmJohansenTest;

    Eqs: IJohansenTestEquations;

    Eq: IJohansenTestEquation;

    ARO: Array[1] Of Integer;

Begin

    //значения Exg, Dl, Rl, D

    Dl[00] := -9999.99; Rl[00] := -9999.99; D[00] := -9999.99; Exg[00] := 4.276666119;

    Dl[01] := -0.011060947; Rl[01] := -9999.99; D[01] := -9999.99; Exg[01] := 4.364371699;

    Dl[02] := 0.088021988; Rl[02] := -9999.99; D[02] := -9999.99; Exg[02] := 4.49980967;

    Dl[03] := 0.001850139; Rl[03] := -9999.99; D[03] := -9999.99; Exg[03] := 4.581901559;

    Dl[04] := -0.174221365; Rl[04] := 0.104287003; D[04] := -9999.99; Exg[04] := 4.041295341;

    Dl[05] := 0.027131344; Rl[05] := 0.026467205; D[05] := -0.01; Exg[05] := 4.182050143;

    Dl[06] := 0.054179916; Rl[06] := 0.047706589; D[06] := 0.25; Exg[06] := 4.403054002;

    Dl[07] := 0.057158414; Rl[07] := 0.01704113; D[07] := 0.13; Exg[07] := 4.578826211;

    Dl[08] := -0.092249734; Rl[08] := -0.105077669; D[08] := 0.02; Exg[08] := 3.931825633;

    Dl[09] := -0.006322466; Rl[09] := -0.110288178; D[09] := -0.01; Exg[09] := 3.988984047;

    Dl[10] := 0.027113235; Rl[10] := -0.011793876; D[10] := -0.06; Exg[10] := 4.165113633;

    Dl[11] := 0.057958277; Rl[11] := 0.031454854; D[11] := 0.04; Exg[11] := 4.369447852;

    Dl[12] := -0.048741622; Rl[12] := -0.032034153; D[12] := 0.05; Exg[12] := 3.772760938;

    Dl[13] := -0.00306279; Rl[13] := -0.053657954; D[13] := -0.01; Exg[13] := 3.929862924;

    Dl[14] := 0.03120535; Rl[14] := -0.025958191; D[14] := 0.015; Exg[14] := 4.157319361;

    Dl[15] := 0.104368944; Rl[15] := 0.074380868; D[15] := 0.025; Exg[15] := 4.380775853;

    Dl[16] := -0.135574294; Rl[16] := -0.064428893; D[16] := 0.02; Exg[16] := 3.716008122;

    ARO[0] := 1;

    Jtest := New SmJohansenTest.Create;

    Eqs := Jtest.Equations;

    Eq := Eqs.Add;

    Eq.Serie.Value := Dl;

    Eq.AutoRegressionOrder := ARO;

    Eq.ExogenousVariables.Add.Value := Exg;

    Eq := Eqs.Add;

    Eq.Serie.Value := Rl;

    Eq.AutoRegressionOrder := ARO;

    Eq.ExogenousVariables.Add.Value := Exg;

    Eq := Eqs.Add;

    Eq.Serie.Value := D;

    Eq.AutoRegressionOrder := ARO;

    Jtest.ModelPeriod.FirstPoint := 1;

    Jtest.ModelPeriod.LastPoint := 17;

    Jtest.ModelType := ECMType.NoTrendNoIntercept;

    res := Jtest.Execute;

    If res <> 0 Then

        Debug.WriteLine(Jtest.Errors);

    Else

        Debug.WriteLine(" Собств. знач. LikelihoodRatio 5% крит. значение 1% крит. значение ");

        For i := 0 To Jtest.Equations.Count-1 Do

            Eq := Jtest.Equations.Item(i);

            Debug.Write("Связи " + i.ToString + ": ");

            d0 := Eq.Report.EigenValue;

            d1 := Eq.Report.LikelihoodRatio;

            d2 := Eq.Report.OnePercentCriticalValue;

            d3 := Eq.Report.FivePercentCriticalValue;

            Debug.WriteLine(" " + d0.ToString + ", " + d1.ToString + ", " + d2.ToString +", " + d3.ToString );

        End For;

    End If;

End Sub USerProc;


После выполнения примера в окно консоли будут выведены результаты расчета
 теста:


Выполнение модуля начато


 Собств. знач. LikelihoodRatio 5%
 крит. значение 1% крит. значение


Связи 0:  0.829402742153985, 38.5239292631921,
 29.51, 24.28


Связи 1:  0.476343429487221, 11.9971834985773,
 16.36, 12.32


Связи 2:  0.141778473928177, 2.29339535886439,
 6.94, 4.13


Выполнение модуля завершено


См. также:


[IJohansenTestEquation](IJohansenTestEquation.htm)


		Справочная
		 система на версию ERROR: Variable (Version_lts) is undefined.
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
