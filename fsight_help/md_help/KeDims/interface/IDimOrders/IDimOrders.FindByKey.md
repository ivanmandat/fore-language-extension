# IDimOrders.FindByKey

IDimOrders.FindByKey
-


# IDimOrders.FindByKey


## Синтаксис


FindByKey(AttributeKey: Integer): [IDimOrder](../IDimOrder/IDimOrder.htm);


## Параметры


AttributeKey - ключ атрибута,
 по которому осуществляется поиск.


## Описание


Метод FindByKey осуществляет
 поиск и возвращает атрибут, входящий в список сортировки. Ключ, по которому
 осуществляется поиск, передается посредством параметра AttributeKey.


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

	    Order := DimOrd.FindByKey(DimAttrs.Name.Key);

	    If Order <> Null Then

	        s := Order.ReverseOrder.ToString;

	    Else

	        s := "Attribute does not fall into list of the sorting";

	    End If;

	End Sub UserProc;


После выполнения примера в списке сортировки будет осуществлен поиск
 атрибута, назначение которого - наименование, и в случае удачного поиска
 в переменной "s" будет содержаться направление сортировки по
 данному атрибуту.


См. также:


[IDimOrders](IDimOrders.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
