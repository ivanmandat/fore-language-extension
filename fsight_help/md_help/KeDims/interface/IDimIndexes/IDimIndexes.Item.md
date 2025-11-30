# IDimIndexes.Item

IDimIndexes.Item
-


# IDimIndexes.Item


## Синтаксис


Item(Index: Variant): [IDimIndex](../IDimIndex/IDimIndex.htm);


## Параметры


Index — номер
 индекса.


## Описание


Свойство Item возвращает структуру
 индекса справочника.


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

	    If Indexs.Count<>0 Then

	        Index:=Indexs.Item(0);

	        s:=Index.Id;

	    End If;

	End Sub UserProc;


После выполнения примера в переменной «s» будет содержаться идентификатор
 первого индекса справочника, если он существует. Идентификатор объекта
 репозитория - «D_TO».


См. также:


[IDimIndexes](IDimIndexes.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
