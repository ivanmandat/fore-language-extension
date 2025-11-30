# ICubeInstanceStorage.SaveMatrixEx

ICubeInstanceStorage.SaveMatrixEx
-


# ICubeInstanceStorage.SaveMatrixEx


## Синтаксис


SaveMatrixEx(Matrix: [IMatrix](kematrix.chm::/interface/imatrix/imatrix.htm);
 ValueFlags: Array);


## Параметры


Matrix. Матрица, содержащая
 значения, которые необходимо сохранить обратно в куб.


ValueFlags. Массив флагов элементов,
 содержащих изменённые значения. В куб будут сохраняться, только те элементы
 матрицы, [флаг](KeMatrix.chm::/Interface/IMatrixIterator/IMatrixIterator.ValueFlag.htm)
 которых соответствует одному из значений данного массива.


## Описание


Метод SaveMatrixEx осуществляет
 сохранение матрицы с данными в куб по нескольким флагам изменённых значений.


## Пример


Для выполнения примера предполагается наличие в репозитории куба с идентификатором
 «STD_CUBE». В кубе имеются три измерения с идентификаторами «FACTS», «CALENDAR»
 и «COUNTRY».


Добавьте ссылки на системные сборки: Cubes, Dimensions, Matrix, Metabase.


	Sub UserProc;

	Var

	    MB: IMetabase;

	    CubInst: ICubeInstance;

	    Des: ICubeInstanceDestination;

	    Sels: IDimSelectionSet;

	    Matr: IMatrix;

	    Iter: IMatrixIterator;

	    Coord: IMatrixCoord;

	    Sto: ICubeInstanceStorage;

	    i: Integer;

	    ValueFlags: Array Of Integer;

	Begin

	    MB := MetabaseClass.Active;

	    CubInst := MB.ItemById("STD_CUBE").Open(Null) As ICubeInstance;

	    Des := CubInst.Destinations.DefaultDestination;

	    //Отметка куба

	    Sels := Des.CreateDimSelectionSet;

	    Sels.FindById("FACTS").SelectElement(0, False); //Факт

	    Sels.FindById("CALENDAR").SelectElement(0, False); //Календарь

	    Sels.FindById("COUNTRY").SelectAll; //Страны

	    //Получение матрицы значений по указанной отметке

	    Matr := Des.Execute(Sels);

	    Iter := Matr.CreateIterator;

	    Coord := Matr.CreateCoord;

	    For i := 0 To Matr.DimensionCount - 1 Do

	        Coord.Item(i) := 0;

	    End For;

	    //Изменение значения по первой стране

	    Iter.PutCoord(Coord);

	    Iter.Value := Iter.Value + 1;

	    Iter.ValueFlag := 1;

	    //Изменение координаты

	    Coord.Item(2) := 1;

	    //Изменение значения по второй стране

	    Iter.PutCoord(Coord);

	    Iter.Value := Iter.Value + 2;

	    Iter.ValueFlag := 2;

	    //Массив флагов изменившихся данных, по которым производится сохранение

	    ValueFlags := New Integer[2];

	    ValueFlags[0] := 1;

	    ValueFlags[1] := 2;

	    //Объект для сохранения данных в куб

	    Sto := Des.CreateStorage(CubeInstanceStorageOptions.None);

	    //Обработчик процесса сохранения данных

	    Sto.SaveMatrixCallback := New TCubeSaveCallback.Create;

	    //Сохранение значений

	    Sto.SaveMatrixEx(Matr, ValueFlags);

	End Sub UserProc;


	Class TCubeSaveCallback: CubeCallback

	    Public Sub OnAfterSave(Argument: ICubeCallbackSaveArgument);

	    Var

	        Matr: IMatrix;

	        Iter: IMatrixIterator;

	        i: Integer;

	    Begin

	        Debug.WriteLine("---Данные сохранены---");

	        Debug.WriteLine("Флаги изменённых данных, по которым производилось сохранение:");

	        For Each i In Argument.ValueFlags Do

	            Debug.Write(i.ToString + " ");

	        End For;

	        Debug.WriteLine("");

	        Debug.WriteLine("Сохраняемая матрица:");

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
 некоторым координатам будут изменены значения, после чего обновленная
 матрица сохраняется обратно в куб. Процесс сохранения данных обрабатывается
 в пользовательском классе «TCubeSaveCallback». Сохраняемые данные будут
 отмечены различными флагами изменённых значений.


См. также:


[ICubeInstanceStorage](ICubeInstanceStorage.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
