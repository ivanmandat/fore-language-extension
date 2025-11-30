# IAggregationInfoItem.Item

IAggregationInfoItem.Item
-


# IAggregationInfoItem.Item


## Синтаксис


Item(Index: Integer): [IAggrDestCell](../IAggrDestCell/IAggrDestCell.htm);


## Параметры


Index. Индекс элемента, в котором
 выполнялась агрегация.


## Описание


Свойство Item возвращает агрегированный
 элемент.


## Пример


Для выполнения примера предполагается наличие в репозитории стандартного
 куба с идентификатором CUBE. В структуре куба должно быть хотя бы два
 измерения. Первое измерение - справочник НСИ, содержащий иерархическую
 структуру элементов и два уровня. Факты куба должны быть добавлены локально,
 без использования существующего справочника.


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

     MatrixAggrInfo: IMatrixWithAggregationInfo;

     i, j: Integer;

     AggrInfo: IAggregationInfoItem;

     AggrInfoItem: IAggrDestCell;

     AggrSource: IAggrSourceCell;

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

    // Получим измерения куба

    Dims := Destination.Dimensions;

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

    // Рассчитаем агрегированные данные

    MatrixAggrInfo := BasicAggr.ExecuteWithAggregationInfo(1, Matr, Null);

    // Получим матрицу с агрегированными данными

    MatrAggr := MatrixAggrInfo.Matrix;

    Iter := MatrAggr.CreateIterator;

    Iter.Move(IteratorDirection.First);

    Debug.WriteLine("Агрегированные данные:");

    While Iter.Valid Do

        Debug.Write(Iter.Value + " ");

        Iter.Move(IteratorDirection.Next);

    End While;

    Debug.WriteLine("");

    // Получим информацию об агрегации и исходных значениях элементов

    AggrInfo := MatrixAggrInfo.Item;

    For i := 0 To AggrInfo.Count - 1 Do

        Debug.WriteLine((i+1).ToString + " агрегированный элемент:");

        AggrInfoItem := AggrInfo.Item(i);

        Debug.WriteLine("- метод расчёта: " + AggrInfoItem.Operation.ToString);

        Debug.WriteLine("- количество исходных элементов: " + AggrInfoItem.Count.ToString);

        Debug.Write("- исходные значения: ");

        For j := 0 To AggrInfoItem.Count - 1 Do

            AggrSource := AggrInfoItem.Item(j);

            Debug.Write(AggrSource.Value);

            Debug.Write(" (координата: " + AggrSource.Coord.Item(0).ToString + ", " + AggrSource.Coord.Item(1).ToString + "); ");

        End For;

        Debug.WriteLine("");

    End For;

End Sub UserProc;


После выполнения действий будет создан агрегатор данных для куба. Агрегация
 будет выполняться по элементам со второго на первый уровень измерения,
 с использованием метода расчёта основного механизма агрегации - «Сумма».
 После настройки будет выполнен расчёт агрегированных данных. Агрегированные
 данные и информация об исходных значениях элементов будут выведены в консоль.
 Например:


Агрегированные данные:


4 3 7 6 10 9


1 агрегированный элемент:


- метод расчёта: 1


- количество исходных элементов: 2


- исходные значения: 2 (координата: 0, 0); 1 (координата:
 0, 1);


2 агрегированный элемент:


- метод расчёта: 1


- количество исходных элементов: 2


- исходные значения: 3 (координата: 0, 2); 1 (координата:
 0, 3);


3 агрегированный элемент:


- метод расчёта: 1


- количество исходных элементов: 2


- исходные значения: 5 (координата: 0, 0); 1 (координата:
 0, 1);


4 агрегированный элемент:


- метод расчёта: 1


- количество исходных элементов: 2


- исходные значения: 6 (координата: 0, 2); 1 (координата:
 0, 3);


5 агрегированный элемент:


- метод расчёта: 1


- количество исходных элементов: 2


- исходные значения: 8 (координата: 0, 0); 1 (координата:
 0, 1);


6 агрегированный элемент:


- метод расчёта: 1


- количество исходных элементов: 2


- исходные значения: 9 (координата: 0, 2); 1 (координата:
 0, 3);


См. также:


[IAggregationInfoItem](IAggregationInfoItem.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
