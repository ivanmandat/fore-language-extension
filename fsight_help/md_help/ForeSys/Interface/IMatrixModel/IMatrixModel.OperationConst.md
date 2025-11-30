# IMatrixModel.OperationConst

IMatrixModel.OperationConst
-


# IMatrixModel.OperationConst


## Синтаксис


OperationConst(Op: [MatrixOperation](../../Enums/MatrixOperation.htm);
 Value: Variant);


## Параметры


Op. Математическая
 операция;


Value. Константа или итератор
 матрицы.


## Описание


Метод OperationConst выполняет
 математические операции между текущей матрицей и константой или итератором
 матрицы.


## Комментарии


Допустимые значения параметра Value:


	- константа. При выполнении
	 операции значение константы применяется ко всем элементам матрицы;


	- итератор. Предназначен
	 для выполнения операции по элементам матрицы, содержащим непустые
	 значения. Для установки итератора матрицы используйте свойство [IMatrix.CreateIterator](KeMatrix.chm::/Interface/IMatrix/IMatrix.CreateIterator.htm)
	 или метод [IMatrixQuery.Select](KeMatrix.chm::/Interface/IMatrixQuery/IMatrixQuery.Select.htm).


## Пример


Для выполнения примера предполагается наличие в репозитории справочников
 НСИ с идентификаторами DICT_1 и DICT_2.


Добавьте ссылки на системные сборки: Dimensions, MathFin, Matrix, Metabase.


	Sub UserProc;

	Var

	    MB: IMetabase;

	    Obj_1, Obj_2: IMetabaseObjectDescriptor;

	    Dim_1, Dim_2: IDimInstance;

	    Matrix_1, Matrix_2: IMatrix;

	    MatrixFact: IMatrixFactory;

	    Query: IMatrixQuery;

	    Range: IMatrixQueryFilterRange;

	    SelectionFact: IDimSelectionSetFactory;

	    Selection: IDimSelectionSet;

	    x, y: Integer;

	    Coord: IMatrixCoord;

	Begin

	    // Создадим коллекцию отметок справочников

	    SelectionFact := New DimSelectionSetFactory.Create;

	    Selection := SelectionFact.CreateDimSelectionSet;

	    // Добавим в отметку все элементы справочников с заданными идентификаторами

	    MB := MetabaseClass.Active;

	    Dim_1 := MB.ItemById("DICT_1").Open(Null) As IDimInstance;

	    Selection.Add(Dim_1).SelectAll;

	    Dim_2 := MB.ItemById("DICT_2").Open(Null) As IDimInstance;

	    Selection.Add(Dim_2).SelectAll;

	    // Создадим структуры матриц

	    MatrixFact := New MatrixFactory.Create As IMatrixFactory;

	    // Создадим матрицы на основе указанной отметки измерений

	    Matrix_1 := MatrixFact.CreateMatrix(Selection);

	    Matrix_2 := MatrixFact.CreateMatrix(Selection);

	    // Заполним случайными числами и выведем в консоль исходную матрицу

	    Coord := Matrix_1.CreateCoord;

	    Debug.WriteLine("Исходная матрица:");

	    For x := 0 To 4 Do

	        For y := 0 To 4 Do

	            Coord.Item(0) := x;

	            Coord.Item(1) := y;

	            Matrix_1.Item(Coord) := Math.RandBetweenI(10, 20);

	            Debug.Write(Matrix_1.Item(Coord) + " ");

	        End For;

	        Debug.WriteLine("");

	    End For;

	    // Заполним случайными числами и выведем в консоль матрицу, участвующую в математической операции

	    Coord := Matrix_2.CreateCoord;

	    Debug.WriteLine("Матрица, участвующая в математической операции:");

	    For x := 0 To 4 Do

	        For y := 0 To 4 Do

	            Coord.Item(0) := x;

	            Coord.Item(1) := y;

	            Matrix_2.Item(Coord) := Math.RandBetweenI(10, 20);

	            Debug.Write(Matrix_2.Item(Coord) + " ");

	        End For;

	        Debug.WriteLine("");

	    End For;

	    // Создадим запрос на получение информации о данных указанной матрицы

	    Query := MatrixFact.CreateQuery(Matrix_2);

	    // Настроим фильтрацию значений матриц

	    Range := Query.Filter.Ranges.Add;

	    // Зададим минимальное значение диапазона фильтрации

	    Range.Min := 12;

	    // Зададим максимальное значение диапазона фильтрации

	    Range.Max := 15;

	    // Выполним операцию сложения в указанном диапазоне

	    Matrix_1.OperationConst(MatrixOperation.Add, Query.Select_);

	    Debug.WriteLine("Результат сложения всех чисел от 12 до 15 из второй матрицы с соответствующими элементами из первой:");

	    // Выведем в консоль результирующую матрицу

	    Coord := Matrix_1.CreateCoord;

	    For x := 0 To 4 Do

	        For y := 0 To 4 Do

	            Coord.Item(0) := x;

	            Coord.Item(1) := y;

	            Debug.Write(Matrix_1.Item(Coord) + " ");

	        End For;

	        Debug.WriteLine("");

	    End For;

	End Sub UserProc;


После выполнения примера будут созданы матрицы, содержащие случайные
 значения. Над значениями матриц будет произведена операция сложения всех
 чисел, попадающих в диапазон от 12 до 15, из второй матрицы с соответствующими
 элементами из первой матрицы. Все матрицы будут выведены в консоль, например:


Исходная матрица:


12 17 17 11 14


18 14 10 11 18


17 14 12 19 12


11 18 19 19 16


14 16 17 12 10


Матрица, участвующая в математической операции:


16 14 17 13 16


11 13 14 16 11


18 11 19 16 16


15 17 20 18 18


19 13 15 16 16


Результат сложения всех чисел от 12 до 15 из второй матрицы с
 соответствующими элементами из первой:


12 31 17 24 14


18 27 24 11 18


17 14 12 19 12


26 18 19 19 16


14 29 32 12 10


См. также:


[IMatrixModel](IMatrixModel.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
