# IStandardDimBlock.ChildrenBlockCount

IStandardDimBlock.ChildrenBlockCount
-


# IStandardDimBlock.ChildrenBlockCount


## Синтаксис


ChildrenBlockCount: Integer;


## Описание


Свойство ChildrenBlockCount
 возвращает количество дочерних блоков.


## Пример


	Sub UserProc;

	Var

	    MB: IMetabase;

	    Dimens: IStandardDimension;

	    DimBlocks: IStandardDimBlocks;

	    DimBlock: IStandardDimBlock;

	    i: Integer;

	Begin

	    MB:=MetabaseClass.Active;

	    Dimens:=MB.ItemById("TAB_DIM").Bind As IStandardDimension;

	    DimBlocks:=Dimens.Blocks;

	    DimBlock:=DimBlocks.Item(0);

	    i:=DimBlock.ChildrenBlockCount;

	End Sub UserProc;


После выполнения примера в переменной «i» будет содержаться количество
 дочерних блоков первого блока справочника. Идентификатор табличного справочника
 - «TAB_DIM».


См. также:


[IStandardDimBlock](IStandardDimBlock.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
