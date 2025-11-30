# IDimChildrenSelectionPrimitive.Selection

IDimChildrenSelectionPrimitive.Selection
-


# IDimChildrenSelectionPrimitive.Selection


## Синтаксис


Selection: [IDimSelection](../IDimSelection/IDimSelection.htm);


## Описание


Свойство Selection определяет
 отметку элементов примитива, которую необходимо установить/снять при построении
 схемы отметки справочника.


## Пример


	Sub Main;

	Var

	    MB: IMetabase;

	    Mobj: IMetabaseObject;

	    ObjDesc: IMetabaseObjectDescriptor;

	    DimSelSchema: IDimSelectionSchema;

	    SchemaPrimit: IDimSelectionSchemaPrimitive;

	Begin

	    MB := MetabaseClass.Active;

	    ObjDesc := MB.ItemById("TAB_DIM");

	    If ObjDesc.Children.Count <> 0 Then

	        If ObjDesc.Children.Item(0).ClassId = MetabaseObjectClass.KE_CLASS_DIMSELECTIONSCHEMA Then

	            Mobj := ObjDesc.Children.Item(0).Edit;

	            DimSelSchema := Mobj As IDimSelectionSchema;

	            SchemaPrimit := DimSelSchema.Add(SelectionPrimitiveType.SpecifiedChildren);

	            (SchemaPrimit As IDimChildrenSelectionPrimitive).Selection.SelectElement(1, True);

	            Mobj.Save;

	        End If;

	    End If;

	End Sub Main;


После выполнения примера в схему отметки справочника будет добавлен
 примитив, отмечающий дочерние элементы. В отметку примитива будет добавлен
 второй элемент справочника. При построении схемы отметки будет отмечаться
 второй элемент и все его дочерние элементы. Идентификатор справочника
 - «TAB_DIM».


См. также:


[IDimChildrenSelectionPrimitive](IDimChildrenSelectionPrimitive.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
