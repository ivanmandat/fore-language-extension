# ISmPooledModel.WeightedSummaryStatistics

ISmPooledModel.WeightedSummaryStatistics
-


# ISmPooledModel.WeightedSummaryStatistics


## Синтаксис


WeightedSummaryStatistics: [ISummaryStatistics](../ISummaryStatistics/ISummaryStatistics.htm);


## Описание


Свойство WeightedSummaryStatistics
 возвращает взвешенные описательные статистики модели.


## Комментарии


Описательные статистики рассчитываются по общим формулам. Статистики,
 не актуальные для данной модели, рассчитаны не будут.


## Пример


Для выполнения примера добавьте ссылку на системную сборку Stat.


			Sub UserProc;

Var

    PooledModel: ISmPooledModel;

    yY: Array[6, 2] Of Double;

    x1x, x2x: Array[7, 2] Of Double;

    Constan: IIntercept;

    Status, i: Integer;

    d1,d2: Array Of Double;

Begin

    PooledModel := New SmPooledModel.Create;

    // Объясняемые значения

    yY[0, 0] := 20;  yY[0, 1] := 17;

    yY[1, 0] := 7;   yY[1, 1] := 28;

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

    x1x[4, 0] := 141; x1x[4, 1] := 145;

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

    PooledModel.ModelPeriod.FirstPoint := 1;

    PooledModel.ModelPeriod.LastPoint := 5;

    // Последняя точка прогноза

    PooledModel.Forecast.LastPoint := 7;

    // Веса

    PooledModel.GLSWeights := GLSWeightsType.PeriodWeights;

    // Тип модели

    PooledModel.CrossSection := PooledModelCrossSectionType.None;

    // Параметры коэффициентов модели

    Constan := PooledModel.ModelCoefficients.Intercept;

    Constan.Mode := InterceptMode.None;

    //Запускаем расчет

    Status := PooledModel.Execute;

    If Status = 0 Then

        Debug.WriteLine("=== Взвешенные
 описательные статистики ===");

        Debug.WriteLine(" Коэффициент детерминации: " + PooledModel.WeightedSummaryStatistics.R2.ToString);

        Debug.WriteLine(" Среднее остатков: " + PooledModel.WeightedSummaryStatistics.ME.ToString);

        Debug.WriteLine(" Стандартная ошибка: " + PooledModel.WeightedSummaryStatistics.SE.ToString );

        Debug.WriteLine(" Стандартное отклонение остатков: " + PooledModel.WeightedSummaryStatistics.SEE.ToString);

        Debug.WriteLine("=== Описательные статистики ===");

        Debug.WriteLine(" Коэффициент детерминации: " + PooledModel.SummaryStatistics.R2.ToString);

        Debug.WriteLine(" Среднее остатков: " + PooledModel.SummaryStatistics.ME.ToString);

        Debug.WriteLine(" Стандартная ошибка: " + PooledModel.SummaryStatistics.SE.ToString);

        Debug.WriteLine(" Стандартное отклонение остатков: " + PooledModel.SummaryStatistics.SEE.ToString);

        Debug.WriteLine("=== Остатки ===");

        For i := 0 To PooledModel.Residuals.GetUpperBound(1) Do

            d1 := PooledModel.Residuals;

            d2 := PooledModel.Residuals;

            Debug.WriteLine(" " + d1[i,0].ToString + " " + d2[i,1].ToString);

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
