# ISecurityConnection.InTransaction

ISecurityConnection.InTransaction
-


# ISecurityConnection.InTransaction


## Синтаксис


InTransaction: Boolean;


## Описание


Метод InTransaction возвращает признак наличия незавершенной транзакции.


## Комментарии


Метод возвращает значение True, если после вызова метод [StartTransaction](ISecurityConnection.StartTransaction.htm) осуществлялось выполнение каких-либо SQL-запросов, осуществляющих изменение данных на сервере, и не был вызван метод [Commit](../IConnectionTransaction/IConnectionTransaction.Commit.htm), либо [Rollback](../IConnectionTransaction/IConnectionTransaction.Rollback.htm).


См. также:


[ISecurityConnection](ISecurityConnection.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
