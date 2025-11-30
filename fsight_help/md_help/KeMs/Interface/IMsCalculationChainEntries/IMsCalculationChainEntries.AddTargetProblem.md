# IMsCalculationChainEntries.AddTargetProblem

IMsCalculationChainEntries.AddTargetProblem
-


# IMsCalculationChainEntries.AddTargetProblem


## Синтаксис


		AddTargetProblem(TargetProblem: [IMsTargetProblem](../IMsTargetProblem/IMsTargetProblem.htm);

		                 Level:
		 [DimCalendarLevel](KeDims.chm::/Enums/DimCalendarLevel.htm)):
		 [IMsCalculationChainTarget](../IMsCalculationChainTarget/IMsCalculationChainTarget.htm);


## Параметры


TargetProblem. Целевая задача,
 для которой добавляется целевая функция;


Level. Календарная динамика
 добавляемой целевой функции.


## Описание


Метод AddTargetProblem добавляет
 целевую функцию в [цепочку
 расчёта](UiModelling.chm::/2_Container_of_Modeling/2_3_Work_object/2_3_3_MetaModel/uimodelling_metamodel_2.htm) метамодели.


## Комментарии


Добавлять целевую функцию в цепочку расчёта необходимо, если настраиваемая
 задача моделирования предназначена для работы в веб-приложении.


Если TargetProblem принимает
 значение Null, то целевая функция
 будет создана автоматически и добавлена в [коллекцию
 дополнительных параметров задачи](../IMsProblem/IMsProblem.AdditionalDetails.htm). Для задания параметров созданной
 целевой функции используйте свойство [IMsCalculationChainTarget.TargetProblem](../IMsCalculationChainTarget/IMsCalculationChainTarget.TargetProblem.htm).


После добавления целевой функции в цепочку расчёта необходимо задать
 [сценарий
 оптимизационной задачи](../IMsTargetProblem/IMsTargetProblem.OptimisticScenario.htm).


## Пример


Для выполнения примера в репозитории предполагается наличие контейнера
 моделирования с идентификатором MS, содержащего задачу моделирования с
 идентификатором CHAIN_TARGET_CONSTRANT. Данная задача должна быть предназначена
 для веб-приложения и содержать несколько сценариев.


Добавьте ссылки на системные сборки: Dimensions, Metabase, Ms.


					Sub UserProc;

		Var

		    mb: IMetabase;

		    MsObj: IMetabaseObjectDescriptor;

		    Ms: IMsModelSpace;

		    Problem: IMsProblem;

		    MetaModel: IMsMetaModel;

		    CalcChain: IMsCalculationChainEntries;

		    Transform: IMsFormulaTransform;

		    TransformVarables: IMsFormulaTransformVariables;

		    TransVar: IMsFormulaTransformVariable;

		    Slice: IMsFormulaTransformSlice;

		    Target: IMsTargetProblem;

		    AdditionalDetails: IMsProblemDetailsArray;

		    MetaTarget: IMsCalculationChainTarget;

		    OperandTerm: IMsFormulaTerm;

		    exVar: Boolean;

		    MetaVisual: IMsMetaModelVisualController;

		    VarOutp: IMsCalculationChainVariable;

		    VarEx: Boolean;

		    InVarKey, InModelKey: Integer;

		    InpKeys: Array[1] Of Integer;

		    SimpleModel: IMsModel;

		    Operands: IMsFormulaTermList;

		Begin

		    // Получаем текущий репозиторий

		    mb := MetabaseClass.Active;

		    // Получаем контейнер моделирования

		    MsObj := mb.ItemById("MS");

		    Ms := MsObj.Bind As IMsModelSpace;

		    // Получаем задачу моделирования

		    Problem := mb.ItemByIdNamespace("CHAIN_TARGET_CONSTRANT", MsObj.Key).Edit As IMsProblem;

		    // Получаем цепочку расчёта и очищаем её

		    MetaModel := Problem.EditMetaModel;

		    CalcChain := MetaModel.CalculationChain;

		    CalcChain.Clear;

		    // Если необходимо, то создаем для метамодели внутреннюю БД временных рядов

		    MetaVisual := MetaModel.VisualController;

		    If Not MetaVisual.HasVariableRubricator Then

		        MetaVisual.HasVariableRubricator := True;

		    End If;

		    // Создаем внутреннюю переменную

		    VarOutp := MetaVisual.CreateVariable("Внутренняя переменная", "", DimCalendarLevel.Year, VarEx);

		    InpKeys[0] := VarOutp.Key;

		    // Создаем внутреннюю модель

		    SimpleModel := MetaVisual.CreateSimpleModel(-1, InpKeys, VarOutp.Key, MsFormulaKind.LinearRegression, "", InVarKey, InModelKey, -1, -1, True);

		    // Создаем целевую задачу

		    Target := New MsTargetProblem.Create;

		    // Устанавливаем параметры целевой задачи

		    AdditionalDetails := Problem.AdditionalDetails;

		    AdditionalDetails.Clear;

		    AdditionalDetails.AddDetails(Target, VarOutp.Slice);

		    // Задаем сценарий оптимизационной задачи

		    Target.OptimisticScenario := Problem.Scenarios.Item(0);

		    // Добавляем переменные целевой функции

		    Operands := Target.Operands;

		    Transform := SimpleModel.Transform;

		    TransformVarables := Transform.Outputs;

		    TransVar := TransformVarables.Item(0);

		    Slice := TransVar.Slices.Item(0);

		    OperandTerm := Operands.Add(Slice);

		    // Задаем целевую функцию

		    Target.CriterionFunction.AsString := OperandTerm.TermToInnerText;

		    // Добавляем целевую задачу в цепочку расчета

		    MetaTarget := CalcChain.AddTargetProblem(Target, DimCalendarLevel.Year);

		    // Задаем пользовательское имя целевой задачи

		    MetaTarget.UseCustomName := True;

		    MetaTarget.Name := "Новая целевая функция";

		    // Сохраняем изменения

		    (Problem As IMetabaseObject).Save;

		End Sub UserProc;


В результате выполнения примера в задачу моделирования будет добавлена
 внутренняя модель и целевая функция.


См. также:


[IMsCalculationChainEntries](IMsCalculationChainEntries.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
