# Создание службы для запуска планировщика задач

Создание службы для запуска планировщика задач
-


# Создание службы для запуска планировщика задач


Планировщик задач продукта «Форсайт. Аналитическая платформа»
 может быть запущен автоматически при загрузке ОС без необходимости осуществления
 входа в систему. То есть планировщик задач может быть установлен на сервер
 приложений в локальной сети в виде службы.


Важно. Планировщик
 на сервере приложений и [BI-сервер](Setup.chm::/UiWebSetup/UiWebSetup_TitlePage.htm)
 рекомендуется запускать на разных серверах.


Служба - приложение, автоматически запускаемое при запуске ОС и выполняющееся
 вне зависимости от статуса пользователя.


Создание службы планировщика задач выполняется после [создания
 конфигурационного файла](UiAppSrv_Work_AppSrvXml.htm) и отличается в зависимости от используемой
 ОС.


	 ОС Linux ОС Windows


		Запуск планировщика задач в ОС Linux выполняется с помощью init-скрипта
		 для системы инициализации. Для этого:


			- Создайте службу scheduler.service с помощью команды:


		nano /etc/systemd/system/scheduler.service


		Примечание.
		 Для выполнения команды требуется наличие установленного консольного
		 текстового редактора [nano](https://www.nano-editor.org/).


			- Задайте для службы scheduler.service следующие переменные:


				- LC_NAME.
				 Задаёт настройки локализации наименований.


		Например:


		LC_NAME=ru_RU.UTF-8


				- LANG. Задаёт
				 настройки локализации.


		Например:


		LANG=en_US.UTF-8


		Примечание.
		 Убедитесь, что заданная локаль содержится региональных настройках
		 системы.


		Для проверки региональных настроек
		 системы выполните команду:


		locale -a


		Если локаль «en_US.UTF-8» не содержится
		 в списке, то выполните следующую команду и выберите данную локаль
		 в интерактивном режиме:


		sudo dpkg-reconfigure
		 locales


		При необходимости убедитесь, что
		 в файле /etc/locale.gen раскомментирована строка «en_US.UTF-8».


				- PP_LOG.
				 Задаёт выведение отладочной информации о работе планировщика
				 в файл.


		Например:


		PP_LOG=1


		По умолчанию отладочная информация
		 будет писаться в файл /var/log/syslog, для смены пути и наименования
		 файла [внесите
		 изменения в реестр](KnowledgeBase.chm::/01_Fore/KB000030/KnowledgeBase_KB000030_1.htm#scheduler).


				- TNS_ADMIN.
				 Указывает папку расположения конфигурационных файлов сетевого
				 интерфейса SQL*Net. Настройка обязательна только при использовании
				 СУБД Oracle.


		Например:


		TNS_ADMIN=/opt/foresight/fp10.x-biserver


				- WSFCfp_HOME.
				 Указывает папку расположения фреймворка WSO2 WSF/C для
				 использования веб-служб в продукте «Форсайт. Аналитическая платформа».
				 Настройка обязательна только при использовании СУБД Oracle.


		Например:


		WSFCfp_HOME=/opt/foresight/fp10.x-biserver/bin


				- LD_LIBRARY_PATH.
				 Указывает путь расположения динамических библиотек. Настройка
				 обязательна только при использовании СУБД Oracle.


		Например:


		LD_LIBRARY_PATH=$WSFCfp_HOME:$LD_LIBRARY_PATH


				- DISPLAY.
				 Указывает номер дисплея, на котором выполняется отрисовка
				 графики. Например:


		DISPLAY=:987


				- ORACLE_HOME.
				 Указывает папку установки клиента СУБД Oracle. Настройка
				 обязательна только при использовании СУБД Oracle.


		Например:


		ORACLE_HOME=/usr/lib/oracle/12.1/client64/


				- LSHOST.
				 Указывает расположение серверов лицензии.


		Например:


		LSHOST=server1~server2


				- PATH. Указывает
				 расположение переменной окружения PATH. Настройка обязательна
				 только при использовании СУБД Oracle.


		Например:


		PATH=$WSFCfp_HOME:$PATH


			- Для команды запуска укажите полный путь расположения
			 конфигурационного файла, в котором заданы параметры подключения
			 к репозиторию и запускаемые объекты. Также в команде запуска
			 могут использоваться следующие параметры:


				- -d. Признак
				 запуска в режиме службы. Укажите абсолютный путь расположения
				 scheduler.xml;


				- -p. Параметр
				 для определения пользовательской папки создания pid-файла.
				 Укажите желаемый путь расположения pid-файла. Параметр
				 используется только с параметром -d.


				- -x. Признак
				 отключения перенаправления вывода отладочной информации
				 планировщика. Параметр актуален для использования только
				 вместе с параметром -d.
				 По умолчанию отладочная информация будет записываться
				 в файл /var/log/syslog. Если параметр -x
				 задан, то используется стандартный поток вывода, который
				 определяется способом запуска планировщика:


					- при запуске
					 из консоли - стандартным потоком вывода будет
					 сама консоль;


					- при запуске
					 службы системы инициализации systemd - стандартным
					 потоком вывода будет файл /var/log/syslog или файл,
					 переопределённый с помощью параметра StandardOutput.


		StandardOutput=file:/var/temp

		ExecStart=/opt/foresight/fp10.x-biserver/bin/Scheduler
		 -dx /opt/foresight/fp10.x-biserver/bin/scheduler.xml


			- Перезапустите процесс systemd с помощью команды:


		sudo systemctl
		 daemon-reload


			- Запустите службу scheduler.service с помощью команды:


		sudo systemctl
		 start scheduler.service


		Примечание.
		 Перед запуском планировщика задач удостоверьтесь, что в файле
		 [registry.reg](Setup.chm::/UiWebSetup/03_Setup_Web/config_and_setting.htm)
		 или [Metabases.xml](Setup.chm::/06_AK_Client_Config/Configuring_repository_list_in_the_system_registry.htm#metabase_xml_list)
		 указана схема, для которой запускается планировщик.


		В результате выполнения действий в ОС Linux будет создана и
		 запущена служба планировщика задач.


		[![](../Opened.gif)![](../Closed.gif)Дополнительные
		 команды для работы со службой](javascript:TextPopup(this))


				- для остановки запущенной службы выполните команду:


			sudo systemctl
			 stop scheduler.service


				- для перезапуска запущенной службы выполните команду:


			sudo systemctl
			 restart scheduler.service


				- для получения статуса службы выполните команду:


			sudo systemctl
			 status scheduler.service


		Пример настроек службы scheduler.service в различных системах
		 инициализации при использовании СУБД Oracle:


		[![](../Opened.gif)![](../Closed.gif)Настройка
		 для ОС с системой инициализации Upstart](javascript:TextPopup(this))


			description "Task Scheduler"


			start on runlevel [2345]

			stop on runlevel [!2345]


			respawn

			respawn limit 10 5

			umask 022


			env LC_NAME=ru_RU.UTF-8

			env LANG=en_US.UTF-8

			env TNS_ADMIN=/opt/foresight/fp10.x-biserver

			env WSFCFP_HOME=/opt/foresight/fp10.x-biserver/bin

			env LD_LIBRARY_PATH=$WSFCFP_HOME:$LD_LIBRARY_PATH

			env DISPLAY=:987

			env ORACLE_HOME=/usr/lib/oracle/12.1/client64/

			env LSHOST=server1~server2

			env PATH=$WSFCFP_HOME:$PATH


			chdir $WSFCFP_HOME


			expect stop


			# 'sshd -D' leaks stderr and confuses things in conjunction
			 with 'console log'

			console none


			pre-start script

			    test -x $WSFCFP_HOME/Scheduler
			 || { stop; exit 0; }

			end script


			# if you used to set SSHD_OPTS in /etc/default/ssh, you can
			 change the

			# 'exec' line here instead

			exec $WSFCFP_HOME/Scheduler
			 -d $WSFCFP_HOME/scheduler.xml


		[![](../Opened.gif)![](../Closed.gif)Настройка
		 для ОС с системой инициализации systemd](javascript:TextPopup(this))


			# systemctl start scheduler.service

			# systemctl status scheduler.service


			[Unit]

			Description=Task Scheduler

			After=syslog.target


			[Service]

			Environment=LC_NAME=ru_RU.UTF-8

			Environment=LANG=en_US.UTF-8

			Environment=TNS_ADMIN=/opt/foresight/fp10.x-biserver

			Environment=WSFCFP_HOME=/opt/foresight/fp10.x-biserver/bin

			Environment=LD_LIBRARY_PATH=$WSFCFP_HOME:$LD_LIBRARY_PATH

			Environment=DISPLAY=:987

			Environment=ORACLE_HOME=/usr/lib/oracle/12.1/client64/

			Environment=LSHOST=server1~server2

			Environment=PATH=$WSFCFP_HOME:$PATH


			Type=forking

			PIDFile=/var/run/scheduler.pid


			WorkingDirectory=/opt/foresight/fp10.x-biserver/bin

			ExecStart=/opt/foresight/fp10.x-biserver/bin/Scheduler
			 -d /opt/foresight/fp10.x-biserver/bin/scheduler.xml

			Restart=on-abort


			Примечание.
			 Для команды WorkingDirectory
			 укажите абсолютный путь расположения бинарных файлов BI-сервера.
			 Для команды ExecStart
			 укажите абсолютный путь расположения исполняемого файла планировщика,
			 а также абсолютный путь расположения scheduler.xml при использовании
			 параметра -d.


		Пример настроек службы scheduler.service c системой инициализации
		 systemd при использовании СУБД PostgreSQL:


		[![](../Opened.gif)![](../Closed.gif)Настройка
		 для ОС с системой инициализации systemd](javascript:TextPopup(this))


			[Unit]

			Description=Scheduler

			After=syslog.target


			[Service]

			Environment=LC_NAME=ru_RU.UTF-8

			Environment=LANG=en_US.UTF-8

			Environment=DISPLAY=:987

			Environment=LSHOST=server1~server2


			Type=forking

			PIDFile=/var/run/scheduler.pid


			WorkingDirectory=/opt/foresight/fp10.x-biserver/bin

			ExecStart=/opt/foresight/fp10.x-biserver/bin/Scheduler
			 -d /opt/foresight/fp10.x-biserver/bin/scheduler.xml

			Restart=on-abort


			Примечание. Для команды WorkingDirectory укажите абсолютный путь расположения
			 бинарных файлов BI-сервера. Для команды ExecStart укажите абсолютный путь расположения
			 исполняемого файла планировщика, а также абсолютный путь расположения
			 scheduler.xml при использовании параметра -d.


		Примечание.
		 При использовании пользовательских папок в конфигурационных переменных
		 службы планировщика задач укажите полный путь их расположения.


		Для создания службы планировщика в ОС Windows задач запустите
		 командную строку от имени администратора и выполните команду:


		sc.exe create FPScheduler binpath= "C:\Program
		 Files\Foresight\Analytics Platform 10.x\Scheduler.exe"
		 start= auto


		Где:


			- FPScheduler.
			 Имя службы планировщика задач. Имя службы планировщика задач
			 может быть изменено;


			- binpath. Полный
			 путь до файла Scheduler.exe;


			- start= auto.
			 Тип запуска службы: служба, которая автоматически запускается
			 при каждой перезагрузке системы и даже в том случае, если
			 в систему не вошел ни один пользователь.


		Примечание.
		 Если между параметром (binpath
		 или start) и его значением
		 отсутствует пробел, например, start=auto вместо start= auto, то
		 произойдёт сбой выполнения команды.


		При успешном выполнении команды будет выведено сообщение: «[SC]
		 CreateService: успех».


		Для запуска созданной службы выполните команду:


		net start FPScheduler


		При успешном выполнении команды будут выведено сообщение: «Служба
		 "FPScheduler" успешно запущена».


		Для удаления службы планировщика задач
		 выполните команду:


		sc.exe delete FPScheduler


		При успешном выполнении команды будет выведено сообщение: «[SC]
		 DeleateService: успех».


См. также:


[Запуск
 задач на выполнение](UiAppSrv_Work_Run.htm) | [Создание
 конфигурационного файла](UiAppSrv_Work_AppSrvXml.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
