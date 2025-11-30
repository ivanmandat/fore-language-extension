# Array.Rank

Array.Rank
-


# Array.Rank


## Синтаксис


Rank: Integer;


## Описание


Свойство Rank возвращает количество
 измерений в массиве.


## Пример


	Sub UserProc;

	Var

	    Ar: Array[10, 15];

	    Rank, i, j: Integer;

	Begin

	    For i := 0 To 9 Do

	        For j := 0 To 14 Do

	            Ar[i, j] := i * j;

	        End For;

	    End For;

	    Rank := Ar.Rank;

	End Sub UserProc;


После выполнения примера в двумерный массив Ar записываются данные,
 после чего в переменной Rank будет содержаться количество измерений в
 массиве, в данном случае число 2.


См. также:


[Array](Array.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
