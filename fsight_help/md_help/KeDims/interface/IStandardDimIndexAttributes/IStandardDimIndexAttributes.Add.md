# IStandardDimIndexAttributes.Add

IStandardDimIndexAttributes.Add
-


# IStandardDimIndexAttributes.Add


## Синтаксис


Add(Value: [IStandardDimAttribute](../IStandardDimAttribute/IStandardDimAttribute.htm));


## Параметры


Value. Атрибут справочника, который необходимо
 добавить в индекс.


## Описание


Метод Add осуществляет добавление
 атрибута справочника, передаваемого посредством параметра Value,
 в индекс.


## Пример


	Sub UserProc;

	Var

	    MB: IMetabase;

	    MObj: IMetabaseObject;

	    Dim: IStandardDimension;

	    DimInds: IStandardDimIndexes;

	    DimIndex: IStandardDimIndex;

	    DimIndAttrs: IStandardDimIndexAttributes;

	Begin

	    MB:=MetabaseClass.Active;

	    MObj:=MB.ItemById("TAB_DIM").Edit;

	    Dim:=MObj As IStandardDimension;

	    DimInds:=Dim.Indexes;

	    If DimInds.Count<>0 Then

	        DimIndex:=DimInds.Item(0);

	        DimIndAttrs:=DimIndex.Attributes;

	        DimIndAttrs.Add(Dim.Attributes.Item(Dim.Attributes.Count-1));

	    End If;

	    MObj.Save;

	End Sub UserProc;


После выполнения примера в первый индекс справочника, если он существует,
 будет добавлен последний атрибут справочника. Идентификатор табличного
 справочника - «TAB_DIM».


См. также:


[IStandardDimIndexAttributes](IStandardDimIndexAttributes.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
