# IUserDimOrders.Add

IUserDimOrders.Add
-


# IUserDimOrders.Add


## Синтаксис


Add(Attribute: [IUserDimAttribute](../IUserDimAttribute/IUserDimAttribute.htm);
 isReverseOrder: Boolean): Boolean;


## Параметры


Attribute. Атрибут справочника,
 который необходимо добавить в список сортировки.


isReverseOrder. Порядок сортировки
 по данному атрибуту, который необходимо установить.


## Описание


Метод Add осуществляет добавление
 атрибута справочника в список сортировки.


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

	    DimOrd.Add(UsDimAtr.Name, False);

	    MObj.Save;

	End Sub UserProc;


После выполнения примера в список сортировки справочника будет добавлен
 атрибут, назначение которого - Наименование. Порядок сортировки по данному
 атрибуту будет установлен по возрастанию.


См. также:


[IUserDimOrders](IUserDimOrders.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
