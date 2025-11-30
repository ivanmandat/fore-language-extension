# IDimOrder.ReverseOrder

IDimOrder.ReverseOrder
-


# IDimOrder.ReverseOrder


## Синтаксис


ReverseOrder: Boolean;


## Описание


Свойство ReverseOrder определяет
 направление сортировки по данному атрибуту. Если свойство установлено
 в False - осуществляется сортировка
 по возрастанию, иначе по убыванию.


## Пример


	Sub UserProc;

	Var

	    MB: IMetabase;

	    MObj: IMetabaseObject;

	    DimModel: IDimensionModel;

	    DimAttrs: IDimAttributes;

	    DimOrd: IDimOrders;

	    Order: IDimOrder;

	Begin

	    MB := MetabaseClass.Active;

	    MObj := MB.ItemById("D_TO").Edit;

	    DimModel := MObj As IDimensionModel;

	    DimAttrs := DimModel.Attributes;

	    DimOrd := DimAttrs.Orders;

	    Order := DimOrd.Item(0);

	    If Order.ReverseOrder Then

	        Order.ReverseOrder := False;

	    Else

	        Order.ReverseOrder := True;

	    End If;

	    MObj.Save;

	End Sub UserProc;


После выполнения примера будет изменено направление сортировки по первому
 атрибуту, из списка сортировки, справочника.


См. также:


[IDimOrder](IDimOrder.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
