# IDimSelectionSet.EndUpdate

IDimSelectionSet.EndUpdate
-


# IDimSelectionSet.EndUpdate


## Синтаксис


EndUpdate;


## Описание


Метод EndUpdate снимает запрет
 на выполнение событий.


## Комментарии


После вызова метода будут выполнены все события, произведенные в промежуток
 между вызовами методов [IDimSelectionSet.BeginUpdate](IDimSelectionSet.BeginUpdate.htm)
 и IDimSelectionSet.EndUpdate.


## Пример


Для выполнения примера в репозитории предполагается наличие куба с идентификатором
 «CUBE_SEP_PARAMS».


Добавьте ссылки на системные сборки: Cubes, Dimensions, Matrix, Metabase.


			Sub UserProc;

Var

    mb: IMetabase;

    cubeinst: ICubeInstance;

    matrix: Imatrix;

    matrixds: IMatrixDataSource;

    dimselectionset: IDimSelectionSet;

    coord: IMatrixCoord;

    i: integer;

Begin

    // Получим репозиторий

    mb := MetabaseClass.Active;

    // Получим куб

    cubeinst := mb.ItemById("CUBE_SEP_PARAMS").Open(Null) As ICubeInstance;

    // Получим место назначения в качестве матрицы

    matrixds := CubeInst.Destinations.DefaultDestination As IMatrixDataSource;

    // Создадим набор отметок для измерений

    dimselectionset := matrixds.CreateDimSelectionSet;

    // Установим запрет на изменение

    dimselectionset.BeginUpdate;

    // В матрице сохраним коллекцию отметок

    matrix := matrixds.Execute(dimselectionset);

    // Создадим координату в матрице

    coord := matrix.CreateCoord;

    // Для всех элементов координаты в измерении изменим значение

    For i := 0 To matrix.DimensionCount - 1 Do

        coord.Item(i) := 0;

    End For;

    // Зададим новое значение для координаты в матрице

    matrix.Item(Coord) := 10;

    // Сохраним изменения в матрице

    matrixds.SaveData(matrix);

    // Применим изменения

    dimselectionset.EndUpdate;

End Sub UserProc;


После выполнения примера на базе куба будет получена матрица. Для координаты
 матрицы будет изменено значение, после чего измененная матрица будет сохранена
 обратно в куб.


См. также:


[IDimSelectionSet](IDimSelectionSet.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
