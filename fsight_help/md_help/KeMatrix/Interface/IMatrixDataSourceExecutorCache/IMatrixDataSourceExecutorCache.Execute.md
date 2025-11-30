# IMatrixDataSourceExecutorCache.Execute

IMatrixDataSourceExecutorCache.Execute
-


# IMatrixDataSourceExecutorCache.Execute


## Синтаксис


Execute(Dimensions: [IDimSelectionSet](KeDims.chm::/interface/IDimSelectionSet/IDimSelectionSet.htm)):
 [IMatrix](../IMatrix/IMatrix.htm);


## Параметры


Dimensions. Отметка, в соответствии
 с которой, будет производиться расчет матрицы.


## Описание


Метод Execute осуществляет проверку
 наличия данных в кеше и возвращает результирующую матрицу кешированных
 данных.


## Комментарии


При выполнении данного метода происходит проверка наличия в кеше данных,
 соответствующих указанной отметке. Отсутствующие данные будут извлечены
 с сервера и добавлены в кеш. Результатом работы метода Execute
 является ссылка на результирующую матрицу всех данных, помещенных в кеш.
 Если кеш пуст, либо дополнить его невозможно, то метод Execute
 отработает как метод [IMatrixDataSourceExecutor.Execute](../IMatrixDataSourceExecutor/IMatrixDataSourceExecutor.Execute.htm).


Данный метод также учитывает установленные [параметры
 расчета](../IMatrixDataSourceExecutorSetup/IMatrixDataSourceExecutorSetup.htm) результирующей матрицы.


## Пример


Для выполнения примера предполагается наличие формы и расположенных
 на ней кнопок с наименованиями «Button1» и «Button2». В репозитории имеется
 куб с идентификатором «Cube_1». В качестве измерений данного куба выступают
 справочники с идентификаторами «Dim_1» и «Dim_2».


Добавьте ссылки на системные сборки: Cubes, Dimensions, Matrix, Metabase,
 UI.


	Class TESTForm: Form

	    Button1: Button;

	    Button2: Button;

	    DimSS: IDimSelectionSet;

	    MatrCache: IMatrixDataSourceExecutorCache;

	    Matr: IMatrix;


	    Sub TESTFormOnCreate(Sender: Object; Args: IEventArgs);

	    Var

	        MB: IMetabase;

	        CubeInst: ICubeInstance;

	        MatrDS: IMatrixDataSource;

	        MatrExecutor: IMatrixDataSourceExecutor;

	    Begin

	        MB := MetabaseClass.Active;

	        CubeInst := MB.ItemById("Cube_1").Open(Null) As ICubeInstance;

	        MatrDS := CubeInst.Destinations.DefaultDestination As IMatrixDataSource;

	        MatrExecutor := MatrDS.CreateExecutor;

	        MatrCache := MatrExecutor.CreateCache;

	        DimSS := MatrDS.CreateDimSelectionSet;

	    End Sub TESTFormOnCreate;


	    Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);

	    Begin

	        DimSS.FindById("Dim_1")...; //Установка отметки по измерению Dim_1

	        DimSS.FindById("Dim_2")...; //Установка отметки по измерению Dim_2

	        Matr := MatrCache.Execute(DimSS);

	    End Sub Button1OnClick;


	    Sub Button2OnClick(Sender: Object; Args: IMouseEventArgs);

	    Begin

	        If MatrCache <> Null Then

	            MatrCache.Flush;

	        End If;

	    End Sub Button2OnClick;


	End Class TESTForm;


При создании формы будет открыт указанный куб. Куб будет представлен
 как многомерный источник данных. Для работы с данными куба будет создан
 кеш. При нажатии на кнопку «Button1» в соответствии с установленной отметкой
 производится расчет результирующей матрицы куба. При расчете будут использоваться
 кешированные данные. В переменной «Matr» будет доступна матрица кешированных
 данных. Кнопка «Button2» позволяет очистить кеш данных.


См. также:


[IMatrixDataSourceExecutorCache](IMatrixDataSourceExecutorCache.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
