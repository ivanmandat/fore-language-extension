# IMsNonLinearEquationsTransform_Sample

IMsNonLinearEquationsTransform_Sample
-


# Пример работы с системой нелинейных уравнений


## Пример


			Sub UserProc;

Var

    MB: IMetabase;

    CrInf: IMetabaseObjectCreateInfo;

    MObj: IMetabaseObject;

    Model: IMsModel;

    Trans: IMsFormulaTransform;

    VarTrans: IMsFormulaTransformVariable;

    Tree: IMsFormulaTransformSlicesTree;

    Slice: IMsFormulaTransformSlice;

    Selector: IMsFormulaTransformSelector;

    Formula: IMsFormula;

    ComposForm: IMsCompositeFormulaTermList;

    ComposTerm: IMsCompositeFormulaTerm;

    LinReg: IMsLinearRegressionTransform;

    Determ: IMsDeterministicTransform;

    Varr: IMsVariable;

    TransVar: IMsFormulaTransformVariable;

    TermX1: IMsFormulaTerm;

Begin

    MB := MetabaseClass.Active;

    //создание модели

    CrInf := Mb.CreateCreateInfo;

    CrInf.ClassId := MetabaseObjectClass.KE_CLASS_MSMODEL;

    CrInf.Id := "New_NonLinEquation";

    CrInf.Name := "New_NonLinEquation";

    CrInf.Parent := Mb.ItemById("KONT_MODEL");

    CrInf.Permanent := False;

    MObj := Mb.CreateObject(CrInf).Edit;

    Model := MObj As IMsModel;

    Trans := Model.Transform;

    //Первая моделируемая переменная

    Varr := MB.ItemByIdNamespace("Y1", MB.ItemById("KONT_MODEL").Key).Bind As IMsVariable;

    Trans.Outputs.Add(Varr As IMsVariableStub);

    Varr := MB.ItemByIdNamespace("Y2", MB.ItemById("KONT_MODEL").Key).Bind As IMsVariable;

    Trans.Outputs.Add(Varr As IMsVariableStub);

    //Создаем систему нелинейных уравнений

    Trans.Kind := MsModelKind.NonLinearEquations;

    //Добавляем переменную в список входных

    Varr := MB.ItemByIdNamespace("X1", MB.ItemById("KONT_MODEL").Key).Bind As IMsVariable;

    Trans.Inputs.Add(Varr As IMsVariableStub);

    //Настройка параметров первого уравнения

    VarTrans := Trans.Outputs.Item(0);

    Tree := VarTrans.SlicesTree(VarTrans);

    Slice := Tree.CreateSlice(1);

    Selector := Trans.CreateSelector;

    Selector.Slice := Slice;

    Formula := Trans.Transform(Selector);

    Formula.Kind := MsFormulaKind.LinearRegression;

    LinReg := Formula.Method As IMsLinearRegressionTransform;

    TransVar := Model.Transform.Inputs.Item(0);

    ComposForm := LinReg.Explanatories;

    ComposTerm := ComposForm.Add;

    Slice := TransVar.SlicesTree(Null).CreateSlice(1);

    TermX1 := ComposTerm.Operands.Add(Slice);

    ComposTerm.Expression.AsString := TermX1.TermToInnerText;

    //Настройка параметров второго уравнения

    VarTrans := Trans.Outputs.Item(1);

    Tree := VarTrans.SlicesTree(VarTrans);

    Slice := Tree.CreateSlice(1);

    Selector := Trans.CreateSelector;

    Selector.Slice := Slice;

    Formula := Trans.Transform(Selector);

    Formula.Kind := MsFormulaKind.Deterministic;

    Determ := Formula.Method As IMsDeterministicTransform;

    TransVar := Model.Transform.Inputs.Item(0);

    Slice := TransVar.SlicesTree(Null).CreateSlice(1);

    TermX1 := Determ.Operands.Add(Slice);

    Determ.Expression.AsString := "(" + TermX1.TermToInnerText + "+ 5 ) / 3.14";

    MObj.Save;

End Sub UserProc;


После выполнения примера в контейнере моделирования будет создана система
 нелинейных уравнений. В систему входит два уравнения, для расчета первого
 используется метод линейной регрессии, для второго - метод детерминированного
 уравнения.


См. также:


[IMsNonLinearEquationsTransform](IMsNonLinearEquationsTransform.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
