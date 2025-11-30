# IUserDimOrders.Item

IUserDimOrders.Item
-


# IUserDimOrders.Item


## Синтаксис


Item(Index: Integer): [IUserDimOrder](../IUserDimOrder/IUserDimOrder.htm);


## Параметры


Index. Индекс атрибута в списке
 сортировки.


## Описание


Свойство Item возвращает настройки
 порядка сортировки атрибута, входящего в список сортировки вычисляемого
 справочника. Индекс атрибута передается посредством параметра Index.


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


[IUserDimOrders](IUserDimOrders.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
