# IStandardCubeFactBinding.ReverseFactKey

IStandardCubeFactBinding.ReverseFactKey
-


# IStandardCubeFactBinding.ReverseFactKey


## Синтаксис


ReverseFactKey: Variant;


## Описание


Свойство ReverseFactKey определяет
 ключ факта куба, значение которого будут вычисляться по формуле [ReverseFormula](IStandardCubeFactBinding.ReverseFormula.htm).


## Комментарии


Факт с ключом ReverseFactKey
 должен иметь привязку к какому-либо источнику данных куба.


## Пример


Для выполнения примера предполагается наличие стандартного куба с идентификатором
 STD_CUBE. В измерении фактов куба имеется не менее трех элементов.


			Sub UserProc;

Var

    MB: IMetabase;

    StdCube: IStandardCube;

    Dest: IStandardCubeDestination;

    StdDataset: IStandardCubeDataset;

    Dataset: IDatasetModel;

    Field: IDatasetModelField;

    FactBind: IStandardCubeFactBinding;

    v: Variant;

Begin

    MB := MetabaseClass.Active;

    StdCube := MB.ItemById("STD_CUBE").Edit As IStandardCube;

    Dest := StdCube.Destinations.Item(0);

    StdDataset := Dest.Datasets.Item(0);

    Dataset := StdDataset.Dataset;

    Field := Dataset.Fields.Item(0);

    FactBind := Dest.FactBindings(StdDataset).Binding(1);

    FactBind.Formula.AsString := (Dataset As IMetabaseObject).Id + "." + Field.Id;

    Field := Dataset.Fields.Item(1);

    FactBind := Dest.FactBindings(StdDataset).Binding(2);

    FactBind.Formula.AsString := (Dataset As IMetabaseObject).Id + "." + Field.Id;

    v := FactBind.FactKey;

    FactBind := Dest.CalcBindings.Binding(3);

    FactBind.Formula.AsString := "@[1]*3";

    FactBind.ReverseFactKey := v;

    FactBind.ReverseFormula.AsString := "((VALUE + 1) * 4 - 2) / 2 ";

    (StdCube As IMetabaseObject).Save;

End Sub UserProc;


После выполнения примера будет настроена привязка для первых трех элементов
 измерения фактов куба. Первый и второй факт куба будут привязаны к двум
 полям источника данных, третий факт будет определен как вычисляемый, его
 значение вычисляется на базе значения первого факта, а также по установленной
 формуле будет изменяться значение второго факта.


См. также:


[IStandardCubeFactBinding](IStandardCubeFactBinding.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
