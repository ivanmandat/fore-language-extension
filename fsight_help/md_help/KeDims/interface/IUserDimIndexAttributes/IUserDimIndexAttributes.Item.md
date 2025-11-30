# IUserDimIndexAttributes.Item

IUserDimIndexAttributes.Item
-


# IUserDimIndexAttributes.Item


## Синтаксис


Item(Index: Variant): [IUserDimAttribute](../IUserDimAttribute/IUserDimAttribute.htm);


## Параметры


Index. Индекс
 атрибута.


## Описание


Свойство Item возвращает объект,
 содержащий атрибут вычисляемого справочника, по которому создан индекс.


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

	        UsDimAtr:=IndexAtr.Item(0);

	        s:=UsDimAtr.Name;

	    End If;

	End Sub UserProc;


После выполнения примера в переменной «s» будет содержаться наименование
 первого атрибута, по которому создан первый индекс справочника. Идентификатор
 вычисляемого справочника - USER_DIM.


См. также:


[IUserDimIndexAttributes](IUserDimIndexAttributes.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
