# Array.GetLowerBound

Array.GetLowerBound
-


# Array.GetLowerBound


## Синтаксис


GetLowerBound(Dimension: Integer): Integer;


## Параметры


Dimension. Номер
 измерения, у которого необходимо получить нижнюю границу. Нумерация измерений
 начинается с единицы.


## Описание


Метод GetLowerBound возвращает
 нижнюю границу измерения, номер которого передается в качестве входного
 параметра Dimension.


## Пример


	Sub UserProc;

	Var

	    Ar: Array[-5..10, 15];

	    Lower, i, j: Integer;

	Begin

	    For i := -5 To 10 Do

	        For j := 0 To 14 Do

	            Ar[i, j] := i * j;

	        End For;

	    End For;

	    Lower := Ar.GetLowerBound(1);

	End Sub UserProc;


После выполнения примера в двумерный массив Ar записываются данные и
 в переменной Lower будет содержаться нижняя граница первого измерения,
 в данном случае число -5.


См. также:


[Array](Array.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
