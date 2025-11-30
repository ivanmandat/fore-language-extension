# IDimOrder.Attribute

IDimOrder.Attribute
-


# IDimOrder.Attribute


## Синтаксис


Attribute: [IDimAttribute](../IDimAttribute/IDimAttribute.htm);


## Описание


Свойство Attribute возвращает
 свойства атрибута, по которому осуществляется сортировка справочника.


## Пример


	Sub UserProc;

	Var

	    MB: IMetabase;

	    DimModel: IDimensionModel;

	    DimAttrs: IDimAttributes;

	    DimOrd: IDimOrders;

	    Order: IDimOrder;

	    s: String;

	Begin

	    MB := MetabaseClass.Active;

	    DimModel := MB.ItemById("D_TO").Bind As IDimensionModel;

	    DimAttrs := DimModel.Attributes;

	    DimOrd := DimAttrs.Orders;

	    Order := DimOrd.Item(0);

	    s := Order.Attribute.Id;

	End Sub UserProc;


После выполнения примера в переменной "s" будет содержаться
 идентификатор первого атрибута, по которому осуществляется сортировка
 справочника.


См. также:


[IDimOrder](IDimOrder.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
