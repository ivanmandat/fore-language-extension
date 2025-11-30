# IDimIndex.Attributes

IDimIndex.Attributes
-


# IDimIndex.Attributes


## Синтаксис


Attributes: [IDimIndexAttributes](../IDimIndexAttributes/IDimIndexAttributes.htm);


## Описание


Свойство Attributes возвращает
 коллекцию атрибутов, по которым создан индекс.


## Пример


	Sub UserProc;

	Var

	    MB: IMetabase;

	    DimModel: IDimensionModel;

	    Indexs: IDimIndexes;

	    Index: IDimIndex;

	    IndAtr: IDimIndexAttributes;

	    i: Integer;

	Begin

	    MB:=MetabaseClass.Active;

	    DimModel:=MB.ItemById("D_TO").Bind As IDimensionModel;

	    Indexs:=DimModel.Indexes;

	    If Indexs.Count<>0 Then

	        Index:=Indexs.Item(0);

	        IndAtr:=Index.Attributes;

	        i:=IndAtr.Count;

	    End If;

	End Sub UserProc;


После выполнения пример в переменной «i» будет содержаться количество
 атрибутов первого индекса справочника, если он создан. Идентификатор объекта
 репозитория - «D_TO».


См. также:


[IDimIndex](IDimIndex.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
