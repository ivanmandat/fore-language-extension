# IDimIndexes.FindById

IDimIndexes.FindById
-


# IDimIndexes.FindById


## Синтаксис


FindById(IndexId: String): [IDimIndex](../IDimIndex/IDimIndex.htm);


## Параметры


IndexId — идентификатор
 индекса, по которому производится поиск.


## Описание


Метод FindById осуществляет
 поиск индекса, идентификатор которого передается посредством параметра
 IndexId.


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

	    Index:=Indexs.FindById("INDEX3");

	    If Index<>Null Then

	        s:=Index.Name;

	    Else

	        s:="It is not found";

	    End If;

	End Sub UserProc;


После выполнения примера будет осуществлен поиск индекса с идентификатором
 «INDEX3» и в случае удачного поиска в переменной «s» будет содержаться
 наименование найденного индекса. Идентификатор объекта репозитория - «D_TO».


См. также:


[IDimIndexes](IDimIndexes.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
