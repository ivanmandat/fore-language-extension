# IDimBlock.Indexes

IDimBlock.Indexes
-


# IDimBlock.Indexes


## Синтаксис


Indexes: [IDimIndexes](../IDimIndexes/IDimIndexes.htm);


## Описание


Свойство Indexes возвращает
 объект, содержащий коллекцию индексов блока справочника.


## Пример


	Sub UserProc;

	Var

	    MB: IMetabase;

	    DimModel: IDimensionModel;

	    DimBlocks: IDimBlocks;

	    DimBlock: IDimBlock;

	    Index: IDimIndexes;

	    i: Integer;

	Begin

	    MB:=MetabaseClass.Active;

	    DimModel:=MB.ItemById("D_TO").Bind As IDimensionModel;

	    DimBlocks:=DimModel.Blocks;

	    DimBlock:=DimBlocks.Item(0);

	    Index:=DimBlock.Indexes;

	    i:=Index.Count;

	End Sub UserProc;


После выполнения примера в переменной «i» будет содержаться количество
 индексов первого блока справочника. Идентификатор объекта репозитория
 - «D_TO».


См. также:


[IDimBlock](IDimBlock.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
