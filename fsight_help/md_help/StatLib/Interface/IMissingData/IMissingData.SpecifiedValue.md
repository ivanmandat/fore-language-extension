# IMissingData.SpecifiedValue

IMissingData.SpecifiedValue
-


# IMissingData.SpecifiedValue


## Синтаксис


SpecifiedValue: Double;


## Описание


Свойство SpecifiedValue определяет дополнительный параметр для метода обработки пропусков «Указанное значение» ([MissingDataMethod.SpecifiedValue](../../Enums/MissingDataMethod.htm)).


## Комментарии


Для данного метода свойство SpecifiedValue определяет значение, которым будут заполнены пропуски моделируемого ряда.


Для других методов обработки пропусков данное свойство неактуально.


## Пример


Для выполнения примера добавьте ссылку на системную сборку Stat.


			Sub UserProc;

Var

    LR: ISmLinearRegress;

    serie: Array[10] Of Double;

    MD: IMissingData;

    i, res: Integer;

Begin

    LR := New SmLinearRegress.Create;

    serie[0] := 0;

    serie[1] := 0;

    serie[2] := 0.878471616;

    serie[3] := 0.85401205;

    serie[4] := 3.785177462;

    serie[5] := Double.Nan;

    serie[6] := 5.345764494;

    serie[7] := Double.Nan;

    serie[8] := 4.864879297;

    serie[9] := 7.765499027;

    LR.Explained.Value := serie;

    MD := LR.MissingData;

    // Дополнительный параметр для метода обработки пропусков «Указанное значение»
    MD.Method := MissingDataMethod.SpecifiedValue;

    MD.SpecifiedValue := 2.22;

    res := LR.Execute;

    Debug.WriteLine("Полученный ряд");

    Debug.Indent;

    For i := 0 To LR.Explained.Value.Length - 1 Do

        Debug.WriteLine(LR.Explained.Value[i]);

    End For;

    Debug.Unindent;

    Debug.WriteLine("Исходный ряд");

    Debug.Indent;

    For i := 0 To LR.Explained.OriginalValue.Length - 1 do

        Debug.WriteLine(LR.Explained.OriginalValue[i]);

    End For;

    Debug.Unindent;

End Sub UserProc;


После выполнения примера в окно консоли будет выведен исходный ряд и ряд, рассчитанный методом обработки пропусков «Указанное значение».


См. также:


[IMissingData](IMissingData.htm)


		Справочная
		 система на версию ERROR: Variable (Version_lts) is undefined.
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
