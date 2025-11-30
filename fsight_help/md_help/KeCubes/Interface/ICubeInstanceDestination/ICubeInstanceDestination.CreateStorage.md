# ICubeInstanceDestination.CreateStorage

ICubeInstanceDestination.CreateStorage
-


# ICubeInstanceDestination.CreateStorage


## Синтаксис


CreateStorage([Options: [CubeInstanceStorageOptions](../../Enums/CubeInstanceStorageOptions.htm)
 = 0]): [ICubeInstanceStorage](../ICubeInstanceStorage/ICubeInstanceStorage.htm);


## Параметры


Options. Параметр определяющий,
 режим сохранения данных в куб.


## Описание


Метод CreateStorage создает
 объект, осуществляющий сохранение данных в куб.


## Пример


Для выполнения примера в репозитории предполагается наличие куба с идентификатором
 CUBE_1.


Добавьте ссылки на системные сборки: Cubes, Dimensions, Matrix, Metabase.


	Sub UserProc;

	Var

	    MB: IMetabase;

	    CubeInst: ICubeInstance;

	    Dest: ICubeInstanceDestination;

	    Sels: IDimSelectionSet;

	    Matr: IMatrix;

	    Coord: IMatrixCoord;

	    Sto: ICubeInstanceStorage;

	    i: Integer;

	Begin

	    MB := MetabaseClass.Active;

	    CubeInst := MB.ItemById("CUBE_1").Open(Null) As ICubeInstance;

	    Dest := CubeInst.Destinations.DefaultDestination;

	    Sels := Dest.CreateDimSelectionSet;

	    For i := 0 To Sels.Count - 1 Do

	        Sels.Item(i).SelectElement(0, False);

	    End For;

	    Matr := Dest.Execute(Sels);

	    Matr.ValueFlag := Matr.ValueFlag + 1;

	    Sels := Matr.Dimensions;

	    Coord := Matr.CreateCoord;

	    For i := 0 To Sels.Count - 1 Do

	        Coord.Item(i) := 0;

	    End For;

	    Matr.Item(Coord) := (Matr.Item(Coord) As Integer) + 1;

	    Sto := Dest.CreateStorage(CubeInstanceStorageOptions.NoCheckDuplicates);

	    Sto.Callback := New CubeCallback.Create;

	    Sto.SaveMatrix(Matr, Matr.ValueFlag);

	End Sub UserProc;

	Class TCubeCallback: Object, ICubeCallback

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


После выполнения примера будет получена матрица с данными из куба. По
 некоторой координате будет изменено значение, после чего обновлённая матрица
 сохраняется обратно в куб. При сохранении проверка на наличие дубликатов
 не осуществляется. Ошибки, которые могут возникнуть, будут обрабатываться
 в пользовательском классе TCubeCallback.


См. также:


[ICubeInstanceDestination](ICubeInstanceDestination.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
