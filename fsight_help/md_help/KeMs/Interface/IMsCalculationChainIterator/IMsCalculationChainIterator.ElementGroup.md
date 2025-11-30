# IMsCalculationChainIterator.ElementGroup

IMsCalculationChainIterator.ElementGroup
-


# IMsCalculationChainIterator.ElementGroup


## Синтаксис


		ElementGroup: [IDimElementGroup](KeDims.chm::/interface/IDimElementGroup/IDimElementGroup.htm);


## Описание


Свойство ElementGroup
 определяет группу элементов, по которой будет рассчитываться цикл.


## Комментарии


Если определено значение данного свойства,
 то свойство [IMsCalculationChainIterator.Selection](IMsCalculationChainIterator.Selection.htm)
 использовать не следует.


## Пример


Для выполнения примера в репозитории предполагается наличие справочника
 с идентификатором D_SOURCE, DICT_GROUP - группа элементов данного справочника.
 Также предполагается наличие контейнера моделирования с идентификатором
 CONT_ITERATOR. В контейнере должна содержаться метамодель с идентификатором
 META_MODEL.


Добавьте ссылки на системные сборки: Dimensions, Metabase, Ms.


					Sub UserProc;

		Var

		    pMetabase: IMetabase;

		    pModelSpace: IMetabaseObjectDescriptor;

		    pMetaModel: IMsMetaModel;

		    pChain: IMsCalculationChainEntries;

		    pCycle: IMsCalculationChainIterator;

		    pDim: IMetabaseObjectDescriptor;

		    pElement: IDimElementGroup;

		    pParam: IMsModelParam;

		Begin

		    pMetabase := MetabaseClass.Active;

		    pModelSpace := pMetabase.ItemById("CONT_ITERATOR");

		    pMetaModel := pMetabase.ItemByIdNamespace("META_MODEL",pModelSpace.Key).Edit As IMsMetaModel;

		    pChain := pMetaModel.CalculationChain;

		    pChain.Clear;

		    pMetaModel.Params.Clear;

		    pParam := pMetaModel.Params.Add;

		    pParam.Id := "PARAM_1";

		    pParam.Name := "Param";

		    pDim := pMetabase.ItemById("D_SOURCE");

		    pParam.LinkedObject := pDim;

		    pElement := pMetabase.ItemByIdNamespace("DICT_GROUP",pDim.Key).Bind As IDimElementGroup;

		    pCycle := pChain.AddIterator("Цикл");

		    pCycle.ElementGroup := pElement;

		    pCycle.Parameter := pParam;

		    (pMetaModel As IMetabaseObject).Save;

		End Sub UserProc;


В результате выполнения примера в цепочку расчёта метамодели будет добавлен
 цикл. Расчёт цикла будет производиться по элементам, входящим в группу
 DICT_GROUP.


См. также:


[IMsCalculationChainIterator](IMsCalculationChainIterator.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
