# ICubeExecuteSetup.StrictRequiredItems

ICubeExecuteSetup.StrictRequiredItems
-


# ICubeExecuteSetup.StrictRequiredItems


## Синтаксис


StrictRequiredItems: Boolean;


## Описание


Свойство StrictRequiredItems
 определяет, извлекать ли данные только по обязательным изменениям.


## Комментарии


Допустимые значения:


	- True. Данные будут извлечены
	 только по обязательным измерениям;


	- False. Данные будут
	 извлечены по выбранным измерениям.


## Пример


Для выполнения примера предполагается наличие в репозитории базы данных
 временных рядов с идентификатором FC.


Добавьте ссылки на системные сборки: Cubes, Dimensions, Matrix, Metabase.


	Sub UserProc;

	Var

	    Mb: IMetabase;

	    CubeInst: ICubeInstance;

	    Dest: ICubeInstanceDestination;

	    Exe: ICubeInstanceDestinationExecutor;

	    Sels: IDimSelectionSet;

	    Sel: IDimSelection;

	    Arr: Array[1] Of Integer;

	    Si, Sc: Integer;

	    Mat: IMatrix;

	    ExecuteResult: ICubeExecuteResult;

	    It: IMatrixIterator;

	    Coo: IMatrixCoord;

	Begin

	    Mb := MetabaseClass.Active;

	    CubeInst := Mb.ItemById("FC").Open(Null) As ICubeInstance;

	    Dest := CubeInst.Destinations.DefaultDestination;

	    Sels := Dest.CreateDimSelectionSet;

	    Sc := Sels.Count - 1;

	    For Si := 0 To Sc Do

	        Sel := Sels.Item(Si);

	        Sel.SelectAll;

	    End For;

	    Exe := Dest.CreateExecutor;

	    (Exe As IRubricatorFactorIO).MultipleFactors := True;

	    Arr[0] := 125616;

	    (Exe As IRubricatorFactorExecutor).SetFactorKeys(Arr);

	    (Sels As ICubeExecuteSetup).StrictRequiredItems := True;

	    Exe.PrepareExecute(Sels);

	    Mat := Exe.Matrix;

	    ExecuteResult := CubeClass.ExecuteResult(Mat);

	    Exe.PerformExecute;

	    Mat.ValueFlag := 1;

	    Coo := Mat.CreateCoord;

	    It := Mat.CreateIterator;

	    It.Move(IteratorDirection.First);

	    While It.Valid Do

	        Debug.WriteLine(It.Value);

	        It.Move(IteratorDirection.Next);

	    End While;

	End Sub UserProc;


После выполнения примера будут получены и выведены в окно консоли данные
 по обязательным измерениям для показателя с ключом 125616.


См. также:


[ICubeExecuteSetup](ICubeExecuteSetup.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
