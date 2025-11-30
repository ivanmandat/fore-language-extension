# IStdDimOrder.Attribute

IStdDimOrder.Attribute
-


# IStdDimOrder.Attribute


## Синтаксис


Attribute: [IStandardDimAttribute](../IStandardDimAttribute/IStandardDimAttribute.htm);


## Описание


Свойство Attribute возвращает
 свойства атрибута, по которому осуществляется сортировка табличного справочника.


## Пример


	Sub UserProc;

	Var

	    MB: IMetabase;

	    Dimens: IStandardDimension;

	    DimAttrs: IStandardDimAttributes;

	    DimOrd: IStdDimOrders;

	    Order: IStdDimOrder;

	    s: String;

	Begin

	    MB := MetabaseClass.Active;

	    Dimens := MB.ItemById("TAB_DIM").Bind As IStandardDimension;

	    DimAttrs := Dimens.Attributes;

	    DimOrd := DimAttrs.Orders;

	    Order := DimOrd.Item(0);

	    s := Order.Attribute.Id;

	End Sub UserProc;


После выполнения примера в переменной "s" будет содержаться
 идентификатор первого атрибута, по которому осуществляется сортировка
 табличного справочника.


См. также:


[IStdDimOrder](IStdDimOrder.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
