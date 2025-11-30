# Array.Length

Array.Length
-


# Array.Length


## Синтаксис


Length: Integer;


## Описание


Свойство Length возвращает количество
 всех элементов в массиве. Результат является произведением количества
 элементов каждого измерения.


## Пример


	Sub UserProc;

	Var

	    Ar: Array[10, 15];

	    Len, i, j: Integer;

	Begin

	    For i := 0 To 9 Do

	        For j := 0 To 14 Do

	            Ar[i, j] := i * j;

	        End For;

	    End For;

	    Len := Ar.Length;

	End Sub UserProc;


После выполнения примера в двумерный массив Ar записываются данные,
 после чего в переменной Len будет содержаться количество элементов в массиве.


См. также:


[Array](Array.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
