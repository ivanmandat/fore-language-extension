# ITableTriggers.FindByKey

ITableTriggers.FindByKey
-


# ITableTriggers.FindByKey


## Синтаксис


FindByKey(Key: Integer): [ITableTrigger](../ITableTrigger/ITableTrigger.htm);


## Параметры


Key - ключ триггера.


## Описание


Метод FindByKey осуществляет поиск и возвращает объект, содержащий триггер таблицы. Ключ, по которому осуществляется поиск, передается посредством параметра Key.


## Пример


	Sub UserProc;

	Var

	    MB: IMetabase;

	    Table: ITable;

	    Triggers: ITableTriggers;

	    Trigger: ITableTrigger;

	    s: String;

	Begin

	    MB:=MetabaseClass.Active;

	    Table:=MB.ItemById("TABLE_1").Bind As ITable;

	    Triggers:=Table.Triggers;

	    Trigger:=Triggers.FindByKey(1);

	    s:=Trigger.Id;

	End Sub UserProc;


После выполнения примера в переменной «s» будет содержаться идентификатор триггера, ключ которого равен «1». Идентификатор таблицы - «Table_1».


См.также:


[ITableTriggers](ITableTriggers.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
