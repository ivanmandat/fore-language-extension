# ISmLogisticRegression.Probabilities

ISmLogisticRegression.Probabilities
-


# ISmLogisticRegression.Probabilities


## Синтаксис


Probabilities: Array;


## Описание


Свойство Probabilities возвращает
 ряд вероятностей прогноза логистической регрессии.


## Комментарии


Для определения порогового значения вероятности для классификации используйте
 свойство [ISmLogisticRegression.Threshold](ISmLogisticRegression.Threshold.htm).


## Пример


Для выполнения примера добавьте ссылку на системную сборку Stat.


	Sub
	 UserLogisticR;

	Var

	    binary: SmLogisticRegression;

	    e, s: Array[62]
	 Of Double;

	    Coef: IModelCoefficients;

	    stat: ISummaryStatistics;

	    i, j, res: Integer;

	    ROCcurve: IROCcurve;

	    FilledDependent, ar, Probabilities, ProbFitted:
	 Array Of Double;

	    OneMinusSpecificity, Sensitivity, CutOffPoints:
	 Array Of Double;

	    str: String;

	Begin

	    // Задаем данные для
	 анализа

	    // Значения, соответствующие
	 социальному статусу

	    s[0] :=
	 Double.Nan; s[11] := 0;
	 s[22] := 0;
	 s[33] := Double.Nan; s[44]
	 := 1; s[55]
	 := Double.Nan;

	    s[1] := 1; s[12] := 1; s[23] := 1; s[34] := 0; s[45] := 1; s[56] := 1;

	    s[2] := Double.Nan;
	 s[13] := 1;
	 s[24] := 0;
	 s[35] := 0;
	 s[46] := 1;
	 s[57] := 1;

	    s[3] := 0; s[14] := 0; s[25] := 0; s[36] := 1; s[47] := 0; s[58] := 1;

	    s[4] := 0; s[15] := 0; s[26] := 0; s[37] := 0; s[48] := 1; s[59] := 1;

	    s[5] := 1; s[16] := 0; s[27] := 0; s[38] := 0; s[49] := 0; s[60] := 0;

	    s[6] := 0; s[17] := 0; s[28] := 0; s[39] := 0; s[50] := 0; s[61] := 0;

	    s[7] := 1; s[18] := Double.Nan;
	 s[29] := Double.Nan; s[40]
	 := 0; s[51]
	 := Double.Nan;

	    s[8] := 1; s[19] := 0; s[30] := 0; s[41] := 0; s[52] := 0;

	    s[9] := 1; s[20] := 1; s[31] := 0; s[42] := Double.Nan;
	 s[53] := 0;

	    s[10] := 1; s[21] := 0; s[32] := 0; s[43] := 1; s[54] := 0;

	    // Значения, соответствующие
	 возрастной группе

	    e[0] :=
	 1; e[11]
	 := 0; e[22]
	 := 1; e[33]
	 := 2; e[44]
	 := 2; e[55]
	 := 2;

	    e[1] := 1; e[12] := 1; e[23] := 2; e[34] := 1; e[45] := 0; e[56] := 0;

	    e[2] := 1; e[13] := 1; e[24] := 1; e[35] := 3; e[46] := 1; e[57] := 1;

	    e[3] := 0; e[14] := 1; e[25] := 0; e[36] := 1; e[47] := 1; e[58] := 0;

	    e[4] := 0; e[15] := 2; e[26] := 1; e[37] := 1; e[48] := 1; e[59] := 0;

	    e[5] := 1; e[16] := 1; e[27] := 0; e[38] := 2; e[49] := 0; e[60] := 2;

	    e[6] := 2; e[17] := 0; e[28] := 1; e[39] := 3; e[50] := 1; e[61] := 2;

	    e[7] := 0; e[18] := 1; e[29] := 3; e[40] := 1; e[51] := 0;

	    e[8] := 3; e[19] := 3; e[30] := 1; e[41] := 0; e[52] := 0;

	    e[9] := 1; e[20] := 4; e[31] := 1; e[42] := 4; e[53] := 2;

	    e[10] := 2; e[21] := 0; e[32] := 2; e[43] := 1; e[54] := 0;


    // Создаем метод

    binary := New
 SmLogisticRegression.Create;

    // Задаем объясняемый ряд

    binary.Dependent.Value := s;

    // Задаем признак для классификации

    binary.Explanatories.Add.Value := e;

    // Задаем точность решения

    binary.Tolerance := 0.005;

    // Задаем максимальное число
 итераций

    binary.MaxIteration := 10000;

    // Задаем параметры ROC-кривой

    ROCcurve := binary.ROCcurve;

    ROCcurve.ConfidenceLevel := 0.85;

    // Выполняем расчёт и выводим
 результаты расчёта

    res := binary.Execute;

    If res <> 0 Then

        Debug.WriteLine(binary.Errors);

    Else

        Debug.WriteLine("Количество
 итераций, потребовавшихся для решения: ");

        Debug.Indent;

        Debug.WriteLine(binary.NumOfIter);

        Debug.Unindent;

        Debug.WriteLine("До
 заполнения; после заполнения");

        Debug.Indent;

        FilledDependent := binary.FilledDependent.Value;

        For
 i := 0 To s.Length
 - 1 Do

            If s[i] = 0 Then

                Debug.Write("Single ");

            Elseif s[i] = 1
 Then

                Debug.Write("Married ");

            Else

                Debug.Write(" - ");

            End If;

            If FilledDependent[i] = 0
 Then

                Debug.WriteLine("Single");

            Else

                Debug.WriteLine("Married");

            End If;

        End
 For;


        Debug.Unindent;

        Debug.WriteLine("Оцененные
 значения коэффициентов:");

        Debug.Indent;

        Coef := binary.ModelCoefficients;

        ar := Coef.Coefficients.Estimate;

        For
 i := 0 To ar.Length
 - 1 Do

            Debug.WriteLine(ar[i]);

        End
 For;

        Debug.Unindent;

        Debug.WriteLine("Среднее
 логарифма функции правдоподобия: ");

        Debug.Indent;

        Stat := binary.SummaryStatistics;

        Debug.WriteLine(Stat.AvgLogL);

        Debug.Unindent;

        Debug.WriteLine("Ряд
 вероятностей");

        Debug.Indent;

        Probabilities := binary.Probabilities;

        For
 i := 0 To Probabilities.Length
 - 1 Do

            Debug.WriteLine((i
 + 1).ToString + ".
 " + Probabilities[i].ToString);

        End
 For;

        Debug.Unindent;

        Debug.WriteLine("Ряд
 вероятностей для обучающих объектов");

        Debug.Indent;

        ProbFitted := binary.ProbFitted;

        For
 i := 0 To ProbFitted.Length
 - 1 Do

            Debug.WriteLine((i
 + 1).ToString + ".
 " + ProbFitted[i].ToString);

        End
 For;

        Debug.Unindent;

        //
 Выводим данные ROC-кривой

        Debug.WriteLine("Данные ROC-кривой:");

        Debug.Indent;

        Debug.WriteLine("Специфичность:");

        Debug.Indent;

        OneMinusSpecificity :=
 ROCcurve.OneMinusSpecificity;

        For
 i := 0 To OneMinusSpecificity.Length
 - 1 Do

            Debug.WriteLine(OneMinusSpecificity[i]);

        End
 For;

        Debug.Unindent;

        Debug.WriteLine("Чувствительность:");

        Debug.Indent;

        Sensitivity := ROCcurve.Sensitivity;

        For
 i := 0 To Sensitivity.Length
 - 1 Do

            Debug.WriteLine(Sensitivity[i]);

        End
 For;


        Debug.Unindent;

        Debug.WriteLine("Площадь
 под кривой: " + ROCcurve.Area.ToString);

        Debug.WriteLine("Стандартная
 ошибка: " + ROCcurve.StdError.ToString);

        Debug.WriteLine("Асимптотический
 доверительный интервал:");

        Debug.Indent;

        Debug.WriteLine("Нижняя
 граница: " + ROCcurve.ConfidenceIntervalLower.ToString);

        Debug.WriteLine("Верхняя
 граница: " + ROCcurve.ConfidenceIntervalUpper.ToString);

        Debug.Unindent;

        Debug.WriteLine("Порог
 отсечения:");

        Debug.Indent;

        CutOffPoints := ROCcurve.CutOffPoints;

        For
 i := 0 To CutOffPoints.Length
 - 1 Do

            Debug.WriteLine(CutOffPoints[i]);

        End
 For;

        Debug.Unindent;

        Debug.Unindent;

        // Выводим сводные результаты классификации

        Debug.WriteLine("Сводные результаты классификации:");

        Debug.Indent;

        str := "";

        For i := 0 To binary.ClassificationSummary.GetUpperBound(1) Do

            For j := 0 To binary.ClassificationSummary.GetUpperBound(2) Do

                str := str + binary.ClassificationSummary[i, j].ToString + " ";

            End For;

            Debug.WriteLine(str);

            str := "";

        End For;

        Debug.Unindent;

        // Выводим критерии качества классификации

        Debug.WriteLine("Критерии качества классификации");

        Debug.Indent;

        Debug.WriteLine("Общая точность: " + binary.RelevanceMeasure.Accuracy.ToString);

        Debug.WriteLine("Ф - оценка: " + binary.RelevanceMeasure.F1.ToString);

        Debug.WriteLine("Точность положительного результата: " + binary.RelevanceMeasure.Precision.ToString);

        Debug.WriteLine("Полнота положительного результата: " + binary.RelevanceMeasure.Recall.ToString);

        Debug.Unindent;

        Debug.Unindent;

    End If;

End Sub UserLogisticR;


В результате выполнения примера будет настроена и рассчитана логистическая
 регрессия, в окно консоли будут выведены результаты расчета и критерии
 качества классификации.


См. также:


[ISmLogisticRegression](ISmLogisticRegression.htm)


		Справочная
		 система на версию ERROR: Variable (Version_lts) is undefined.
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
