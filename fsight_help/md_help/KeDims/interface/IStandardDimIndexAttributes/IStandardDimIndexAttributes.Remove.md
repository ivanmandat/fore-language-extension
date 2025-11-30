# IStandardDimIndexAttributes.Remove

IStandardDimIndexAttributes.Remove
-


# IStandardDimIndexAttributes.Remove


## Синтаксис


Remove(Value: [IStandardDimAttribute](../IStandardDimAttribute/IStandardDimAttribute.htm));


## Параметры


Value. Атрибут справочника, который необходимо
 удалить из индекса.


## Описание


Метод Remove осуществляет удаление
 атрибута из индекса справочника. Атрибут передается посредством параметра
 Value.


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

	        DimIndAttrs.Remove(DimIndAttrs.Item(DimIndAttrs.Count-1));

	    End If;

	    MObj.Save;

	End Sub UserProc;


После выполнения примера из первого индекса будет удален последний,
 содержащийся в нем, атрибут. Идентификатор табличного справочника - «TAB_DIM».


См. также:


[IStandardDimIndexAttributes](IStandardDimIndexAttributes.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
