# ISmExponentialSmoothing.ModelPeriod

ISmExponentialSmoothing.ModelPeriod
-


# ISmExponentialSmoothing.ModelPeriod


## Синтаксис


ModelPeriod: [IStatPeriod](../IStatPeriod/IStatPeriod.htm);


## Описание


Свойство ModelPeriod определяет
 параметры периода идентификации.


## Пример


Для выполнения примера добавьте ссылку на системную сборку Stat.


			Sub UserProc;

Var

    Method: SmExponentialSmoothing;

    serie: Array Of Double;

    status: Integer;

    Period: IStatPeriod;

Begin

    Method := New SmExponentialSmoothing.Create;

    serie := New Double[15];

    serie[0] := 670.2000183;

    serie[1] := 576.0680563;

    serie[2] := 717.6484268;

    serie[3] := 856.9105808;

    serie[4] := 885.4609516;

    serie[5] := 1011.846431;

    serie[6] := 995.4496292;

    serie[7] := 1064.74221;

    serie[8] := 1033.324656;

    serie[9] := 780.8584552;

    serie[10] := 657.5033113;

    serie[11] := 654.5472579;

    serie[12] := 678.2380139;

    serie[13] := 642.4128544;

    serie[14] := 751.9611194;

    Method.Serie.Value := serie;

    Method.Forecast.LastPoint := 40;

    Period := Method.ModelPeriod;

    Period.FirstPoint := 4;

    Period.LastPoint := 15;

    Method.MissingData.Method := MissingDataMethod.LinInterpolation;

    status := Method.Execute;

    If status <> 0 Then

        Debug.WriteLine(Method.Errors);

    Else

        Debug.WriteLine("=== Модельный ряд ===");

        Print(Method.Fitted);

    End If;

End Sub UserProc;


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

            Debug.WriteLine(i.ToString + ", " + CI.FormatDoublePrec(Data[i], 4));

        End If;

    End For;

    Debug.WriteLine("---End---");

End Sub Print;


После выполнения примера в окно консоли будут выведены значения модельного
 ряда.


См. также:


[ISmExponentialSmoothing](ISmExponentialSmoothing.htm)


		Справочная
		 система на версию ERROR: Variable (Version_lts) is undefined.
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
