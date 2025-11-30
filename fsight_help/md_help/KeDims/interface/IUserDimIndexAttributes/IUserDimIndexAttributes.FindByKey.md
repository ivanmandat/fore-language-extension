# IUserDimIndexAttributes.FindByKey

IUserDimIndexAttributes.FindByKey
-


# IUserDimIndexAttributes.FindByKey


## Синтаксис


FindByKey(AttributeKey: Integer): [IUserDimAttribute](../IUserDimAttribute/IUserDimAttribute.htm);


## Параметры


AttributeKey. Ключ
 атрибута, по которому осуществляется поиск.


## Описание


Метод FindByKey осуществляет
 поиск и возвращает объект, содержащий атрибут вычисялемого справочника,
 по которому создан индекс. Ключ атрибута, по которому осуществляется поиск,
 передается посредством параметра AttributeKey.


## Пример


	Sub UserProc;

	Var

	    MB: IMetabase;

	    UsDim: IUserDimension;

	    UsDimInds: IUserDimIndexes;

	    UsDimIndex: IUserDimIndex;

	    IndexAtr: IUserDimIndexAttributes;

	    UsDimAtr: IUserDimAttribute;

	    s: String;

	Begin

	    MB:=MetabaseClass.Active;

	    UsDim:=MB.ItemById("USER_DIM").Bind As IUserDimension;

	    UsDimInds:=UsDim.Indexes;

	    If UsDimInds.Count<>0 Then

	        UsDimIndex:=UsDimInds.Item(0);

	        IndexAtr:=UsDimIndex.Attributes;

	        UsDimAtr:=IndexAtr.FindByKey(5228);

	        If UsDimAtr<>Null Then

	            s:=UsDimAtr.Name;

	        End If;

	    End If;

	End Sub UserProc;


После выполнения примера будет осуществлен поиск атрибута с ключом «5228»,
 по которому создан индекс. В случае удачного поиска в переменной «s» будет
 содержаться наименование этого атрибута. Идентификатор вычисляемого справочника
 - USER_DIM.


См. также:


[IUserDimIndexAttributes](IUserDimIndexAttributes.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
