# IDimElementGroup.Selection

IDimElementGroup.Selection
-


# IDimElementGroup.Selection


## Синтаксис


Selection: [IDimSelection](../IDimSelection/IDimSelection.htm);


## Описание


Свойство Selection возвращает объект, содержащий отметку группы элементов справочника.


## Пример


	Sub UserProc;

	Var

	    MB: IMetabase;

	    ElemGroup: IDimElementGroup;

	    Sel: IDimSelection;

	    i: Integer;

	Begin

	    MB:=MetabaseClass.Active;

	    If MB.ItemById("D_TO").Children.Count<>0 Then

	        ElemGroup:=MB.ItemById("D_TO").Children.Item(0).Bind As IDimElementGroup;

	        Sel:=ElemGroup.Selection;

	        i:=Sel.SelectedCount;

	    End If;

	End Sub UserProc;


После выполнения примера в переменной «i» будет содержаться количество выделенных элементов в отметке первой группы элементов справочника.


См. также:


[IDimElementGroup](IDimElementGroup.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
