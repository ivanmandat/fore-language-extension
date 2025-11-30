# IMatrixModelFactory.CreateMatrixModel

IMatrixModelFactory.CreateMatrixModel
-


# IMatrixModelFactory.CreateMatrixModel


## Синтаксис


CreateMatrixModel(DimensionCount: Integer): [IMatrixModel](../IMatrixModel/IMatrixModel.htm);


## Параметры


DimensionCount. Количество
 измерений в создаваемой матрице.


## Описание


Метод CreateMatrixModel создает
 структуру матрицы.


## Комментарии


Для корректной работы параметр DimensionCount должен
 быть больше нуля.


## Пример


Для выполнения примера добавьте ссылку на сборку Fore.


	Sub UserProc;

	Var

	    result: IMatrixModel;

	    factory: IMatrixModelFactory;

	    coord: IMatrixModelCoord;

	    i, j: Integer;

	Begin

	    factory := New MatrixFactory.Create;

	    result := factory.CreateMatrixModel(2);

	    coord := result.CreateModelCoord;

	    coord.Item(0) := 0;

	    coord.Item(1) := 0;

	    result.Item(coord) := "a";

	    coord.Item(0) := 0;

	    coord.Item(1) := 1;

	    result.Item(coord) := "b";

	    coord.Item(0) := 0;

	    coord.Item(1) := 2;

	    result.Item(coord) := "c";

	    coord.Item(0) := 1;

	    coord.Item(1) := 1;

	    result.Item(coord) := "d";

	    Debug.WriteLine("Полученная матрица");

	    For i := 0 To 1 Do

	        For j := 0 To 2 Do

	            coord.Item(0) := i;

	            coord.Item(1) := j;

	            If result.Item(coord) <> Null Then

	                Debug.Write("    " + result.Item(coord));

	            Else

	                Debug.Write(" Null");

	            End If;

	        End For;

	        Debug.WriteLine("");

	    End For;

	End Sub UserProc;


Результат выполнения примера: создана двумерная матрица с данными. Данные
 матрицы выведены в окно консоли.


См. также:


[IMatrixModelFactory](IMatrixModelFactory.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
