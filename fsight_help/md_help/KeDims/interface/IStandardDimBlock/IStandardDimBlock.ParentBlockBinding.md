# IStandardDimBlock.ParentBlockBinding

IStandardDimBlock.ParentBlockBinding
-


# IStandardDimBlock.ParentBlockBinding


## Синтаксис


ParentBlockBinding(IndexAttribute: [IStandardDimIndexAttribute](../IStandardDimIndexAttribute/IStandardDimIndexAttribute.htm)):
 [IExpression](ForeSys.chm::/Interface/IExpression/IExpression.htm);


## Параметры


IndexAttribute. Атрибут, входящий в уникальный индекс блока-владельца.


## Описание


Свойство ParentBlockBinding
 возвращает объект, содержащий формулу, определяющую связь поля источника
 данных и атрибута, входящего в уникальный индекс блока-владельца.


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

	        s:=DimBlock.ParentBlockBinding(BlockIndex.Attributes.Item(0)).AsString;

	    Else

	        s:="No";

	    End If;

	End Sub UserProc;


После выполнения примера в переменной «s» будет содержаться формула,
 определяющая связь поля источника данных и первого атрибута, входящего
 в уникальный индекс блока-владельца, преобразованная к строковому виду.
 Идентификатор табличного справочника - «TAB_DIM».


См. также:


[IStandardDimBlock](IStandardDimBlock.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
