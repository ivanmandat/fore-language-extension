# IDimSelectionSchemaPrimitive.Deselect

IDimSelectionSchemaPrimitive.Deselect
-


# IDimSelectionSchemaPrimitive.Deselect


## Синтаксис


Deselect: Boolean;


## Описание


Свойство Deselect определяет,
 что происходит с отметкой примитива при построении схемы отметки справочника.
 True - снимает отметку, False - устанавливает отметку.


## Пример


	Sub UserProc;

	Var

	    MB: IMetabase;

	    ObjDesc: IMetabaseObjectDescriptor;

	    DimSelSchema: IDimSelectionSchema;

	    SchemaPrimit: IDimSelectionSchemaPrimitive;

	    b: Boolean;

	Begin

	    MB:=MetabaseClass.Active;

	    ObjDesc:=MB.ItemById("TAB_DIM");

	    If ObjDesc.Children.Count<>0 Then

	        If ObjDesc.Children.Item(0).ClassId=1030 Then

	            DimSelSchema:=ObjDesc.Children.Item(0).Bind As IDimSelectionSchema;

	            SchemaPrimit:=DimSelSchema.Item(0);

	            b:=SchemaPrimit.Deselect;

	        End If;

	    End If;

	End Sub UserProc;


После выполнения примера в переменной «b» будет содержаться «True» если
 первый примитив снимает свою отметку из общей отметки схемы. Идентификатор
 справочника - «TAB_DIM».


См. также:


[IDimSelectionSchemaPrimitive](IDimSelectionSchemaPrimitive.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
