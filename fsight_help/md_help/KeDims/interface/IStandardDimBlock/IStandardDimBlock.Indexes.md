# IStandardDimBlock.Indexes

IStandardDimBlock.Indexes
-


# IStandardDimBlock.Indexes


## Синтаксис


Indexes: [IStandardDimIndexes](../IStandardDimIndexes/IStandardDimIndexes.htm);


## Описание


Свойство Indexes возвращает
 объект, содержащий коллекцию индексов блока табличного справочника.


## Пример


	Sub UserProc;

	Var

	    MB: IMetabase;

	    Dimens: IStandardDimension;

	    DimBlocks: IStandardDimBlocks;

	    DimBlock: IStandardDimBlock;

	    DimBlIndex: IStandardDimIndexes;

	    i: Integer;

	Begin

	    MB:=MetabaseClass.Active;

	    Dimens:=MB.ItemById("TAB_DIM").Bind As IStandardDimension;

	    DimBlocks:=Dimens.Blocks;

	    DimBlock:=DimBlocks.Item(0);

	    DimBlIndex:=DimBlock.Indexes;

	    i:=DimBlIndex.Count;

	End Sub UserProc;


После выполнения примера в переменной «i» будет содержаться количество
 индексов в первом блоке справочника. Идентификатор табличного справочника
 - «TAB_DIM».


См. также:


[IStandardDimBlock](IStandardDimBlock.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
