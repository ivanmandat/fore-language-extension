# Подготовка сервера Oracle

Подготовка сервера Oracle
-


# Подготовка сервера Oracle


Процедура подготовки сервера Oracle производится администратором СУБД.


Выполнение скриптов происходит любым из доступных способов, например,
 с помощью приложения «SQL Plus»,
 входящего в стандартный пакет клиентской и серверной части СУБД Oracle.


## Создание пользователя БД (схемы)


Следующим этапом является создание пользователя БД (схемы). Данный пользователь
 (схема) необходим для хранения метаданных платформы.


create user USER_NAME
 identified by USER_PASSWORD default
 tablespace TABLESPACE_NAME temporary
 tablespace TEMP_TABLESPACE_NAME
 profile default;


grant connect to USER_NAME;


grant resource to USER_NAME;


revoke unlimited tablespace from USER_NAME;


alter user USER_NAME
 quota unlimited on TABLESPACE_NAME;


Где:


	- USER_NAME. Имя создаваемого
	 пользователя (схемы);


	- USER_PASSWORD. Пароль
	 для создаваемого пользователя (схемы);


	- TABLESPACE_NAME. Имя
	 табличного пространства для пользователя;


	- TEMP_TABLESPACE_NAME.
	 Имя временного табличного пространства для пользователя.


После выполнения всех шагов можно перейти к [созданию
 репозитория](../05_RepoMngr/Setup_RepoMngr_Work_Main.htm).


### Особенности при работе с версией Oracle 10


Начиная с версии сервера Oracle 10 необходимо расширить список грантов
 в выполняемом скрипте:


grant create table to USER_NAME;


grant create view to USER_NAME;


grant create synonym to USER_NAME;


grant create cluster to USER_NAME;


grant create database link to USER_NAME;


grant create sequence to USER_NAME;


grant alter session to USER_NAME;


### Особенности при работе с версией Oracle 12c Release 1


Начиная с версии сервера Oracle 12c Release 1 роль «resource» более
 не дает привилегию «unlimited».


При настройке сервера не выполняйте команду:


revoke
 unlimited tablespace from USER_NAME;


Попытка выполнения приведет к ошибке.


См. также:


[Дополнительные настройки
 Oracle](Setup_DB_Server_Config_Oracle_Tuning.htm) | [Подготовка
 серверной части СУБД](Setup_DB_Server_Config.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
