# IDimIndexInstance.CreateDimIndexLookup

IDimIndexInstance.CreateDimIndexLookup
-


# IDimIndexInstance.CreateDimIndexLookup


## Синтаксис


CreateDimIndexLookup: [IDimIndexInstanceLookup](../IDimIndexInstanceLookup/IDimIndexInstanceLookup.htm);


## Описание


Метод CreateDimIndexLookup создает
 объект для поиска элементов справочника.


## Пример


	Sub UserProc;

	Var

	    MB: IMetabase;

	    Dimen: IDimInstance;

	    IndxsInst: IDimIndexesInstance;

	    IndexInst: IDimIndexInstance;

	    InstLook: IDimIndexInstanceLookup;

	    i: Integer;

	Begin

	    MB:=MetabaseClass.Active;

	    Dimen:=MB.ItemById("D_TO").Open(Null) As IDimInstance;

	    IndxsInst:=Dimen.Indexes;

	    If IndxsInst.Count<>0 Then

	        IndexInst:=IndxsInst.Item(0);

	        InstLook:=IndexInst.CreateDimIndexLookup;

	        InstLook.AttributeValue(0):=10;

	        i:=InstLook.LookUpFirst;

	    End If;

	End Sub UserProc;


После выполнения примера будет осуществлен поиск по атрибуту первого
 индекса справочника. Искомое значением - «10». В случае удачного поиска
 в переменной «i» будет содержаться номер найденного элемента.


См. также:


[IDimIndexInstance](IDimIndexInstance.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
