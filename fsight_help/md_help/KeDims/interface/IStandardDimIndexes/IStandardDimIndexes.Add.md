# IStandardDimIndexes.Add

IStandardDimIndexes.Add
-


# IStandardDimIndexes.Add


## Синтаксис


Add: [IStandardDimIndex](../IStandardDimIndex/IStandardDimIndex.htm);


## Описание


Метод Add осуществляет добавление
 индекса в табличный справочник.


## Пример


	Sub UserProc;

	Var

	    MB: IMetabase;

	    MObj: IMetabaseObject;

	    Dim: IStandardDimension;

	    DimInds: IStandardDimIndexes;

	    DimIndex: IStandardDimIndex;

	Begin

	    MB:=MetabaseClass.Active;

	    MObj:=MB.ItemById("TAB_DIM").Edit;

	    Dim:=MObj As IStandardDimension;

	    DimInds:=Dim.Indexes;

	    DimIndex:=DimInds.Add;

	    DimIndex.Name:="Индекс идентификаторов";

	    DimIndex.Id:="Index_Id";

	    DimIndex.Attributes.Add(Dim.Attributes.Id);

	    MObj.Save;

	End Sub UserProc;


После выполнения примера в табличном справочнике будет создан индекс
 по атрибуту, назначение которого - идентификатор. Идентификатор табличного
 справочника - «TAB_DIM».


См. также:


[IStandardDimIndexes](IStandardDimIndexes.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
