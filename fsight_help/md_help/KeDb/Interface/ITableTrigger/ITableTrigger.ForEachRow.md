# ITableTrigger.ForEachRow

ITableTrigger.ForEachRow
-


# ITableTrigger.ForEachRow


## Синтаксис


ForEachRow: Boolean;


## Описание


Свойство ForEachRow определяет признак выполнения триггера для каждой строки таблицы. True, если триггер будет выполняться для каждой строки.


## Пример


			Sub Main;

Var

    MB: IMetabase;

    Object: IMetabaseObject;

    Table: ITable;

    Triggers: ITableTriggers;

    Trigger: ITableTrigger;

Begin

    MB:=MetabaseClass.Active;

    Object:=MB.ItemById("TABLE_1").Edit;

    Table:=Object As ITable;

    Triggers:=Table.Triggers;

    Trigger:=Triggers.Item(0);

    Trigger.ForEachRow:=True;

    Object.Save;

End Sub Main;


После выполнения примера для первого триггера таблицы будет установлен признак выполнения для каждой строки. Идентификатор таблицы - «Table_1».


См.также:


[ITableTrigger](ITableTrigger.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
