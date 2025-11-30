# ISmLinearRegress.GDLTerms

ISmLinearRegress.GDLTerms
-


# ISmLinearRegress.GDLTerms


## Синтаксис


GDLTerms: [ISlGDLTerms](../ISlGDLTerms/ISlGDLTerms.htm);


## Описание


Свойство GDLTerms определяет
 параметры расчёта распределенных лагов Койка.


## Комментарии


Использовать ли модель распределенных лагов Койка, определяет свойство
 [ISmLinearRegress.UseGDLTerms](ISmLinearRegress.UseGDLTerms.htm).


## Пример


Для выполнения примера добавьте ссылку на системную сборку Stat.


	Sub UserProc;

	Var

	    lr: ISmLinearRegress;

	    y, x1, x3: Array[25] Of Double;

	    i: Integer;

	    init: Array[2] Of Double;

	    constant: IIntercept;

	    exp: ISlSeries;

	    GDLTerms: ISlGDLTerms;

	    coefs: ICoefficients;

	Begin


	    // Задаём значения переменных

	    Y[0] := -0.22;  X1[0]:=0.37; X3[0]:=-135;

	    Y[1] := -0.3;   X1[1]:=0.19; X3[1]:=-135;

	    Y[2] := -0.34;  X1[2]:=0.08; X3[2]:=-133;

	    Y[3] := -0.34;  X1[3]:=0.08; X3[3]:=-129;

	    Y[4] := -0.34;  X1[4]:=0.13; X3[4]:=-125;

	    Y[5] := -0.34;  X1[5]:=0.21; X3[5]:=-123;

	    Y[6] := -0.3;   X1[6]:=0.37; X3[6]:=-121;

	    Y[7] := -0.28;  X1[7]:=0.43; X3[7]:=-117;

	    Y[8] := -0.22; X1[8]:=0.49; X3[8]:=-115;

	    Y[9] := -0.11; X1[9]:=0.55; X3[9]:=-112;

	    Y[10] := -0.04; X1[10]:=0.65;   X3[10]:=-109;

	    Y[11] := -0.01; X1[11]:=0.73; X3[11]:=-106;

	    Y[12] := 0.06; X1[12] := 0.98; X3[12]:=-109;

	    Y[13] := 0.09; X1[13] := 1.1;   X3[13]:=-109;

	    Y[14] := 0.17; X1[14] := 1.19;  X3[14]:=-115;

	    Y[15] := 0.31; X1[15] := 1.26;  X3[15]:=-117;

	    Y[16] := 0.37; X1[16] := 1.43;  X3[16]:=-123;

	    Y[17] := 0.46; X1[17] := 1.62;  X3[17]:=-123;

	    Y[18] := 0.57; X1[18] := 1.72;  X3[18]:=-125;

	    Y[19] := 0.62; X1[19] := 1.77;  X3[19]:=-129;

	    Y[20] := 0.62; X1[20] := 1.77;  X3[20]:=-133;

	    Y[21] := 0.62; X1[21] := 1.77;  X3[21]:=-135;

	    Y[22] := 0.62; X1[22] := 1.77;  X3[22]:=-135;

	    Y[23] := 0.54; X1[23] := 1.72; X3[23]:=-135;

	    Y[24] := 0.58; X1[24] := 1.48;  X3[24]:=-129;


	    // Создаем метод

	    lr := New SmLinearRegress.Create;

	    // Определяем параметры периодов идентификации и прогнозирования

	    lr.ModelPeriod.FirstPoint := 0;

	    lr.ModelPeriod.LastPoint := 15;

	    lr.Forecast.LastPoint := 25;

	    // Определяем параметры константы

	    constant := lr.ModelCoefficients.Intercept;

	    constant.Mode := InterceptMode.AutoEstimate;

	    // Задаем объясняемую переменную

	    lr.Explained.Value := y;

	    // Задаем объясняющие переменные

	    exp := lr.Explanatories;

	    exp.Add.Value := x1;

	    exp.Add.Value := x3;

	    // Задаем параметры лагов Койка

	    lr.UseGDLTerms := True;

	    GDLTerms := lr.GDLTerms;

	    // Определяем максимальное число итераций

	    GDLTerms.MaxIteration := 300;

	    // Определяем точность, используемую при оптимизации

	    GDLTerms.Tolerance := 0.01;

	    // Используем численные производные

	    GDLTerms.UseAnalyticDeriv := False;

	    // Задаем начальные значения коэффициентов

	    init[0] := 0.011;

	    init[1] := 0.024;

	    GDLTerms.AllInitialValues := init;

	    // Выполняем расчёт метода

	    i := lr.Execute;


	    // Выводим результаты

	    If i = 0 Then

	        Debug.WriteLine("Значение константы: " + constant.Estimate.ToString);

	        Debug.WriteLine("Модельный ряд:");

	        Debug.Indent;

	        For i := 0 To lr.Fitted.Length - 1 Do

	            Debug.WriteLine(lr.Fitted[i]);

	        End For;

	        Debug.Unindent;

	        Debug.WriteLine("Прогнозный ряд:");

	        Debug.Indent;

	        For i := 0 To lr.Forecast.Value.Length - 1 Do

	            Debug.WriteLine(lr.Forecast.Value[i]);

	        End For;

	        Debug.Unindent;

	        coefs := lr.ModelCoefficients.Coefficients;

	        Debug.WriteLine("Значение коэффициентов:");

	        Debug.Indent;

	        Debug.WriteLine("beta0_1: " + coefs.Estimate[0].ToString);

	        Debug.WriteLine("beta0_2: " + coefs.Estimate[1].ToString);

	        Debug.WriteLine("alpha: " + coefs.Estimate[2].ToString);

	        Debug.Unindent;

	    End If;

	End Sub UserProc;


В результате выполнения примера в окно консоли будут выведены результаты
 расчета модели линейной регрессии (оценка МНК), использующей распределенные
 лаги Койка: модельный объясняемый ряд, прогнозный ряд и значения коэффициентов.


См. также:


[ISmLinearRegress](ISmLinearRegress.htm)
 | [Модель
 геометрически распределенных лагов](Lib.chm::/02_Time_series_analysis/Lib_GeomDistrLags_Koyck.htm)


		Справочная
		 система на версию ERROR: Variable (Version_lts) is undefined.
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
