# ISmExponentialSmoothing.MissingData

ISmExponentialSmoothing.MissingData
-


# ISmExponentialSmoothing.MissingData


## Синтаксис


MissingData: [IMissingData](../IMissingData/IMissingData.htm);


## Описание


Свойство MissingData определяет
 параметры обработки пропусков.


## Комментарии


Если модель рассчитывается с сезонностью, то метод обработки пропусков
 MissingDataMethod.Casewise не
 может быть использован.


## Пример


Для выполнения примера добавьте ссылку на системную сборку Stat.


			Sub UserProc;

Var

    Method: SmExponentialSmoothing;

    serie: Array[15] Of Double;

    Seasonal: ISeasonal;

    status, i: Integer;

Begin

    Method := New SmExponentialSmoothing.Create;

    serie[0] := 670.2000183;  serie[1] := 576.0680563;  serie[2] := Double.Nan;

    serie[3] := 856.9105808;  serie[4] := 885.4609516;  serie[5] := 1011.846431;

    serie[6] := 995.4496292;  serie[7] := 1064.74221;   serie[8] := Double.Nan;

    serie[9] := 717.6484268;  serie[10] := 751.9611194; serie[11] := 654.5472579;

    serie[12] := 678.2380139; serie[13] := 642.4128544; serie[14] := Double.Nan;

    Method.Serie.Value := serie;

    Method.Forecast.LastPoint := 40;

    Method.MissingData.Method := MissingDataMethod.LinInterpolation;

    Seasonal := Method.SeasonalComponent;

    Seasonal.Mode := SeasonalityType.Additive;

    Seasonal.Cycle := 4;

    status := Method.Execute;

    If status <> 0 Then

        Debug.WriteLine(Method.Errors);

        Else

            Debug.WriteLine("=== Модельный ряд ===");

            Debug.Indent;

            For i := 0 To Method.Fitted.Length - 1 Do

                Debug.WriteLine(Method.Fitted[i]);

            End For;

            Debug.Unindent;

    End If;

End Sub UserProc;


После выполнения примера в окно консоли будут выведен модельный ряд.


См. также:


[ISmExponentialSmoothing](ISmExponentialSmoothing.htm)


		Справочная
		 система на версию ERROR: Variable (Version_lts) is undefined.
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
