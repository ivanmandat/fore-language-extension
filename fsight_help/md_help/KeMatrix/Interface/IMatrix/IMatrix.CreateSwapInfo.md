# IMatrix.CreateSwapInfo

IMatrix.CreateSwapInfo
-


# IMatrix.CreateSwapInfo


## Синтаксис


CreateSwapInfo: [IMatrixModelSwapInfo](ForeSys.chm::/Interface/IMatrixModelSwapInfo/IMatrixModelSwapInfo.htm);


## Описание


Метод CreateSwapInfo создает объект, содержащий информацию, необходимую для перестановки измерений с данными матрицы.


## Пример


Sub Main;


Var


M: Matrix[3];


Mm: IMatrixModel;


Swap: IMatrixModelSwapInfo;


x, y, z: Integer;


Begin


Debug.WriteLine("Исходная матрица");


For x := 1 To 3 Do


For y := 1 To 3 Do


For z := 1 To 3 Do


M[x, y, z] := Math.RandBetweenI(0, 9);


Debug.Write(M[x, y, z] + " ");


End For;


Debug.WriteLine("");


End For;


Debug.WriteLine("");


End For;


Mm := M As IMatrixModel;


Swap := (M As IMatrix).CreateSwapInfo;


Swap.Swap(0, 1);


M := (M As IMatrix).Swap(Swap);


Debug.WriteLine("Матрица с переставленными измерениями");


For x := 1 To 3 Do


For y := 1 To 3 Do


For z := 1 To 3 Do


Debug.Write(M[x, y, z] + " ");


End For;


Debug.WriteLine("");


End For;


Debug.WriteLine("");


End For;


End Sub Main;


После выполнения примера будет создана матрица, содержащая случайные значения. В данной матрице первое и второе измерения будут переставлены местами.


См.также:


[IMatrix](IMatrix.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
