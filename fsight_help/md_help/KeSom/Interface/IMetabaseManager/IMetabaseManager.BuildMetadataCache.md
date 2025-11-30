# IMetabaseManager.BuildMetadataCache

IMetabaseManager.BuildMetadataCache
-


# IMetabaseManager.BuildMetadataCache


## Синтаксис


BuildMetadataCache;


## Описание


Метод BuildMetadataCache обновляет
 кеши метаданных всех репозиториев.


## Комментарии


При выполнении метода будут обновлены кеши репозиториев, для которых
 в коллекции [Definitions](IMetabaseManager.Definitions.htm)
 доступны описания. Перед обновлением кешей рекомендуется вызвать метод
 [CleanMetadataCache](IMetabaseManager.CleanMetadataCache.htm).


## Пример


Добавьте ссылки на системные сборки: Metabase.


	Sub RebuildAll;

	Var

	    MbMan: IMetabaseManager;

	Begin

	    MbMan := MetabaseManagerFactory.Active;

	    Debug.WriteLine("Cleaning cache");

	    MbMan.CleanMetadataCache;

	    Debug.WriteLine("Building cache");

	    MbMan.BuildMetadataCache;

	    Debug.WriteLine("---Done---");

	End Sub RebuildAll;


При выполнении примера будут сброшены и обновлены кеши метаданных всех
 репозиториев, для которых созданы описания.


См. также:


[IMetabaseManager](IMetabaseManager.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
