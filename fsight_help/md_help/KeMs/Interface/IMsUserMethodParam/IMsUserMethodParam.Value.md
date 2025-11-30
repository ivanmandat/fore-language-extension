# IMsUserMethodParam.Value

IMsUserMethodParam.Value
-


# IMsUserMethodParam.Value


## Синтаксис


Value: Variant;


## Описание


Свойство Value определяет значение
 параметра, с которым будет производиться расчет.


## Пример


Для выполнения примера предполагается наличие контейнера моделирования
 KONT_MODEL. В контейнере создан шаблон пользовательского метода, содержащий
 два параметра. Также в контейнере имеются переменные моделирования USER_VAR
 и USER_VAR_FACTOR, которые в дальнейшем будут использоваться как моделируемая
 и фактор соответственно.


Добавьте ссылки на системные сборки: Metabase, Ms.


			Sub UserProc;

Var

    MB: IMetabase;

    MDesc: IMetabaseObjectDescriptor;

    CrInf: IMetabaseObjectCreateInfo;

    MObj: IMetabaseObject;

    Model: IMsModel;

    Trans: IMsFormulaTransform;

    Varr: IVariableStub;

    VarTrans: IMsFormulaTransformVariable;

    Tree: IMsFormulaTransformSlicesTree;

    Slice: IMsFormulaTransformSlice;

    Selector: IMsFormulaTransformSelector;

    Formula: IMsFormula;

    UserTr: IMsUserTransform;

    TransVar: IMsFormulaTransformVariable;

    Params: IMsUserMethodParams;

Begin

    MB := MetabaseClass.Active;

    MDesc := Mb.ItemById("KONT_MODEL");

    CrInf := Mb.CreateCreateInfo;

    CrInf.ClassId := MetabaseObjectClass.KE_CLASS_MSMODEL;

    CrInf.Id := "USER_MODEL";

    CrInf.Name := "User_Model";

    CrInf.Parent := MDesc;

    MObj := Mb.CreateObject(CrInf).Edit;

    Model := MObj As IMsModel;

    Trans := Model.Transform;

    //Моделируемая переменная

    Varr := MB.ItemByIdNamespace("USER_VAR", MDesc.Key).Bind As IVariableStub;

    Trans.Outputs.Add(Varr);

    VarTrans := Trans.Outputs.Item(0);

    Tree := VarTrans.SlicesTree(VarTrans);

    Slice := Tree.CreateSlice(1);

    Selector := Trans.CreateSelector;

    Selector.Slice := Slice;

    Formula := Trans.Transform(Selector);

    Formula.Kind := MsFormulaKind.User;

    Formula.Level := DimCalendarLevel.Year;

    UserTr := Formula.Method As IMsUserTransform;

    UserTr.Template := (MDesc.Bind As IMsModelSpace).UserMethodTemplates.Item(0);

    //Фактор

    Varr := MB.ItemByIdNamespace("USER_VAR_FACTOR", MDesc.Key).Bind As IVariableStub;

    Trans.Inputs.Add(Varr);

    TransVar := Model.Transform.Inputs.Item(0);

    UserTr.Explanatories.Add(TransVar.SlicesTree(Null).CreateSlice(1));

    Params := UserTr.Params;

    Params.Item(0).Value := 10;

    Params.Item(1).Value := 100;

    MObj.Save;

End Sub UserProc;


После выполнения примера в контейнере моделирования будет создана модель.
 Для расчета модели используется пользовательский метод, реализованный
 в модуле, на который ссылается первый шаблон контейнера моделирования.
 В модель будет добавлена моделируемая переменная и один фактор, а также
 установлены значения параметров.


См. также:


[IMsUserMethodParam](IMsUserMethodParam.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
