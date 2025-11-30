# IUserDimBlocks.Add

IUserDimBlocks.Add
-


# IUserDimBlocks.Add


## Синтаксис


Add: [IUserDimBlock](../IUserDimBlock/IUserDimBlock.htm);


## Описание


Метод Add осуществляет добавление
 блока вычисляемого справочника.


## Пример


	Sub UserProc;

	Var

	    MB: IMetabase;

	    MObj: IMetabaseObject;

	    UsDim: IUserDimension;

	    UsDimBlocks: IUserDimBlocks;

	    UsDimBlock: IUserDimBlock;

	Begin

	    MB:=MetabaseClass.Active;

	    MObj:=MB.ItemById("USER_DIM").Edit;

	    UsDim:=MObj As IUserDimension;

	    UsDimBlocks:=UsDim.Blocks;

	    UsDimBlock:=UsDimBlocks.Add;

	    UsDimBlock.Id:="New_block";

	    UsDimBlock.Name:="Новый блок";

	    MObj.Save;

	End Sub UserProc;


После выполнения примера в вычисляемом справочнике будет создан новый
 блок. Идентификатор вычисляемого справочника - USER_DIM.


См. также:


[IUserDimBlocks](IUserDimBlocks.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
