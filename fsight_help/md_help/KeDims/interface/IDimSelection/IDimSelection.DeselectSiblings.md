# IDimSelection.DeselectSiblings

IDimSelection.DeselectSiblings
-


# IDimSelection.DeselectSiblings


## Синтаксис


DeselectSiblings(Element: Integer);


## Параметры


Element — индекс
 элемента в справочнике.


## Описание


Метод DeselectSiblings осуществляет
 удаление из отметки элементов уровня, на котором расположен элемент Element.


## Комментарии


Элементы удаляются в рамках одного родительского элемента.


## Пример


	Sub Main;

	Var

	    MB: IMetabase;

	    Dimen: IDimInstance;

	    Selection: IDimSelection;

	Begin

	    MB:=MetabaseClass.Active;

	    Dimen:=MB.ItemById("D_TO").Open(Null) As IDimInstance;

	    Selection:=Dimen.CreateSelection;

	    Selection.SelectAll;

	    Selection.DeselectSiblings(11);

	End Sub Main;


После выполнения примера из отметки «Selection» будут удалены все элементы
 уровня, на котором расположен «11» элемент.


См. также:


[IDimSelection](IDimSelection.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
