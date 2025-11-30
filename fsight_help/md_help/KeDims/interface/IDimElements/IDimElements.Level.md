# IDimElements.Level

IDimElements.Level
-


# IDimElements.Level


## Синтаксис


Level(Element: Integer): [IDimLevelInstance](../IDimLevelInstance/IDimLevelInstance.htm);


## Параметры


Element — индекс
 элемента справочника.


## Описание


Свойство Level возвращает объект,
 содержащий уровень справочника, на котором находится элемент с индексом
 Element.


## Пример


	Sub UserProc;

	Var

	    MB: IMetabase;

	    Dimen: IDimInstance;

	    Elem: IDimElements;

	    Level: IDimLevelInstance;

	    s: String;

	Begin

	    MB:=MetabaseClass.Active;

	    Dimen:=MB.ItemById("D_TO").Open(Null) As IDimInstance;

	    Elem:=Dimen.Elements;

	    Level:=Elem.Level(89);

	    s:=Level.Name;

	End Sub UserProc;


После выполнения примера в переменной «s» будет содержаться наименование
 уровня справочника, на котором расположен 89 элемент. Идентификатор объекта
 репозитория - «D_TO».


См. также:


[IDimElements](IDimElements.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
