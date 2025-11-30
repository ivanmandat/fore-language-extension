# IStandardCubeDimensionBinding.Binding

IStandardCubeDimensionBinding.Binding
-


# IStandardCubeDimensionBinding.Binding


## Синтаксис


Binding(Attribute: [IDimAttribute](KeDims.chm::/interface/IDimAttribute/IDimAttribute.htm)):
 [IExpression](ForeSys.chm::/Interface/IExpression/IExpression.htm);


## Параметры


Attribute. Атрибут индекса
 измерения (блока измерения), по которому осуществляется привязка к полям
 источника данных.


## Описание


Свойство Binding возвращает
 выражение, определяющее связь между полями источника данных куба и атрибутами
 измерения, по которым создан [индекс](IStandardCubeDimensionBinding.Index.htm)
 измерения (блока измерения).


## Пример


Для выполнения примера предполагается наличие стандартного куба с идентификатором
 "Std_Cube" и справочника с идентификатором "Dim_1".
 Добавьте ссылки на системные сборки: Cubes, Db, Dimensions, Metabase.


			Sub UserProc;

Var

    MB: IMetabase;

    Dim: IDimensionModel;

    StandCub: IStandardCube;

    StDataset: IStandardCubeDataset;

    Dataset: IDatasetModel;

    Field: IDatasetModelField;

    Block: IDimBlock;

    Index: IDimIndex;

    Attr: IDimAttribute;

    StDim: IStandardCubeDimension;

    StDimBind: IStandardCubeDimensionBinding;

Begin

    MB := MetabaseClass.Active;

    StandCub := MB.ItemById("Std_Cube").Edit As IStandardCube;

    Dim := MB.ItemById("Dim_1").Bind As IDimensionModel;

    StDataset := StandCub.Datasets.Item(0);

    Dataset := StDataset.Dataset;

    Field := Dataset.Fields.Item(0);

    Block := Dim.Blocks.Item(0);

    Index := Block.Indexes.PrimaryIndex;

    Attr := Index.Attributes.Item(0);

    StDim := StandCub.Dimensions.Add(Dim);

    StDimBind := StDim.Binding(StDataset);

    StDimBind.Index := Index;

    StDimBind.Binding(Attr).AsString := (Dataset As IMetabaseObject).Id + "." + Field.Id;

    (StandCub As IMetabaseObject).Save;

End Sub UserProc;


После выполнения примера в куб будет добавлено новое измерение "Dim_1".
 Привязка осуществляется по первичному индексу первого блока измерения.
 Первому атрибуту, по которому создан индекс, будет сопоставлено первое
 поле источника данных куба.


См. также:


[IStandardCubeDimensionBinding](IStandardCubeDimensionBinding.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
