# ISecurityConnection

ISecurityConnection
-


# ISecurityConnection


Сборка: Metabase;


## Описание


Интерфейс ISecurityConnection
 содержит свойства и методы соединения с сервером БД.


## Иерархия наследования


           ISecurityConnection


## Комментарии


Соединение, описываемое интерфейсом ISecurityConnection, также может
 быть приведено к интерфейсам [ISecurityConnection2](../ISecurityConnection2/ISecurityConnection2.htm)
 и [ISecurityConnection3](../ISecurityConnection3/ISecurityConnection3.htm).


## Свойства


		 Имя свойства
		 Краткое описание


		 ![](../../Property_Image.gif)
		 [Checks](ISecurityConnection.Checks.htm)
		 Свойство Checks возвращает
		 курсор с метаданными ограничений указанной таблицы.


		 ![](../../Property_Image.gif)
		 [Columns](ISecurityConnection.Columns.htm)
		 Свойство Columns возвращает
		 курсор, содержащий системную информацию о полях указанной таблицы.


		 ![](../../Property_Image.gif)
		 [Driver](ISecurityConnection.Driver.htm)
		 Свойство Driver возвращает
		 идентификатор драйвера БД, с использованием которого осуществлено
		 данное подключение.


		 ![](../../Property_Image.gif)
		 [Indexes](ISecurityConnection.Indexes.htm)
		 Свойство Indexes возвращает
		 курсор, содержащий системную информацию об индексах указанной
		 таблицы.


		 ![](../../Property_Image.gif)
		 [LogonData](ISecurityConnection.LogonData.htm)
		 Свойство LogonData
		 возвращает параметры модуля безопасности, использованного при
		 создании данного подключения.


		 ![](../../Property_Image.gif)
		 [Procedures](ISecurityConnection.Procedures.htm)
		 Свойство Procedures
		 возвращает курсор, содержащий системную информацию об указанной
		 процедуре.


		 ![](../../Property_Image.gif)
		 [RealDriver](ISecurityConnection.RealDriver.htm)
		 Свойство RealDriver
		 возвращает реальный драйвер, с помощью которого осуществлено подключение
		 к БД.


		 ![](../../Property_Image.gif)
		 [SingleUserMode](ISecurityConnection.SingleUserMode.htm)
		 Свойство SingleUserMode
		 возвращает признак возможности работы с сервером БД только под
		 одной учетной записью.


		 ![](../../Property_Image.gif)
		 [Tables](ISecurityConnection.Tables.htm)
		 Свойство Tables возвращает
		 курсор, содержащий системную информацию об указанной таблице.


		 ![](../../Property_Image.gif)
		 [Triggers](ISecurityConnection.Triggers.htm)
		 Свойство Triggers возвращает
		 курсор, содержащий системную информацию о триггерах указанной
		 таблицы.


		 ![](../../Property_Image.gif)
		 [UserIsAdmin](ISecurityConnection.UserIsAdmin.htm)
		 Свойство UserIsAdmin
		 возвращает признак создания текущего соединения с использованием
		 учетных данных администратора.


		 ![](../../Property_Image.gif)
		 [UserIsNT](ISecurityConnection.UserIsNT.htm)
		 Свойство UserIsNT возвращает
		 признак создания текущего соединения с использованием учетных
		 данных доменного пользователя.


		 ![](../../Property_Image.gif)
		 [UserNameDb](ISecurityConnection.UserNameDb.htm)
		 Свойство UserNameDb
		 возвращает наименование пользователя, под которым осуществлено
		 подключение, в соответствии с параметрами пользователя в базе
		 данных.


		 ![](../../Property_Image.gif)
		 [UserNameLo](ISecurityConnection.UserNameLo.htm)
		 Свойство UserNameLo
		 возвращает наименование пользователя, под которым осуществлено
		 подключение, в соответствии с параметрами пользователя в менеджере
		 безопасности.


		 ![](../../Property_Image.gif)
		 [UserSid](ISecurityConnection.UserSid.htm)
		 Свойство UserSid возвращает
		 идентификатор субъекта безопасности в строковом виде.


		 ![](../../Property_Image.gif)
		 [Views](ISecurityConnection.Views.htm)
		 Свойство Views возвращает
		 курсор, содержащий системную информацию об указанном представлении.


## Методы


		 Имя метода
		 Краткое описание


		 ![](../../Sub_Image.gif)
		 [CreateCommand](ISecurityConnection.CreateCommand.htm)
		 Метод CreateCommand
		 создает новый объект, используемый для работы с БД посредством
		 SQL-запросов.


		 ![](../../Sub_Image.gif)
		 [CreateCommandO](ISecurityConnection.CreateCommandO.htm)
		 Метод CreateCommandO
		 новый объект, используемый для работы с БД посредством SQL-запросов
		 в заданном режиме.


		 ![](../../Sub_Image.gif)
		 [DbObject](ISecurityConnection.DbObject.htm)
		 Метод DbObject возвращает
		 идентификатор объекта с префиксом базы, соответствующей текущему
		 репозиторию.


		 ![](../../Sub_Image.gif)
		 [Discover](ISecurityConnection.Discover.htm)
		 Метод Discover возвращает
		 выбранный тип курсора, содержащий информацию об объектах в СУБД
		 репозитория.


		 ![](../../Sub_Image.gif)
		 [InTransaction](ISecurityConnection.InTransaction.htm)
		 Метод InTransaction
		 возвращает признак наличия незавершенной транзакции.


		 ![](../../Sub_Image.gif)
		 [IsDisconnected](ISecurityConnection.IsDisconnected.htm)
		 Метод IsDisconnected
		 возвращает признак отключения соединения с сервером БД.


		 ![](../../Sub_Image.gif)
		 [OpenSame](ISecurityConnection.OpenSame.htm)
		 Метод OpenSame открывает
		 новое соединение с сервером БД с теми же параметрами, что и у
		 текущего соединения.


		 ![](../../Sub_Image.gif)
		 [StartTransaction](ISecurityConnection.StartTransaction.htm)
		 Метод StartTransaction
		 инициализирует новую транзакцию с БД.


См. также:


[Интерфейсы сборки Metabase](../KeSom_Interface.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
