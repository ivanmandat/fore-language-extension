# ISmErrorCorrectionModel.CointegralCount

ISmErrorCorrectionModel.CointegralCount
-


# ISmErrorCorrectionModel.CointegralCount


## Синтаксис


CointegralCount: Integer;


## Описание


Свойство CointegralCount определяет
 число коинтеграционных связей.


## Комментарии


Значение свойства должно быть не меньше единицы и меньше числа эндогенных
 переменных.


## Пример


Для выполнения примера добавьте ссылку на системную сборку Stat.


	Sub UserProc;

	Var

	    ECM: ISmErrorCorrectionModel;

	    Series, SE, TStat: ISlSeries;

	    Eqs: ISlEquations;

	    Eq: ISlEquation;

	    can, fra, ger, us, uk: Array[15] Of Double;

	    ARO: Array[1] Of Integer;

	    CI: Array Of Double;

	    i, res: Integer;

	    d: Double;

	    Sub Print(Data: Array Of Double);

	    Var

	        i: Integer;

	    Begin


        Debug.WriteLine("---Begin---");

        For i := 0 To Data.Length - 1 Do

            If Double.IsNan(Data[i]) Then

                Debug.WriteLine("---empty---");

            Else

                Debug.WriteLine(i.ToString + ", " + Data[i].ToString);

            End If;

        End For;

        Debug.WriteLine("---End---");

    End Sub Print;

Begin

     // значения can, fra, ger, uk, us


    can[00] := 6209; fra[00] := 4110; ger[00] := 3415; uk[00] := 5320; us[00] := 8680;

    can[01] := 6385; fra[01] := 4280; ger[01] := 3673; uk[01] := 5484; us[01] := 9132;

    can[02] := 6752; fra[02] := 4459; ger[02] := 4013; uk[02] :=5517; us[02] :=9213;

    can[03] := 6837; fra[03] := 4545; ger[03] := 4278; uk[03] :=5791; us[03] :=9450;

    can[04] := double.Nan; fra[04] := 4664; ger[04] := 4577; uk[04] := 5971; us[04] := 9177;

    can[05] := 6907; fra[05] := 4861; ger[05] := 5135; uk[05] :=6158; us[05] :=9756;

    can[06] := 7349; fra[06] := 5195; ger[06] := 5388; uk[06] :=6238; us[06] :=9756;

    can[07] := 7213; fra[07] := 5389; ger[07] := 5610; uk[07] :=6322; us[07] :=9724;

    can[08] := 7061; fra[08] := 5463; ger[08] := 5787; uk[08] := 6340; us[08] := 9476;

    can[09] := 7180; fra[09] := 5610; ger[09] := 6181; uk[09] :=6569; us[09] :=9913;

    can[10] := 7132; fra[10] := 5948; ger[10] := 6633; uk[10] := 6813; us[10] := 9974;

    can[11] := 7137; fra[11] := 6218; ger[11] := 6910; uk[11] :=6974; us[11] :=10046;

    can[12] := 7473; fra[12] := 6521; ger[12] := 7146; uk[12] :=6994; us[12] :=10467;

    can[13] := 7722; fra[13] := 6788; ger[13] := 7248; uk[13] := 7220; us[13] := 10740;

    can[14] := 8088; fra[14] := 7222; ger[14] := 7689; uk[14] :=7570; us[14] :=11157;

    ARO[0] := 1;

    ECM := New SmErrorCorrectionModel.Create;


     // Параметры периода идентификации

    Ecm.ModelPeriod.FirstPoint := 1;

    Ecm.ModelPeriod.LastPoint := 15;

     // Уравнения

    Eqs := ECM.Equations;

     // 1-е уравнение

    Eq := Eqs.Add;

    Eq.Serie.Value := can;

    Series := Eq.ExogenousVariables;

    Series.Add.Value := us;

    Series.Add.Value := uk;

    Eq.AutoRegressionOrder := ARO;

    Eq.Forecast.LastPoint := 15;

    Eq.Trend.Mode := InterceptMode.AutoEstimate;

     // 2-е уравнение

    Eq := Eqs.Add;

    Eq.Serie.Value := fra;

    Series := Eq.ExogenousVariables;

    Series.Add.Value := us;

    Eq.AutoRegressionOrder := ARO;

    Eq.Forecast.LastPoint := 15;

    Eq.Trend.Mode := InterceptMode.AutoEstimate;

     // 3-е уравнение

    Eq := Eqs.Add;


    Eq.Serie.Value := Ger;

    Series := Eq.ExogenousVariables;

    Series.Add.Value := uk;

    Eq.AutoRegressionOrder := ARO;

    Eq.Forecast.LastPoint := 15;

    Eq.Trend.Mode := InterceptMode.AutoEstimate;

     // Количество коинтеграционных связей

    ECM.CointegralCount := 2;

     // Тип модели

    ECM.ModelType := ECMType.QTrendTrend;

     // Параметры метода обработки пропусков

    ECM.MissingData.Method := MissingDataMethod.LinTrend;

     // Расчёт метода и вывод результатов

    res := Ecm.Execute;

    If res <> 0 Then

        Debug.WriteLine(Ecm.Errors);

    Else

        Debug.WriteLine(" == Коинтеграционные уравнения == ");

        Series := Ecm.CointegralEquations;

        For i := 0 To Series.Count - 1 Do

            CI := Series.Item(i).Value;

            Print(CI);

        End For;

        Debug.WriteLine(" == Стандартные ошибки коинтегральных уравнений == ");

        SE := Ecm.CointegralEquationsSE;

        For i := 0 To SE.Count - 1 Do

            CI := SE.Item(i).Value;

            Print(CI);


        End For;

        Debug.WriteLine(" == t-статистики коэффициентов коинтегральных уравнений == ");

        TStat := Ecm.CointegralEquationsTstat;

        For i := 0 To SE.Count - 1 Do

            CI := SE.Item(i).Value;

            Print(CI);

        End For;

        Debug.WriteLine(" == Коэффициенты при коинтеграционных связях == ");

        For i := 0 To Eqs.Count - 1 Do

            Eq := Eqs.Item(i);

            CI := Eq.CointegralCoefficients.Estimate;

            Print(CI);

        End For;

        Debug.WriteLine(" == Значения констант == ");

        For i := 0 To Eqs.Count - 1 Do

            Eq := Eqs.Item(i);

            Debug.WriteLine(Eq.Trend.Estimate);

        End For;

        Debug.WriteLine("=== Критерий Акаике === ");

        d := Ecm.VARStatistics.AIC;

        Debug.WriteLine(d);

        Debug.WriteLine("=== Критерий Шварца ===");

        d := Ecm.VARStatistics.SC;

        Debug.WriteLine(d);

    End If;

End Sub UserProc;


Результат выполнения процедуры: заданы параметры модели коррекции ошибок
 с трендом и константой в авторегрессии и коинтеграционном уравнении, с
 квадратичным трендом в данных. Выполнен расчёт модели, результаты выведены
 в окно консоли.


См. также:


[ISmErrorCorrectionModel](ISmErrorCorrectionModel.htm)


		Справочная
		 система на версию ERROR: Variable (Version_lts) is undefined.
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
