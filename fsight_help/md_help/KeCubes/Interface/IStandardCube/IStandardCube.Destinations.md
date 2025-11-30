# IStandardCube.Destinations

IStandardCube.Destinations
-


# IStandardCube.Destinations


## Синтаксис


Destinations: [IStandardCubeDestinations](../IStandardCubeDestinations/IStandardCubeDestinations.htm);


## Описание


Свойство Destinations возвращает
 коллекцию вариантов отображения стандартного куба.


## Пример


Для выполнения примера предполагается наличие в репозитории стандартного
 куба с идентификатором STD_CUBE.


			Sub UserProc;

Var

    MB: IMetabase;

    StdCube: IStandardCube;

    Dests: IStandardCubeDestinations;

    Dest: IStandardCubeDestination;

Begin

    MB := MetabaseClass.Active;

    StdCube := MB.ItemById("STD_CUBE").Bind As IStandardCube;

    Dests := StdCube.Destinations;

    For Each Dest In Dests Do

        Debug.WriteLine(Dest.Name);

    End For;

End Sub UserProc;


После выполнения примера в консоль среды разработки будут выведены наименования
 вариантов отображения куба.


См. также:


[IStandardCube](IStandardCube.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
