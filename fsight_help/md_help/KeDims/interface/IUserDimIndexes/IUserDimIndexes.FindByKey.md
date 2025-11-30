# IUserDimIndexes.FindByKey

IUserDimIndexes.FindByKey
-


# IUserDimIndexes.FindByKey


## Синтаксис


FindByKey(IndexKey: Integer): [IUserDimIndex](../IUserDimIndex/IUserDimIndex.htm);


## Параметры


IndexKey. Ключ
 индекса, по которому осуществляется поиск.


## Описание


Метод FindByKey осуществляет
 поиск и возвращает объект, содержащий индекс вычисляемого справочника.
 Поиск осуществляется по ключу, передаваемому посредством параметра IndexKey.


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

	        UsDimIndex:=UsDimInds.FindByKey(5320);

	        If UsDimIndex<>Null Then

	            s:=UsDimIndex.Name;

	        End If;

	    End If;

	End Sub UserProc;


После выполнения примера будет осуществлен поиск индекса с ключом «5320»
 и в случае удачного поиска в переменной «s» будет содержаться наименование
 найденного индекса справочника. Идентификатор вычисляемого справочника
 - USER_DIM.


См. также:


[IUserDimIndexes](IUserDimIndexes.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
