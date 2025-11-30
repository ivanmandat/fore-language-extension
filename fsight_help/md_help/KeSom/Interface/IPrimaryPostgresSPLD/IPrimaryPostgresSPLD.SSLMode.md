# IPrimaryPostgresSPLD.SSLMode

IPrimaryPostgresSPLD.SSLMode
-


# IPrimaryPostgresSPLD.SSLMode


## Синтаксис


SSLMode: [PostgresSSLMode](../../Enums/PostgresSSLMode.htm);


## Описание


Свойство SSLMode определяет
 режим работы SSL-соединения.


## Комментарии


Свойство актуально только при настройке параметров [модуля
 безопасности баз данных](KeDb.chm::/Interface/IDatabase/IDatabase.LogonData.htm). По умолчанию используется
 режим подключения [PostgresSSLMode.Prefer](../../Enums/PostgresSSLMode.htm).


## Пример


Для выполнения примера в репозитории предполагается наличие базы данных
 с идентификатором DB_POSTGRESQL. База данных настроена на подключение
 к серверу на базе СУБД PostgreSQL.


Добавьте ссылки на системные сборки: Db, Metabase.


	Sub UserProc;

	Var

	    MB: IMetabase;

	    DB: IDatabase;

	    LogonData: IPrimaryPostgresSPLD;

	Begin

	    MB := MetabaseClass.Active;

	    DB := MB.ItemById("DB_POSTGRESQL").Edit As IDatabase;

	    // Настройки модуля безопасности

	    LogonData := DB.LogonData As IPrimaryPostgresSPLD;

	    LogonData.SSLMode := PostgresSSLMode.VerifyFull;

	    (DB As IMetabaseObject).Save;

	End Sub UserProc;


При выполнении примера в настройках базы данных будет изменён режим
 подключения с использованием SSL-соеднения.


См. также:


[IPrimaryPostgresSPLD](IPrimaryPostgresSPLD.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
