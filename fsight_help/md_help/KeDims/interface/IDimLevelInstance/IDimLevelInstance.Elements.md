# IDimLevelInstance.Elements

IDimLevelInstance.Elements
-


# IDimLevelInstance.Elements


## Синтаксис


Elements: [IDimElementArray](../IDimElementArray/IDimElementArray.htm);


## Описание


Свойство Elements возвращает
 объект, содержащий все элементы уровня справочника.


## Пример


	Sub UserProc;

	Var

	    MB: IMetabase;

	    Dimen: IDimInstance;

	    Levels: IDimLevelsInstance;

	    Level: IDimLevelInstance;

	    Elem: IDimElementArray;

	    i: Integer;

	Begin

	    MB:=MetabaseClass.Active;

	    Dimen:=MB.ItemById("D_TO").Open(Null) As IDimInstance;

	    Levels:=Dimen.Levels;

	    Level:=Levels.Item(Levels.Count-1);

	    Elem:=Level.Elements;

	    i:=Elem.Count;

	End Sub UserProc;


После выполнения примера в переменной «i» будет содержаться количество
 элементов, находящихся на последнем уровне справочника.


См. также:


[IDimLevelInstance](IDimLevelInstance.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
