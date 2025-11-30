# IUserDimAttributes.Count

IUserDimAttributes.Count
-


# IUserDimAttributes.Count


## Синтаксис


Count: Integer;


## Описание


Свойство Count возвращает количество
 атрибутов вычисляемого справочника.


## Пример


	Sub UserProc;

	Var

	    MB: IMetabase;

	    UsDim: IUserDimension;

	    UsDimAtr: IUserDimAttributes;

	    i: Integer;

	Begin

	    MB:=MetabaseClass.Active;

	    UsDim:=MB.ItemById("USER_DIM").Bind As IUserDimension;

	    UsDimAtr:=UsDim.Attributes;

	    i:=UsDimAtr.Count;

	End Sub UserProc;


После выполнения примера в переменной «i» будет содержаться количество
 атрибутов вычисляемого справочника. Идентификатор справочника - «USER_DIM».


См. также:


[IUserDimAttributes](IUserDimAttributes.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
