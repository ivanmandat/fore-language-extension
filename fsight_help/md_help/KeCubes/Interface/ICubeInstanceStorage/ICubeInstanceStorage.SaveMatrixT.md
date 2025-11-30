# ICubeInstanceStorage.SaveMatrixT

ICubeInstanceStorage.SaveMatrixT
-


# ICubeInstanceStorage.SaveMatrixT


## Синтаксис


		SaveMatrixT(Matrix: [IMatrix](kematrix.chm::/interface/imatrix/imatrix.htm);
		 Manager: [ICubeTransactionManager](../ICubeTransactionManager/ICubeTransactionManager.htm);
		 ValueFlag: Integer);


## Параметры


Matrix. Матрица, содержащая
 значения, которые необходимо сохранить обратно в куб.


Manager. Экземпляр менеджера
 транзакций, который будет отслеживать выполнение операций с кубом.


ValueFlag. Флаг элементов,
 содержащих изменённые данные. В куб будут сохраняться, только те элементы
 матрицы, [флаг](KeMatrix.chm::/Interface/IMatrixIterator/IMatrixIterator.ValueFlag.htm)
 которых соответствует данному значению.


## Описание


Метод SaveMatrixT осуществляет
 сохранение матрицы с данными в куб с использованием менеджера транзакций.


## Пример


Для выполнения примера предполагается наличие в репозитории куба с идентификатором
 «STD_CUBE».


Добавьте ссылки на системные сборки: Cubes, Dimensions, Matrix, Metabase.


					Sub UserProc;

		Var

		    Mb: IMetabase;

		    CubInst: ICubeInstance;

		    Des: ICubeInstanceDestination;

		    Sels: IDimSelectionSet;

		    Sel: IDimSelection;

		    Matr: IMatrix;

		    Coord: IMatrixCoord;

		    Sto: ICubeInstanceStorage;

		    TransMan: ICubeTransactionManager;

		    i: Integer;

		Begin

		    Mb := MetabaseClass.Active;

		    //Куб, в котором изменяются данные

		    CubInst := MB.ItemById("STD_CUBE").Open(Null) As ICubeInstance;

		    Des := CubInst.Destinations.DefaultDestination;

		    Sels := Des.CreateDimSelectionSet;

		    For Each Sel In Sels Do

		        Sel.SelectElement(0, False);

		    End For;

		    //Получение матрицы значений по указанной отметке

		    Matr := Des.Execute(Sels);

		    Matr.ValueFlag := Matr.ValueFlag + 1;

		    //Создание координаты в матрице

		    Coord := Matr.CreateCoord;

		    For i := 0 To Matr.DimensionCount - 1 Do

		        Coord.Item(i) := 0;

		    End For;

		    //Изменение значения по координате

		    Matr.Item(Coord) := (Matr.Item(Coord) As Double) + 1;

		    Sto := Des.CreateStorage(CubeInstanceStorageOptions.None);

		    //Сохранение значения с использованием менеджера транзакций

		    TransMan := New CubeTransactionManager.Create;

		    Try

		        Sto.SaveMatrixT(Matr, TransMan, Matr.ValueFlag);

		        TransMan.Commit;

		    Except

		        //Откат транзакции (отмена изменений)

		        TransMan.Rollback;

		    End Try;

		End Sub UserProc;


При выполнении примера будет получена матрица с данными из куба. По
 некоторой координате будет изменено значение, после чего обновленная матрица
 сохраняется обратно в куб. При сохранении будет использоваться менеджер
 транзакций, который сохранит все изменения и завершит транзакцию, если
 сохранение данных прошло успешно. В случае возникновения каких-либо ошибок
 менджер транзакций отменит все изменения.


См. также:


[ICubeInstanceStorage](ICubeInstanceStorage.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
