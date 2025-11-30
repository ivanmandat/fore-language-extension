# IMatrixModelIterator.Move

IMatrixModelIterator.Move
-


# IMatrixModelIterator.Move


## Синтаксис


Move(Direction: [IteratorDirection](../../Enums/IteratorDirection.htm));


## Параметры


Direction. Параметр, определяющий
 направление перемещения в итераторе.


## Описание


Метод Move осуществляет перемещение
 в указанном направлении.


## Пример


Добавьте ссылку на системную сборку MathFin.


	Sub UserProc;

	Var

	    M: Matrix[2];

	    Mm: IMatrixModel;

	    Iter: IMatrixModelIterator;

	    I, J: Integer;

	Begin

	    Debug.WriteLine("Исходная матрица");

	    For i := 0 To 10 Do

	        For j := 0 To 10 Do

	            M[i, j] := Math.RandBetweenI(0, 9);

	        End For;

	    End For;

	    Mm := M As IMatrixModel;

	    Iter := Mm.CreateModelIterator;

	    Iter.Move(IteratorDirection.First);

	    i := 0;

	    While Iter.Valid Do

	        i := i + 1;

	        Debug.Write(Iter.Value + " ");

	        Iter.Move(IteratorDirection.Next);

	    End While;

	End Sub UserProc;


После выполнения примера, будет создана матрица,
 содержащая случайные значения. На базе данной матрицы будет получен итератор
 и в цикле выведены все значения матрицы.


См. также:


[IMatrixModelIterator](IMatrixModelIterator.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
