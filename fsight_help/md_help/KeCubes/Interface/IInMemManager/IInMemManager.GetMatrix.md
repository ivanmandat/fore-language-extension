# IInMemManager.GetMatrix

IInMemManager.GetMatrix
-


# IInMemManager.GetMatrix


## Синтаксис


GetMatrix(Executor: [ICubeInstanceDestinationExecutor](../ICubeInstanceDestinationExecutor/ICubeInstanceDestinationExecutor.htm);
 Selection: [IDimSelectionSet](KeDims.chm::/interface/IDimSelectionSet/IDimSelectionSet.htm);
 [[Options](../../Enums/CubeInstanceDestinationExecutorOptions.htm):
 Integer = 0]): [IMatrix](KeMatrix.chm::/Interface/IMatrix/IMatrix.htm);


## Параметры


Executor. Объект, предназначенный
 для расчёта куба.


Selection. Отметка, в соответствии
 с которой осуществляется расчёт.


Options. Параметры расчёта
 куба.


## Описание


Метод GetMatrix возвращает матрицу
 с данными из кеша в соответствии с заданными параметрами расчёта куба.


## Комментарии


Для проверки наличия в кеше данных для куба используйте метод [CheckHasMatrix](IInMemManager.CheckHasMatrix.htm).


## Пример


Для выполнения примера предполагается наличие в репозитории куба с идентификатором
 «STD_CUBE». В кубе имеется измерение с идентификатором «Country». В репозитории
 используется механизм кеширования In-Memory.


Добавьте ссылки на системные сборки: Cubes, Metabase.


	Sub UserProc;

	Var

	    Mb: IMetabase;

	    CubeInst: ICubeInstance;

	    DestInst: ICubeInstanceDestination;

	    InMem: IInMemManager;

	    DimSS: IDimSelectionSet;

	    DimS: IDimSelection;

	    Matr: IMatrix;

	Begin

	    Mb := MetabaseClass.Active;

	    // Открытие куба

	    CubeInst := Mb.ItemById("STD_CUBE").Open(Null) As ICubeInstance;

	    DestInst := CubeInst.Destinations.DefaultDestination;

	    // Отметка, в соответствии с которой осуществляется работа

	    DimSS := DestInst.CreateDimSelectionSet;

	    For Each DimS In DimSS Do

	        If DimS.Dimension.Ident = "COUNTRY" Then

	            DimS.SelectElement(0, False);

	        Else

	            DimS.SelectAll;

	        End If;

	    End For;

	    // Менеджер для работы с кешем In-Memory

	    InMem := New InMemManager.Create;

	    // Проверка наличия данных в кеше

	    If InMem.CheckHasMatrix(DestInst) Then

	        // Получение матрицы с данными

	        Matr := InMem.GetMatrix(DestInst.CreateExecutor, DimSS);

	        // Просмотр матрицы

	        ShowMatrix(Matr);

	        // Обновление данных в кеше из источника

	        InMem.UpdateBySelection(DestInst, DimSS);

	    Else

	        InMem.PrepareMatrixPartial(DestInst, DimSS);

	    End If;

	End Sub UserProc;


	Sub ShowMatrix(Matr: IMatrix);

	Var

	    Iter: IMatrixIterator;

	Begin

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


При выполнении примера будет осуществлена проверка на наличие кешированных
 данных для указанного куба. Если кешированные данные имеются, то будет
 получена матрица с данными в соответствии с указанной отметкой. Полученные
 данные будут выведены в консоль среды разработки, после этого данные в
 кеше будут обновлены в соответствии с данными источника.


Если кешированных данных нет, то будет отстроена и сохранена новая матрица
 с данными.


См. также:


[IInMemManager](IInMemManager.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
