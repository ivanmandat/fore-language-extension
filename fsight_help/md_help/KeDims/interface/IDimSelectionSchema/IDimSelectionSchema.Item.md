# IDimSelectionSchema.Item

IDimSelectionSchema.Item
-


# IDimSelectionSchema.Item


## Синтаксис


Item(Index: Integer): [IDimSelectionSchemaPrimitive](../IDimSelectionSchemaPrimitive/IDimSelectionSchemaPrimitive.htm);


## Параметры


Index —
 индекс примитива в схеме отметки.


## Описание


Свойство Item возвращает объект,
 содержащий примитив схемы отметки, индекс которого передается посредством
 параметра Index.


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
 примитива первой схемы отметки справочника. Идентификатор справочника
 - «TAB_DIM».


См. также:


[IDimSelectionSchema](IDimSelectionSchema.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
