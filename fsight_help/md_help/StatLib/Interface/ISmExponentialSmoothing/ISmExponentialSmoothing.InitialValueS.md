# ISmExponentialSmoothing.InitialValueS

ISmExponentialSmoothing.InitialValueS
-


# ISmExponentialSmoothing.InitialValueS


## Синтаксис


InitialValueS: Double;


## Описание


Свойство InitialValueS определяет
 начальную точку сезонной составляющей.


## Комментарии


Если данное значение не задается, то оно будет рассчитано автоматически.
 Формула расчета зависит от выбранных параметров модели.


## Пример


Для выполнения примера добавьте ссылку на системную сборку Stat.


			Sub UserProc;

Var

    Method: SmExponentialSmoothing;

    serie: Array Of Double;

    status: Integer;

    Params: IExponentialSmoothingParameters;

    Seasonal: ISeasonal;

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

    Seasonal := Method.SeasonalComponent;

    Seasonal.Mode := SeasonalityType.Additive;

    Seasonal.Cycle := 4;

    Method.TrendComponent := TrendType.Damped;

    Params := Method.Parameters;

    Params.Alpha := 0.15;

    Params.Delta := 0.2;

    Params.Phi := 0.15;

    status := Method.Execute;

    If status <> 0 Then

        Debug.WriteLine(Method.Errors);

    Else

        Debug.WriteLine("=== Начальное значение сезонной составляющей ===");

        Debug.WriteLine(Method.InitialValueS);

        Debug.WriteLine("=== Начальное значение линии тренда ===");

        Debug.WriteLine(Method.InitialValueT);

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

            Debug.WriteLine(CI.FormatDoublePrec(Data[i], 4));

        End If;

    End For;

    Debug.WriteLine("---End---");

End Sub Print;


После выполнения примера в окно консоли будут выведены начальное значение
 сезонной составляющей, начальное значение линии тренда, модельный ряд.


См. также:


[ISmExponentialSmoothing](ISmExponentialSmoothing.htm)


		Справочная
		 система на версию ERROR: Variable (Version_lts) is undefined.
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
