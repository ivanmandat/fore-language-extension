# IDimOrders.Delete

IDimOrders.Delete
-


# IDimOrders.Delete


## Синтаксис


Delete(Index: Integer): Boolean;


## Параметры


Index - индекс атрибута в списке
 сортировки.


## Описание


Метод Delete осуществляет удаление
 атрибута, индекс которого передается посредством параметра Index,
 из списка сортировки справочника, и возвращает True
 в случае удачного удаления.


## Пример


	Sub UserProc;

	Var

	    MB: IMetabase;

	    MObj: IMetabaseObject;

	    DimModel: IDimensionModel;

	    DimAttrs: IDimAttributes;

	    DimOrd: IDimOrders;

	    s: String;

	Begin

	    MB := MetabaseClass.Active;

	    MObj := MB.ItemById("D_TO").Edit;

	    DimModel := MObj As IDimensionModel;

	    DimAttrs := DimModel.Attributes;

	    DimOrd := DimAttrs.Orders;

	    If DimOrd.Delete(DimOrd.Count - 1) Then

	        s := "Yes";

	    Else

	        s := "No";

	    End If;

	    MObj.Save;

	End Sub UserProc;


После выполнения примера в переменной "s" будет содержаться
 "Yes" если удаление последнего атрибута из списка сортировки
 прошло удачно.


См. также:


[IDimOrders](IDimOrders.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
