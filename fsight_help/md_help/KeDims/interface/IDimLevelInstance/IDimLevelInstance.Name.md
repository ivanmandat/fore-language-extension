# IDimLevelInstance.Name

IDimLevelInstance.Name
-


# IDimLevelInstance.Name


## Синтаксис


Name: String;


## Описание


Свойство Name возвращает наименование
 уровня справочника.


## Пример


	Sub UserProc;

	Var

	    MB: IMetabase;

	    Dimen: IDimInstance;

	    Levels: IDimLevelsInstance;

	    Level: IDimLevelInstance;

	    s: String;

	Begin

	    MB:=MetabaseClass.Active;

	    Dimen:=MB.ItemById("D_TO").Open(Null) As IDimInstance;

	    Levels:=Dimen.Levels;

	    Level:=Levels.Item(Levels.Count-1);

	    s:=Level.Name;

	End Sub UserProc;


После выполнения примера в переменной «s» будет содержаться наименование
 последнего уровня в справочнике.


См. также:


[IDimLevelInstance](IDimLevelInstance.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
