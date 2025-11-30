# IStdDimOrders.Move

IStdDimOrders.Move
-


# IStdDimOrders.Move


## Синтаксис


Move(IndexFrom: Integer; IndexTo: Integer);


## Параметры


IndexFrom. Индекс
 позиции атрибута, который необходимо переместить.


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

	    Dimens: IStandardDimension;

	    DimAttrs: IStandardDimAttributes;

	    DimOrd: IStdDimOrders;

	Begin

	    MB := MetabaseClass.Active;

	    MObj := MB.ItemById("TAB_DIM").Edit;

	    Dimens := MObj As IStandardDimension;

	    DimAttrs := Dimens.Attributes;

	    DimOrd := DimAttrs.Orders;

	    DimOrd.Move(0, DimOrd.Count - 1);

	    MObj.Save;

	End Sub UserProc;


После выполнения примера первый атрибут в списке сортировки будет перемещен
 на последнюю позицию.


См. также:


[IStdDimOrders](IStdDimOrders.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
