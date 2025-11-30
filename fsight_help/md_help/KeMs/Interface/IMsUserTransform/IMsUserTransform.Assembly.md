# IMsUserTransform.Assembly

IMsUserTransform.Assembly
-


# IMsUserTransform.Assembly


## Синтаксис


Assembly: [IMetabaseObjectDescriptor](KeSom.chm::/Interface/IMetabaseObjectDescriptor/IMetabaseObjectDescriptor.htm);


## Описание


Свойство Assembly определяет
 модуль/форму среды разработки, содержащий пользовательский класс, реализующий
 метод расчета модели.


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

    UserTr: IMsUserTransform;

    TransVar: IMsFormulaTransformVariable;

Begin

    MB := MetabaseClass.Active;

    CrInf := Mb.CreateCreateInfo;

    CrInf.ClassId := MetabaseObjectClass.KE_CLASS_MSMODEL;

    CrInf.Id := "USER_MODEL";

    CrInf.Name := "User_Model";

    CrInf.Parent := Mb.ItemById("KONT_MODEL");

    MObj := Mb.CreateObject(CrInf).Edit;

    Model := MObj As IMsModel;

    Trans := Model.Transform;

    Varr := MB.ItemByIdNamespace("USER_VAR", MB.ItemById("KONT_MODEL").Key).Bind As IMsVariableStub;

    Trans.Outputs.Add(Varr);

    VarTrans := Trans.Outputs.Item(0);

    Tree := VarTrans.SlicesTree(VarTrans);

    Slice := Tree.CreateSlice(1);

    Selector := Model.Transform.CreateSelector;

    Selector.Slice := Slice;

    Formula := Trans.Transform(Selector);

    Formula.Kind := MsFormulaKind.User;

    Formula.Level := DimCalendarLevel.Year;

    UserTr := Formula.Method As IMsUserTransform;

    UserTr.Assembly := Mb.ItemById("USERMETHOD_CLASS");

    UserTr.ClassName := "My_Method";

    Varr := MB.ItemByIdNamespace("USER_VAR_FACTOR", MB.ItemById("KONT_MODEL").Key).Bind As IMsVariableStub;

    Trans.Inputs.Add(Varr);

    TransVar := Trans.Inputs.Item(0);

    UserTr.Explanatories.Add(TransVar.SlicesTree(Null).CreateSlice(1));

    MObj.Save;

End Sub UserProc;


После выполнения примера в контейнере моделирования будет создана модель.
 Для расчета модели будет использоваться пользовательский метод, реализованный
 в модуле с идентификатором USER_MODEL. Пользовательский класс имеет наименование
 My_Method. В модель будет добавлена моделируемая переменная и один фактор.


См. также:


[IMsUserTransform](IMsUserTransform.htm)|[IMsUserTransform.ClassName](IMsUserTransform.ClassName.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
