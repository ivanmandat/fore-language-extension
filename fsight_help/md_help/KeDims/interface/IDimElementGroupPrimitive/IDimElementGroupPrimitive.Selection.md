# IDimElementGroupPrimitive.Selection

IDimElementGroupPrimitive.Selection
-


# IDimElementGroupPrimitive.Selection


## Синтаксис


Selection: [IDimSelection](../IDimSelection/IDimSelection.htm);


## Описание


Свойство Selection определяет
 отметку примитива группы элементов справочника.


## Пример


	Sub UserProc;

	Var

	    MB: IMetabase;

	    MObjDesc: IMetabaseObjectDescriptor;

	    MObj: IMetabaseObject;

	    ElemGroup: IDimElementGroup;

	    ElemGroupPrim: IDimElementGroupPrimitive;

	Begin

	    MB:=MetabaseClass.Active;

	    If MB.ItemById("D_TO").Children.Count<>0 Then

	        MObjDesc:=MB.ItemById("D_TO");

	        MObj:=MObjDesc.Children.Item(0).Edit;

	        ElemGroup:=MObj As IDimElementGroup;

	        ElemGroupPrim:=ElemGroup.Item(0);

	        ElemGroupPrim.Selection.InvertAll;

	        MObj.Save;

	    End If;

	End Sub UserProc;


После выполнения примера будет инвертирована отметка первого примитива
 группы элементов.


См. также:


[IDimElementGroupPrimitive](IDimElementGroupPrimitive.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
