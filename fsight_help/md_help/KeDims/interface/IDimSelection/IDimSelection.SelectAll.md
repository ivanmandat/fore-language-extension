# IDimSelection.SelectAll

IDimSelection.SelectAll
-


# IDimSelection.SelectAll


## Синтаксис


SelectAll;


## Описание


Метод SelectAll осуществляет добавление в отметку всех элементов справочника.


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

	End Sub UserProc;


После выполнения примера в отметку «Selection» будут добавлены все элементы справочника.


См. также:


[IDimSelection](IDimSelection.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
