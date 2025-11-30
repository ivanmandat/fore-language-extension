# IStandardDimIndexAttributes.FindByKey

IStandardDimIndexAttributes.FindByKey
-


# IStandardDimIndexAttributes.FindByKey


## Синтаксис


FindByKey(AttributeKey: Integer): [IStandardDimIndexAttribute](../IStandardDimIndexAttribute/IStandardDimIndexAttribute.htm);


## Параметры


AttributeKey. Ключ атрибута, по которому осуществляется
 поиск.


## Описание


Метод FindByKey осуществляет
 поиск атрибута справочника, по которому создан индекс. Поиск осуществляется
 по ключу, передаваемому посредством параметра AttributeKey.


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

	        DimIndAttr:=DimIndAttrs.FindByKey(Dim.Attributes.Name.Key);

	        If DimIndAttr<>Null Then

	            s:=DimIndAttr.Id;

	        Else

	            s:="It is not found";

	        End If;

	    End If;

	End Sub UserProc;


После выполнения примера будет осуществлен поиск атрибута, назначение
 которого - Наименование, по первому индексу справочника. В случае удачного
 поиска в переменной «s» будет содержаться наименование этого атрибута.
 Идентификатор табличного справочника - «TAB_DIM».


См. также:


[IStandardDimIndexAttributes](IStandardDimIndexAttributes.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
