# ISmPooledModel.RandomEffectsMethod

ISmPooledModel.RandomEffectsMethod
-


# ISmPooledModel.RandomEffectsMethod


## Синтаксис


RandomEffectsMethod: [PooledModelRandomEffectsMethodType](../../Enums/PooledModelRandomEffectsMethodType.htm);


## Описание


Свойство RandomEffectsMethod определяет
 метод расчета случайных эффектов.


## Комментарии


Значение RandomEffectsMethod
 учитывается, если рассчитывается модель со случайными эффектами, т.е.
 [ISmPooledModel.CrossSection](ISmPooledModel.CrossSection.htm)
 = PooledModelCrossSectionType.RandomEffect.


## Пример


Добавьте ссылку на системную сборку Stat.


			Sub UserProc;

Var

    PooledModel: ISmPooledModel;

    yY: Array[6, 2] Of Double;

    X1x, x2x: Array[7, 2] Of Double;

    Coefficients: ICoefficients;

    i, j, Status, MPLastPoint, ForecastValue: Integer;

    StandardError, Estimate, d1, d2: Array Of Double;

Begin

    PooledModel := New SmPooledModel.Create;

    // Объясняемые значения

    yY[0, 0] := 20;  yY[0, 1] := 17;

    yY[1, 0] := 7;   yY[1, 1] := Double.Nan;

    yY[2, 0] := -50; YY[2, 1] := 21;

    yY[3, 0] := 20;  yY[3, 1] := 17;

    yY[4, 0] := 25;  yY[4, 1] := 7;

    yY[5, 0] := -50; YY[5, 1] := 0.1;

    PooledModel.Explained.Value := YY;

    // Объясняющие значения

    x1x[0, 0] := 4;   x1x[0, 1] := -1.5;

    x1x[1, 0] := 0.5; x1x[1, 1] := 5;

    x1x[2, 0] := -2;  x1x[2, 1] := 2.5;

    x1x[3, 0] := 130; x1x[3, 1] := 131;

    x1x[4, 0] := 141; x1x[4, 1] := Double.Nan;

    x1x[5, 0] := 150; x1x[5, 1] := 151;

    x1x[6, 0] := 160; x1x[6, 1] := 161;

    PooledModel.Explanatories.Add.Value := x1x;

    // Веса

    x2x[0, 0] := 3;    x2x[0, 1] := 0.5;

    x2x[1, 0] := 6;    x2x[1, 1] := 1;

    x2x[2, 0] := 0.75; x2x[2, 1] := 2;

    x2x[3, 0] := 230;  x2x[3, 1] := 231;

    x2x[4, 0] := 240;  x2x[4, 1] := 241;

    x2x[5, 0] := 250;  x2x[5, 1] := 251;

    x2x[6, 0] := 260;  x2x[6, 1] := 261;

    PooledModel.Weights := x2x;

    // Период идентификации

    PooledModel.ModelPeriod.FirstPoint := 2;

    PooledModel.ModelPeriod.LastPoint := 5;

    // Последняя точка прогноза

    PooledModel.Forecast.LastPoint := 7;

    // Тип модели

    PooledModel.CrossSection := PooledModelCrossSectionType.RandomEffect;

    // Метод для расчета случайных эффектов

    PooledModel.RandomEffectsMethod := PooledModelRandomEffectsMethodType.SwamyArora;

    // Обработка пропусков

    PooledModel.MissingData.Method := MissingDataMethod.SampleAverage;

    // Расчет и полученные коэффициенты

    Status := PooledModel.Execute;

    Debug.WriteLine(PooledModel.Errors);

    If Status = 0 Then

        Debug.WriteLine("Идиосинкразическое стандартное отклонение:");

        Debug.WriteLine(" " + PooledModel.IdiosyncraticSD.ToString);

        Debug.WriteLine("Стандартное отклонение групповых ошибок:");

        Debug.WriteLine(" " + PooledModel.CrossSectionSD.ToString);

        Coefficients := PooledModel.ModelCoefficients.Coefficients;

        j := Coefficients.Estimate.Length;

        Debug.WriteLine("Значения коэффициентов:");

        For i := 0 To j - 1 Do

            Estimate := Coefficients.Estimate;

            StandardError := Coefficients.StandardError;

            Debug.WriteLine(" " + (i + 1).ToString + ": " + Estimate[i].ToString + ", " + StandardError[i].ToString);

        End For;

        Debug.WriteLine("Модельные ряды");

        For i := 0 To PooledModel.Fitted.GetUpperBound(1) Do

            d1 := PooledModel.Fitted;

            d2 := PooledModel.Fitted;

            Debug.WriteLine(" " + d1[i, 0].ToString + " " + d2[i, 1].ToString);

        End For;

        Debug.WriteLine("Результаты прогнозирования");

        MPLastPoint := PooledModel.ModelPeriod.LastPoint;

        ForecastValue := PooledModel.Forecast.Value.GetUpperBound(1);

        For i := MPLastPoint + 1 To ForecastValue Do

            d1 := PooledModel.Forecast.Value;

            d2 := PooledModel.Forecast.Value;

            Debug.WriteLine(" " + d1[i, 0].ToString + " " + d2[i, 1].ToString);

        End For;

        Debug.WriteLine("Ряд остатков");

        For i := 0 To PooledModel.Residuals.GetUpperBound(1) Do

            d1 := PooledModel.Residuals;

            d2 := PooledModel.Residuals;

            Debug.WriteLine(" " + d1[i,0].ToString + " " + d2[i,1].ToString);

        End For;

    End If;

End Sub UserProc;


Результат выполнения примера: рассчитана модель регрессии на панельных
 данных со случайными эффектами, результаты расчета выведены в окно консоли.


См. также:


[ISmPooledModel](ISmPooledModel.htm)


		Справочная
		 система на версию ERROR: Variable (Version_lts) is undefined.
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
