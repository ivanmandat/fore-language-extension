# ISaveMetabaseObjectHandlers.Clear

ISaveMetabaseObjectHandlers.Clear
-


# ISaveMetabaseObjectHandlers.Clear


## Синтаксис


Clear;


## Описание


Метод Clear удаляет из коллекции
 все обработчики событий.


## Пример


Добавьте ссылки на системную сборку Metabase.


	Sub ClearHandlers;

	Var

	    Mb: IMetabase;

	    SpecObj: ISpecialObjects;

	    ObjectHandlers: ISaveMetabaseObjectHandlers;

	Begin

	    Mb := MetabaseClass.Active;

	    SpecObj := Mb.SpecialObjects(True);

	    ObjectHandlers := SpecObj.SaveMetabaseObjectHandlers;

	    ObjectHandlers.Clear;

	    (SpecObj As IMetabaseObject).Save;

	End Sub ClearHandlers;


При выполнении примера будет очищена коллекция обработчиков событий.


См. также:


[ISaveMetabaseObjectHandlers](ISaveMetabaseObjectHandlers.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
