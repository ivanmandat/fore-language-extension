# IDimSelection.MultiSelect

IDimSelection.MultiSelect
-


# IDimSelection.MultiSelect


## Синтаксис


MultiSelect: Boolean;


## Описание


Свойство MultiSelect определяет,
 есть ли возможность выделения более одного элемента в отметке. True
 если можно.


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

	    Selection.MultiSelect:=False;

	    Selection.SelectElement(11,False);

	    Selection.SelectElement(12,False);

	    Selection.SelectElement(13,False);

	    Selection.SelectElement(14,False);

	End Sub UserProc;


После выполнения примера в отметке «Selection» будет содержаться только
 «14» элемент справочника.


См. также:


[IDimSelection](IDimSelection.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
