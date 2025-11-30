# IDimLevelInstance.Number

IDimLevelInstance.Number
-


# IDimLevelInstance.Number


## Синтаксис


Number: Integer;


## Описание


Свойство Number возвращает порядковый
 номер уровня в справочнике.


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

	    i:=Level.Number;

	End Sub UserProc;


После выполнения примера в переменной «i» будет содержаться порядковый
 номер последнего уровня в справочнике.


См. также:


[IDimLevelInstance](IDimLevelInstance.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
