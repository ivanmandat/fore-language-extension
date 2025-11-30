# IUserDimOrders.Delete

IUserDimOrders.Delete
-


# IUserDimOrders.Delete


## Синтаксис


Delete(Index: Integer): Boolean;


## Параметры


Index. Индекс атрибута в списке
 сортировки.


## Описание


Метод Delete осуществляет удаление
 атрибута, индекс которого передается посредством параметра Index,
 из списка сортировки вычисляемого справочника, и возвращает True
 в случае удачного удаления.


## Пример


	Sub UserProc;

	Var

	    MB: IMetabase;

	    MObj: IMetabaseObject;

	    UsDim: IUserDimension;

	    UsDimAtr: IUserDimAttributes;

	    DimOrd: IUserDimOrders;

	    s: String;

	Begin

	    MB := MetabaseClass.Active;

	    MObj := MB.ItemById("USER_DIM").Edit;

	    UsDim := MObj As IUserDimension;

	    UsDimAtr := UsDim.Attributes;

	    DimOrd := UsDimAtr.Orders;

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


[IUserDimOrders](IUserDimOrders.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
