# ISmHodrickPrescottFilter.SummaryStatistics

ISmHodrickPrescottFilter.SummaryStatistics
-


# ISmHodrickPrescottFilter.SummaryStatistics


## Синтаксис


SummaryStatistics: [ISummaryStatistics](../ISummaryStatistics/ISummaryStatistics.htm);


## Описание


Свойство SummaryStatistics возвращает
 статистические характеристики.


## Пример


Добавьте ссылку на системную сборку Stat.


			Sub UserProc;

Var

    HP: SmHodrickPrescottFilter;

    s: Array Of Double;

    res: Integer;

    d: Double;

    Sub Print(Data: Array Of Double);

    Var

        i: Integer;

        CI: ICultureInfo;

    Begin

        CI := CultureInfo.Current;

        Debug.WriteLine("---Begin---");

        For i := 0 To Data.Length - 1 Do

            If Double.IsNan(Data[i]) Then

                Debug.WriteLine("---empty---");

            Else

                Debug.WriteLine(i.ToString + ". " + CI.FormatDoublePrec(Data[i], 4));

            End If;

        End For;

        Debug.WriteLine("---End---");

    End Sub Print;

Begin

    s := New Double[15];

    //значения s

    s[00] := 670.2; s[01] := 576.06; s[02] := 717.64;

    s[03] := 856.9; s[04] := 885.4; s[05] := 1011;

    s[06] := 995.44; s[07] := 1064.74; s[08] := 1033.3;

    s[09] := 780.8; s[10] := 657.5; s[11] := 654.5;

    s[12] := 678.23; s[13] := 642.41; s[14] := 751.9;

    HP := New SmHodrickPrescottFilter.Create;

    HP.Serie.Value := s;

    HP.ModelPeriod.FirstPoint := 1;

    HP.ModelPeriod.LastPoint := 15;

    HP.MissingData.Method := MissingDataMethod.SampleAverage;

    HP.SmoothingParameter := 10;

    res := HP.Execute;

    If res <> 0 Then

        Debug.WriteLine(HP.Errors);

    Else

        Debug.WriteLine("Статистические характеристики");

        d := HP.SummaryStatistics.SEE;

        Debug.WriteLine("  - стандартное отклонение остатков: " + d.ToString);

        d := HP.SummaryStatistics.ME;

        Debug.WriteLine("  - среднее остатков: " + d.ToString);

        Debug.WriteLine("Остатки");

        Print(HP.Residuals);

    End If;

End Sub UserProc;


После выполнения примера в окно консоли будут выведены статистические
 характеристики и ряд остатков.


См. также:


[ISmHodrickPrescottFilter](ISmHodrickPrescottFilter.htm)


		Справочная
		 система на версию ERROR: Variable (Version_lts) is undefined.
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
