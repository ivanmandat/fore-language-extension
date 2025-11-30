# IMsFormulaTransformSlice.AggregationType

IMsFormulaTransformSlice.AggregationType
-


# IMsFormulaTransformSlice.AggregationType


## Синтаксис


AggregationType: [BasicAggregatorOperation](KeMatrix.chm::/Enums/BasicAggregatorOperation.htm);


## Описание


Свойство AggregationType определяет
 способ агрегации, применяемый к элементам среза при расчете модели.


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

	    Varr: IMsVariable;

	    TransVar: IMsFormulaTransformVariable;

	    TermX1: IMsFormulaTerm;

	    SelectionFact: IDimSelectionSetFactory;

	    Selection: IDimSelectionSet;

	    s: String;

	    i: Integer;

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

	    Varr := MB.ItemByIdNamespace("Var_1", MB.ItemById("KONT_MODEL").Key).Bind As IMsVariable;

	    Trans.Outputs.Add(Varr As IMsVariableStub);

	    VarTrans := Trans.Outputs.Item(0);

	    Tree := VarTrans.SlicesTree(VarTrans);

	    Slice := Tree.CreateSlice(1);

	    Selector := Model.Transform.CreateSelector;

	    Selector.Slice := Slice;

	    Formula := Model.Transform.Transform(Selector);

	    Formula.Kind := MsFormulaKind.NonLinearRegression;

	    NonLinear := Formula.Method As IMsNonLinearRegressionTransform;

	    //добавление фактора

	    Varr := MB.ItemByIdNamespace("Var_Factor", MB.ItemById("KONT_MODEL").Key).Bind As IMsVariable;

	    Trans.Inputs.Add(Varr As IMsVariableStub);

	    SelectionFact := New DimSelectionSetFactory.Create;

	    Selection := SelectionFact.CreateDimSelectionSet;

	    //изменение отметки по дополнительным измерениям

	    For i := 0 To Varr.Dimensions.Count - 1 Do

	        Selection.Add((Varr.Dimensions.Item(i).Model As IMetabaseObject).Open(Null) As IDimInstance);

	        Selection.Item(i).DeselectAll;

	        Selection.Item(i).SelectElement(3, False);

	    End For;

	    TransVar := Model.Transform.Inputs.Item(0);

	    Slice := TransVar.Slices.Add(Selection);

	    Slice.AggregationType := BasicAggregatorOperation.Max;

	    TermX1 := NonLinear.Operands.Add(Slice);

	    //создание уравнения

	    s := "A0+" + TermX1.TermToInnerText + "/10";

	    NonLinear.Expression.AsString := s;

	    MObj.Save;

	End Sub UserProc;


После выполнения примера в контейнере моделирования будет создана модель.
 В модель будет добавлена выходная переменная, во всех дополнительных измерениях
 которой, будут выбраны элементы с индексом 3. Для полученного среза будет
 настроена спецификация расчета. Для расчета будет использоваться метод
 нелинейной регрессии. В список входных переменных будет добавлена переменная,
 для нее будет изменена фиксация по дополнительным измерениям и способ
 агрегации данных. Далее будут получены термы и составлено уравнение.


См. также:


[IMsFormulaTransformSlice](IMsFormulaTransformSlice.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
