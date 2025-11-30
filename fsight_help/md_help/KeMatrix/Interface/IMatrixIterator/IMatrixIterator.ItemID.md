# IMatrixIterator.ItemID

IMatrixIterator.ItemID
-


# IMatrixIterator.ItemID


## Синтаксис


ItemID: Integer;


## Описание


Свойство ItemID возвращает индекс
 элемента, на котором в данный момент находится курсор итератора.


## Пример


Добавьте ссылку на системную сборку Matrix.


	Sub UserProc;

	    Var

	        M: Matrix[1];

	        Mm: IMatrix;

	        Iter: IMatrixIterator;

	        i: Integer;

	    Begin

	        For i := 0 To 10 Do

	            M[i] := i * 2;

	        End For;

	        Mm := M As IMatrix;

	        Iter := Mm.CreateIterator;

	        Iter.Move(IteratorDirection.First);

	        While Iter.Valid Do

	            If (Iter.ItemID Mod 2) = 0 Then

	                Debug.WriteLine("Значение " + Iter.ItemID.ToString + ": " + Iter.Value);

	            End If;

	            Iter.Move(IteratorDirection.Next);

	        End While;

	End Sub UserProc;


После выполнения примера будет создана и заполнена значениями матрица.
 На базе данной матрицы будет получен итератор и в цикле выведены значения
 элементов, имеющих четный индекс в матрице.


См.также:


[IMatrixIterator](IMatrixIterator.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
