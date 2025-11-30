# ISmRandomForest.ROCcurve

ISmRandomForest.ROCcurve
-


# ISmRandomForest.ROCcurve


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

		    RF: SmRandomForest;

		    ROCCurve: IROCcurve;

		    y: Array[16] Of Integer;

		    x3dbl: array[16] Of Double;

		    i, res: Integer;

		    OneMinusSpecificity, Sensitivity: Array Of Double;

		Begin

		    // Создаём метод

		    RF := New SmRandomForest.Create;

		    // Задаем исходные данные

		    // Задаем значения, соответствующие возрастной группе

		    y[0] := 5; y[1] := 5; y[2] := 5; y[3] := 5;

		    y[4] := 5; y[5] := 5; y[6] := 5; y[7] := 5;

		    y[8] := 1; y[9] := 1; y[10] := 1; y[11] := 1;

		    y[12] := 1; y[13] := 1; y[14] := 1; y[15] := 1;

		    // Задаем значения объясняющего количественного ряда

		    x3dbl[0] := 1.1; x3dbl[1] := 2.1;   x3dbl[2] := 3;  x3dbl[3] := 5;

		    x3dbl[4] := 40; x3dbl[5] := 6; x3dbl[6] := 7; x3dbl[7] := 8;

		    x3dbl[8] := 9; x3dbl[9] := 9; x3dbl[10] := 10; x3dbl[11] := 10;

		    x3dbl[12] := 11; x3dbl[13] := 12; x3dbl[14] := 13; x3dbl[15] := 1.4;

		    // Определяем параметры метода

		    RF.ForestSize := 20;

		    RF.NumberOfPredictors := 2;

		    RF.LearningSamplePortion := 0.67;

		    // Определяем размер деревьев

		    RF.TreeSizeSpecification.MaximumNumberOfLevels := 10;

		    RF.TreeSizeSpecification.MinimumNumberOfCases := 2;

		    // Задаем объясняемый ряд

		    RF.Dependent.Value := y;

		    // Задаем объясняющие порядковые

		    RF.ExplanatoriesContinuous.Add.Value := x3dbl;

		    // Выполняем расчёт и выводим значения в окно консоли

		    res := RF.Execute;

		    ROCCurve := RF.ROCcurve;

		    Debug.WriteLine(RF.Errors);

		    Debug.WriteLine(RF.Forest.Count.ToString);

		    If res <> 0 Then

		        Debug.WriteLine("Произошла ошибка");

		    Else

		        If ROCCurve <> Null Then

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

		        Debug.WriteLine("Критерии качества классификации");

		        Debug.WriteLine("Общая точность: " + RF.RelevanceMeasure.Accuracy.ToString);

		        Debug.WriteLine("Ф - оценка: " + RF.RelevanceMeasure.F1.ToString);

		        Debug.WriteLine("Количество истинно-положительных значений: " + RF.RelevanceMeasure.TruePositive.ToString);

		        Debug.WriteLine("Количество истинно-отрицательных значений: " + RF.RelevanceMeasure.TrueNegative.ToString);

		        Debug.WriteLine("Количество ложно-положительных значений: " + RF.RelevanceMeasure.FalsePositive.ToString);

		        Debug.WriteLine("Количество ложно-отрицательных значений: " + RF.RelevanceMeasure.FalseNegative.ToString);

		    End If;

		End Sub UserProc;


В результате выполнения примера в окно консоли будут выведены данные
 ROC-кривой и критерии качества классификации.


См. также:


[ISmRandomForest](ISmRandomForest.htm)


		Справочная
		 система на версию ERROR: Variable (Version_lts) is undefined.
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
