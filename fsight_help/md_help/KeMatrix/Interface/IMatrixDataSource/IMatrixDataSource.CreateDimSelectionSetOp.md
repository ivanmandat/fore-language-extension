# IMatrixDataSource.CreateDimSelectionSetOp

IMatrixDataSource.CreateDimSelectionSetOp
-


# IMatrixDataSource.CreateDimSelectionSetOp


## Синтаксис


CreateDimSelectionSetOp(Options: Integer):
[IDimSelectionSet](KeDims.chm::/interface/IDimSelectionSet/IDimSelectionSet.htm);


## Параметры


Options. Опции создания набора
 отметок.


## Описание


Метод CreateDimSelectionSetOp
 создает набор отметок для измерений источника данных с учетом дополнительных
 параметров.


## Комментарии


Параметр Options может принимать
 следующие значения:


	- 0. Метод отработает
	 аналогично методу [CreateDimSelectionSet](IMatrixDataSource.CreateDimSelectionSet.htm).


	- 1. Метод вернет пустую
	 коллекцию отметок.


## Пример


Для выполнения примера предполагается наличие в репозитории куба с идентификатором
 CUBE. Куб имеет не менее двух измерений, первое измерение расположено
 по столбцам, второе - по строкам.


Добавьте ссылки на системные сборки: Cubes, Dimensions, Matrix, Metabase.


					Sub UserProc;

		Var

		    MB: IMetabase;

		    CubeInst: ICubeInstance;

		    Destination: ICubeInstanceDestination;

		    DimsInstance: ICubeInstanceDimensions;

		    MatrDS: IMatrixDataSource;

		    DimSS: IDimSelectionSet;

		    Sel1, Sel2: IDimSelection;

		    Matr: IMatrix;

		    Coord: IMatrixCoord;

		    i: Integer;

		Begin

		    MB := MetabaseClass.Active;

		    CubeInst := MB.ItemById("CUBE").Open(Null) As ICubeInstance;

		    Destination := CubeInst.Destinations.DefaultDestination;

		    MatrDS := Destination As IMatrixDataSource;

		    DimsInstance := Destination.Dimensions;

		    DimSS := MatrDS.CreateDimSelectionSetOp(1);

		    Sel1 := DimSS.Add(DimsInstance.Item(0));

		    Sel2 := DimSS.Add(DimsInstance.Item(1));

		    Sel1.SelectElement(0, False);

		    Sel1.SelectElement(1, False);

		    Sel2.SelectElement(0, False);

		    Sel2.SelectElement(1, False);

		    Matr := MatrDS.Execute(DimSS);

		    Coord := Matr.CreateCoord;

		        Debug.WriteLine(Matr.DimensionCount);

		    For i := 0 To Matr.DimensionCount - 1 Do

		        Coord.Item(i) := 0;

		    End For;

		    Matr.Item(Coord) := 101;

		    MatrDS.SaveData(Matr);

		End Sub UserProc;


В результате выполнения примера будет создана пустая коллекция отметок
 для измерений куба. В данную коллекцию будут добавлены два измерения,
 в этих измерениях будут отмечены указанные элементы. После этого на базе
 созданной отметки будет получена матрица с данными и для указанного элемента
 матрицы будет изменено значение. Изменения будут сохранены обратно в куб.


См. также:


[IMatrixDataSource](IMatrixDataSource.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
