# IUserDimBlocks.Item

IUserDimBlocks.Item
-


# IUserDimBlocks.Item


## Синтаксис


Item(Index: Variant): [IUserDimBlock](../IUserDimBlock/IUserDimBlock.htm);


## Параметры


Index. Индекс
 блока.


## Описание


Свойство Item возвращает объект,
 содержащий блок вычисляемого справочника.


## Пример


	Sub UserProc;

	Var

	    MB: IMetabase;

	    UsDim: IUserDimension;

	    UsDimBlocks: IUserDimBlocks;

	    UsDimBlock: IUserDimBlock;

	    s: String;

	Begin

	    MB:=MetabaseClass.Active;

	    UsDim:=MB.ItemById("USER_DIM").Bind As IUserDimension;

	    UsDimBlocks:=UsDim.Blocks;

	    UsDimBlock:=UsDimBlocks.Item(0);

	    s:=UsDimBlock.Name;

	End Sub UserProc;


После выполнения примера в переменной «s» будет содержаться наименование
 первого блока вычисляемого справочника. Идентификатор вычисляемого справочника
 - USER_DIM.


См. также:


[IUserDimBlocks](IUserDimBlocks.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
