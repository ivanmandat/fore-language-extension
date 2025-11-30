# IDimSelection.DeselectChildren

IDimSelection.DeselectChildren
-


# IDimSelection.DeselectChildren


## Синтаксис


DeselectChildren(Element: Integer; Recursive: Boolean);


## Параметры


Element. Индекс элемента справочника,
 дочерние элементы которого необходимо удалить из отметки.


Recursive. Параметр, определяющий
 будут ли удалятся из отметки элементы, находящиеся на всех нижних уровнях.


## Описание


Метод DeselectChildren осуществляет
 удаление дочерних элементов из отметки.


## Комментарии


Если в качестве значения параметра Recursive
 передается значение True,
 то отметка снимается с элементов, расположенных на всех нижних уровнях.
 Если передается значение False,
 то отметка снимается с непосредственных дочерних элементов, расположенных
 на один уровень ниже элемента Element.


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

	    Selection.SelectAll;

	    Selection.DeselectChildren(11,True);

	End Sub UserProc;


После выполнения примера из отметки «Selection» будут удалены все дочерние
 объекты одиннадцатого элемента справочника.


См. также:


[IDimSelection](IDimSelection.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
