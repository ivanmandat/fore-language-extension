# IUserDimBlocks.FindByKey

IUserDimBlocks.FindByKey
-


# IUserDimBlocks.FindByKey


## Синтаксис


FindByKey(BlockKey: Integer): [IUserDimBlock](../IUserDimBlock/IUserDimBlock.htm);


## Параметры


BlockKey. Ключ
 блока, по которому осуществляется поиск.


## Описание


Метод FindByKey осуществляет
 поиск и возвращает объект, содержащий блок вычисляемого справочника. Поиск
 осуществляется по ключу, передаваемому посредством параметра BlockKey.


## Пример


	Sub UserProc;

	Var

	    MB: IMetabase;

	    MObj: IMetabaseObject;

	    UsDim: IUserDimension;

	    UsDimBlocks: IUserDimBlocks;

	    UsDimBlock: IUserDimBlock;

	    s: String;

	Begin

	    MB:=MetabaseClass.Active;

	    MObj:=MB.ItemById("USER_DIM").Edit;

	    UsDim:=MObj As IUserDimension;

	    UsDimBlocks:=UsDim.Blocks;

	    UsDimBlock:=UsDimBlocks.FindByKey(5289);

	    If UsDimBlock<>Null Then

	        s:=UsDimBlock.Name;

	    Else

	        s:="It Is not found";

	    End If;

	    MObj.Save;

	End Sub UserProc;


После выполнения примера будет осуществлен поиск блока с ключом «5289»
 и в случае удачного поиска в переменной «s» будет содержаться наименование
 найденного блока. Идентификатор вычисляемого справочника - USER_DIM.


См. также:


[IUserDimBlocks](IUserDimBlocks.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
