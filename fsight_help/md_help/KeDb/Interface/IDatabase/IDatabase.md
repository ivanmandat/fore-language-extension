# IDatabase

IDatabase
-


# IDatabase


Сборка: Db;


## Описание


Интерфейс IDatabase содержит
 свойства и методы объекта репозитория - [База данных](UiNavObj.chm::/database/UiDb_database.htm).


## Иерархия наследования


IDatabase


## Комментарии


При создании новой базы данных для её корректной работы необходимо,
 чтобы в настройках был задан определенный минимальный набор свойств. Свойству
 [UseMetabaseLogonData](IDatabase.UseMetabaseLogonData.htm)
 по умолчанию установлено значение False,
 при этом для базы данных необходимо задать:


	- [DriverId](IDatabase.DriverId.htm);


	- [SecurityPackage](IDatabase.SecurityPackage.htm);


	- [LogonData](IDatabase.LogonData.htm);


	- [Authentication](IDatabase.Authentication.htm) -
	 при необходимости изменить способ аутентификации.


При установке свойству [UseMetabaseLogonData](IDatabase.UseMetabaseLogonData.htm)
 значения True будут использоваться
 настройки, заданные при подключении к репозиторию.


## Свойства


		 Имя свойства
		 Краткое описание


		 ![](../../Property_Image.gif)
		 [Authentication](IDatabase.Authentication.htm)
		 Свойство Authentication
		 определяет тип аутентификации при подключении к базе данных.


		 ![](../../Property_Image.gif)
		 [AutoAdjustRights](IDatabase.AutoAdjustRights.htm)
		 Свойство AutoAdjustRights
		 определяет, будут ли раздаваться права на все доступные объекты
		 при подключении к базе данных.


		 ![](../../Property_Image.gif)
		 [Credentials](IDatabase.Credentials.htm)
		 Свойство Credentials
		 определяет учётные данные пользователя, используемые при автоматическом
		 подключении к базе данных.


		 ![](../../Property_Image.gif)
		 [DriverId](IDatabase.DriverId.htm)
		 Свойство DriverId определяет
		 идентификатор драйвера базы данных.


		 ![](../../Property_Image.gif)
		 [GrantCurrentRights](IDatabase.GrantCurrentRights.htm)
		 Свойство GrantCurrentRights
		 определяет, будут ли раздаваться права пользователю БД в новой
		 схеме, при изменении имени схемы или сервера в свойствах БД.


		 ![](../../Property_Image.gif)
		 [LoginPrompt](IDatabase.LoginPrompt.htm)
		 Свойство LoginPrompt
		 определяет, будет ли производиться автоматическое подключение
		 к базе данных при входе в репозиторий.


		 ![](../../Property_Image.gif)
		 [LogonData](IDatabase.LogonData.htm)
		 Свойство LogonData
		 возвращает дополнительные параметры модуля безопасности.


		 ![](../../Property_Image.gif)
		 [ODBC](IDatabase.ODBC.htm)
		 Свойство находится в стадии разработки.


		 ![](../../Property_Image.gif)
		 [RevokeGrantedRights](IDatabase.RevokeGrantedRights.htm)
		 Свойство RevokeGrantedRights
		 определяет, будут ли забираться права пользователя БД в старой
		 схеме, при изменении имени схемы или сервера в свойствах БД.


		 ![](../../Property_Image.gif)
		 [Role](IDatabase.Role.htm)
		 Свойство Role определяет
		 настройки использования роли приложения.


		 ![](../../Property_Image.gif)
		 [SecurityPackage](IDatabase.SecurityPackage.htm)
		 Свойство SecurityPackage
		 определяет идентификатор пакета безопасности базы данных.


		 ![](../../Property_Image.gif)
		 [SupportBinaryProtocol](IDatabase.SupportBinaryProtocol.htm)
		 Свойство SupportBinaryProtocol
		 определяет, будут ли для работы с сервером PostgreSQL использоваться
		 запросы в бинарном виде.


		 ![](../../Property_Image.gif)
		 [SupportDecimal](IDatabase.SupportDecimal.htm)
		 Свойство SupportDecimal
		 определяет возможность работы с вещественными полями как с полями
		 десятичного типа.


		 ![](../../Property_Image.gif)
		 [Unicode](IDatabase.Unicode.htm)
		 Свойство Unicode определяет,
		 будут ли строковые поля таблиц базы данных создаваться с типом
		 NVARCHAR.


		 ![](../../Property_Image.gif)
		 [UseMetabaseCredentials](IDatabase.UseMetabaseCredentials.htm)
		 Свойство UseMetabaseCredentials
		 определяет, будут ли для подключения к базе данных использоваться
		 учетные данные, указанные при входе в систему.


		 ![](../../Property_Image.gif)
		 [UseMetabaseLogonData](IDatabase.UseMetabaseLogonData.htm)
		 Свойство UseMetabaseLogonData
		 определяет, будут ли переопределены настройки подключения к БД.


		 ![](../../Property_Image.gif)
		 [UseServiceLogonData](IDatabase.UseServiceLogonData.htm)
		 Свойство UseServiceLogonData
		 определяет, будут ли переопределены настройки подключения для
		 подключения через веб-сервис «Форсайт. Аналитическая платформа».


См. также:


[Интерфейсы сборки Db](../KeDb_Interface.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
