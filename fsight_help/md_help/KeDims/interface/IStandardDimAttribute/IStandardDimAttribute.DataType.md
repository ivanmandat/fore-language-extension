# IStandardDimAttribute.DataType

IStandardDimAttribute.DataType
-


# IStandardDimAttribute.DataType


## Синтаксис


DataType: [DbDataType](Dal.chm::/Enums/DbDataType.htm);


## Описание


Свойство DataType определяет
 тип данных атрибута справочника.


## Пример


	Sub UserProc;

	Var

	    MB: IMetabase;

	    Dimens: IStandardDimension;

	    DimAtrrs: IStandardDimAttributes;

	    DimAtribut: IStandardDimAttribute;

	    i: Integer;

	Begin

	    MB:=MetabaseClass.Active;

	    Dimens:=MB.ItemById("TAB_DIM").Bind As IStandardDimension;

	    DimAtrrs:=Dimens.Attributes;

	    DimAtribut:=DimAtrrs.Item(0);

	    i:=DimAtribut.DataType;

	End Sub UserProc;


После выполнения примера в переменной «i» будет содержаться тип данных
 первого атрибута табличного справочника, преобразованный к целочисленному
 виду. Идентификатор табличного справочника - «TAB_DIM».


См. также:


[IStandardDimAttribute](IStandardDimAttribute.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
