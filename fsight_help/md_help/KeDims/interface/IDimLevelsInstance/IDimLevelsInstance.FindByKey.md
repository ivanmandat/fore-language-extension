# IDimLevelsInstance.FindByKey

IDimLevelsInstance.FindByKey
-


# IDimLevelsInstance.FindByKey


## Синтаксис


FindByKey(IndexKey: Integer): [IDimLevelInstance](../IDimLevelInstance/IDimLevelInstance.htm);


## Параметры


IndexKey — ключ
 уровня, по которому осуществляется поиск.


## Описание


Метод FindByKey осуществляет
 поиск по ключу и возвращает объект, содержащий уровень элементов справочника,
 в случае удачного поиска.


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

	    Level:=Levels.FindByKey(104);

	    If Level<>Null Then

	        s:=Level.Name;

	    End If;

	End Sub UserProc;


После выполнения примера будет осуществлен поиск уровня с ключом «104»
 и в случае удачного поиска в переменной «s» будет содержаться наименование
 найденного уровня.


См. также:


[IDimLevelsInstance](IDimLevelsInstance.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
