# IMsCalculationChainEntries.AddTargetTrajectory

IMsCalculationChainEntries.AddTargetTrajectory
-


# IMsCalculationChainEntries.AddTargetTrajectory


## Синтаксис


AddTargetTrajectory(TargetEntry: [IMsCalculationChainTarget](../IMsCalculationChainTarget/IMsCalculationChainTarget.htm)):
 [IMsCalculationChainTargetTrajectory](../IMsCalculationChainTargetTrajectory/IMsCalculationChainTargetTrajectory.htm);


## Параметры


TargetEntry. Целевая функция.


## Описание


Метод AddTargetTrajectory
 добавляет траекторию к указанной целевой функции.


## Комментарии


Добавлять траекторию в цепочку расчёта необходимо, если настраиваемая
 задача моделирования предназначена для работы в веб-приложении.


Для добавления целевой функции в цепочку расчёта используйте метод [IMsCalculationChainEntries.AddTargetProblem](IMsCalculationChainEntries.AddTargetProblem.htm).


После добавления траектории целевой функции для целевой задачи необходимо
 задать [сценарий
 для траектории целевой функции](../IMsTargetProblem/IMsTargetProblem.TrajectoryScenario.htm) и [сценарий
 для целевой задачи](../IMsTargetProblem/IMsTargetProblem.TargetScenario.htm).


## Пример


Для выполнения примера в репозитории предполагается наличие контейнера
 моделирования с идентификатором MS, содержащего задачу моделирования с
 идентификатором CHAIN_TARGET_TRAJECTORY. Данная задача должна быть предназначена
 для веб-приложения и содержать целевую функцию.


Добавьте ссылки на системные сборки: Cube, Dimensions, Matrix, Metabase,
 Ms.


	Sub UserProc;

	Var

	    mb: IMetabase;

	    MsObj: IMetabaseObjectDescriptor;

	    Ms: IMsModelSpace;

	    Problem: IMsProblem;

	    CalcChain: IMsCalculationChainEntries;

	    I, j, TrajectoryScenarioKey: Integer;

	    MetaTarget: IMsCalculationChainTarget;

	    TargetProblem: IMsTargetProblem;

	    MetaTrajectory: IMsCalculationChainTargetTrajectory;

	    ScenarioTree: IMsScenarioTreeEntries;

	    ScenElement: IMsScenarioTreeElement;

	    Scenario: IMsScenario;

	    Model: IMsModel;

	    OutputsVar: IMsFormulaTransformVariables;

	    CubeInst: ICubeInstance;

	    Des: ICubeInstanceDestination;

	    DimSS: IDimSelectionSet;

	    DimS: IDimSelection;

	    Elem: IDimElementArray;

	    Elements: IDimElements;

	    Mat: IMatrix;

	    Coord: IMatrixCoord;

	    Sto: ICubeInstanceStorage;

	Begin

	    // Получаем текущий репозиторий

	    mb := MetabaseClass.Active;

	    // Получаем контейнер моделирования

	    MsObj := mb.ItemById("MS");

	    Ms := MsObj.Edit As IMsModelSpace;

	    // Получаем задачу моделирования

	    Problem := mb.ItemByIdNamespace("CHAIN_TARGET_TRAJECTORY", MsObj.Key).Edit As IMsProblem;

	    // Получаем цепочку расчета

	    CalcChain := Problem.MetaModel.CalculationChain;

	    j := CalcChain.Count - 1;

	    i := 0;

	    Repeat

	        // Ищем в цепочке расчета целевую функцию

	        If CalcChain.Item(i).Type = MsCalculationChainEntryType.Target Then

	            MetaTarget := CalcChain.Item(i) As IMsCalculationChainTarget;

	        End If;

	        // Удаляем существующие траектории из цепочки расчета

	        If CalcChain.Item(i).Type = MsCalculationChainEntryType.TargetTrajectory Then

	            CalcChain.Remove(i);

	            j := j - 1;

	        End If;

	        i := i + 1;

	    Until i > j;

	    // Добавляем в цепочку расчета траекторию целевой задачи

	    MetaTrajectory := CalcChain.AddTargetTrajectory(MetaTarget);

	    TargetProblem := MetaTrajectory.TargetEntry.TargetProblem;

	    // Получаем сценарии контейнера моделирования

	    ScenarioTree := Ms.ScenarioTree;

	    // Добавляем сценарий для траектории целевой функции

	    ScenElement := ScenarioTree.AddScenario;

	    ScenElement.Name := "Сценарий для траектории целевой функции";

	    Scenario := ScenElement.Scenario;

	    // Получаем ключ данного сценария

	    TrajectoryScenarioKey := Scenario.InternalKey;

	    // Указываем созданный сценарий в целевой задаче

	    Problem.Scenarios.AddScenario(Scenario);

	    TargetProblem.TrajectoryScenario := Scenario;

	    // Добавляем сценарий для целевой задачи

	    ScenElement := ScenarioTree.AddScenario;

	    ScenElement.Name := "Сценарий для целевой задачи";

	    Scenario := ScenElement.Scenario;

	    // Указываем созданный сценарий в целевой задаче

	    Problem.Scenarios.AddScenario(Scenario);

	    TargetProblem.TargetScenario := Scenario;

	    // Сохраняем изменения в сценариях контейнера моделирования

	    (Ms As IMetabaseObject).Save;

	    // Получаем модель, содержащую параметры целевой функции

	    Model := TargetProblem.Model;

	    // Получаем данные моделируемой переменной, соответствующие данным траектории целевой функции

	    OutputsVar := Model.Transform.Outputs;

	    CubeInst := (OutputsVar.Item(0).VariableStub As IMetabaseObject).Open(Null) As ICubeInstance;

	    // Изменяем данные траектории целевой функции по сценарному измерению

	    Des := CubeInst.Destinations.Item(2);

	    DimSS := Des.CreateDimSelectionSet;

	    // Указываем, что меняем данные на годовой динамике

	    DimS := DimSS.Item(0);

	    Elem := DimS.Dimension.Levels.Item(0).Elements;

	    For Each i In Elem Do

	        DimS.SelectElement(i, False);

	    End For;

	    // Указываем, что меняем данные по сценарию, созданному для траектории целевой задачи

	    DimS := DimSS.Item(1);

	    DimS.DeselectAll;

	    Elements := DimS.Dimension.Elements;

	    For i := 0 To Elements.Count - 1 Do

	        If Elements.Id(i) = TrajectoryScenarioKey.ToString Then

	            DimS.SelectElement(i, False);

	            j := i;

	        End If;

	    End For;

	    DimSS.Item(2).SelectAll;

	    // Получаем текущие данные

	    Mat := Des.Execute(DimSS);

	    Mat.ValueFlag := Mat.ValueFlag + 1;

	    Coord := Mat.CreateCoord;

	    Coord.Item(1) := j;

	    Coord.Item(2) := 0;

	    // Изменяем текущие данные

	    For Each i In Elem Do

	        Coord.Item(0) := i;

	        Mat.Item(Coord) := 10 + 0.1 * i;

	    End For;

	    Sto := Des.CreateStorage;

	    // Сохраняем изменения в данных траектории целевой функции

	    Sto.SaveMatrix(Mat, Mat.ValueFlag);

	    // Сохраняем изменения в задаче моделирования

	    (Problem As IMetabaseObject).Save;

	End Sub UserProc;


В результате выполнения примера будет добавлена траектория для целевой
 функции и будет задано значение траектории.


См. также:


[IMsCalculationChainEntries](IMsCalculationChainEntries.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
