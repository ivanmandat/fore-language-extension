# ICubeInstanceStorage.SaveMatrixCallback

ICubeInstanceStorage.SaveMatrixCallback
-


# ICubeInstanceStorage.SaveMatrixCallback


## Синтаксис


SaveMatrixCallback: [ICubeSaveMatrixCallback](../ICubeSaveMatrixCallback/ICubeSaveMatrixCallback.htm);


## Описание


Свойство SaveMatrixCallback
 определяет обработчик процесса сохранения матрицы с данными в куб.


## Комментарии


В качестве значения свойства необходимо указать экземпляр объекта, который
 реализует методы интерфейса [ICubeSaveMatrixCallback](../ICubeSaveMatrixCallback/ICubeSaveMatrixCallback.htm)
 или наследуется и переопределяет класс [CubeCallback](../../Class/CubeCallback/CubeCallback.htm).
 Обработчик позволяет отследить процесс сохранения данных, при необходимости
 внести какие-либо изменения в данные или полностью отменить транзакцию
 в СУБД.


В свойстве [Callback](ICubeInstanceStorage.Callback.htm)
 задаётся обработчик ошибок, которые могут возникнуть при сохранении данных
 в куб. Для обработки ошибок и процесса сохранения данных может использоваться
 один общий обработчик, который наследуется от класса [CubeCallback](../../Class/CubeCallback/CubeCallback.htm),
 но работать обработчики будут независимо друг от друга.


## Пример


Для выполнения примера предполагается наличие куба с идентификатором
 «STD_CUBE». В структуру куба включено измерение с идентификатором «COUNTRY».
 В самом кубе хранятся какие-либо данные по странам.


Добавьте ссылки на системные сборки: Cubes, Dimensions, MathFin, Matrix,
 Metabase.


	Sub UserProc;

	Var

	    MB: IMetabase;

	    CubInst: ICubeInstance;

	    Des: ICubeInstanceDestination;

	    Sels: IDimSelectionSet;

	    Sel: IDimSelection;

	    Matr: IMatrix;

	    Coord: IMatrixCoord;

	    Sto: ICubeInstanceStorage;

	    i: Integer;

	Begin

	    MB := MetabaseClass.Active;

	    CubInst := MB.ItemById("STD_CUBE").Open(Null) As ICubeInstance;

	    Des := CubInst.Destinations.DefaultDestination;

	    //Отметка куба

	    Sels := Des.CreateDimSelectionSet;

	    For Each Sel In Sels Do

	        If Sel.Dimension.Ident = "COUNTRY" Then

	            Sel.SelectAll;

	        Else

	            Sel.SelectElement(0, False);

	        End If;

	    End For;

	    //Получение матрицы значений по указанной отметке

	    Matr := Des.Execute(Sels);

	    Matr.ValueFlag := 1;

	    Coord := Matr.CreateCoord;

	    For i := 0 To Matr.DimensionCount - 1 Do

	        Coord.Item(i) := 0;

	    End For;

	    //Изменение значения по координате

	    Matr.Item(Coord) := (Matr.Item(Coord) As Double) + Math.RandBetween(50, 150);

	    //Объект для сохранения данных в куб

	    Sto := Des.CreateStorage(CubeInstanceStorageOptions.None);

	    //Обработчик процесса сохранения данных

	    Sto.SaveMatrixCallback := New TCubeSaveCallback.Create;

	    //Сохранение значений

	    Sto.SaveMatrix(Matr, Matr.ValueFlag);

	End Sub UserProc;


	Class TCubeSaveCallback: CubeCallback

	    Public Sub OnBeforeSave(Argument: ICubeCallbackBeforeSaveArgument);

	    Var

	        Matr: IMatrix;

	        Iter: IMatrixIterator;

	        needSkipSave: Boolean = False;

	    Begin

	        //Матрица с сохраняемыми данными

	        Matr := Argument.OriginalMatrix;

	        Iter := Matr.CreateIterator;

	        Iter.Move(IteratorDirection.First);

	        While Iter.Valid Do

	            //Если изменённое значение больше 100, то отменяем сохранение

	            If Iter.ValueFlag = 1 Then

	                If (Iter.Value As Double) > 100 Then

	                    needSkipSave := True;

	                End If;

	            End If;

	            Iter.Move(IteratorDirection.Next);

	        End While;

	        Argument.ResultMatrix := Matr;

	        Argument.SkipDefaultSave := needSkipSave;

	    End Sub OnBeforeSave;

	    Public Sub OnAfterSave(Argument: ICubeCallbackSaveArgument);

	    Var

	        Connection: ISecurityConnection;

	        Matr: IMatrix;

	        Iter: IMatrixIterator;

	    Begin

	        Debug.WriteLine("---Данные сохранены---");

	        Connection := (Argument.SecurityConnections[0] As ISecurityConnection);

	        Debug.WriteLine("Пользователь платформы: " + Connection.UserNameLo);

	        Debug.WriteLine("Пользователь СУБД: " + Connection.UserNameDb);

	        Debug.WriteLine("Вариант отображения куба: " + Argument.Destination.Id);

	        Debug.WriteLine("Ключ записи в протоколе доступа: " + Argument.LogKey.ToString);

	        Debug.WriteLine("Значения, полученные из куба:");

	        Matr := Argument.ValueMatrix;

	        Iter := Matr.CreateIterator;

	        Iter.Move(IteratorDirection.First);

	        While Iter.Valid Do

	            Debug.Write(iter.Value + " ");

	            Iter.Move(IteratorDirection.Next);

	        End While;

	        Debug.WriteLine("");

	        Debug.WriteLine("Изменённые значения:");

	        Matr := Argument.FilteredMatrix;

	        Iter := Matr.CreateIterator;

	        Iter.Move(IteratorDirection.First);

	        While Iter.Valid Do

	            Debug.Write(iter.Value + " ");

	            Iter.Move(IteratorDirection.Next);

	        End While;

	        Debug.WriteLine("");

	    End Sub OnAfterSave;

	End Class TCubeSaveCallback;


При выполнении примера будет получена матрица с данными из куба. По
 некоторой координате будет изменено значение, после чего обновленная матрица
 сохраняется обратно в куб. Процесс сохранения данных обрабатывается в
 пользовательском классе «TCubeSaveCallback». Если изменённое значение
 больше 100, то сохранение данных будет отменено.


См. также:


[ICubeInstanceStorage](ICubeInstanceStorage.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
