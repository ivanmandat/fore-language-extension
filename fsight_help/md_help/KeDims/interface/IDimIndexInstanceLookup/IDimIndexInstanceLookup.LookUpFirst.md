# IDimIndexInstanceLookup.LookUpFirst

IDimIndexInstanceLookup.LookUpFirst
-


# IDimIndexInstanceLookup.LookUpFirst


## Синтаксис


LookUpFirst: Integer;


## Описание


Метод LookUpFirst осуществляет
 поиск первого, удовлетворяющего условиям, элемента и возвращает индекс
 найденного элемента в случае удачного поиска. Если элемент не найден -
 возвращает «-1».


## Пример


Для выполнения примера предполагается наличие в репозитории справочника
 с идентификатором «Dim_1». Первый индекс справочника создан на базе двух
 атрибутов справочника.


	Sub UserProc;

	Var

	    MB: IMetabase;

	    Dimen: IDimInstance;

	    IndxsInst: IDimIndexesInstance;

	    IndexInst: IDimIndexInstance;

	    InstLook: IDimIndexInstanceLookup;

	    i: Integer;

	Begin

	    MB := MetabaseClass.Active;

	    Dimen := MB.ItemById("Dim_1").Open(Null) As IDimInstance;

	    IndxsInst := Dimen.Indexes;

	    If IndxsInst.Count <> 0 Then

	        IndexInst := IndxsInst.Item(0);

	        InstLook := IndexInst.CreateDimIndexLookup;

	        InstLook.AttributeValue(0) := 10;

	        InstLook.AttributeValue(1) := 100;

	        i := InstLook.LookUpFirst;

	    End If;

	End Sub UserProc;


После выполнения примера будет осуществлен поиск по значениям атрибутов
 первого индекса справочника. В случае удачного поиска в переменной «i»
 будет содержаться номер найденного элемента.


См. также:


[IDimIndexInstanceLookup](IDimIndexInstanceLookup.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
