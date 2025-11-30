# ICachedDataset.Last

ICachedDataset.Last
-


# ICachedDataset.Last


## Синтаксис


Last;


## Описание


Метод Last осуществляет переход
 к последней записи в кеше.


## Пример


	Sub UserProc;

	Var

	    MB: IMetabase;

	    DSInst: IDatasetInstance;

	    Cache: ICachedDataset;

	    i: Integer;

	Begin

	    MB := MetabaseClass.Active;

	    DSInst := MB.ItemById("Table_1").Open(Null) As IDatasetInstance;

	    Cache := DSInst.OpenCached;

	    Cache.Last;

	    i := Cache.RecNo;

	    Cache.Close;

	    DSInst.Close;

	End Sub UserProc;


После выполнения примера произойдет переход на последнюю запись в кеше
 и в переменной «i» будет содержаться индекс записи, на которую установился
 курсор в кеше.


См.также:


[ICachedDataset](ICachedDataset.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
