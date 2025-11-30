# ICubeExecuteDataRights.Rights

ICubeExecuteDataRights.Rights
-


# ICubeExecuteDataRights.Rights


## Синтаксис


Rights(Coord: [IMatrixCoord](kematrix.chm::/interface/imatrixcoord/imatrixcoord.htm)):
 [CubeDataRights](../../Enums/CubeDataRights.htm);


## Параметры


Coord. Координата точки данных.


## Описание


Свойство Rights возвращает фактические
 права доступа на точку данных.


## Пример


Для выполнения примера предполагается наличие в репозитории базы данных
 временных рядов с идентификатором FC_A.


Добавьте ссылки на системные сборки: Cubes, Dimensions, MathFin, Matrix,
 Metabase.


			Sub UserProc;

Var

    Mb: IMetabase;

    Cat: IMetabaseObject;

    Inst: IRubricatorInstance;

    Cub: ICubeInstance;

    Dest: ICubeInstanceDestination;

    Exe: ICubeInstanceDestinationExecutor;

    Sels: IDimSelectionSet;

    Sel: IDimSelection;

    Arr: Array[1] Of Integer;

    Si, Sc: Integer;

    Mat: IMatrix;

    ExecuteResult: ICubeExecuteResult;

    It: IMatrixIterator;

    Coo: IMatrixCoord;

    Sto: ICubeInstanceStorage;

    Rights: ICubeExecuteDataRights;

Begin

    Mb := MetabaseClass.Active;

    // Получим базу данных временных рядов

    Cat := Mb.ItemById("FC_A").Bind;

    Inst := Cat.Open(Null) As IRubricatorInstance;

    // Преобразуем открытый экземпляр БДВР в экземпляр куба

    Cub := Inst As ICubeInstance;

    // Создадим отметку куба

    Dest := Cub.Destinations.DefaultDestination;

    Sels := Dest.CreateDimSelectionSet;

    Sc := Sels.Count - 1;

    For Si := 0 To Sc Do

        Sel := Sels.Item(Si);

        Sel.SelectAll;

    End For;

    // Создадим объект для расчёта матрицы куба

    Exe := Dest.CreateExecutor;

    (Exe As IRubricatorFactorIO).MultipleFactors := True;

    // Зададим показатель, который должен быть рассчитан

    Arr[0] := 125616;

    (Exe As IRubricatorFactorExecutor).SetFactorKeys(Arr);

    // Определим права доступа на данные, которые будут возвращены после расчёта - чтение и изменение данных

    (Sels As ICubeExecuteSetup).RequiredDataRights := CubeDataRights.ReadWrite;

    Exe.PrepareExecute(Sels);

    // Получим матрицу с данными

    Mat := Exe.Matrix;

    // Рассчитаем куб по заданной матрице

    ExecuteResult := CubeClass.ExecuteResult(Mat);

    Rights := ExecuteResult.DataRights;

    If Rights <> Null Then

        Exe.PerformExecute;

        Mat.ValueFlag := 1;

        // Создадим объект, представляющий собой координату в матрице

        Coo := Rights.CoordMatrix.CreateCoord;

        // Создадим итератор для навигации по элементам матрицы

        It := Mat.CreateIterator;

        // Заполним матрицу случайными данными

        It.Move(IteratorDirection.First);

        While It.Valid Do

            It.ValueFlag := 0;

            If Rights.Rights(Coo) = CubeDataRights.ReadWrite Then

                It.ValueFlag := 1;

                It.Value := Math.RandBetweenI(0, 5);

            End If;

            It.Move(IteratorDirection.Next);

        End While;

        // Создадим объект для сохранения данных в куб

        Sto := Dest.CreateStorage;

        (Sto As IRubricatorFactorIO).MultipleFactors := True;

        // Сохраним матрицу с данными в куб

        Sto.SaveMatrix(Mat, 1);

    End If;

End Sub UserProc;


После выполнения примера будут получены данные показателя с ключом «125616»,
 на которые есть доступ для чтения и записи. Затем данные будут изменены
 и сохранены.


См. также:


[ICubeExecuteDataRights](ICubeExecuteDataRights.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
