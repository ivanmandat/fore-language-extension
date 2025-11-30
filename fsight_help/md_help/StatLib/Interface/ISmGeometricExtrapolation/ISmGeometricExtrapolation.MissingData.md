# ISmGeometricExtrapolation.MissingData

ISmGeometricExtrapolation.MissingData
-


# ISmGeometricExtrapolation.MissingData


## Синтаксис


MissingData: [IMissingData](../IMissingData/IMissingData.htm);


## Описание


Свойство MissingData определяет
 параметры обработки пропусков.


## Комментарии


По умолчанию обработка пропусков не выполняется.


## Пример


Добавьте ссылку на системную сборку Stat.


			Sub UserProc;

Var

    GExtra: SmGeometricExtrapolation;

    s: Array[15] Of Double;

    res, i: Integer;

Begin

    GExtra := New SmGeometricExtrapolation.Create;

    // значения переменных

    s[00] := 6209; s[01] := 6385; s[02] := 6752;

    s[03] := 6837; s[04] := 6495; s[05] := Double.Nan;

    s[06] := 7349; s[07] := 7213; s[08] := 7061;

    s[09] := 7180; s[10] := 7132; s[11] := Double.Nan;

    s[12] := 7473; s[13] := 7722; s[14] := 8088;

    // параметры исходного ряда

    GExtra.Serie.Value := s;

    // метод обработки пропусков

    GExtra.MissingData.Method := MissingDataMethod.LinTrend;

    // период идентификации

    GExtra.ModelPeriod.FirstPoint := 1;

    GExtra.ModelPeriod.LastPoint := 14;

    // прогноз

    GExtra.Forecast.LastPoint := 20;

    // расчет модели и вывод результатов

    res := GExtra.Execute;

    If res <> 0 Then

        Debug.WriteLine(GExtra.Errors);

        Else

            Debug.WriteLine("Модельный ряд");

            Debug.Indent;

            For i := 0 To GExtra.Fitted.Length - 1 Do

                Debug.WriteLine(GExtra.Fitted[i]);

            End For;

            Debug.Unindent;

    End If;

End Sub UserProc;


После выполнения примера в окно консоли будет выведен модельный ряд.


См. также:


[ISmGeometricExtrapolation](ISmGeometricExtrapolation.htm)


		Справочная
		 система на версию ERROR: Variable (Version_lts) is undefined.
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
