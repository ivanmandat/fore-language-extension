# ITable.DropTable

ITable.DropTable
-


# ITable.DropTable


## Синтаксис


DropTable;


## Описание


Метод DropTable осуществляет удаление из базы данных на сервере таблицы, на которую ссылается данная таблица репозитория.


## Пример


	Sub UserProc;

	Var

	    MB: IMetabase;

	    Table: ITable;

	Begin

	    MB := MetabaseClass.Active;

	    Table := MB.ItemById("New_Table_1").Bind As ITable;

	    Table.DropTable;

	End Sub UserProc;


После выполнения примера, из базы данных на сервере будет удалена таблица, на которую ссылается таблица репозитория «New_Proc_1».


См.также:


[ITable](ITable.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
