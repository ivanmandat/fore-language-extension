# IMatrixModelSwapInfo.Swap

IMatrixModelSwapInfo.Swap
-


# IMatrixModelSwapInfo.Swap


## Синтаксис


Swap(IndexFrom: Integer; IndexTo: Integer);


## Параметры


IndexFrom. Индекс измерения,
 которое необходимо переставить;


IndexTo. Индекс позиции, в
 которую необходимо установить измерение.


## Описание


Метод Swap осуществляет перестановку
 измерений.


## Комментарии


Для того чтобы изменения вступили в силу, необходимо выполнить метод
 [IMatrix.Swap](KeMatrix.chm::/Interface/IMatrix/IMatrix.Swap.htm).


## Пример


Добавьте ссылки на системные сборки: MathFin, Matrix.


	Sub UserProc;

	Var

	    M: Matrix[3];

	    Mm: IMatrixModel;

	    Swap: IMatrixModelSwapInfo;

	    x, y, z: Integer;

	Begin

	    Debug.WriteLine("Исходная матрица");

	    For x := 1 To 3 Do

	        For y := 1 To 3 Do

	            For z := 1 To 3 Do

	                M[x, y, z] := Math.RandBetweenI(0, 9);

	                Debug.Write(M[x, y, z] + " ");

	            End For;

	            Debug.WriteLine("");

	        End For;

	        Debug.WriteLine("");

	    End For;

	    Mm := M As IMatrixModel;

	    Swap := (M As IMatrix).CreateSwapInfo;

	    Swap.Swap(0, 1);

	    M := (M As IMatrix).Swap(Swap);

	    Debug.WriteLine("Матрица с переставленными измерениями");

	    For x := 1 To 3 Do

	        For y := 1 To 3 Do

	            For z := 1 To 3 Do

	                Debug.Write(M[x, y, z] + " ");

	            End For;

	            Debug.WriteLine("");

	        End For;

	        Debug.WriteLine("");

	    End For;

	End Sub UserProc;


После выполнения примера, будет создана матрица,
 содержащая случайные значения. В данной матрице первое и второе измерения
 будут переставлены местами.


См. также:


[IMatrixModelSwapInfo](IMatrixModelSwapInfo.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
