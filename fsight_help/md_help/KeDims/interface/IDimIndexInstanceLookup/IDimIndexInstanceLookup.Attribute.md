# IDimIndexInstanceLookup.Attribute

IDimIndexInstanceLookup.Attribute
-


# IDimIndexInstanceLookup.Attribute


## Синтаксис


Attribute(Index: Integer): [IDimAttribute](../IDimAttribute/IDimAttribute.htm);


## Параметры


Index — индекс
 атрибута справочника.


## Описание


Свойство Attribute возвращает
 структуру атрибута, по которому может производиться поиск.


## Пример


	Sub UserProc;

	Var

	    MB: IMetabase;

	    Dimen: IDimInstance;

	    IndxsInst: IDimIndexesInstance;

	    IndexInst: IDimIndexInstance;

	    InstLook: IDimIndexInstanceLookup;

	    s: String;

	Begin

	    MB:=MetabaseClass.Active;

	    Dimen:=MB.ItemById("D_TO").Open(Null) As IDimInstance;

	    IndxsInst:=Dimen.Indexes;

	    If IndxsInst.Count<>0 Then

	        IndexInst:=IndxsInst.Item(0);

	        InstLook:=IndexInst.CreateDimIndexLookup;

	        s:=InstLook.Attribute(0).Name;

	    End If;

	End Sub UserProc;


После выполнения примера будет создан объект для поиска элементов в
 справочнике, и в переменной «s» будет содержаться наименование первого
 атрибута индекса, по которому может производиться поиск.


См. также:


[IDimIndexInstanceLookup](IDimIndexInstanceLookup.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
