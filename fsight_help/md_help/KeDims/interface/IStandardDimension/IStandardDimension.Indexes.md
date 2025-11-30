# IStandardDimension.Indexes

IStandardDimension.Indexes
-


# IStandardDimension.Indexes


## Синтаксис


Indexes: [IStandardDimIndexes](../IStandardDimIndexes/IStandardDimIndexes.htm);


## Описание


Свойство Indexes возвращает
 объект, содержащий коллекцию индексов табличного справочника.


## Пример


	Sub UserProc;

	Var

	    MB: IMetabase;

	    Dimens: IStandardDimension;

	    DimInds: IStandardDimIndexes;

	    i: Integer;

	Begin

	    MB:=MetabaseClass.Active;

	    Dimens:=MB.ItemById("TAB_DIM").Bind As IStandardDimension;

	    DimInds:=Dimens.Indexes;

	    i:=DimInds.Count;

	End Sub UserProc;


После выполнения примера в переменной «i» будет содержаться количество
 индексов справочника. Идентификатор табличного справочника - «TAB_DIM».


См. также:


[IStandardDimension](IStandardDimension.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
