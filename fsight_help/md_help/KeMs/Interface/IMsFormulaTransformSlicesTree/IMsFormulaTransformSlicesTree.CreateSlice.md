# IMsFormulaTransformSlicesTree.CreateSlice

IMsFormulaTransformSlicesTree.CreateSlice
-


# IMsFormulaTransformSlicesTree.CreateSlice


## Синтаксис


CreateSlice(Element: Integer): [IMsFormulaTransformSlice](../IMsFormulaTransformSlice/IMsFormulaTransformSlice.htm);


## Параметры


Element. Индекс элемента.


## Описание


Метод CreateSlice создает срез
 в переменной.


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

    NonLinear: IMsNonLinearRegressionTransform;

    Varr: IMsVariableStub;

    TransVar: IMsFormulaTransformVariable;

    TermX1: IMsFormulaTerm;

    TermInfo: IMsFormulaTermInfo;

    s: String;

Begin

    MB := MetabaseClass.Active;

    //создание модели

    CrInf := Mb.CreateCreateInfo;

    CrInf.ClassId := MetabaseObjectClass.KE_CLASS_MSMODEL;

    CrInf.Id := "New_NonLinReg";

    CrInf.Name := "New_NonLinReg";

    CrInf.Parent := Mb.ItemById("KONT_MODEL");

    CrInf.Permanent := False;

    MObj := Mb.CreateObject(CrInf).Edit;

    Model := MObj As IMsModel;

    Trans := Model.Transform;

    //добавление моделируемой переменной

    Varr := MB.ItemByIdNamespace("Var_1", MB.ItemById("KONT_MODEL").Key).Bind As IMsVariableStub;

    Trans.Outputs.Add(Varr);

    VarTrans := Trans.Outputs.Item(0);

    Tree := VarTrans.SlicesTree(VarTrans);

    Slice := Tree.CreateSlice(1);

    Selector := Model.Transform.CreateSelector;

    Selector.Slice := Slice;

    Formula := Model.Transform.Transform(Selector);

    Formula.Kind := MsFormulaKind.NonLinearRegression;

    NonLinear := Formula.Method As IMsNonLinearRegressionTransform;

    //добавление фактора

    Varr := MB.ItemByIdNamespace("Var_Factor", MB.ItemById("KONT_MODEL").Key).Bind As IMsVariableStub;

    Trans.Inputs.Add(Varr);

    TransVar := Model.Transform.Inputs.Item(0);

    //сопоставление терма срезу в переменной

    TermX1 := NonLinear.Operands.Add(TransVar.SlicesTree(VarTrans).CreateSlice(1));

    //изменение параметров терма

    TermInfo := TermX1.TermInfo;

    TermInfo.Lag := "-1";

    //создание уравнения

    s := "A0+" + TermX1.TermToInnerText + "/10 ";

    NonLinear.Expression.AsString := s;

    MObj.Save;

End Sub UserProc;


После выполнения примера в контейнере моделирования будет создана новая
 модель. В созданную модель добавляется моделируемая переменная и одна
 входная переменная. Для составления уравнения создается терм, ссылающийся
 на срез входной переменной. Для терма будет изменен способ начального
 преобразования данных и лаг. Для расчета модели будет использоваться метод
 нелинейной регрессии.


См. также:


[IMsFormulaTransformSlicesTree](IMsFormulaTransformSlicesTree.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
