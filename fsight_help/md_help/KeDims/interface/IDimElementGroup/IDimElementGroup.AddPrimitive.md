# IDimElementGroup.AddPrimitive

IDimElementGroup.AddPrimitive
-


# IDimElementGroup.AddPrimitive


## Синтаксис


AddPrimitive(primitiveType: [SelectionGroupType](../../Enums/SelectionGroupType.htm)): [IDimElementGroupPrimitive](../IDimElementGroupPrimitive/IDimElementGroupPrimitive.htm);


## Параметры


primitiveType. Тип примитива, который необходимо добавить.


## Описание


Метод AddPrimitive позволяет добавлять к группе элементов справочника примитивы.


## Пример


	Sub UserProc;

	Var

	    MB: IMetabase;

	    MObjDesc: IMetabaseObjectDescriptor;

	    MObj: IMetabaseObject;

	    ElemGroup: IDimElementGroup;

	    ElemGroupPrim: IDimElementGroupPrimitive;

	    Sel: IDimSelection;

	Begin

	    MB := MetabaseClass.Active;

	    MObjDesc := MB.ItemById("D_TO");

	    If MObjDesc.Children.Count <> 0 Then

	        MObj := MObjDesc.Children.Item(0).Edit;

	        ElemGroup := MObj As IDimElementGroup;

	        ElemGroupPrim := ElemGroup.AddPrimitive(SelectionGroupType.List);

	        Sel := ElemGroupPrim.Selection;

	        Sel.SelectElement(0, False);

	        Sel.SelectElement(3, False);

	        Sel.SelectElement(5, False);

	        Sel.SelectElement(10, False);

	        MObj.Save;

	    End If;

	End Sub UserProc;


После выполнения примера будет добавлен примитив в первую группу элементов справочника.


См. также:


[IDimElementGroup](IDimElementGroup.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
