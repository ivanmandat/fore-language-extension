# IDimOrders.Count

IDimOrders.Count
-


# IDimOrders.Count


## Синтаксис


Count: Integer;


## Описание


Свойство Count возвращает количество
 атрибутов, входящих в список сортировки справочника.


## Пример


	Sub UserProc;

	Var

	    MB: IMetabase;

	    DimModel: IDimensionModel;

	    DimAttrs: IDimAttributes;

	    DimOrd: IDimOrders;

	    i: Integer;

	Begin

	    MB := MetabaseClass.Active;

	    DimModel := MB.ItemById("D_TO").Bind As IDimensionModel;

	    DimAttrs := DimModel.Attributes;

	    DimOrd := DimAttrs.Orders;

	    i := DimOrd.Count;

	End Sub UserProc;


После выполнения примера в переменной "i" будет содержаться
 количество атрибутов, по которым установлена сортировка справочника.


См. также:


[IDimOrders](IDimOrders.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
