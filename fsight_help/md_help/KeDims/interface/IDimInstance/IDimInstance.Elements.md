# IDimInstance.Elements

IDimInstance.Elements
-


# IDimInstance.Elements


## Синтаксис


Elements: [IDimElements](../IDimElements/IDimElements.htm);


## Описание


Свойство Elements возвращает
 коллекцию элементов экземпляра справочника.


## Пример


	Sub UserProc;

	Var

	    MB: IMetabase;

	    Dimen: IDimInstance;

	    Elements: IDimElements;

	    i: Integer;

	Begin

	    MB:=MetabaseClass.Active;

	    Dimen:=MB.ItemById("D_TO").Open(Null) As IDimInstance;

	    Elements:=Dimen.Elements;

	    i:=Elements.Count;

	End Sub UserProc;


После выполнения примера в переменной «i» будет содержаться количество
 элементов справочника. Идентификатор объекта репозитория - «D_TO».


См. также:


[IDimInstance](IDimInstance.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
