# IMsCalculationChainEntries.AddTargetConstraint

IMsCalculationChainEntries.AddTargetConstraint
-


# IMsCalculationChainEntries.AddTargetConstraint


## Синтаксис


		AddTargetConstraint(TargetEntry: [IMsCalculationChainTarget](../IMsCalculationChainTarget/IMsCalculationChainTarget.htm);

		                    TargetConstraint:
		 [IMsTargetConstraint](../IMsTargetConstraint/IMsTargetConstraint.htm)):
		 [IMsCalculationChainTargetConstraint](../IMsCalculationChainTargetConstraint/IMsCalculationChainTargetConstraint.htm);


## Параметры


TargetEntry. Целевая функция,
 к которой добавляется ограничение;


TargetConstraint. Добавляемое
 ограничение.


## Описание


Метод AddTargetConstraint добавляет
 в [цепочку
 расчёта](UiModelling.chm::/2_Container_of_Modeling/2_3_Work_object/2_3_3_MetaModel/uimodelling_metamodel_2.htm) ограничение к указанной целевой функции.


## Комментарии


Добавлять ограничение в цепочку расчёта необходимо, если настраиваемая
 задача моделирования предназначена для работы в веб-приложении.


Если TargetConstraint принимает
 значение Null, то ограничение
 будет создано автоматически и добавлено в [коллекцию
 ограничений](../IMsTargetProblem/IMsTargetProblem.Constraints.htm) целевой функции. Для задания параметров созданного ограничения
 используйте свойство [IMsCalculationChainTargetConstraint.Constraint](../IMsCalculationChainTargetConstraint/IMsCalculationChainTargetConstraint.Constraint.htm).


Для добавления целевой функции в цепочку расчёта используйте метод [IMsCalculationChainEntries.AddTargetProblem](IMsCalculationChainEntries.AddTargetProblem.htm).


## Пример


Для выполнения примера в репозитории предполагается наличие контейнера
 моделирования с идентификатором MS, содержащего задачу моделирования с
 идентификатором CHAIN_TARGET_CONSTRANT_D. Данная задача должна быть предназначена
 для веб-приложения и содержать целевую функцию.


Добавьте ссылки на системные сборки: Metabase, Ms.


					Sub UserProc;

		Var

		    mb: IMetabase;

		    MsObj: IMetabaseObjectDescriptor;

		    Ms: IMsModelSpace;

		    Problem: IMsProblem;

		    CalcChain: IMsCalculationChainEntries;

		    I, j: Integer;

		    MetaTarget: IMsCalculationChainTarget;

		    TargetProblem: IMsTargetProblem;

		    Constraints: IMsTargetConstraints;

		    Constraint: IMsTargetConstraint;

		    TargetModel: IMsModel;

		    TargetTrans: IMsFormulaTransform;

		    TargetTransformVar: IMsFormulaTransformVariable;

		    ConstrSlice: IMsFormulaTransformSlice;

		    Tree: IMsFormulaTransformSlicesTree;

		    ConstrTermX1: IMsFormulaTerm;

		    TargetConstrArray: IMsTargetConstraintInfoArray;

		    TargetConstrInfo: IMsTargetConstraintInfo;

		    MetaConstraint: IMsCalculationChainTargetConstraint;

		Begin

		    // Получаем текущий репозиторий

		    mb := MetabaseClass.Active;

		    // Получаем контейнер моделирования

		    MsObj := mb.ItemById("MS");

		    Ms := MsObj.Bind As IMsModelSpace;

		    // Получаем задачу моделирования

		    Problem := mb.ItemByIdNamespace("CHAIN_TARGET_CONSTRANT_D", MsObj.Key).Edit As IMsProblem;

		    // Получаем цепочку расчета

		    CalcChain := Problem.MetaModel.CalculationChain;

		    // Ищем целевую функцию

		    j := CalcChain.Count - 1;

		    For i := 0 To j Do

		        If CalcChain.Item(i).Type = MsCalculationChainEntryType.Target Then

		            MetaTarget := CalcChain.Item(i) As IMsCalculationChainTarget;

		            // Задаем собственное наименование целевой функции

		            MetaTarget.UseCustomName := True;

		            MetaTarget.Name := "Целевая функция с ограничениями";

		        End If;

		        // Удаляем существующие ограничения из цепочки расчета

		        If CalcChain.Item(i).Type = MsCalculationChainEntryType.TargetConstraint Then

		            CalcChain.Remove(i);

		            j := j - 1;

		        End If;

		    End For;

		    // Получаем целевую задачу

		    TargetProblem := MetaTarget.TargetProblem;

		    // Удаляем существующие ограничения из целевой задачи

		    Constraints := TargetProblem.Constraints;

		    Constraints.Clear;

		    // Добавляем новое ограничение

		    Constraint := Constraints.Add;

		    TargetModel := TargetProblem.Model;

		    TargetTrans := TargetModel.Transform;

		    TargetTransformVar := TargetTrans.Inputs.Add(TargetTrans.Outputs.Item(0).VariableStub);

		    Tree := TargetTransformVar.SlicesTree(TargetTransformVar);

		    ConstrSlice := Tree.CreateSlice(1);

		    ConstrTermX1 := Constraint.Operands.Add(ConstrSlice);

		    // Задаем выражение ограничения

		    Constraint.Expression.AsString := ConstrTermX1.TermToInnerText;

		    // Задаем режим фиксации границ ограничения

		    Constraint.LowerBoundFixed := MsBoundFixType.NotFixed;

		    Constraint.UpperBoundFixed := MsBoundFixType.NotFixed;

		    // Задаем значения ограничения целевой функции

		    TargetConstrArray := Constraint.ConstraintInfoArray;

		    For i := 0 To 4 Do

		        TargetConstrInfo := TargetConstrArray.Add;

		        TargetConstrInfo.TimeMoment := i;

		        TargetConstrInfo.LowerBoundFixed := False;

		        TargetConstrInfo.LowerBound := 0.74 + i * 0.1;

		        TargetConstrInfo.UpperBoundFixed := False;

		        TargetConstrInfo.UpperBound := 1.74 + i * 0.1;

		    End For;

		    // Добавляем ограничение целевой функции в цепочку расчета

		    MetaConstraint := CalcChain.AddTargetConstraint(MetaTarget, Constraint);

		    MetaConstraint.Name := "Ограничение целевой функции '" + MetaTarget.Name + "' ";

		    // Сохраняем изменения

		    (Problem As IMetabaseObject).Save;

		End Sub UserProc;


В результате выполнения примера целевая функция будет переименована,
 также для неё будет создано ограничение.


См. также:


[IMsCalculationChainEntries](IMsCalculationChainEntries.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
