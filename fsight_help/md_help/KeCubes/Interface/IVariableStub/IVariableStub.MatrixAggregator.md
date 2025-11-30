# IVariableStub.MatrixAggregator

IVariableStub.MatrixAggregator
-


# IVariableStub.MatrixAggregator


## Синтаксис


MatrixAggregator(DimInstance: [IDimInstance](KeDims.chm::/interface/IDimInstance/IDimInstance.htm)):
 [IBasicMatrixAggregator](KeMatrix.chm::/Interface/IBasicMatrixAggregator/IBasicMatrixAggregator.htm);


## Параметры


DimInstance - данные, которые
 необходимо сагрегировать.


## Описание


Свойство MatrixAggregator возвращает
 объект, содержащий свойства и методы, необходимые для агрегации данных.


## Пример


Для выполнения примера предполагается наличие в репозитории контейнера
 моделирования с идентификатором «CONT_MODEL», содержащим переменную с
 идентификатором «VAR». Переменная должна содержать несколько календарных
 уровней.


Добавьте ссылки на системные сборки «Metabase», «Ms», «Cubes», «Matrix»,
 «Dimensions».


			Sub UserProc;

Var

    MB: IMetabase;

    MObj, VObj: IMetabaseObjectDescriptor;

    Stub: IVariableStub;

    Varable: IMsVariable;

    FactData: IDimInstance;

    BasicAggr: IBasicMatrixAggregator;

    Dim: IDimensionModel;

    Lvl: IDimLevels;

    LevAggr: IBasicMatrixLevelAggregator;

    CubeInst: ICubeInstance;

    Dest: ICubeInstanceDestination;

    MatrDS: IMatrixDataSource;

    DimSS: IDimSelectionSet;

    Matr, Matr1: IMatrix;

    Iter, Iter1: IMatrixIterator;

    i: Integer;

Begin

    MB := MetabaseClass.Active;

    MObj := MB.ItemById("CONT_MODEL");

    VObj := MB.ItemByIdNamespace("VAR", MObj.Key);

    Stub := VObj.Bind As IVariableStub;

    Varable := VObj.Bind As IMsVariable;

    FactData := (Stub.Calendar As IMetabaseObject).Open(Null) As IDimInstance;

    BasicAggr := Stub.MatrixAggregator(FactData);

//Для календарного измерения

    Dim := Stub.Calendar;

    Lvl := Dim.Levels;

    BasicAggr.Dimension := Dim;

    LevAggr := BasicAggr.LevelAggregation(Lvl.Item(Lvl.Count - 2));

    LevAggr.Operation := BasicAggregatorOperation.ActualMean;

    LevAggr.Include(Lvl.Item(Lvl.Count - 1)) := True;

//Получение исходной матрицы с данными

    CubeInst := (Varable.Cube As IMetabaseObject).Open(Null) As ICubeInstance;

    Dest := CubeInst.Destinations.DefaultDestination;

    MatrDS := Dest As IMatrixDataSource;

    DimSS := MatrDS.CreateDimSelectionSet;

    For i := 0 To DimSS.Count - 1 Do

        DimSS.Item(i).SelectAll;

    End For;

    Matr := MatrDS.Execute(DimSS);

//Выполнить агрегацию по календарному измерению

    Matr1 := BasicAggr.Execute(0, Matr);

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


После выполнения примера для переменной будет создан агрегатор данных.
 Агрегация будет осуществляться по элементам календарного измерения с последнего
 на предпоследний уровень, с использованием метода фактического среднего.
 После настройки будет осуществлен расчет агрегированных данных. Исходная
 матрица и матрица агрегированных данных будет выведена в консоль среды
 разработки.


См. также:


[IVariableStub](IVariableStub.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
