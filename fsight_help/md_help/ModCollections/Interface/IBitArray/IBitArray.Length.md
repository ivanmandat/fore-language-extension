# IBitArray.Length

IBitArray.Length
-


# IBitArray.Length


## Синтаксис


Length: Integer;


## Описание


Свойство Length определяет размер
 битового массива.


## Пример


			Sub UserProc;

Var

    BitArr: IBitArray;

    i: Integer;

Begin

    BitArr := New BitArray.Create;

    BitArr.Length := 15;

    For i := 0 To BitArr.Length - 1 Do

        If Math.Round(Math.Rand, 0) = 1 Then

            BitArr.Item(i) := True;

        Else

            BitArr.Item(i) := False;

        End If;

    End For;

End Sub UserProc;


После выполнения примера будет сгенерирован битовый массив, содержащий
 15 элементов.


См. также:


[IBitArray](IBitArray.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
