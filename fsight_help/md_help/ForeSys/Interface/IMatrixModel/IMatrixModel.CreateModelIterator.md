# IMatrixModel.CreateModelIterator

IMatrixModel.CreateModelIterator
-


# IMatrixModel.CreateModelIterator


## Синтаксис


CreateModelIterator: [IMatrixModelIterator](../IMatrixModelIterator/IMatrixModelIterator.htm);


## Описание


Метод CreateModelIterator создает
 итератор, используемый для навигации по матрице.


## Пример


	Sub UserProc;

	Var

	    M: Matrix[2];

	    Mm: IMatrixModel;

	    Iter: IMatrixModelIterator;

	    I, J: Integer;

	Begin

	    For i := 0 To 10 Do

	        For j := 0 To 10 Do

	            M[i, j] := Math.RandBetweenI(0, 9);

	        End For;

	    End For;

	    Mm := M As IMatrixModel;

	    Iter := Mm.CreateModelIterator;

	    Iter.Move(IteratorDirection.First);

	    Debug.WriteLine("Просмотр матрицы в итераторе:");

	    While Iter.Valid Do

	        Debug.Write(Iter.Value + " ");

	        Iter.Move(IteratorDirection.Next);

	    End While;

	End Sub UserProc;


После выполнения примера будет создана матрица, содержащая случайные
 значения. На базе данной матрицы будет получен итератор и в цикле в консоль
 среды разработки выведены все значения матрицы.


См. также:


[IMatrixModel](IMatrixModel.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
