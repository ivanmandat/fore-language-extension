# ISlMovingAverage.MaxIteration

ISlMovingAverage.MaxIteration
-


# ISlMovingAverage.MaxIteration


## Синтаксис


MaxIteration: Integer;


## Описание


Свойство MaxIteration определяет максимальное число итераций для оценки коэффициентов скользящего среднего.


## Комментарии


По умолчанию свойство имеет значение «50».


## Пример


Sub Main;


Var


Method: SmLinearRegress;


Factors: ISlSeries;


status: Integer;


Serie, Factor: Array Of Double;


AutoRegression: Array Of Integer;


MovingAverage: ISlMovingAverage;


Sub Print(Data: Array Of Double);


Var


i: Integer;


d: Double;


Begin


Debug.WriteLine("---Begin---");


For i := 0 To Data.Length - 1 Do


If Double.IsNan(Data[i]) Then


Debug.WriteLine(i.ToString + ", ---empty---");


Else


d := Data[i];


Debug.WriteLine(i.ToString + ", " + d.ToString);


End If;


End For;


Debug.WriteLine("---End---");


End Sub Print;


Begin


Method := New SmLinearRegress.Create;


Serie := New Double[20];


Serie[00] := 6209;


Serie[01] := 6385;


Serie[02] := 6752;


Serie[03] := 6837;


Serie[04] := 6495;


Serie[05] := 6907;


Serie[06] := 7349;


Serie[07] := 7213;


Serie[08] := 7061;


Serie[09] := 7180;


Serie[10] := 7132;


Serie[11] := 7137;


Serie[12] := 7473;


Serie[13] := 7722;


Serie[14] := 8088;


Serie[15] := 8516;


Serie[16] := 8941;


Serie[17] := 9064;


Serie[18] := 9380;


Serie[19] := 9746;


Method.Explained.Value := Serie;


Factor := New Double[30];


Factor[00] := 4110;


Factor[01] := 4280;


Factor[02] := 4459;


Factor[03] := 4545;


Factor[04] := 4664;


Factor[05] := 4861;


Factor[06] := 5195;


Factor[07] := 5389;


Factor[08] := 5463;


Factor[09] := 5610;


Factor[10] := 5948;


Factor[11] := 6218;


Factor[12] := 6521;


Factor[13] := 6788;


Factor[14] := 7222;


Factor[15] := 7486;


Factor[16] := 7832;


Factor[17] := 8153;


Factor[18] := 8468;


Factor[19] := 9054;


Factor[20] := 9907;


Factor[21] := 10333;


Factor[22] := 10863;


Factor[23] := 11693;


Factor[24] := 12242;


Factor[25] := 12227;


Factor[26] := 12910;


Factor[27] := 13049;


Factor[28] := 13384;


Factor[29] := 14036;


Factors := Method.Explanatories;


Factors.Add.Value := Factor;


AutoRegression := New Integer[1];


AutoRegression[0] := 1;


Method.AutoRegressionOrder := AutoRegression;


MovingAverage := Method.MovingAverage;


MovingAverage.Order := 3;


MovingAverage.Epsilon := 0.5;


MovingAverage.Backcast := False;


MovingAverage.MaxIteration := 125;


Method.ModelPeriod.LastPoint := 20;


Method.Forecast.LastPoint := 30;


status := Method.Execute;


If status <> 0 Then


Debug.WriteLine(Method.Errors);


Else


Debug.WriteLine("=== Коэффициенты скользящего среднего ===");


Print(MovingAverage.Coefficients.Estimate);


Debug.WriteLine("=== Модельный ряд ===");


Print(Method.Fitted);


End If;


End Sub Main;


После выполнения примера в окно консоли будет выведен следующий результат:


Module execution started


=== Коэффициенты скользящего среднего ===


---Begin---


0, 0.78455897594941071


1, 0.025847960527559839


2, 0.86636257956345453


---End---


=== Модельный ряд ===


---Begin---


0, ---empty---


1, ---empty---


2, 6489.5899112585475


3, 6882.7982991546951


4, 6973.8683617464467


5, 6607.4452863772858


6, 7048.8672368220059


7, 7522.4315622991089


8, 7376.7194621523076


9, 7213.8647619882358


10, 7341.3628496166866


11, 7289.935049564875


12, 7295.2921120702722


13, 7655.2867124329559


14, 7922.0684252017318


15, 8314.2054005967984


16, 8772.76995105879


17, 9228.1202640175416


18, 9359.9040016503095


19, 9698.4703519914056


---End---


Module execution finished


См. также:


[ISlMovingAverage](ISlMovingAverage.htm)


		Справочная
		 система на версию ERROR: Variable (Version_lts) is undefined.
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
