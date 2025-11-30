# ISmLinearRegress.AutoSelection

ISmLinearRegress.AutoSelection
-


# ISmLinearRegress.AutoSelection


## Синтаксис


AutoSelection: [ILinearRegressionAutoSelection](../ILinearRegressionAutoSelection/ILinearRegressionAutoSelection.htm);


## Описание


Свойство AutoSelection определяет
 параметры автоподбора регрессоров.


## Пример


Добавьте ссылку на системную сборку Stat.


	Sub AutoSel;

	Var

	    LR: ISmLinearRegress;

	    res,i , Inc: Integer;

	    y, x1, x2, x3: Array Of Double;

	    ASel: ILinearRegressionAutoSelection;

	Begin

	    LR := New SmLinearRegress.Create;

	    y := New Double[21];

	    x1 := New Double[21];

	    x2 := New Double[21];

	    x3 := New Double[21];

	    // Значения рядов y, x1, x2, x3

	    y[00] := 0.401; x1[00] := -9999.99;

	    y[01] := 0.225; x1[01] := 0.137142857;

	    y[02] := 0.191; x1[02] := 0.306532663;

	    y[03] := 0.534; x1[03] := 0.365384615;

	    y[04] := 0.428; x1[04] := 0.38028169;

	    y[05] := 0.249; x1[05] := -0.073469388;

	    y[06] := 0.152; x1[06] := -0.00660793;

	    y[07] := 0.13; x1[07] := 0.028824834;

	    y[08] := 0.1; x1[08] := 0.045258621;

	    y[09] := 0.051; x1[09] := 0.053608247;

	    y[10] := 0.008; x1[10] := 0.056751468;

	    y[11] := 0.046; x1[11] := 0.02962963;

	    y[12] := 0.053; x1[12] := 0.03057554;


	    y[13] := 0.03; x1[13] := 0.008726003;

	    y[14] := 0.005; x1[14] := 0.01384083;

	    y[15] := 0.018; x1[15] := 0.017064846;

	    y[16] := 0.03; x1[16] := 0.025167785;

	    y[17] := 0.01; x1[17] := 0.014729951;

	    y[18] := 0.438; x1[18] := 1.591935484;

	    y[19] := 0.233; x1[19] := 0.285003111;

	    y[20] := 0.16; x1[20] := 0.17094431;

	    x2[00] := 0.6; x3[00] := -9999.99;

	    x2[01] := 0.43; x3[01] := 0.503916449;

	    x2[02] := 0.32; x3[02] := 0.296875;

	    x2[03] := 0.11; x3[03] := 0.269076305;

	    x2[04] := 0.41; x3[04] := 0.097046414;

	    x2[05] := 0.52; x3[05] := 0.458653846;

	    x2[06] := 0.34; x3[06] := 0.147659855;

	    x2[07] := 0.03; x3[07] := 0.22860425;

	    x2[08] := 0.1; x3[08] := 0.095371669;

	    x2[09] := 0.05; x3[09] := 0.103713188;

	    x2[10] := 0.14; x3[10] := 0.034029389;

	    x2[11] := 0.03; x3[11] := 0.07816006;

	    x2[12] := 0.05; x3[12] := 0.060700659;

	    x2[13] := 0.02; x3[13] := 0.151079137;

	    x2[14] := -0.017; x3[14] := 0.03125;


	    x2[15] := 0.01; x3[15] := 0.030578512;

	    x2[16] := 0.03; x3[16] := -0.036621224;

	    x2[17] := 0.008; x3[17] := 0.022752497;

	    x2[18] := -0.011; x3[18] := -0.00759631;

	    x2[19] := -0.005; x3[19] := 0.225533078;

	    x2[20] := 0.053; x3[20] := 0.056881553;

	    // Задаем объясняемый и объясняющие ряды

	    LR.Explained.Value := y;

	    LR.Explanatories.Add.Value := x1;

	    LR.Explanatories.Add.Value := x2;

	    LR.Explanatories.Add.Value := x3;

	    // Задаем параметры периода идентификации

	    LR.ModelPeriod.FirstPoint := 1;

	    LR.ModelPeriod.LastPoint := 21;

	    // Исключаем константу из расчётов

	    LR.ModelCoefficients.Intercept.Mode := InterceptMode.None;

	    LR.MissingData.Method := MissingDataMethod.Casewise;


	    // Задаем параметры автоподбора регрессоров

	    ASel := LR.AutoSelection;

	    ASel.IsActive := True;

	    ASel.Min := 1;

	    ASel.Max := 2;

	    ASel.Criterion := CriterionType.R2adj;

	    // Выполняем расчёт и выводим результаты

	    res := LR.Execute;

	    If res <> 0 Then

	        Debug.WriteLine("Ошибки " + LR.Errors);

	    Else

	        For i := 0 To LR.Explanatories.Count-1 Do

	            Inc := ASel.Results[i];

	            Debug.WriteLine(i.ToString + ": " + Inc.ToString);

	        End For;

	    End If;

	End Sub AutoSel;


После выполнения примера в окно консоли будет выведен вектор, содержащий
 результат автоподбора:


Выполнение модуля начато


0: 0


1: 1


2: 0


Выполнение модуля завершено


См. также:


[ISmLinearRegress](ISmLinearRegress.htm)


		Справочная
		 система на версию ERROR: Variable (Version_lts) is undefined.
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
