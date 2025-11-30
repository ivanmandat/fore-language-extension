# IUserDimension.Blocks

IUserDimension.Blocks
-


# IUserDimension.Blocks


## Синтаксис


Blocks: [IUserDimBlocks](../IUserDimBlocks/IUserDimBlocks.htm);


## Описание


Свойство Blocks возвращает объект,
 содержащий коллекцию блоков справочника.


## Пример


	Sub UserProc;

	Var

	    MB: IMetabase;

	    UsDim: IUserDimension;

	    UsDimBl: IUserDimBlocks;

	    i: Integer;

	Begin

	    MB:=MetabaseClass.Active;

	    UsDim:=MB.ItemById("USER_DIM").Bind As IUserDimension;

	    UsDimBl:=UsDim.Blocks;

	    i:=UsDimBl.Count;

	End Sub UserProc;


После выполнения примера в переменной «i» будет содержаться количество
 блоков вычисляемого справочника. Идентификатор справочника - USER_DIM.


См. также:


[IUserDimension](IUserDimension.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
