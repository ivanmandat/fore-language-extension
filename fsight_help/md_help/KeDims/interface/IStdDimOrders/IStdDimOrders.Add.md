# IStdDimOrders.Add

IStdDimOrders.Add
-


# IStdDimOrders.Add


## Синтаксис


Add(Attribute: [IStandardDimAttribute](../IStandardDimAttribute/IStandardDimAttribute.htm);
 isReverseOrder: Boolean): Boolean;


## Параметры


Attribute. Атрибут справочника,
 который необходимо добавить в список сортировки.


isReverseOrder. Порядок
 сортировки, который будет установлен по указанному атрибуту. Если передается
 значения True, то сортировка будет
 установлена убыванию. Если передается значение False,
 то сортировка будет установлена возрастанию.


## Описание


Метод Add осуществляет добавление
 атрибута табличного справочника в список сортировки.


Метод возвращает значение True,
 если атрибут был добавлен в список сортировки, и False,
 если добавление не произошло.


## Пример


	Sub UserProc;

	Var

	    MB: IMetabase;

	    MObj: IMetabaseObject;

	    Dimens: IStandardDimension;

	    DimAttrs: IStandardDimAttributes;

	    DimOrd: IStdDimOrders;

	Begin

	    MB := MetabaseClass.Active;

	    MObj := MB.ItemById("TAB_DIM").Edit;

	    Dimens := MObj As IStandardDimension;

	    DimAttrs := Dimens.Attributes;

	    DimOrd := DimAttrs.Orders;

	    DimOrd.Add(DimAttrs.Name, False);

	    MObj.Save;

	End Sub UserProc;


После выполнения примера в список сортировки табличного справочника
 будет добавлен атрибут, назначение которого - Наименование. Порядок сортировки
 по данному атрибуту будет установлен по возрастанию.


См. также:


[IStdDimOrders](IStdDimOrders.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
