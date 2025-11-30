# IStandardDimIndexAttributes.Count

IStandardDimIndexAttributes.Count
-


# IStandardDimIndexAttributes.Count


## Синтаксис


Count: Integer;


## Описание


Свойство Count возвращает количество
 атрибутов, по которым создан индекс табличного справочника.


## Пример


	Sub UserProc;

	Var

	    MB: IMetabase;

	    Dim: IStandardDimension;

	    DimInds: IStandardDimIndexes;

	    DimIndex: IStandardDimIndex;

	    DimIndAttrs: IStandardDimIndexAttributes;

	    i: Integer;

	Begin

	    MB:=MetabaseClass.Active;

	    Dim:=MB.ItemById("TAB_DIM").Bind As IStandardDimension;

	    DimInds:=Dim.Indexes;

	    If DimInds.Count<>0 Then

	        DimIndex:=DimInds.Item(0);

	        DimIndAttrs:=DimIndex.Attributes;

	        i:=DimIndAttrs.Count;

	    End If;

	End Sub UserProc;


После выполнения примера в переменной «i» будет содержаться количество
 атрибутов, по которым создан первый индекс справочника. Идентификатор
 табличного справочника - «TAB_DIM».


См. также:


[IStandardDimIndexAttributes](IStandardDimIndexAttributes.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
