# IDalConnection

IDalConnection
-


# IDalConnection


Сборка: Dal;


## Описание


Интерфейс IDalConnection содержит
 свойства и методы для управления текущим соединением с базой данных.


## Свойства


		 Имя свойства
		 Краткое описание


		 ![](../../Property_Image.gif)
		 [Columns](IDalConnection.Columns.htm)
		 Свойство Columns возвращает
		 курсор, содержащий системную информацию о полях указанной таблицы.


		 ![](../../Property_Image.gif)
		 [Descriptor](IDalConnection.Descriptor.htm)
		 Свойство Descriptor
		 возвращает описание соединения с БД.


		 ![](../../Property_Image.gif)
		 [Indexes](IDalConnection.Indexes.htm)
		 Свойство Indexes возвращает
		 курсор, содержащий системную информацию об индексах указанной
		 таблицы.


		 ![](../../Property_Image.gif)
		 [IsDisconnected](IDalConnection.IsDisconnected.htm)
		 Свойство IsDisconnected
		 возвращает признак отсутствия соединения с БД.


		 ![](../../Property_Image.gif)
		 [Procedures](IDalConnection.Procedures.htm)
		 Свойство Procedures
		 возвращает курсор, содержащий системную информацию об указанной
		 процедуре.


		 ![](../../Property_Image.gif)
		 [Tables](IDalConnection.Tables.htm)
		 Свойство Tables возвращает
		 курсор, содержащий системную информацию об указанной таблице.


		 ![](../../Property_Image.gif)
		 [Triggers](IDalConnection.Triggers.htm)
		 Свойство Triggers возвращает
		 курсор, содержащий системную информацию о триггерах указанной
		 таблицы.


		 ![](../../Property_Image.gif)
		 [Views](IDalConnection.Views.htm)
		 Свойство Views возвращает
		 курсор, содержащий системную информацию об указанном представлении.


## Методы


		 Имя метода
		 Краткое описание


		 ![](../../Sub_Image.gif)
		 [Close](IDalConnection.Close.htm)
		 Метод Close закрывает
		 подключение к базе данных.


		 ![](../../Sub_Image.gif)
		 [Commit](IDalConnection.Commit.htm)
		 Метод Commit осуществляет
		 сохранение внесенных изменений в рамках данной транзакции.


		 ![](../../Sub_Image.gif)
		 [CreateCommand](IDalConnection.CreateCommand.htm)
		 Метод CreateCommand
		 создает команду, использующую SQL-запрос для работы с БД.


		 ![](../../Sub_Image.gif)
		 [CreateCommandO](IDalConnection.CreateCommandO.htm)
		 Метод CreateCommandO
		 создает команду, используемую для выполнения SQL-запросов в заданном
		 режиме.


		 ![](../../Sub_Image.gif)
		 [InTransaction](IDalConnection.InTransaction.htm)
		 Метод InTransaction
		 возвращает True если инициализирована транзакция с БД.


		 ![](../../Sub_Image.gif)
		 [Open](IDalConnection.Open.htm)
		 Метод Open открывает
		 подключение с базой данных.


		 ![](../../Sub_Image.gif)
		 [Rollback](IDalConnection.Rollback.htm)
		 Метод Rollback осуществляет
		 откат внесенных изменений в рамках данной транзакции.


		 ![](../../Sub_Image.gif)
		 [StartTransaction](IDalConnection.StartTransaction.htm)
		 Метод StartTransaction
		 инициализирует транзакцию с БД.


См. также:


[Интерфейсы сборки Dal](../Dal_Interface.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
