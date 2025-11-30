# IDimIndexInstanceLookup.AttributeCount

IDimIndexInstanceLookup.AttributeCount
-


# IDimIndexInstanceLookup.AttributeCount


## Синтаксис


AttributeCount: Integer;


## Описание


Свойство AttributeCount возвращает
 количество атрибутов, по которым может производиться поиск.


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

	        i:=InstLook.AttributeCount;

	    End If;

	End Sub UserProc;


После выполнения примера будет создан объект для поиска элементов в
 справочнике, и в переменной «i» будет содержаться количество атрибутов
 индекса, по которым может производиться поиск.


См. также:


[IDimIndexInstanceLookup](IDimIndexInstanceLookup.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
