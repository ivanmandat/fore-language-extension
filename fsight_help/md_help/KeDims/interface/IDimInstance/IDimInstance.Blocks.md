# IDimInstance.Blocks

IDimInstance.Blocks
-


# IDimInstance.Blocks


## Синтаксис


Blocks: [IDimBlocksInstance](../IDimBlocksInstance/IDimBlocksInstance.htm);


## Описание


Свойство Blocks возвращает объект,
 содержащий коллекцию блоков справочника.


## Пример


	Sub UserProc;

	Var

	    MB: IMetabase;

	    Dimen: IDimInstance;

	    Blocks: IDimBlocksInstance;

	    i: Integer;

	Begin

	    MB:=MetabaseClass.Active;

	    Dimen:=MB.ItemById("D_TO").Open(Null) As IDimInstance;

	    Blocks:=Dimen.Blocks;

	    i:=Blocks.Count;

	End Sub UserProc;


После выполнения примера в переменной «i» будет содержаться количество
 блоков справочника. Идентификатор объекта репозитория - «D_TO».


См. также:


[IDimInstance](IDimInstance.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
