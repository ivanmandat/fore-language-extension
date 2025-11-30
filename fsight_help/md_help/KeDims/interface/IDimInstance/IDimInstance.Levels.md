# IDimInstance.Levels

IDimInstance.Levels
-


# IDimInstance.Levels


## Синтаксис


Levels: [IDimLevelsInstance](../IDimLevelsInstance/IDimLevelsInstance.htm);


## Описание


Свойство Levels возвращает объект,
 содержащий коллекцию уровней элементов справочника.


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


[IDimInstance](IDimInstance.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
