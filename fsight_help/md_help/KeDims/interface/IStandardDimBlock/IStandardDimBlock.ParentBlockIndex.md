# IStandardDimBlock.ParentBlockIndex

IStandardDimBlock.ParentBlockIndex
-


# IStandardDimBlock.ParentBlockIndex


## Синтаксис


ParentBlockIndex: [IStandardDimIndex](../IStandardDimIndex/IStandardDimIndex.htm);


## Описание


Свойство ParentBlockIndex определяет
 уникальный индекс блока-владельца для связи с текущим блоком.


## Пример


	Sub UserProc;

	Var

	    MB: IMetabase;

	    Dimens: IStandardDimension;

	    DimBlocks: IStandardDimBlocks;

	    DimBlock: IStandardDimBlock;

	    BlockIndex: IStandardDimIndex;

	    s: String;

	Begin

	    MB:=MetabaseClass.Active;

	    Dimens:=MB.ItemById("TAB_DIM").Bind As IStandardDimension;

	    DimBlocks:=Dimens.Blocks;

	    DimBlock:=DimBlocks.Item(1);

	    BlockIndex:=DimBlock.ParentBlockIndex;

	    If BlockIndex<>Null Then

	        s:=DimBlock.ParentBlockIndex.Name;

	    Else

	        s:="No";

	    End If;

	End Sub UserProc;


После выполнения примера в переменной «s» будет содержаться наименование
 уникального индекса блока-владельца, если второй блок справочника является
 дочерним блоком первого. Идентификатор табличного справочника - «TAB_DIM».


См. также:


[IStandardDimBlock](IStandardDimBlock.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
