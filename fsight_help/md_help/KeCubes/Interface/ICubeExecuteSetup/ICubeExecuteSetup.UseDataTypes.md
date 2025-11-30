# ICubeExecuteSetup.UseDataTypes

ICubeExecuteSetup.UseDataTypes
-


# ICubeExecuteSetup.UseDataTypes


## Синтаксис


UseDataTypes: Boolean;


## Описание


Свойство UseDataTypes определяет,
 будет ли при расчёте добавляться информация о том, каким образом сформированы
 данные в ячейке.


## Комментарии


Допустимые значения:


	- True. Формировать информацию
	 о способе появления данных в ячейке. После расчёта информация будет
	 доступна в свойстве [ICubeExecuteResult.DataTypes](../ICubeExecuteResult/ICubeExecuteResult.DataTypes.htm);


	- False. Значение по умолчанию.
	 Не формировать информацию о способе появления данных в ячейке.


Примечание.
 Получение информации о способах формирования данных в ячейках не поддерживается
 при работе с автоматическими и вычисляемыми кубами.


## Пример


Для выполнения примера предполагается наличие стандартного куба с идентификатором
 STD_CUBE. В кубе настроена агрегация по какому-либо измерению.


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

	Begin

	    // Открываем куб

	    MB := MetabaseClass.Active;

	    CubeInst := MB.ItemById("STD_CUBE").Open(Null) As ICubeInstance;

	    Dest := CubeInst.Destinations.DefaultDestination;

	    // Устанавливаем отметку

	    Sels := Dest.CreateDimSelectionSet;

	    For Each Sel In Sels Do

	        Sel.SelectAll;

	    End For;

	    // Устанавливаем поддержку работы
	 с информацией о том, как формируются данные в ячейках

	    (Sels As ICubeExecuteSetup).UseDataTypes := True;

	    Exec := Dest.CreateExecutor;

	    // Вычисляем куб

	    Exec.PrepareExecute(Sels);

	    Exec.PerformExecuteO(CubeInstanceDestinationExecutorOptions.None);

	    Matr := Exec.Matrix;

	    ShowMatrix("Матрица куба", Matr);

	End Sub UserProc;


	Sub ShowMatrix(Title: String; Matr: IMatrix);

	Var

	    Iter: IMatrixIterator;

	    CubeExecRes: ICubeExecuteResult;

	    CubeDataTyp: ICubeExecuteDataTypes;

	    S: String;

	    Coord: IMatrixCoord;

	Begin

	    CubeExecRes := Matr As ICubeExecuteResult;

	    CubeDataTyp := CubeExecRes.DataTypes;

	    Iter := Matr.CreateIterator;

	    Iter.Move(IteratorDirection.First);

	    Debug.WriteLine(Title);

	    Coord := Matr.CreateCoord;

	    While Iter.Valid Do

	        S := (Iter.Value As String) + "   (" + Iter.CoordsAsString + ")";

	        Iter.PutCurrentPos(Coord);

	        If CubeDataTyp.DataType(Coord) <> CubeDataType.Default_ Then

	            S := S + "*";

	        End If;

	        Debug.WriteLine(s);

	        Iter.Move(IteratorDirection.Next);

	    End While;

	End Sub ShowMatrix;


При выполнении примера будет осуществлён расчёт результирующей матрицы
 куба. В консоль среды разработки будет выведена информация о матрице:
 значения в ячейках и координаты ячеек. Также ячейки, содержащие расчётные
 данные, будут отмечены символом «*».


См. также:


[ICubeExecuteSetup](ICubeExecuteSetup.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
