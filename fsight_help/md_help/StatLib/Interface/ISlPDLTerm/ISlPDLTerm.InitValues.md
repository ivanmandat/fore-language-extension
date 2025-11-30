# ISlPDLTerm.InitValues

ISlPDLTerm.InitValues
-


# ISlPDLTerm.InitValues


## Синтаксис


InitValues: Array;


## Описание


Свойство InitValues определяет
 начальные приближения лаговой переменной.


## Комментарии


Для получения коэффициентов лаговой переменной используйте свойство
 [ISlPDLTerm.BetaCoefficients](ISlPDLTerm.BetaCoefficients.htm).


## Пример


Для выполнения примера добавьте ссылку на системную сборку Stat.


	Sub UserProc;

	Var

	    Method: SmLinearRegress;

	    Factors: ISlSeries;

	    Serie, Factor, ger, jpn: Array[20] Of Double;

	    arr: array Of Double;

	    PDLTermCollect: ISlPDLTermCollection;

	    PDLTerm: ISlPDLTerm;

	    BetaCoef: ICoefficients;

	    res, i: Integer;

	Begin

	    Method := New SmLinearRegress.Create;

	    // объясняемая переменная

	    Serie[00] := 6209; Serie[10] := 7132;

	    Serie[01] := 6385; Serie[11] := 7137;

	    Serie[02] := 6752; Serie[12] := 7473;

	    Serie[03] := 6837; Serie[13] := 7722;

	    Serie[04] := 6495; Serie[14] := 8088;

	    Serie[05] := 6907; Serie[15] := 7022;

	    Serie[06] := 7349; Serie[16] := 8282;

	    Serie[07] := 7213; Serie[17] := 9064;

	    Serie[08] := 7061; Serie[18] := 9380;

	    Serie[09] := 7180; Serie[19] := 9746;

	    // объясняющая переменная


	    Factor[00] := 4110; Factor[10] := 5948;

	    Factor[01] := 4280; Factor[11] := 6218;

	    Factor[02] := 4459; Factor[12] := 6521;

	    Factor[03] := 4545; Factor[13] := 6788;

	    Factor[04] := 4664; Factor[14] := 7222;

	    Factor[05] := 4861; Factor[15] := 7486;

	    Factor[06] := 5195; Factor[16] := 7832;

	    Factor[07] := 5389; Factor[17] := 8153;

	    Factor[08] := 5463; Factor[18] := 8468;

	    Factor[09] := 5610; Factor[19] := 9054;

	    // первая лаговая переменная


	    ger[00] := 3415; ger[10] := 6633;

	    ger[01] := 3673; ger[11] := 6910;

	    ger[02] := 4013; ger[12] := 7146;

	    ger[03] := 4278; ger[13] := 7248;

	    ger[04] := 4577; ger[14] := 7689;

	    ger[05] := 5135; ger[15] := 8046;

	    ger[06] := 5388; ger[16] := 8143;

	    ger[07] := 5610; ger[17] := 8064;

	    ger[08] := 5787; ger[18] := 8556;

	    ger[09] := 6181; ger[19] := 9177;

	    // вторая лаговая переменная


	    jpn[00] := 1475; jpn[10] := 3052;

	    jpn[01] := 1649; jpn[11] := 3453;

	    jpn[02] := 1787; jpn[12] := 3666;

	    jpn[03] := 1884; jpn[13] := 4008;

	    jpn[04] := 1972; jpn[14] := 4486;

	    jpn[05] := 2108; jpn[15] := 4663;

	    jpn[06] := 2249; jpn[16] := 5115;

	    jpn[07] := 2394; jpn[17] := 5655;

	    jpn[08] := 2505; jpn[18] := 6358;

	    jpn[09] := 2714; jpn[19] := 6995;


	    // задаем объясняемую и объясняющую переменные

	    Method.Explained.Value := Serie;

	    Factors := Method.Explanatories;

	    Factors.Add.Value := Factor;

	    // задаем параметры регрессии

	    Method.ModelPeriod.FirstPoint := 1;

	    Method.ModelPeriod.LastPoint := 20;

	    // задаем последнюю точку прогноза

	    Method.Forecast.LastPoint := 30;

	    // задаем лаговые переменные

	    PDLTermCollect := Method.PDLTermCollection;

	    If PDLTermCollect.Count > 0 Then

	        PDLTermCollect.Clear;

	    End If;


	    // задаем параметры 1-й лаговой переменной

	    PDLTerm := PDLTermCollect.Add;

	    PDLTerm.Explanatory.Value := ger;

	    PDLTerm.Explanatory.Include := True;

	    PDLTerm.PDLConstraint := PDLConstraintType.Both;

	    PDLTerm.PolinomialDegreeP := 4;

	    PDLTerm.LagLengthK := 1;

	    arr:=New Double[PDLTerm.LagLengthK+1];

	    For i:=0 To arr.Length-1 Do

	        arr[i]:=0.5-i*0.1;

	    End For;

	    PDLTerm.InitValues := arr;

	    // задаем параметры 2-й лаговой переменной

	    PDLTerm := PDLTermCollect.Add;

	    PDLTerm.Explanatory.Value := jpn;

	    PDLTerm.PDLConstraint := PDLConstraintType.FarEnd;

	    PDLTerm.PolinomialDegreeP := 2;

	    PDLTerm.LagLengthK := 2;


	    // Параметры автоподбора

	    Method.AutoSelection.IsActive := True;

	    Method.AutoSelection.Min := 1;

	    Method.AutoSelection.Max := 2;

	    // расчет модели

	    res := Method.Execute;

	    // рассчитываем метод с лаговыми переменными, выводим результаты

	    BetaCoef := PDLTerm.BetaCoefficients;

	    Debug.WriteLine("=== Значение коэффициентов 1-й лаговой переменной  ===");

	    PDLTerm := PDLTermCollect.Item(0);

	    For i := 0 To BetaCoef.Estimate.Length-1 Do

	        Debug.WriteLine((i+1).ToString + " " + BetaCoef.Estimate[i].ToString);

	    End For;

	    Debug.WriteLine("=== Значение коэффициентов 2-й лаговой переменной  ===");

	    PDLTerm := PDLTermCollect.Item(1);

	    For i := 0 To BetaCoef.Estimate.Length-1 Do

	        Debug.WriteLine((i+1).ToString + " " + BetaCoef.Estimate[i].ToString);

	    End For;

	End Sub UserProc;


В результате выполнения примера в окно консоли будут выведены значения
 коэффициентов первой и второй лаговых переменных.


См. также:


[ISlPDLTerm](ISlPDLTerm.htm)


		Справочная
		 система на версию ERROR: Variable (Version_lts) is undefined.
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
