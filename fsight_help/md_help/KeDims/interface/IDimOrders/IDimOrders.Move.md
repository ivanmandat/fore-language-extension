# IDimOrders.Move

IDimOrders.Move
-


# IDimOrders.Move


## Синтаксис


Move(IndexFrom: Integer; IndexTo: Integer);


## Параметры


IndexFrom - индекс позиции
 атрибута, который необходимо переместить.


IndexTo - индекс позиции, в
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

	    DimModel: IDimensionModel;

	    DimAttrs: IDimAttributes;

	    DimOrd: IDimOrders;

	Begin

	    MB := MetabaseClass.Active;

	    MObj := MB.ItemById("D_TO").Edit;

	    DimModel := MObj As IDimensionModel;

	    DimAttrs := DimModel.Attributes;

	    DimOrd := DimAttrs.Orders;

	    DimOrd.Move(0, DimOrd.Count - 1);

	    MObj.Save;

	End Sub UserProc;


После выполнения примера первый атрибут в списке сортировки будет перемещен
 на последнюю позицию.


См. также:


[IDimOrders](IDimOrders.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
