# ISmPooledModel.CrossSectionSDinit

ISmPooledModel.CrossSectionSDinit
-


# ISmPooledModel.CrossSectionSDinit


## Синтаксис


CrossSectionSDinit: Double;


## Описание


Свойство CrossSectionSDinit
 определяет перекрёстное стандартное отклонение.


## Комментарии


Свойство CrossSectionSDinit
 используется для расчета с сохраненными коэффициентами.


Для получения стандартного отклонения групповых ошибок используйте свойство
 [ISmPooledModel.CrossSectionSD](ISmPooledModel.CrossSectionSD.htm).


## Пример


Для выполнения примера добавьте ссылки на системные сборки Stat, MathFin.


			Sub UserProc;

Var

    PooledModel: ISmPooledModel;

    yY: Array[6, 2] Of Double;

    x1x: Array[7, 2] Of Double;

    Coefficients: ICoefficients;

    Intercept: IIntercept;

    i, j, Status: Integer;

    arr, Effects, StError, Est, TStat, Prob: Array Of Double;

    IntStError, IntEst, IntTStat, IntProb: Double;

    str: String;

Begin

    PooledModel := New SmPooledModel.Create;

    // Объясняемые значения

    yY[0, 0] := 20;    yY[0, 1] := 17;

    yY[1, 0] := 10;    yY[1, 1] := 7;

    yY[2, 0] := -50;   YY[2, 1] := 21;

    yY[3, 0] := 20;    yY[3, 1] := 17;

    yY[4, 0] := 25;    yY[4, 1] := 7;

    yY[5, 0] := -50;   YY[5, 1] := 0.1;

    PooledModel.Explained.Value := YY;

    // Объясняющие значения

    x1x[0, 0] := 4;    x1x[0, 1] := -1.5;

    x1x[1, 0] := 0.5;  x1x[1, 1] := 5;

    x1x[2, 0] := -2;   x1x[2, 1] := 2.5;

    x1x[3, 0] := 130;  x1x[3, 1] := 131;

    x1x[4, 0] := 120;  x1x[4, 1] := 141;

    x1x[5, 0] := 150;  x1x[5, 1] := 151;

    x1x[6, 0] := 160;  x1x[6, 1] := 161;

    PooledModel.Explanatories.Add.Value := x1x;

    PooledModel.Explanatories.Item(0).InitValue:=0.5;

    // Параметры коэффициентов модели

    PooledModel.ModelCoefficients.Intercept.InitValue:=100;

    // Период идентификации

    PooledModel.ModelPeriod.FirstPoint := 1;

    PooledModel.ModelPeriod.LastPoint := 5;

    // Последняя точка прогноза

    PooledModel.Forecast.LastPoint := 7;

    // Тип модели

    PooledModel.CrossSection := PooledModelCrossSectionType.RandomEffect;

    // Метод для расчета случайных эффектов

    PooledModel.RandomEffectsMethod := PooledModelRandomEffectsMethodType.SwamyArora;

    //Задаем, что модель использует сохраненные коэффициенты

    PooledModel.ARMA.MaxIteration:=0;

    PooledModel.ARMA.CalcInitMode:=ARMAInitType.Manual;

    // Перекрёстное стандартное отклонение

    PooledModel.CrossSectionSDinit := 0.030485421521669304;

    // Начальные значения эффектов для расчета без оценивания

    arr:=New Double[PooledModel.Explained.Value.GetUpperBound(2)+1];

    For i:=0 To arr.Length-1 Do

        arr[i]:=(i-1)*math.Power(-1,i+2);

    End For;

    PooledModel.EffectsInits := arr;

    // Спецификации случайных эффектов, для расчета без оценивания

    PooledModel.IdiosyncraticSDinit := 0.31046596048669278;

    // Запускаем расчет

    Status := PooledModel.Execute;

    Debug.WriteLine(PooledModel.Errors);

    If Status = 0 Then

        Debug.WriteLine("Оценки константы:");

        Intercept := PooledModel.ModelCoefficients.Intercept;

            IntEst := Intercept.Estimate;

            IntStError := Intercept.StandardError;

            IntTStat := Intercept.TStatistic;

            IntProb := Intercept.Probability;

            Debug.WriteLine(" " + IntEst.ToString + " "

                + IntStError.ToString + " " + IntTStat.ToString + " " + IntProb.ToString);

        Debug.WriteLine("Оценки коэффициентов модели:");

        Coefficients := PooledModel.ModelCoefficients.Coefficients;

        j := Coefficients.Estimate.Length;

        For i := 0 To j - 1 Do

            Est := Coefficients.Estimate;

            StError := Coefficients.StandardError;

            TStat := Coefficients.TStatistic;

            Prob := Coefficients.Probability;

            Debug.WriteLine(" " + (i + 1).ToString + ": " + Est[i].ToString + " "

                + StError[i].ToString + " " + TStat[i].ToString + " " + Prob[i].ToString);

        End For;

        Debug.WriteLine("Рассчитанные эффекты: ");

        Effects := PooledModel.Effects;

        For i := 0 To PooledModel.Effects.Length-1 Do

            Debug.WriteLine(" " + (i+1).ToString + ": " + Effects[i].ToString);

        End For;

        Debug.WriteLine("Ковариационная матрица");

        For i := 0 To PooledModel.CovarianceMatrix.GetUpperBound(1) Do

            str := "";

            For j := 0 To PooledModel.CovarianceMatrix.GetUpperBound(2) Do

                str := str + "  " + (PooledModel.CovarianceMatrix[i, j] As Double).ToString;

            End For;

            Debug.WriteLine(str);

        End For;

    End If;

End Sub UserProc;


После выполнения примера будет рассчитана модель регрессии на панельных
 данных со случайными эффектами, результаты расчета выведены в окно консоли.


См. также:


[ISmPooledModel](ISmPooledModel.htm)


		Справочная
		 система на версию ERROR: Variable (Version_lts) is undefined.
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
