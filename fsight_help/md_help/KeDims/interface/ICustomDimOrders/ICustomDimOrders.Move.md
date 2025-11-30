# ICustomDimOrders.Move

ICustomDimOrders.Move
-


# ICustomDimOrders.Move


## Синтаксис


Move(IndexFrom: Integer; IndexTo: Integer);


## Параметры


IndexFrom. Индекс позиции атрибута,
 который необходимо переместить.


IndexTo. Индекс позиции, в
 которую необходимо переместить атрибут.


## Описание


Метод Move осуществляет перемещение
 атрибутов в списке сортировки, изменяя тем самым приоритет сортировки
 по какому-либо атрибуту.


## Пример


	Sub UserProc;

	Var

	    MB: IMetabase;

	    MObj: IMetabaseObject;

	    Cube: IStandardCube;

	    CustDim: ICustomDimension;

	    CustAtrs: ICustomDimAttributes;

	    CustDimOrd: ICustomDimOrders;

	Begin

	    MB := MetabaseClass.Active;

	    MObj := MB.ItemById("CUBE_SEP1").Edit;

	    Cube := MObj As IStandardCube;

	    CustDim := Cube.FactDimension.Dimension As ICustomDimension;

	    CustAtrs := CustDim.Attributes;

	    CustDimOrd := CustAtrs.Orders;

	    CustDimOrd.Move(0, CustDimOrd.Count - 1);

	    MObj.Save;

	End Sub UserProc;


После выполнения примера первый атрибут в списке сортировки будет перемещен
 на последнюю позицию.


См. также:


[ICustomDimOrders](ICustomDimOrders.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
