# Matrix

Matrix
-


# Matrix


Matrix - базовый класс для создания
 динамических матриц с данными. Данный класс не имеет собственных свойств,
 методов или конструкторов. Объявление переменной с типом Matrix приводит
 к автоматической инициализации новой матрицы. При объявлении переменной
 необходимо указать количество измерений, которое будет иметь новая матрица:


	Var

	    M: Matrix[2];


Обращение к элементам матрицы осуществляется аналогично обращению к
 элементам массивов. Матрица поддерживает свойства и методы интерфейсов
 [IMatrixModel](../../Interface/IMatrixModel/IMatrixModel.htm)
 и [IMatrix](KeMatrix.chm::/Interface/IMatrix/IMatrix.htm).


	Sub UserProc;

	Var

	    M: Matrix[2];

	    Mm: IMatrixModel;

	    c: IMatrixModelCoord;

	    i, j: Integer;

	Begin

	    For i := 0 To 5 Do

	        For j := 0 To 5 Do

	            M[i, j] := Math.RandBetweenI(0, 100);

	            Debug.Write(m[i, j] + " ");

	        End For;

	        Debug.WriteLine("");

	    End For;

	    Mm := M As IMatrixModel;

	    c := Mm.CreateModelCoord;

	    c.Item(0) := 0;

	    Mm.Sort(c, True);

	    Debug.WriteLine("Отсортированная матрица");

	    For i := 0 To 5 Do

	        For j := 0 To 5 Do

	            Debug.Write(M[i, j] + " ");

	        End For;

	        Debug.WriteLine("");

	    End For;

	End Sub UserProc;


При выполнении примера будет создана матрица, имеющая два измерения.
 Данная матрица будет заполнена случайными значениями и отсортирована по
 значениям первой строки. Исходная и отсортированная матрица будут выведены
 в консоль среды разработки.


См. также:


[Классы сборки System](../System_Classes.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
