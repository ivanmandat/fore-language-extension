# Array.GetType

Array.GetType
-


# Array.GetType


## Синтаксис


GetType: [ForeVariantType](../../Enums/ForeVariantType.htm);


## Описание


Метод GetType возвращает тип
 данных, содержащихся в массиве.


## Пример


	Sub UserProc;

	Var

	    Ar: Array[-5..10, 15] Of Integer;

	    Type, i, j: Integer;

	Begin

	    For i := -5 To 10 Do

	        For j := 0 To 14 Do

	            Ar[i, j] := i * j;

	        End For;

	    End For;

	    Type := Ar.GetType;

	End Sub UserProc;


После выполнения примера в двумерный массив Ar записываются данные и
 в переменной Type будет содержаться номер типа данных в массиве, в данном
 случае число 3, соответствующее целочисленным данным.


См. также:


[Array](Array.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
