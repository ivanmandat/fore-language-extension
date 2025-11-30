# ICubeInstanceDestinationExecutor.AggregateDimSelection

ICubeInstanceDestinationExecutor.AggregateDimSelection
-


# ICubeInstanceDestinationExecutor.AggregateDimSelection


## Синтаксис


AggregateDimSelection(DimKey: Integer): Boolean;


## Параметры


DimKey. Ключ измерения источника
 данных.


## Описание


Свойство AggregateDimSelection
 определяет признак исключения измерения из куба при агрегации данных фиксированных
 измерений.


## Комментарии


Используется, если включена агрегация данных по всем элементам измерений
 куба:


	- установлен флажок «[Агрегировать данные по измерениям с полной
	 отметкой](UiNavObj.chm::/Cube/CreateCube/Master_Standart/UiMd_Cube_CreateCube_Master_Standart_3.htm#aggregation)» в мастере стандартного куба;


	- свойство [IStandardCubeDestination.SelSetOriginalOnly](KeCubes.chm::/Interface/IStandardCubeDestination/IStandardCubeDestination.SelSetOriginalOnly.htm)
	 принимает значение True.


Для агрегации данных по некоторым элементам измерения куба:


	- Задайте свойство AggregateDimSelection
	 со значением True.


	- Укажите частичную отметку элементов измерения, которая будет
	 использоваться в процессе агрегации, с помощью метода [ICubeInstanceDestination.CreateDimSelectionSet](../ICubeInstanceDestination/ICubeInstanceDestination.CreateDimSelectionSet.htm).


Допустимые значения:


	- True. Агрегация данных
	 выполняется по измерению с частичной отметкой;


	- False. По умолчанию.
	 Агрегация данных выполняется по измерению с полной отметкой.


## Пример


Для выполнения примера в репозитории предполагается наличие стандартного
 куба с идентификатором CUBE. В кубе должно содержаться измерение с идентификатором
 DIMENSION и настроена [агрегация
 данных](UiNavObj.chm::/Cube/CreateCube/Master_Standart/UiMd_Cube_CreateCube_Master_Standart_7.htm).


Добавьте ссылки на системные сборки: Cubes, Dimensions, Matrix, Metabase.


	Sub UserProc;

	Var

	    MB: IMetabase;

	    Cube: IStandardCube;

	    CubeDest: IStandardCubeDestination;

	    CubeIns: ICubeInstance;

	    DictInst: IDimInstance;

	    Dest: ICubeInstanceDestination;

	    MatrDS: IMatrixDataSource;

	    MatrExecutor: IMatrixDataSourceExecutor;

	    Executor: ICubeInstanceDestinationExecutor;

	    SelSet: IDimSelectionSet;

	    Sel: IDimSelection;

	    Mat: IMatrix;

	    Ite: IMatrixIterator;

	    Line: String;

	Begin

	    // Получим текущий репозиторий

	    MB := MetabaseClass.Active;

	    // Получим стандартный куб

	    Cube := MB.ItemById("CUBE").Edit As IStandardCube;

	    // Получим первый вариант отображения куба при агрегации

	    CubeDest := Cube.Destinations.Item(0);

	    // Проверим признак использования агрегации данных по измерениям с полной отметкой

	    If CubeDest.SelSetOriginalOnly Then

	        Debug.WriteLine("Агрегация используется");

	    Else

	        // Включим агрегацию, если она не используется

	        CubeDest.SelSetOriginalOnly := True;

	        // Сохраним изменения в кубе

	        (Cube As IMetabaseObject).Save;

	    End If;

	    // Получим экземпляр куба

	    CubeIns := MB.ItemById("CUBE").Open(Null) As ICubeInstance;

	    // Получим измерение

	    DictInst := MB.ItemById("DIMENSION").Open(Null) As IDimInstance;

	    Dest := CubeIns.Destinations.DefaultDestination;

	    // Создадим объект для расчёта куба

	    MatrDS := Dest As IMatrixDataSource;

	    MatrExecutor := MatrDS.CreateExecutor;

	    Executor := MatrExecutor As ICubeInstanceDestinationExecutor;

	    // Исключим полученное изменение из куба при выполнении агрегации

	    Executor.AggregateDimSelection(DictInst.Key) := True;

	    // Создадим пустую отметку куба

	    SelSet := Dest.CreateDimSelectionSet;

	    // Отметим все элементы измерений, кроме полученного измерения, в нём снимем отметку с первого элемента

	    For Each Sel In SelSet Do

	        If Sel.Dimension = DictInst Then

	            Sel.SelectAll;

	            Sel.DeselectElement(0, False);

	        Else

	            Sel.SelectAll;

	        End If;

	    End For;

	    // Рассчитаем матрицу с данными в соответствии с отметкой

	    Mat := MatrExecutor.Execute(SelSet);

	    Ite := Mat.CreateIterator;

	    Ite.Move(IteratorDirection.First);

	    While Ite.Valid Do

	        // Выведем в консоль результат отметки, по которой будет выполняться агрегация

	        Line := Ite.CoordsAsString + " " + Ite.Value;

	        Debug.WriteLine(Line);

	        Ite.Move(IteratorDirection.Next);

	    End While;

	End Sub UserProc;


После выполнения примера для агрегации данных будет использоваться частичная
 отметка измерения с идентификатором DIMENSION, остальные измерения - с
 полной отметкой. В консоль будет выведена информация об использовании
 агрегации данных и соответствующая ей отметка элементов измерений.


См. также:


[ICubeInstanceDestinationExecutor](ICubeInstanceDestinationExecutor.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
