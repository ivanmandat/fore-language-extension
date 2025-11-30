# IMatrixDataSource.CreateDimSelectionSet

IMatrixDataSource.CreateDimSelectionSet
-


# IMatrixDataSource.CreateDimSelectionSet


## Синтаксис


CreateDimSelectionSet: [IDimSelectionSet](KeDims.chm::/interface/IDimSelectionSet/IDimSelectionSet.htm);


## Описание


Метод CreateDimSelectionSet
 создает набор отметок для измерений источника данных.


## Пример


Для выполнения примера предполагается наличие в репозитории куба с идентификатором
 CUBE. Куб имеет не менее двух измерений, в каждом измерении не менее двух
 элементов. В измерении «Факты»
 первые два элемента не являются [вычисляемыми](UiNavObj.chm::/Cube/CreateCube/Master_Standart/UiMd_Cube_CreateCube_Master_Standart_5.htm).


Добавьте ссылки на системные сборки: Cubes, Dimension, Matrix, Metabase.


	Sub UserProc;

	Var

	    MB: IMetabase;

	    CubeInst: ICubeInstance;

	    Destination: ICubeInstanceDestination;

	    DimsInstance: ICubeInstanceDimensions;

	    MatrDS: IMatrixDataSource;

	    DimSS: IDimSelectionSet;

	    Sel: IDimSelection;

	    Matr: IMatrix;

	    Coord: IMatrixCoord;

	    i: Integer;

	Begin

	    // Получим репозиторий

	    MB := MetabaseClass.Active;

	    // Откроем куб

	    CubeInst := MB.ItemById("CUBE").Open(Null) As ICubeInstance;

	    Destination := CubeInst.Destinations.DefaultDestination;

	    MatrDS := Destination As IMatrixDataSource;

	    // Получим данные измерений

	    DimsInstance := Destination.Dimensions;

	    // Создадим набор отметок

	    DimSS := MatrDS.CreateDimSelectionSet;

	    For i := 0 To DimSS.Count - 1 Do

	        Sel := DimSS.Item(i);

	        Sel.SelectElement(0, False);

	        Sel.SelectElement(1, False);

	    End For;

	    // Рассчитаем матрицу

	    Matr := MatrDS.Execute(DimSS);

	    Coord := Matr.CreateCoord;

	    For i := 0 To Matr.DimensionCount - 1 Do

	        Coord.Item(i) := 0;

	    End For;

	    Matr.Item(Coord) := 101;

	    // Сохраним матрицу в источник

	    MatrDS.SaveData(Matr);

	End Sub UserProc;


В результате выполнения примера будет создана коллекция отметок для
 измерений куба. В измерениях будет установлена отметка. После этого будет
 получена матрица с данными и для указанного элемента матрицы будет изменено
 значение. Изменения будут сохранены обратно в куб.


См.также:


[IMatrixDataSource](IMatrixDataSource.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
