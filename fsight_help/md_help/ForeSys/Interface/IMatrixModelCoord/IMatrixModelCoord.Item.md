# IMatrixModelCoord.Item

IMatrixModelCoord.Item
-


# IMatrixModelCoord.Item


## Синтаксис


Item(DimIndex: Integer): Integer;


## Параметры


DimIndex. Номер параметра.


## Описание


Свойство Item определяет
 индекс элемента в измерении матрицы для указанного параметра координаты.


## Комментарии


Количество параметров координаты соответствует количеству измерений
 в матрице.


## Пример


Добавьте ссылку на системную сборку MathFin.


	Sub UserProc;

	Var

	    M: Matrix[2];

	    Mm: IMatrixModel;

	    I, J: Integer;

	    Coord: IMatrixModelCoord;

	Begin

	    Debug.WriteLine("Исходная матрица");

	    For i := 0 To 5 Do

	        For j := 0 To 5 Do

	            M[i, j] := Math.RandBetweenI(0, 9);

	        End For;

	    End For;

	    Mm := M As IMatrixModel;

	    Coord := Mm.CreateModelCoord;

	    Coord.Item(0) := Math.RandBetweenI(0, 5);

	    Coord.Item(1) := Math.RandBetweenI(0, 5);

	    Debug.WriteLine(Mm.Item(Coord));

	End Sub UserProc;


После выполнения примера будет сгенерирована матрица
 случайных чисел. В консоль будет выведено значение элемента матрицы со
 случайными координатами.


См. также:


[IMatrixModelCoord](IMatrixModelCoord.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
