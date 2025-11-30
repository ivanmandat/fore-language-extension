# IDimLevelsInstance.Count

IDimLevelsInstance.Count
-


# IDimLevelsInstance.Count


## Синтаксис


Count: Integer;


## Описание


Свойство Count возвращает количество
 уровней элементов справочника.


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

	    i:=Levels.Count;

	End Sub UserProc;


После выполнения примера в переменной «i» будет содержаться количество
 уровней элементов справочника.


См. также:


[IDimLevelsInstance](IDimLevelsInstance.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
