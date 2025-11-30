# Создание репозитория метаданных: Linux

Создание репозитория метаданных: Linux
-


# Создание репозитория метаданных
 в OC Linux


Для создания репозитория метаданных в ОС Linux запустите приложение
 [RepoManager](../RepoManager_Linux.htm), которое расположено
 в папке установки BI-сервера /opt/foresight/fp10.x-biserver/bin.


Для запуска приложения используйте скрипт RepoManager_start.sh со следующими
 параметрами:


./RepoManager_start.sh --operation=Значение [options]


./RepoManager_start.sh -oЗначение [options]


Где:


	- --operation или -o. Выполняемая операция. Обязательный
	 параметр;


	- Значение. Значение параметра;


	- [options]. Дополнительные
	 параметры, зависящие от выполняемой операции.


В качестве значения параметра --operation/-o укажите значение create-repo.
 Далее необходимо указать тип СУБД, к которой будет осуществляться подключение
 и создание репозитория. Параметр имеет полное название --type
 или краткое -t и принимает следующие
 значения:


	- postgres. Сервер на
	 базе СУБД PostgreSQL;


	- oracle. Сервер на базе
	 Oracle Database Server;


	- sqlite. Репозиторий
	 во встраиваемой СУБД SQLite;


	- mssql. Сервер на базе
	 СУБД Micsoft SQL Server.


Дальнейший набор параметров зависит от выбранного типа СУБД.


	Oracle PostgreSQL SQLite Microsoft SQL Server

		Параметры для Oracle:


			- --archive-file=Путь
			 или -fПуть - путь
			 к файлу current.rm4, в котором хранятся скрипты для создания
			 репозитория;


			- --server=Сервер
			 или -sСервер - имя
			 сервера. Данное имя и порт сервера должны быть определены
			 в файле tnsnames.ora, который располагается в папке клиента
			 СУБД. По умолчанию используется порт 1521;


			- --schema=Схема
			 или -mСхема - имя
			 схемы, в которой будет создан репозиторий;


			- --user=Имя или
			 -uИмя - имя пользователя
			 для подключения;


			- --password=Пароль
			 или -wПароль - пароль
			 пользователя для подключения.


		Пример:


		./RepoManager_start.sh -ocreate-repo -toracle
		 -sserver -mRepository -uUser -wPassword -f/opt/foresight/fp10.x-biserver/bin/rm/current.rm4


		./RepoManager_start.sh --operation=create-repo
		 --type=oracle --server=Server --schema=Repository --user=User
		 --password=Password --archive-file=/opt/foresight/fp10.x-biserver/bin/rm/current.rm4


		Параметры для PostgreSQL:


			- --archive-file=Путь
			 или -fПуть - путь
			 к файлу current.rm4, в котором хранятся скрипты для создания
			 репозитория;


			- --server=Сервер
			 или -sСервер - имя
			 или IP-адрес сервера СУБД;


			- --port=Порт
			 или -pПорт - порт
			 сервера СУБД. Необязательный параметр. Если не задан, то используется
			 порт 5432 по умолчанию;


			- --database=БД
			 или -dБД - имя базы
			 данных на сервере;


			- --user=Имя или
			 -uИмя - имя пользователя
			 для подключения;


			- --password=Пароль
			 или -wПароль - пароль
			 пользователя для подключения;


			- --schema=Схема
			 или -mСхема - имя
			 пользовательской схемы в БД. Необязательный параметр. Если
			 не задан, то используется схема по умолчанию public;


			- --case-sensitive
			 или -i - подключение
			 к БД с учётом регистра. При [подготовке
			 серверной части СУБД PostgreSQL](../../03_DB_Server_Config/Postgres_server_preparation.htm) параметры задаются в верхнем
			 регистре.


		Пример:


		./RepoManager_start.sh -ocreate-repo -tpostgres
		 -s10.10.10.10 -dRepository -uUser -wPassword -f/opt/foresight/fp10.x-biserver/bin/rm/current.rm4
		 -i


		./RepoManager_start.sh --operation=create-repo
		 --type=postgres --server=10.10.10.10 --database=Repository --user=User
		 --password=Password --archive-file=/opt/foresight/fp10.x-biserver/bin/rm/current.rm4
		 --case-sensitive


		Также существует альтернативный способ [создания
		 репозитория](CreateRepo_Linux_Postgre.htm) на сервере [PostgreSQL](../../03_DB_Server_Config/Postgres_server_preparation.htm).


		Примечание.
		 Для создания репозитория в СУБД PostgreSQL рекомендуется использовать
		 приложение RepoManager.


		Параметры для SQLite:


			- --archive-file=Путь
			 или -fПуть - путь
			 к файлу current.rm4, в котором хранятся скрипты для создания
			 репозитория;


			- --database=Путь
			 или -dПуть - путь
			 к файлу с БД SQLite


		Пример:


		./RepoManager_start.sh -ocreate-repo -tsqlite
		 -d/home/files/test.sqlite -f/opt/foresight/fp10.x-biserver/bin/rm/current.rm4


		./RepoManager_start.sh --operation=create-repo
		 --type=sqlite --database=/home/files/test.sqlite --archive-file=/opt/foresight/fp10.x-biserver/bin/rm/current.rm4


		Параметры для Microsoft SQL Server:


			- --archive-file=Путь
			 или -fПуть - путь
			 к файлу current.rm4, в котором хранятся скрипты для создания
			 репозитория;


			- --server=Сервер
			 или -sСервер - имя
			 или IP-адрес сервера СУБД;


			- --port=Порт
			 или -pПорт - порт
			 сервера СУБД. Необязательный параметр. Если не задан, то используется
			 порт 1433 по умолчанию;


			- --database=БД
			 или -dБД - имя базы
			 данных на сервере;


			- --user=Имя или
			 -uИмя - имя пользователя
			 для подключения;


			- --password=Пароль
			 или -wПароль - пароль
			 пользователя для подключения;


			- --schema=Схема
			 или -mСхема - имя
			 схемы в БД. Необязательный параметр. Если не задан, то используется
			 схема dbo;


			- --case-sensitive
			 или -i - подключение
			 к БД с чувствительностью к регистру. Необязательный параметр.
			 Если не задан, то регистр не учитывается.


		Пример:


		./RepoManager_start.sh -ocreate-repo -tmssql
		 -sMSServer -dRepository -uUser -wPassword -f/opt/foresight/fp10.x-biserver/bin/rm/current.rm4


		./RepoManager_start.sh --operation=create-repo
		 --type=mssql --server=MSServer --database=Repository --user=User
		 --password=Password --archive-file=/opt/foresight/fp10.x-biserver/bin/rm/current.rm4


При запуске RepoManager с помощью скрипта RepoManager_start.sh может
 возникнуть ошибка настроек локализации. Для решения проблемы обратитесь
 к разделу «[Проблемы
 при установке и обновлении](faq.chm::/Errors/Error_when_installing_and_updating.htm#1_7)».


См. также:


[Создание и управление репозиториями
 метаданных](../Setup_RepoMngr_Work_Main.htm) | [Менеджер
 репозитория](../RepoManager_Linux.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
