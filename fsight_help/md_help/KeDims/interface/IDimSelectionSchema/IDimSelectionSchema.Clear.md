# IDimSelectionSchema.Clear

IDimSelectionSchema.Clear
-


# IDimSelectionSchema.Clear


## Синтаксис


Clear;


## Описание


Метод Clear осуществляет удаление
 всех примитивов из схемы отметки справочника.


## Пример


	Sub UserProc;

	Var

	    MB: IMetabase;

	    ObjDesc: IMetabaseObjectDescriptor;

	    DimSelSchema: IDimSelectionSchema;

	    MObj: IMetabaseObject;

	Begin

	    MB:=MetabaseClass.Active;

	    ObjDesc:=MB.ItemById("TAB_DIM");

	    If ObjDesc.Children.Count<>0 Then

	        If ObjDesc.Children.Item(0).ClassId=1030 Then

	            MObj:=ObjDesc.Children.Item(0).Edit;

	            DimSelSchema:=MObj As IDimSelectionSchema;

	            DimSelSchema.Clear;

	            MObj.Save;

	        End If;

	    End If;

	End Sub UserProc;


После выполнения примера буду удалены все примитивы первой схемы отметки
 справочника. Идентификатор справочника - «TAB_DIM».


См. также:


[IDimSelectionSchema](IDimSelectionSchema.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
