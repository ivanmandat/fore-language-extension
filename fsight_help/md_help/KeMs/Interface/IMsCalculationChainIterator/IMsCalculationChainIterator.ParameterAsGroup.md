# IMsCalculationChainIterator.ParameterAsGroup

IMsCalculationChainIterator.ParameterAsGroup
-


# IMsCalculationChainIterator.ParameterAsGroup


## Синтаксис


		ParameterAsGroup: [IMsModelParam](../IMsModelParam/IMsModelParam.htm);


## Описание


Свойство ParameterAsGroup
 определяет идентификатор параметра, задающего элементы, по которым будет
 рассчитываться цикл.


## Комментарии


Если задано значение данного свойства, то
 свойства [IMsCalculationChainIterator.Selection](IMsCalculationChainIterator.Selection.htm)
 и [IMsCalculationChainIterator.ElementGroup](IMsCalculationChainIterator.ElementGroup.htm)
 игнорируются.


## Пример


Для выполнения примера в репозитории предполагается наличие справочника
 с идентификатором D_SOURCE и контейнера моделирования с идентификатором
 CONT_ITERATOR. В контейнере должна содержаться метамодель с идентификатором
 META_MODEL и модели с идентификатором MODEL.


Добавьте ссылки на системные сборки: Metabase, Ms.


					Sub UserProc;

		Var

		    mb: IMetabase;

		    pModelSpace: IMetabaseObjectDescriptor;

		    pMetaModel: IMsMetaModel;

		    DictDescr: IMetabaseObjectDescriptor;

		    pIterator: IMsCalculationChainIterator;

		    param: IMsModelParam;

		    params: IMsModelParams;

		Begin

		    mb := MetabaseClass.Active;

		    pModelSpace := mb.ItemById("CONT_ITERATOR");

		    pMetaModel := mb.ItemByIdNamespace("META_MODEL", pModelSpace.Key).Edit As IMsMetaModel;

		    params := pMetaModel.Params;

		    params.Clear;

		    param := params.Add;

		    param.DataType := DbDataType.Integer;

		    param.DefaultValue := 1;

		    DictDescr := mb.ItemById("D_SOURCE");

		    param.LinkedObject := DictDescr.Bind;

		    pMetaModel.CalculationChain.Clear;

		    pIterator := pMetaModel.CalculationChain.AddIterator("Test");

		    pIterator.Contents.Clear;

		    pIterator.Contents.AddModel(mb.ItemByIdNamespace("MODEL", pModelSpace.Key).Bind As IMsModel);

		    pIterator.ParameterAsGroup := param;

		    (pMetaModel As IMetabaseObject).Save;

		End Sub UserProc;


В результате выполнения примера в цепочку расчёта метамодели будет добавлен
 цикл с параметром. Параметр задаёт элементы, по которым будет идти расчёт.


См. также:


[IMsCalculationChainIterator](IMsCalculationChainIterator.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
