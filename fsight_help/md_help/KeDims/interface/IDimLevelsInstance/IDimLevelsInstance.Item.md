# IDimLevelsInstance.Item

IDimLevelsInstance.Item
-


# IDimLevelsInstance.Item


## Синтаксис


Item(Index: Variant): [IDimLevelInstance](../IDimLevelInstance/IDimLevelInstance.htm);


## Параметры


Index — индекс
 либо идентификатор уровня справочника.


## Описание


Свойство Item возвращает объект,
 содержащий уровень элементов справочника.


## Пример


	Sub UserProc;

	Var

	    MB: IMetabase;

	    Dimen: IDimInstance;

	    Levels: IDimLevelsInstance;

	    i: Integer;

	Begin

	    MB:=MetabaseClass.Active;

	    Dimen:=MB.ItemById("D_TO").Open(Null) As IDimInstance;

	    Levels:=Dimen.Levels;

	    i:=Levels.Item(Levels.Count-1).Elements.Count;

	End Sub UserProc;


После выполнения примера в переменной «i» будет содержаться количество
 элементов, находящихся на последнем уровне справочника. Идентификатор
 объекта репозитория - «D_TO».


См. также:


[IDimLevelsInstance](IDimLevelsInstance.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
