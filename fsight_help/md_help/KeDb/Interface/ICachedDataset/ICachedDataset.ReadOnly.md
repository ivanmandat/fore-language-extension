# ICachedDataset.ReadOnly

ICachedDataset.ReadOnly
-


# ICachedDataset.ReadOnly


## Синтаксис


ReadOnly: Boolean;


## Описание


Свойство ReadOnly определяет,
 будет ли источник данных открыт только для чтения.


## Пример


	Sub UserProc;

	Var

	    MB: IMetabase;

	    DSInst: IDatasetInstance;

	    Cache: ICachedDataset;

	    i: integer;

	Begin

	    MB := MetabaseClass.Active;

	    DSInst := MB.ItemById("Table_1").Open(Null) As IDatasetInstance;

	    Cache := DSInst.OpenCached;

	    Cache.ReadOnly := True;

	    Cache.Append;

	    Cache.Fields.Item(0).Value := 10;

	    Cache.Post;

	    Cache.Close;

	    DSInst.Close;

	End Sub UserProc;


После выполнения примера при попытке добавить запись в источник данных
 «DSInst» будет сгенерирована ошибка «Источник данных не позволяет редактирование».


См.также:


[ICachedDataset](ICachedDataset.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
