# IStandardCubeDimension.OpenDimension

IStandardCubeDimension.OpenDimension
-


# IStandardCubeDimension.OpenDimension


## Синтаксис


OpenDimension: [IDimInstance](KeDims.chm::/interface/IDimInstance/IDimInstance.htm);


## Описание


Свойство OpenDimension определяет
 открытое измерение куба.


## Пример


Для выполнения примера предполагается наличие в репозитории стандартного
 куба с идентификатором OBJ_STD_CUBE и параметрического справочника с идентификатором
 OBJ_PARAM_DICT. Первый параметр в справочнике должен быть целого типа.


			Sub UserProc;

Var

    Mb: IMetabase;

    Cube: IStandardCube;

    Dest: IStandardCubeDestination;

    DimModel: IDimensionModel;

    Dim: IStandardCubeDimension;

    ParVals: IMetabaseObjectParamValues;

Begin

    Mb := MetabaseClass.Active;

    Cube := Mb.ItemById("OBJ_STD_CUBE").Edit As IStandardCube;

    Cube.ExternalFactDimension := True;

    Dest := Cube.Destinations.Item(0);

    DimModel := Mb.ItemById("OBJ_PARAM_DICT").Bind As IDimensionModel;

    Dim := Dest.Dimensions.Add(DimModel);

    Dim.FactDimension := True;

    ParVals := (DimModel As IMetabaseObject).Params.CreateEmptyValues;

    ParVals.Item(0).Value := 2;

    Dest.FactDimension.OpenDimension := (DimModel As IMetabaseObject).Open(ParVals) As IDimInstance;

    (Cube As IMetabaseObject).Save;

End Sub UserProc;


После выполнения примера в куб будет добавлен справочник OBJ_PARAM_DICT
 в качестве измерения фактов куба. Данное измерение будет открыто со значением
 параметра 2.


См. также:


[IStandardCubeDimension](IStandardCubeDimension.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
