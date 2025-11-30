# IUserDimBlocks.Count

IUserDimBlocks.Count
-


# IUserDimBlocks.Count


## Синтаксис


Count: Integer;


## Описание


Свойство Count возвращает количество
 блоков вычисляемого справочника.


## Пример


	Sub UserProc;

	Var

	    MB: IMetabase;

	    UsDim: IUserDimension;

	    UsDimBlocks: IUserDimBlocks;

	    i: Integer;

	Begin

	    MB:=MetabaseClass.Active;

	    UsDim:=MB.ItemById("USER_DIM").Bind As IUserDimension;

	    UsDimBlocks:=UsDim.Blocks;

	    i:=UsDimBlocks.Count;

	End Sub UserProc;


После выполнения примера в переменной «i» будет содержаться количество
 блоков справочника. Идентификатор вычисляемого справочника - USER_DIM.


См. также:


[IUserDimBlocks](IUserDimBlocks.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
