# IUserDimAttributes.Orders

IUserDimAttributes.Orders
-


# IUserDimAttributes.Orders


## Синтаксис


Orders: [IUserDimOrders](../IUserDimOrders/IUserDimOrders.htm);


## Описание


Свойство Orders возвращает коллекцию
 атрибутов, по которым будет производиться сортировка вычисляемого справочника.


## Пример


	Sub UserProc;

	Var

	    MB: IMetabase;

	    UsDim: IUserDimension;

	    UsDimAtr: IUserDimAttributes;

	    DimOrd: IUserDimOrders;

	    i: Integer;

	Begin

	    MB := MetabaseClass.Active;

	    UsDim := MB.ItemById("USER_DIM").Bind As IUserDimension;

	    UsDimAtr := UsDim.Attributes;

	    DimOrd := UsDimAtr.Orders;

	    i := DimOrd.Count;

	End Sub UserProc;


После выполнения примера в переменной "i" будет содержаться
 количество атрибутов, по которым установлена сортировка вычисляемого справочника.


См. также:


[IUserDimAttributes](IUserDimAttributes.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
