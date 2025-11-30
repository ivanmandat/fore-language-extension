# IMatrixIterator.SetValueFlagEx

IMatrixIterator.SetValueFlagEx
-


# IMatrixIterator.SetValueFlagEx


## Синтаксис


SetValueFlagEx(lAnd: Integer; lOr: Integer);


## Параметры


lAnd - значение с которым будет
 выполняться поразрядная операция And.


lOr - значение с которым будет
 выполняться поразрядная операция Or.


## Описание


Метод SetValueFlagEx осуществляет
 поразрядные операции со значением флага элемента. Сначала выполняется
 поразрядная операция And с текущим
 флагом элемента и значением параметра lAnd,
 затем выполняется поразрядная операция Or
 с полученным после первой операции значением и значением параметра lOr.


## Пример


		 ValueFlag
		 lAnd
		 lOr


		 3 (11)
		 2(10)
		 5(101)


При вызове метода SetValueFlagEx
 для измененного элемента, сначала осуществляется вычисление операции (2
 And 3)=(11 And 10)=2(10). Затем вычисляется (2 Or 5)=(10 Or 101)=7(111).
 Результирующее значение флага для данного элемента будет установлено 7.


## Пример


Добавьте ссылку на системную сборку Matrix.


	Sub UserProc;

	    Var

	        M: Matrix[2];

	        Mm: IMatrix;

	        Iter: IMatrixIterator;

	        Coord: IMatrixCoord;

	        x, y: Integer;

	    Begin

	        For x := 0 To 4 Do

	            For y := 0 To 4 Do

	                M[x, y] := Math.RandBetweenI(0, 9);

	            End For;

	        End For;

	        Mm := M As IMatrix;

	        Mm.ValueFlag := 3;

	        Coord := Mm.CreateCoord;

	        Coord.Item(0) := Math.RandBetweenI(0, 4);

	        Coord.Item(1) := Math.RandBetweenI(0, 4);

	        Iter := Mm.CreateIterator;

	        Iter.PutCoord(Coord);

	        Iter.Value := 10;

	        Iter.Move(IteratorDirection.First);

	        While Iter.Valid Do

	            Iter.SetValueFlagEx(2, 5);

	            Debug.WriteLine(Iter.Value + " " + Iter.ValueFlag.ToString);

	            Iter.Move(IteratorDirection.Next);

	        End While;

	End Sub UserProc;


После выполнения примера будет создана матрица, содержащая случайные
 значения. Для матрицы будет установлено значение флага, используемого
 для отметки изменившихся значений. Для случайного элемента будет изменено
 значение. После этого на базе матрицы будет получен итератор и для флага
 каждого элемента будут выполнены поразрядные операции с заданными значениями.
 Для всех измененных элементов будет установлен флаг 7, для не измененных
 - 5.


См.также:


[IMatrixIterator](IMatrixIterator.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
