# ISmLinearRegress.WeightedSummaryStatistics

ISmLinearRegress.WeightedSummaryStatistics
-


# ISmLinearRegress.WeightedSummaryStatistics


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

    Method: SmLinearRegress;

    can, fra, ger: Array[10] Of Double;

    omega: Array[10, 10] Of Double;

    status, i, j: Integer;

    str: String;

Begin

    Method := New SmLinearRegress.Create;

    // Задаем объясняемый ряд

    can[0] := 6209; fra[0] := 4110; ger[0] := 3415;

    can[1] := 6385; fra[1] := 4280; ger[1] := 3673;

    can[2] := 6528; fra[2] := 4459; ger[2] := 4013;

    can[3] := 6837; fra[3] := 4545; ger[3] := 4278;

    can[4] := 6495; fra[4] := 4664; ger[4] := 4577;

    can[5] := 6907; fra[5] := 4861; ger[5] := 5135;

    can[6] := 7349; fra[6] := 5195; ger[6] := 5388;

    can[7] := 7213; fra[7] := 5389; ger[7] := 5610;

    can[8] := 7061; fra[8] := 5463; ger[8] := 5787;

    can[9] := 7180; fra[9] := 5610; ger[9] := 6181;

    For i := 0 To omega.GetUpperBound(1) - 1 Do

        omega[i, i] := 1 + 0.05*i;

    End For;

    // параметры периода идентификации

    Method.ModelPeriod.FirstPoint := 1;

    Method.ModelPeriod.LastPoint := 10;

    // выбор объясняемой переменной

    Method.Explained.Value := can;

    // выбор регрессоров

    Method.Explanatories.Clear;

    Method.Explanatories.Add.Value := fra;

    Method.Explanatories.Add.Value := ger;

    // Задаем параметры прогнозирования

    Method.Forecast.LastPoint := 10;

    // Признак использования весов

    Method.UseWeights := True;

    // Задаем матрицу ковариаций для обобщенного МНК

    Method.GLSMatrix := omega;

    // Тип весов

    Method.WeightsType := LRWeightsType.StdDeviation;

    // Метод масштабирования весов

    Method.WeightsScaling := WeightsScalingType.Average;

    //Выполняем расчёт и выводим результаты

    status := Method.Execute;

    If status <> 0 Then

        Debug.WriteLine(Method.Errors);

    Else

        Debug.WriteLine("=== Сводные статистики ===");

        Debug.WriteLine(" Коэффициент детерминации: " + Method.WeightedSummaryStatistics.R2.ToString);

        Debug.WriteLine(" Среднее остатков: " + Method.WeightedSummaryStatistics.ME.ToString);

        Debug.WriteLine(" Стандартная ошибка: " + Method.WeightedSummaryStatistics.SE.ToString);

        Debug.WriteLine(" Стандартное отклонение остатков: " + Method.WeightedSummaryStatistics.SEE.ToString);

        Debug.WriteLine("=== Ковариационная матрица ===");

        For i := 0 To Method.CovarianceMatrix.GetUpperBound(1) Do

            str := "";

            For j := 0 To Method.CovarianceMatrix.GetUpperBound(2) Do

                str := str + "  " + (Method.CovarianceMatrix[i, j] As Double).ToString;

            End For;

            Debug.WriteLine(str);

        End For;

    End If;

End Sub UserProc;


После выполнения примера в окно консоли будут выведены значения ковариационной
 матрицы и взвешенные описательные статистики.


См. также:


[ISmLinearRegress](ISmLinearRegress.htm)


		Справочная
		 система на версию ERROR: Variable (Version_lts) is undefined.
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
