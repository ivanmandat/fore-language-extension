# IDimensionModel.Indexes

IDimensionModel.Indexes
-


# IDimensionModel.Indexes


## Синтаксис


Indexes: [IDimIndexes](../IDimIndexes/IDimIndexes.htm);


## Описание


Свойство Indexes возвращает
 объект, содержащий коллекцию индексов справочника.


## Пример


	Sub UserProc;

	Var

	    MB: IMetabase;

	    DimModel: IDimensionModel;

	    DimIndex: IDimIndexes;

	    i: Integer;

	Begin

	    MB:=MetabaseClass.Active;

	    DimModel:=MB.ItemById("D_TO").Bind As IDimensionModel;

	    DimIndex:=DimModel.Indexes;

	    i:=DimIndex.Count;

	End Sub UserProc;


После выполнения примера в переменной «i» будет содержаться количество
 индексов справочника. Идентификатор объекта репозитория - «D_TO».


См. также:


[IDimensionModel](IDimensionModel.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
