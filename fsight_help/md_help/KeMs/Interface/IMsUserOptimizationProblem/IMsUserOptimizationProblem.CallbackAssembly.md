# IMsUserOptimizationProblem.CallbackAssembly

IMsUserOptimizationProblem.CallbackAssembly
-


# IMsUserOptimizationProblem.CallbackAssembly


## Синтаксис


		CallbackAssembly: [IMetabaseObjectDescriptor](KeSom.chm::/Interface/IMetabaseObjectDescriptor/IMetabaseObjectDescriptor.htm);


## Описание


Свойство CallbackAssembly определяет
 сборку, в которой содержится класс для выполнения [пользовательского
 алгоритма](UiModelling.chm::/2_Container_of_Modeling/2_3_Work_object/2_3_4_Problem/CustomAlgorithm.htm).


## Пример


Для выполнения примера в репозитории предполагается наличие контейнера
 моделирования с идентификатором MS, содержащего папку с идентификатором
 USEROPTIMIZATION, метамодель с идентификатором USEROPTIMIZATION_METAMODEL
 и модель с идентификатором USEROPTIMIZATION_MODEL. Также в репозитории
 должен содержаться модуль с идентификатором USEROPTIMIZATIONCALLBACK,
 реализующий пользовательский алгоритм с помощью интерфейса [IMsUserOptimizationCallback](../IMsUserOptimizationCallback/IMsUserOptimizationCallback.htm).


