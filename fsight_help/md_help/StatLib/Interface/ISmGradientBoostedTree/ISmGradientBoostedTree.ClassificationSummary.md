# ISmGradientBoostedTree.ClassificationSummary

ISmGradientBoostedTree.ClassificationSummary
-


# ISmGradientBoostedTree.ClassificationSummary


## Синтаксис


ClassificationSummary: Array;


## Описание


Свойство ClassificationSummary
 возвращает сводные результаты классификации.


## Комментарии


Для получения списка категорий используйте свойство [ISmGradientBoostedTree.CategoriesList](ISmGradientBoostedTree.CategoriesList.htm).


## Пример


Добавьте ссылку на системную сборку Stat.


	Sub
	 UserProc;

	Var

	    GB: SmGradientBoostedTree;

	    y: Array[20] Of Double;

	    x1ord: Array[20]
	 Of integer;

	    x2ord: Array[20]
	 Of integer;

	    x3dbl: array[20]
	 Of double;

	    x4cat: array[20]
	 Of integer;

	    TreeSizeSpecification: ITreeSpecification;

	    BinningSett: IBinningSettingsInt;

	    ExpSeries: ISlSeriesInt;

	    ESeries: ISlSerieInt;

	    Series: ISlSeries;

	    Serie: ISlSerie;

	    CrossValidation: ICrossValidation;

	    i, j, res: integer;

	    str: String;

	    d: double;

	    CrossValPerf: ICrossValidationPerformanceScores;

	    TreeNode: IBinaryTreeNode;

	    CatList, BinningRes, CategoriesList: Array
	 Of Integer;

	    PerformanceMatrix, OneMinusSpecificity, Sensitivity,
	 CutOffPoints: Array Of Double;

	    ROCcurve: IROCcurve;

	Begin

	    // Создаем объект для
	 расчета градиентного бустинга

	    GB := New
	 SmGradientBoostedTree.Create;

	    // Задаем значения объясняемого
	 ряда

	    y[0] :=
	 0; y[5]
	 := 1; y[10]
	 := 1; y[15]
	 := 1;

	    y[1] := 1; y[6] := 0; y[11] := 1; y[16] := 0;

	    y[2] := 0; y[7] := 1; y[12] := 1; y[17] := 1;

	    y[3] := 0; y[8] := 0; y[13] := 0; y[18] := 0;

	    y[4] := 0; y[9] := 0; y[14] := 0; y[19] := 1;

	    // Задаем значения объясняющего
	 порядкового ряда Ord1

	    x1ord[0]
	 := 0; x1ord[5]
	 := 0; x1ord[10]
	 := 1; x1ord[15]
	 := 1;

	    x1ord[1] := 0; x1ord[6] :=
	 0; x1ord[11]
	 := 1; x1ord[16]
	 := -1;

	    x1ord[2] := 0; x1ord[7] :=
	 0; x1ord[12]
	 := 1; x1ord[17]
	 := 0;

	    x1ord[3] := 0; x1ord[8] :=
	 0; x1ord[13]
	 := 1; x1ord[18]
	 := 0;

	    x1ord[4] := 0; x1ord[9] :=
	 1; x1ord[14]
	 := 1; x1ord[19]
	 := 1;

	    // Задаем значения объясняющего
	 порядкового ряда Ord2

	    x2ord[0]
	 := 10; x2ord[5]
	 := 20; x2ord[10]
	 := 10; x2ord[15]
	 := -1;

	    x2ord[1] := 10; x2ord[6] :=
	 20; x2ord[11]
	 := 20; x2ord[16]
	 := 20;

	    x2ord[2] := 10; x2ord[7] :=
	 20; x2ord[12]
	 := 20; x2ord[17]
	 := 20;

	    x2ord[3] := 10; x2ord[8] :=
	 20; x2ord[13]
	 := 20; x2ord[18]
	 := 20;

	    x2ord[4] := 10; x2ord[9] :=
	 10; x2ord[14]
	 := 20; x2ord[19]
	 := 10;

	    // Задаем значения объясняющего
	 количественного ряда

	    x3dbl[0]
	 := 1; x3dbl[5]
	 := 6; x3dbl[10]
	 := 10; x3dbl[15]
	 := 14;

	    x3dbl[1] := 2; x3dbl[6] :=
	 7; x3dbl[11]
	 := 10; x3dbl[16]
	 := 4;

	    x3dbl[2] := 3; x3dbl[7] :=
	 8; x3dbl[12]
	 := 11; x3dbl[17]
	 := 8;

	    x3dbl[3] := 5; x3dbl[8] :=
	 9; x3dbl[13]
	 := 12; x3dbl[18]
	 := 9;

	    x3dbl[4] := 4; x3dbl[9] :=
	 9; x3dbl[14]
	 := 13; x3dbl[19]
	 := 9;

	    // Задаем значение объясняющего
	 категориального ряда

	    x4cat[0]
	 := 21; x4cat[5]
	 := 21; x4cat[10]
	 := 12; x4cat[15]
	 := 13;

	    x4cat[1] := 21; x4cat[6] :=
	 21; x4cat[11]
	 := 12; x4cat[16]
	 := 13;

	    x4cat[2] := 21; x4cat[7] :=
	 12; x4cat[12]
	 := 13; x4cat[17]
	 := 13;

	    x4cat[3] := 21; x4cat[8] :=
	 12; x4cat[13]
	 := 13; x4cat[18]
	 := 13;

	    x4cat[4] := 21; x4cat[9] :=
	 12; x4cat[14]
	 := 13; x4cat[19]
	 := 12;


    // Задаем число итераций

    GB.NumberOfIterations := 5;

    // Задаем коэффициент скорости
 обучения

    GB.LearningRate := 0.15;

    // Задаем параметры, описывающее
 дерево

    TreeSizeSpecification := GB.TreeSizeSpecification;

    TreeSizeSpecification.MaximumNumberOfLevels :=
 1;

    TreeSizeSpecification.MinimumNumberOfCases := 2;

    // Задаем объясняемый ряд
 и настраиваем для него процедуру Binning

    GB.Dependent.Name:="Объясняемый";

    BinningSett := GB.Dependent.BinningSettings;

    BinningSett.DoubleValue := y;

    BinningSett.Method := binningmethod.EqualDepth;

    BinningSett.NumOfCategories := 3;


    // Задаем объясняющие порядковые ряды

    ExpSeries := GB.ExplanatoriesOrdered;

    // Ряд Ord1

    ESeries := ExpSeries.Add;

    ESeries.Value := x1ord;

    ESeries.Name := "Ord1";

    // Ряд Ord2

    ESeries := ExpSeries.Add;

    ESeries.Value := x2ord;

    ESeries.Name := "Ord2";

    // Задаем объясняющий количественный
 ряд

    Series := GB.ExplanatoriesContinuous;

    Serie := Series.Add;

    Serie.Value := x3dbl;

    Serie.Name := "x3dbl";

    // Задаем объясняющий категориальный
 ряд

    ExpSeries := GB.ExplanatoriesCategorical;

    ESeries := ExpSeries.Add;

    ESeries.Value := x4cat;

    ESeries.Name := "Cat1";

    // Задаем параметры кросс-валидации

    CrossValidation := GB.CrossValidation;

    CrossValidation.SamplingType := CrossValidationSamplingType.RandomSampling;

    CrossValidation.NumberOfRandomTests := 15;

    CrossValidation.TrainingSetSize := 60;

    // Задаем параметры ROC-кривой

    ROCcurve := GB.ROCcurve;

    ROCcurve.ConfidenceLevel := 0.85;

    // Выполняем расчет

    res := GB.Execute;

    // Выводим результаты расчета

    If res <>
 0 Then

        Debug.WriteLine("Произошла
 ошибка:");

        Debug.WriteLine(GB.Errors);

    Else

        //
 Выводим начальные и обработанные значения

        Debug.WriteLine("Начальные значения; Обработанные значения;");

        Debug.Indent;

        For
 i := 0 To BinningSett.DoubleValue.Length
 - 1 Do

            str
 := i.ToString + ": ";

            d
 := BinningSett.DoubleValue[i];

            str
 := str + d.ToString + " - ";

            d
 := GB.FilledDependent[i];

            str
 := str + d.ToString + "    ";

            Debug.WriteLine(str);

        End
 For;

        Debug.Unindent;

        //
 Выводим апостериорные вероятности

        Debug.WriteLine("Апостериорные вероятности:");

        Debug.Indent;

        For
 i := 0 To GB.PseudoProbability.GetUpperBound(1) Do

            str
 := i.ToString + ": ";

            For j := 0 To GB.PseudoProbability.GetUpperBound(2) Do

                d
 := GB.PseudoProbability[i, j];

                str
 := str + d.ToString + ", ";

            End For;

            Debug.WriteLine(str);

        End
 For;

        Debug.Unindent;

        //
 Выводим список категорий

        CatList := GB.CategoriesList;

        If
 CatList.Length > 0 Then

            Debug.WriteLine("Список категорий:");

            Debug.Indent;

            For i := 0 To CatList.Length - 1
 Do

                Debug.WriteLine(CatList[i]);

            End For;

            Debug.Unindent;

        End
 If;


        // Выводим сводные результаты классификации

        Debug.WriteLine("Сводные результаты классификации:");

        Debug.Indent;

        str := "";

        For
 i := 0 To GB.ClassificationSummary.GetUpperBound(1) Do

            For j := 0 To GB.ClassificationSummary.GetUpperBound(2) Do

                str
 := str + GB.ClassificationSummary[i, j].ToString + "
 ";

            End For;

            Debug.WriteLine(str);

            str
 := "";

        End
 For;

        Debug.Unindent;

        //
 Выводим результаты расчета процедуры Binning

        Debug.WriteLine("Результаты расчета процедуры Binning:");

        Debug.Indent;

        BinningRes := BinningSett.IntegerValue;

        For
 i := 0 To BinningRes.Length
 - 1 Do

            Debug.WriteLine(BinningRes[i]);

        End
 For;

        Debug.Unindent;

        //
 Выводим результаты кросс-валидации

        GB.ExecuteValidation;

        CrossValPerf := GB.PerformanceScores;

        Debug.WriteLine("Результаты
 кросс-валидации:");

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

        Debug.WriteLine("Корректная
 классификация:");

        Debug.Indent;

        PerformanceMatrix := CrossValPerf.PerformanceMatrix;

        For
 i := 0 To PerformanceMatrix.GetUpperBound(1) Do

            For j := 0 To PerformanceMatrix.GetUpperBound(2)
 Do

                Debug.Write(PerformanceMatrix[i,
 j].ToString + #9);

            End For;

            Debug.WriteLine("");

        End
 For;

        Debug.Unindent;

        Debug.Unindent;

        //
 Выводим данные ROC-кривой

        Debug.WriteLine("Данные
 ROC-кривой:");

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

        //
 Выводим дерево решений

        For
 i := 0 To GB.Trees.Count1
 - 1 Do

            For j := 0 To GB.Trees.Count2 - 1
 Do

                TreeNode
 := GB.Trees.Item(i, j);

                If TreeNode <> Null
 Then

                    Debug.Write("Дерево решений");

                    Debug.WriteLine(" [" + i.ToString + ","
 + j.ToString + "]:");

                    print(TreeNode);

                    Debug.WriteLine("");

                End If;

            End For;

        End For;

        // Выводим критерии качества классификации

        Debug.Unindent;

        Debug.Unindent;

        Debug.WriteLine("Критерии качества классификации");

        Debug.WriteLine("Общая точность: " + GB.RelevanceMeasure.Accuracy.ToString);

        Debug.WriteLine("Ф - оценка: " + GB.RelevanceMeasure.F1.ToString);

        Debug.WriteLine("Количество истинно-положительных значений: " + GB.RelevanceMeasure.TruePositive.ToString);

        Debug.WriteLine("Количество истинно-отрицательных значений: " + GB.RelevanceMeasure.TrueNegative.ToString);

        Debug.WriteLine("Количество ложно-положительных значений: " + GB.RelevanceMeasure.FalsePositive.ToString);

        Debug.WriteLine("Количество ложно-отрицательных значений: " + GB.RelevanceMeasure.FalseNegative.ToString);

    End If;

End Sub UserProc;

// Процедура вывода дерева решений

Sub print(node: IBinaryTreeNode);

Var

    i: Integer;

    Categorical: Boolean = False;

Begin

    Debug.Indent;

    Debug.WriteLine("Вершина
 номер: " + node.NodeIndex.ToString);

    Debug.WriteLine("Число
 кейсов в вершине: " + node.Total.ToString);

    Debug.WriteLine("Индекс
 критерия: " + node.ExplanatorieIndex.ToString);

    Debug.WriteLine("Имя
 критерия: " + node.Name);

    Debug.Write("Тип критерия:
 ");

    Select Case
 node.PropertyType

        Case

            DecisionTreePropertyType.Categorical:
 Debug.WriteLine("категориальный");

            Categorical
 := True;

        Case
 DecisionTreePropertyType.NoProperty: Debug.WriteLine("-");

        Case
 DecisionTreePropertyType.Ordered: Debug.WriteLine("порядковый");

        Case
 DecisionTreePropertyType.Value: Debug.WriteLine("количественный");

    End Select;

    If Not
 Categorical Then

        Debug.WriteLine("Значение
 критерия: " + node.Value.ToString);

    End If;

    Debug.WriteLine("Дисперсия:
 " + node.Disp.ToString);

    Debug.WriteLine("Среднее:
 " + node.Mean.ToString);

    Debug.WriteLine("Сумма
 квадратов остатков: " + node.SSR.ToString);

    If (node.LeftNode
 <> Null) Then

        Debug.WriteLine("Левая
 ветка: ");

        print(node.LeftNode);

    End If;

    If (node.LeftNodeCategories.Length
 <> 0) And
 Categorical Then

        Debug.WriteLine("Список
 категорий, которые отсеиваются в левую ветку: ");

        For
 i := 0 To node.LeftNodeCategories.Length
 - 1 Do

            Debug.WriteLine(node.LeftNodeCategories[i]);

        End
 For;

    End If;

    If (node.RightNode
 <> Null) Then

        Debug.WriteLine("Правая
 ветка: ");

        print(node.RightNode);

    End If;

    If (node.RightNodeCategories.Length
 <> 0) And
 Categorical Then

        Debug.WriteLine("Список
 категорий, которые отсеиваются в правую ветку: ");

        For
 i := 0 To node.RightNodeCategories.Length
 - 1 Do

            Debug.WriteLine(node.RightNodeCategories[i]);

        End
 For;

    End If;

    Debug.Unindent;

End Sub print;


В результате выполнения примера в окно консоли будут выведены результаты
 рассчёта задачи методом градиентного бустинга и критерии качества классификации.


См. также:


[ISmGradientBoostedTree](ISmGradientBoostedTree.htm)


		Справочная
		 система на версию ERROR: Variable (Version_lts) is undefined.
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
