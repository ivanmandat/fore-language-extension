# IMatrixQueryResult.Item

IMatrixQueryResult.Item
-


# IMatrixQueryResult.Item


## Синтаксис


Item(Index: Integer): [IBitArray](ModCollections.chm::/Interface/IBitArray/IBitArray.htm);


## Параметры


Index. Индекс битового массива.


## Описание


Свойство Item возвращает битовый
 массив, содержащий информацию об отметке элементов измерения.


## Комментарии


Индекс битового массива, указываемый в параметре Index,
 соответствует индексу измерения в отметке, указанной в свойстве [IMatrixQuery.Select](../IMatrixQuery/IMatrixQuery.Select.htm).
 Длина битового массива [Length](ModCollections.chm::/Interface/IBitArray/IBitArray.Length.htm)
 будет равна индексу последнего элемента, который отмечен для получения
 отфильтрованной матрицы, а количество элементов [Count](ModCollections.chm::/Interface/ICollection/ICollection.Count.htm)
 будет равно количеству элементов в измерении, для которых выставлена отметка.


## Пример


Для выполнения примера предполагается наличие куба с идентификатором
 CUBE.


Добавьте ссылки на системные сборки: Collections, Cubes, Dimensions,
 Matrix, Metabase.


	Sub UserProc;

	Var

	    Mb: IMetabase;

	    CubeDest: ICubeInstanceDestination;

	    Executor: ICubeInstanceDestinationExecutor;

	    Sels: IDimSelectionSet;

	    Sel: IDimSelection;

	    Matrix: IMatrix;

	    MatFac: MatrixFactory;

	    Query: IMatrixQuery;

	    Filter: IMatrixQueryFilter;

	    Range: IMatrixQueryFilterRange;

	    Result: IMatrixQueryResult;

	    Arr: IBitArray;

	    i, j: Integer;

	Begin

	    Mb := MetabaseClass.Active;

	    // Открытие куба

	    CubeDest := (Mb.ItemById("OBJ8240").Open(Null) As ICubeInstance).Destinations.DefaultDestination;

	    Executor := CubeDest.CreateExecutor;

	    // Создание отметки

	    Sels := CubeDest.CreateDimSelectionSet;

	    For Each Sel In Sels Do

	        Sel.SelectAll;

	    End For;

	    // Получение матрицы с данными куба

	    Executor.PrepareExecute(Sels);

	    Executor.PerformExecuteO(CubeInstanceDestinationExecutorOptions.Cached);

	    Matrix := Executor.Matrix;

	    // Создание запроса

	    MatFac := New MatrixFactory.Create;

	    Query := (MatFac As IMatrixFactory).CreateQuery(Matrix);

	    // Настраиваем параметры фильтрации данных матрицы

	    Filter := Query.Filter;

	    // Добавление диапазона для
	 фильтрации данных

	    Range := Filter.Ranges.Add;

	    Range.Min := 1;

	    Range.Max := 10;

	    // Отметка для фильтрации

	    Filter.Selection := Sels;

	    // Выполнение запроса

	    Query.Execute;

	    // Получаем результат запроса

	    Result := Query.Result;

	    Debug.WriteLine("Количество элементов в Result: " + Result.Count.ToString);

	    For i := 0 To Result.Count - 1 Do

	        Arr := Result.Item(i);

	        Debug.WriteLine("Элементов: " + Arr.Length.ToString + ", отмеченных: " + Arr.Count.ToString);

	        Debug.Indent;

	        For j := 0 To Arr.Length - 1 Do

	            Debug.WriteLine("Элемент " + j.ToString + (Arr.Item(j)? " отмечен" : " не отмечен"));

	        End For;

	        Debug.Unindent;

	    End For;

	End Sub UserProc;


При выполнении примера будет открыт куб и получена его матрица с данными
 по полной отметке. Будет создан запрос, получающий информацию о данных
 из матрицы, в запросе определён фильтр, отбирающий данные в заданном диапазоне.
 После выполнения запроса по каждому измерению будет получен битовый массив
 с информацией об отметке элементов. Информация из битовых массивов будет
 выведена в консоль среды разработки.


См. также:


[IMatrixQueryResult](IMatrixQueryResult.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
