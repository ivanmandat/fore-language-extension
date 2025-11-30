# IMatrixModel.LowerBoundI

IMatrixModel.LowerBoundI
-


# IMatrixModel.LowerBoundI


## Синтаксис


LowerBoundI(DimIndex: Integer): Integer;


## Параметры


DimIndex.
 Номер измерения, у которого необходимо получить нижнюю границу.


## Описание


Свойство LowerBoundI возвращает
 нижнюю границу измерения матрицы.


## Комментарии


Отличием свойства LowerBoundI
 от свойства [LowerBound](IMatrixModel.LowerBound.htm) является
 его внутренняя реализация, в которой оптимизирована работа с типами данными,
 что в свою очередь ускоряет работу и позволяет экономить память при больших
 размерах матриц.


## Пример


Для выполнения примера в репозитории предполагается наличие куба с идентификатором
 STD_CUBE.


Добавьте ссылки на системные сборки: Cubes, Dimensions, Matrix, Metabase.


	Sub UserProc;

	Var

	    MB: IMetabase;

	    CubeInst: ICubeInstance;

	    MDS: IMatrixDataSource;

	    DSS: IDimSelectionSet;

	    M: IMatrix;

	    i: Integer;

	Begin

	    MB := MetabaseClass.Active;

	    // Открытие куба

	    CubeInst := MB.ItemById("STD_CUBE").Open(Null) As ICubeInstance;

	    MDS := CubeInst.Destinations.DefaultDestination As IMatrixDataSource;

	    // Формирование отметке, по которой будет получена матрица с данными

	    DSS := MDS.CreateDimSelectionSet;

	    For i := 0 To DSS.Count - 1 Do

	        DSS.Item(i).SelectAll;

	    End For;

	    // Расчёт результирующей матрицы куба

	    M := MDS.Execute(DSS);

	    // Просмотр информации об измерениях матрицы

	    For i := 0 To M.DimensionCount - 1 Do

	        Debug.Write("Измерение №: " + i.ToString);

	        Debug.Write("; Нижняя граница: " + M.LowerBoundI(i).ToString);

	        Debug.WriteLine("; Верхняя граница: " + M.UpperBoundI(i).ToString);

	    End For;

	End Sub UserProc;


После выполнения примера на базе куба будет получена матрица с данными.
 В консоль будут выведены нижняя и верхняя граница по всем измерениям полученной
 матрицы.


См. также:


[IMatrixModel](IMatrixModel.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
