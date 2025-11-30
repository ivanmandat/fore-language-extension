# IDimOrders.Add

IDimOrders.Add
-


# IDimOrders.Add


## Синтаксис


Add(Attribute: [IDimAttribute](../IDimAttribute/IDimAttribute.htm);
 isReverseOrder: Boolean): Boolean;


## Параметры


Attribute - атрибут справочника,
 который необходимо добавить в список сортировки.


isReverseOrder - порядок сортировки
 по данному атрибуту, который необходимо установить.


## Описание


Метод Add осуществляет добавление
 атрибута справочника в список сортировки.


## Пример


	Sub UserProc;

	Var

	    MB: IMetabase;

	    MObj: IMetabaseObject;

	    DimModel: IDimensionModel;

	    DimAttrs: IDimAttributes;

	    DimOrd: IDimOrders;

	Begin

	    MB := MetabaseClass.Active;

	    MObj := MB.ItemById("D_TO").Edit;

	    DimModel := MObj As IDimensionModel;

	    DimAttrs := DimModel.Attributes;

	    DimOrd := DimAttrs.Orders;

	    DimOrd.Add(DimAttrs.Name, False);

	    MObj.Save;

	End Sub UserProc;


После выполнения примера в список сортировки справочника будет добавлен
 атрибут, назначение которого - Наименование. Порядок сортировки по данному
 атрибуту будет установлен по возрастанию.


См. также:


[IDimOrders](IDimOrders.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
