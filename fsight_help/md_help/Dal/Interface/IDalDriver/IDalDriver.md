# IDalDriver

IDalDriver
-


# IDalDriver


## Описание


Базовый интерфейс IDalDriver,
 содержащий методы для создания описания соединения с сервером БД.


## Комментарии


Данный интерфейс описывает все классы, предоставляющие доступ к какому-либо
 драйверу, который в свою очередь предоставляет доступ к СУБД. Интерфейс
 является базовым для следующих классов:


	- [DalClickHouseDriver](../../Class/DalClickHouseDriver/DalClickHouseDriver.htm)


	- [DalMsSql2012Driver](../../Class/DalMsSql2012Driver/DalMsSql2012Driver.htm);


	- [DalMsSql2012ODBCDriver](../../Class/DalMsSql2012ODBCDriver/DalMsSql2012ODBCDriver.htm);


	- [DalODBCDriver](../../Class/DalODBCDriver/DalODBCDriver.htm)


	- [DalOrcl8Driver](../../Class/DalOrcl8Driver/DalOrcl8Driver.htm);


	- [DalPostgresDriver](../../Class/DalPostgresDriver/DalPostgresDriver.htm);


	- [DalSQLiteDriver](../../Class/DalSQLiteDriver/DalSQLiteDriver.htm).


## Методы


		 Имя метода
		 Краткое описание


		 ![](../../Sub_Image.gif)
		 [CreateDescriptor](IDalDriver.CreateDescriptor.htm)
		 Метод CreateDescriptor
		 создаёт описание соединения с сервером БД.


См. также:


[Интерфейсы сборки Dal](../Dal_Interface.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
