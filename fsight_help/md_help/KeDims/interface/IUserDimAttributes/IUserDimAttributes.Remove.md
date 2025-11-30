# IUserDimAttributes.Remove

IUserDimAttributes.Remove
-


# IUserDimAttributes.Remove


## Синтаксис


Remove(Index: Variant): Boolean;


## Параметры


Index. Индекс
 атрибута.


## Описание


Метод Remove осуществляет удаление
 атрибута вычисляемого справочника и возвращает True
 в случае удачного удаления. Индекс атрибута передается посредством параметра
 Index.


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

	    If UsDimAts.Remove(UsDimAts.Count-1) Then

	        s:="Removed";

	    Else

	        s:="It is not removed";

	    End If;

	    MObj.Save;

	End Sub UserProc;


После выполнения примера в переменной «s» будет содержаться «Removed»
 если удаление последнего атрибута вычисляемого справочника прошло удачно.
 Идентификатор вычисляемого справочника - USER_DIM.


См. также:


[IUserDimAttributes](IUserDimAttributes.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
