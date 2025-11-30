# IDimElementGroupPrimitive.Type

IDimElementGroupPrimitive.Type
-


# IDimElementGroupPrimitive.Type


## Синтаксис


Type: [SelectionGroupType](../../Enums/SelectionGroupType.htm);


## Описание


Свойство Type возвращает тип
 примитива группы элементов справочника.


## Пример


	Sub UserProc;

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

	        i:=ElemGroupPrim.Type As Integer;

	    End If;

	End Sub UserProc;


После выполнения примера в переменной «i» будет содержаться тип первого
 примитива группы элементов, преобразованный к целочисленному типу.


См. также:


[IDimElementGroupPrimitive](IDimElementGroupPrimitive.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
