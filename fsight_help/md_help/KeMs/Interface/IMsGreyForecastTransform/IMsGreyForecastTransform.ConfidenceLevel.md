# IMsGreyForecastTransform.ConfidenceLevel

IMsGreyForecastTransform.ConfidenceLevel
-


# IMsGreyForecastTransform.ConfidenceLevel


## Синтаксис


ConfidenceLevel: Double;


## Описание


Свойство ConfidenceLevel определяет
 значимость доверительных границ. По умолчанию свойству установлено значение
 0,95.


## Пример


Для выполнения примера предполагается наличие в репозитории контейнера
 моделирования с идентификатором KONT_MODEL. В контейнере имеется переменная
 Var_1, которая в дальнейшем будет использоваться как моделируемая.


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

    Grey: IMsGreyForecastTransform;

Begin

    MB := MetabaseClass.Active;

    CrInf := Mb.CreateCreateInfo;

    CrInf.ClassId := MetabaseObjectClass.KE_CLASS_MSMODEL;

    CrInf.Id := "New_Grey";

    CrInf.Name := "New_Grey";

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

    Formula.Kind := MsFormulaKind.GreyForecast;

    Grey := Formula.Method As IMsGreyForecastTransform;

    Grey.ConfidenceLevel := 0.99;

    MObj.Save;

End Sub UserProc;


После выполнения примера в контейнере моделирования будет создана модель.
 Для расчета модели используется Грей-метод. Для уровня значимости доверительных
 границ будет установлено значение 0,99.


См. также:


[IMsGreyForecastTransform](IMsGreyForecastTransform.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