Добавьте ссылки на системные сборки: Cp, Dimensions, Metabase, Ms.


					Sub UserProc;

		Var

		    MB: IMetabase;

		    MsObj, ProblemObj: IMetabaseObject;

		    CrInfo: IMetabaseObjectCreateInfo;

		    Problem: IMsProblem;

		    MetaModel: IMsMetaModel;

		    Period: IMsModelPeriod;

		    CalcChain: IMsCalculationChainEntries;

		    CalcChainModel: IMsCalculationChainModel;

		    Model: IMsModel;

		    Trans, UserOptTrans: IMsFormulaTransform;

		    TransformVar, UserOptTransformVar: IMsFormulaTransformVariable;

		    Slice, UserOptSlice, ConstrSlice: IMsFormulaTransformSlice;

		    Operands, ControlVariables, ConstrOperands: IMsFormulaTermList;

		    OperTermX1, ConstrTermX1: IMsFormulaTerm;

		    ControlTermX1: IMsOptimizationFormulaTerm;

		    Tree: IMsFormulaTransformSlicesTree;

		    InitApprox: Array Of double;

		    i: Integer;

		    NlConstraints: IMsNonLinearConstraints;

		    NlConstr: IMsNonLinearConstraint;

		    UserOptProblem: IMsUserOptimizationProblem;

		    PTermInfo: IMsFormulaTermInfo;

		    PTerm: IMsFormulaTerm;

		Begin

		    MB := MetabaseClass.Active;

		    // Получим контейнер моделирования

		    MsObj := MB.ItemById("MS").Bind;

		    // Создадим пользовательскую задачу оптимизации

		    CrInfo := MB.CreateCreateInfo;

		    CrInfo.ClassID := MetabaseObjectClass.KE_CLASS_MSPROBLEM;

		    CrInfo.Id := MB.GenerateId("USEROPTIMIZATIONPROBLEM", MsObj.Key);

		    CrInfo.Name := "Пользовательская задача оптимизации";

		    CrInfo.Parent := MB.ItemByIdNamespace("USEROPTIMIZATION", MsObj.key);

		    ProblemObj := MB.CreateObject(CrInfo).Edit;

		    Problem := ProblemObj As IMsProblem;

		    UserOptProblem := New MsUserOptimizationProblem.Create;

		    Problem.Details := UserOptProblem;

		    // Зададим периоды расчёта

		    Period := UserOptProblem.Period;

		    Period.IdentificationStartDate := DateTime.Parse("01.01.2001");

		    Period.IdentificationEndDate := DateTime.Parse("31.12.2014");

		    Period.ForecastStartDate := DateTime.Parse("01.01.2015");

		    Period.ForecastEndDate := DateTime.Parse("31.12.2019");

		    // Зададим рассчитываемую метамодель

		    MetaModel := MB.ItemByIdNamespace("USEROPTIMIZATION_METAMODEL", MsObj.Key).Edit As IMsMetaModel;

		    Problem.MetaModel := MetaModel;

		    // Получим модель, рассчитываемую задачей

		    CalcChain := MetaModel.CalculationChain;

		    CalcChainModel := CalcChain.FindById("USEROPTIMIZATION_MODEL") As IMsCalculationChainModel;

		    Model := CalcChainModel.Model;

		    // Зададим параметры расчёта целевой функции

		    UserOptProblem.Level := DimCalendarLevel.Year;

		    // Зададим целевую функцию

		    PTermInfo := UserOptProblem.ControlTransform.CreateTermInfo;

		    PTermInfo.ParseTerm("{Инфляция, %|Лондон[t]}");

		    PTerm := UserOptProblem.Operands.Add(pTermInfo.Slice);

		    PTerm.TermInfo := PTermInfo;

		    UserOptProblem.CriterionFunction.AsString := PTerm.TermInfo.TermInnerText;

		    // Добавим фазовые переменные

		    Trans := Model.Transform;

		    TransformVar := Trans.Outputs.Item(0);

		    Slice := TransformVar.Slices.Item(0);

		    Operands := UserOptProblem.Operands;

		    OperTermX1 := Operands.Add(Slice);

		    Debug.WriteLine(OperTermX1.TermToInnerText);

		    // Зададим управляющие переменные

		    ControlVariables := UserOptProblem.ControlVariables;

		    UserOptTrans := UserOptProblem.ControlTransform;

		    UserOptTransformVar := UserOptTrans.Inputs.Add(TransformVar.VariableStub);

		    Tree := UserOptTransformVar.SlicesTree(UserOptTransformVar);

		    UserOptSlice := Tree.CreateSlice(2);

		    ControlTermX1 := ControlVariables.Add(UserOptSlice) As IMsOptimizationFormulaTerm;

		    Debug.WriteLine(ControlTermX1.TermToInnerText);

		    // Зададим начальные значения управляющей переменной

		    InitApprox := New Double[5];

		    For i := 0 To 4 Do

		        InitApprox[i] := i * 0.14;

		    End For;

		    ControlTermX1.InitApproximation := InitApprox;

		    // Зададим ограничения целевой функции

		    NlConstraints := UserOptProblem.Constraints;

		    NlConstr := NlConstraints.Add;

		    // Добавим новый операнд в коллекцию операндов целевой функции

		    ConstrOperands := NlConstr.Operands;

		    UserOptTransformVar := UserOptTrans.Inputs.Add(transformVar.VariableStub);

		    Tree := UserOptTransformVar.SlicesTree(UserOptTransformVar);

		    ConstrSlice := Tree.CreateSlice(3);

		    ConstrTermX1 := ConstrOperands.Add(ConstrSlice);

		    // Зададим выражение ограничения

		    NlConstr.Expression.AsString := ConstrTermX1.TermToInnerText;

		    NlConstr.LowerBound.AsString := "-10";

		    NlConstr.UpperBound.AsString := "10";

		    // Зададим пользовательский алгоритм

		    UserOptProblem.CallbackAsseMBly := MetabaseClass.Active.ItemById("USEROPTIMIZATIONCALLBACK");

		    UserOptProblem.CallbackClass := "UserClass";

		    // Сохраним задачу

		    ProblemObj.Save;

		End Sub UserProc;


В результате выполнения примера в контейнере моделирования будет создана
 пользовательская задача оптимизации с заданными параметрами.


См. также:


[IMsUserOptimizationProblem](IMsUserOptimizationProblem.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
