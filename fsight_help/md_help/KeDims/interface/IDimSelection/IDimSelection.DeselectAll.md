# IDimSelection.DeselectAll

IDimSelection.DeselectAll
-


# IDimSelection.DeselectAll


## Синтаксис


DeselectAll;


## Описание


Метод DeselectAll осуществляет
 удаление из отметки всех элементов справочника.


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

	    Selection.DeselectAll;

	End Sub UserProc;


После выполнения примера из отметки «Selection» будут удалены все элементы
 справочника.


См. также:


[IDimSelection](IDimSelection.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
