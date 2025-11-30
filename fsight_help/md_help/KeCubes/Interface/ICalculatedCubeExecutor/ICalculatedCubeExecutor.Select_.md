# ICalculatedCubeExecutor.Select_

ICalculatedCubeExecutor.Select_
-


# ICalculatedCubeExecutor.Select_


## Синтаксис


Select_(Coord: [IMatrixCoord](kematrix.chm::/interface/imatrixcoord/imatrixcoord.htm); [Value: Boolean = True);


## Параметры


Coord. Координата в матрице, которую необходимо отметить для дальнейшего расчета значения по ней.


Value. Значение, определяющее состояние отметки координаты. True - координата отмечена, False - не отмечена.


## Описание


Метод Select_ осуществляет отметку указанной координаты в матрице, для дальнейшего вычисления значения по данной координате.


## Пример


Для выполнения примера, предполагается наличие вычисляемого куба с идентификатором "Calc_Cube". В кубе имеется два измерения.


			Sub UserProc;

Var

    MB: IMetabase;

    Cube: ICalculatedCubeInstance;

    Exe: ICalculatedCubeExecutor;

    Mat: IMatrix;

    Coord: IMatrixCoord;

    Ite: IMatrixIterator;

Begin

    MB := MetabaseClass.Active;

    Cube := Mb.ItemById("Calc_Cube").Open(Null) As ICalculatedCubeInstance;

    Exe := Cube.CreateExecutor(Null);

    (Exe As ICubeInstanceDestinationExecutor).PrepareExecute(Null);

    Mat := Exe.Matrix;

    Ite := Mat.CreateIterator;

    //Определяем координату
    Coord := Mat.CreateCoord;

    Coord.Item(0) := 0;

    Coord.Item(1) := 1;

    Exe.Select_(Coord); //Выделяем элемент по координате
    //Определяем координату
    Coord := Mat.CreateCoord;

    Coord.Item(0) := 1;

    Coord.Item(1) := 1;

    Exe.Select_(Coord); //Выделяем элемент по координате
    Exe.EvaluateOnly := EvaluateOnlyType.Selected; //Вычислять только выделенные координаты
    Exe.Execute;

    Ite.Move(IteratorDirection.First);

    While Ite.Valid Do

        Debug.WriteLine(Ite.Value);

        Ite.Move(IteratorDirection.Next);

    End While;

End Sub UserProc;


После выполнения примера у куба будут вычислены только выделенные координаты. Рассчитанные значения будут выведены в окно консоли.


См. также:


[ICalculatedCubeExecutor](ICalculatedCubeExecutor.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
