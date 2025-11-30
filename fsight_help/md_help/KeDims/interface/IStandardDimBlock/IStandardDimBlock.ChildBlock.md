# IStandardDimBlock.ChildBlock

IStandardDimBlock.ChildBlock
-


# IStandardDimBlock.ChildBlock


## Синтаксис


ChildBlock(Index: Integer): [IStandardDimBlock](IStandardDimBlock.htm);


## Параметры


Index — индекс
 дочернего блока.


## Описание


Свойство ChildBlock возвращает
 объект, содержащий дочерний блок табличного справочника.


## Пример


	Sub UserProc;

	Var

	    MB: IMetabase;

	    Dimens: IStandardDimension;

	    DimBlocks: IStandardDimBlocks;

	    DimBlock, DimBlock1: IStandardDimBlock;

	    s: String;

	Begin

	    MB:=MetabaseClass.Active;

	    Dimens:=MB.ItemById("TAB_DIM").Bind As IStandardDimension;

	    DimBlocks:=Dimens.Blocks;

	    DimBlock:=DimBlocks.Item(0);

	    If DimBlock.ChildrenBlockCount<>0 Then

	        DimBlock1:=DimBlock.ChildBlock(0);

	        s:=DimBlock1.Name;

	    End If;

	End Sub UserProc;


После выполнения примера в переменной «DimBlock1» будет содержаться
 первый дочерний блок, первого блока справочника, если таковой имеется
 и в переменной «s» будет содержаться его наименование. Идентификатор табличного
 справочника - «TAB_DIM».


См. также:


[IStandardDimBlock](IStandardDimBlock.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
