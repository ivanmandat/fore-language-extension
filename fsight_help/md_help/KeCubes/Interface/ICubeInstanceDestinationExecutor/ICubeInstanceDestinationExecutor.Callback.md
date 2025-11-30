# ICubeInstanceDestinationExecutor.Callback

ICubeInstanceDestinationExecutor.Callback
-


# ICubeInstanceDestinationExecutor.Callback


## Синтаксис


Callback: [ICubeCallback](../ICubeCallback/ICubeCallback.htm);


## Описание


Свойство Callback определяет
 объект, осуществляющий обработку ошибок, которые могут возникнуть при
 расчёте куба.


## Пример


Для выполнения примера предполагается наличие в репозитории стандартного
 куба с идентификатором STD_CUBE.


Добавьте ссылки на системные сборки: Cubes, Dimensions, Matrix, Metabase.


	Sub UserProc;

	Var

	    MB: IMetabase;

	    CubeInst: ICubeInstance;

	    Dest: ICubeInstanceDestination;

	    Sels: IDimSelectionSet;

	    Sel: IDimSelection;

	    Exec: ICubeInstanceDestinationExecutor;

	    Matr: IMatrix;

	    Iter: IMatrixIterator;

	Begin

	    MB := MetabaseClass.Active;

	    CubeInst := MB.ItemById("STD_CUBE").Open(Null) As ICubeInstance;

	    Dest := CubeInst.Destinations.DefaultDestination;

	    // Формирование отметки

	    Sels := Dest.CreateDimSelectionSet;

	    For Each Sel In Sels Do

	        Sel.SelectAll;

	    End For;

	    // Настройки для расчёта

	    Exec := Dest.CreateExecutor;

	    Exec.Callback := New TCubeCallback.Create;

	    Exec.PrepareExecute(Sels);

	    // Расчёт куба

	    Exec.PerformExecute;

	    Matr := Exec.Matrix;

	    Iter := Matr.CreateIterator;

	    Iter.Move(IteratorDirection.First);

	    While Iter.Valid Do

	        Debug.WriteLine(Iter.Value);

	        Iter.Move(IteratorDirection.Next);

	    End While;

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


При выполнении примера будет осуществлён расчёт стандартного куба по
 полной отметке. В окно консоли будут выведены рассчитанные данные. Ошибки,
 которые могут возникнуть, будут обрабатываться в пользовательском классе
 TCubeCallback.


См. также:


[ICubeInstanceDestinationExecutor](ICubeInstanceDestinationExecutor.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
