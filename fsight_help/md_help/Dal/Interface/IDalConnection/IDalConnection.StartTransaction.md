# IDalConnection.StartTransaction

IDalConnection.StartTransaction
-


# IDalConnection.StartTransaction


## Синтаксис


StartTransaction;


## Описание


Метод StartTransaction инициализирует
 транзакцию с БД.


## Комментарии


В рамках отдельной транзакции могут быть выполнены какие-либо действия
 с данными или объектами СУБД. Для подтверждения действий необходимо будет
 выполнить метод [IDalConnection.Commit](IDalConnection.Commit.htm),
 для отката изменений - [IDalConnection.Rollback](IDalConnection.Rollback.htm).


## Пример


Пример использования приведен в описании методов [IDalConnection.Commit](IDalConnection.Commit.htm),
 [IDalConnection.Rollback](IDalConnection.Rollback.htm).


См. также:


[IDalConnection](IDalConnection.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
