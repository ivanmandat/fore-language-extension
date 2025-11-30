# IDimElementGroup.Item

IDimElementGroup.Item
-


# IDimElementGroup.Item


## Синтаксис


Item(Index: Integer): [IDimElementGroupPrimitive](../IDimElementGroupPrimitive/IDimElementGroupPrimitive.htm);


## Параметры


Index. Индекс примитива группы элементов.


## Описание


Свойство Item возвращает объект, содержащий примитив группы элементов.


## Пример


	Sub Main;

	Var

	    MB: IMetabase;

	    ElemGroup: IDimElementGroup;

	    ElemGroupPrim: IDimElementGroupPrimitive;

	    i: Integer;

	Begin

	    MB:=MetabaseClass.Active;

	    If MB.ItemById("D_TO").Children.Count<>0 Then

	        ElemGroup:=MB.ItemById("D_TO").Children.Item(0).Bind As IDimElementGroup;

	        ElemGroupPrim:=ElemGroup.Item(0);

	        i:=ElemGroupPrim.Selection.SelectedCount;

	    End If;

	End Sub Main;


После выполнения примера в переменной «i» будет содержаться количество элементов в отметке первого примитива первой группы элементов справочника.


См. также:


[IDimElementGroup](IDimElementGroup.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
