# IDimBlockInstance.BlockKey

IDimBlockInstance.BlockKey
-


# IDimBlockInstance.BlockKey


## Синтаксис


BlockKey: Integer;


## Описание


Свойство BlockKey возвращает
 ключ блока справочника.


## Пример


	Sub UserProc;

	Var

	    MB: IMetabase;

	    Dimen: IDimInstance;

	    Blocks: IDimBlocksInstance;

	    BlockInst: IDimBlockInstance;

	    i: Integer;

	Begin

	    MB:=MetabaseClass.Active;

	    Dimen:=MB.ItemById("D_TO").Open(Null) As IDimInstance;

	    Blocks:=Dimen.Blocks;

	    BlockInst:=Blocks.Item(0);

	    i:=BlockInst.BlockKey;

	End Sub UserProc;


После выполнения примера в переменной «i» будет содержаться ключ первого
 блока справочника. Идентификатор объекта репозитория - «D_TO».


См. также:


[IDimBlockInstance](IDimBlockInstance.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
