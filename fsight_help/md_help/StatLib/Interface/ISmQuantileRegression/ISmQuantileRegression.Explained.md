# ISmQuantileRegression.Explained

ISmQuantileRegression.Explained
-


# ISmQuantileRegression.Explained


## Синтаксис


Explained: [ISlSerie](../ISlSerie/ISlSerie.htm);


## Описание


Свойство Explained определяет
 объясняемый ряд.


## Комментарии


Число наблюдений в объясняемом ряде должно быть не меньше числа оцениваемых
 параметров.


## Пример


Добавьте ссылку на системную сборку Stat.


	//Процедура вывода массивов

	Sub Print(Data: Array Of Double; start: integer = 1);

	Var

	i: Integer;

	Begin

	    debug.Indent;

	    For i := start - 1 To Data.Length - 1 Do

	        Debug.WriteLine(i.ToString + " " + Data[i].ToString);

	    End For;

	    debug.Unindent;

	End Sub Print;


	Sub UserProc;

	Var

	    can, fra: Array[43] Of double;

	    i, j, res: integer;

	    str: string;

	    qreg: ISmQuantileRegression;

	    qMCI: IIntercept;

	    qMCC: ICoefficients;

	Begin

	    qreg := New SmQuantileRegression.Create;


	    // Значения переменных

	    Can[0] := 6209; fra[0] := 4110;

	    Can[1] := 6385; fra[1] := 4280;

	    Can[2] := 6752; fra[2] := 4459;

	    Can[3] := 6837; fra[3] := 4545;

	    Can[4] := 6495; fra[4] := 4664;

	    Can[5] := 6907; fra[5] := 4861;

	    Can[6] := 7349; fra[6] := 5195;

	    Can[7] := 7213; fra[7] := 5389;

	    Can[8] := 7061; fra[8] := 5463;

	    Can[9] := 7180; fra[9] := 5610;

	    Can[10] := 7132; fra[10] := 5948;

	    Can[11] := 7137; fra[11] := 6218;

	    Can[12] := 7473; fra[12] := 6521;

	    Can[13] := 7722; fra[13] := 6788;

	    Can[14] := 8088; fra[14] := 7222;

	    Can[15] := 8516; fra[15] := 7486;

	    Can[16] := 8941; fra[16] := 7832;

	    Can[17] := 9064; fra[17] := 8153;

	    Can[18] := 9380; fra[18] := 8468;


	    Can[19] := 9746; fra[19] := 9054;

	    Can[20] := 9907; fra[20] := 9499;

	    Can[21] := 10333; fra[21] := 9866;

	    Can[22] := 10863; fra[22] := 10217;

	    Can[23] := 11693; fra[23] := 10763;

	    Can[24] := 12242; fra[24] := 10683;

	    Can[25] := 12227; fra[25] := 10494;

	    Can[26] := 12910; fra[26] := 10938;

	    Can[27] := 13049; fra[27] := 11198;

	    Can[28] := 13384; fra[28] := 11546;

	    Can[29] := 14036; fra[29] := 11865;


	    Can[30] := 14242;

	    Can[31] := 14704;

	    Can[32] := 13802;

	    Can[33] := 14197;

	    Can[34] := 15010;

	    Can[35] := 15589;

	    Can[36] := 15932;

	    Can[37] := 16631;

	    Can[38] := 17394;

	    Can[39] := 17758;

	    Can[40] := 17308;

	    Can[41] := 16444;

	    Can[42] := 16413;


	    // Период идентификации

	    qreg.ModelPeriod.FirstPoint := 1;

	    qreg.ModelPeriod.LastPoint := 30;

	    // Прогнозируемая переменная

	    qreg.Forecast.LastPoint := 43;

	    // Выбор объясняемой переменной

	    qreg.Explained.Value := fra;

	    // Выбор регрессоров

	    qreg.Explanatories.Clear;

	    qreg.Explanatories.Add.Value := can;

	    // Константа в регрессорах

	    qreg.ModelCoefficients.Intercept.Mode := InterceptMode.AutoEstimate;

	    // Уровень квантиля

	    qreg.Quantile := 0.3;

	    // Число итераций

	    qreg.MaxIteration := 100;

	    // Метод обработки пропусков

	    qreg.MissingData.Method := MissingDataMethod.Casewise;


	    // Расчёт и вывод результатов

	    res := qreg.Execute;

	    Debug.WriteLine(qreg.Errors);

	    For i := 0 To qreg.WarningsCount - 1 Do

	        Debug.WriteLine(qreg.Warnings[i]);

	    End For;

	    Debug.WriteLine("Константа: ");

	    qMCI := qreg.ModelCoefficients.Intercept;

	    Debug.WriteLine(qMCI.Estimate.ToString + " " + qMCI.StandardError.ToString + " " + qMCI.TStatistic.ToString + " " + qMCI.Probability.ToString);

	    Debug.WriteLine("Оценки коэффициентов:");

	    qMCC := qreg.ModelCoefficients.Coefficients;

	    For i := 0 To qreg.ModelCoefficients.Coefficients.Estimate.Length - 1 Do

	        Debug.WriteLine(qMCC.Estimate[i].ToString + " " + qMCC.StandardError[i].ToString + " " + qMCC.TStatistic[i].ToString + " " + qMCC.Probability[i].ToString);

	    End For;


	    Debug.WriteLine("Ковариационная матрица");

	    For i := 0 To qreg.CovarianceMatrix.GetUpperBound(1) Do

	        str := "";

	        For j := 0 To qreg.CovarianceMatrix.GetUpperBound(2) Do

	            str := str + "  " + (qreg.CovarianceMatrix[i, j] As Double).ToString;

	        End For;

	        Debug.WriteLine(str);

	    End For;

	    Debug.WriteLine("Характеристики квантильной регрессии");

	    Debug.Indent;

	    Debug.WriteLine("Псевдокоэффициент детерминации: " + qreg.QRegStatistics.PseudoR2.ToString);

	    Debug.WriteLine("Cкорректированный коэффициент детерминации: " + qreg.QRegStatistics.AdjR2.ToString);

	    Debug.WriteLine("Значение целевой функции: " + qreg.QRegStatistics.Objective.ToString);

	    Debug.WriteLine("Значение ограниченной целевой функции: " + qreg.QRegStatistics.RestrObjective.ToString);

	    Debug.WriteLine("Квантиль объясняемой переменной: " + qreg.QRegStatistics.QDependentVar.ToString);

	    Debug.WriteLine("Разреженность наблюдений: " + qreg.QRegStatistics.Sparsity.ToString);

	    Debug.UnIndent;

	    Debug.WriteLine("Статистические характеристики");

	    Debug.Indent;


	    Debug.WriteLine("Число итераций, за которое сошелся метод: " + qreg.SummaryStatistics.NumOfIter.ToString);

	    Debug.WriteLine("Стандартная ошибка: " + qreg.SummaryStatistics.SE.ToString);

	    Debug.WriteLine("Сумма квадратов остатков: " + qreg.SummaryStatistics.SSR.ToString);

	    Debug.UnIndent;

	    Debug.WriteLine("Модельный ряд");

	    Print(qreg.Fitted);

	    Debug.WriteLine("Ряд остатков");

	    Print(qreg.Residuals);

	    Debug.WriteLine("Прогноз");

	    Print(qreg.Forecast.Value, qreg.ModelPeriod.LastPoint + 1);

	    Debug.WriteLine("Нижняя доверительная граница прогноза");

	    Print(qreg.Forecast.LowerConfidenceLevel, qreg.ModelPeriod.LastPoint + 1);

	    Debug.WriteLine("Верхняя доверительная граница прогноза");

	    Print(qreg.Forecast.UpperConfidenceLevel, qreg.ModelPeriod.LastPoint + 1);

	End Sub UserProc;


Результат выполнения примера: в окно консоли будут выведены результаты
 расчёта квантильной регрессии.


См. также:


[ISmQuantileRegression](ISmQuantileRegression.htm)


		Справочная
		 система на версию ERROR: Variable (Version_lts) is undefined.
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
