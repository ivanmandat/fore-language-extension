# UpdateManager

UpdateManager
-


# UpdateManager


UpdateManager - это консольное
 приложение для ОС Linux, выполняющее [установку обновления](UpdManager.chm::/Admin_UpMBObj_DoUpdate.htm)
 объектов репозитория. Приложение входит в [состав
 продукта «Форсайт. Аналитическая платформа»](../Setup_RepoMngr_Main.htm)
 и расположено в папке установки BI-сервера /opt/foresight/fp10.x-biserver/bin.


Для запуска приложения используйте скрипт UpdateManager_start.sh со
 следующими параметрами:


./UpdateManager_start.sh REPOSITORY LOGIN PASSWORD
 PEF-FILE


Где:


	- REPOSITORY. Идентификатор
	 репозитория;


	- LOGIN. Имя пользователя
	 для подключения к репозиторию;


	- PASSWORD. Пароль пользователя;


	- PEF-FILE. Путь до файла
	 обновления с расширением *.pefx.


Пример запуска приложения:


./UpdateManager_start.sh WAREHOUSE USER_NAME USER_PASSWORD
 /home/user/update_object.pefx


Для просмотра консольной справки по доступным наборам параметров запустите
 скрипт UpdateManager_start.sh без параметров.


Особенности использования приложения:


	- если используется удаленный доступ по SSH, то откройте скрипт
	 UpdateManager_start.sh на редактирование и укажите графический дисплей
	 в переменной DISPLAY:


export DISPLAY=:0


	- если используется репозиторий на базе СУБД Oracle, то откройте
	 скрипт UpdateManager_start.sh на редактирование и укажите путь до
	 TNS-файла в переменной TNS_ADMIN:


TNS_ADMIN=<путь
 до TNS-файла>


См. также:


[Приложения в составе продукта «Форсайт. Аналитическая платформа»](../Setup_RepoMngr_Main.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
