# IDimLevelInstance.LevelKey

IDimLevelInstance.LevelKey
-


# IDimLevelInstance.LevelKey


## Синтаксис


LevelKey: Integer;


## Описание


Свойство LevelKey возвращает
 ключ уровня справочника.


## Пример


	Sub UserProc;

	Var

	    MB: IMetabase;

	    Dimen: IDimInstance;

	    Levels: IDimLevelsInstance;

	    Level: IDimLevelInstance;

	    i: Integer;

	Begin

	    MB:=MetabaseClass.Active;

	    Dimen:=MB.ItemById("D_TO").Open(Null) As IDimInstance;

	    Levels:=Dimen.Levels;

	    Level:=Levels.Item(Levels.Count-1);

	    i:=Level.LevelKey;

	End Sub UserProc;


После выполнения примера в переменной «s» будет содержаться ключ последнего
 уровня в справочнике.


См. также:


[IDimLevelInstance](IDimLevelInstance.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
