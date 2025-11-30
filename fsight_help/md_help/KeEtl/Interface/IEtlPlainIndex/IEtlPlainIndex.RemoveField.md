# IEtlPlainIndex.RemoveField

IEtlPlainIndex.RemoveField
-


# IEtlPlainIndex.RemoveField


## Синтаксис


RemoveField(Field: Integer);


## Параметры


Field.
 Позиция поля индекса.


## Описание


Метод RemoveField удаляет поле
 индекса, позиция которого передается посредством параметра Field.


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

	    Index.RemoveField(0);

	    Object.Save;

	End Sub UserProc;


После выполнения примера будет удалено первое поле индекса. Объект репозитория
 имеет идентификатор ETL.


См. также:


[IEtlPlainIndex](IEtlPlainIndex.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
