# IDimIndexInstanceLookup.Index

IDimIndexInstanceLookup.Index
-


# IDimIndexInstanceLookup.Index


## Синтаксис


Index: [IDimIndexInstance](../IDimIndexInstance/IDimIndexInstance.htm);


## Описание


Свойство Index возвращает объект-родитель.


## Пример


	Sub UserProc;

	Var

	    MB: IMetabase;

	    Dimen: IDimInstance;

	    InstLook: IDimIndexInstanceLookup;

	    IndexInst: IDimIndexInstance;

	    s: String;

	Begin

	    MB:=MetabaseClass.Active;

	    Dimen:=MB.ItemById("D_TO").Open(Null) As IDimInstance;

	    If Dimen.Indexes.Count<>0 Then

	        InstLook:=Dimen.Indexes.Item(0).CreateDimIndexLookup;

	        IndexInst:=InstLook.Index;

	        s:=IndexInst.Index.Name;

	    End If;

	End Sub UserProc;


После выполнения примера в переменной «s» будет содержаться наименование
 индекса, в котором был создан объект поиска.


См. также:


[IDimIndexInstanceLookup](IDimIndexInstanceLookup.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
