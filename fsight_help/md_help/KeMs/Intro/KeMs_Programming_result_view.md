# Просмотр значений переменной

Просмотр значений переменной
-


# Просмотр значений переменной


В данном разделе приведено описание процедуры вывода значений переменной
 в окно консоли.


В рассматриваемом нами примере моделирования, после [расчета
 задачи](KeMs_Programming_Problem.htm#problem_create) результаты были выгружены в переменную «Сальдо торгового баланса,
 млрд.долл.США» по сценарию «Факт». Для их просмотра предназначен описанный
 ниже модуль.


Добавьте ссылки на сборки: Cubes, Dimensions, Matrix, Metabase, Ms.


	Sub UserProc;

	Var

	    MB: IMetabase;

	    KMDesc: IMetabaseObjectDescriptor;

	    Problem: IMsProblem;

	    VarList: IVariableStubList;

	    VarStub: IVariableStub;

	    VarObj: IMetabaseObject;

	    CubeInst: ICubeInstance;

	    Des: ICubeInstanceDestination;

	    DimSS: IDimSelectionSet;

	    DimS: IDimSelection;

	    Elem: IDimElementArray;

	    Mat: IMatrix;

	    Coord: IMatrixCoord;

	    i: Integer;

	Begin

	    MB := MetabaseClass.Active;

	    KMDesc := MB.ItemById("MODEL_SPACE");

	    Problem := mb.ItemByIdNamespace("PROBLEM_BALANCE", KMDesc.Key).Bind As IMsProblem;

	    // Получаем выходную переменную

	    VarList := Problem.VariableStubs(MsVariableKind.Output);

	    VarStub := VarList.FindById("BALANCE");

	    // Получаем представление переменной в экспресс-анализе

	    VarObj := (VarStub As IMsVariable).Cube As IMetabaseObject;

	    CubeInst := VarObj.Open(Null) As ICubeInstance;

	    Des := CubeInst.Destinations.DefaultDestination;

	    DimSS := Des.CreateDimSelectionSet;

	    // Отмечаем динамику, для которой будут выводиться данные: Годы

	    DimS := DimSS.Item(0);

	    Elem := DimS.Dimension.Levels.Item(0).Elements;

	    For Each i In Elem Do

	        DimS.SelectElement(i, False);

	    End For;

	    // Отмечаем сценарный справочник «Факт»

	    DimSS.Item(1).SelectAll;

	    // Получаем матрицу данных переменной

	    Mat := Des.Execute(DimSS);

	    Coord := Mat.CreateCoord;

	    Coord.Item(1) := 0;

	    // Выводим матрицу с данными в окно консоли

	    Debug.WriteLine("Данные переменной '" + VarStub.Name + "':");

	    For Each i In Elem Do

	        Coord.Item(0) := i;

	        Mat.Item(Coord) := Math.RandBetween(50, 100);

	        Debug.WriteLine(Mat.Item(Coord));

	    End For;

	End Sub UserProc;


После выполнения примера данные расчета задачи, выгруженные в переменную
 «Сальдо торгового баланса, млрд.долл.США», будут выведены в окно консоли.


См. также:


[Общие принципы программирования с использованием
 сборки Ms](KeMs_Programming.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
