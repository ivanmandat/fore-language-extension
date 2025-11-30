# IVirtualCubeCompounds.FindByKey

IVirtualCubeCompounds.FindByKey
-


# IVirtualCubeCompounds.FindByKey


## Синтаксис


FindByKey(Key: Integer): [IVirtualCubeCompound](../IVirtualCubeCompound/IVirtualCubeCompound.htm);


## Параметры


Key. Ключ искомой структуры.


## Описание


Метод FindByKey осуществляет поиск структуры по указанному ключу.


## Комментарии


Если структура с указанным ключом не найдена, то метод возвращает значение Null.


## Пример


Для выполнения примера в репозитории предполагается наличие виртуального куба с идентификатором «CUBE_VIRT». Также необходимо добавить ссылки на системные сборки «Metabase», «Cubes».


			Sub UserProc;

Var

    mb: IMetabase;

    VirtCube: IVirtualCube;

    Compounds: IVirtualCubeCompounds;

    VCompound: IVirtualCubeCompound;

Begin

    Mb := MetabaseClass.Active;

    VirtCube := Mb.ItemById("CUBE_VIRT").Edit As IVirtualCube;

    Compounds := VirtCube.Compounds;

    VCompound := Compounds.FindByKey(1);

    If VCompound <> Null Then

        Compounds.RemoveByKey(1);

    End If;

    (VirtCube As IMetabaseObject).Save;

End Sub UserProc;


После выполнения примера из виртуального куба будет удалена предопределенная структура с ключом «1», если она присутствует в кубе.


См. также:


[IVirtualCubeCompounds](IVirtualCubeCompounds.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
