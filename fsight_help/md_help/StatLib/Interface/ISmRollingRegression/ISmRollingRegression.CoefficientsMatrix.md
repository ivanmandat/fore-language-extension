# ISmRollingRegression.CoefficientsMatrix

ISmRollingRegression.CoefficientsMatrix
-


# ISmRollingRegression.CoefficientsMatrix


## Синтаксис


CoefficientsMatrix: Array;


## Описание


Свойство CoefficientsMatrix возвращает
 матрицу оценок коэффициентов.


## Комментарии


Для получения характеристик оценки используйте свойства [ISmRollingRegression.StandartErrorMatrix](ISmRollingRegression.StandartErrorMatrix.htm),
 [ISmRollingRegression.TStatisticMatrix](ISmRollingRegression.TStatisticMatrix.htm),
 [ISmRollingRegression.PValueMatrix](ISmRollingRegression.PValueMatrix.htm).


## Пример


Для выполнения примера добавьте ссылку на системную сборку Stat.


			Sub UserProc;

Var

    RR: SmRollingRegression;

    Explanatories: ISlSerie;

    can, fra, ger: Array[10] Of Double;

    i, j, res, rows, cols: Integer;

Begin

    RR := New SmRollingRegression.Create;

    Can[0] := 6209; fra[0] := 4110; ger[0] := 3415;

    Can[1] := 6385; fra[1] := 4280; ger[1] := 3673;

    Can[2] := double.Nan; fra[2] := 4459; ger[2] := 4013;

    Can[3] := 6837; fra[3] := 4545; ger[3] := 4278;

    Can[4] := 6495; fra[4] := 4664; ger[4] := 4577;

    Can[5] := 6907; fra[5] := 4861; ger[5] := 5135;

    Can[6] := 7349; fra[6] := 5195; ger[6] := 5388;

    Can[7] := 7213; fra[7] := 5389; ger[7] := 5610;

    Can[8] := 7061; fra[8] := 5463; ger[8] := 5787;

    Can[9] := 7180; fra[9] := 5610; ger[9] := 6181;

    //объясняемый ряд

    RR.Explained.Value := can;

    // объясняющий ряд

    RR.Explanatories.Clear;

    Explanatories := RR.Explanatories.Add;

    Explanatories.Value := fra;

    Explanatories := RR.Explanatories.Add;

    Explanatories.Value := ger;

    // период идентификации

    RR.ModelPeriod.FirstPoint := 1;

    RR.ModelPeriod.LastPoint := 10;

    // метод обработки пропусков - линейный тренд

    RR.MissingData.Method := MissingDataMethod.LinTrend;

    // шаг сдвига окна

    RR.RollingStep := 1;

    // ширина окна скользящей регрессии

    RR.Window := 4;

    // константа модели - константа оценивается автоматически

    RR.Intercept.Mode := InterceptMode.AutoEstimate;

    res := RR.Execute;

    If res = 0 Then

        For i := 0 To RR.WarningsCount - 1 Do

            Debug.WriteLine(RR.Warnings[i])

        End For;

        Debug.WriteLine("==Коэффициенты==");

        rows := RR.CoefficientsMatrix.GetUpperBound(1);

        cols := RR.CoefficientsMatrix.GetUpperBound(2);

        Debug.Indent;

        For i := 0 To rows Do

            For j := 0 To cols Do

                Debug.Write(RR.CoefficientsMatrix[i, j]);

            End For;

            Debug.WriteLine(" ");

        End For;

        Debug.Unindent;

        Debug.WriteLine("==Стандартные ошибки==");

        rows := RR.StandartErrorMatrix.GetUpperBound(1);

        cols := RR.StandartErrorMatrix.GetUpperBound(2);

        Debug.Indent;

        For i := 0 To rows Do

            For j := 0 To cols Do

                Debug.Write(RR.StandartErrorMatrix[i, j]);

            End For;

            Debug.WriteLine(" ");

        End For;

        Debug.Unindent;

        Debug.WriteLine("==Статистики==");

        rows := RR.TStatisticMatrix.GetUpperBound(1);

        cols := RR.TStatisticMatrix.GetUpperBound(2);

        Debug.Indent;

        For i := 0 To rows Do

            For j := 0 To cols Do

                Debug.Write(RR.TStatisticMatrix[i, j]);

            End For;

            Debug.WriteLine(" ");

        End For;

        Debug.Unindent;

        Debug.WriteLine("==Вероятности==");

        rows := RR.PValueMatrix.GetUpperBound(1);

        cols := RR.PValueMatrix.GetUpperBound(2);

        Debug.Indent;

        For i := 0 To rows Do

            For j := 0 To cols Do

                Debug.Write(RR.PValueMatrix[i, j]);

            End For;

            Debug.WriteLine(" ");

        End For;

        Debug.Unindent;

        Debug.WriteLine("==Прогнозный ряд==");

        Debug.Indent;

        For i := 0 To RR.RollingForecast.Length - 1 Do

            Debug.Write(i.ToString + " ");

            Debug.WriteLine(RR.RollingForecast[i]);

        End For;

        Debug.Unindent;

        Else

            Debug.WriteLine(RR.Errors);

    End If;

End Sub UserProc;


После выполнения примера будет создана модель скользящей регрессии,
 определены ее параметры:


	- период идентификации задан вручную;


	- ширина окна скользящей регрессии равна четырем;


	- шаг сдвига окна равен единице.


В окно консоли будут выведены матрица оценки коэффициентов, статистика,
 вероятности, стандартные ошибки и прогнозный ряд.


См. также:


[ISmRollingRegression](ISmRollingRegression.htm) |
 [Скользящая
 регрессия](Lib.chm::/01_Regression_models/Rolling_Regression.htm)


		Справочная
		 система на версию ERROR: Variable (Version_lts) is undefined.
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
