# IDimIndex.Primary

IDimIndex.Primary
-


# IDimIndex.Primary


## Синтаксис


Primary: Boolean;


## Описание


Свойство Primary возвращает
 True, если индекс первичный.


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

	    If Index.Primary Then

	        s:="Primari";

	    Else

	        s:="Not primary";

	    End If;

	End Sub UserProc;


После выполнения примера в переменной «s» будет содержаться «Primari»
 если первый индекс справочника является первичным. Идентификатор объекта
 репозитория - «D_TO».


См. также:


[IDimIndex](IDimIndex.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
