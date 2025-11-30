# IVirtualCubeCompounds.FindByDimension

IVirtualCubeCompounds.FindByDimension
-


# IVirtualCubeCompounds.FindByDimension


## Синтаксис


FindByDimension(Dimension: [IDimensionModel](KeDims.chm::/interface/IDimensionModel/IDimensionModel.htm)): [IVirtualCubeCompound](../IVirtualCubeCompound/IVirtualCubeCompound.htm);


## Параметры


Dimension. Измерение искомой структуры.


## Описание


Метод FindByDimension осуществляет поиск структуры по указанному измерению.


## Комментарии


Если структура с указанным измерением не найдена, то метод возвращает значение Null.


## Пример


В примере описана процедура, выполняющая удаление структуры по измерению из виртуального куба. Идентификатор куба и удаляемое измерение передаются в качестве входных параметров «CubeName» и «DimModel».


Также необходимо добавить ссылки на системные сборки «Metabase», «Cubes», «Dimensions».


			Sub UserProc(CubeName: String; DimModel: IDimensionModel);

Var

    mb: IMetabase;

    VirtCube: IVirtualCube;

    Compounds: IVirtualCubeCompounds;

    VCompound: IVirtualCubeCompound;

Begin

    Mb := MetabaseClass.Active;

    VirtCube := Mb.ItemById(CubeName).Edit As IVirtualCube;

    Compounds := VirtCube.Compounds;

    VCompound := Compounds.FindByDimension(DimModel);

    If VCompound <> Null Then

        Compounds.RemoveByKey(VCompound.Key);

    End If;

    (VirtCube As IMetabaseObject).Save;

End Sub UserProc;


После выполнения примера из виртуального куба «CubeName» будет удалена предопределенная структура, соответствующая измерению «DimModel», если она присутствует в кубе.


См. также:


[IVirtualCubeCompounds](IVirtualCubeCompounds.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
