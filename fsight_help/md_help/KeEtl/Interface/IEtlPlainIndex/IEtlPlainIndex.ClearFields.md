# IEtlPlainIndex.ClearFields

IEtlPlainIndex.ClearFields
-


# IEtlPlainIndex.ClearFields


## Синтаксис


ClearFields;


## Описание


Метод ClearFields удаляет все
 поля индекса.


## Пример


	Sub UserProc;

	Var

	    MB: IMetabase;

	    Object: IMetabaseObject;

	    EtlTask: IEtlTask;

	    Join: IEtlPlainDataJoin;

	    Index: IEtlPlainIndex;

	Begin

	    MB := MetabaseClass.Active;

	    Object := MB.ItemById("ETL").Edit;

	    EtlTask := Object As IEtlTask;

	    Join := EtlTask.Item(0) As IEtlPlainDataJoin;

	    Index := Join.Index;

	    Index.ClearFields;

	    Object.Save;

	End Sub UserProc;


После выполнения примера будут удалены все поля индекса. Объект репозитория
 имеет идентификатор ETL.


См. также:


[IEtlPlainIndex](IEtlPlainIndex.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
