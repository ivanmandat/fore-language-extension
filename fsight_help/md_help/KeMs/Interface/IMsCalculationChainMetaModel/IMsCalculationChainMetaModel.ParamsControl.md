# IMsCalculationChainMetaModel.ParamsControl

IMsCalculationChainMetaModel.ParamsControl
-


# IMsCalculationChainMetaModel.ParamsControl


## Синтаксис


		ParamsControl: [IMsModelParamsControl](../IMsModelParamsControl/IMsModelParamsControl.htm);


## Описание


Свойство ParamsControl
 возвращает коллекцию контролируемых параметров метамодели, содержащейся
 в [цепочке
 расчёта](UiModelling.chm::/2_Container_of_Modeling/2_3_Work_object/2_3_3_MetaModel/uimodelling_metamodel_2.htm).


## Пример


Для выполнения примера в репозитории предполагается наличие базы данных
 временных рядов с идентификатором FC_PARAM. В контейнере моделирования
 базы располагаются две метамодели с идентификаторами METAMODEL и META_CONTROLLED.


Добавьте ссылки на системные сборки: Metabase, Ms.


					Sub UserProc;

		Var

		    mb: IMetabase;

		    Catalog: IRubricator;

		    Transforms: IMetabaseObjectDescriptor;

		    MetaModel_1, MetaModel_2:IMsMetaModel;

		    MMParams: IMsModelParams;

		    pMetaModelParam1, pMetaModelParam2:IMsModelParam;

		    MainChainEntries: IMsCalculationChainEntries;

		    pChain: IMsCalculationChainMetaModel;

		    ParamsControl: IMsModelParamsControl;

		    pControl: IMsModelParamControl;

		Begin

		    mb := MetabaseClass.Active;

		    Catalog := mb.ItemById("FC_PARAM").Bind As IRubricator;

		    Transforms := Catalog.ModelSpace;

		    MetaModel_1 := mb.ItemByIdNamespace("METAMODEL", Transforms.Key).Edit As IMsMetaModel;

		    MMParams := MetaModel_1.Params;

		    MMParams.Clear;

		    pMetaModelParam1 := MMParams.Add;

		    pMetaModelParam1.Name:= "Main param";

		    pMetaModelParam1.Id :="Main_Param";

		    pMetaModelParam1.Hidden:= True;

		    pMetaModelParam1.DataType:= DbDataType.Float;

		    pMetaModelParam1.DefaultValue:= 0.36;

		    MainChainEntries := MetaModel_1.CalculationChain;

		    MainChainEntries.Clear;

		    MetaModel_2 := mb.ItemByIdNamespace("META_CONTROLLED", Transforms.Key).Edit As IMsMetaModel;

		    MMParams := MetaModel_2.Params;

		    MMParams.Clear;

		    pMetaModelParam2 := MMParams.Add;

		    pMetaModelParam2.Name:= "Controlled param";

		    pMetaModelParam2.Id :="Controlled_param";

		    pMetaModelParam2.Hidden:= True;

		    pMetaModelParam2.DataType:= DbDataType.Integer;

		    pMetaModelParam2.DefaultValue:= 1;

		    (MetaModel_2 As IMetabaseObject).Save;

		    pChain := MainChainEntries.AddMetaModel(MetaModel_2);

		    ParamsControl := pChain.ParamsControl;

		    pControl := ParamsControl.Item(0);

		    pControl.ControllingParam:= pMetaModelParam1;

		    pControl.Value := 4;

		    (MetaModel_1 As IMetabaseObject).Save;

		End Sub UserProc;


В результате выполнения примера для метамоделей будут определены параметры.
 Метамодель META_CONTROLLED будет включена в цепочку расчёта метамодели
 METAMODEL. Контролируемым параметром цепочки расчёта будет назначен параметр
 метамодели METAMODEL, для него будет определено значение.


См. также:


[IMsCalculationChainMetaModel](IMsCalculationChainMetaModel.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
