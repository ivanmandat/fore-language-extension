# IBitArray.Item

IBitArray.Item
-


# IBitArray.Item


## Синтаксис


Item(Index: Integer): Boolean;


## Параметры


Index.
 Индекс элемента, значение которого необходимо определить.


## Описание


Свойство Item определяет значение
 элемента с указанными индексом.


## Пример


			Sub UserProc;

Var

    BitArr: IBitArray;

    i: Integer;

Begin

    BitArr := New BitArray.Create;

    For i := 0 To Math.RandBetweenI(50, 100) Do

        If Math.Round(Math.Rand, 0) = 1 Then

            BitArr.Item(i) := True;

        Else

            BitArr.Item(i) := False;

        End If;

    End For;

End Sub UserProc;


После выполнения примера будет сгенерирован динамический битовый массив.


См. также:


[IBitArray](IBitArray.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
