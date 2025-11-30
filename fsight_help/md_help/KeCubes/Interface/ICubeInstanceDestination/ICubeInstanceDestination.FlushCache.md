# ICubeInstanceDestination.FlushCache

ICubeInstanceDestination.FlushCache
-


# ICubeInstanceDestination.FlushCache


## Синтаксис


FlushCache;


## Описание


Метод FlushCache очищает кеш
 открытого экземпляра куба.


## Комментарии


[Кеширование](../../../UiNav/02_Navigator/UiNav_Cache.htm)
 данных позволяет сократить время загрузки и обеспечивает более быстрый
 доступ к некоторым данным. В случае, если данные на источнике не совпадают
 с кешированными данными, требуется очистка кеша.


## Пример


Для выполнения примера в репозитории предполагается наличие куба с идентификатором
 CUBE_WDI.


Добавьте ссылки на системные сборки Metabase и Cubes.


	Sub  UserProc;

	Var

	    MB: IMetabase;

	    CubeInst: ICubeInstance;

	    CubeInstDest: ICubeInstanceDestination;

	Begin

	    MB := MetabaseClass.Active;

	    CubeInst := MB.ItemById("CUBE_WDI").Open(Null) As  ICubeInstance;

	    CubeInstDest := CubeInst.Destinations.DefaultDestination;

	    CubeInstDest.UpdateCache;

	    Debug.WriteLine(CubeInstDest.Cached);

	    CubeInstDest.FlushCache;

	    Debug.WriteLine(CubeInstDest.Cached);

	End Sub UserProc;


После выполнения примера будет очищен кеш указанного куба.


См. также:


[ICubeInstanceDestination](ICubeInstanceDestination.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
