# IVirtualCubeInstance.ExecuteCallback

IVirtualCubeInstance.ExecuteCallback
-


# IVirtualCubeInstance.ExecuteCallback


## Синтаксис


ExecuteCallback: [IVirtualCubeExecuteCallback](../IVirtualCubeExecuteCallback/IVirtualCubeExecuteCallback.htm);


## Описание


Свойство ExecuteCallback определяет
 обработчик событий, наступающих при расчёте виртуального куба.


## Комментарии


В качестве значения свойства необходимо указать экземпляр класса, который
 реализует методы интерфейса [IVirtualCubeExecuteCallback](../IVirtualCubeExecuteCallback/IVirtualCubeExecuteCallback.htm).


Расчёт куба производится в соответствии с отметкой, которая передаётся
 в метод [ICubeInstanceDestinationExecutor.PrepareExecute](../ICubeInstanceDestinationExecutor/ICubeInstanceDestinationExecutor.PrepareExecute.htm).
 В событиях можно задать дополнительную отметку по каждому источнику, а
 также получить матрицы, рассчитанные для источников.


## Пример


Для выполнения примера предполагается наличие в репозитории виртуального
 куба с идентификатором «VIRT_CUBE». Куб построен на нескольких источниках
 данных.


Добавьте ссылки на системные сборки: Cubes, Dimensions, Matrix, Metabase.


	Sub UserProc;

	Var

	    Mb: IMetabase;

	    Cube: ICubeInstance;

	    CubeDest: ICubeInstanceDestination;

	    Sels: IDimSelectionSet;

	    Sel: IDimSelection;

	    CubeExec: ICubeInstanceDestinationExecutor;

	    MatrixVirtual : IMatrix;

	Begin

	    Mb := MetabaseClass.Active;

	    // Открываем куб

	    Cube := Mb.ItemById("VIRT_CUBE").Open(Null) As ICubeInstance;

	    CubeDest := Cube.Destinations.DefaultDestination;

	    // Обработчик событий

	    (Cube As IVirtualCubeInstance).ExecuteCallback := New VirtualCubeExecCallback.Create;

	    // Отметка для выполнения

	    Sels := CubeDest.CreateDimSelectionSet;

	    For Each Sel In Sels Do

	        Sel.SelectElement(0, False);

	    End For;

	    // Создаём объект для расчёта куба с флагом доступа к матрицам источников

	    CubeExec := CubeDest.CreateExecutorO(CubeInstanceDestinationExecutorOptions.KeepSourceMatrices);

	    // Выполняем куб

	    CubeExec.PrepareExecute(Sels);

	    CubeExec.PerformExecute;

	    // Получаем рассчитанную матрицу с данными

	    MatrixVirtual := CubeExec.Matrix;

	    ShowMatrix("Матрица виртуального куба", MatrixVirtual);

	End Sub UserProc;


	Public Class VirtualCubeExecCallback: Object, IVirtualCubeExecuteCallback

	    Public Sub OnBeforeExecuteSources(Value: IVirtualCubeSourceSelections);

	    Var

	        i: Integer;

	        Sels: IDimSelectionSet;

	        Sel: IDimSelection;

	    Begin

	        For i := 0 To Value.Count - 1 Do

	            Sels := Value.Item(i).Selection;

	            // Изменение отметки для расчёта источников

	            For Each Sel In Sels Do

	                Sel.SelectAll;

	            End For;

	        End For;

	    End Sub OnBeforeExecuteSources;


	    Public Sub OnAfterExecuteSources(Value: IVirtualCubeSourceMatricesList);

	    Var

	        i, j: Integer;

	        SourceMatrix: IVirtualCubeSourceMatrix;

	    Begin

	        j := Value.Count;

	        Debug.WriteLine("Количество источников: " + j.ToString);

	        // Просмотр матриц, полученных при расчёте источников

	        For i := 0 To j - 1 Do

	            SourceMatrix := Value.Item(i);

	            ShowMatrix(SourceMatrix.SourceKey.ToString, SourceMatrix.Matrix);

	        End For;

	    End Sub OnAfterExecuteSources;

	End Class VirtualCubeExecCallback;


	Sub ShowMatrix(Title: String; Matr: IMatrix);

	Var

	    Iter: IMatrixIterator;

	Begin

	    Debug.Write(Title + " : ");

	    If Matr.Count <> 0 Then

	        Iter := Matr.CreateIterator;

	        Iter.Move(IteratorDirection.First);

	        While Iter.Valid Do

	            Debug.Write(Iter.Value + " ");

	            Iter.Move(IteratorDirection.Next);

	        End While;

	        Debug.WriteLine("");

	    Else

	        Debug.WriteLine("Empty");

	    End If;

	End Sub ShowMatrix;


При выполнении примера будет осуществлён расчёт виртуального куба. Сам
 виртуальный куб рассчитывается по единичной отметке в измерениях, а его
 источники будут рассчитаны по максимальным отметкам. Результирующие матрицы
 источников и виртуального куба будут выведены в консоль среды разработки.


См. также:


[IVirtualCubeInstance](IVirtualCubeInstance.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
