# ICubeInstanceDestination.UpdateCache

ICubeInstanceDestination.UpdateCache
-


# ICubeInstanceDestination.UpdateCache


## Синтаксис


UpdateCache;


## Описание


Метод UpdateCache обновляет
 кеш открытого экземпляра куба.


## Пример


Для выполнения примера в репозитории предполагается наличие куба с идентификатором
 CUBE_WDI.


Добавьте ссылки на системные сборки Metabase и Cubes.


	Sub UserProc;

	Var

	    MB: IMetabase;

	    Cube: ICubeInstance;

	    DefDes: ICubeInstanceDestination;

	Begin

	    Mb := MetabaseClass.Active;

	    Cube := Mb.ItemById("CUBE_WDI").Open(Null) As ICubeInstance;

	    DefDes := Cube.Destinations.DefaultDestination;

	    DefDes.UpdateCache;

	End Sub UserProc;


После выполнения примера будет обновлен кеш указанного куба.


См. также:


[ICubeInstanceDestination](ICubeInstanceDestination.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
