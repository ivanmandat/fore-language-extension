# IMsFormulaTransformVariables.AddParamVariable

IMsFormulaTransformVariables.AddParamVariable
-


# IMsFormulaTransformVariables.AddParamVariable


## Синтаксис


AddParamVariable(Value: String): [IMsFormulaTransformVariable](../IMsFormulaTransformVariable/IMsFormulaTransformVariable.htm);


## Параметры


Value. Идентификатор, который
 будет присвоен переменной.


## Описание


Метод AddParamVariable
 добавляет в коллекцию переменную, которая является параметром.


## Пример


Для выполнения примера предполагается наличие в репозитории контейнера
 моделирования с идентификатором CONT_M. В данном контейнере должна присутствовать
 модель с идентификатором «Model», использующая для расчетов детерминированное
 уравнение.


			Sub UserProc;

Var

    mb: IMetabase;

    cm: IMetabaseObjectDescriptor;

    Model: IMsModel;

    Formula: IMsFormula;

    Determ: IMsDeterministicTransform;

    Transform: IMsFormulaTransform;

    Term: IMsFormulaTerm;

    InputsVar: IMsFormulaTransformVariables;

    ParamVar: IMsFormulaTransformVariable;

    Slice: IMsFormulaTransformSlice;

Begin

    mb := MetabaseClass.Active;

    cm := mb.ItemById("CONT_M");

    Model := mb.ItemByIdNamespace("Model", cm.Key).Edit As IMsModel;

    Transform := Model.Transform;

    Formula := Transform.FormulaItem(0);

    Determ := Formula.Method As IMsDeterministicTransform;

    InputsVar := Transform.Inputs;

    ParamVar := InputsVar.AddParamVariable("VAR_PARAM");

    Slice := ParamVar.Slices.Add(Null);

    Term := Determ.Operands.Add(Slice);

    Determ.Expression.AsString := "10 * " + Term.TermToInnerText;

    (Model As IMetabaseObject).Save;

End Sub UserProc;


После выполнения примера в коллекцию входных переменных модели будет
 добавлена переменная VAR_PARAM, являющаяся параметром. Данный параметр
 будет использоваться в формуле расчета модели.


См. также:


[IMsFormulaTransformVariables](IMsFormulaTransformVariables.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
