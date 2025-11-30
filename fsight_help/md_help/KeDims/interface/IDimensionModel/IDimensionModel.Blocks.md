# IDimensionModel.Blocks

IDimensionModel.Blocks
-


# IDimensionModel.Blocks


## Синтаксис


Blocks: [IDimBlocks](../IDimBlocks/IDimBlocks.htm);


## Описание


Свойство Blocks возвращает объект,
 содержащий коллекцию блоков справочника.


## Пример


	Sub UserProc;

	Var

	    MB: IMetabase;

	    DimModel: IDimensionModel;

	    DimBlocks: IDimBlocks;

	    i: Integer;

	Begin

	    MB:=MetabaseClass.Active;

	    DimModel:=MB.ItemById("D_TO").Bind As IDimensionModel;

	    DimBlocks:=DimModel.Blocks;

	    i:=DimBlocks.Count;

	End Sub UserProc;


После выполнения примера в переменной «i» будет содержаться количество
 блоков справочника. Идентификатор объекта репозитория - «D_TO».


См. также:


[IDimensionModel](IDimensionModel.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
