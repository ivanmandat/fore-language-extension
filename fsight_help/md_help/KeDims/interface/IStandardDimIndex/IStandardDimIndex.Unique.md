# IStandardDimIndex.Unique

IStandardDimIndex.Unique
-


# IStandardDimIndex.Unique


## Синтаксис


Unique: Boolean;


## Описание


Свойство Unique определяет,
 является ли индекс уникальным.


## Пример


	Sub UserProc;

	Var

	    MB: IMetabase;

	    Dim: IStandardDimension;

	    DimInds: IStandardDimIndexes;

	    DimIndex: IStandardDimIndex;

	    s: String;

	Begin

	    MB:=MetabaseClass.Active;

	    Dim:=MB.ItemById("TAB_DIM").Bind As IStandardDimension;

	    DimInds:=Dim.Indexes;

	    If DimInds.Count<>0 Then

	        DimIndex:=DimInds.Item(0);

	        If DimIndex.Unique Then

	            s:="Unique";

	        Else

	            s:="Not unique";

	        End If;

	    End If;

	End Sub UserProc;


После выполнения примера в переменной «s» будет содержаться «Unique»
 если первый индекс справочника является уникальным. Идентификатор табличного
 справочника - «TAB_DIM».


См. также:


[IStandardDimIndex](IStandardDimIndex.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
