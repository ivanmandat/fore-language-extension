# IMatrixEx.CreateWritableProxyO

IMatrixEx.CreateWritableProxyO
-


# IMatrixEx.CreateWritableProxyO


## Синтаксис


CreateWritableProxyO(Options: Integer): [IMatrix](../IMatrix/IMatrix.htm);


## Параметры


Options. Параметры создания
 объекта-посредника матрицы данных.


## Описание


Метод CreateWritableProxyO создаёт
 объект-посредник матрицы данных.


## Комментарии


В параметре Options используйте
 значение «0». Создаваемый объект-посредник позволяет раздельно работать
 с исходными и изменёнными данными матрицы. Для управления данными приведите
 результат метода CreateWritableProxyO
 к интерфейсу [IMatrixWritableProxy](../IMatrixWritableProxy/IMatrixWritableProxy.htm).


## Пример


Для выполнения примера предполагается наличие в репозитории куба с идентификатором
 CUBE.


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

	    Wp: IMatrixWritableProxy;

	    Iter: IMatrixIterator;

	    Mc: IMatrixCoord;

	Begin

	    MB := MetabaseClass.Active;

	    CubeInst := MB.ItemById("CUBE").Open(Null) As ICubeInstance;

	    DefDest := CubeInst.Destinations.DefaultDestination;

	    SelSet := DefDest.CreateDimSelectionSet;

	    For i := 0 To SelSet.Count - 1 Do

	        SelSet.Item(i).SelectAll;

	    End For;

	    DestExec := DefDest.CreateExecutorO(CubeInstanceDestinationExecutorOptions.MatrixProxy);

	    DestExec.PrepareExecute(SelSet);

	    DestExec.PerformExecute(False);

	    Proxy := (DestExec.Matrix As IMatrixEx).CreateWritableProxyO(0);

	    Wp := Proxy As IMatrixWritableProxy;

	    Debug.WriteLine("---------------Исходные значения в матрице и матрице-посреднике-------------------");

	        ShowMatrix("Proxy", Proxy);

	        ShowMatrix("BaseMatrix", Wp.BaseMatrix);

	        ShowMatrix("ChangeMatrix", Wp.ChangeMatrix);

	    Debug.WriteLine("---------------Добавление нового значения-----------------------------------------");

	    Mc := Proxy.CreateCoord;

	    Iter := Proxy.CreateIterator;

	    Iter.Move(IteratorDirection.First);

	    Iter.PutCurrentPos(Mc);

	    For i := 0 To Mc.Count - 1 Do

	        Mc.Item(i) := Mc.Item(i) + 1

	    End For;

	    //Проверка, существует ли координата

	    Iter.Goto(Mc);

	    If Iter.Valid Then

	        Debug.WriteLine("Координата уже существует.");

	    Else

	        Debug.WriteLine("Координата еще не существует.");

	    End If;

	    //Переход к координате и задание значения. Если координата еще не существует, то матрица будет расширена

	    Iter.PutCoord(Mc);

	    Iter.Value := 100500;

	    Debug.WriteLine("Новое значение = " + Iter.Value);

	    Debug.WriteLine("---------------Изменённые/добавленные значения------------------------------------");

	        ShowMatrix("Proxy", Proxy);

	        ShowMatrix("BaseMatrix", Wp.BaseMatrix);

	        ShowMatrix("ChangeMatrix", Wp.ChangeMatrix);

	    Debug.WriteLine("---------------после ApplyChanges-------------------------------------------------");

	    Wp.ApplyChanges;

	        ShowMatrix("Proxy", Proxy);

	        ShowMatrix("BaseMatrix", Wp.BaseMatrix);

	        ShowMatrix("ChangeMatrix", Wp.ChangeMatrix);

	    Debug.WriteLine("---------------Повторное изменение значения по координате-------------------------");

	    Iter.PutCoord(Mc);

	    Iter.Value := -Iter.Value;

	    Debug.WriteLine("Новое значение = " + Iter.Value);

	    Debug.WriteLine("---------------Изменённые/добавленные значения------------------------------------");

	        ShowMatrix("Proxy", Proxy);

	        ShowMatrix("BaseMatrix", Wp.BaseMatrix);

	        ShowMatrix("ChangeMatrix", Wp.ChangeMatrix);

	    Debug.WriteLine("---------------после RevertChanges------------------------------------------------");

	    Wp.RevertChanges;

	        ShowMatrix("Proxy", Proxy);

	        ShowMatrix("BaseMatrix", Wp.BaseMatrix);

	        ShowMatrix("ChangeMatrix", Wp.ChangeMatrix);

	End Sub UserProc;


	Sub ShowMatrix(MatrixName: String; Matr: IMatrix);

	Var

	    Iter: IMatrixIterator;

	Begin

	    Debug.Write(MatrixName + " : ");

	    If Matr.Count <> 0 Then

	        Iter := Matr.CreateIterator;

	        Iter.Move(IteratorDirection.First);

	        While Iter.Valid Do

	            Debug.Write(Iter.Value + " ");

	            Iter.Move(IteratorDirection.Next);

	        End While;

	        Debug.WriteLine("");

	    Else

	        Debug.WriteLine("Empty");

	    End If;

	End Sub ShowMatrix;


При выполнении примера осуществляется добавление в матрицу нового значения,
 а затем его изменение. В консоль среды разработки выводятся данные исходной
 матрицы, матрицы объекта-посредника и матрицы, в которой хранятся изменённые
 значения на разных стадиях работы с объектом-посредником.


См. также:


[IMatrixEx](IMatrixEx.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
