# IUserDimOrders.Move

IUserDimOrders.Move
-


# IUserDimOrders.Move


## Синтаксис


Move(IndexFrom: Integer; IndexTo: Integer);


## Параметры


IndexFrom. Индекс позиции атрибута,
 который необходимо переместить.


IndexTo. Индекс позиции, в
 которую необходимо переместить атрибут.


## Описание


Метод Move осуществляет перемещение
 атрибутов в списке сортировки, изменяя тем самым, приоритет сортировки
 по какому либо атрибуту.


## Пример


	Sub UserProc;

	Var

	    MB: IMetabase;

	    MObj: IMetabaseObject;

	    UsDim: IUserDimension;

	    UsDimAtr: IUserDimAttributes;

	    DimOrd: IUserDimOrders;

	Begin

	    MB := MetabaseClass.Active;

	    MObj := MB.ItemById("USER_DIM").Edit;

	    UsDim := MObj As IUserDimension;

	    UsDimAtr := UsDim.Attributes;

	    DimOrd := UsDimAtr.Orders;

	    DimOrd.Move(0, DimOrd.Count - 1);

	    MObj.Save;

	End Sub UserProc;


После выполнения примера первый атрибут в списке сортировки будет перемещен
 на последнюю позицию.


См. также:


[IUserDimOrders](IUserDimOrders.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
