# Array.GetUpperBound

Array.GetUpperBound
-


# Array.GetUpperBound


## Синтаксис


GetUpperBound(Dimension: Integer): Integer;


## Параметры


Dimension. Номер измерения,
 у которого необходимо получить верхнюю границу. Нумерация измерений начинается
 с единицы.


## Описание


Метод GetUpperBound возвращает
 верхнюю границу измерения, номер которого передается в качестве входного
 параметра Dimension.


## Пример


	Sub UserProc;

	Var

	    Ar: Array[-5..10, 15];

	    Upper, i, j: Integer;

	Begin

	    For i := -5 To 10 Do

	        For j := 0 To 14 Do

	            Ar[i, j] := i * j;

	        End For;

	    End For;

	    Upper := Ar.GetUpperBound(1);

	End Sub UserProc;


После выполнения примера в двумерный массив Ar записываются данные и
 в переменной Upper будет содержаться верхняя граница первого измерения,
 в данном случае число 10.


См. также:


[Array](Array.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
