# IDimIndexes.Count

IDimIndexes.Count
-


# IDimIndexes.Count


## Синтаксис


Count: Integer;


## Описание


Свойство Count возвращает количество
 индексов справочника.


## Пример


	Sub UserProc;

	Var

	    MB: IMetabase;

	    DimModel: IDimensionModel;

	    Index: IDimIndexes;

	    i: Integer;

	Begin

	    MB:=MetabaseClass.Active;

	    DimModel:=MB.ItemById("D_TO").Bind As IDimensionModel;

	    Index:=DimModel.Indexes;

	    i:=Index.Count;

	End Sub UserProc;


После выполнения примера в переменной «i» будет содержаться количество
 индексов справочника. Идентификатор объекта репозитория - «D_TO».


См. также:


[IDimIndexes](IDimIndexes.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
