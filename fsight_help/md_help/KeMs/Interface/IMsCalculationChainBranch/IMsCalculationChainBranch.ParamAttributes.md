# IMsCalculationChainBranch.ParamAttributes

IMsCalculationChainBranch.ParamAttributes
-


# IMsCalculationChainBranch.ParamAttributes


## Синтаксис


ParamAttributes: [IMsModelParamAttributes](../IMsModelParamAttributes/IMsModelParamAttributes.htm);


## Описание


Свойство ParamAttributes определяет
 параметр условия.


## Пример


Для выполнения примера в репозитории предполагается наличие контейнера
 моделирования с идентификатором CONT_MODEL. В данном контейнере должна
 содержаться метамодель с идентификатором METAMODEL и модели с идентификаторами
 DEFAULT, MODEL_1 и MODEL_2. Также в репозитории должен находиться справочник
 с идентификатором D_SOURCE, содержащий группу элементов с идентификатором
 DICT_GROUP.


Добавьте ссылки на системные сборки: Dal, Dimensions, Metabase, Ms,
 Orm.


			Sub UserProc;

Var

    pMetaModel: IMsMetaModel;

    pBranch: IMsCalculationChainBranch;

    pBranchConditions: IMsBranchConditions;

    pBranchParam: IMsModelParamAttributes;

    pCase: IMsBranchCase;

    pCaseList: IMsBranchCaseList;

    Chain, pDefaultContents: IMsCalculationChainEntries;

    pCondSelect: IMsBranchConditionInSelection;

    pCondGroup: IMsBranchConditionInGroup;

    pCondScalar: IMsBranchConditionScalar;

    Case_1, Case_2, Case_default: IMsModel;

    Mb: IMetabase;

    pModelSpace: IMetabaseObjectDescriptor;

    Param: IMsModelParam;

    pDimInstance: IDimInstance;

    pSelection: IDimSelection;

    ParamCollection: IMsModelParams;

Begin

    Mb := MetabaseClass.Active;

    pModelSpace := Mb.ItemById("CONT_MODEL");

    pMetaModel := Mb.ItemByIdNamespace("METAMODEL", pModelSpace.Key).Edit As IMsMetaModel;

    Chain := pMetaModel.CalculationChain;

    Chain.Clear;

    // Зададим параметр метамодели

    ParamCollection:= pMetaModel.Params;

    ParamCollection.Clear;

    Param := ParamCollection.Add;

    Param.DataType := DbDataType.Integer;

    Param.DefaultValue := 1;

    Param.Hidden := True;

    Param.Id := "T_ID";

    Param.Name := "ID";

    Param.LinkedObject := Mb.ItemById("D_SOURCE");

    // Создадим вершину условия

    pBranch := Chain.AddBranch("Branch");

    pBranchParam := pBranch.ParamAttributes;

    pBranchParam.Parameter := Param;

    pDefaultContents := pBranch.DefaultContents;

    Case_default := Mb.ItemByIdNamespace("DEFAULT", pModelSpace.Key).Bind As IMsModel;

    pDefaultContents.AddModel(Case_default);

    // Создадим первую ветку условия

    pCaseList := pBranch.CaseList;

    pCase := pCaseList.Add;

    Case_1 := Mb.ItemByIdNamespace("MODEL_1", pModelSpace.Key).Bind As IMsModel;

    pCase.Contents.AddModel(Case_1);

    pBranchConditions := pCase.Conditions;

    pCondScalar := pBranchConditions.Add(MsBranchConditionType.Scalar) As IMsBranchConditionScalar;

    pCondScalar.ComparisonOperator := MsBranchConditionComparisonOperator.Equal;

    pCondScalar.Value := 6;

    pCondGroup := pBranchConditions.Add(MsBranchConditionType.InGroup) As IMsBranchConditionInGroup;

    pDimInstance := Mb.ItemById("D_SOURCE").Open(Null) As IDimInstance;

    pCondGroup.ElementGroup := Mb.ItemByIdNamespace("DICT_GROUP", pDimInstance.Key).Bind As IDimElementGroup;

    pCondGroup.Negation := False;

    pCondGroup.ConditionJoin := OrmLogicalOperator.Or_;

    // Создадим вторую ветку условия

    pCase := pCaseList.Add;

    Case_2 := Mb.ItemByIdNamespace("MODEL_2", pModelSpace.Key).Bind As IMsModel;

    pCase.Contents.AddModel(Case_2);

    pBranchConditions := pCase.Conditions;

    pCondSelect := pBranchConditions.Add(MsBranchConditionType.InSelection) As IMsBranchConditionInSelection;

    pSelection := pDimInstance.CreateSelection;

    pSelection.DeselectAll;

    pSelection.SelectElement(2, False);

    pCondSelect.Negation := False;

    pCondSelect.Selection := pSelection;

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


[IMsCalculationChainBranch](IMsCalculationChainBranch.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
