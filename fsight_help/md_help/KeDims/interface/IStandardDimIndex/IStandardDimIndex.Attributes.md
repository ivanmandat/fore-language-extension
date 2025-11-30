# IStandardDimIndex.Attributes

IStandardDimIndex.Attributes
-


# IStandardDimIndex.Attributes


## Синтаксис


Attributes: [IStandardDimIndexAttributes](../IStandardDimIndexAttributes/IStandardDimIndexAttributes.htm);


## Описание


Свойство Attributes возвращает
 объект, содержащий коллекцию атрибутов, по которым создан индекс.


## Пример


	Sub UserProc;

	Var

	    MB: IMetabase;

	    Dim: IStandardDimension;

	    DimInds: IStandardDimIndexes;

	    DimIndex: IStandardDimIndex;

	    i: Integer;

	Begin

	    MB:=MetabaseClass.Active;

	    Dim:=MB.ItemById("TAB_DIM").Bind As IStandardDimension;

	    DimInds:=Dim.Indexes;

	    If DimInds.Count<>0 Then

	        DimIndex:=DimInds.Item(0);

	        i:=DimIndex.Attributes.Count;

	    End If;

	End Sub UserProc;


После выполнений примера в переменной «i» будет содержаться количество
 атрибутов, по которым создан первый индекс справочника. Идентификатор
 табличного справочника - «TAB_DIM».


См. также:


[IStandardDimIndex](IStandardDimIndex.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
