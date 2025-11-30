# IMatrixEx.MemoryUsed

IMatrixEx.MemoryUsed
-


# IMatrixEx.MemoryUsed


## Синтаксис


MemoryUsed: Double;


## Описание


Свойство MemoryUsed возвращает
 приблизительный размер памяти в байтах, используемой матрицей.


## Комментарии


Приблизительный размер памяти обоснован тем, что некоторые коллекции,
 используемые в матрицах, не возвращают информацию о размере использованной
 или зарезервированной памяти.


## Пример


Для выполнения примера в репозитории предполагается наличие куба с идентификатором
 CUBE.


Добавьте ссылки на системные сборки: Cubes, Dimensions, Matrix, Metabase.


			Sub UserProc;

Var

    MB: IMetabase;

    Cube: ICubeInstance;

    Dest: ICubeInstanceDestination;

    Dests: ICubeInstanceDestinations;

    SelSet: IDimSelectionSet;

    Exec: ICubeInstanceDestinationExecutor;

    MatrixEx: IMatrixEx;

    Option: Integer;

    i: integer;

Begin

    // Получим данные репозитория

    MB := MetabaseClass.Active;

    // Получим экземпляр куба

    Cube := MB.ItemById("CUBE").Open(Null) As ICubeInstance;

    // Установим вариант отображения куба по умолчанию

    Dests := Cube.Destinations;

    Dest := Dests.DefaultDestination;

    // Добавим в отметку
 все элементы всех справочников куба

    SelSet := Dest.CreateDimSelectionSet;

    For i := 0 To SelSet.Count - 1 Do

        SelSet.Item(i).SelectAll;

    End For;

    // Выполним расчёт куба

    Option := CubeInstanceDestinationExecutorOptions.None;

    Exec := Dest.CreateExecutorO(Option);

    Exec.PrepareExecute(SelSet);

    Exec.PerformExecute(True);

    // Выведем информацию о памяти, используемой результирующей
 матрицей

    MatrixEx := Exec.Matrix As IMatrixEx;

    Debug.WriteLine("Памяти зарезервировано: " + MatrixEx.MemoryReserved.ToString + " байт");

    Debug.WriteLine("Памяти использовано: " + MatrixEx.MemoryUsed.ToString + " байт");

End Sub UserProc;


В результате выполнения примера будут отмечены все элементы куба, после
 чего будет выполнен расчёт куба и в консоль среды разработки будет выведена
 информация о зарезервированной и использованной памяти результирующей
 матрицы.


Пример вывода в консоль:


Памяти зарезервировано: 13352 байт


Памяти использовано: 10160 байт


См. также:


[IMatrixEx](IMatrixEx.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
