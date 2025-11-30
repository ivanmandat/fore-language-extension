# ICalculatedCubeInstance.CreateExecutor

ICalculatedCubeInstance.CreateExecutor
-


# ICalculatedCubeInstance.CreateExecutor


## Синтаксис


CreateExecutor(Selection: [IDimSelectionSet](kedims.chm::/interface/idimselectionset/idimselectionset.htm)):
 [ICalculatedCubeExecutor](../ICalculatedCubeExecutor/ICalculatedCubeExecutor.htm);


## Параметры


Selection. Отметка вычисляемого
 куба, в соответствии с которой будет отстроена матрица куба.


## Описание


Метод CreateExecutor создает
 объект, осуществляющий расчет результирующей матрицы вычисляемого куба.


## Комментарии


Если в качестве значения параметра Selection
 передаётся значение Null,
 то отстраивается матрица по всем элементам измерений куба.


## Пример


Для выполнения примера в репозитории предполагается наличие вычисляемого
 куба с идентификатором Calc_Cube.


			Sub UserProc;

Var

    MB: IMetabase;

    CubeInst: ICalculatedCubeInstance;

    Exec: ICalculatedCubeExecutor;

    Matr: IMatrix;

    Iter: IMatrixIterator;

Begin

    MB := MetabaseClass.Active;

    CubeInst := Mb.ItemById("Calc_Cube").Open(Null) As ICalculatedCubeInstance;

    Exec := CubeInst.CreateExecutor(Null);

    (Exec As ICubeInstanceDestinationExecutor).PrepareExecute(Null);

    Exec.Execute;

    Matr := Exec.Matrix;

    Iter := Matr.CreateIterator;

    Iter.Move(IteratorDirection.First);

    While Iter.Valid Do

        Debug.WriteLine(Iter.Value);

        Iter.Move(IteratorDirection.Next);

    End While;

End Sub UserProc;


После выполнения примера будет рассчитана результирующая матрица вычисляемого
 куба. Все значения матрицы будут выведены в консоль.


См. также:


[ICalculatedCubeInstance](ICalculatedCubeInstance.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
