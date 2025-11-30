# IMsFormulaTransform.Kind

IMsFormulaTransform.Kind
-


# IMsFormulaTransform.Kind


## Синтаксис


		Kind: [MsModelKind](../../Enums/MsModelKind.htm);


## Описание


Свойство Kind определяет тип
 модели.


## Пример


Для выполнения примера в репозитории предполагается наличие контейнера
 моделирования с идентификатором MODEL_SPACE. В данном контейнере имеется
 переменная моделирования с идентификатором Var_1. В структуру переменной
 добавлено не менее одного дополнительного измерения.


Добавьте ссылки на системные сборки: Dimensions, Metabase, Ms.


					Sub UserProc;

		Var

		    MB: IMetabase;

		    ModelSpace: IMetabaseObjectDescriptor;

		    CrInf: IMetabaseObjectCreateInfo;

		    MObj: IMetabaseObject;

		    Model: IMsModel;

		    Transf: IMsFormulaTransform;

		    Var_1: IVariableStub;

		    TransfVar: IMsFormulaTransformVariable;

		    Dim: IDimensionModel;

		Begin

		    MB := MetabaseClass.Active;

		    ModelSpace := Mb.ItemById("MODEL_SPACE");

		        CrInf := Mb.CreateCreateInfo;

		        CrInf.ClassId := MetabaseObjectClass.KE_CLASS_MSMODEL;

		        CrInf.Id := "New_Balance";

		        CrInf.Name := "New_Balance";

		        CrInf.Parent := ModelSpace;

		    MObj := Mb.CreateObject(CrInf).Edit;

		    Model := MObj As IMsModel;

		    Transf := Model.Transform;

		    Transf.Kind := MsModelKind.InterindustryBalance;

		    Var_1 := MB.ItemByIdNamespace("Var_1", ModelSpace.Key).Bind As IVariableStub;

		    TransfVar := Transf.Outputs.Add(Var_1);

		    Dim := Var_1.Dimension(0);

		    Transf.DimensionTransparent(TransfVar, Dim) := True;

		    MObj.Save;

		End Sub UserProc;


В результате выполнения примера в контейнере моделирования будет создана
 новая модель. Тип модели - межотраслевой баланс. В качестве переменной
 конечного использования будет установлена указанная переменная.


См. также:


[IMsFormulaTransform](IMsFormulaTransform.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
