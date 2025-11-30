# IDimLevelSelectionPrimitive.Included

IDimLevelSelectionPrimitive.Included
-


# IDimLevelSelectionPrimitive.Included


## Синтаксис


Included(Level: [IDimLevel](../IDimLevel/IDimLevel.htm)):
 Boolean;


## Описание


Свойство Included определяет,
 будут ли отмечаться/сниматься элементы уровня справочника, передаваемого
 посредством параметра Level.


## Пример


	Sub UserProc;

	Var

	    MB: IMetabase;

	    Mobj: IMetabaseObject;

	    ObjDesc: IMetabaseObjectDescriptor;

	    DimSelSchema: IDimSelectionSchema;

	    SchemaPrimit: IDimSelectionSchemaPrimitive;

	Begin

	    MB:=MetabaseClass.Active;

	    ObjDesc:=MB.ItemById("TAB_DIM");

	    If ObjDesc.Children.Count<>0 Then

	        If ObjDesc.Children.Item(0).ClassId=MetabaseObjectClass.KE_CLASS_DIMSELECTIONSCHEMA Then

	            Mobj:=ObjDesc.Children.Item(0).Edit;

	            DimSelSchema:=Mobj As IDimSelectionSchema;

	            DimSelSchema.Clear;

	            SchemaPrimit:=DimSelSchema.Add(SelectionPrimitiveType.Level);

	            (SchemaPrimit As IDimLevelSelectionPrimitive).Included(DimSelSchema.Dimension.Levels.Item(0)):=True;

	            Mobj.Save;

	        End If;

	    End If;

	End Sub UserProc;


После выполнения примера в схему отметки справочника будет добавлен
 примитив, отмечающий элементы уровня. При построении схемы отметки будут
 отмечаться элементы первого уровня справочника. Идентификатор справочника
 - «TAB_DIM».


См. также:


[IDimLevelSelectionPrimitive](IDimLevelSelectionPrimitive.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
