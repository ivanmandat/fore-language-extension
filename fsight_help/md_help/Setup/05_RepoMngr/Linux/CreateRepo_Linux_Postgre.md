# Создание репозитория на сервере PostgreSQL: Linux

Создание репозитория на сервере PostgreSQL: Linux
-


# Создание репозитория на сервере PostgreSQL


Для создания репозитория на сервере [PostgreSQL](../../03_DB_Server_Config/Postgres_server_preparation.htm)
 в ОС Linux:


	- Убедитесь, что на сервере PostgreSQL установлен [BI-сервер](../../UiWebSetup/Install_Web_on_Linux.htm).


	- Скачайте и распакуйте архив:


		- [Script_example_public.zip](../../UiWebSetup/Script_example_public.zip),
		 если используется схема public;


		- [Script_example_custom_scheme.zip](../../UiWebSetup/Script_example_custom_scheme.zip),
		 если используется пользовательская схема.


	- Запустите скрипт в зависимости от распакованного архива:


		- create_repo_public.sh;


		- create_repo_custom_scheme.sh.


Примечание.
 В скрипте содержатся преднастроенные параметры для создания репозитория
 со значениями, заданными по умолчанию. Ознакомьтесь со [списком
 параметров](#parameters) и при необходимости измените значения по умолчанию до запуска
 скрипта.


После выполнения скрипта с параметрами, значения которых заданы по умолчанию,
 на сервере PostgreSQL будут следующие изменения:


	- создана база данных с идентификатором NEW_DATABASE от имени
	 администратора postgres;


	- создан пользователь базы данных с именем NEW_USER. Пароль пользователя
	 - NEW_USER;


	- создан служебный пользователь с именем SERVICE_USER. Пароль
	 служебного пользователя - SERVICE_USER;


	- создана пользовательская схема с идентификатором NEW_SCHEMA
	 в базе данных с идентификатором NEW_DATABASE.


Примечание.
 Пользовательская схема создаётся только при выполнении скрипта create_repo_custom_scheme.sh.


Идентификатор созданной базы данных используется в качестве уникального
 идентификатора репозитория метаданных.


## Изменение значений параметров


Для изменения значений параметров, которые должны отличаться от значений
 по умолчанию, откройте скрипт на редактирование. Параметры для создания
 репозитория используются в качестве переменных в следующем блоке скрипта:


# postgres credentials
export PGUSERNAME=postgres
export PGPASSWORD=$PGUSERNAME
# create database
export SERVER=localhost
export PORT=5432
export DBNAME=NEW_DATABASE
# create database role
export DBROLE=NEW_USER
# set password for created role
export DBPASSWORD=NEW_USER
# set repository id
export REPOSITORY_ID=$DBNAME
# create custom scheme
export SCHEMA_NAME=NEW_SCHEMA
# work directory
export RM_WORKDIR=/opt/foresight/fp10.x-biserver/bin
export RM_FILE=/opt/foresight/fp10.x-biserver/bin/rm/current.rm4
# service user credentials
export SUSERNAME=SERVICE_USER
export SUSERPASSWORD=$SUSERNAME

Описание переменных:


	- PGUSERNAME. Имя администратора
	 СУБД с привилегией SUPERUSER. По умолчанию: postgres;


	- PGPASSWORD. Пароль администратора
	 СУБД. По умолчанию: postgres;


	- SERVER. IP-адрес или
	 DNS-имя, под которым зарегистрирован сервер базы данных СУБД. По умолчанию:
	 localhost;


	- PORT. Порт сервера СУБД.
	 По умолчанию: 5432;


	- DBNAME. Идентификатор
	 создаваемой базы данных. По умолчанию: NEW_DATABASE;


	- DBROLE. Имя создаваемого
	 пользователя базы данных. По умолчанию: NEW_USER;


	- DBPASSWORD. Пароль создаваемого
	 пользователя базы данных. По умолчанию: NEW_USER;


	- REPOSITORY_ID. Идентификатор
	 репозитория. По умолчанию: NEW_DATABASE;


	- SCHEMA_NAME. Идентификатор
	 пользовательской схемы. По умолчанию: NEW_SCHEMA;


Примечание.
 Переменная содержится только в скрипте create_repo_custom_scheme.sh.


	- RM_WORKDIR. Путь до
	 папки установки BI-сервера. По умолчанию: /opt/foresight/fp10.x-biserver/bin;


	- RM_FILE. Путь до файла
	 current.rm4, в котором хранятся скрипты для создания репозитория.
	 По умолчанию: /opt/foresight/fp10.x-biserver/bin/rm/current.rm4;


	- SUSERNAME. Имя создаваемого
	 [служебного пользователя](Setup_RepoMngr_Service_User_Linux.htm).
	 По умолчанию: SERVICE_USER;


Важно.
 Имя служебного пользователя P4AUDIT зарезервировано системой и недоступно для использования.


	- SUSERPASSWORD. Пароль
	 создаваемого служебного пользователя. По умолчанию: SERVICE_USER.


Примечание.
 Передаваемые учётные данные доступны только в рамках одного сеанса консоли,
 в котором будет выполняться скрипт.


См. также:


[Создание репозитория метаданных](Setup_CreateRepo_Linux.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
