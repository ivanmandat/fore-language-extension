# Обновление версии репозитория метаданных: Linux

Обновление версии репозитория метаданных: Linux
-


# Обновление версии репозитория метаданных


Для обновления версии репозитория метаданных в ОС Linux запустите приложение
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


В качестве значения параметра --operation/-o укажите значение update-repo.
 Последующий список параметров полностью соответствует тому списку, который
 указывается при создании репозитория. Описание параметров представлено
 в подразделе «[Создание репозитория
 метаданных в OC Linux](Setup_CreateRepo_Linux.htm)».


Примеры создания в различных СУБД:


	Oracle PostgreSQL SQLite Microsoft SQL Server


		./RepoManager_start.sh -oupdate-repo -toracle
		 -sserver -mRepository -uUser -wPassword -f/opt/foresight/fp10.x-biserver/bin/rm/current.rm4


		./RepoManager_start.sh --operation=update-repo
		 --type=oracle --server=Server --schema=Repository --user=User
		 --password=Password --archive-file=/opt/foresight/fp10.x-biserver/bin/rm/current.rm4


		./RepoManager_start.sh -oupdate-repo -tpostgres
		 -s10.10.10.10 -dRepository -uUser -wPassword -f/opt/foresight/fp10.x-biserver/bin/rm/current.rm4


		./RepoManager_start.sh --operation=update-repo
		 --type=postgres --server=10.10.10.10 --database=Repository --user=User
		 --password=Password --archive-file=/opt/foresight/fp10.x-biserver/bin/rm/current.rm4


		./RepoManager_start.sh -oupdate-repo -tsqlite
		 -d/home/prognoz/test.sqlite -f/opt/foresight/fp10.x-biserver/bin/rm/current.rm4


		./RepoManager_start.sh --operation=update-repo
		 --type=sqlite --database=/home/prognoz/test.sqlite --archive-file=/opt/foresight/fp10.x-biserver/bin/rm/current.rm4


		./RepoManager_start.sh -oupdate-repo -tmssql
		 -sMSServer -dRepository -uUser -wPassword -f/opt/foresight/fp10.x-biserver/bin/rm/current.rm4


		./RepoManager_start.sh --operation=update-repo
		 --type=mssql --server=MSServer --database=Repository --user=User
		 --password=Password --archive-file=/opt/foresight/fp10.x-biserver/bin/rm/current.rm4


См. также:


[Создание и управление репозиториями
 метаданных](../Setup_RepoMngr_Work_Main.htm) | [Менеджер
 репозитория](../RepoManager_Linux.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
