# IMsControlProblem.Constraints

IMsControlProblem.Constraints
-


# IMsControlProblem.Constraints


## Синтаксис


		Constraints: [IMsNonLinearConstraints](../IMsNonLinearConstraints/IMsNonLinearConstraints.htm);


## Описание


Свойство Constraints возвращает
 коллекцию ограничений для целевой функции.


## Комментарии


Для задания объекта, в который будут выгружены оптимальные значения,
 используйте свойство [IMsControlProblem.OptimalVariable](IMsControlProblem.OptimalVariable.htm).


## Пример


Для выполнения примера в репозитории предполагается наличие контейнера
 моделирования с идентификатором MS. Данный контейнер должен содержать
 папку с идентификатором CONTROLPROBLEM_FOLDER и метамодель с идентификатором
 CONTROL_METAMODEL. Указанная метамодель должна содержать модель с идентификатором
 CONTROL_MODEL, содержащую несколько факторов.


Добавьте ссылки на системные сборки: Cp, Dimensions, Metabase, Ms.


					Sub UserProc;

		Var

		    MB: IMetabase;

		    MsObj: IMetabaseObjectDescriptor;

		    CrInf: IMetabaseObjectCreateInfo;

		    MObj: IMetabaseObject;

		    Problem: IMsProblem;

		    MetaModel: IMsMetaModel;

		    ScenarioTree: IMsScenarioTreeEntries;

		    Scenario: IMsScenario;

		    ControlProblem: IMsControlProblem;

		    CPModel, Model: IMsModel;

		    CPTransform: IMsFormulaTransform;

		    CPOutputs, Inputs, CPInputs: IMsFormulaTransformVariables;

		    ControlsList, CFList: IMsFormulaTermList;

		    ConstrTerm, CFTerm: IMsFormulaTerm;

		    FactorVar, ControlVar, CFVar: IMsFormulaTransformVariable;

		    Slice: IMsFormulaTransformSlice;

		    ControlTerm: IMsNonLinearControlFormulaTerm;

		    Constrs: IMsNonLinearConstraints;

		    Constr: IMsNonLinearConstraint;

		    MsKey: Integer;

		    Period: IMsModelPeriod;

		    s: String;

		    i: Integer;

		Begin

		    // Получаем текущий репозиторий

		    MB := MetabaseClass.Active;

		    // Получаем контейнер моделирования

		    MsObj := Mb.ItemById("MS").Edit;

		    MsKey := MsObj.Key;

		    // Создаем объект «Задача моделирования»

		    CrInf := Mb.CreateCreateInfo;

		    CrInf.ClassId := MetabaseObjectClass.KE_CLASS_MSPROBLEM;

		    CrInf.Id := MB.GenerateId("CONTROL_PROBLEM", MsKey);

		    CrInf.Name := "Задача оптимального управления";

		    CrInf.Parent := MB.ItemByIdNamespace("CONTROLPROBLEM_FOLDER", MsKey);

		    MObj := Mb.CreateObject(CrInf).Edit;

		    Problem := MObj As IMsProblem;

		    // Указываем метамодель, рассчитываемую задачей

		    MetaModel := MB.ItemByIdNamespace("CONTROL_METAMODEL", MsKey).Bind As IMsMetaModel;

		    Problem.MetaModel := MetaModel;

		    // Получаем сценарии контейнера моделирования

		    ScenarioTree := (MsObj As IMsModelSpace).ScenarioTree;

		    // Добавляем сценарий

		    Scenario := (ScenarioTree.AddScenario).Scenario;

		    // Добавляем созданный сценарий в задачу моделирования

		    Problem.Scenarios.AddScenario(Scenario);

		    // Создаем параметры расчета задачи оптимального управления

		    ControlProblem := New MsControlProblem.Create;

		    // Указываем, что созданная задача моделирования имеет тип "Задача оптимального управления"

		    Problem.Details := ControlProblem;

		    // Задаем базовые параметры задачи оптимального управления

		    ControlProblem.Extremum := ExtremumType.Minimum;

		    ControlProblem.MaxIterationsCount := 100000;

		    ControlProblem.MethodType := CpNonLinearMethodType.SequentialQP;

		    ControlProblem.Level := DimCalendarLevel.Year;

		    ControlProblem.Tolerance := 0.005;

		    // Получаем модель, содержащую параметры целевой функции

		    CPModel := ControlProblem.Model;

		    // Получаем моделируемую переменную

		    CPTransform := CPModel.Transform;

		    CPOutputs := CPTransform.Outputs;

		    // Указываем, что в моделируемую переменную будут выгружаться оптимальные значения целевой функции

		    ControlProblem.OptimalVariable := CPOutputs.Item(0).VariableStub As IMsVariable;

		    // Получаем коллекцию управляющих переменных

		    ControlsList := ControlProblem.ControlVariables;

		    // Получаем модель, рассчитываемую задачей моделирования

		    Model := (MetaModel.CalculationChain.FindById("CONTROL_MODEL") As IMsCalculationChainModel).Model;

		    // Получаем коллекцию факторов модели

		    Inputs := Model.Transform.Inputs;

		    // Добавляем все факторы модели в коллекцию управляющих переменных

		    For i := 0 To Inputs.Count - 1 Do

		        FactorVar := Inputs.Item(i);

		        CPInputs := CPTransform.Inputs;

		        ControlVar := CPInputs.Add(FactorVar.VariableStub);

		        Slice := ControlVar.Slices.Add(FactorVar.Slices.Item(0).Selection);

		        // Задаем границы управляющих переменных

		        ControlTerm := ControlsList.Add(Slice) As IMsNonLinearControlFormulaTerm;

		        ControlTerm.UseLowerBound := True;

		        ControlTerm.LowerBound := 0 - i * 0.1;

		        ControlTerm.UseUpperBound := True;

		        ControlTerm.UpperBound := 1 + i * 0.1;

		    End For;

		    // Получаем коллекцию переменных для составления целевой функции

		    CFList := ControlProblem.Operands;

		    // Добавляем переменную в коллекцию

		    CFVar := CPInputs.Item(0);

		    Slice := CFVar.Slices.Item(0);

		    CFTerm := CFList.Add(Slice);

		    // Составляем целевую функцию

		    s := CFTerm.TermToInnerText + " + 0.5";

		    ControlProblem.CriterionFunction.AsString := s;

		    // Получаем коллекцию ограничений целевой функции

		    Constrs := ControlProblem.Constraints;

		    // Добавляем ограничение

		    Constr := Constrs.Add;

		    ConstrTerm := Constr.Operands.Add(Slice);

		    Constr.Expression.AsString := ConstrTerm.TermToInnerText;

		    Constr.LowerBound.AsString := "-100";

		    Constr.UpperBound.AsString := "100";

		    // Задаем период расчета

		    Period := ControlProblem.Period;

		    Period.IdentificationStartDate := DateTime.Parse("01.01.1990");

		    Period.IdentificationEndDate := DateTime.Parse("31.12.2011");

		    Period.ForecastStartDate := DateTime.Parse("01.01.2012");

		    Period.ForecastEndDate := DateTime.Parse("31.12.2018");

		    // Сохраняем изменения

		    MObj.Save;

		    (MsObj As IMetabaseObject).Save;

		End Sub UserProc;


В результате выполнения примера в контейнере моделирования в папке CONTROLPROBLEM_FOLDER
 будет создана новая задача оптимального управления. В задачу будет добавлена
 метамодель, сценарий и переменная для составления целевой функции. Будет
 составлена целевая функция, для которой в ходе расчёта задачи будет определяться
 минимальное значение. Для расчёта будет использоваться метод квадратичного
 программирования. Будет добавлена управляющая переменная и одно ограничение
 для целевой функции. Заданы минимальное число итераций и точность поиска
 решения.


См. также:


[IMsControlProblem](IMsControlProblem.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
