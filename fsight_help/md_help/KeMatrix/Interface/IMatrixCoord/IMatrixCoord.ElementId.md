# IMatrixCoord.ElementId

IMatrixCoord.ElementId
-


# IMatrixCoord.ElementId


## Синтаксис


ElementId(Index: Integer): String;


## Параметры


Index - индекс измерения.


## Описание


Свойство ElementId определяет
 идентификатор элемента, по заданному измерению, которому соответствует
 координата в матрице.


## Пример


Для выполнения примера предполагается наличие куба с идентификатором
 "Cube_1", содержащего два измерения. В первом измерении содержаться
 элементы с числовыми идентификаторами, второе измерение - календарное,
 содержащее уровень "Месяцы".


Добавьте ссылки на системные сборки: Cubes, Dimensions, Matrix, Metabase.


	Sub UserProc;

	    Var

	        MB: IMetabase;

	        CubeInst: ICubeInstance;

	        MatrDS: IMatrixDataSource;

	        DimSS: IDimSelectionSet;

	        Matr: IMatrix;

	        Coord: IMatrixCoord;

	        i: Integer;

	    Begin

	        MB := MetabaseClass.Active;

	        CubeInst := MB.ItemById("Cube_1").Open(Null) As ICubeInstance;

	        MatrDS := CubeInst.Destinations.DefaultDestination As IMatrixDataSource;

	        DimSS := MatrDS.CreateDimSelectionSet;

	        DimSS.Item(0).SelectAll;

	        DimSS.Item(1).SelectAll;

	        Matr := MatrDS.Execute(DimSS);

	        Coord := Matr.CreateCoord;

	        Coord.ElementId(0) := "3";

	        Coord.ElementId(1) := "MONTHS:2.2002";

	        Debug.WriteLine(Matr.Item(Coord));

	End Sub UserProc;


После выполнения примера на базе куба будет получена матрица данных.
 Значение указанного элемента матрицы будет выведено в консоль среды разработки.
 Обращение к элементу осуществляется через идентификаторы соответствующих
 элементов измерений.


См.также:


[IMatrixCoord](IMatrixCoord.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
