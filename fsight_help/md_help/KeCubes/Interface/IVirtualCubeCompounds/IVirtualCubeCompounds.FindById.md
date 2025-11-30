# IVirtualCubeCompounds.FindById

IVirtualCubeCompounds.FindById
-


# IVirtualCubeCompounds.FindById


## Синтаксис


FindById(Id: String): [IVirtualCubeCompound](../IVirtualCubeCompound/IVirtualCubeCompound.htm);


## Параметры


Id. Идентификатор искомой структуры.


## Описание


Метод FindById осуществляет поиск структуры по указанному идентификатору.


## Комментарии


Если структура с указанным идентификатором не найдена, то метод возвращает значение Null.


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

    VCompound := Compounds.FindById("COMPOUND_USER");

    If VCompound <> Null Then

        Compounds.RemoveByKey(VCompound.Key);

    End If;

    (VirtCube As IMetabaseObject).Save;

End Sub UserProc;


После выполнения примера из виртуального куба будет удалена предопределенная структура с идентификатором «COMPOUND_USER», если она присутствует в кубе.


См. также:


[IVirtualCubeCompounds](IVirtualCubeCompounds.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
