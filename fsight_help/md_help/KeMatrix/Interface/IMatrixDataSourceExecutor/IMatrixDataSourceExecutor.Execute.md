# IMatrixDataSourceExecutor.Execute

IMatrixDataSourceExecutor.Execute
-


# IMatrixDataSourceExecutor.Execute


## Синтаксис


Execute(Dimensions: [IDimSelectionSet](KeDims.chm::/interface/IDimSelectionSet/IDimSelectionSet.htm)):
 [IMatrix](../IMatrix/IMatrix.htm);


## Параметры


Dimensions. Отметка, в соответствии с которой, будет
 производиться расчет матрицы.


## Описание


Метод Execute осуществляет расчет
 матрицы с данными в соответствии с указанной отметкой элементов и [параметров
 расчета](../IMatrixDataSourceExecutorSetup/IMatrixDataSourceExecutorSetup.htm).


## Комментарии


В отличии от метода [IMatrixDataSource.Execute](../IMatrixDataSource/IMatrixDataSource.Execute.htm),
 данный метод учитывает установленные [параметры
 расчета](../IMatrixDataSourceExecutorSetup/IMatrixDataSourceExecutorSetup.htm) результирующей матрицы. При выполнении метода осуществляется
 извлечение данных с сервера путем выполнения сформированных SQL-запросов.


## Пример


Для выполнения примера предполагается наличие в репозитории куба с идентификатором
 «Cube_1». В качестве измерений данного куба выступают справочники с идентификаторами
 «Dim_1» и «Dim_2».


Добавьте ссылки на системные сборки: Cubes, Dimensions, Matrix, Metabase.


	Sub UserProc;

	Var

	    MB: IMetabase;

	    CubeInst: ICubeInstance;

	    MatrDS: IMatrixDataSource;

	    DimSS: IDimSelectionSet;

	    MatrExecutor: IMatrixDataSourceExecutor;

	    Matr: IMatrix;

	Begin

	    MB := MetabaseClass.Active;

	    CubeInst := MB.ItemById("Cube_1").Open(Null) As ICubeInstance;

	    MatrDS := CubeInst.Destinations.DefaultDestination As IMatrixDataSource;

	    MatrExecutor := MatrDS.CreateExecutor;

	    (MatrExecutor As IMatrixDataSourceExecutorSetup).DimensionsIntegrityCheck := True;

	    DimSS := MatrDS.CreateDimSelectionSet;

	    DimSS.FindById("Dim_1").SelectAll;

	    DimSS.FindById("Dim_2").SelectAll;

	    Try

	        Matr := MatrExecutor.Execute(DimSS);

	    Except On Ex: Exception Do

	        Debug.WriteLine("Возникла ошибка построения измерения.");

	        Debug.WriteLine("Текст ошибки: " + Ex.Message);

	    Finally

	    End Try;

	End Sub UserProc;


При выполнении примера будет осуществлен расчет результирующей матрицы
 куба. При расчете осуществляется проверка построения справочников, используемых
 для составления отметки. Если во время построения возникнут ошибки, то
 текст ошибки будет выведен в консоль среды разработки.


См. также:


[IMatrixDataSourceExecutor](IMatrixDataSourceExecutor.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
