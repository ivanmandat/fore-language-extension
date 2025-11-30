# IDimElementGroup.Count

IDimElementGroup.Count
-


# IDimElementGroup.Count


## Синтаксис


Count: Integer;


## Описание


Свойство Count возвращает количество
 примитивов в группе элементов.


## Пример


	Sub UserProc;

	Var

	    MB: IMetabase;

	    ElemGroup: IDimElementGroup;

	    i: Integer;

	Begin

	    MB:=MetabaseClass.Active;

	    If MB.ItemById("D_TO").Children.Count<>0 Then

	        ElemGroup:=MB.ItemById("D_TO").Children.Item(0).Bind As IDimElementGroup;

	        i:=ElemGroup.Count;

	    End If;

	End Sub UserProc;


После выполнения примера в переменной «i» будет содержаться количество
 примитивов первой группы элементов справочника.


См. также:


[IDimElementGroup](IDimElementGroup.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
