# IUserDimIndex.Unique

IUserDimIndex.Unique
-


# IUserDimIndex.Unique


## Синтаксис


Unique: Boolean;


## Описание


Свойство Unique определяет,
 является ли индекс уникальным.


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

	        If UsDimIndex.Unique Then

	            s:="Unique";

	        Else

	            s:="Not unique";

	        End If;

	    End If;

	End Sub UserProc;


После выполнения примера в переменной «s» будет содержаться «Unique»,
 если первый индекс справочника является уникальным. Идентификатор вычисляемого
 справочника - USER_DIM.


См. также:


[IUserDimIndex](IUserDimIndex.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
