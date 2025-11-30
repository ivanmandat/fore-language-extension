# IStandardDimIndexes.FindByKey

IStandardDimIndexes.FindByKey
-


# IStandardDimIndexes.FindByKey


## Синтаксис


FindByKey(IndexKey: Integer): [IStandardDimIndex](../IStandardDimIndex/IStandardDimIndex.htm);


## Параметры


IndexKey.Ключ индекса, по которому осуществляется
 поиск.


## Описание


Метод FindByKey осуществляет
 поиск и возвращает объект, содержащий индекс табличного справочника. Поиск
 осуществляется по ключу, передаваемому посредством параметра IndexKey.


## Пример


	Sub UserProc;

	Var

	    MB: IMetabase;

	    Dim: IStandardDimension;

	    DimInds: IStandardDimIndexes;

	    DimIndex: IStandardDimIndex;

	    s: String;

	Begin

	    MB:=MetabaseClass.Active;

	    Dim:=MB.ItemById("TAB_DIM").Bind As IStandardDimension;

	    DimInds:=Dim.Indexes;

	    If DimInds.Count<>0 Then

	        DimIndex:=DimInds.FindByKey(5014);

	        If DimIndex<>Null Then

	            s:=DimIndex.Name;

	        End If;

	    End If;

	End Sub UserProc;


После выполнения примера будет осуществлен поиск индекса с ключом «5014»
 и в случае удачного поиска в переменной «s» будет содержаться наименование
 найденного индекса справочника. Идентификатор табличного справочника -
 «TAB_DIM».


См. также:


[IStandardDimIndexes](IStandardDimIndexes.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
