# IDimIndex.Unique

IDimIndex.Unique
-


# IDimIndex.Unique


## Синтаксис


Unique: Boolean;


## Описание


Свойство Unique возвращает True, если индекс уникальный.


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

	    Index:=Indexs.Item(0);

	    If Index.Unique Then

	        s:="Unique";

	    Else

	        s:="Not unique";

	    End If;

	End Sub UserProc;


После выполнения примера в переменной «s» будет содержаться «Unique»
 если первый индекс справочника является уникальным. Идентификатор объекта
 репозитория - «D_TO».


См. также:


[IDimIndex](IDimIndex.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
