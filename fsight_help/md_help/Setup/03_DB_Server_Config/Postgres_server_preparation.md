# Подготовка сервера PostgreSQL

Подготовка сервера PostgreSQL
-


# Подготовка сервера PostgreSQL


Процедура подготовки сервера PostgreSQL производится администратором
 СУБД.


Важно. Для
 обеспечения безопасности системы перед подготовкой сервера PostgreSQL
 проверьте настройки доступа к серверу в конфигурационном файле pg_hba.conf
 и настройки параметра [lc_messages](https://postgrespro.ru/docs/postgrespro/16/runtime-config-client#GUC-LC-MESSAGES)
 в конфигурационном файле postgresql.conf. Язык сообщений PostgreSQL должен
 совпадать с языковыми настройками операционной системы. Также параметр
 [standard_conforming_strings](https://postgrespro.ru/docs/postgrespro/16/runtime-config-compatible#GUC-STANDARD-CONFORMING-STRINGS) должен иметь значение «on».


Для подготовки сервера PostgreSQL выполните скрипты любым из доступных
 способов, например, с помощью приложения [pgAdmin](https://www.pgadmin.org/download/)
 или консоли psql. При выполнении скриптов учитывайте следующие особенности:


	- параметры USER_NAME,
	 DATABASE_NAME и SCHEMA_NAME
	 должны быть прописаны в верхнем регистре;


	- наименования параметров регистрозависимые и должны быть указаны
	 в кавычках. Если кавычки пропущены, то при выполнении скрипта в СУБД
	 наименования параметров будут преобразованы к нижнему регистру;


	- выполнение скриптов должно производиться администратором СУБД
	 с привилегией SUPERUSER, если при подготовке сервера PostgreSQL используется
	 консоль psql.


	Совет. Для подготовки
	 сервера PostgreSQL в ОС Linux используйте [готовый
	 скрипт](#script). После выполнения скрипта будет создан пользователь базы
	 данных NEW_USER с паролем NEW_USER, база данных NEW_DATABASE, репозиторий
	 с идентификатором NEW_DATABASE и служебный пользователь SERVICE_USER
	 с паролем SERVICE_USER.


## Создание пользователя базы данных


Для создания пользователя базы данных выполните скрипт:


CREATE ROLE "USER_NAME"
 LOGIN ENCRYPTED PASSWORD 'USER_PASSWORD'
 NOSUPERUSER INHERIT NOCREATEDB NOCREATEROLE NOREPLICATION;


Где:


	- USER_NAME. Имя создаваемого
	 пользователя;


Важно.
 Имя пользователя ADMIN недопустимо для использования.


	- USER_PASSWORD. Пароль
	 создаваемого пользователя.


## Создание базы данных


Для создания базы данных выполните скрипт:


CREATE DATABASE "DATABASE_NAME"
 WITH OWNER = "USER_NAME"
 ENCODING = 'UTF8' TABLESPACE = pg_default  LC_COLLATE = default LC_CTYPE
 = default CONNECTION LIMIT = -1;


ALTER DATABASE "DATABASE_NAME"
 SET lo_compat_privileges = 'on';


GRANT ALL ON DATABASE "DATABASE_NAME"
 TO "USER_NAME";


Где:


	- USER_NAME. Имя пользователя,
	 созданного ранее;


	- DATABASE_NAME. Имя создаваемой
	 базы данных.


При создании базы данных используется единственная поддерживаемая кодировка - UTF-8.


Важно. Создание
 базы данных выполняется через служебную базу данных postgres по умолчанию.
 Для дальнейшей подготовки сервера СУБД подключитесь к созданной базе данных.


## Создание пользовательской схемы в текущей
	 базе данных


	По умолчанию используется схема public.


Для создания пользовательской схемы в текущей базе данных выполните
 скрипт:


CREATE SCHEMA "SCHEMA_NAME" AUTHORIZATION "USER_NAME";


Где:


	- USER_NAME. Имя пользователя,
	 созданного ранее;


	- SCHEMA_NAME. Идентификатор
	 пользовательской схемы.


После выполнения действий будет создана пользовательская схема. Созданный
 на первом этапе пользователь будет являться владельцем схемы.


Для использования пользовательской схемы в качестве схемы по умолчанию
 выполните скрипт:


SET search_path TO "SCHEMA_NAME";


После выполнения действий вместо схемы public по умолчанию будет использоваться
 пользовательская схема.


Примечание.
 При поддержке типа данных Lo не рекомендуется использование нескольких
 пользовательских схем в одной базе данных.


Для получения подробной информации о работе с пользовательскими схемами
 обратитесь к [документации PostgreSQL](https://postgrespro.ru/docs/postgrespro/11/sql-createschema).


## Поддержка типа данных Lo


Для хранения многобайтовой информации в PostgreSQL используется тип
 данных Lo. По умолчанию, после создания базы данных, поддержка работы
 с данным типом отключена. Для включения поддержки типа данных Lo выполните
 скрипт:


SET search_path TO "SCHEMA_NAME";


CREATE FUNCTION loin (cstring) RETURNS lo AS 'oidin'
 LANGUAGE internal IMMUTABLE STRICT;


CREATE FUNCTION loout (lo) RETURNS cstring AS 'oidout'
 LANGUAGE internal IMMUTABLE STRICT;


CREATE FUNCTION lorecv (internal) RETURNS lo AS
 'oidrecv' LANGUAGE internal IMMUTABLE STRICT;


CREATE FUNCTION losend (lo) RETURNS bytea AS 'oidsend'
 LANGUAGE internal IMMUTABLE STRICT;


CREATE TYPE lo (INPUT = loin, OUTPUT = loout, RECEIVE
 = lorecv, SEND = losend, INTERNALLENGTH = 4, PASSEDBYVALUE);


CREATE CAST (lo AS oid) WITHOUT FUNCTION AS IMPLICIT;


CREATE CAST (oid AS lo) WITHOUT FUNCTION AS IMPLICIT;


CREATE OR REPLACE FUNCTION lo_manage() RETURNS pg_catalog.trigger
 AS '$libdir/lo' LANGUAGE C;


Где:


	- SCHEMA_NAME. Идентификатор
	 пользовательской схемы.


Примечание.
 Если используется одна или несколько пользовательских схем, то выполните
 скрипт для каждой схемы. Если пользовательская схема не создана, то выполните
 скрипт без указания параметра SCHEMA_NAME.
 По умолчанию используется схема public.


	После того как все шаги выполнены успешно можно перейти к [созданию
	 репозитория](../05_RepoMngr/Setup_RepoMngr_Work_Main.htm).


## Поддержка доменных групп


	При добавлении [доменных
	 групп](Admin.chm::/03_Admin/Groups/Admin_GroupsCreateDomain.htm) в [менеджере безопасности](Admin.chm::/Admin_Title.htm)
	 подготовьте сервер PostgreSQL для их поддержки.


	Примечание.
	 Поддержка доменных групп в PostgreSQL доступна, если на уровне СУБД
	 содержатся группы в виде ролей и пользователи, входящие в эти роли.


	Для поддержки доменных групп в PostgreSQL:


		- Соберите скрипт синхронизации пользователей и групп из Active
		 Directory или Astra Linux Directory с помощью системы управления
		 версиями Git.


		ОС
		 Linux ОС Windows

			В ОС Linux убедитесь, что установлен язык программирования
			 Ruby версии 3.2 и ниже, который используется при сборке скрипта.


			Запустите командную строку и выполните команды:


				- Debian-подобные дистрибутивы:


			apt-get install
			 ruby libpq-dev git make gcc libffi-dev ruby-dev

			git clone https://github.com/afsight/pg-ldap-sync.git

			cd pg-ldap-sync

			gem install bundler -v 1.16

			bundle _1.16_ install

			bundle install

			bundle exec rake install


				- RedHat-подобные дистрибутивы:


			dnf install
			 ruby libpq-devel git make gcc libffi-devel ruby-devel redhat-rpm-config

			git clone https://github.com/afsight/pg-ldap-sync.git

			cd pg-ldap-sync

			gem install bundler -v 1.16

			bundle _1.16_ install

			bundle install

			bundle exec rake install


				- ALT Linux:


			apt-get install
			 ruby libpq-devel git make gcc5 libffi-devel ruby-tools postgresql-devel
			 libruby-devel

			git clone https://github.com/afsight/pg-ldap-sync.git

			cd pg-ldap-sync

			gem install bundler -v 1.16

			bundle _1.16_ install

			bundle install

			bundle exec rake install


			В ОС Windows предварительно установите [RubyInstaller](https://rubyinstaller.org/)
			 версии 3.2 и ниже для работы с языком программирования Ruby,
			 который используется при сборке скрипта.


			Запустите командную строку Git CMD и выполните команды:


			git clone https://github.com/afsight/pg-ldap-sync.git

			cd pg-ldap-sync

			gem install bundler -v 1.16

			bundle _1.16_ install

			bundle install

			bundle exec rake install


	После выполнения действий будет добавлена
	 папка [pg-ldap-sync](https://github.com/afsight/pg-ldap-sync)
	 с последними исходными файлами скрипта из Git и выполнена сборка скрипта.


		- Создайте файл конфигурации lsync.yml вручную. Пример файла
		 lsync.yml при использовании Active Directory:


	# With this sample
	 config the distinction between LDAP-synchronized

	# groups/users from is done by the membership to ldap_user and

	# ldap_group. These two roles has to be defined manually before

	# pg_ldap_sync can run.

	# Параметры соединения с сервером LDAP на примере AD. В username пользователь,
	 у которого есть права на подключение (практически любой доменный пользователь
	 и пароль)

	# see also: http://net-ldap.rubyforge.org/Net/LDAP.html#method-c-new

	ldap_connection:

	    host: domain-controller.domain.com

	    port: 389

	    auth:

	        method: :simple

	        username: username@domain.com

	        password: password

	        # encryption:

	        # method: :simple_tls

	# Настройки поиска пользователей, в данном случае пользователи берутся
	 из раздела OU=Users, DC=domain, DC=com

	ldap_users:

	   base: OU=users,DC=domain,DC=com

	   # LDAP filter (according to RFC 2254)

	   # defines to users in LDAP to be synchronized

	   # далее идет фильтр вхождений в раздел, ищутся только
	 собственно пользователи по классам объектов, также можно указать выборку
	 по другим атрибутам

	   filter: (&(objectClass=person)(objectClass=organizationalPerson)(givenName=*)(sn=*)(sAMAccountName=*))

	   # this attribute is used as PG role name

	   # задается атрибут из которого будет формироваться
	 имя пользователя в СУБД

	   name_attribute: sAMAccountName

	   # lowercase name for use as PG role name

	   # настройка перевода имени пользователя в нижний
	 регистр

	   lowercase_name: false

	   # uppercase name for use as PG role name

	   # настройка перевода имени пользователя в верхний
	 регистр (предпочтительно для работы с платформой)

	   uppercase_name: false

	# Search parameters for LDAP groups which should be synchronized

	# Всё то же самое для групп

	ldap_groups:

	    base: OU=users,DC=domain,DC=com

	    filter: (cn=domain.*)

	    # this attribute is used as PG role name

	    name_attribute: cn

	    # lowercase name for use as PG role name

	    lowercase_name: false

	    # uppercase name for use as PG role name

	    uppercase_name: false

	    # this attribute must reference to all member
	 DN's of the given group

	    member_attribute: member

	    # True if use Astra Linux Domain

	    ald_domain: false

	# Connection parameters to PostgreSQL server

	# Параметры подключения к серверу PostgreSQL

	# see also: http://rubydoc.info/gems/pg/PG/Connection#initialize-instance_method

	pg_connection:

	    host: database_host

	    dbname: postgres

	    user: postgres

	    password: postgres

	pg_users:

	    # Filter for identifying LDAP generated users
	 in the database.

	    # Фильтр пользователей для создания и проверки,
	 нужна отдельная роль, в данном случае ldap_users,пользователи в ней
	 будут сравниваться с тем что пришло поиском и удаляться или добавляться
	 в случае различий

	    # It's the WHERE-condition to "SELECT
	 rolname, oid FROM pg_roles"

	    filter: oid IN (SELECT pam.member FROM pg_auth_members
	 pam JOIN pg_roles pr ON pr.oid=pam.roleid WHERE pr.rolname='ldap_users')

	    # Options for CREATE RULE statements

	    create_options: LOGIN IN ROLE ldap_users

	pg_groups:

	    # Filter for identifying LDAP generated groups
	 in the database.

	    # То же самое для групп

	    # It's the WHERE-condition to "SELECT
	 rolname, oid FROM pg_roles"

	    filter: oid IN (SELECT pam.member FROM pg_auth_members
	 pam JOIN pg_roles pr ON pr.oid=pam.roleid WHERE pr.rolname='ldap_groups')

	    # Options for CREATE RULE statements

	    create_options: NOLOGIN IN ROLE ldap_groups

	    grant_options:


	Примечание.
	 При создании файла lsync.yml в Astra Linux Directory используйте значение
	 «cn» вместо «sAMAccountName» и задайте значение true
	 в параметре ald_domain. Параметр ald_domain используется для поддержки
	 доменных групп в Astra Linux Directory.


		- Проверьте [валидность](https://yaml-online-parser.appspot.com/) созданного
		 файла lsync.yml.


		- Выполните скрипт:


			- для одноразовой синхронизации пользователей и групп
			 запустите скрипт с помощью команды:


	/usr/local/bin/pg_ldap_sync
	 -c <полный путь до файла конфигурации>/lsync.yml


	После выполнения действия скрипт будет
	 запущен и синхронизация выполнится один раз.


			- для периодической синхронизации пользователей и групп:


		ОС
		 Linux ОС Windows

			В ОС Linux настройте автоматический запуск скрипта с помощью
			 утилиты [Cron](https://help.ubuntu.ru/wiki/cron)
			 (Command Run ON) - система для автоматического запуска программ
			 и скриптов на сервере в определённое время:


				- Выполните команду для открытия и редактирования
				 текстового редактора, в котором содержится список выполняемых
				 команд:


			crontab -e


				- Выполните команду для добавления строки в текстовый
				 редактор, при выполнении которой будет загружаться файл
				 конфигурации lsync.yml:


			*/<количество минут>
			 * * * * /usr/local/bin/pg_ldap_sync -c <полный
			 путь до файла конфигурации>/lsync.yml


				- Дополнительно добавьте пустую строку.


				- Сохраните изменения в текстовом редакторе.


			После выполнения действий скрипт будет запускаться с указанной
			 периодичностью, например, каждые 5 минут.


			В ОС Windows настройте автоматический запуск скрипта с помощью
			 планировщика заданий Windows.


		- Распределите [привилегии](Admin.chm::/04_SecurityPolicy/Admin_Priv.htm)
		 между доменными группами в [менеджере безопасности](Admin.chm::/Admin_Title.htm).
		 После чего для пользователей соответствующих групп будут раздаваться
		 гранты на таблицы репозитория.


	После выполнения действий для пользователей, входящих в добавленные
	 доменные группы, будет доступно подключение и работа с репозиторием.


## Обновление репозитория


	Если репозиторий на базе СУБД PostgreSQL был создан в версиях Prognoz Platform и использует
	 тип данных lo, то его необходимо обновить, выполнив следующий скрипт:


	CREATE OR REPLACE FUNCTION losend (lo) RETURNS
	 bytea AS 'oidsend' LANGUAGE internal IMMUTABLE STRICT;


## Особенности работы с СУБД PostgreSQL


Конфигурация по умолчанию для серверов PostgreSQL включает в себя функцию
 автоочистки - освобождение пространства, занимаемого удалёнными из таблиц
 данными, с помощью SQL-команды VACUUM. Также производится обновление статистики,
 которая используется планировщиком для выбора способа выполнения запросов.
 Если предполагается интенсивная работа по изменению данных в таблицах,
 то рекомендуется настроить конфигурацию таким образом, чтобы автоочистка
 производилась в периоды малых нагрузок на сервер (ночью, в выходные).
 Настройку можно производить в соответствии с документацией, доступной
 на [сайте разработчика](https://postgrespro.ru/docs/postgrespro/16/routine-vacuuming#AUTOVACUUM).


## Пример готового скрипта для СУБД PostgreSQL
	 в ОС Linux


	В примере содержатся все части выделенных скриптов для СУБД PostgreSQL:


		- скачайте и распакуйте
		 архив [Script_example_public.zip](../UiWebSetup/Script_example_public.zip),
		 если используется схема public;


		- скачайте и распакуйте
		 архив [Script_example_custom_scheme.zip](../UiWebSetup/Script_example_custom_scheme.zip),
		 если используется пользовательская схема.


См. также:


[Подготовка серверной части СУБД](Setup_DB_Server_Config.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
