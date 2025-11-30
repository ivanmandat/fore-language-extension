# IConnectionTransaction.CreateCommand

IConnectionTransaction.CreateCommand
-


# IConnectionTransaction.CreateCommand


## Синтаксис


CreateCommand (Sql: String): [IDalCommand](Dal.chm::/Interface/IDalCommand/IDalCommand.htm);


## Параметры


Sql. Определяет строку (SQL-запрос),
 которую необходимо выполнить на сервере БД.


## Описание


Метод CreateCommand выполняет
 создание специфических команд в транзакции, если включен пул соединений.
 Эти команды помогают серверу определять правила работы со скриптом и транзакциями.


## Пример


Пример использования приведен в описании метода [Commit](IConnectionTransaction.Commit.htm).


См. также:


[IConnectionTransaction](IConnectionTransaction.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
