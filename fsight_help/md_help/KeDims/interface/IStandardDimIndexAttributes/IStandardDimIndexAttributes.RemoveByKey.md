# IStandardDimIndexAttributes.RemoveByKey

IStandardDimIndexAttributes.RemoveByKey
-


# IStandardDimIndexAttributes.RemoveByKey


## Синтаксис


RemoveByKey(AttributeKey: Integer): Boolean;


## Параметры


AttributeKey.Ключ атрибута.


## Описание


Метод RemoveByKey осуществляет
 удаление атрибута справочника из индекса по ключу, передаваемому посредством
 параметра AttributeKey, и возвращает
 True в случае удачного удаления.


## Пример


	Sub UserProc;

	Var

	    MB: IMetabase;

	    MObj: IMetabaseObject;

	    Dim: IStandardDimension;

	    DimInds: IStandardDimIndexes;

	    DimIndex: IStandardDimIndex;

	    DimIndAttrs: IStandardDimIndexAttributes;

	    s: String;

	Begin

	    MB:=MetabaseClass.Active;

	    MObj:=MB.ItemById("TAB_DIM").Edit;

	    Dim:=MObj As IStandardDimension;

	    DimInds:=Dim.Indexes;

	    If DimInds.Count<>0 Then

	        DimIndex:=DimInds.Item(0);

	        DimIndAttrs:=DimIndex.Attributes;

	        If DimIndAttrs.RemoveByKey(4891) Then

	            s:="Remove";

	        Else

	            s:="Not remove";

	        End If;

	    End If;

	    MObj.Save;

	End Sub UserProc;


После выполнения примера в переменной «s» будет содержаться «Remove»
 если удаление атрибта с ключом «4891» из первого индекса справочника,
 прошло удачно. Идентификатор табличного справочника - «TAB_DIM».


См. также:


[IStandardDimIndexAttributes](IStandardDimIndexAttributes.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
