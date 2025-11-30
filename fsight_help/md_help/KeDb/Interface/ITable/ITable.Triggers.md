# ITable.Triggers

ITable.Triggers
-


# ITable.Triggers


## Синтаксис


Triggers: [ITableTriggers](../ITableTriggers/ITableTriggers.htm);


## Описание


Свойство Triggers возвращает объект, содержащий все триггеры таблицы.


## Пример


Для выполнения примера предполагается наличие в репозитории таблицы с идентификатором "TABLE_1".


	Sub UserProc;

	Var

	    MB: IMetabase;

	    MObj: IMetabaseObject;

	    Table: ITable;

	    Triggers: ITableTriggers;

	    Trigger: ITableTrigger;

	Begin

	    MB := MetabaseClass.Active;

	    MObj := MB.ItemById("TABLE_1").Edit;

	    Table := MObj As ITable;

	    Triggers := Table.Triggers;

	    Trigger := Triggers.Add;

	    Trigger.Id := "TriggerX";

	    Trigger.Name := "Триггер таблицы";

	    Trigger.Text := "Begin" + #10 + "Insert Into Table_1(Field_1) Values('Trigger');" + #10 + "End;";

	    Trigger.FireTime := TableTriggerFireTime.After;

	    Trigger.FireEvent := TableTriggerFireEvent.Insert;

	    Trigger.ForEachRow := True;

	    MObj.Save;

	End Sub UserProc;


После выполнения примера в таблице будет создан триггер с идентификатором «TriggerX». Данный триггер будет срабатывать перед вставкой новой строки в таблицу. При срабатывании триггера в таблицу будет добавляться еще одна новая строка и будет заполняться значение поля "Field_1".


См.также:


[ITable](ITable.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
