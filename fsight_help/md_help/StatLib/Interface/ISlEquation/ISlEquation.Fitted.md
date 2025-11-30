# ISlEquation.Fitted

ISlEquation.Fitted
-


# ISlEquation.Fitted


## Синтаксис


Fitted: Array;


## Описание


Свойство Fitted возвращает массив
 значений модельного ряда.


## Комментарии


Значения доступны после расчёта метода.


## Пример


Добавьте ссылку на системную сборку Stat.


					Sub Print(Data: Array Of Double);

		Var

		    i: Integer;

		    d: Double;

		Begin

		    For i := 0 To Data.Length - 1 Do

		        If Double.IsNan(Data[i]) Then

		            Debug.WriteLine(i.ToString + ", ---empty---");

		            Else

		                d := Data[i];

		                Debug.WriteLine(i.ToString + ", " + d.ToString);

		        End If;

		    End For;

		End Sub Print;


		Sub UserProc;

		Var

		    ar1, ar2: Array[0..15] Of Double;

		    j, res: Integer;

		    vars: ISmVectorAutoRegress;

		    Eqs: ISlEquations;

		    Eq: ISlEquation;

		    ARO: Array[0..0] Of Integer;

		Begin

		    vars := New SmVectorAutoRegress.Create;

		    // Задаем значения переменных

		    ar1[0] := 3; ar2[0] := 5;

		    ar1[1] := 8; ar2[1] := 3;

		    ar1[2] := 12; ar2[2] := 9;

		    ar1[3] := 10; ar2[3] := 13;

		    ar1[4] := 26; ar2[4] := 25;

		    ar1[5] := 21; ar2[5] := 21;

		    ar1[6] := 35; ar2[6] := 30;

		    ar1[7] := 29; ar2[7] := 33;

		    ar1[8] := 40; ar2[8] := 43;

		    ar1[9] := 39; ar2[9] := 37;

		    ar1[10] := 51; ar2[10] := 49;

		    ar1[11] := 50; ar2[11] := 47;

		    ar1[12] := 59; ar2[12] := 60;

		    ar1[13] := 58; ar2[13] := 59;

		    ar1[14] := 65; ar2[14] := 69;

		    ar1[15] := 72; ar2[15] := 68;

		    ARO[0] := 1;

		    Eqs := vars.Equations;

		    Eq := Eqs.Add;

		    // Определяем объясняемый ряд

		    Eq.Serie.Value := ar1;

		    // Определяем порядки авторегрессии

		    Eq.AutoRegressionOrder := ARO;

		    // Определяем последнюю точку прогноза

		    Eq.Forecast.LastPoint := 16;

		    // Определяем параметры константы уравнения

		    Eq.Intercept.Mode := InterceptMode.AutoEstimate;

		    Eq := Eqs.Add;

		    // Определяем объясняемый ряд

		    Eq.Serie.Value := ar2;

		    // Определяем порядки авторегрессии

		    Eq.AutoRegressionOrder := ARO;

		    // Определяем последнюю точку прогноза

		    Eq.Forecast.LastPoint := 16;

		    // Определяем параметры константы уравнения

		    Eq.Intercept.Mode := InterceptMode.AutoEstimate;

		    // Определяем параметры периода идентификации

		    vars.ModelPeriod.FirstPoint := 1;

		    vars.ModelPeriod.LastPoint := 16;

		    // Выполняем расчёт и выводим результаты

		    res := vars.Execute;

		    If res <> 0 Then

		        Debug.Writeline(vars.Errors);

		        Else

		            For j := 0 To Eqs.Count - 1 Do

		                Debug.WriteLine("=== Модельный ряд для уравнения " + j.ToString + " ===");

		                Print(Eqs.Item(j).Fitted);

		            End For;

		    End If;

		End Sub UserProc;


В результате выполнения примера в окно консоли будут выведены модельные
 ряды уравнений векторной авторегрессии.


См. также:


[ISlEquation](ISlEquation.htm)


		Справочная
		 система на версию ERROR: Variable (Version_lts) is undefined.
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
