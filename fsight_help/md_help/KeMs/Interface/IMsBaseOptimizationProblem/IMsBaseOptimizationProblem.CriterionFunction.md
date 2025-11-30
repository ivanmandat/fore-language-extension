# IMsBaseOptimizationProblem.CriterionFunction

IMsBaseOptimizationProblem.CriterionFunction
-


# IMsBaseOptimizationProblem.CriterionFunction


## Синтаксис


		CriterionFunction: [IExpression](ForeSys.chm::/Interface/IExpression/IExpression.htm);


## Описание


Свойство CriterionFunction
 возвращает целевую функцию.


## Комментарии


Для составления целевой функции используйте фазовые переменные. Для
 получения набора фазовых переменных используйте свойство [IMsBaseOptimizationProblem.Operands](IMsBaseOptimizationProblem.Operands.htm).


## Пример


Для выполнения примера в репозитории предполагается наличие контейнера
 моделирования с идентификатором MS, содержащего папку с идентификатором
 TARGET и метамодель с идентификатором TARGET_METAMODEL. Цепочка расчета
 данной метамодели должна содержать модель с идентификатором TARGET_MODEL.


Добавьте ссылки на системные сборки: Cp, Cubes, Dimensions, Metabase,
 Ms.


					Sub UserProc;

		Var

		    mb: IMetabase;

		    msObj, problemObj: IMetabaseObject;

		    crInfo: IMetabaseObjectCreateInfo;

		    problem: IMsProblem;

		    metaModel: IMsMetaModel;

		    forecastProblem: IMsProblemDetails;

		    targetProblem: IMsTargetProblem;

		    period: IMsModelPeriod;

		    calcChain: IMsCalculationChainEntries;

		    calcChainModel: IMsCalculationChainModel;

		    model, targetModel: IMsModel;

		    trans, targetTrans: IMsFormulaTransform;

		    transformVar, targetTransformVar: IMsFormulaTransformVariable;

		    slice, targetSlice, constrSlice: IMsFormulaTransformSlice;

		    operands, controlVariables, constrOperands: IMsFormulaTermList;

		    operTermX1, constrTermX1: IMsFormulaTerm;

		    controlTermX1: IMsTargetFormulaTerm;

		    tree: IMsFormulaTransformSlicesTree;

		    initApprox: Array Of double;

		    i: Integer;

		    varConstraints: IMsTargetVarConstraints;

		    varConstr: IMsTargetVarConstraint;

		    targetConstraints: IMsTargetConstraints;

		    targetConstr: IMsTargetConstraint;

		    targetConstrArray: IMsTargetConstraintInfoArray;

		    targetConstrInfo: IMsTargetConstraintInfo;

		Begin

		    mb := MetabaseClass.Active;

		    msObj := mb.ItemById("MS").Bind;

		    crInfo := MB.CreateCreateInfo;

		    crInfo.ClassID := MetabaseObjectClass.KE_CLASS_MSPROBLEM;

		    crInfo.Id := mb.GenerateId("TARGETPROBLEM", msObj.Key);

		    crInfo.Name := "Целевая задача";

		    crInfo.Parent := mb.ItemByIdNamespace("TARGET", msObj.key);

		    problemObj := mb.CreateObject(crInfo).Edit;

		    problem := problemObj As IMsProblem;

		    // Задаем рассчитываемую метамодель

		    metaModel := Mb.ItemByIdNamespace("TARGET_METAMODEL", msObj.Key).Edit As IMsMetaModel;

		    problem.MetaModel := metaModel;

		    // Задаем параметры прогнозирования для задачи

		    forecastProblem := New MsForecastingProblem.Create;

		    problem.Details := forecastProblem;

		    // Создаем параметры расчета целевой задачи

		    targetProblem := New MsTargetProblem.Create;

		    // Задаем периоды расчета

		    period := targetProblem.Period;

		    period.IdentificationStartDate := DateTime.Parse("01.01.2001");

		    period.IdentificationEndDate := DateTime.Parse("31.12.2014");

		    period.ForecastStartDate := DateTime.Parse("01.01.2015");

		    period.ForecastEndDate := DateTime.Parse("31.12.2019");

		    // Получаем модель, рассчитываемую задачей

		    calcChain := metaModel.CalculationChain;

		    calcChainModel := calcChain.FindById("TARGET_MODEL") As IMsCalculationChainModel;

		    model := calcChainModel.Model;

		    // Получаем срез моделируемой переменной

		    trans := model.Transform;

		    transformVar := trans.Outputs.Item(0);

		    slice := transformVar.Slices.Item(0);

		    // Устанавливаем параметры целевой задачи

		    problem.AdditionalDetails.AddDetails(targetProblem, slice);

		    // Добавляем фазовые переменные

		    operands := targetProblem.Operands;

		    operTermX1 := operands.Add(transformVar.Slices.Item(0));

		    // Задаем целевую функцию

		    targetProblem.CriterionFunction.AsString := operTermX1.TermToInnerText;

		    // Задаем параметры расчета целевой функции

		    targetProblem.Extremum := ExtremumType.Maximum;

		    targetProblem.AutoSearchType := TargetAutoSearchType.ExactSol;

		    targetProblem.NodesCount := 4;

		    targetProblem.MethodType := CpNonLinearMethodType.GridSearch;

		    targetProblem.VariablesCalculationTechnique := StateVariablesCalculationTechniqueType.DirectEntirelySubstitution;

		    targetProblem.Level := DimCalendarLevel.Year;

		    // Задаем точность решения и допустимое число итераций

		    targetProblem.Tolerance := 0.00001;

		    targetProblem.MaxIterationsCount := 150;

		    // Задаем управляющие переменные

		    controlVariables := targetProblem.ControlVariables;

		    targetTrans := targetProblem.ControlTransform;

		    targetTransformVar := targetTrans.Inputs.Add(transformVar.VariableStub);

		    tree := targetTransformVar.SlicesTree(targetTransformVar);

		    targetSlice := tree.CreateSlice(2);

		    controlTermX1 := controlVariables.Add(targetSlice) As IMsTargetFormulaTerm;

		    // Задаем начальные значения управляющей переменной

		    initApprox := New Double[5];

		    For i := 0 To 4 Do

		        initApprox[i] := i * 0.14;

		    End For;

		    controlTermX1.InitApproximation := initApprox;

		    // Задаем режим фиксации границ управляющей переменной

		    controlTermX1.UpperBoundFixed := MsBoundFixType.NotFixed;

		    controlTermX1.LowerBoundFixed := MsBoundFixType.NotFixed;

		    // Задаем ограничения управляющей переменной

		    varConstraints := controlTermX1.VarConstraints;

		    For i := 0 To 4 Do

		        varConstr := varConstraints.Add;

		        varConstr.TimeMoment := i;

		        varConstr.UseLowerBound := True;

		        varConstr.LowerBoundFixed := False;

		        varConstr.LowerBound := 0.44 + i * 0.1;

		        varConstr.UseUpperBound := True;

		        varConstr.UpperBoundFixed := False;

		        varConstr.UpperBound := 0.64 + i * 0.1;

		    End For;

		    // Задаем ограничения целевой функции

		    targetConstraints := targetProblem.Constraints;

		    // Создаем ограничение

		    targetConstr := targetConstraints.Add;

		    // Добавляем новый операнд в коллекцию операндов целевой функции

		    constrOperands := targetConstr.Operands;

		    targetTransformVar := targetTrans.Inputs.Add(transformVar.VariableStub);

		    tree := targetTransformVar.SlicesTree(targetTransformVar);

		    constrSlice := tree.CreateSlice(3);

		    constrTermX1 := constrOperands.Add(constrSlice);

		    // Задаем выражение ограничения

		    targetConstr.Expression.AsString := constrTermX1.TermToInnerText;

		    // Задаем режим фиксации границ ограничения

		    targetConstr.LowerBoundFixed := MsBoundFixType.NotFixed;

		    targetConstr.UpperBoundFixed := MsBoundFixType.NotFixed;

		    // Задаем значения ограничения целевой функции

		    targetConstrArray := targetConstr.ConstraintInfoArray;

		    For i := 0 To 4 Do

		        targetConstrInfo := targetConstrArray.Add;

		        targetConstrInfo.TimeMoment := i;

		        targetConstrInfo.LowerBoundFixed := False;

		        targetConstrInfo.LowerBound := 0.74 + i * 0.1;

		        targetConstrInfo.UpperBoundFixed := False;

		        targetConstrInfo.UpperBound := 1.74 + i * 0.1;

		    End For;

		    // Сохраняем задачу

		    problemObj.Save;

		End Sub UserProc;


В результате выполнения примера в контейнере моделирования в папке с
 идентификатором TARGET будет создана и настроена целевая задача.


См. также:


[IMsBaseOptimizationProblem](IMsBaseOptimizationProblem.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
