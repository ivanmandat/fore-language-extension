# IMsModelParamControl.ControllingParam

IMsModelParamControl.ControllingParam
-


# IMsModelParamControl.ControllingParam


## Синтаксис


ControllingParam: [IMsModelParam](../IMsModelParam/IMsModelParam.htm);


## Описание


Свойство ControllingParam
 определяет параметр, который будет контролироваться.


## Пример


Для выполнения примера в репозитории предполагается наличие базы данных
 временных рядов с идентификатором «TSDB». В контейнере моделирования базы
 располагаются две метамодели с идентификаторами «META_MODEL» и «META_MODEL_CONTROLLED».


Добавьте ссылки на системные сборки: Cubes, Dal, Metabase, Ms.


			Sub UserParam;

Var

    mb: IMetabase;

    Catalog: IRubricator;

    Transforms: IMetabaseObjectDescriptor;

    MetaModel_1, MetaModel_2: IMsMetaModel;

    MMParams: IMsModelParams;

    pMetaModelParam1, pMetaModelParam2: IMsModelParam;

    MainChainEntries: IMsCalculationChainEntries;

    pChain: IMsCalculationChainMetaModel;

    ParamsControl: IMsModelParamsControl;

    pControl: IMsModelParamControl;

    ControlledParam: IMsModelParam;

Begin

    mb := MetabaseClass.Active;

    Catalog := mb.ItemById("TSDB").Bind As IRubricator;

    Transforms := Catalog.ModelSpace;

    // Получаем 1-ю метамодель и создаем для нее параметр

    MetaModel_1 := mb.ItemByIdNamespace("META_MODEL", Transforms.Key).Edit As IMsMetaModel;

    MMParams := MetaModel_1.Params;

    MMParams.Clear;

    pMetaModelParam1 := MMParams.Add;

    pMetaModelParam1.Name := "Main param";

    pMetaModelParam1.Id := "Main_Param";

    pMetaModelParam1.Hidden := True;

    pMetaModelParam1.DataType := DbDataType.Float;

    pMetaModelParam1.DefaultValue := 0.36;

    MainChainEntries := MetaModel_1.CalculationChain;

    MainChainEntries.Clear;

    // Получаем 2-ю метамодель и создаем для нее параметр

    MetaModel_2 := mb.ItemByIdNamespace("META_MODEL_CONTROLLED", Transforms.Key).Edit As IMsMetaModel;

    MMParams := MetaModel_2.Params;

    MMParams.Clear;

    pMetaModelParam2 := MMParams.Add;

    pMetaModelParam2.Name := "Controlled param";

    pMetaModelParam2.Id := "Controlled_param";

    pMetaModelParam2.Hidden := True;

    pMetaModelParam2.DataType := DbDataType.Integer;

    pMetaModelParam2.DefaultValue := 1;

    (MetaModel_2 As IMetabaseObject).Save;

    // Включаем 2-ю метамодель в цепочку расчета 1-й и задаем контролирующий параметр

    pChain := MainChainEntries.AddMetaModel(MetaModel_2);

    ParamsControl := pChain.ParamsControl;

    pControl := ParamsControl.Item(0);

    pControl.ControllingParam := pMetaModelParam1;

    pControl.Value := 4;

    (MetaModel_1 As IMetabaseObject).Save;

    ControlledParam := pControl.ControlledParam;

    If (ControlledParam.DataType = DbDataType.Integer)

        And (ControlledParam.DefaultValue = 1) Then

        Debug.WriteLine("Параметр задан успешно");

    End If;

End Sub UserParam;


После выполнения примера для метамоделей будут определены параметры.
 Метамодель «META_MODEL_CONTROLLED» будет включена в цепочку расчета метамодели
 «META_MODEL». Контролируемым параметром цепочки расчета будет назначен
 параметр метамодели «META_MODEL_CONTROLLED», для него будет определено
 значение. Результат создания контролируемого параметра будет выведен в
 окно консоли.


См. также:


[IMsModelParamControl](IMsModelParamControl.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
