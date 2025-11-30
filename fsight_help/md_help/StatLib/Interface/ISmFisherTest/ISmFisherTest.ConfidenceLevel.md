# ISmFisherTest.ConfidenceLevel

ISmFisherTest.ConfidenceLevel
-


# ISmFisherTest.ConfidenceLevel


## Синтаксис


ConfidenceLevel: Double;


## Описание


Свойство ConfidenceLevel определяет
 уровень значимости, при котором гипотеза будет отвергнута.


## Пример


Для выполнения примера добавьте ссылку на системную сборку Stat.


			Sub UserProc;

Var

    Ftest: ISmFisherTest;

    res: Integer;

    mA: Array[7] Of Double;

    mB: Array[9] Of Double;

    SA,SB: ISlFisherTestSample;

Begin

    Ftest := New SmFisherTest.Create;

    mA[0] := 1; mB[0] := 1;

    mA[1] := 2; mB[1] := 2;

    mA[2] := 3; mB[2] := 3;

    mA[3] := 4; mB[3] := 4;

    mA[4] := 5; mB[4] := 10;

    mA[5] := 6; mB[5] := 11;

    mA[6] := 7; mB[6] := 12;

    mB[7] := 13;

    mB[8] := 14;

    SA := Ftest.SampleA;

    SB := Ftest.SampleB;

    SA.Sample.Value := mA;

    SB.Sample.Value := mB;

    Ftest.ConfidenceLevel := 0.05;

    res := Ftest.Execute;

    If res <> 0 Then

        Debug.WriteLine(Ftest.Errors);

    Else

        Debug.WriteLine("Среднее А: " + SA.Average.ToString);

        Debug.WriteLine("Среднее B: "+ SB.Average.ToString);

        Debug.WriteLine("Дисперсия А: "+ SA.Variance.ToString);

        Debug.WriteLine("Дисперсия В:"+ SB.Variance.ToString);

        Debug.WriteLine("Статистика Фишера: " + Ftest.FisherStatistics.ToString);

        Debug.WriteLine("Критическое значение статистики Фишера: " + Ftest.FisherCritical.ToString);

        If Ftest.FisherTestResult Then

            Debug.AssertMsg(False, "Fstat > Fcrit. Гипотезу о равенстве дисперсий принимаем.");

        Else

            Debug.AssertMsg(False, "Fstat < Fcrit. Гипотезу о равенстве дисперсий не принимаем");

        End If;

    End If;

End Sub UserProc;


После выполнения примера в окно консоли будут выведены результаты расчета
 теста:


Выполнение модуля начато


Среднее А: 4


Среднее B: 7.77777777777778


Дисперсия А: 4.66666666666667


Дисперсия В:26.9444444444444


Статистика Фишера: 5.77380952380952


Критическое значение статистики Фишера: 4.1468041622763


Fstat > Fcrit. Гипотезу о равенстве дисперсий
 принимаем.


Выполнение модуля завершено


См. также:


[ISmFisherTest](ISmFisherTest.htm)


		Справочная
		 система на версию ERROR: Variable (Version_lts) is undefined.
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
