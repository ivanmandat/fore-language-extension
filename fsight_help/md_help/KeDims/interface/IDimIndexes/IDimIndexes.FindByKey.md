# IDimIndexes.FindByKey

IDimIndexes.FindByKey
-


# IDimIndexes.FindByKey


## Синтаксис


FindByKey(IndexKey: Integer): [IDimIndex](../IDimIndex/IDimIndex.htm);


## Параметры


IndexKey — ключ
 индекса, по которому производится поиск.


## Описание


Метод FindByKey осуществляет
 поиск индекса, ключ которого передается посредством параметра IndexKey.


## Пример


	Sub UserProc;

	Var

	    MB: IMetabase;

	    DimModel: IDimensionModel;

	    Indexs: IDimIndexes;

	    Index: IDimIndex;

	    s: String;

	Begin

	    MB:=MetabaseClass.Active;

	    DimModel:=MB.ItemById("D_TO").Bind As IDimensionModel;

	    Indexs:=DimModel.Indexes;

	    Index:=Indexs.FindByKey(3);

	    If Index<>Null Then

	        s:=Index.Id;

	    Else

	        s:="It is not found";

	    End If;

	End Sub UserProc;


После выполнения примера будет осуществлен поиск индекса с ключом «3»
 и в случае удачного поиска в переменной «s» будет содержаться идентификатор
 найденного индекса. Идентификатор объекта репозитория - «D_TO».


См. также:


[IDimIndexes](IDimIndexes.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
