# ICubeInstanceStorage.Callback

ICubeInstanceStorage.Callback
-


# ICubeInstanceStorage.Callback


## Синтаксис


Callback: [ICubeCallback](../ICubeCallback/ICubeCallback.htm);


## Описание


Свойство Callback определяет
 обработчик ошибок, которые могут возникнуть при сохранении данных в куб.


## Комментарии


В качестве значения свойства необходимо указать экземпляр объекта, который
 наследуется и переопределяет свойства и методы интерфейса [ICubeCallback](../ICubeCallback/ICubeCallback.htm)
 или класса [CubeCallback](../../Class/CubeCallback/CubeCallback.htm).


В свойстве [SaveMatrixCallback](ICubeInstanceStorage.SaveMatrixCallback.htm)
 задаётся обработчик сохранения данных в куб. Для обработки ошибок и процесса
 сохранения данных может использоваться один общий обработчик, который
 наследуется от класса [CubeCallback](../../Class/CubeCallback/CubeCallback.htm),
 но работать обработчики будут независимо друг от друга.


## Пример


Для выполнения примера предполагается наличие в репозитории куба с идентификатором
 «STD_CUBE».


Добавьте ссылки на системные сборки: Cubes, Dimensions, Matrix, Metabase.


	Sub UserProc;

	Var

	    MB: IMetabase;

	    CubInst: ICubeInstance;

	    Des: ICubeInstanceDestination;

	    Sels: IDimSelectionSet;

	    Sel: IDimSelection;

	    Mat: IMatrix;

	    Coord: IMatrixCoord;

	    Sto: ICubeInstanceStorage;

	    i: Integer;

	Begin

	    MB := MetabaseClass.Active;

	    CubInst := MB.ItemById("STD_CUBE").Open(Null) As ICubeInstance;

	    Des := CubInst.Destinations.DefaultDestination;

	    Sels := Des.CreateDimSelectionSet;

	    For Each Sel In Sels Do

	        Sel.SelectElement(0, False);

	    End For;

	    //Получение матрицы значений по указанной отметке

	    Mat := Des.Execute(Sels);

	    Mat.ValueFlag := Mat.ValueFlag + 1;

	    //Создание координаты в матрице

	    Coord := Mat.CreateCoord;

	    For i := 0 To Mat.DimensionCount - 1 Do

	        Coord.Item(i) := 0;

	    End For;

	    //Изменение значения по координате

	    Mat.Item(Coord) := (Mat.Item(Coord) As Double) + 1;

	    Sto := Des.CreateStorage(CubeInstanceStorageOptions.NoCheckDuplicates);

	    Sto.Callback := New TCubeCallback.Create;

	    //Сохранение значения

	    Sto.SaveMatrix(Mat, Mat.ValueFlag);

	End Sub UserProc;


	Class TCubeCallback: CubeCallback

	    Public Sub OnCallback(Argument: ICubeCallbackArgument);

	    Begin

	        Debug.WriteLine("Ошибка: " + Argument.Error.Message);

	        Debug.WriteLine("Идентификатор ошибки: " + Argument.Error.MessageID.ToString);

	        Debug.WriteLine("Источник: " + Argument.Error.Source);

	        Argument.IgnoreError := True;

	    End Sub OnCallback;


	    Public Function get_Argument: ICubeCallbackArgument;

	    Begin

	        Return Null;

	    End Function get_Argument;

	End Class TCubeCallback;


При выполнении примера будет получена матрица с данными из куба. По
 некоторой координате будет изменено значение, после чего обновленная матрица
 сохраняется обратно в куб. При сохранении проверка на наличие дубликатов
 осуществляться не будет. Ошибки, которые могут возникнуть, будут обрабатываться
 в пользовательском классе «TCubeCallback».


См. также:


[ICubeInstanceStorage](ICubeInstanceStorage.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
