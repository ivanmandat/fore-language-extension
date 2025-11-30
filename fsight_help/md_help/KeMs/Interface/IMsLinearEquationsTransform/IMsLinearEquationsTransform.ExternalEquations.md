# IMsLinearEquationsTransform.ExternalEquations

IMsLinearEquationsTransform.ExternalEquations
-


# IMsLinearEquationsTransform.ExternalEquations


## Синтаксис


ExternalEquations: [IMsModelList](../IMsModelList/IMsModelList.htm);


## Описание


Свойство ExternalEquations возвращает коллекцию внешних моделей, входящих в систему.


## Пример


Для выполнения примера предполагается наличие в репозитории контейнера моделирования с идентификатором «CONT_MODEL». В данном контейнере должны присутствовать модели с идентификаторами «MODEL», «MODEL_EX» и переменные с идентификаторами «X1», «Y1», «X2», «Y2».


Добавьте ссылки на системные сборки «Metabase», «Ms», «Cubes», «Stat».


			Sub UserProc;

Var

    Model, Model_ex: IMsModel;

    Desc: IMetabaseObjectDescriptor;

    obj: IMetabaseObject;

    ModelSpace: IMetabaseObjectDescriptor;

    mb: IMetabase;

    Equations: IMsLinearEquationsTransform;

    ExternalEquations: IMsModelList;

    Method: IMsMethod;

    X1, X2, Y1, Y2, XY2, XY1: IMsFormulaTransformVariable;

    Outputs, Inputs: IMsFormulaTransformVariables;

    Selector: IMsFormulaTransformSelector;

    Formula, f1, f2: IMsFormula;

    lr: IMsLinearRegressionTransform;

    CompositeTerm: IMsCompositeFormulaTerm;

    info: IMsFormulaTermInfo;

    Trans: IMsFormulaTransform;

    vY1, vY2, vX1, vX2: IMsVariable;

Begin

    mb := MetabaseClass.Active;

    ModelSpace := mb.ItemById("CONT_MODEL");

    Desc := mb.ItemByIdNamespace("MODEL", ModelSpace.Key);

    obj := Desc.Edit;

    Model := obj As IMsModel;

    Trans := Model.Transform;

    Outputs := Trans.Outputs;

    Outputs.Clear;

    Inputs := Trans.Inputs;

    Inputs.Clear;

    Trans.Kind := MsModelKind.LinearEquations;

    Method := Model.Transform.EquationsFormula.Method;

    Equations := Method As IMsLinearEquationsTransform;

    ExternalEquations := Equations.ExternalEquations;

    If ExternalEquations.Count > 0 Then

        ExternalEquations.Clear;

    End If;

    Model_ex := mb.ItemByIdNamespace("MODEL_EX", ModelSpace.Key).Bind As IMsModel;

    ExternalEquations.Add(Model_ex);

    Equations.MissingData.Method := MissingDataMethod.LinTrend;

// Эндогенные переменные
    vY1 := mb.ItemByIdNamespace("Y1", ModelSpace.Key).Bind As IMsVariable;

    vY2 := mb.ItemByIdNamespace("Y2", ModelSpace.Key).Bind As IMsVariable;

    vX1 := mb.ItemByIdNamespace("X1", ModelSpace.Key).Bind As IMsVariable;

    vX2 := mb.ItemByIdNamespace("X2", ModelSpace.Key).Bind As IMsVariable;

    Y1 := Outputs.Add(vY1 As IVariableStub);

    Y2 := Outputs.Add(vY2 As IVariableStub);

    X1 := Inputs.Add(vX1 As IVariableStub);

    X2 := Inputs.Add(vX2 As IVariableStub);

    XY2 := Inputs.Add(vY2 As IVariableStub);

    XY1 := Inputs.Add(vY1 As IVariableStub);

// Первое уравнение в системе
    Selector := Model.Transform.CreateSelector;

    Selector.Slice := Y1.Slices.Add(Null);

    Trans := Model.Transform;

    Formula := Trans.Transform(Selector);

    Formula.Kind := MsFormulaKind.LinearRegression;

    lr := Formula.Method As IMsLinearRegressionTransform;

    lr.MissingData.Method := MissingDataMethod.PrevValue;

    lr.HasConstant := True;

    CompositeTerm := lr.Explanatories.Add;

    info := trans.CreateTermInfo;

    info.Slice := X1.Slices.Add(Null);

    CompositeTerm.Expression.AsString := info.TermInnerText;

    CompositeTerm := lr.Explanatories.Add;

    info := trans.CreateTermInfo;

    info.Slice := XY2.Slices.Add(Null);

    CompositeTerm.Expression.AsString := info.TermInnerText;

    f1 := Formula;

    Equations.EstimateSimultaneously(f1) := True;

    If Equations.IdentifiableState(f1) = MsEquationIdentifiableState.NonIdentifiable Then

        Debug.WriteLine("Первое уравнение неидентифицируемо");

    End If;

// Второе уравнение в системе
    Selector := Model.Transform.CreateSelector;

    Selector.Slice := Y2.Slices.Add(Null);

    Trans := Model.Transform;

    Formula := Trans.Transform(Selector);

    Formula.Kind := MsFormulaKind.LinearRegression;

    lr := Formula.Method As IMsLinearRegressionTransform;

    lr.HasConstant := False;

    CompositeTerm := lr.Explanatories.Add;

    info := trans.CreateTermInfo;

    info.Slice := X2.Slices.Add(Null);

    CompositeTerm.Expression.AsString := info.TermInnerText;

    CompositeTerm := lr.Explanatories.Add;

    info := trans.CreateTermInfo;

    info.Slice := XY1.Slices.Add(Null);

    CompositeTerm.Expression.AsString := info.TermInnerText;

    f2 := Formula;

    Equations.EstimateSimultaneously(f2) := True;

    If Equations.IdentifiableState(f2) = MsEquationIdentifiableState.NonIdentifiable Then

        Debug.WriteLine("Второе уравнение неидентифицируемо");

    End If;

    obj.Save;

End Sub UserProc;


После выполнения примера будет создана система одновременных уравнений, содержащая два уравнения линейной регрессии и одну внешнюю модель. Данные об идентифицируемости уравнений будут выведены в окно консоли.


См. также:


[IMsLinearEquationsTransform](IMsLinearEquationsTransform.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
