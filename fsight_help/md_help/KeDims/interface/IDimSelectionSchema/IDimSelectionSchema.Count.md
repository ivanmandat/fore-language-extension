# IDimSelectionSchema.Count

IDimSelectionSchema.Count
-


# IDimSelectionSchema.Count


## Синтаксис


Count: Integer;


## Описание


Свойство Count возвращает количество
 примитивов в схеме отметки справочника.


## Пример


	Sub UserProc;

	Var

	    MB: IMetabase;

	    ObjDesc: IMetabaseObjectDescriptor;

	    DimSelSchema: IDimSelectionSchema;

	    i: Integer;

	Begin

	    MB:=MetabaseClass.Active;

	    ObjDesc:=MB.ItemById("TAB_DIM");

	    If ObjDesc.Children.Count<>0 Then

	        If ObjDesc.Children.Item(0).ClassId=1030 Then

	            DimSelSchema:=ObjDesc.Children.Item(0).Bind As IDimSelectionSchema;

	            i:=DimSelSchema.Count;

	        End If;

	    End If;

	End Sub UserProc;


После выполнения примера в переменной «i» будет содержаться количество
 примитивов в первой схеме отметки справочника. Идентификатор справочника
 - «TAB_DIM».


См. также:


[IDimSelectionSchema](IDimSelectionSchema.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
