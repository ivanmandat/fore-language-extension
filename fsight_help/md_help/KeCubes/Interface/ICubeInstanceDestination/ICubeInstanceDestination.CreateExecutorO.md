# ICubeInstanceDestination.CreateExecutorO

ICubeInstanceDestination.CreateExecutorO
-


# ICubeInstanceDestination.CreateExecutorO


## Синтаксис


CreateExecutorO([Options](../../Enums/CubeInstanceDestinationExecutorOptions.htm):
 Integer): [ICubeInstanceDestinationExecutor](../ICubeInstanceDestinationExecutor/ICubeInstanceDestinationExecutor.htm);


## Параметры


Options. Параметры расчёта
 куба.


## Описание


Метод CreateExecutorO создает
 объект, осуществляющий расчёт результирующей матрицы куба с использованием
 параметров.


## Комментарии


В качестве значения параметра Options
 указывается значение или комбинация значений перечисления [CubeInstanceDestinationExecutorOptions](../../Enums/CubeInstanceDestinationExecutorOptions.htm).


## Пример


Для выполнения примера предполагается наличие в репозитории куба с идентификатором
 «CUBE».


Добавьте ссылки на системные сборки: Cubes, Dimensions, Matrix, Metabase.


			Sub UserProc;

Var

    MB: IMetabase;

    CubeInst: ICubeInstance;

    DefDest: ICubeInstanceDestination;

    SelSet: IDimSelectionSet;

    i: integer;

    DestExec: ICubeInstanceDestinationExecutor;

    Proxy: IMatrix;

    Iter: IMatrixIterator;

Begin

    MB := MetabaseClass.Active;

    CubeInst := MB.ItemById("CUBE").Open(Null) As ICubeInstance;

    DefDest := CubeInst.Destinations.DefaultDestination;

    SelSet := DefDest.CreateDimSelectionSet;

    For i := 0 To SelSet.Count - 1 Do

        SelSet.Item(i).SelectAll;

    End For;

    Debug.WriteLine("---------------Значения-------------------");

    DestExec := DefDest.CreateExecutorO(CubeInstanceDestinationExecutorOptions.MatrixProxy);

    DestExec.PrepareExecute(SelSet);

    DestExec.PerformExecute(False);

    Proxy := DestExec.Matrix;

    Iter := Proxy.CreateIterator;

    Iter.Move(IteratorDirection.First);

    i := 0;

    While Iter.Valid Do

        Debug.WriteLine(i.ToString + " Iter.Value = " + Iter.Value);

        Iter.Move(IteratorDirection.Next);

        i := i + 1;

    End While;

End Sub UserProc;


При выполнении примера будет произведён расчёт куба ADOMD. Отметка измерений
 для расчёта формируется следующим образом:


	- Измерения «DATE» и «TERRITORY» будут расположены по строкам/столбцам
	 соответственно. В измерениях будут отмечены все элементы;


	- Все остальные измерения будут включены в фиксированные, по ним
	 будет отмечен первый элемент.


При расчёте из результирующей матрицы будут исключены фиксированные
 измерения. Результаты расчёта будут выведены в консоль среды разработки.


См. также:


[ICubeInstanceDestination](ICubeInstanceDestination.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
