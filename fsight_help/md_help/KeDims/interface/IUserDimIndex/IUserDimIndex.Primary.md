# IUserDimIndex.Primary

IUserDimIndex.Primary
-


# IUserDimIndex.Primary


## Синтаксис


Primary: Boolean;


## Описание


Свойство Primary определяет,
 является ли индекс первичным.


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

	        If UsDimIndex.Primary Then

	            s:="Primary";

	        Else

	            s:="Not primary";

	        End If;

	    End If;

	End Sub UserProc;


После выполнения примера в переменной «s» будет содержаться «Primary»,
 если первый индекс справочника является первичным. Идентификатор вычисляемого
 справочника - USER_DIM.


См. также:


[IUserDimIndex](IUserDimIndex.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
