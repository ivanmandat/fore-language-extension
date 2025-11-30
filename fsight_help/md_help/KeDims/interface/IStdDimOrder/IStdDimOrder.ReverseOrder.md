# IStdDimOrder.ReverseOrder

IStdDimOrder.ReverseOrder
-


# IStdDimOrder.ReverseOrder


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

	    Dimens: IStandardDimension;

	    DimAttrs: IStandardDimAttributes;

	    DimOrd: IStdDimOrders;

	    Order: IStdDimOrder;

	Begin

	    MB := MetabaseClass.Active;

	    MObj := MB.ItemById("TAB_DIM").Edit;

	    Dimens := MObj As IStandardDimension;

	    DimAttrs := Dimens.Attributes;

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
 атрибуту, из списка сортировки, табличного справочника.


См. также:


[IStdDimOrder](IStdDimOrder.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
