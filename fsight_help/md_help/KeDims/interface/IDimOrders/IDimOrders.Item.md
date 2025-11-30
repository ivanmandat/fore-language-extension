# IDimOrders.Item

IDimOrders.Item
-


# IDimOrders.Item


## Синтаксис


Item(Index: Integer): [IDimOrder](../IDimOrder/IDimOrder.htm);


## Параметры


Index - индекс атрибута в списке
 сортировки.


## Описание


Свойство Item возвращает настройки
 порядка сортировки атрибута, входящего в список сортировки справочника.
 Индекс атрибута передается посредством параметра Index.


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

	    If Order.ReverseOrder Then

	        s := "Descending";

	    Else

	        s := "Ascending";

	    End If;

	End Sub UserProc;


После выполнения примера в переменной "s" будет содержаться
 "Ascending" если по первому атрибуту, входящему в список сортировки,
 осуществляется сортировка по возрастанию.


См. также:


[IDimOrders](IDimOrders.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
