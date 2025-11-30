# IMatrix.Count

IMatrix.Count
-


# IMatrix.Count


## Синтаксис


Count: Integer;


## Описание


Свойство Count возвращает количество
 ячеек со значениями в матрице.


## Пример


Для выполнения примера предполагается наличие куба с идентификатором
 «CUBE». Куб содержит в своей структуре два измерения.


Добавьте ссылки на системные сборки: Cubes, Dimensions, Matrix, Metabase.


					Sub UserProc;

		Var

		    MB: IMetabase;

		    CubInst: ICubeInstance;

		    Des: ICubeInstanceDestination;

		    Sels: IDimSelectionSet;

		    Matr: IMatrix;

		    Coord: IMatrixCoord;

		    Sto: ICubeInstanceStorage;

		Begin

		    MB := MetabaseClass.Active;

		    CubInst := MB.ItemById("CUBE").Open(Null) As ICubeInstance;

		    Des := CubInst.Destinations.DefaultDestination;

		    // Отметка куба

		    Sels := Des.CreateDimSelectionSet;

		    Sels.Item(0).SelectAll;

		    Sels.Item(1).SelectAll;

		    // Получение матрицы значений по указанной отметке

		    Matr := Des.Execute(Sels);

		    Debug.WriteLine("Количество ячеек со значениями до изменения: " + Matr.Count.ToString);

		    Matr.ValueFlag := 1;

		    // Изменение значений в ячейках матрицы

		    Coord := Matr.CreateCoord;

		    Coord.Item(0) := 0;

		    Coord.Item(1) := 0;

		    Matr.Item(Coord) := (Matr.Item(Coord) As Double) + 10;

		    Coord.Item(0) := 0;

		    Coord.Item(1) := 1;

		    Matr.Item(Coord) := (Matr.Item(Coord) As Double) + 100;

		    Coord.Item(0) := 0;

		    Coord.Item(1) := 2;

		    Matr.Item(Coord) := (Matr.Item(Coord) As Double) + 1000;

		    Debug.WriteLine("Количество ячеек со значениями после изменения: " + Matr.Count.ToString);

		    Debug.WriteLine("Количество ячеек с флагом 1: " + Matr.CountV(1).ToString);

		    // Сохранение изменений

		    Sto := Des.CreateStorage(CubeInstanceStorageOptions.None);

		    Sto.SaveMatrix(Matr, Matr.ValueFlag);

		End Sub UserProc;


При выполнении примера будет получена матрица с данными из куба. В консоль
 среды разработки будет выведено количество ячеек со значениями. По нескольким
 координатам будут изменены значения. В консоль среды разработки повторно
 будет выведено количество ячеек со значениями, а также количество ячеек,
 отмеченных флагом «1». После этого все изменённые данные будут сохранены
 в куб.


См. также:


[IMatrix](IMatrix.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
