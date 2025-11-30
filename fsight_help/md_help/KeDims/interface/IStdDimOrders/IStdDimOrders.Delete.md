# IStdDimOrders.Delete

IStdDimOrders.Delete
-


# IStdDimOrders.Delete


## Синтаксис


Delete(Index: Integer): Boolean;


## Параметры


Index. Индекс
 атрибута в списке сортировки.


## Описание


Метод Delete осуществляет удаление
 атрибута, индекс которого передается посредством параметра Index,
 из списка сортировки табличного справочника, и возвращает True
 в случае удачного удаления.


## Пример


	Sub UserProc;

	Var

	    MB: IMetabase;

	    MObj: IMetabaseObject;

	    Dimens: IStandardDimension;

	    DimAttrs: IStandardDimAttributes;

	    DimOrd: IStdDimOrders;

	    s: String;

	Begin

	    MB := MetabaseClass.Active;

	    MObj := MB.ItemById("TAB_DIM").Edit;

	    Dimens := MObj As IStandardDimension;

	    DimAttrs := Dimens.Attributes;

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


[IStdDimOrders](IStdDimOrders.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
