# ISmCointegrationEq.CommonExogenious

ISmCointegrationEq.CommonExogenious
-


# ISmCointegrationEq.CommonExogenious


## Синтаксис


CommonExogenious: Array;


## Описание


Свойство CommonExogenious определяет
 массив индексов экзогенных переменных, входящих в группу переменных с
 краткосрочными коинтеграционными связями.


## Комментарии


Экзогенная переменная должна входить в группу долгосрочных ([ISmCointegrationEq.LongTermExogenious](ISmCointegrationEq.LongTermExogenious.htm))
 или краткосрочных (ISmCointegrationEq.CommonExogenious) коинтеграционных
 связей для расчета модели.


## Пример


Для выполнения примера добавьте ссылку на системную сборку Stat.


		Sub UserProc;

		Var

		    y: Array[11] Of Double;

		    x1, x2: Array[21] Of Double;

		    AR_X: Array[1] Of Integer;

		    CommonEx, LongTerm: Array[1] Of Integer;

		    i, Res: Integer;

		    ArrRes, f: Array Of Double;

		    d: Double;

		    CointegrEq: ISmCointegrationEq;

		    Eq: ISlEquation;

		Begin

		    // Задаем исходные значения для эндогенной переменной

		    y[00] := 95;

		    y[01] := 45;

		    y[02] := 22;

		    y[03] := -36;

		    y[04] := 10;

		    y[05] := -15;

		    y[06] := 36;

		    y[07] := -10;

		    y[08] := -36;

		    y[09] := -44;

		    y[10] := -7;

		    // Задаем исходные значения для 1-ой и 2-ой экзогенных переменных

		    x1[00] := 6; x2[00] := 7.6;

		    x1[01] := 8; x2[01] := 7.8;

		    x1[02] := 10; x2[02] := 8.1;

		    x1[03] := 5; x2[03] := 6.5;

		    x1[04] := 3;  x2[04] := 5.3;

		    x1[05] := 6; x2[05] := 4.6;

		    x1[06] := 3; x2[06] := 6.3;

		    x1[07] := 7; x2[07] := 7.7;

		    x1[08] := 8; x2[08] := 9.8;

		    x1[09] := 10; x2[09] := 1.0;

		    x1[10] := 5;  x2[10] := 7.5;

		    x1[11] := 2;  x2[11] := 8.2;

		    x1[12] := 1;  x2[12] := 4.1;

		    x1[13] := 1;  x2[13] := 6.1;

		    x1[14] := 3; x2[14] := 7.3;

		    x1[15] := 4;  x2[15] := 3.4;

		    x1[16] := 7;  x2[16] := 2.7;

		    x1[17] := 4; x2[17] := 8.4;

		    x1[18] := 7; x2[18] := 6.7;

		    x1[19] := 4; x2[19] := 7.4;

		    x1[20] := 3; x2[20] := 6.3;


		    CointegrEq := New SmCointegrationEq.Create;

		    Eq := CointegrEq.Equation;

		    // Задаем эндогенную переменную

		    Eq.Serie.Value := y;

		    // Задаем экзогенные переменные

		    Eq.ExogenousVariables.Add.Value := x1;

		    Eq.ExogenousVariables.Add.Value := x2;

		    // Задаем порядок авторегрессии экзогенных переменных

		    AR_X[0] := 0;

		    Eq.AutoRegressionOrder := AR_X;

		    // Включаем 1-ю экзогенную переменную в группу краткосрочных связей

		    CommonEx[0] := 0;

		    CointegrEq.CommonExogenious := CommonEx;

		    // Включаем 2-ю экзогенную переменную в группу долгосрочных связей

		    LongTerm[0] := 1;

		    CointegrEq.LongTermExogenious := LongTerm;

		    // Задаем период идентификации

		    CointegrEq.Period.FirstPoint := 1;

		    CointegrEq.Period.LastPoint := 11;

		    // Задаем последнюю точку прогноза

		    Eq.Forecast.LastPoint := 21;

		    // Определяем тип модели коррекции ошибок

		    CointegrEq.ModelType := ECMType.NoTrendIntercept;

		    // Задаем порядок авторегрессии эндогенных переменных

		    CointegrEq.ParseSerieAROrder("1", True);

		    // Вычисляем метод и выводим результаты

		    Res := CointegrEq.Execute;

		    If Res = 0 Then

		        Debug.WriteLine("Прогнозный ряд:");

		        ArrRes := Eq.Forecast.Value;

		        For i := CointegrEq.Period.LastPoint To ArrRes.Length - 1 Do

		            d := ArrRes[i] As double;

		            Debug.WriteLine(i.ToString + ": " + d.ToString);

		        End For;

		        f := CointegrEq.CointegralEquation.Estimate;

		        Debug.WriteLine("Коэффициенты модели;");

		        For i := 0 To f.Length - 1 Do

		            Debug.WriteLine(f[i]);

		        End For;


		        f := CointegrEq.CointegralEquation.Probability;

		        Debug.WriteLine("Вероятности коэффициентов:");

		        For i := 0 To f.Length - 1 Do

		            Debug.WriteLine(f[i]);

		        End For;

		        f := CointegrEq.CointegralEquation.StandardError;

		        Debug.WriteLine("Стандартные ошибки коэффициентов");

		        For i := 0 To f.Length - 1 Do

		            Debug.WriteLine(f[i]);

		        End For;

		        f := CointegrEq.CointegralEquation.TStatistic;

		        Debug.WriteLine("t-статистики коэффициентов");

		        For i := 0 To f.Length - 1 Do

		            Debug.WriteLine(f[i]);

		        End For;

		    Else

		        Debug.WriteLine("Статус выполнения: " + Res.ToString);

		        Debug.WriteLine("Ошибка: " + CointegrEq.Errors);

		    End If;

		End Sub UserProc;


В результате выполнения примера в окно консоли будут выведены результаты
 расчета: прогнозный ряд; коэффициенты модели; вероятности, стандартные
 ошибки и t - статистики коэффициентов.


См. также:


[ISmCointegrationEq](ISmCointegrationEq.htm)


		Справочная
		 система на версию ERROR: Variable (Version_lts) is undefined.
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
