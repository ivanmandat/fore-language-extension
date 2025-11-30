# IDimSelection.SelectSiblings

IDimSelection.SelectSiblings
-


# IDimSelection.SelectSiblings


## Синтаксис


SelectSiblings(Element: Integer);


## Параметры


Element — элемент
 справочника, находящийся на уровне, элементы которого необходимо добавить
 в отметку.


## Описание


Метод SelectSiblings осуществляет
 добавление в отметку элементов уровня, на котором расположен элемент Element. Элементы добавляются в
 рамках одного родительского элемента.


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

	    Selection.SelectSiblings(11);

	End Sub UserProc;


После выполнения примера в отметку «Selection» будут добавлены все элементы
 уровня, на котором расположен «11» элемент.


См. также:


[IDimSelection](IDimSelection.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
