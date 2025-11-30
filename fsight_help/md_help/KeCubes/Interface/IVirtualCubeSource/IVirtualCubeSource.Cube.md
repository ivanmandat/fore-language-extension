# IVirtualCubeSource.Cube

IVirtualCubeSource.Cube
-


# IVirtualCubeSource.Cube


## Синтаксис


Cube: [ICubeModelDestination](../ICubeModelDestination/ICubeModelDestination.htm);


## Описание


Свойство Cube определяет куб
 репозитория, являющийся источником данных для виртуального куба.


## Пример


Для выполнения примера предполагается наличие в репозитории виртуального
 куба с идентификатором VIRT_CUBE и куба с идентификатором SourceCube_1.


			Sub UserProc;

Var

    MB: IMetabase;

    VirtCube: IVirtualCube;

    Cube: ICubeModel;

    Sources: IVirtualCubeSources;

    Source: IVirtualCubeSource;

    i: Integer;

Begin

    MB := MetabaseClass.Active;

    VirtCube := MB.ItemById("Virt_Cube").Edit As IVirtualCube;

    Cube := MB.ItemById("SourceCube_1").Bind As ICubeModel;

    Sources := VirtCube.Sources;

    Source := VirtCube.Sources.Add(Cube.Destinations.DefaultDestination);

    For i := 0 To Source.FixInfo.Count - 1 Do

        Source.FixInfo.Item(i).Fixed := True;

        Source.FixInfo.Item(i).Selection.SelectElement(0, False);

    End For;

    (VirtCube As IMetabaseObject).Save;

End Sub UserProc;


После выполнения примера в источники данных виртуального куба будет
 добавлен еще один куб. Все измерения куба-источника будут зафиксированы.


См. также:


[IVirtualCubeSource](IVirtualCubeSource.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
