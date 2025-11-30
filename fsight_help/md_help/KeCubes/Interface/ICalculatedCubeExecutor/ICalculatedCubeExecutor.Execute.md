# ICalculatedCubeExecutor.Execute

ICalculatedCubeExecutor.Execute
-


# ICalculatedCubeExecutor.Execute


## Синтаксис


Execute;


## Описание


Метод Execute осуществляет расчет
 результирующей матрицы вычисляемого куба.


## Пример


Для выполнения примера в репозитории предполагается наличие вычисляемого
 куба с идентификатором Calc_Cube. В кубе имеется два измерения.


Добавьте ссылки на системные сборки: Cubes, Matrix, Metabase.


			Sub UserProc;

Var

    MB: IMetabase;

    CubeInst: ICalculatedCubeInstance;

    Exec: ICalculatedCubeExecutor;

    Matr: IMatrix;

    Coord: IMatrixCoord;

    Iter: IMatrixIterator;

Begin

    MB := MetabaseClass.Active;

    CubeInst := Mb.ItemById("Calc_Cube").Open(Null) As ICalculatedCubeInstance;

    Exec := CubeInst.CreateExecutor(Null);

    // Подготовка пустой матрицы

    (Exec As ICubeInstanceDestinationExecutor).PrepareExecute(Null);

    Matr := Exec.Matrix;

    Iter := Matr.CreateIterator;

    // Определяем координату

    Coord := Matr.CreateCoord;

    Coord.Item(0) := 0;

    Coord.Item(1) := 1;

    Exec.Selected(Coord) := True; // Выделяем элемент по координате

    // Определяем координату

    Coord := Matr.CreateCoord;

    Coord.Item(0) := 1;

    Coord.Item(1) := 1;

    Exec.Selected(Coord) := True; //Выделяем элемент по координате

    Exec.EvaluateOnly := EvaluateOnlyType.Selected; // Вычислять только выделенные координаты

    Exec.Execute;

    Iter.Move(IteratorDirection.First);

    While Iter.Valid Do

        Debug.WriteLine(Iter.Value);

        Iter.Move(IteratorDirection.Next);

    End While;

End Sub UserProc;


После выполнения примера у куба будут вычислены только выделенные координаты.
 Рассчитанные значения будут выведены в консоль среды разработки.


См. также:


[ICalculatedCubeExecutor](ICalculatedCubeExecutor.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
