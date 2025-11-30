# ISmFisherTest.FisherProbability

ISmFisherTest.FisherProbability
-


# ISmFisherTest.FisherProbability


## Синтаксис


FisherProbability: Double;


## Описание


Свойство FisherProbability возвращает
 значение вероятности статистики Фишера.


## Комментарии


Для получения значения статистики Фишера используйте свойство [ISmFisherTest.FisherStatistics](ISmFisherTest.FisherStatistics.htm).


## Пример


Для выполнения примера добавьте ссылку на системную сборку Stat.


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

        Debug.WriteLine("Статистика Фишера: " + Ftest.FisherStatistics.ToString);

        Debug.WriteLine("Значение вероятности статистики Фишера: " + Ftest.FisherProbability.ToString);

    End If;

End Sub UserProc;


После выполнения примера в окно консоли будут выведены значение статистики
 Фишера и значение вероятности статистики Фишера.


См. также:


[ISmFisherTest](ISmFisherTest.htm)


		Справочная
		 система на версию ERROR: Variable (Version_lts) is undefined.
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
