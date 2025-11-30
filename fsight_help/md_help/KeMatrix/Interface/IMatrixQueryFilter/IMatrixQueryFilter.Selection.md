# IMatrixQueryFilter.Selection

IMatrixQueryFilter.Selection
-


# IMatrixQueryFilter.Selection


## Синтаксис


Selection: [IDimSelectionSet](KeDims.chm::/interface/IDimSelectionSet/IDimSelectionSet.htm);


## Описание


Свойство Selection определяет
 отметку коллекции справочников для запроса матрицы.


## Пример


Для выполнения примера предполагается наличие куба с идентификатором
 CUBE.


Добавьте ссылки на системные сборки: Cubes, Dimensions, Matrix, Metabase.


	Sub UserProc;

	Var

	    Mb: IMetabase;

	    CubeDest: ICubeInstanceDestination;

	    Executor: ICubeInstanceDestinationExecutor;

	    Sels, FilterSel, ResSels: IDimSelectionSet;

	    Sel: IDimSelection;

	    Factory: IMatrixFactory;

	    Matrix: IMatrix;

	    Query: IMatrixQuery;

	    Filter: IMatrixQueryFilter;

	    Values: IArrayList;

	    Result: IMatrixQueryResult;

	Begin

	    Mb := MetabaseClass.Active;

	    // Открытие куба

	    CubeDest := (Mb.ItemById("CUBE").Open(Null) As ICubeInstance).Destinations.DefaultDestination;

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

	    Factory := New MatrixFactory.Create As IMatrixFactory;

	    Query := Factory.CreateQuery(Matrix);

	    Filter := Query.Filter;

	    // Добавление значений для фильтрации данных

	    FilterSel := CubeDest.CreateDimSelectionSet;

	    FilterSel.Item(0).SelectElement(0, False);

	    FilterSel.Item(1).SelectElement(0, False);

	    // Отметка для фильтрации

	    Filter.Selection := FilterSel;

	    // Выполнение запроса

	    Query.Execute;

	    Result := Query.Result;

	    Debug.WriteLine("Минимальное значение в отфильтрованной матрице: " + Result.MinValue.ToString);

	    Debug.WriteLine("Максимальное значение в отфильтрованной матрице: " + Result.MaxValue.ToString);

	    // Результирующая отметка, полученная путём изменения исходной отметки таким образом,

	    // чтобы в матрице остались только данные из фильтра

	    ResSels := CubeDest.CreateDimSelectionSet;

	    Result.GetSelectionSet(ResSels);

	    For Each Sel In ResSels Do

	        Debug.WriteLine("Измерение: " + (Sel.Dimension.Dimension As IMetabaseObject).Id + ". Отмечено элементов: " + Sel.SelectedCount.ToString + " из " + Sel.Dimension.Elements.Count.ToString);

	    End For;

	End Sub UserProc;


При выполнении примера будет открыт куб и получена его матрица с данными
 по полной отметке. Будет создан запрос, получающий информацию о данных
 из матрицы, в запросе определён фильтр, отбирающий данные по определённой
 отметке. После выполнения запроса будет получена отметка, которая соответствует
 матрице с отфильтрованными данными. Информация об отметке будет выведена
 в консоль среды разработки.


См. также:


[IMatrixQueryFilter](IMatrixQueryFilter.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
