# IStandardDimBlock.ParentBlock

IStandardDimBlock.ParentBlock
-


# IStandardDimBlock.ParentBlock


## Синтаксис


ParentBlock: [IStandardDimBlock](IStandardDimBlock.htm);


## Описание


Свойство ParentBlock возвращает
 блок-владелец.


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

	    DimBlock:=DimBlocks.Item(1);

	    DimBlock1:=DimBlock.ParentBlock;

	    If DimBlock1<>Null Then

	        s:=DimBlock1.Name;

	    Else

	        s:="No";

	    End If;

	End Sub UserProc;


После выполнения примера в переменной «s» будет содержаться наименование
 блока-родителя, если второй блок справочника является дочерним по отношению
 к какому либо блоку. Идентификатор табличного справочника - «TAB_DIM».


См. также:


[IStandardDimBlock](IStandardDimBlock.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
