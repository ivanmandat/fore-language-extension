# IStandardDimIndex.Primary

IStandardDimIndex.Primary
-


# IStandardDimIndex.Primary


## Синтаксис


Primary: Boolean;


## Описание


Свойство Primary определяет,
 является ли индекс первичным.


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

	        If DimIndex.Primary Then

	            s:="Primary";

	        Else

	            s:="Not primary";

	        End If;

	    End If;

	End Sub UserProc;


После выполнения примера в переменной «s» будет содержаться «Primary»
 если первый индекс справочника является первичным. Идентификатор табличного
 справочника - «TAB_DIM».


См. также:


[IStandardDimIndex](IStandardDimIndex.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
