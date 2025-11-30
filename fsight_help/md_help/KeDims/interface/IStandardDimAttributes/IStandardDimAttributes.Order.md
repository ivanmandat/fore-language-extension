# IStandardDimAttributes.Order

IStandardDimAttributes.Order
-


# IStandardDimAttributes.Order


## Синтаксис


Order: [IStandardDimAttribute](../IStandardDimAttribute/IStandardDimAttribute.htm);


## Описание


Свойство Order определяет атрибут
 справочника, назначение которого - Порядок.


## Пример


	Sub UserProc;

	Var

	    MB: IMetabase;

	    Dimens: IStandardDimension;

	    DimAtrrs: IStandardDimAttributes;

	    DimAtribut: IStandardDimAttribute;

	    s: String;

	Begin

	    MB:=MetabaseClass.Active;

	    Dimens:=MB.ItemById("TAB_DIM").Bind As IStandardDimension;

	    DimAtrrs:=Dimens.Attributes;

	    DimAtribut:=DimAtrrs.Order;

	    s:=DimAtribut.Id;

	End Sub UserProc;


После выполнения примера в переменной «s» будет содержаться идентификатор
 атрибута справочника, назначение которого - Порядок. Идентификатор табличного
 справочника - «TAB_DIM».


См. также:


[IStandardDimAttributes](IStandardDimAttributes.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
