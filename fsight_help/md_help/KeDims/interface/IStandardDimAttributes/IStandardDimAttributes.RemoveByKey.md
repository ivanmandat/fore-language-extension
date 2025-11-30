# IStandardDimAttributes.RemoveByKey

IStandardDimAttributes.RemoveByKey
-


# IStandardDimAttributes.RemoveByKey


## Синтаксис


RemoveByKey(AttributeKey: Integer): Boolean;


## Параметры


AttributeKey —
 ключ атрибута.


## Описание


Метод RemoveByKey осуществляет
 удаление атрибута, ключ которого передается посредством параметра AttributeKey.


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

	    If DimAtrrs.RemoveByKey(4796) Then

	        s:="Removed";

	    Else

	        s:="Not removed";

	    End If;

	    MObj.Save;

	End Sub UserProc;


После выполнения примера в переменной «s» будет содержаться «Removed»
 если удаление атрибута табличного справочника с ключом «4796» прошло удачно.
 Идентификатор табличного справочника - «TAB_DIM».


См. также:


[IStandardDimAttributes](IStandardDimAttributes.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
