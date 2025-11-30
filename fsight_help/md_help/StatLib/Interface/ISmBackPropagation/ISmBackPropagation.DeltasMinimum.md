# ISmBackPropagation.DeltasMinimum

ISmBackPropagation.DeltasMinimum
-


# ISmBackPropagation.DeltasMinimum


## Синтаксис


DeltasMinimum: Double;


## Описание


Свойство DeltasMinimum определяет
 минимальное значение параметра точности delta.


## Комментарии


delta - это значение ошибки,
 которое будет использовано для изменения веса синапса. Если значение delta для всех весов меньше, чем
 DeltasMinimum, то процесс
 обучения закончен.


## Пример


Для выполнения примера добавьте ссылки на системные сборки: MathFin,
 Stat.


	Sub
	 UserBackP;

	Var

	    NN: SmBackPropagation;

	    y, x1, x2, x3, x4, x5, x6, x7, x8, x9, x10:
	 Array[15] Of
	 Double;

	    x11, x12, x13, x14, x15, x16, x17, x18, x19,
	 x20: Array[15] Of
	 Double;

	    x21, x22, x23, x24, x25, x26, x27, x28, x29,
	 x30: Array[15] Of
	 Double;

	    Ex: ISlSeries;

	    res, i, j: Integer;

	    masI, PerformanceMatrix: Array Of
	 Double;

	    CatList, CategoriesList, KfoldIntervals: Array
	 Of Integer;

	    s: String;

	    CrossValidation: ICrossValidation;

	    CrossValPerf: ICrossValidationPerformanceScores;

	Begin

	    NN := New SmBackPropagation.Create;

	    // Генерируем исходные
	 данные. 15-ть объектов с 30-ю признаками

	    For i :=
	 0 To 14 Do

	        x1[i] := Math.RandBetween(-5, 5); x16[i]
	 := Math.RandBetween(-5, 5);

	        x2[i] := Math.RandBetween(-5, 5); x17[i]
	 := Math.RandBetween(-5, 5);

	        x3[i] := Math.RandBetween(-5, 5); x18[i]
	 := Math.RandBetween(-5, 5);

	        x4[i] := Math.RandBetween(-5, 5); x19[i]
	 := Math.RandBetween(-5, 5);

	        x5[i] := Math.RandBetween(-5, 5); x20[i]
	 := Math.RandBetween(-5, 5);

	        x6[i] := Math.RandBetween(-5, 5); x21[i]
	 := Math.RandBetween(-5, 5);

	        x7[i] := Math.RandBetween(-5, 5); x22[i]
	 := Math.RandBetween(-5, 5);

	        x8[i] := Math.RandBetween(-5, 5); x23[i]
	 := Math.RandBetween(-5, 5);

	        x9[i] := Math.RandBetween(-5, 5); x24[i]
	 := Math.RandBetween(-5, 5);

	        x10[i] := Math.RandBetween(-5, 5); x25[i]
	 := Math.RandBetween(-5, 5);

	        x11[i] := Math.RandBetween(-5, 5); x26[i]
	 := Math.RandBetween(-5, 5);

	        x12[i] := Math.RandBetween(-5, 5); x27[i]
	 := Math.RandBetween(-5, 5);

	        x13[i] := Math.RandBetween(-5, 5); x28[i]
	 := Math.RandBetween(-5, 5);

	        x14[i] := Math.RandBetween(-5, 5); x29[i]
	 := Math.RandBetween(-5, 5);

	        x15[i] := Math.RandBetween(-5, 5); x30[i]
	 := Math.RandBetween(-5, 5);

	    End For;

	    // Значения объясняемого
	 ряда

	    y[0] :=
	 1; y[5]
	 := 6; y[10]
	 := -1;

	    y[1] := 2; y[6] := 4; y[11] := -1;

	    y[2] := 5; y[7] := 8; y[12] := -1;

	    y[3] := 4; y[8] := 8; y[13] := -1;

	    y[4] := 5; y[9] := 7; y[14] := -1;

	    // Задаем объясняемый
	 ряд

	    NN.Dependent.Value := y;

	    // Задаем объясняющие
	 ряды

	    Ex := NN.Explanatories;

	    Ex.Add.Value := x1; Ex.Add.Value := x11; Ex.Add.Value
	 := x21;

	    Ex.Add.Value := x2; Ex.Add.Value := x12; Ex.Add.Value
	 := x22;

	    Ex.Add.Value := x3; Ex.Add.Value := x13; Ex.Add.Value
	 := x23;

	    Ex.Add.Value := x4; Ex.Add.Value := x14; Ex.Add.Value
	 := x24;

	    Ex.Add.Value := x5; Ex.Add.Value := x15; Ex.Add.Value
	 := x25;

	    Ex.Add.Value := x6; Ex.Add.Value := x16; Ex.Add.Value
	 := x26;

	    Ex.Add.Value := x7; Ex.Add.Value := x17; Ex.Add.Value
	 := x27;

	    Ex.Add.Value := x8; Ex.Add.Value := x18; Ex.Add.Value
	 := x28;

	    Ex.Add.Value := x9; Ex.Add.Value := x19; Ex.Add.Value
	 := x29;

	    Ex.Add.Value := x10; Ex.Add.Value := x20; Ex.Add.Value
	 := x30;

	    // Число нейронов во
	 внутреннем слое

	    NN.Neurons := 22;

	    // Число итераций

	    NN.Epoch := 400;

	    // Минимальное значение
	 delta

	    NN.DeltasMinimum := 0.001;

	    // Задаем параметры кросс-валидации

	    CrossValidation := NN.CrossValidation;

	    CrossValidation.SamplingType := CrossValidationSamplingType.Kfold;

	    CrossValidation.NumberOfFolds := 8;

	    // Выполняем расчёт и
	 выводим результаты

	    res := NN.Execute;

	    If res = 0 Then

	        Debug.WriteLine(" == Заполнение по шаблону == ");

	        Debug.WriteLine("До После ");

	        masI := NN.FilledDependent.Value;

	        For
	 i := 0 To
	 y.Length - 1 Do

	            If y[i] <> -1
	 Then

	                s
	 := y[i].ToString;

	            Else

	                s
	 := "-";

	            End If;

	            s
	 := s + "    "
	 + masI[i].ToString;

	            Debug.WriteLine(s);

	        End
	 For;


        // Выводим список категорий

        CatList := NN.CategoriesList;

        If
 CatList.Length > 0 Then

            Debug.WriteLine(" == Список категорий == "); Debug.Indent;

            For i := 0 To CatList.Length - 1
 Do

                Debug.WriteLine(CatList[i]);

            End For;

            Debug.Unindent;

        End
 If;

        //
 Выводим сводные результаты классификации

        Debug.WriteLine(" === Сводные результаты классификации ===");

        Debug.Indent;

        s := "";

        For
 i := 0 To NN.ClassificationSummary.GetUpperBound(1) Do

            For j := 0 To NN.ClassificationSummary.GetUpperBound(2) Do

                s
 := s + NN.ClassificationSummary[i, j].ToString + "
 ";

            End For;

            Debug.WriteLine(s);

            s
 := "";

        End
 For;

        Debug.Unindent;

        //
 Выводим результаты кросс-валидации

        NN.ExecuteValidation;

        CrossValPerf := NN.PerformanceScores;

        Debug.WriteLine("
 === Результаты кросс-валидации === ");

        Debug.Indent;

        Debug.WriteLine("Анализируемый
 признак: " + CrossValPerf.ClassificatorName);

        Debug.Write("Количество
 факторов, влияющих на анализируемый признак: ");

        Debug.WriteLine(CrossValPerf.FactorsNumber);

        Debug.WriteLine("Количество
 наблюдений: " + CrossValPerf.ObservationsNumber.ToString);

        Debug.WriteLine("Количество
 повторений: " + CrossValidation.NumberOfRandomTests.ToString);

        Debug.WriteLine("Точность
 классификации: " + CrossValPerf.ClassificationAccuracy.ToString);

        Debug.WriteLine("Категории:");

        Debug.Indent;

        CategoriesList := CrossValPerf.CategoriesList;

        For
 i := 0 To CategoriesList.Length
 - 1 Do

            Debug.WriteLine(CategoriesList[i]);

        End
 For;

        Debug.Unindent;

        Debug.WriteLine("Интервалы
 для блоков:");

        Debug.Indent;

        KfoldIntervals := CrossValPerf.KfoldIntervals;

        For
 i := 0 To KfoldIntervals.Length
 - 1 Do

            Debug.WriteLine(KfoldIntervals[i]);

        End
 For;

        Debug.Unindent;

        Debug.WriteLine("Корректная
 классификация:");

        Debug.Indent;

        PerformanceMatrix := CrossValPerf.PerformanceMatrix;

        For
 i := 0 To PerformanceMatrix.GetUpperBound(1) - 1 Do

            For j := 0 To PerformanceMatrix.GetUpperBound(2)
 - 1 Do

                Debug.Write(PerformanceMatrix[i,
 j].ToString + #9);

            End For;

            Debug.WriteLine("");

        End
 For;

        Debug.Unindent;

        Debug.Unindent;

    End If;

End Sub UserBackP;


В результате выполнения примера для указанных данных будет выполнена
 кластеризация с помощью сети обратного распространения, в окно консоли
 будут выведены результаты кластеризации, список категорий, сводные результаты
 классификации и результаты кросс-валидации.


См. также:


[ISmBackPropagation](ISmBackPropagation.htm)


		Справочная
		 система на версию ERROR: Variable (Version_lts) is undefined.
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
