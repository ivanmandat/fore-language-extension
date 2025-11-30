# ISeasonal.Cycle

ISeasonal.Cycle
-


# ISeasonal.Cycle


## Синтаксис


Cycle: Integer;


## Описание


Свойство Cycle определяет период
 сезонности.


## Пример


Для выполнения примера добавьте ссылку на системную сборку Stat.


			Sub UserProc;

Var

    Method: SmExponentialSmoothing;

    serie: Array Of Double;

    status: Integer;

    Params: IExponentialSmoothingParameters;

    Seasonal: ISeasonal;

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

Begin

    Method := New SmExponentialSmoothing.Create;

    serie := New Double[12];

    serie[0] := 670.2000183;

    serie[1] := 576.0680563;

    serie[2] := 717.6484268;

    serie[3] := 856.9105808;

    serie[4] := 885.4609516;

    serie[5] := 1011.846431;

    serie[6] := 995.4496292;

    serie[7] := 1064.74221;

    serie[8] := Double.nan;

    serie[9] := Double.nan;

    serie[10] := Double.nan;

    serie[11] := 654.5472579;

    Method.Serie.Value := serie;

    Method.Forecast.LastPoint := 20;

    Method.MissingData.Method := MissingDataMethod.LinInterpolation;

    Params := Method.Parameters;

    Seasonal := Method.SeasonalComponent;

    Seasonal.Mode := SeasonalityType.Additive;

    Seasonal.Cycle := 4;

    status := Method.Execute;

    If status <> 0 Then

        Debug.WriteLine(Method.Errors);

    Else

        Debug.WriteLine("Исходный ряд");

        Print(Method.Serie.OriginalValue);

        Debug.WriteLine("Полученный ряд");

        Print(Method.Fitted);

    End If;

End Sub UserProc;


После выполнения примера в окно консоли будет выведен следующий результат:


Выполнение модуля начато


Исходный ряд


---Begin---


670,2000


576,0681


717,6484


856,9106


885,4610


1011,8464


995,4496


1064,7422


---empty---


---empty---


---empty---


654,5473


---End---


Полученный ряд


---Begin---


852,2583


810,6207


794,7104


822,3395


800,2926


780,6532


825,4917


887,8698


859,3552


854,6250


871,3349


905,9156


---End---


Выполнение модуля завершено


См. также:


[ISeasonal](ISeasonal.htm)


		Справочная
		 система на версию ERROR: Variable (Version_lts) is undefined.
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
