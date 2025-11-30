# IUserDimOrder.Attribute

IUserDimOrder.Attribute
-


# IUserDimOrder.Attribute


## Синтаксис


Attribute: [IUserDimAttribute](../IUserDimAttribute/IUserDimAttribute.htm);


## Описание


Свойство Attribute возвращает
 свойства атрибута, по которому осуществляется сортировка вычисляемого
 справочника.


## Пример


	Sub UserProc;

	Var

	    MB: IMetabase;

	    UsDim: IUserDimension;

	    UsDimAtr: IUserDimAttributes;

	    DimOrd: IUserDimOrders;

	    Order: IUserDimOrder;

	    s: String;

	Begin

	    MB := MetabaseClass.Active;

	    UsDim := MB.ItemById("USER_DIM").Bind As IUserDimension;

	    UsDimAtr := UsDim.Attributes;

	    DimOrd := UsDimAtr.Orders;

	    Order := DimOrd.Item(0);

	    s := Order.Attribute.Id;

	End Sub UserProc;


После выполнения примера в переменной "s" будет содержаться
 идентификатор первого атрибута, по которому осуществляется сортировка
 вычисляемого справочника.


См. также:


[IUserDimOrder](IUserDimOrder.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
