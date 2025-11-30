# IMsSlideSmoothingTransform.CenterMovingAverage

IMsSlideSmoothingTransform.CenterMovingAverage
-


# IMsSlideSmoothingTransform.CenterMovingAverage


## Синтаксис


CenterMovingAverage: Boolean;


## Описание


Свойство CenterMovingAverage
 определяет, будет ли использоваться метод центрирования для расчета средних
 значений.


## Пример


Для выполнения примера в репозитории должен присутствовать контейнер
 моделирования с идентификатором KONT_MODEL.


Добавьте ссылки на системные сборки: Metabase, Ms.


			Sub UserProc;

Var

    MB: IMetabase;

    CrInf: IMetabaseObjectCreateInfo;

    MObj: IMetabaseObject;

    Model: IMsModel;

    Trans: IMsFormulaTransform;

    Varr: IMsVariable;

    VarTrans: IMsFormulaTransformVariable;

    Tree: IMsFormulaTransformSlicesTree;

    Slice: IMsFormulaTransformSlice;

    Selector: IMsFormulaTransformSelector;

    Formula: IMsFormula;

    SlideSmooth: IMsSlideSmoothingTransform;

Begin

    MB := MetabaseClass.Active;

    CrInf := Mb.CreateCreateInfo;

    CrInf.ClassId := MetabaseObjectClass.KE_CLASS_MSMODEL;

    CrInf.Id := "NEW_SLIDESMOOTH";

    CrInf.Name := "New_SlideSmooth";

    CrInf.Parent := Mb.ItemById("KONT_MODEL");

    CrInf.Permanent := False;

    MObj := Mb.CreateObject(CrInf).Edit;

    Model := MObj As IMsModel;

    Trans := Model.Transform;

    Varr := MB.ItemByIdNamespace("VAR_1", MB.ItemById("KONT_MODEL").Key).Bind As IMsVariable;

    Model.Transform.Outputs.Add(Varr As IMsVariableStub);

    //выгружаемая переменная

    Varr := MB.ItemByIdNamespace("VAR_2", MB.ItemById("KONT_MODEL").Key).Bind As IMsVariable;

    Model.Transform.Outputs.Add(Varr As IMsVariableStub);

    VarTrans := Trans.Outputs.Item(0);

    Tree := VarTrans.SlicesTree(VarTrans);

    Slice := Tree.CreateSlice(1);

    Selector := Model.Transform.CreateSelector;

    Selector.Slice := Slice;

    Formula := Model.Transform.Transform(Selector);

    Formula.Kind := MsFormulaKind.SlideSmoothing;

    SlideSmooth := Formula.Method As IMsSlideSmoothingTransform;

    SlideSmooth.CenterMovingAverage := True;

    SlideSmooth.Width := 4;

    //устанавливаем выгружаемую переменную

    SlideSmooth.Series.Fitted := Varr As IMsFormulaTermInfo;

    MObj.Save;

End Sub UserProc;


После выполнения примера в контейнере моделирования будет создана модель,
 использующая для расчета метод скользящего среднего.


См. также:


[IMsSlideSmoothingTransform](IMsSlideSmoothingTransform.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
