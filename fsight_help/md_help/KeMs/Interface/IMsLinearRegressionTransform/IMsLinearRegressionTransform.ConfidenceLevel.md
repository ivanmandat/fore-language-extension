# IMsLinearRegressionTransform.ConfidenceLevel

IMsLinearRegressionTransform.ConfidenceLevel
-


# IMsLinearRegressionTransform.ConfidenceLevel


## Синтаксис


ConfidenceLevel: Double;


## Описание


Свойство ConfidenceLevel определяет
 значимость доверительных границ. По умолчанию свойству установлено значение
 0,95.


## Пример


Для выполнения примера предполагается наличие в репозитории контейнера
 моделирования с идентификатором KONT_MODEL. В контейнере имеется переменная
 Var_1, которая в дальнейшем будет использоваться как моделируемая, а также
 переменная Var_Factor, используемая как фактор.


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

    Linear: IMsLinearRegressionTransform;

    Varr: IMsVariableStub;

    TransVar: IMsFormulaTransformVariable;

    TermInfo: IMsFormulaTermInfo;

    Ar: Array[0..1] Of Integer;

Begin

    MB := MetabaseClass.Active;

    CrInf := Mb.CreateCreateInfo;

    CrInf.ClassId := MetabaseObjectClass.KE_CLASS_MSMODEL;

    CrInf.Id := "New_LinReg";

    CrInf.Name := "New_LinReg";

    CrInf.Parent := Mb.ItemById("KONT_MODEL");

    CrInf.Permanent := False;

    MObj := Mb.CreateObject(CrInf).Edit;

    Model := MObj As IMsModel;

    Trans := Model.Transform;

    Varr := MB.ItemByIdNamespace("Var_1", MB.ItemById("KONT_MODEL").Key).Bind As IMsVariableStub;

    Trans.Outputs.Add(Varr);

    VarTrans := Trans.Outputs.Item(0);

    Tree := VarTrans.SlicesTree(VarTrans);

    Slice := Tree.CreateSlice(1);

    Selector := Model.Transform.CreateSelector;

    Selector.Slice := Slice;

    Formula := Model.Transform.Transform(Selector);

    Formula.Kind := MsFormulaKind.LinearRegression;

    Formula.Level := DimCalendarLevel.Year;

    Linear := Formula.Method As IMsLinearRegressionTransform;

    Ar[0] := 2;

    Ar[1] := 4;

    Linear.AutoRegressionOrder := Ar;

    Linear.HasConstant := True;

    Varr := MB.ItemByIdNamespace("Var_Factor", MB.ItemById("KONT_MODEL").Key).Bind As IMsVariableStub;

    Trans.Inputs.Add(Varr);

    TransVar := Trans.Inputs.Item(0);

    TermInfo := Trans.CreateTermInfo;

    TermInfo.Slice := TransVar.SlicesTree(VarTrans).CreateSlice(1);

    Linear.Explanatories.Add.Expression.AsString := TermInfo.TermInnerText;

    Linear.ConfidenceLevel := 0.99;

    MObj.Save;

End Sub UserProc;


После выполнения примера в контейнере моделирования будет создана модель.
 Для расчета модели используется метод линейной регрессии. Для данного
 метода будут установлены настройки, в частности будет использоваться авторегрессия.
 Порядок авторегрессии - 2, для элементов авторегрессии будут заданы лаги
 2 и 4. Для уровня значимости доверительных границ будет установлено значение
 0,99.


См. также:


[IMsLinearRegressionTransform](IMsLinearRegressionTransform.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
