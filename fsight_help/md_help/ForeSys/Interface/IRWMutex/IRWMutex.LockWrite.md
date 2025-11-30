# IRWMutex.LockWrite

IRWMutex.LockWrite
-


# IRWMutex.LockWrite


## Синтаксис


LockWrite;


## Описание


Метод LockWrite осуществляет
 блокировку на запись данных.


## Комментарии


После окончания изменения данных для снятия блокировки выполните метод
 [IRWMutex.UnlockWrite](IRWMutex.UnlockWrite.htm).


## Пример


Для выполнения примера предполагается наличие в репозитории куба с идентификатором
 STD_CUBE. Для куба включена возможность кеширования данных.


	Sub UserProc;

	Var

	    MB: IMetabase;

	    CubeInst: ICubeInstance;

	    CubeDest: ICubeInstanceDestination;

	    Executor: ICubeInstanceDestinationExecutor;

	    Sels: IDimSelectionSet;

	    Sel: IDimSelection;

	    ResultMatrix: IMatrix;

	    Iter: IMatrixIterator;

	    IterMutex: IRWMutex;

	Begin

	    MB := MetabaseClass.Active;

	    //Открываем куб

	    CubeInst := MB.ItemById("STD_CUBE").Open(Null) As ICubeInstance;

	    CubeDest := CubeInst.Destinations.DefaultDestination;

	    Executor := CubeDest.CreateExecutor;

	    //Отметка, в соответствии с которой будет формироваться матрица данных

	    Sels := CubeDest.CreateDimSelectionSet;

	    For Each Sel In Sels Do

	        Sel.SelectAll;

	    End For;

	    Executor.PrepareExecute(Sels);

	    //Получение матрицы из кеша

	    Executor.PerformExecuteO(CubeInstanceDestinationExecutorOptions.Cached);

	    ResultMatrix := Executor.Matrix;

	    Iter := ResultMatrix.CreateIterator;

	    //Если данные получены из кеша, то итератор поддерживает IRWMutex

	    //и необходима блокировка перед выполнением действий

	    If Iter Is IRWMutex Then

	        IterMutex := Iter As IRWMutex;

	        //Блокировка данных на изменение

	        IterMutex.LockWrite;

	    End If;

	    Iter.Move(IteratorDirection.First);

	    While Iter.Valid Do

	        //...

	        //Работа с итератором для изменения данных

	        //...

	        Iter.Move(IteratorDirection.Next);

	    End While;

	    //Снятие блокировки

	    If IterMutex <> Null Then

	        If IterMutex.HasWriteLock Then

	            IterMutex.UnlockWrite;

	        End If;

	    End If;

	End Sub UserProc;


При выполнении примера из кеша куба будет получена матрица с данными.
 Для работы с матрицей и изменения данных в ней осуществляется блокировка
 кеша на запись.


См. также:


[IRWMutex](IRWMutex.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
