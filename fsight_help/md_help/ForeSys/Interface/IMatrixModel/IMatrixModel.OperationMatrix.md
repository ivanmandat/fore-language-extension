# IMatrixModel.OperationMatrix

IMatrixModel.OperationMatrix
-


# IMatrixModel.OperationMatrix


## Синтаксис


OperationMatrix(Op: [MatrixOperation](../../Enums/MatrixOperation.htm);
 Source: [IMatrixModel](IMatrixModel.htm));


## Параметры


Op. Математическая операция,
 которую необходимо произвести между исходной матрицей и матрицей, передаваемой
 в параметре Source;


Source. Матрица, которая будет
 участвовать в математической операции с текущей матрицей.


## Описание


Метод OperationMatrix выполняет
 математические операции между текущей матрицей и матрицей, передаваемой
 посредством входного параметра.


## Комментарии


Результат выполнения помещается в текущую матрицу. Все операции производятся
 поэлементно.


## Пример


Добавьте ссылку на системную сборку MathFin.


	Sub UserProc;

	Var

	    M1, M2: Matrix[2];

	    Mm: IMatrixModel;

	    x, y: Integer;

	Begin

	    Debug.WriteLine("Исходные матрицы");

	    For x := 0 To 3 Do

	        For y := 0 To 3 Do

	            M1[x, y] := Math.RandBetweenI(0, 10);

	            Debug.Write(M1[x, y] + " ");

	        End For;

	        Debug.WriteLine("");

	    End For;

	    Debug.WriteLine("------------");

	    For x := 0 To 3 Do

	        For y := 0 To 3 Do

	            M2[x, y] := Math.RandBetweenI(0, 10);

	            Debug.Write(M2[x, y] + " ");

	        End For;

	        Debug.WriteLine("");

	    End For;

	    Mm := M1 As IMatrixModel;

	    Mm.OperationMatrix(MatrixOperation.Mul, (M2 As IMatrixModel));

	    Debug.WriteLine("------------");

	    For x := 0 To 3 Do

	        For y := 0 To 3 Do

	            Debug.Write(M1[x, y] + " ");

	        End For;

	        Debug.WriteLine("");

	    End For;

	End Sub UserProc;


После выполнения примера, будут созданы две матрицы,
 содержащие случайные значения. Матрицы будут поэлементно перемножены.
 Исходные и результирующие данные будут выведены в консоль среды разработки.


См. также:


[IMatrixModel](IMatrixModel.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
