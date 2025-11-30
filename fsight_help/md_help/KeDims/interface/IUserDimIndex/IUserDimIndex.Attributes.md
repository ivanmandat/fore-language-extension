# IUserDimIndex.Attributes

IUserDimIndex.Attributes
-


# IUserDimIndex.Attributes


## Синтаксис


Attributes: [IUserDimIndexAttributes](../IUserDimIndexAttributes/IUserDimIndexAttributes.htm);


## Описание


Свойство Attributes возвращает
 объект, содержащий коллекцию атрибутов, по которым создан индекс.


## Пример


	Sub UserProc;

	Var

	    MB: IMetabase;

	    UsDim: IUserDimension;

	    UsDimInds: IUserDimIndexes;

	    UsDimIndex: IUserDimIndex;

	    i: Integer;

	Begin

	    MB:=MetabaseClass.Active;

	    UsDim:=MB.ItemById("USER_DIM").Bind As IUserDimension;

	    UsDimInds:=UsDim.Indexes;

	    If UsDimInds.Count<>0 Then

	        UsDimIndex:=UsDimInds.Item(0);

	        i:=UsDimIndex.Attributes.Count;

	    End If;

	End Sub UserProc;


После выполнений примера в переменной «i» будет содержаться количество
 атрибутов, по которым создан первый индекс справочника. Идентификатор
 вычисляемого справочника - USER_DIM.


См. также:


[IUserDimIndex](IUserDimIndex.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
