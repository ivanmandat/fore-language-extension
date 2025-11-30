# IStandardDimension.Blocks

IStandardDimension.Blocks
-


# IStandardDimension.Blocks


## Синтаксис


Blocks: [IStandardDimBlocks](../IStandardDimBlocks/IStandardDimBlocks.htm);


## Описание


Свойство Blocks возвращает объект,
 содержащий коллекцию блоков табличного справочника.


## Пример


	Sub UserProc;

	Var

	    MB: IMetabase;

	    Dimens: IStandardDimension;

	    DimBlocks: IStandardDimBlocks;

	    i: Integer;

	Begin

	    MB:=MetabaseClass.Active;

	    Dimens:=MB.ItemById("TAB_DIM").Bind As IStandardDimension;

	    DimBlocks:=Dimens.Blocks;

	    i:=DimBlocks.Count;

	End Sub UserProc;


После выполнения примера в переменной «i» будет содержаться количество
 блоков справочника. Идентификатор табличного справочника - «TAB_DIM».


См. также:


[IStandardDimension](IStandardDimension.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
