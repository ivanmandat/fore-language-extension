# ISecurityConnection.StartTransaction

ISecurityConnection.StartTransaction
-


# ISecurityConnection.StartTransaction


## Синтаксис


StartTransaction(AutoCommit: Boolean): [IConnectionTransaction](../IConnectionTransaction/IConnectionTransaction.htm);


## Параметры


AutoCommit. Параметр, отвечающий за автоматическое
 сохранение измененных данных на сервере БД.


## Описание


Метод StartTransaction инициализирует
 новую транзакцию с БД.


## Комментарии


Если в качестве значения параметра AutoCommit
 передается значение True и в коде
 нет явного вызова методов [Commit](../IConnectionTransaction/IConnectionTransaction.Commit.htm)
 либо [Rollback](../IConnectionTransaction/IConnectionTransaction.Rollback.htm),
 то при уничтожении транзакции
 автоматически будет вызван метод [Commit](../IConnectionTransaction/IConnectionTransaction.Commit.htm)
 для сохранения всех измененных данных. Если параметр AutoCommit
 имеет значение False, то при аналогичных
 условиях будет вызван метод [Rollback](../IConnectionTransaction/IConnectionTransaction.Rollback.htm)
 для отката всех изменений.


Уничтожение транзакции осуществляется при явном использовании оператора
 [Dispose](KnowledgeBase.chm::/01_Fore/KnowledgeBase_KB000004.htm)
 для соответствующего объекта в коде. Также уничтожение незавершенных транзакций
 осуществляется сборщиком мусора при завершении выполнения кода.


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
 в таблицу с физическим наименованием Table_1. Если будут присутствовать
 несохраненные данные, то они будут сохранены на сервере.


См. также:


[ISecurityConnection](ISecurityConnection.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
