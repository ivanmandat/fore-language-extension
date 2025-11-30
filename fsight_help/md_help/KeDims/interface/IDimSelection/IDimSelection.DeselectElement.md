# IDimSelection.DeselectElement

IDimSelection.DeselectElement
-


# IDimSelection.DeselectElement


## Синтаксис


DeselectElement(Element: Integer; Recursive: Boolean);


## Параметры


Element. Индекс элемента справочника,
 который необходимо убрать из отметки.


Recursive. Параметр, определяющий,
 будут ли удаляться из отметки дочерние элементы. Если в качестве значения
 передается True, то отметка снимается
 с элемента и всех его дочерних элементов на всех уровнях, если False
 - отметка снимается только с указанного элемента.


## Описание


Метод DeselectElement осуществляет
 удаление элемента с индексом Element
 из отметки.


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

	    Selection.DeselectElement(11,True);

	End Sub UserProc;


После выполнения примера из отметки будет удален одиннадцатый элемент
 со всеми дочерними объектами.


См. также:


[IDimSelection](IDimSelection.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
