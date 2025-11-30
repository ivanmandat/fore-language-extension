# IStandardDimAttributes.Orders

IStandardDimAttributes.Orders
-


# IStandardDimAttributes.Orders


## Синтаксис


Orders: [IStdDimOrders](../IStdDimOrders/IStdDimOrders.htm);


## Описание


Свойство Orders возвращает коллекцию
 атрибутов, по которым будет производиться сортировка табличного справочника.


## Пример


	Sub UserProc;

	Var

	    MB: IMetabase;

	    Dimens: IStandardDimension;

	    DimAttrs: IStandardDimAttributes;

	    DimOrd: IStdDimOrders;

	    i: Integer;

	Begin

	    MB := MetabaseClass.Active;

	    Dimens := MB.ItemById("TAB_DIM").Bind As IStandardDimension;

	    DimAttrs := Dimens.Attributes;

	    DimOrd := DimAttrs.Orders;

	    i := DimOrd.Count;

	End Sub UserProc;


После выполнения примера в переменной "i" будет содержаться
 количество атрибутов, по которым установлена сортировка табличного справочника.


См. также:


[IStandardDimAttributes](IStandardDimAttributes.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
