# IUserDimIndexes.Item

IUserDimIndexes.Item
-


# IUserDimIndexes.Item


## Синтаксис


Item(Index: Variant): [IUserDimIndex](../IUserDimIndex/IUserDimIndex.htm);


## Параметры


Index. Номер
 индекса.


## Описание


Свойство Item возвращает объект,
 содержащий индекс вычисляемого справочника.


## Пример


	Sub UserProc;

	Var

	    MB: IMetabase;

	    UsDim: IUserDimension;

	    UsDimInds: IUserDimIndexes;

	    UsDimIndex: IUserDimIndex;

	    s: String;

	Begin

	    MB:=MetabaseClass.Active;

	    UsDim:=MB.ItemById("USER_DIM").Bind As IUserDimension;

	    UsDimInds:=UsDim.Indexes;

	    If UsDimInds.Count<>0 Then

	        UsDimIndex:=UsDimInds.Item(0);

	        s:=UsDimIndex.Name;

	    End If;

	End Sub UserProc;


После выполнения примера в переменной «s» будет содержаться наименование
 первого индекса справочника, если он существует. Идентификатор вычисляемого
 справочника - USER_DIM.


См. также:


[IUserDimIndexes](IUserDimIndexes.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
