# IMsHodrickPrescottFilterTransform.SmoothingParameter

IMsHodrickPrescottFilterTransform.SmoothingParameter
-


# IMsHodrickPrescottFilterTransform.SmoothingParameter


## Синтаксис


SmoothingParameter: Double;


## Описание


Свойство SmoothingParameter
 определяет значение параметра сглаживания.


## Пример


			Sub UserProc;

Var

    MB: IMetabase;

    CrInf: IMetabaseObjectCreateInfo;

    MObj: IMetabaseObject;

    Model: IMsModel;

    Trans: IMsFormulaTransform;

    Varr: IMsVariableStub;

    VarTrans: IMsFormulaTransformVariable;

    Tree: IMsFormulaTransformSlicesTree;

    Slice: IMsFormulaTransformSlice;

    Selector: IMsFormulaTransformSelector;

    Formula: IMsFormula;

    HPFilter: IMsHodrickPrescottFilterTransform;

    MethodSeries: IMsMethodSeries;

Begin

    MB := MetabaseClass.Active;

    CrInf := Mb.CreateCreateInfo;

    CrInf.ClassId := MetabaseObjectClass.KE_CLASS_MSMODEL;

    CrInf.Id := "New_HPFilter";

    CrInf.Name := "New_HPFilter";

    CrInf.Parent := Mb.ItemById("KONT_MODEL");

    CrInf.Permanent := False;

    MObj := Mb.CreateObject(CrInf).Edit;

    Model := MObj As IMsModel;

    Trans := Model.Transform;

    Varr := MB.ItemByIdNamespace("Var_1", MB.ItemById("KONT_MODEL").Key).Bind As IMsVariableStub;

    Trans.Outputs.Add(Varr);

    //выгружаемая переменная

    Varr := MB.ItemByIdNamespace("Var_2", MB.ItemById("KONT_MODEL").Key).Bind As IMsVariableStub;

    Trans.Series.Add(Varr);

    VarTrans := Trans.Outputs.Item(0);

    Tree := VarTrans.SlicesTree(VarTrans);

    Slice := Tree.CreateSlice(1);

    Selector := Model.Transform.CreateSelector;

    Selector.Slice := Slice;

    Formula := Model.Transform.Transform(Selector);

    Formula.Kind := MsFormulaKind.HodrickPrescottFilter;

    HPFilter := Formula.Method As IMsHodrickPrescottFilterTransform;

    HPFilter.SmoothingParameter := 6;

    MethodSeries := HPFilter.Series;

    //устанавливаем выгружаемую переменную

    MethodSeries.Fitted := Varr As IMsFormulaTermInfo;

    MObj.Save;

End Sub UserProc;


После выполнения примера в контейнере моделирования будет создана модель,
 использующая для расчета фильтр Ходрика-Прескотта. В модель будет добавлена
 моделируемая и выгружаемая переменные и установлен параметр сглаживания.


См. также:


[IMsHodrickPrescottFilterTransform](IMsHodrickPrescottFilterTransform.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
