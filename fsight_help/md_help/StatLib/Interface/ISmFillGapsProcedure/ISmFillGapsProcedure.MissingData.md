# ISmFillGapsProcedure.MissingData

ISmFillGapsProcedure.MissingData
-


# ISmFillGapsProcedure.MissingData


## Синтаксис


MissingData: [IMissingData](../IMissingData/IMissingData.htm);


## Описание


Свойство MissingData определяет
 метод обработки пропусков.


## Комментарии


По умолчанию обработка пропусков не выполняется.


## Пример


Для выполнения примера добавьте ссылку на системную сборку Stat.


			Sub UserProc;

Var

    Gaps: ISmFillGapsProcedure;

    s1, s2, m: Array[15] Of Double;

    Series: ISlSeries;

    S: ISlSerie;

    res, i, j: Integer;

    d0,d1: Double;

Begin

    Gaps := New SmFillGapsProcedure.Create;

    s1[00] := 2;          s2[00] := 4110;

    s1[01] := 5;          s2[01] := 4280;

    s1[02] := 6;          s2[02] := Double.Nan;

    s1[03] := Double.Nan; s2[03] := 4545;

    s1[04] := Double.Nan; s2[04] := 4664;

    s1[05] := 9;          s2[05] := 4861;

    s1[06] := 10;         s2[06] := 5195;

    s1[07] := 1;          s2[07] := 5389;

    s1[08] := 2;          s2[08] := Double.Nan;

    s1[09] := 2;          s2[09] := Double.Nan;

    s1[10] := 2;          s2[10] := 5948;

    s1[11] := 2;          s2[11] := 6218;

    s1[12] := 2;          s2[12] := 6521;

    s1[13] := Double.Nan; s2[13] := 6788;

    s1[14] := 2;          s2[14] := 7222;

    Gaps.Period.FirstPoint := 1;

    Gaps.Period.LastPoint := 15;

    Series := Gaps.InputSeries;

    Series.Add.Value := s1;

    Series.Add.Value := s2;

    Gaps.MissingData.Method := MissingDataMethod.Geometric;

    res := Gaps.Execute;

    If res <> 0 Then

        Debug.WriteLine(Gaps.Errors);

        Else

            For i := 0 To Series.Count -1 Do

                S := Series.Item(i);

                Debug.WriteLine("=== Ряд " + (i+1).ToString + " ===");

                Debug.WriteLine("Оригинал значений ряда / Полученный ряд");

                Debug.Indent;

                For j := 0 To m.Length - 1 Do

                    d0 := S.OriginalValue[j];

                    d1 := S.Value[j];

                    Debug.WriteLine((j+1).ToString + ". " + d0.ToString + "   /   " + d1.ToString);

                End For;

                Debug.Unindent;

            End For;

    End If;

End Sub UserProc;


После выполнения примера в окно консоли будут выведены оригинальный
 и полученный ряды.


См. также:


[ISmFillGapsProcedure](ISmFillGapsProcedure.htm)


		Справочная
		 система на версию ERROR: Variable (Version_lts) is undefined.
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
