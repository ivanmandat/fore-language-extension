# IUserDimOrder.ReverseOrder

IUserDimOrder.ReverseOrder
-


# IUserDimOrder.ReverseOrder


## Синтаксис


ReverseOrder: Boolean;


## Описание


Свойство ReverseOrder определяет
 направление сортировки по данному атрибуту.


## Комментарии


Если свойство установлено в False
 - осуществляется сортировка по возрастанию, иначе по убыванию.


## Пример


	Sub UserProc;

	Var

	    MB: IMetabase;

	    MObj: IMetabaseObject;

	    UsDim: IUserDimension;

	    UsDimAtr: IUserDimAttributes;

	    DimOrd: IUserDimOrders;

	    Order: IUserDimOrder;

	Begin

	    MB := MetabaseClass.Active;

	    MObj := MB.ItemById("USER_DIM").Edit;

	    UsDim := MObj As IUserDimension;

	    UsDimAtr := UsDim.Attributes;

	    DimOrd := UsDimAtr.Orders;

	    Order := DimOrd.Item(0);

	    If Order.ReverseOrder Then

	        Order.ReverseOrder := False;

	    Else

	        Order.ReverseOrder := True;

	    End If;

	    MObj.Save;

	End Sub UserProc;


После выполнения примера будет изменено направление сортировки по первому
 атрибуту, из списка сортировки, вычисляемого справочника.


См. также:


[IUserDimOrder](IUserDimOrder.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
