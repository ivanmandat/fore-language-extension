# IMatrixModel.Rank

IMatrixModel.Rank
-


# IMatrixModel.Rank


## Синтаксис


Rank(DimIndex: Integer; Ascending: Boolean; Method:
 [MatrixRankMethod](../../Enums/MatrixRankMethod.htm)): [IMatrixModel](IMatrixModel.htm);


## Параметры


DimIndex. Измерение матрицы,
 по которому осуществляется ранжирование;


Ascending. Параметр,
 определяющий направление сортировки;


Method. Метод, используемый
 для составления матрицы ранжирования.


## Описание


Метод Rank осуществляет составление
 матрицы ранжирования, с учетом установленных параметров. Матрица ранжирования
 имеет такую же размерность, как и исходная матрица.


## Комментарии


Если параметру Ascending установлено
 значение True,
 то сортировка осуществляется по возрастанию значений.


## Пример


Добавьте ссылку на системную сборку MathFin.


	Sub UserProc;

	Var

	    M, RankM: Matrix[2];

	    Mm: IMatrixModel;

	    x, y: Integer;

	Begin

	    Debug.WriteLine("Исходная матрица");

	    For x := 0 To 4 Do

	        For y := 0 To 4 Do

	            M[x, y] := Math.RandBetweenI(10, 20);

	            Debug.Write(M[x, y] + " ");

	            End For;

	        Debug.WriteLine("");

	    End For;

	    Mm := M As IMatrixModel;

	    RankM := Mm.Rank(0, True, MatrixRankMethod.NoOrdered);

	    Debug.WriteLine("Матрица ранжирования");

	    For x := 0 To 4 Do

	        For y := 0 To 4 Do

	            Debug.Write(RankM[x, y] + " ");

	        End For;

	        Debug.WriteLine("");

	    End For;

	End Sub UserProc;


После выполнения примера, будет создана матрица,
 содержащая случайные значения. Для данной матрицы будет получена матрица
 ранжирования, обе матрицы будут выведены в консоль среды разработки.


См. также:


[IMatrixModel](IMatrixModel.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
