# ICustomDimOrders.Delete

ICustomDimOrders.Delete
-


# ICustomDimOrders.Delete


## Синтаксис


Delete(Index: Integer): Boolean;


## Параметры


Index. Индекс атрибута в списке
 сортировки.


## Описание


Метод Delete осуществляет удаление
 атрибута с указанным индексом и возвращает признак удачного удаления.


## Комменатрии


Метод возвращает значение True,
 если атрибут был удален и False,
 если удаление по каким-либо причинам невозможно.


## Пример


	Sub UserProc;

	Var

	    MB: IMetabase;

	    MObj: IMetabaseObject;

	    Cube: IStandardCube;

	    CustDim: ICustomDimension;

	    CustAtrs: ICustomDimAttributes;

	    CustDimOrd: ICustomDimOrders;

	    s: String;

	Begin

	    MB := MetabaseClass.Active;

	    MObj := MB.ItemById("CUBE_SEP1").Edit;

	    Cube := MObj As IStandardCube;

	    CustDim := Cube.FactDimension.Dimension As ICustomDimension;

	    CustAtrs := CustDim.Attributes;

	    CustDimOrd := CustAtrs.Orders;

	    If CustDimOrd.Delete(CustDimOrd.Count - 1) Then

	        s := "Yes";

	    Else

	        s := "No";

	    End If;

	    MObj.Save;

	End Sub UserProc;


После выполнения примера в переменной "s" будет содержаться
 "Yes", если удаление последнего атрибута из списка сортировки
 прошло удачно.


См. также:


[ICustomDimOrders](ICustomDimOrders.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
