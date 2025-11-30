# IDimLevelInstance.Level

IDimLevelInstance.Level
-


# IDimLevelInstance.Level


## Синтаксис


Level: [IDimLevel](../IDimLevel/IDimLevel.htm);


## Описание


Свойство Level возвращает объект,
 содержащий структуру уровня справочника.


## Пример


	Sub UserProc;

	Var

	    MB: IMetabase;

	    Dimen: IDimInstance;

	    Levels: IDimLevelsInstance;

	    Level: IDimLevelInstance;

	    Lev: IDimLevel;

	    s: String;

	Begin

	    MB:=MetabaseClass.Active;

	    Dimen:=MB.ItemById("D_TO").Open(Null) As IDimInstance;

	    Levels:=Dimen.Levels;

	    Level:=Levels.Item(Levels.Count-1);

	    Lev:=Level.Level;

	    s:=Lev.Id;

	End Sub UserProc;


После выполнения примера в переменной «s» будет содержаться идентификатор
 последнего уровня элементов справочника.


См. также:


[IDimLevelInstance](IDimLevelInstance.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
