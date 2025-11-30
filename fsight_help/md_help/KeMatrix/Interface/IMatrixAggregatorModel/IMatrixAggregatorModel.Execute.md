# IMatrixAggregatorModel.Execute

IMatrixAggregatorModel.Execute
-


# IMatrixAggregatorModel.Execute


## Синтаксис


Execute(DimIndex: Integer; Source: [IMatrix](../IMatrix/IMatrix.htm)):
 [IMatrix](../IMatrix/IMatrix.htm);


## Параметры


DimIndex. Индекс измерения,
 по элементам которого выполняется агрегация;


Source. Матрица с исходными
 данными, на основании которых выполняется агрегация.


## Описание


Метод Execute осуществляет расчёт
 агрегированных данных.


## Комментарии


Для определения способа сохранения результата агрегации данных используйте
 свойство [IBasicMatrixAggregator.PutResultsToSourceMatrix](../IBasicMatrixAggregator/IBasicMatrixAggregator.PutResultsToSourceMatrix.htm).


## Пример


Для выполнения примера предполагается наличие в репозитории куба с идентификатором
 CUBE. В структуре куба имеются два измерения. Второе в списке измерение
 - календарное.


Добавьте ссылки на системные сборки: Cubes, Dimensions, Matrix, Metabase.


	Sub UserProc;

	Var

	    MB: IMetabase;

	    CubeInst: ICubeInstance;

	    Destination: ICubeInstanceDestination;

	    Man: IMatrixAggregatorManager;

	    Dim: IDimensionModel;

	    Lvls: IDimLevels;

	    BasicAggr: IBasicMatrixAggregator;

	    LevAggr: IBasicMatrixLevelAggregator;

	    MatrDS: IMatrixDataSource;

	    DimSS: IDimSelectionSet;

	    Matr, Matr1: IMatrix;

	    Iter, Iter1: IMatrixIterator;

	Begin

	    MB := MetabaseClass.Active;

	    CubeInst := MB.ItemById("CUBE").Open(Null) As ICubeInstance;

	    Destination := CubeInst.Destinations.DefaultDestination;

	    // Создадим и настроим агрегатор данных

	    Man := New MatrixAggregatorManager.Create As IMatrixAggregatorManager;

	    BasicAggr := Man.CreateAggregator("BasicMatrixAggregator") As IBasicMatrixAggregator;

	    // Выберем второе измерение - календарное

	    Dim := Destination.Dimensions.Item(1).Dimension;

	    Lvls := Dim.Levels;

	    BasicAggr.Dimension := Dim;

	    LevAggr := BasicAggr.LevelAggregation(Lvls.Item(Lvls.Count - 2));

	    LevAggr.Operation := BasicAggregatorOperation.ActualMean;

	    LevAggr.Include(Lvls.Item(Lvls.Count - 1)) := True;

	    MatrDS := Destination As IMatrixDataSource;

	    DimSS := MatrDS.CreateDimSelectionSet;

	    // Зададим отметку первого элемента в первом измерении

	    DimSS.Item(0).SelectElement(0, False);

	    // Зададим полную отметку для календарного измерения

	    DimSS.Item(1).SelectAll;

	    // Получим исходную матрицу с данными

	    Matr := MatrDS.Execute(DimSS);

	    // Получим агрегированные данные по календарному измерению

	    Matr1 := BasicAggr.Execute(1, Matr);

	    // Выведем результат
	 агрегации данных

	    Iter := Matr.CreateIterator;

	    Iter1 := Matr1.CreateIterator;

	    Iter.Move(IteratorDirection.First);

	    Iter1.Move(IteratorDirection.First);

	    Debug.WriteLine("Матрица исходных данных");

	    While Iter.Valid Do

	        Debug.WriteLine(Iter.Value);

	        Iter.Move(IteratorDirection.Next);

	    End While;

	    Debug.WriteLine("Матрица агрегированных данных");

	    While Iter1.Valid Do

	        Debug.WriteLine(Iter1.Value);

	        Iter1.Move(IteratorDirection.Next);

	    End While;

	End Sub UserProc;


После выполнения примера для куба будет создан новый агрегатор данных.
 Агрегация будет осуществляться по элементам календарного измерения с последнего
 на предпоследний уровень, с использованием метода фактического среднего.
 После настройки будет осуществлен расчёт агрегированных данных. Исходная
 матрица и матрица агрегированных данных будут выведены в консоль.


См. также:


[IMatrixAggregatorModel](IMatrixAggregatorModel.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
