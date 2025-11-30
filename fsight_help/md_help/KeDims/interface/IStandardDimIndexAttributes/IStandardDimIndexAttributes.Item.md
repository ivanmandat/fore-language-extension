# IStandardDimIndexAttributes.Item

IStandardDimIndexAttributes.Item
-


# IStandardDimIndexAttributes.Item


## Синтаксис


Item(Index: Variant): [IStandardDimIndexAttribute](../IStandardDimIndexAttribute/IStandardDimIndexAttribute.htm);


## Параметры


Index. Индекс атрибута.


## Описание


Свойство Item возвращает объект,
 содержащий атрибут, по которому создан индекс.


## Пример


	Sub UserProc;

	Var

	    MB: IMetabase;

	    Dim: IStandardDimension;

	    DimInds: IStandardDimIndexes;

	    DimIndex: IStandardDimIndex;

	    DimIndAttrs: IStandardDimIndexAttributes;

	    DimIndAttr: IStandardDimIndexAttribute;

	    s: String;

	Begin

	    MB:=MetabaseClass.Active;

	    Dim:=MB.ItemById("TAB_DIM").Bind As IStandardDimension;

	    DimInds:=Dim.Indexes;

	    If DimInds.Count<>0 Then

	        DimIndex:=DimInds.Item(0);

	        DimIndAttrs:=DimIndex.Attributes;

	        DimIndAttr:=DimIndAttrs.Item(0);

	        s:=DimIndAttr.Id;

	    End If;

	End Sub UserProc;


После выполнения примера в переменной «s» будет содержаться наименование
 атрибута справочника, по которому создан первый индекс. Идентификатор
 табличного справочника - «TAB_DIM».


См. также:


[IStandardDimIndexAttributes](IStandardDimIndexAttributes.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
