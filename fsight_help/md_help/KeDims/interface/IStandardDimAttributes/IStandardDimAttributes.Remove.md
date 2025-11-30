# IStandardDimAttributes.Remove

IStandardDimAttributes.Remove
-


# IStandardDimAttributes.Remove


## Синтаксис


Remove(Index: Variant): Boolean;


## Параметры


Index — индекс
 атрибута.


## Описание


Метод Remove осуществляет удаление
 атрибута табличного справочника и возвращает True
 в случае удачного удаления. Индекс атрибута передается посредством параметра
 Index.


## Пример


	Sub UserProc;

	Var

	    MB: IMetabase;

	    MObj: IMetabaseObject;

	    Dimens: IStandardDimension;

	    DimAtrrs: IStandardDimAttributes;

	    s: String;

	Begin

	    MB:=MetabaseClass.Active;

	    MObj:=MB.ItemById("TAB_DIM").Edit;

	    Dimens:=MObj As IStandardDimension;

	    DimAtrrs:=Dimens.Attributes;

	    If DimAtrrs.Remove(DimAtrrs.Count-1) Then

	        s:="Removed";

	    Else

	        s:="It is not removed";

	    End If;

	    MObj.Save;

	End Sub UserProc;


После выполнения примера в переменной «s» будет содержаться «Removed»
 если удаление последнего атрибута табличного справочника прошло удачно.
 Идентификатор табличного справочника - «TAB_DIM».


См. также:


[IStandardDimAttributes](IStandardDimAttributes.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
