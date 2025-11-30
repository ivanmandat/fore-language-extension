# ICustomDimOrders.FindByKey

ICustomDimOrders.FindByKey
-


# ICustomDimOrders.FindByKey


## Синтаксис


FindByKey(AttributeKey: Integer): [ICustomDimOrder](../ICustomDimOrder/ICustomDimOrder.htm);


## Параметры


AttributeKey. Ключ атрибута,
 по которому осуществляется поиск.


## Описание


Метод FindByKey осуществляет
 поиск атрибута в коллекции по ключу.


## Комментарии


Метод возвращает параметры атрибута в случае удачного поиска и Null, если атрибут отсутствует в
 коллекции сортировки.


## Пример


	Sub UserProc;

	Var

	    MB: IMetabase;

	    Cube: IStandardCube;

	    CustDim: ICustomDimension;

	    CustAtrs: ICustomDimAttributes;

	    CustDimOrd: ICustomDimOrders;

	    DimOrder: ICustomDimOrder;

	    s: String;

	Begin

	    MB := MetabaseClass.Active;

	    Cube := MB.ItemById("CUBE_1").Bind As IStandardCube;

	    CustDim := Cube.FactDimension.Dimension As ICustomDimension;

	    CustAtrs := CustDim.Attributes;

	    CustDimOrd := CustAtrs.Orders;

	    DimOrder := CustDimOrd.FindByKey(CustAtrs.Name.Key);

	    If DimOrder <> Null Then

	        s := DimOrder.ReverseOrder.ToString;

	    Else

	        s := "Attribute does not fall into list of the sorting";

	    End If;

	End Sub UserProc;


После выполнения примера в списке сортировки будет осуществлен поиск
 атрибута, назначение которого - наименование, и в случае удачного поиска
 в переменной "s" будет содержаться направление сортировки по
 данному атрибуту.


См. также:


[ICustomDimOrders](ICustomDimOrders.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
