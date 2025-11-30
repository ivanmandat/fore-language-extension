# IUserDimIndexes.PrimaryIndex

IUserDimIndexes.PrimaryIndex
-


# IUserDimIndexes.PrimaryIndex


## Синтаксис


PrimaryIndex: [IUserDimIndex](../IUserDimIndex/IUserDimIndex.htm);


## Описание


Свойство PrimaryIndex возвращает
 объект, содержащий первичный индекс вычисляемого справочника.


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

	        UsDimIndex:=UsDimInds.PrimaryIndex;

	        If UsDimIndex<>Null Then

	            s:=UsDimIndex.Name;

	        End If;

	    End If;

	End Sub UserProc;


После выполнения примера в переменной «s» будет содержаться идентификатор
 первичного индекса справочника, если он существует. Идентификатор вычисляемого
 справочника - USER_DIM.


См. также:


[IUserDimIndexes](IUserDimIndexes.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
