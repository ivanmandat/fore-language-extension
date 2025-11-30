# IDimInstance.CreateSelection

IDimInstance.CreateSelection
-


# IDimInstance.CreateSelection


## Синтаксис


CreateSelection: [IDimSelection](../IDimSelection/IDimSelection.htm);


## Описание


Метод CreateSelection создает
 объект, содержащий отметку справочника.


## Пример


	Sub UserProc;

	Var

	    MB: IMetabase;

	    Dimen: IDimInstance;

	    DimSelect: IDimSelection;

	    i: Integer;

	Begin

	    MB:=MetabaseClass.Active;

	    Dimen:=MB.ItemById("D_TO").Open(Null) As IDimInstance;

	    DimSelect:=Dimen.CreateSelection;

	    For i:=0 To Dimen.Elements.Count-1 Step 5 Do

	        DimSelect.SelectElement(i,False);

	    End For;

	    i:=DimSelect.SelectedCount;

	End Sub UserProc;


После выполнения примера будет создана отметка справочника, в ней выделен
 каждый пятый элемент и в переменной «i» будет содержаться количество выделенных
 элементов.


См. также:


[IDimInstance](IDimInstance.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
