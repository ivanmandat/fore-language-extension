# ITableCreator.Connection

ITableCreator.Connection
-


# ITableCreator.Connection


## Синтаксис


Connection: [ISecurityConnection](KeSom.chm::/Interface/ISecurityConnection/ISecurityConnection.htm);


## Описание


Свойство Connection определяет соединение, в рамках которого будут выполняться запросы по созданию таблицы и загрузке данных.


## Комментарии


Данное свойство актуально, если база данных, указанная в свойстве [Database](ITableCreator.Database.htm), имеет настройки, отличные от настроек БД, в которой создан репозиторий. В этом случае для получения соединения с базой данных можно использовать свойство [IDatabaseInstance.Connection](KeDb.chm::/Interface/IDatabaseInstance/IDatabaseInstance.Connection.htm).


По умолчанию свойство не указано, при этом используется соединение с репозиторием, доступное в свойстве [PrimaryConnection](KeSom.chm::/Interface/ILogonSession/ILogonSession.PrimaryConnection.htm).


См. также:


[ITableCreator](ITableCreator.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
