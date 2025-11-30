# IDimSelectionSchema.MoveUp

IDimSelectionSchema.MoveUp
-


# IDimSelectionSchema.MoveUp


## Синтаксис


MoveUp(Index: Integer);


## Параметры


Index — индекс
 примитива.


## Описание


Метод MoveUp осуществляет перемещение
 примитива, индекс которого передается посредством параметра Index,
 на одну позицию вверх.


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

	            DimSelSchema.MoveUp(DimSelSchema.Count-1);

	            MObj.Save;

	        End If;

	    End If;

	End Sub UserProc;


После выполнения примера последний примитив первой схемы отметки справочника,
 будет перемещен на одну позицию вверх. Идентификатор справочника - «TAB_DIM».


См. также:


[IDimSelectionSchema](IDimSelectionSchema.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
