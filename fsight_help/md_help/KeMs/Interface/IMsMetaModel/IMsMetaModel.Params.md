# IMsMetaModel.Params

IMsMetaModel.Params
-


# IMsMetaModel.Params


## Синтаксис


Params: [IMsModelParams](../IMsModelParams/IMsModelParams.htm);


## Описание


Свойство Params
 возвращает коллекцию параметров метамодели.


## Пример


Для выполнения примера предполагается наличие в репозитории базы данных
 временных рядов с идентификатором FC_PARAM. Данная база содержит атрибут
 COUNTRY, ссылающийся на справочник. В контейнере моделирования базы находится
 метамодель с идентификатором METAMODEL и модель с идентификатором MODEL.


			Sub UserProc;

Var

    mb: IMetabase;

    Catalog: IRubricator;

    Transforms: IMetabaseObjectDescriptor;

    MetaModel: IMsMetaModel;

    MMParams: IMsModelParams;

    Param: IMsModelParam;

    Atts: IMetaAttributes;

    Dict: IMetabaseObjectDescriptor;

    ChainEntries: IMsCalculationChainEntries;

    Cycle: IMsCalculationChainIterator;

    dimInst: IDimInstance;

    Model: IMsModel;

Begin

    mb := MetabaseClass.Active;

    Catalog := mb.ItemById("FC_PARAM").Bind As IRubricator;

    Transforms := Catalog.ModelSpace;

    MetaModel := mb.ItemByIdNamespace("METAMODEL", Transforms.Key).Edit As IMsMetaModel;

    MMParams := MetaModel.Params;

    MMParams.Clear;

    Param := MMParams.Add;

    Param.Name := "Country param";

    Param.Id := "Country_Param";

    Param.Hidden := True;

    Param.DataType := DbDataType.Integer;

    Atts := Catalog.Facts.Attributes;

    Dict := Atts.FindById("COUNTRY").ValuesObject;

    Param.LinkedObject := Dict;

    ChainEntries := MetaModel.CalculationChain;

    ChainEntries.Clear;

    Cycle := ChainEntries.AddIterator("For");

    Cycle.Parameter := Param;

    dimInst := Dict.Open(Null) As IDimInstance;

    Cycle.Selection := dimInst.CreateSelection;

    Cycle.Selection.SelectAll;

    Model := mb.ItemByIdNamespace("MODEL", Transforms.Key).Bind As IMsModel;

    Cycle.Contents.AddModel(Model);

    (MetaModel As IMetabaseObject).Save;

End Sub UserProc;


После выполнения примера для метамодели будет задан параметр, являющийся
 ссылкой на справочник. Цепочка расчета метамодели будет состоять из цикла,
 включающего в себя модель.


См. также:


[IMsMetaModel](IMsMetaModel.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
