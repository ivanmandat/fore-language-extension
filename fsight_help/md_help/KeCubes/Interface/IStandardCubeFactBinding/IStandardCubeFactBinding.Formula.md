# IStandardCubeFactBinding.Formula

IStandardCubeFactBinding.Formula
-


# IStandardCubeFactBinding.Formula


## Синтаксис


Formula: [IExpression](ForeSys.chm::/Interface/IExpression/IExpression.htm);


## Описание


Свойство Formula возвращает
 выражение, определяющее привязку факта куба к полям источника данных,
 либо выражение, по которому будет определяться значение вычисляемого факта.


## Пример


Для выполнения примера предполагается наличие стандартного куба с идентификатором
 STD_CUBE. В измерении фактов куба имеется не менее двух элементов.


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

    Debug.WriteLine(FactBind.Formula.AsString);

    v := FactBind.FactKey;

    FactBind := Dest.CalcBindings.Binding(2);

    FactBind.Formula.AsString := "@[1]*3.14";

    (StdCube As IMetabaseObject).Save;

End Sub UserProc;


После выполнения примера будет настроена привязка для первых двух элементов
 измерения фактов куба. Первый факт куба будет привязан к первому полю
 источника данных. Второй факт будет определён как вычисляемый факт, его
 значение вычисляется на базе значения первого факта по установленной формуле.


См. также:


[IStandardCubeFactBinding](IStandardCubeFactBinding.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
