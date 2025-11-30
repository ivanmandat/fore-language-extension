# IDimIndexes.PrimaryIndex

IDimIndexes.PrimaryIndex
-


# IDimIndexes.PrimaryIndex


## Синтаксис


PrimaryIndex: [IDimIndex](../IDimIndex/IDimIndex.htm);


## Описание


Свойство PrimaryIndex возвращает
 структуру первичного индекса справочника.


## Пример


	Sub UserProc;

	Var

	    MB: IMetabase;

	    DimModel: IDimensionModel;

	    Indexs: IDimIndexes;

	    Index: IDimIndex;

	    i: Integer;

	Begin

	    MB:=MetabaseClass.Active;

	    DimModel:=MB.ItemById("D_TO").Bind As IDimensionModel;

	    Indexs:=DimModel.Indexes;

	    Index:=Indexs.PrimaryIndex;

	    If Index<>Null Then

	        i:=Index.Key;

	    End If;

	End Sub UserProc;


После выполнения примера в переменной «i» будет содержаться ключ первичного
 индекса справочника, если он создан. Идентификатор объекта репозитория
 - «D_TO».


См. также:


[IDimIndexes](IDimIndexes.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
