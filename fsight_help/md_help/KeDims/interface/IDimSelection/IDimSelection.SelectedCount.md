# IDimSelection.SelectedCount

IDimSelection.SelectedCount
-


# IDimSelection.SelectedCount


## Синтаксис


SelectedCount: Integer;


## Описание


Свойство SelectedCount возвращает
 количество элементов в отметке.


## Пример


	Sub UserProc;

	Var

	    MB: IMetabase;

	    Dimen: IDimInstance;

	    Selection: IDimSelection;

	    i: Integer;

	Begin

	    MB:=MetabaseClass.Active;

	    Dimen:=MB.ItemById("D_TO").Open(Null) As IDimInstance;

	    Selection:=Dimen.Elements.Children(10).Selection;

	    i:=Selection.SelectedCount;

	End Sub UserProc;


После выполнения примера в переменной «i» будет содержаться количество
 элементов в отметке.


См. также:


[IDimSelection](IDimSelection.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
