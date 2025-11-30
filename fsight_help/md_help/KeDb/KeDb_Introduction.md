# Введение: Сборка Db

Введение: Сборка Db
-


# Введение в сборку Db


Основными интерфейсами сборки Db
 являются:


	- [IDatabase](Interface/IDatabase/IDatabase.htm).
	 Интерфейс предназначен для работы со структурой базы данных репозитория.


	- [ITable](Interface/ITable/ITable.htm).
	 Интерфейс предназначен для работы со структурой таблицы.


	- [IView](Interface/IView/IView.htm). Интерфейс
	 предназначен для работы со структурой представления.


	- [IQuery](Interface/IQuery/IQuery.htm).
	 Интерфейс предназначен для работы со структурой запроса.


	- [IOdbcDataset](Interface/IOdbcDataset/IOdbcDataset.htm).
	 Интерфейс предназначен для работы со структурой источника данных ODBC.


	- [ISQLCommand](Interface/ISQLCommand/ISQLCommand.htm).
	 Интерфейс предназначен для работы со структурой команды СУБД.


	- [IProcedure](Interface/IProcedure/IProcedure.htm).
	 Интерфейс предназначен для работы со структурой процедуры.


	- [ILog](Interface/ILog/ILog.htm). Интерфейс
	 предназначен для работы со структурой журнала.


Интерфейсы для работы с открытыми объектами:


	- [IDatabaseInstance](Interface/IDatabaseInstance/IDatabaseInstance.htm).
	 Интерфейс для работы с объектами открытой базы данных.


	- [IDatasetInstance](Interface/IDatasetInstance/IDatasetInstance.htm).
	 Интерфейс для работы с данными любого открытого реляционного источника
	 данных.


	- [ICachedDataset](Interface/ICachedDataset/ICachedDataset.htm).
	 Интерфейс для работы с кешем реляционного источника данных, используемым
	 для редактирования, создания и удаления записей.


Интерфейсы, используемые обработчиком процесса формирования запроса
 на извлечение данных куба.


	- [ISQLCallback](Interface/ISQLCallback/ISQLCallback.htm).
	 Интерфейс с основными методами отслеживания процесса формирования
	 запроса, которые должны быть переопределены в пользовательском классе.


	- [ISQLComponents](Interface/ISQLComponents/ISQLComponents.htm).
	 Интерфейс для получения и изменения отдельных частей запроса.


	- [ISQLCondition](Interface/ISQLCondition/ISQLCondition.htm).
	 Интерфейс для работы с отдельным условием отбора элементов измерений.
	 Все условия доступны в свойстве [ISQLComponents.Where](Interface/ISQLComponents/ISQLComponents.Where.htm).


## Примеры


[Примеры реализации различных задач
 с использованием сборки Db](Samples/KeDb_Sample.htm)


См. также:


[Интерфейсы сборки Db](Interface/KeDb_Interface.htm)
 | [Перечисления
 сборки Db](Enums/KeDb_Enums.htm) | [Классы сборки Db](Class/KeDb_Classes.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
