# IDimSelection.SelectChildren

IDimSelection.SelectChildren
-


# IDimSelection.SelectChildren


## Синтаксис


SelectChildren(Element: Integer; Recursive: Boolean);


## Параметры


Element. Индекс элемента, дочерние
 элементы которого необходимо добавить в отметку.


Recursive. Параметр, определяющий
 будут ли добавляться в отметку дочерние элементы, находящиеся на всех
 нижних уровнях.


## Описание


Метод SelectChildren осуществляет
 добавление дочерних элементов в отметку.


## Комментарии


Если в качестве значения параметра Recursive
 передается значение True,
 то добавляются все дочерние элементы на всех уровнях. Если передается
 значение False, то добавляются
 непосредственные дочерние элементы, расположенные на один уровень ниже
 элемента Element.


## Пример


	Sub UserProc;

	Var

	    MB: IMetabase;

	    Dimen: IDimInstance;

	    Selection: IDimSelection;

	Begin

	    MB:=MetabaseClass.Active;

	    Dimen:=MB.ItemById("D_TO").Open(Null) As IDimInstance;

	    Selection:=Dimen.CreateSelection;

	    Selection.SelectChildren(11,True);

	    Selection.SelectChildren(30,True);

	    Selection.SelectChildren(42,True);

	    Selection.SelectChildren(56,True);

	End Sub UserProc;


После выполнения примера в отметку «Selection» будут добавлены все дочерние
 объекты четырех элементов справочника.


См. также:


[IDimSelection](IDimSelection.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
