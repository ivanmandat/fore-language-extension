# IMsCompositeFormulaTermList.Add

IMsCompositeFormulaTermList.Add
-


# IMsCompositeFormulaTermList.Add


## Синтаксис


Add: [IMsCompositeFormulaTerm](../IMsCompositeFormulaTerm/IMsCompositeFormulaTerm.htm);


## Описание


Метод Add осуществляет создание
 составного терма.


## Пример


Для выполнения примера в репозитории предполагается наличие контейнера
 моделирования с идентификатором KONT_MODEL.


Добавьте ссылки на системные сборки: Metabase, Ms.


	Sub UserProc;

	Var

	    MB: IMetabase;

	    CrInf: IMetabaseObjectCreateInfo;

	    MObj: IMetabaseObject;

	    Model: IMsModel;

	    Trans: IMsFormulaTransform;

	    VarTrans: IMsFormulaTransformVariable;

	    Tree: IMsFormulaTransformSlicesTree;

	    Slice, Slice1: IMsFormulaTransformSlice;

	    Selector: IMsFormulaTransformSelector;

	    Formula: IMsFormula;

	    LinReg: IMsLinearRegressionTransform;

	    Varr: IMsVariable;

	    TransVar: IMsFormulaTransformVariable;

	    ComposForm: IMsCompositeFormulaTermList;

	    ComposTerm: IMsCompositeFormulaTerm;

	    TermX1, TermX2: IMsFormulaTerm;

	    TermInfo1, TermInfo2: IMsFormulaTermInfo;

	Begin

	    MB := MetabaseClass.Active;

	    //создание модели

	    CrInf := Mb.CreateCreateInfo;

	    CrInf.ClassId := MetabaseObjectClass.KE_CLASS_MSMODEL;

	    CrInf.Id := "New_LinReg";

	    CrInf.Name := "New_LinReg";

	    CrInf.Parent := Mb.ItemById("KONT_MODEL");

	    CrInf.Permanent := False;

	    MObj := Mb.CreateObject(CrInf).Edit;

	    Model := MObj As IMsModel;

	    Trans := Model.Transform;

	    //добавление моделируемойпеременной

	    Varr := MB.ItemByIdNamespace("Var_1", MB.ItemById("KONT_MODEL").Key).Bind As IMsVariable;

	    Trans.Outputs.Add(Varr As IMsVariableStub);

	    VarTrans := Trans.Outputs.Item(0);

	    Tree := VarTrans.SlicesTree(VarTrans);

	    Slice := Tree.CreateSlice(1);

	    Selector := Model.Transform.CreateSelector;

	    Selector.Slice := Slice;

	    Formula := Model.Transform.Transform(Selector);

	    Formula.Kind := MsFormulaKind.LinearRegression;

	    LinReg := Formula.Method As IMsLinearRegressionTransform;

	    //добавление фактора

	    Varr := MB.ItemByIdNamespace("Var_Factor",MB.ItemById("KONT_MODEL").Key).Bind As IMsVariable;

	    Trans.Inputs.Add(Varr As IMsVariableStub);

	    TransVar := Model.Transform.Inputs.Item(0);

	    ComposForm := LinReg.Explanatories;

	    ComposTerm := ComposForm.Add;

	    Slice := TransVar.SlicesTree(Null).CreateSlice(1);

	    TermX1 := ComposTerm.Operands.Add(Slice);

	    Slice1 := TransVar.SlicesTree(Null).CreateSlice(2);

	    TermX2 := ComposTerm.Operands.Add(Slice);

	    TermInfo1 := TermX1.TermInfo;

	    TermInfo2 := TermX2.TermInfo;

	    Slice := TermInfo1.Slice;

	    TermInfo1.Lag := "-1";

	    Slice1 := TermInfo1.Slice;

	    TermInfo2.Lag := "-1";

	    TermX1.TermInfo := TermInfo1;

	    TermX2.TermInfo := TermInfo2;

	    ComposTerm.Expression.AsString := TermX1.TermToInnerText + "/" + TermX2.TermToInnerText;

	    MObj.Save;

	End Sub UserProc;


В результате выполнения примера в контейнере моделирования будет создана
 новая модель. В созданную модель добавляется моделируемая переменная и
 один фактор. Для уравнения модели создаётся составной терм, содержащий
 в себе два терма, ссылающихся на срезы первой входной переменной. Для
 расчёта модели будет использоваться метод линейной регрессии.


См. также:


[IMsCompositeFormulaTermList](IMsCompositeFormulaTermList.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
