# IChowTestLinRegress.Fitted

IChowTestLinRegress.Fitted
-


# IChowTestLinRegress.Fitted


## Синтаксис


Fitted: Array;


## Описание


Свойство Fitted возвращает модельный
 ряд.


## Комментарии


Значения доступны после расчёта метода.


## Пример


Добавьте ссылку на системную сборку Stat.


	Sub UserProc;

	Var

	    ChowTest: SmChowTest;

	    can, fra, ger, d0: Array Of Double;

	    z: Array Of Integer;

	    res, i: Integer;

	    LR: IChowTestLinRegress;

	Begin

	    ChowTest := New SmChowTest.Create;

	    can := New Double[20];

	    fra := New Double[20];

	    ger := New Double[20];

	    z := New Integer[20];

	    // Задаем значения переменных

	    can[00] := 6209; fra[00] := 4110; ger[00] := 3415; z[00] := 0;

	    can[01] := 6385; fra[01] := 4280; ger[01] := 6385; z[01] := 0;

	    can[02] := 6752; fra[02] := 4459; ger[02] := 6752; z[02] := 0;

	    can[03] := 6837; fra[03] := 4545; ger[03] := 6837; z[03] := 0;

	    can[04] := 6495; fra[04] := 4664; ger[04] := 6495; z[04] := 0;

	    can[05] := 6907; fra[05] := 4861; ger[05] := 6907; z[05] := 0;

	    can[06] := 7349; fra[06] := 5195; ger[06] := 7349; z[06] := 0;

	    can[07] := 7213; fra[07] := 5389; ger[07] := 7213; z[07] := 0;

	    can[08] := 7061; fra[08] := 5463; ger[08] := 7061; z[08] := 0;

	    can[09] := 7180; fra[09] := 5610; ger[09] := 7180; z[09] := 0;

	    can[10] := 7132; fra[10] := 5948; ger[10] := 7132; z[10] := 0;

	    can[11] := 7137; fra[11] := 6218; ger[11] := 7137; z[11] := 0;

	    can[12] := 7473; fra[12] := 6521; ger[12] := 7473; z[12] := 1;

	    can[13] := 7722; fra[13] := 6788; ger[13] := 7722; z[13] := 1;

	    can[14] := 8088; fra[14] := 7222; ger[14] := 8088; z[14] := 1;

	    can[15] := 8516; fra[15] := 7486; ger[15] := 8516; z[15] := 1;

	    can[16] := 8941; fra[16] := 7832; ger[16] := 8941; z[16] := 1;

	    can[17] := 9064; fra[17] := 8153; ger[17] := 9064; z[17] := 1;

	    can[18] := 9380; fra[18] := 8468; ger[18] := 9380; z[18] := 1;

	    can[19] := 9746; fra[19] := 9054; ger[19] := 9746; z[19] := 1;


    // Задаем объясняемую переменную

    ChowTest.Explained.Value := can;

    // Задаем объясняющие переменные

    ChowTest.Explanatories.Add.Value := fra;

    ChowTest.Explanatories.Add.Value := ger;

    // Задаем группы наблюдений

    ChowTest.GroupSeparator := z;

    // Используем автоматическую оценку значения константы

    ChowTest.Intercept.Mode := InterceptMode.AutoEstimate;

    // Задаем параметры периода идентификации

    ChowTest.ModelPeriod.FirstPoint := 1;

    ChowTest.ModelPeriod.LastPoint := 20;

    // Задаем тип теста

    ChowTest.TestType := ChowTestType.BreakPoint;

    // Выполняем расчёт и выводим результаты

    res := ChowTest.Execute;

    If res <> 0 Then

        Debug.WriteLine(ChowTest.Errors);

        Else

            If ChowTest.ChowTestResult Then

                Debug.WriteLine("Нулевая гипотеза принимается")

            Else

                Debug.WriteLine("Нулевая гипотеза не принимается");

            End If;

            Debug.WriteLine("Модельный ряд:");

            Debug.WriteLine("LR0:");

            LR := ChowTest.LR0;

            For i := 0 To LR.Fitted.Length - 1 Do

                Debug.WriteLine(LR.Fitted[i]);

            End For;

            Debug.WriteLine("LR1:");

            LR := ChowTest.LR1;

            For i := 0 To LR.Fitted.Length - 1 Do

                Debug.WriteLine(LR.Fitted[i]);

            End For;


            Debug.WriteLine("Остатки:");

            Debug.WriteLine("LR0:");

            LR := ChowTest.LR0;

            For i := 0 To LR.Residuals.Length - 1 Do

                Debug.WriteLine(LR.Residuals[i]);

            End For;

            Debug.WriteLine("LR1:");

            LR := ChowTest.LR1;

            For i := 0 To LR.Residuals.Length - 1 Do

                Debug.WriteLine(LR.Residuals[i]);

            End For;

            Debug.WriteLine("Критерий Акаике:");

            Debug.WriteLine("LR0: " + ChowTest.LR0.SummaryStatistics.AIC.ToString);

            Debug.WriteLine("LR1: " + ChowTest.LR1.SummaryStatistics.AIC.ToString);

    End If;

End Sub UserProc;


После выполнения примера в окно консоли будут выведены результаты расчетов
 теста: модельный ряд, остатки и статистические характеристики, также выведено
 сообщение, что нулевая гипотеза об отсутствии структурных изменений не
 принимается.


См. также:


[IChowTestLinRegress](IChowTestLinRegress.htm)


		Справочная
		 система на версию ERROR: Variable (Version_lts) is undefined.
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
