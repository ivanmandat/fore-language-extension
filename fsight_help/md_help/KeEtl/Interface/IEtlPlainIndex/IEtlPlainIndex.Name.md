# IEtlPlainIndex.Name

IEtlPlainIndex.Name
-


# IEtlPlainIndex.Name


## Синтаксис


Name: String;


## Описание


Свойство Name определяет наименование
 индекса источников данных.


## Пример


	Sub UserProc;

	Var

	    MB: IMetabase;

	    Object: IMetabaseObject;

	    EtlTask: IEtlTask;

	    Join: IEtlPlainDataJoin;

	    Index: IEtlPlainIndex;

	    s: String;

	Begin

	    MB := MetabaseClass.Active;

	    Object := MB.ItemById("ETL").Edit;

	    EtlTask := Object As IEtlTask;

	    Join := EtlTask.Item(2) As IEtlPlainDataJoin;

	    Index := Join.Index;

	    s := Index.Name;

	End Sub UserProc;


После выполнения примера в переменной «s» будет содержаться наименование
 индекса третьего объекта задачи ETL. Тип объекта задачи ETL - Соединение.
 Объект репозитория имеет идентификатор ETL.


См. также:


[IEtlPlainIndex](IEtlPlainIndex.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
