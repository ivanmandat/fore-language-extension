# IBasicMatrixAggregator.PutResultsToSourceMatrix

IBasicMatrixAggregator.PutResultsToSourceMatrix
-


# IBasicMatrixAggregator.PutResultsToSourceMatrix


## Синтаксис


PutResultsToSourceMatrix: Boolean;


## Описание


Свойство PutResultsToSourceMatrix
 определяет способ сохранения результата агрегации данных.


## Комментарии


Допустимые значения:


	- True. Результат агрегации
	 данных сохраняется в матрицу с исходными данными. Матрица содержит
	 агрегированные и исходные данные;


	- False. По умолчанию.
	 Результат агрегации данных сохраняется в отдельную матрицу. Матрица
	 содержит только агрегированные данные.


Для расчёта агрегированных данных используйте метод [IMatrixAggregatorModel.Execute](../IMatrixAggregatorModel/IMatrixAggregatorModel.Execute.htm).
 Матрица с исходными данными передаётся с помощью параметра Source.


## Пример


Для выполнения примера предполагается наличие в репозитории стандартного
 куба с идентификатором CUBE. В структуре куба должно содержаться хотя
 бы два измерения.


Добавьте ссылки на системные сборки: Cubes, Dimensions, Matrix, Metabase.


	Sub UserProc;

	Var

	    MB: IMetabase;

	    CubeInst: ICubeInstance;

	    Destination: ICubeInstanceDestination;

	    Man: IMatrixAggregatorManager;

	    BasicAggr: IBasicMatrixAggregator;

	    Dims: ICubeInstanceDimensions;

	    Dim: IDimensionModel;

	    Lvls: IDimLevels;

	    LevAggr: IBasicMatrixLevelAggregator;

	    MatrDS: IMatrixDataSource;

	    DimSS: IDimSelectionSet;

	    Matr, MatrAggr: IMatrix;

	    Iter: IMatrixIterator;

	    i: Integer;

	Begin

	    // Получим текущий репозиторий

	    MB := MetabaseClass.Active;

	    // Получим открытый экземпляр куба

	    CubeInst := MB.ItemById("CUBE").Open(Null) As ICubeInstance;

	    // Получим вариант отображения куба, установленный по умолчанию

	    Destination := CubeInst.Destinations.DefaultDestination;

	    // Создадим и настроим агрегатор данных

	    Man := New MatrixAggregatorManager.Create As IMatrixAggregatorManager;

	    BasicAggr := Man.CreateAggregator("BasicMatrixAggregator") As IBasicMatrixAggregator;

	    BasicAggr.PutResultsToSourceMatrix := True;

	    // Получим измерения куба

	    Dims := Destination.Dimensions;

	    // Выберем второе измерение для настройки параметров агрегации

	    Debug.WriteLine("Настройка параметров агрегации выполняется для измерения: " + Dims.Item(1).Name);

	    // Получим структуру второго измерения

	    Dim := Dims.Item(1).Dimension;

	    // Получим уровни измерения

	    Lvls := Dim.Levels;

	    BasicAggr.Dimension := Dim;

	    // Зададим уровень-приёмник, уровень-источник и метод агрегации - «Сумма»

	    LevAggr := BasicAggr.LevelAggregation(Lvls.Item(Lvls.Count - 2));

	    LevAggr.Operation := BasicAggregatorOperation.Sum;

	    LevAggr.Include(Lvls.Item(Lvls.Count - 1)) := True;

	    // Зададим отметку первого элемента в первом измерении

	    MatrDS := Destination As IMatrixDataSource;

	    DimSS := MatrDS.CreateDimSelectionSet;

	    DimSS.Item(0).SelectElement(0, True);

	    // Зададим полную отметку для остальных измерений

	    For i := 1 To DimSS.Count - 1 Do

	        DimSS.Item(i).SelectAll;

	    End For;

	    // Рассчитаем матрицу в соответствии с указанной отметкой

	    Matr := MatrDS.Execute(DimSS);

	    // Получим матрицу с исходными данными

	    Iter := Matr.CreateIterator;

	    Iter.Move(IteratorDirection.First);

	    Debug.WriteLine("Исходные данные:");

	    While Iter.Valid Do

	        Debug.WriteLine(Iter.Value + ": " + Iter.CoordsAsString);

	        Iter.Move(IteratorDirection.Next);

	    End While;

	    Debug.WriteLine("");

	    // Рассчитаем агрегированные данные

	    MatrAggr := BasicAggr.Execute(1, Matr);

	    // Получим матрицу с агрегированными и исходными данными

	    Iter := MatrAggr.CreateIterator;

	    Iter.Move(IteratorDirection.First);

	    Debug.WriteLine("Агрегированные и исходные данные:");

	    While Iter.Valid Do

	        Debug.WriteLine(Iter.Value + ": " + Iter.CoordsAsString);

	        Iter.Move(IteratorDirection.Next);

	    End While;

	End Sub UserProc;


После выполнения действий будет создан агрегатор данных для куба. Агрегация
 будет выполняться по элементам со второго на первый уровень измерения,
 с использованием метода расчёта основного механизма агрегации - «Сумма».
 После настройки будет выполнен расчёт агрегированных данных. Матрица исходных
 данных и матрица агрегированных данных вместе с исходными будут выведены
 в консоль. Например:


Настройка параметров агрегации выполняется для измерения:
 Справочник 1


Исходные данные:


1: 0 0 0


2: 0 2 0


3: 0 4 0


4: 0 0 1


5: 0 2 1


6: 0 4 1


7: 0 0 2


8: 0 2 2


9: 0 4 2


1: 0 1 0


1: 0 1 1


1: 0 1 2


1: 0 3 0


1: 0 3 1


1: 0 3 2


Агрегированные и исходные данные:


2: 0 0 0


3: 0 2 0


3: 0 4 0


5: 0 0 1


6: 0 2 1


6: 0 4 1


8: 0 0 2


9: 0 2 2


9: 0 4 2


1: 0 1 0


1: 0 1 1


1: 0 1 2


1: 0 3 0


1: 0 3 1


1: 0 3 2


Если свойство IBasicMatrixAggregator.PutResultsToSourceMatrix
 принимает значение False, то вторая
 матрица будет содержать только агрегированные данные:


Агрегированные данные:


3: 0 2 0


2: 0 0 0


6: 0 2 1


5: 0 0 1


9: 0 2 2


8: 0 0 2


См.также:


[IBasicMatrixAggregator](IBasicMatrixAggregator.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
