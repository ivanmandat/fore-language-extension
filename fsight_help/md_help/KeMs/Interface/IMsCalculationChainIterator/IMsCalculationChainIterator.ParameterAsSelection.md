# IMsCalculationChainIterator.ParameterAsSelection

IMsCalculationChainIterator.ParameterAsSelection
-


# IMsCalculationChainIterator.ParameterAsSelection


## Синтаксис


		ParameterAsSelection: [IMsModelParam](../IMsModelParam/IMsModelParam.htm);


## Описание


Свойство ParameterAsSelection
 определяет параметр, являющийся отметкой элементов справочника.


## Комментарии


Справочник, отметка которого устанавливается в значение параметра, определяется
 свойством [IMsModelParam](../IMsModelParam/IMsModelParam.htm).LinkedObject.
 Сама отметка, преобразованная к типу Variant, определяется свойством [IMsModelParamValue](../IMsModelParamValue/IMsModelParamValue.htm).Value.


## Пример


Для выполнения примера в репозитории предполагается наличие базы данных
 временных рядов с идентификатором FC_COMM. Данная база содержит атрибут
 показателей COUNTRY, ссылающийся на справочник. В контейнере моделирования
 базы находится модель с идентификатором USER_MODEL, метамодель с идентификатором
 USER_META_MODEL и задача прогнозирования USER_PROBLEM для расчёта данной
 метамодели.


Добавьте ссылки на системные сборки: Cubes, Dimensions, Metabase, Ms,
 Rds.


					Sub UserProc;

		Var

		    pMetabase: IMetabase;

		    pRubricator: IRubricator;

		    pAttributes: IMetaAttributes;

		    pFacts: IMetaDictionary;

		    pDict: IMetabaseObjectDescriptor;

		    pTransformDescr: IMetabaseObjectDescriptor;

		    pMetaModel: IMsMetaModel;

		    pParamSet: IMsModelParam;

		    pIter: IMsCalculationChainIterator;

		    pModel: IMsModel;

		    pTransform: IMsFormulaTransform;

		    pOutVar: IMsFormulaTransformVariable;

		    pSlice: IMsFormulaTransformSlice;

		    pParamDim: IMsParametrizedDimension;

		    pProb: IMsProblem;

		    pDimInstance: IDimInstance;

		    DimSelect: IDimSelection;

		    pSet: IMsProblemCalculationSettings;

		    pCalc: IMsProblemCalculation;

		Begin

		    pMetabase := MetabaseClass.Active;

		    pRubricator := pMetabase.ItemById("FC_COMM").Bind As IRubricator;

		    // Получаем описание объекта репозитория, на который
		 ссылается атрибут показателей «COUNTRY»

		    pFacts := pRubricator.Facts;

		    pAttributes := pFacts.Attributes;

		    pDict := pAttributes.FindById("COUNTRY").ValuesObject;

		    pTransformDescr := pRubricator.ModelSpace;

		    // Добавляем в цикл метамодели параметр, являющийся
		 множественной отметкой справочника

		    pMetaModel := pMetabase.ItemByIdNamespace("USER_META_MODEL",pTransformDescr.Key).Edit As IMsMetaModel;

		    pMetaModel.Params.Clear;

		    pParamSet := pMetaModel.Params.Add;

		    pParamSet.DataType :=DbDataType.Integer;

		    pParamSet.Name := "ValueSet";

		    pParamSet.Id := "PARAM_VALUESET";

		    pParamSet.LinkedObject:= pDict;

		    pMetaModel.CalculationChain.Clear;

		    pIter := pMetaModel.CalculationChain.AddIterator("Iter");

		    pIter.ParameterAsSelection:= pParamSet;

		    // Добавляем в цикл метамодели модель

		    pModel := pMetabase.ItemByIdNamespace("USER_MODEL",pTransformDescr.Key).Edit As IMsModel;

		    pIter.Contents.AddModel(pModel);

		    (pMetaModel As IMetabaseObject).Save;

		    // Делаем первую входную переменную модели зависимой
		 от значения параметра

		    pTransform := pModel.Transform;

		    pOutVar := pTransform.Inputs.Item(0);

		    pSlice := pOutVar.Slices.Item(0);

		    pParamDim := pSlice.ParametrizedDimensions.Item(0);

		    pParamDim.Parameter := pParamSet;

		    (pModel As IMetabaseObject).Save;

		    // Задаем отметку элементов справочника для параметра
		 и рассчитываем модель

		    pProb := pMetabase.ItemByIdNamespace("USER_PROBLEM",pTransformDescr.Key).Edit As IMsProblem;

		    pSet := pProb.CreateCalculationSettings;

		    pDimInstance := pDict.Open(Null) As IDimInstance;

		    DimSelect := pDimInstance.CreateSelection;

		    DimSelect.DeselectAll;

		    DimSelect.SelectElement(0, False);

		    DimSelect.SelectElement(1, False);

		    pSet.ParamValues.FindById("PARAM_VALUESET").Value:= DimSelect.ToVariant;

		    pSet.FactIncluded := True;

		    pCalc := pProb.Calculate(pSet);

		    pCalc.Run;

		End Sub UserProc;


В результате выполнения примера для расчёта метамодели будет создан
 цикл. При расчёте итерации в цикле будут происходить по множественной
 отметке, заданной параметром.


См. также:


[IMsCalculationChainIterator](IMsCalculationChainIterator.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
