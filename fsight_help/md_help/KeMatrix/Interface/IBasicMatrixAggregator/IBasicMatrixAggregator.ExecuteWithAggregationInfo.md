# IBasicMatrixAggregator.ExecuteWithAggregationInfo

IBasicMatrixAggregator.ExecuteWithAggregationInfo
-


# IBasicMatrixAggregator.ExecuteWithAggregationInfo


## Синтаксис


ExecuteWithAggregationInfo(DimIndex: Integer; Source:
 [IMatrix](../IMatrix/IMatrix.htm); Filter: [IDimSelectionSet](KeDims.chm::/Interface/IDimSelectionSet/IDimSelectionSet.htm)):
 [IMatrixWithAggregationInfo](../IMatrixWithAggregationInfo/IMatrixWithAggregationInfo.htm);


## Параметры


DimIndex. Индекс измерения,
 по элементам которого выполняется агрегация;


Source. Матрица с исходными
 данными, на основании которых выполняется агрегация;


Filter. Отметка измерения,
 в соответствии с которой выполняется агрегация.


## Описание


Метод ExecuteWithAggregationInfo
 осуществляет расчёт агрегированных данных и позволяет получить информацию
 о результате выполнения агрегации.


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

    AggrCount, i: Integer;

    AggrInfo: IAggregationInfoItem;

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
 и выведем их наименования

    Dims := Destination.Dimensions;

    Debug.WriteLine("Измерения куба:");

    For i := 0 To Dims.Count - 1 Do

        Debug.WriteLine("- " + Dims.Item(i).Name)

    End For;

    // Выберем второе измерение для настройки параметров агрегации

    Debug.WriteLine("Настройка параметров агрегации выполняется для измерения: " + Dims.Item(1).Name);

    // Получим структуру второго
 измерения

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

        Debug.Write(Iter.Value + " ");

        Iter.Move(IteratorDirection.Next);

    End While;

    Debug.WriteLine("");

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

    // Получим информацию об
 агрегации

    AggrInfo := MatrixAggrInfo.Item;

    // Получим количество агрегированных
 элементов

    AggrCount := AggrInfo.Count;

    Debug.WriteLine("Количество агрегированных
 элементов: " + AggrCount.ToString);

End Sub UserProc;


После выполнения действий будет создан агрегатор данных для куба. Агрегация
 будет выполняться по элементам со второго на первый уровень измерения,
 с использованием метода расчёта основного механизма агрегации - «Сумма».
 После настройки будет выполнен расчёт агрегированных данных. Исходные
 данные и агрегированные данных будут выведены в консоль. Например:


Измерения куба:


- Факты


- Справочник 1


- Справочник 2


Настройка параметров агрегации выполняется для измерения:
 Справочник 1


Исходные данные:


1 2 3 4 5 6 7 8 9 1 1 1 1 1 1


Агрегированные данные:


3 2 6 5 9 8


Количество агрегированных элементов: 6


См. также:


[IBasicMatrixAggregator](IBasicMatrixAggregator.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
