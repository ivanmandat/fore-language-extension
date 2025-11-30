# IMatrixModel.CreateFixInfo

IMatrixModel.CreateFixInfo
-


# IMatrixModel.CreateFixInfo


## Синтаксис


CreateFixInfo: [IMatrixModelFixInfo](../IMatrixModelFixInfo/IMatrixModelFixInfo.htm);


## Описание


Метод CreateFixInfo создает
 объект, необходимый для фиксации измерений матрицы.


## Пример


Добавьте ссылку на системную сборку MathFin.


	Sub UserProc;

	Var

	    M: Matrix[3];

	    M1, M2: Matrix[2];

	    Mm: IMatrixModel;

	    x, y, z: Integer;

	    Fix: IMatrixModelFixInfo;

	Begin

	    Debug.WriteLine("Исходная матрица");

	    For x := 0 To 2 Do

	        For y := 0 To 2 Do

	            For z := 0 To 2 Do

	                M[x, y, z] := Math.RandBetweenI(0, 9);

	                Debug.Write(M[x, y, z] + " ");

	            End For;

	            Debug.WriteLine("");

	        End For;

	        Debug.WriteLine("");

	    End For;

	    Mm := M As IMatrixModel;

	    Fix := Mm.CreateFixInfo;

	    Fix.Item(0) := 0;

	    M1 := Mm.Dereference(Fix);

	    Fix.Clear;

	    Fix.Item(0) := 1;

	    M2 := Mm.Dereference(Fix);

	    Debug.WriteLine("----------------");

	    For y := 0 To 2 Do

	        For z := 0 To 2 Do

	            Debug.Write(M1[y, z] + " ");

	        End For;

	        Debug.WriteLine("");

	    End For;

	    Debug.WriteLine("");

	    For y := 0 To 2 Do

	        For z := 0 To 2 Do

	            Debug.Write(M2[y, z] + " ");

	        End For;

	        Debug.WriteLine("");

	    End For;

	End Sub UserProc;


После выполнения примера, будет сгенерирована
 матрица случайных чисел размером 3х3х3. На базе данной матрицы будет получено
 еще две, путем фиксации исходной по измерению Х. Матрица M1 получается
 при фиксации исходной матрицы по первому элементу измерения Х, М2 - при
 фиксации по второму элементу измерения Х. Все измерения исходной матрицы
 и матрицы М1 и М2 будут выведены в консоль.


См. также:


[IMatrixModel](IMatrixModel.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
