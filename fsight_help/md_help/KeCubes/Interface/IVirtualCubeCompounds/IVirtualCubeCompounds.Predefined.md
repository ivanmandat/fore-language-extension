# IVirtualCubeCompounds.Predefined

IVirtualCubeCompounds.Predefined
-


# IVirtualCubeCompounds.Predefined


## Синтаксис


Predefined(Value: [VirtualCubeCompoundPredefinedType](../../Enums/VirtualCubeCompoundPredefinedType.htm)): [IVirtualCubeCompound](../IVirtualCubeCompound/IVirtualCubeCompound.htm);


## Параметры


Value. Тип предопределенной структуры.


## Описание


Свойство доступно только для чтения.


Свойство Predefined возвращает указанную предопределенную структуру.


## Комментарии


Если структура указанного типа отсутствует в коллекции, то Predefined возвращает значение Null.


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

        VCompound := Compounds.Predefined(VirtualCubeCompoundPredefinedType.Custom);

        If VCompound <> Null Then

            Compounds.RemoveByKey(VCompound.Key);

        End If;

        (VirtCube As IMetabaseObject).Save;

    End Sub UserProc;


После выполнения примера из виртуального куба будет удалена предопределенная структура пользовательского типа, если она присутствует в кубе.


См. также:


[IVirtualCubeCompounds](IVirtualCubeCompounds.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
