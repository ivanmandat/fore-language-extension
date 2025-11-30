# IMissingData.SpecifiedVector

IMissingData.SpecifiedVector
-


# IMissingData.SpecifiedVector


## Синтаксис


SpecifiedVector: Array;


## Описание


Свойство SpecifiedVector определяет
 дополнительный параметр для методов обработки пропусков «По
 шаблону» ([MissingDataMethod.Pattern](../../Enums/MissingDataMethod.htm))
 и «Значениями заданного ряда»
 ([MissingDataMethod.Overlay](../../Enums/MissingDataMethod.htm)).


## Комментарии


Для данных методов свойство SpecifiedVector
 определяет ряд, на основании которого будут заполняться пропуски в моделируемом
 ряду.


Для других методов обработки пропусков данное свойство неактуально.


## Пример


Для выполнения примера добавьте ссылку на системную сборку Stat.


			Sub UserProc;

Var

    FillGaps:SmFillGapsProcedure;

    Series:ISlSeries;

    serie,OverlaySerie:Array[10] Of Double;

    MD: IMissingData;

    //Процедура вывода данных

    Sub Print(Data: Array Of Double);

    Var i: Integer;

    Begin

        Debug.Indent;

        For i := 0 To Data.Length - 1 Do

            If Double.IsNan(Data[i]) Then

                Debug.WriteLine("----empty---");

            Else

                Debug.WriteLine(i.ToString + "" + Data[i].ToString);

            End If;

        End For;

        Debug.Unindent;

    End Sub Print;

Begin

    FillGaps := New SmFillGapsProcedure.Create;

    //Моделируемый ряд

    serie[0] := 0;

    serie[1] := 0;

    serie[2] := 0.878471616;

    serie[3] := 0.85401205;

    serie[4] := Double.Nan;

    serie[5] := 1.28083579;

    serie[6] := Double.Nan;

    serie[7] := 4.237308214;serie[8]:=4.864879297;

    serie[9] := 7.765499027;

    Series := FillGaps.InputSeries;

    Series.Add.Value := serie;

    //Ряд,из которого будут браться значения для заполнения пропусков

    OverlaySerie[0] := 0;

    OverlaySerie[1] := 1;

    OverlaySerie[2] := 2;

    OverlaySerie[3] := 3;

    OverlaySerie[4] := 4;

    OverlaySerie[5] := 5;

    OverlaySerie[6] := 6;

    OverlaySerie[7] := 7;

    OverlaySerie[8] := 8;

    OverlaySerie[9] := 9;

    Series := FillGaps.InputSeries;

    Series.Add.Value := serie;

    MD := FillGaps.MissingData;

    //Метод обработки пропусков

    MD.Method := MissingDataMethod.Overlay;

    //Дополнительный параметр для методов обработки пропусков «Значениямизаданногоряда»

    MD.SpecifiedVector := OverlaySerie;

    Debug.WriteLine("Исходный ряд");

    Print(Series.Item(0).Value);

    FillGaps.Execute;

    Debug.WriteLine("Полученный ряд");

    Print(Series.Item(0).Value);

End Sub UserProc;


После выполнения примера в окно консоли будет выведен исходный ряд и
 ряд, рассчитанный методом обработки пропусков «Значениями
 заданного ряда».


См. также:


[IMissingData](IMissingData.htm)


		Справочная
		 система на версию ERROR: Variable (Version_lts) is undefined.
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
