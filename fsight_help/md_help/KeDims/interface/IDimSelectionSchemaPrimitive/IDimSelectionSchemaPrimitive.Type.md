# IDimSelectionSchemaPrimitive.Type

IDimSelectionSchemaPrimitive.Type
-


# IDimSelectionSchemaPrimitive.Type


## Синтаксис


Type: [SelectionPrimitiveType](../../Enums/SelectionPrimitiveType.htm);


## Описание


Свойство Type определяет тип
 примитива схемы отметки справочника.


## Пример


	Sub UserProc;

	Var

	    MB: IMetabase;

	    ObjDesc: IMetabaseObjectDescriptor;

	    DimSelSchema: IDimSelectionSchema;

	    SchemaPrimit: IDimSelectionSchemaPrimitive;

	    i: Integer;

	Begin

	    MB:=MetabaseClass.Active;

	    ObjDesc:=MB.ItemById("TAB_DIM");

	    If ObjDesc.Children.Count<>0 Then

	        If ObjDesc.Children.Item(0).ClassId=1030 Then

	            DimSelSchema:=ObjDesc.Children.Item(0).Bind As IDimSelectionSchema;

	            SchemaPrimit:=DimSelSchema.Item(0);

	            i:=SchemaPrimit.Type;

	        End If;

	    End If;

	End Sub UserProc;


После выполнения примера в переменной «i» будет содержаться тип первого
 примитива схемы отметки. Идентификатор справочника - «TAB_DIM».


См. также:


[IDimSelectionSchemaPrimitive](IDimSelectionSchemaPrimitive.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
