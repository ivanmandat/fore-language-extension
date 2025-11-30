# ISmGeometricExtrapolation.Residuals

ISmGeometricExtrapolation.Residuals
-


# ISmGeometricExtrapolation.Residuals


## Синтаксис


Residuals: Array;


## Описание


Свойство Residuals возвращает
 ряд остатков.


## Пример


Для выполнения примера добавьте ссылку на системную сборку Stat.


			Sub UserProc;

Var

    GExtra: SmGeometricExtrapolation;

    s, Residuals: Array Of Double;

    res, i: Integer;

    CI: ICultureInfo;

Begin

    s := New Double[15];

    //значения s

    s[00] := 6209;

    s[01] := 6385;

    s[02] := 6752;

    s[03] := 6837;

    s[04] := 6495;

    s[05] := 6907;

    s[06] := 7349;

    s[07] := 7213;

    s[08] := 7061;

    s[09] := 7180;

    s[10] := 7132;

    s[11] := 7137;

    s[12] := 7473;

    s[13] := 7722;

    s[14] := 8088;

    GExtra := New SmGeometricExtrapolation.Create;

    GExtra.Serie.Value := s;

    GExtra.MissingData.Method := MissingDataMethod.Casewise;

    GExtra.ModelPeriod.FirstPoint := 1;

    GExtra.ModelPeriod.LastPoint := 14;

    GExtra.Forecast.LastPoint := 20;

    res := GExtra.Execute;

    If res <> 0 Then

        Debug.WriteLine(GExtra.Errors);

    Else

        Debug.WriteLine("Остатки");

        Residuals := GExtra.Residuals;

        CI := CultureInfo.Current;

        For i := 0 To Residuals.Length-1 Do

            If Double.IsNan(Residuals[i]) Then

                Debug.WriteLine("---empty---");

            Else

                Debug.WriteLine(i.ToString + ": " + CI.FormatDoublePrec(Residuals[i], 4));

            End If;

        End For;

    End If;

End Sub UserProc;


См. также:


[ISmGeometricExtrapolation](ISmGeometricExtrapolation.htm)


		Справочная
		 система на версию ERROR: Variable (Version_lts) is undefined.
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
