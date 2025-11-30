# IConnectionTransaction.Commit

IConnectionTransaction.Commit
-


# IConnectionTransaction.Commit


## Синтаксис


Commit;


## Описание


Метод Commit сохраняет все изменения
 на сервере базы данных и завершает транзакцию.


## Комментарии


При сохранении данных срезов, источником для которых является стандартный
 куб, операция сохранения осуществляется внутри внешней транзакции.


## Пример


	Sub Main;

	Var

	   MB: IMetabase;

	    DB: IDatabaseInstance;

	    Connect: ISecurityConnection;

	    Command: IDalCommand;

	    Tran: IConnectionTransaction;

	Begin

	    MB := MetabaseClass.Active;

	    DB := MB.ItemById("BD").Open(Null) As IDatabaseInstance;

	    Connect := DB.Connection;

	    Command := Connect.CreateCommand("Insert Into Table_1 values ('A',1)");

	    Tran := Connect.StartTransaction(False);

	Try

	    Command.Execute;

	    Tran.Commit;

	Except

	    Tran.Rollback;

	End Try;

	    Command.Close;

	End Sub Main;


После выполнения примера будет осуществлено подключение к серверу БД,
 на который настроена база данных репозитория BD. Для данного соединения
 будет создан и выполнен SQL-запрос, осуществляющий вставку новой записи
 в таблицу с физическим наименованием «Table_1». Если будут присутствовать
 несохраненные данные, то они будут сохранены на сервере.


См. также:


[IConnectionTransaction](IConnectionTransaction.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
