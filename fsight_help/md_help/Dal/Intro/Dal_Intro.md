# Введение: Сборка Dal

Введение: Сборка Dal
-


# Введение в сборку Dal


В данном разделе представлено описание сборки Dal,
 предназначенной для работы с СУБД с помощью SQL-запросов. Сборка содержит
 реализацию классов, которые предоставляют доступ к СУБД посредством любых
 драйверов, поддерживаемых «Форсайт. Аналитическая платформа».
 Используя необходимый драйвер можно создать соединение с СУБД, создать
 команду, которая будет запускать SQL-запросы и возвращать результаты их
 выполнения. Полученные данные могут быть переданы в разрабатываемое приложение,
 обработаны там и сохранены обратно в базу данных.


Основными интерфейсами сборки Dal
 являются:


	- [IDalDriver](../Interface/IDalDriver/IDalDriver.htm).
	 Базовый интерфейс, содержащий метод для создания описания соединения.


	- [IDalConnectionDescriptor](../Interface/IDalConnectionDescriptor/IDalConnectionDescriptor.htm),
	 [IDalConnectionDescriptor2](../Interface/IDalConnectionDescriptor2/IDalConnectionDescriptor2.htm),
	 [IDalConnectionDescriptorExt](../Interface/IDalConnectionDescriptorExt/IDalConnectionDescriptorExt.htm),
	 [IDalODBCConnectionDescriptor](../Interface/IDalODBCConnectionDescriptor/IDalODBCConnectionDescriptor.htm).
	 Интерфейсы описания соединения с СУБД.


	- [IDalConnection](../Interface/IDalConnection/IDalConnection.htm),
	 [IDalConnection2](../Interface/IDalConnection2/IDalConnection2.htm),
	 [IDalConnectionExt](../Interface/IDalConnectionExt/IDalConnectionExt.htm).
	 Интерфейсы для работы с созданным соединением.


	- [IDalCommand](../Interface/IDalCommand/IDalCommand.htm),
	 [IDalCommand2](../Interface/IDalCommand2/IDalCommand2.htm),
	 [IDalCommandEx](../Interface/IDalCommandEx/IDalCommandEx.htm).
	 Интерфейсы для работы с командами, которые используется для выполнения
	 SQL-запросов.


	- [IDalCursor](../Interface/IDalCursor/IDalCursor.htm).
	 Интерфейс, содержащий свойства и методы для работы с курсором результирующих
	 данных.


	- [IDalCommandTask](../Interface/IDalCommandTask/IDalCommandTask.htm).
	 Интерфейс, описывающий задачу, предназначенную для выполнения SQL-запросов
	 в асинхронном режиме.


Более подробно работа с СУБД с помощью
 SQL-запросов описана в следующих подразделах:


	- [Создание соединения с СУБД](Dal_Connection.htm);


	- [Команда выполнения SQL-запросов](Dal_Command.htm);


	- [Выполнение SQL-запросов в асинхронном режиме](Dal_Command2.htm);


	- [Выполнение SQL-запросов с проверкой на ошибки
	 выполнения](Dal_CommandEx.htm);


	- [Выполнение хранимых процедур и
	 функций](Dal_ExecStoredProcedure.htm);


	- [Работа с курсорами в результатах выполнения
	 SQL-запроса](Cursor_in_the_result.htm);


	- [Работа
	 с временными таблицами](working_with_temporary_tables.htm).


Дополнительные
 сведения:


[Интерфейсы
 сборки Dal](../Interface/Dal_Interface.htm) | [Перечисления сборки
 Dal](../Enums/Dal_Enums.htm) | [Классы сборки Dal](../Class/Dal_Class.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
