# ISmCART.ROCcurve

ISmCART.ROCcurve
-


# ISmCART.ROCcurve


## Синтаксис


ROCcurve: [IROCcurve](../IROCcurve/IROCcurve.htm);


## Описание


Свойство ROCcurve возвращает
 параметры ROC-кривой.


## Комментарии


ROC-кривая - это график, позволяющий оценить качество бинарной классификации.
 ROC-кривая отображает соотношение между долей объектов от общего количества
 носителей признака, верно классифицированных как несущих признак, и долей
 объектов от общего количества объектов, не несущих признака, ошибочно
 классифицированных как несущих признак при варьировании порога решающего
 правила.


Таким образом, ROC-кривая рассчитывается, если объясняемый ряд является
 бинарным.


Для построения ROC-кривой по оси Y откладываются полученные значения
 [чувствительности](../IROCcurve/IROCcurve.Sensitivity.htm),
 а по оси X - [(1 - специфичность)](../IROCcurve/IROCcurve.OneMinusSpecificity.htm).


## Пример


Для выполнения примера добавьте ссылку на системную сборку Stat.


	Sub UserProc;

	Var

	    res, i: Integer;

	    CART: SmCART;

	    ROCcurve: IROCcurve;

	    y: Array[16] Of Integer;

	    x1: Array[16] Of Integer;

	    x2: Array[16] Of Integer;

	    x3dbl: Array[16] Of Double;

	    x4cat: Array[16] Of Integer;

	    OneMinusSpecificity, Sensitivity: Array Of Double;

	Begin

	    // Создаём метод

	    CART := New SmCART.Create;

	    // Задаем исходные данные

	    // Задаем значения, соответствующие возрастной группе

	    y[0] := 1000; y[1] := 1000; y[2] := 1000; y[3] := 1000;

	    y[4] := 1000; y[5] := 1000; y[6] := 1000; y[7] := 1000;

	    y[8] := 1000; y[9] := 5002; y[10] := 5002; y[11] := 5002;

	    y[12] := 5002; y[13] := 5002; y[14] := 5002; y[15] := 5002;

	    // Задаем значения, соответствующие социальному статусу

	    x1[0] := 0; x1[1] := 0; x1[2] := 0; x1[3] := 0;

	    x1[4] := 0; x1[5] := 0; x1[6] := 0; x1[7] := 0;

	    x1[8] := 0; x1[9] := 1; x1[10] := 1; x1[11] := 1;

	    x1[12] := 1; x1[13] := 1; x1[14] := 1; x1[15] := 1;

	    // Задаем значения, соответствующие социальному статусу

	    x2[0] := 10; x2[1] := 10; x2[2] := 10; x2[3] := 10;

	    x2[4] := 10; x2[5] := 20; x2[6] := 20; x2[7] := 20;

	    x2[8] := 20; x2[9] := 10; x2[10] := 10; x2[11] := 20;

	    x2[12] := 20; x2[13] := 20; x2[14] := 20; x2[15] := 20;


    // Задаем значения объясняющего количественного ряда

    x3dbl[0] := 1; x3dbl[1] := 2; x3dbl[2] := 3; x3dbl[3] := 5;

    x3dbl[4] := 4; x3dbl[5] := 6; x3dbl[6] := 7; x3dbl[7] := 8;

    x3dbl[8] := 9; x3dbl[9] := 9; x3dbl[10] := 10; x3dbl[11] := 10;

    x3dbl[12] := 11; x3dbl[13] := 12; x3dbl[14] := 13; x3dbl[15] := 14;

    // Задаем значения объясняющего категориального ряда

    x4cat[0] := 1; x4cat[1] := 1; x4cat[2] := 1; x4cat[3] := 1;

    x4cat[4] := 1; x4cat[5] := 1; x4cat[6] := 1; x4cat[7] := 2;

    x4cat[8] := 2; x4cat[9] := 2; x4cat[10] := 2; x4cat[11] := 2;

    x4cat[12] := 3; x4cat[13] := 3; x4cat[14] := 3; x4cat[15] := 3;

    // Определяем максимальное число уровней в дереве

    CART.TreeSizeSpecification.MaximumNumberOfLevels := 3;

    // Определяем минимальное количество наблюдений, которое может находиться в вершине дерева

    CART.TreeSizeSpecification.MinimumNumberOfCases := 2;

    // Рассматриваем каждую категорию как отдельный признак

    CART.TreeSizeSpecification.ReduceCategories := True;

    // Задаем объясняемый ряд

    CART.Dependent.Value := y;

    // Задаем объясняющие порядковые

    CART.ExplanatoriesOrdered.Add.Value := x1;

    CART.ExplanatoriesOrdered.  Add.Value := x2;

    CART.ExplanatoriesContinuous.Add.Value := x3dbl;

    CART.ExplanatoriesCategorical.Add.Value := x4cat;

    // Выполняем расчёт и выводим значения в окно консоли

    res := CART.Execute;

    ROCcurve := CART.ROCcurve;

    Debug.WriteLine(CART.Errors);

    If res <> 0 Then

        Debug.WriteLine("Произошла ошибка");

    Else

        If ROCcurve <> Null Then

            Debug.WriteLine("Данные ROC-кривой:");

            Debug.Indent;

            Debug.WriteLine("Специфичность:");

            Debug.Indent;

            OneMinusSpecificity := ROCcurve.OneMinusSpecificity;

            For i := 0 To OneMinusSpecificity.Length - 1 Do

                Debug.WriteLine(OneMinusSpecificity[i]);

            End For;

            Debug.Unindent;

            Debug.WriteLine("Чувствительность:");

            Debug.Indent;

            Sensitivity := ROCcurve.Sensitivity;

            For i := 0 To Sensitivity.Length - 1 Do

                Debug.WriteLine(Sensitivity[i]);

            End For;

        End If;

        // Выводим критерии качества классификации

        Debug.Unindent;

        Debug.Unindent;

        Debug.WriteLine(" == Критерии качества классификации == ");

        Debug.WriteLine("Общая точность: " + CART.RelevanceMeasure.Accuracy.ToString);

        Debug.WriteLine("Ф - оценка: " + CART.RelevanceMeasure.F1.ToString);

        Debug.WriteLine("Количество истинно-положительных значений: " + CART.RelevanceMeasure.TruePositive.ToString);

        Debug.WriteLine("Количество истинно-отрицательных значений: " + CART.RelevanceMeasure.TrueNegative.ToString);

    End If;

End Sub UserProc;


В результате выполнения примера в окно консоли будут выведены данные
 ROC-кривой и критерии качества классификации.


См. также:


[ISmCART](ISmCART.htm)


		Справочная
		 система на версию ERROR: Variable (Version_lts) is undefined.
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
