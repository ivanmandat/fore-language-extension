# ITableTriggers.FindById

ITableTriggers.FindById
-


# ITableTriggers.FindById


## Синтаксис


FindById(Id: String): [ITableTrigger](../ITableTrigger/ITableTrigger.htm);


## Параметры


Id — идентификатор триггера.


## Описание


Метод FindById осуществляет поиск и возвращает объект, содержащий триггер таблицы. Идентификатор, по которому осуществляется поиск, передается посредством параметра Id.


## Пример


	Sub UserProc;

	Var

	    MB: IMetabase;

	    Table: ITable;

	    Triggers: ITableTriggers;

	    Trigger: ITableTrigger;

	    i: Integer;

	Begin

	    MB:=MetabaseClass.Active;

	    Table:=MB.ItemById("TABLE_1").Bind As ITable;

	    Triggers:=Table.Triggers;

	    Trigger:=Triggers.FindById("TABLE_1_TRIGGER");

	    i:=Trigger.Key;

	End Sub UserProc;


После выполнения примера в переменной «i» будет содержаться ключ триггера, идентификатор которого «TABLE_1_TRIGGER». Идентификатор таблицы - «Table_1».


См.также:


[ITableTriggers](ITableTriggers.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
