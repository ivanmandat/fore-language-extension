# IUserDimAttributes.RemoveByKey

IUserDimAttributes.RemoveByKey
-


# IUserDimAttributes.RemoveByKey


## Синтаксис


RemoveByKey(AttributeKey: Integer): Boolean;


## Параметры


AttributeKey. Ключ
 атрибута.


## Описание


Метод RemoveByKey осуществляет
 удаление атрибута, ключ которого передается посредством параметра AttributeKey.


## Пример


	Sub UserProc;

	Var

	    MB: IMetabase;

	    MObj: IMetabaseObject;

	    UsDim: IUserDimension;

	    UsDimAts: IUserDimAttributes;

	    s: String;

	Begin

	    MB:=MetabaseClass.Active;

	    MObj:=MB.ItemById("USER_DIM").Edit;

	    UsDim:=MObj As IUserDimension;

	    UsDimAts:=UsDim.Attributes;

	    If UsDimAts.RemoveByKey(5253) Then

	        s:="Removed";

	    Else

	        s:="It is not removed";

	    End If;

	    MObj.Save;

	End Sub UserProc;


После выполнения примера в переменной «s» будет содержаться «Removed»
 если удаление атрибута вычисляемого справочника с ключом «5253» прошло
 удачно. Идентификатор вычисляемого справочника - USER_DIM.


См. также:


[IUserDimAttributes](IUserDimAttributes.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
