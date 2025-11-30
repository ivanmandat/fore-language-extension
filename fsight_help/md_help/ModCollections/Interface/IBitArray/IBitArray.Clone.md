# IBitArray.Clone

IBitArray.Clone
-


# IBitArray.Clone


## Синтаксис


Clone: [IBitArray](IBitArray.htm);


## Описание


Метод Clone создает копию массива.


## Пример


			Sub UserProc;

Var

    BitArr, BitArr1: IBitArray;

    i: Integer;

Begin

    BitArr := New BitArray.Create;

    BitArr1 := New BitArray.Create;

    For i := 0 To Math.RandBetweenI(50, 100) Do

        If Math.Round(Math.Rand, 0) = 1 Then

            BitArr.Item(i) := True;

        Else

            BitArr.Item(i) := False;

        End If;

    End For;

    BitArr1 := BitArr.Clone;

End Sub UserProc;


После выполнения примера в массиве «BitArr» будет содержаться копия
 массива «BitArr1».


См. также:


[IBitArray](IBitArray.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
