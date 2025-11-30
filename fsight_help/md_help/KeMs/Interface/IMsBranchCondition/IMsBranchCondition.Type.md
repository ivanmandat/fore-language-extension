# IMsBranchCondition.Type

IMsBranchCondition.Type
-


# IMsBranchCondition.Type


## Синтаксис


Type: [MsBranchConditionType](../../Enums/MsBranchConditionType.htm);


## Описание


Свойство Type
 возвращает тип условия.


## Пример


Для выполнения примера в репозитории предполагается наличие контейнера
 моделирования с идентификатором CONT_MODEL. В данном контейнере должна
 содержаться метамодель с идентификатором METAMODEL и модели с идентификаторами
 DEFAULT, MODEL_1 и MODEL_2. Также в репозитории должен находиться справочник
 с идентификатором D_SOURCE, содержащий группу элементов с идентификатором
 DICT_GROUP.


Добавьте ссылки на системные сборки: Cubes, Dal, Dimensions, Metabase,
 Ms, Orm, Rds.


	Sub UserProc;

	Var

	    pMetaModel: IMsMetaModel;

	    pBranch: IMsCalculationChainBranch;

	    pBranchConditions: IMsBranchConditions;

	    pCase: IMsBranchCase;

	    pCaseList: IMsBranchCaseList;

	    Chain, pDefaultContents:IMsCalculationChainEntries;

	    pCondSelect: IMsBranchConditionInSelection;

	    pCondGroup: IMsBranchConditionInGroup;

	    pCondScalar: IMsBranchConditionScalar;

	    Case_1, Case_2, Case_default:IMsModel;

	    mb: IMetabase;

	    pModelSpace: IMetabaseObjectDescriptor;

	    param:IMsModelParam;

	    pDimInstance: IDimInstance;

	    pSelection: IDimSelection;

	    params:IMsModelParams;

	Begin

	    mb := MetabaseClass.Active;

	    pModelSpace := mb.ItemById("CONT_MODEL");

	    pMetaModel := mb.ItemByIdNamespace("METAMODEL",pModelSpace.Key).Edit As IMsMetaModel;

	    Chain := pMetaModel.CalculationChain;

	    Chain.Clear;

	    // Задаем параметр метамодели

	    params:=pMetaModel.Params;

	    params.Clear;

	    param:=params.Add;

	    param.DataType := DbDataType.Integer;

	    param.DefaultValue :=1;

	    param.Hidden := True;

	    param.Id := "T_ID";

	    param.Name := "ID";

	    param.LinkedObject :=mb.ItemById("D_SOURCE");

	    // Создаем вершину условия

	    pBranch := Chain.AddBranch("Branch");

	    pBranch.Parameter :=Param;

	    pDefaultContents := pBranch.DefaultContents;

	    Case_default := mb.ItemByIdNamespace("DEFAULT",pModelSpace.Key).Bind As IMsModel;

	    pDefaultContents.AddModel(Case_default);

	    // Создаем первую веткуусловия

	    pCaseList := pBranch.CaseList;

	    pCase := pCaseList.Add;

	    Case_1 := mb.ItemByIdNamespace("MODEL_1",pModelSpace.Key).Bind As IMsModel;

	    pCase.Contents.AddModel(Case_1);

	    pBranchConditions :=pCase.Conditions;

	    pCondScalar := pBranchConditions.Add(MsBranchConditionType.Scalar) As IMsBranchConditionScalar;

	    pCondScalar.ComparisonOperator:= MsBranchConditionComparisonOperator.Equal;

	    pCondScalar.Value :=6;

	    pCondGroup := pBranchConditions.Add(MsBranchConditionType.InGroup) As IMsBranchConditionInGroup;

	    pDimInstance := mb.ItemById("D_SOURCE").Open(Null) As IDimInstance;

	    pCondGroup.ElementGroup:= mb.ItemByIdNamespace("DICT_GROUP", pDimInstance.Key).Bind As IDimElementGroup;

	    pCondGroup.Negation := False;

	    pCondGroup.ConditionJoin:= OrmLogicalOperator.Or_;

	    // Создаем вторую веткуусловия

	    pCase := pCaseList.Add;

	    Case_2 := mb.ItemByIdNamespace("MODEL_2",pModelSpace.Key).Bind As IMsModel;

	    pCase.Contents.AddModel(Case_2);

	    pBranchConditions :=pCase.Conditions;

	    pCondSelect := pBranchConditions.Add(MsBranchConditionType.InSelection) As IMsBranchConditionInSelection;

	    pSelection := pDimInstance.CreateSelection;

	    pSelection.DeselectAll;

	    pSelection.SelectElement(2, False);

	    pCondSelect.Negation:= False;

	    pCondSelect.Selection:= pSelection;

	    (pMetaModel As IMetabaseObject).Save;

	End Sub UserProc;


В результате выполнения примера для метамодели будет задан параметр,
 ссылающийся на справочник, и условие, основанное на значении данного параметра.
 Условие состоит в следующем: если значение параметра равно шести или входит
 в группу элементов справочника, тогда будет рассчитываться модель MODEL_1;
 если значение параметра входит в отметку справочника, то будет рассчитываться
 модель MODEL_2; если ни одно из данных условий не выполняется, то будет
 рассчитываться модель DEFAULT.


См. также:


[IMsBranchCondition](IMsBranchCondition.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
