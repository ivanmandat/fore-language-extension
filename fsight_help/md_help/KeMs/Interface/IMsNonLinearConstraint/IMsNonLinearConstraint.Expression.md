# IMsNonLinearConstraint.Expression

IMsNonLinearConstraint.Expression
-


# IMsNonLinearConstraint.Expression


## Синтаксис


Expression: [IExpression](ForeSys.chm::/Interface/IExpression/IExpression.htm);


## Описание


Свойство Expression возвращает
 выражение, которое необходимо ограничить.


## Пример


Для выполнения примера предполагается наличие контейнера моделирования
 с идентификатором CONT_MODEL. В контейнере создана задача оптимального
 управления с идентификатором CONTROL_PROBLEM.


			Sub UserProc;

Var

    MB: IMetabase;

    Problem: IMsProblem;

    ControlProblem: IMsControlProblem;

    Transform: IMsFormulaTransform;

    Term1: IMsFormulaTerm;

    TrVar: IMsFormulaTransformVariable;

    Slice: IMsFormulaTransformSlice;

    Constrs: IMsNonLinearConstraints;

    Constr: IMsNonLinearConstraint;

Begin

    MB := MetabaseClass.Active;

    Problem := MB.ItemByIdNamespace("CONTROL_PROBLEM", MB.ItemById("CONT_MODEL").Key).Edit As IMsProblem;

    ControlProblem := Problem.Details As IMsControlProblem;

    Transform := ControlProblem.ControlTransform;

    Constrs := ControlProblem.Constraints;

    Constr := Constrs.Add;

    TrVar := Transform.Inputs.Item(0);

    Slice := TrVar.Slices.Item(0);

    Term1 := Constr.Operands.Add(Slice);

    Constr.Expression.AsString := Term1.TermToInnerText;

    Constr.LowerBound.AsString := "-150";

    Constr.UpperBound.AsString := "150";

    (Problem As IMetabaseObject).Save;

End Sub UserProc;


После выполнения примера в задачу будет добавлено новое ограничение.


См. также:


[IMsNonLinearConstraint](IMsNonLinearConstraint.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
