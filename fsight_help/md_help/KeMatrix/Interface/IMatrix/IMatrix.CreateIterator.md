# IMatrix.CreateIterator

IMatrix.CreateIterator
-


# IMatrix.CreateIterator


## Синтаксис


CreateIterator: [IMatrixIterator](../IMatrixIterator/IMatrixIterator.htm);


## Описание


Метод CreateIterator создает итератор, используемый для навигации по элементам матрицы.


## Комментарии


Для создания объекта, представляющего собой координату в матрице, используйте метод [IMatrix.CreateCoord](IMatrix.CreateCoord.htm).


## Пример


Для выполнения примера добавьте ссылку на системную сборку «MathFin» и «Matrix».


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

    Debug.WriteLine("Исходная матрица");

    Iter := Mm.CreateIterator;

    Iter.Move(IteratorDirection.First);

    While Iter.Valid Do

        Debug.WriteLine(Iter.Value + " " + Iter.ValueFlag.ToString);

        Iter.Move(IteratorDirection.Next);

    End While;

    Mm.ValueFlag := 1;

    //
    Coord := Mm.CreateCoord;

    Coord.Item(0) := 0;

    Coord.Item(1) := 0;

    Mm.Item(Coord) := 11;

    Coord.Item(0) := 2;

    Coord.Item(1) := 2;

    Mm.Item(Coord) := 13;

    // значение флага, используемого в матрице для отметки изменившихся значений
    Mm.ValueFlag := 2;

    Coord.Item(0) := 1;

    Coord.Item(1) := 1;

    // значение элемента матрицы в заданной координате
    Mm.Item(Coord) := 12;

    Coord.Item(0) := 3;

    Coord.Item(1) := 3;

    Mm.Item(Coord) := 14;

    Debug.WriteLine("До изменения флага");

    Iter.Move(IteratorDirection.First);

    While Iter.Valid Do

        Debug.WriteLine(Iter.Value + " " + Iter.ValueFlag.ToString);

        Iter.Move(IteratorDirection.Next);

    End While;

    // изменение флага
    Mm.ChangeValueFlag(1, 10);

    Debug.WriteLine("После изменения флага");

    Iter := Mm.CreateIterator;

    Iter.Move(IteratorDirection.First);

    While Iter.Valid Do

        Debug.WriteLine(Iter.Value + " " + Iter.ValueFlag.ToString);

        Iter.Move(IteratorDirection.Next);

    End While;
End Sub UserProc;


После выполнения примера будет создана матрица, содержащая случайные значения. В данной матрице будут изменены значения четырех диагональных элементов. Значения будут изменяться с различным флагом. После этого для элементов, измененных с флагом матрицы "1" будет изменено значение флага на "10". Значения элементов и соответствующие им флаги будут выведены в консоль среды разработки.


См. также:


[IMatrix](IMatrix.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
