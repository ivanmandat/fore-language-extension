# ISmDiscriminantAnalysis.ClassCount

ISmDiscriminantAnalysis.ClassCount
-


# ISmDiscriminantAnalysis.ClassCount


## Синтаксис


ClassCount: Integer;


## Описание


Свойство ClassCount возвращает
 количество классов, полученных в результате расчёта.


## Комментарии


Итоговую классификацию объектов возвращает свойство [IDataMining.FilledDependent](../IDataMining/IDataMining.FilledDependent.htm).


## Пример


Для выполнения примера добавьте ссылки на системные сборки: MathFin,
 Stat.


	// Основная процедура

	Sub UserDiscrAn;

	Var

	    DA: SmDiscriminantAnalysis;

	    y: Array[60] Of Integer;

	    x1, x2, x3, x4, x5, x6, x7, x8: Array[60] Of Double;

	    Ex: ISlSeries;

	    res, i, j: Integer;

	    indx0: Double;

	    resM: Array Of Integer;

	    str: String;

	Begin

	    DA := New SmDiscriminantAnalysis.Create;

	    // Исходные данные: шестьдесят
	 объектов с восьмью признаками

	    For i := 0 To 59 Do

	        x1[i] := Math.RandBetween(95, 104);

	        x2[i] := Math.RandBetween(95, 104);

	        x3[i] := Math.RandBetween(95, 104);

	        x4[i] := Math.RandBetween(95, 104);

	        x5[i] := Math.RandBetween(95, 104);

	        x6[i] := Math.RandBetween(95, 104);

	        x7[i] := Math.RandBetween(95, 104);

	        x8[i] := Math.RandBetween(95, 104);

	    End For;

	    // Значения объясняемого ряда

	    For i := 0 To 39 Do

	        y[i] := Math.RandBetweenI(1, 5);

	    End For;

	    For i := 40 To 59 Do

	        y[i] := -1;

	    End For;

	    // Задаем объясняющие переменные

	    Ex := DA.Explanatories;

	    Ex.Add.Value := x1; Ex.Add.Value := x5;

	    Ex.Add.Value := x2; Ex.Add.Value := x6;

	    Ex.Add.Value := x3; Ex.Add.Value := x7;

	    Ex.Add.Value := x4; Ex.Add.Value := x8;

	    // Выполняем расчёт и выводим результаты

	    If DA.Execute = 0 Then

	        Debug.WriteLine(" == Сводные результаты классификации == ");

	        res := DA.ClassCount;

	        Debug.WriteLine("Количество классов: " + res.ToString);

	        resM := DA.ClassificationSummary;

	        For i := 0 To res - 1 Do

	            For j := 0 To res - 1 Do

	                str := str + " " + (resM[i, j] As Integer).ToString;

	            End For;

	            str := str + " | " + (resM[i, res] As Integer).ToString;

	            Debug.WriteLine(str);

	            str := "";

	        End For;

	        str := "- - - - - - - - ";

	        Debug.WriteLine(str);

	        str := "";

	        For j := 0 To DA.ClassCount - 1 Do

	                str := str + " " + (resM[res, j] As Integer).ToString;

	            End For;

	        str := str + " | " + (resM[res, res] As Integer).ToString;

	        Debug.WriteLine(str);


	        str := "===========================" + #13 + #10;

	        Debug.WriteLine(str + " == Общее среднее == ");

	        Print(DA.TotalAverage, DA.TotalAverage.Rank);

	        Debug.WriteLine(" == Внутригрупповое среднее == ");

	        Print(DA.WithinAverage, DA.WithinAverage.Rank);

	        Debug.WriteLine(str + " == Общее стандартное отклонение == ");

	        Print(DA.TotalStdDev, DA.TotalStdDev.Rank);

	        Debug.WriteLine(" == Внутригрупповое стандартное отклонение == ");

	        Print(DA.WithinStdDev, DA.WithinStdDev.Rank);

	        Debug.WriteLine(str + " == Общая корреляция == ");

	        Print(DA.TotalCorrelation, DA.TotalCorrelation.Rank);

	        Debug.WriteLine(" == Внутригрупповая корреляция == ");

	        Print(DA.WithinCorrelation, DA.WithinCorrelation.Rank);

	        Debug.WriteLine(" == Усреднённая внутригрупповая корреляция == ");

	        Print(DA.PooledWithinCorrelation, DA.PooledWithinCorrelation.Rank);

	        Debug.WriteLine(str + " == Общая ковариация == ");

	        Print(DA.TotalCovariance, DA.TotalCovariance.Rank);

	        Debug.WriteLine(" == Внутригрупповая ковариация == ");

	        Print(DA.WithinCovariance, DA.WithinCovariance.Rank);

	        Debug.WriteLine(" == Усреднённая внутригрупповая ковариация == ");

	        Print(DA.PooledWithinCovariance, DA.PooledWithinCovariance.Rank);

	        Debug.WriteLine(str + " == Коэффициенты канонических дискриминантных функций == ");

	        Debug.WriteLine("    = стандартизованные = ");

	        Print(DA.StdDiscriminantFuncs, DA.StdDiscriminantFuncs.Rank);

	        Debug.WriteLine("    = нестандартизованные = ");

	        Print(DA.NonStdDiscriminantFuncs, DA.NonStdDiscriminantFuncs.Rank);

	        Debug.WriteLine(str + " == Статистика Уилкса == ");

	        Print(DA.WilkesStatistics, DA.WilkesStatistics.Rank);

	        Debug.WriteLine(str + " == Функции Фишера == ");

	        Print(DA.FishersFuncs, DA.FishersFuncs.Rank);

	        Debug.WriteLine(str + " == Структурная матрица == ");

	        Print(DA.StructuralMatrix, DA.StructuralMatrix.Rank);

	        Debug.WriteLine(str + " == Собственные значения == ");

	        Print(DA.EigenValues, DA.EigenValues.Rank);

	        Debug.WriteLine(str + " == Классификация переменных == ");

	        For i := 0 To DA.FinallyExplained.Length - 1 Do

	            indx0 := DA.FinallyExplained[i];

	            Debug.WriteLine(i.ToString + ".  " + indx0.ToString);

	        End For;

	    End If;

	End Sub UserDiscrAn;

	// Процедура вывода данных

	Sub Print(a: Array Of Double; d2: integer);

	Var

	    ci: ICultureInfo;

	    i, j: integer;

	    s: string;

	Begin

	    ci := CultureInfo.Current;

	    If d2 = 2 Then

	        For i := 0 To a.GetUpperBound(2) Do

	            s := "";

	            For j := 0 To a.GetUpperBound(1) Do

	                If Double.IsNan(a[j, i]) Then

	                    s := s + " " + " - ";

	                Else

	                    s := s + " " + ci.FormatDoublePrec(a[j, i], 2);

	                End If;

	            End For;

	            Debug.WriteLine(s);

	        End For;

	    Else

	        For i := 0 To a.GetUpperBound(1) Do

	            If Double.IsNan(a[i]) Then

	                s := s + " " + " - ";

	            Else

	                s := s + " " + ci.FormatDoublePrec(a[i], 2);

	            End If;

	        End For;

	        Debug.WriteLine(s);

	    End If;

	End Sub Print;


В результате выполнения основной процедуры для указанных данных будет
 выполнен дискриминантный анализ, результаты выведены в окно консоли.


См. также:


[ISmDiscriminantAnalysis](ISmDiscriminantAnalysis.htm)


		Справочная
		 система на версию ERROR: Variable (Version_lts) is undefined.
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
