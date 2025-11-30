# IDimIndexInstanceLookup.LookUp

IDimIndexInstanceLookup.LookUp
-


# IDimIndexInstanceLookup.LookUp


## Синтаксис


LookUp: [IDimElementArray](../IDimElementArray/IDimElementArray.htm);


## Описание


Метод LookUp осуществляет поиск
 элементов, удовлетворяющих условию, и возвращает массив найденных элементов.


## Пример


	Sub UserProc;

	Var

	    MB: IMetabase;

	    Dimen: IDimInstance;

	    IndxsInst: IDimIndexesInstance;

	    IndexInst: IDimIndexInstance;

	    InstLook: IDimIndexInstanceLookup;

	    LookElem: IDimElementArray;

	    i: Integer;

	Begin

	    MB:=MetabaseClass.Active;

	    Dimen:=MB.ItemById("D_TO").Open(Null) As IDimInstance;

	    IndxsInst:=Dimen.Indexes;

	    If IndxsInst.Count<>0 Then

	        IndexInst:=IndxsInst.Item(0);

	        InstLook:=IndexInst.CreateDimIndexLookup;

	        InstLook.AttributeValue(0):=10;

	        LookElem:=InstLook.LookUp;

	        i:=LookElem.Count;

	    End If;

	End Sub UserProc;


После выполнения примера будет осуществлен поиск по атрибуту первого
 индекса справочника. Искомое значением - «10». В случае удачного поиска
 в переменной «i» будет содержаться количество найденных элементов.


См. также:


[IDimIndexInstanceLookup](IDimIndexInstanceLookup.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
