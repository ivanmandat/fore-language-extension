# IVirtualCubeCompounds.Clear

IVirtualCubeCompounds.Clear
-


# IVirtualCubeCompounds.Clear


## Синтаксис


Clear;


## Описание


Метод Clear очищает коллекцию составных структур.


## Комментарии


После вызова данного метода значение свойства [IVirtualCubeCompounds.Count](IVirtualCubeCompounds.Count.htm) становится равным трем, т.к. коллекция всегда содержит предопределенные структуры (факты/календарь/сценарии), которые нельзя удалить.


## Пример


Для выполнения примера в репозитории предполагается наличие виртуального куба с идентификатором «CUBE_VIRT». Также необходимо добавить ссылки на системные сборки «Metabase», «Cubes».


			    Sub UserProc;

    Var

        mb: IMetabase;

        VirtCube: IVirtualCube;

        Compounds: IVirtualCubeCompounds;

    Begin

        Mb := MetabaseClass.Active;

        VirtCube := Mb.ItemById("CUBE_VIRT").Edit As IVirtualCube;

        Compounds := VirtCube.Compounds;

        Compounds.Clear;

        (VirtCube As IMetabaseObject).Save;

    End Sub UserProc;


После выполнения примера из виртуального куба будут удалены все пользовательские предопределенные структуры.


См. также:


[IVirtualCubeCompounds](IVirtualCubeCompounds.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
