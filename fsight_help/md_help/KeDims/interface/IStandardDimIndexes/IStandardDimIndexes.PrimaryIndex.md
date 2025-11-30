# IStandardDimIndexes.PrimaryIndex

IStandardDimIndexes.PrimaryIndex
-


# IStandardDimIndexes.PrimaryIndex


## Синтаксис


PrimaryIndex: [IStandardDimIndex](../IStandardDimIndex/IStandardDimIndex.htm);


## Описание


Свойство PrimaryIndex возвращает
 первичный индекс табличного справочника.


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

	        DimIndex:=DimInds.PrimaryIndex;

	        If DimIndex<>Null Then

	            s:=DimIndex.Name;

	        End If;

	    End If;

	End Sub UserProc;


После выполнения примера в переменной «s» будет содержаться идентификатор
 первичного индекса справочника, если он существует. Идентификатор табличного
 справочника - «TAB_DIM».


См. также:


[IStandardDimIndexes](IStandardDimIndexes.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
