# ISmBinaryModel.CovarianceMatrix

ISmBinaryModel.CovarianceMatrix
-


# ISmBinaryModel.CovarianceMatrix


## Синтаксис


CovarianceMatrix: Array;


## Описание


Свойство CovarianceMatrix возвращает
 значения ковариационной матрицы.


## Комментарии


Необходимо использовать массив типа Double.


## Пример


Для выполнения примера добавьте ссылку на системную сборку Stat.


			Sub UserProc;

Var

    bm: SmBinaryModel;

    can: Array[9] Of Double;

    bin2: Array[5] Of Integer;

    i, j, res: Integer;

    str: String;

    Intercept: IIntercept;

    Explanatory: ISlSerie;

    OriginalValue, Value: Array;

Begin

    bm := New SmBinaryModel.Create;

    // Задаем значения объясняющего ряда

    can[00] := 6.209; can[05] := 5;

    can[01] := 6.385; can[06] := 6;

    can[02] := 6.29; can[07] := 7;

    can[03] := 6.25; can[08] := 8;

    can[04] := 6.1;

    // Задаем значения объясняемого ряда

    bin2[00] := 1; bin2[03] := 0;

    bin2[01] := 1; bin2[04] := 0;

    bin2[02] := 0;

    // Задаем значения первой и последней точек периода идентификации

    bm.ModelPeriod.FirstPoint := 1;

    bm.ModelPeriod.LastPoint := 5;

    // Задаем значение последней точки прогноза

    bm.Forecast.LastPoint := 9;

    // Задаем тип модели

    bm.BinaryDistr := BinaryDistrType.Probit;

    // Задаем значение деления на группы

    bm.ClassificationCutOff := 0.5;

    // Используем начальные значения по умолчанию

    bm.UseDefaultInitValues := False;

    // Задаем точность и максимальное число итераций

    bm.Tolerance := 0.001;

    bm.MaxIteration := 100;

    // Задаём метод оптимизации

    bm.OptimizationMethod := BinaryOptimizationMethod.NewtonRaphson;

    // Задаем способ оценки константы

    Intercept := bm.ModelCoefficients.Intercept;

    Intercept.Mode := InterceptMode.ManualEstimate;

    Intercept.InitValue := 5;

    // Задаем объясняемый ряд

    bm.BinaryExplained := bin2;

    // Задаем объясняющий ряд

    Explanatory := bm.Explanatories.Add;

    Explanatory.Id := "Explanatories_can";

    Explanatory.Name := "can";

    Explanatory.Value := can;

    Explanatory.Include := True;

    Explanatory.InitValue := 6.44;

    // Производим расчет и выводим сообщения об ошибках

    res := bm.Execute;

    // Выводим результаты расчетов

    If (res = 0) Then

        Debug.WriteLine("Ковариационная матрица");

        For i := 0 To bm.CovarianceMatrix.GetUpperBound(2) Do

            str := "";

            For j := 0 To bm.CovarianceMatrix.GetUpperBound(1) Do

                str := str + "  " + (bm.CovarianceMatrix[j, i] As Double).ToString;

            End For;

            Debug.WriteLine(str);

        End For;

        Debug.WriteLine("Исходный ряд");

        For i := 0 To Explanatory.Value.Length - 1 Do

            Debug.WriteLine((i + 1).ToString + ". " + Explanatory.OriginalValue[i].ToString);

        End For;

    End If;

End Sub UserProc;


В результате выполнения примера в окно консоли будут выведены ковариационная
 матрица и исходный ряд.


См. также:


[ISmBinaryModel](ISmBinaryModel.htm)


		Справочная
		 система на версию ERROR: Variable (Version_lts) is undefined.
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
