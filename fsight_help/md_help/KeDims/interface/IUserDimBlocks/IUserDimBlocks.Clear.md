# IUserDimBlocks.Clear

IUserDimBlocks.Clear
-


# IUserDimBlocks.Clear


## Синтаксис


Clear;


## Описание


Метод Clear осуществляет удаление
 всех блоков вычисляемого справочника.


## Пример


	Sub UserProc;

	Var

	    MB: IMetabase;

	    MObj: IMetabaseObject;

	    UsDim: IUserDimension;

	    UsDimBlocks: IUserDimBlocks;

	Begin

	    MB:=MetabaseClass.Active;

	    MObj:=MB.ItemById("USER_DIM").Edit;

	    UsDim:=MObj As IUserDimension;

	    UsDimBlocks:=UsDim.Blocks;

	    UsDimBlocks.Clear;

	    MObj.Save;

	End Sub UserProc;


После выполнения примера будут удалены все блоки справочника. Идентификатор
 вычисляемого справочника - USER_DIM.


См. также:


[IUserDimBlocks](IUserDimBlocks.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
