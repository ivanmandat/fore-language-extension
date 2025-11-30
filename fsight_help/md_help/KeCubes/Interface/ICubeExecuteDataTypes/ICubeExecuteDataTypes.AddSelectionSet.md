# ICubeExecuteDataTypes.AddSelectionSet

ICubeExecuteDataTypes.AddSelectionSet
-


# ICubeExecuteDataTypes.AddSelectionSet


## Синтаксис


AddSelectionSet(SelSet: [IDimSelectionSet](KeDims.chm::/interface/IDimSelectionSet/IDimSelectionSet.htm);
 Type: [CubeDataType](../../Enums/CubeDataType.htm));


## Параметры


SelSet. Отметка, в соответствии
 с которой берутся ячейки.


Type. Способ формирования данных,
 который необходимо задать для ячейки.


## Описание


Метод AddSelectionSet задаёт
 способ формирования данных для множества ячеек, которые соответствуют
 указанной отметке.


## Пример


Для выполнения примера предполагается наличие стандартного куба с идентификатором
 «STD_CUBE». В состав куба входят два измерения и измерение фактов. Настроена
 агрегация для календарного измерения с идентификатором «CALENDAR».


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

	    CubeExecRes: ICubeExecuteResult;

	    CubeDataTyp: ICubeExecuteDataTypes;

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

	    // Устанавливаем поддержку работы с информацией о том, как формируются данные в ячейках

	    (Sels As ICubeExecuteSetup).UseDataTypes := True;

	    Exec := Dest.CreateExecutor;

	    // Вычисляем куб

	    Exec.PrepareExecute(Sels);

	    Exec.PerformExecuteO(CubeInstanceDestinationExecutorOptions.None);

	    Matr := Exec.Matrix;

	    ShowMatrix("Матрица куба", Matr);

	    // Задание способа формирования данных для ячейки

	    CubeExecRes := Matr As ICubeExecuteResult;

	    CubeDataTyp := CubeExecRes.DataTypes;

	    Sels := Matr.Dimensions.CreateCopy;

	    Sel := Sels.FindById("CALENDAR");

	    Sel.DeselectAll;

	    Sel.SelectElement(1, False);

	    CubeDataTyp.AddSelectionSet(Sels, CubeDataType.Calculated);

	    ShowMatrix("Матрица после задания способа формирования данных для ячейки", Matr);

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

	        Iter.Value := (Iter.Value As Integer) + 1;

	        Iter.Move(IteratorDirection.Next);

	    End While;

	End Sub ShowMatrix;


При выполнении примера будет осуществлён расчет результирующей матрицы
 куба. В консоль среды разработки будет выведена информация о матрице:
 значения в ячейках и координаты ячеек. Ячейки, содержащие расчётные данные,
 будут отмечены символом «*». После этого в соответствии с изменённой отметкой
 измерения «CALENDAR» для ячеек будет задан способ формирования данных
 и информация о матрице повторно будет выведена в консоль среды разработки.


См. также:


[ICubeExecuteDataTypes](ICubeExecuteDataTypes.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
