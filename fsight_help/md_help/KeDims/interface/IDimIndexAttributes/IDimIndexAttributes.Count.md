# IDimIndexAttributes.Count

IDimIndexAttributes.Count
-


# IDimIndexAttributes.Count


## Синтаксис


Count: Integer;


## Описание


Свойство Count возвращает количество
 атрибутов, по которым создан индекс справочника.


## Пример


	Sub UserProc;

	Var

	    MB: IMetabase;

	    DimModel: IDimensionModel;

	    Index: IDimIndex;

	    IndAtr: IDimIndexAttributes;

	    i: Integer;

	Begin

	    MB:=MetabaseClass.Active;

	    DimModel:=MB.ItemById("D_TO").Bind As IDimensionModel;

	    Index:=DimModel.Indexes.Item(0);

	    If Index<>Null Then

	        IndAtr:=Index.Attributes;

	        i:=IndAtr.Count;

	    End If;

	End Sub UserProc;


После выполнения примера в переменной «i» будет содержаться количество
 атрибутов, по которым создан первый индекс справочника. Идентификатор
 объекта репозитория - «D_TO».


См. также:


[IDimIndexAttributes](IDimIndexAttributes.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
