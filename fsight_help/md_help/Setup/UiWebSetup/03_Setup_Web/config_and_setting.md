# Конфигурация и настройка

Конфигурация и настройка
-


# Конфигурация и настройка


	В данной статье приведены различные настройки, которые выполняются
	 после установки BI-сервера на ОС Linux.


## Настройки подключения к репозиториям


	BI-сервер под Linux поддерживает подключение к репозиториям, созданным
	 на базе СУБД Oracle, PostgreSQL и SQLite.


	Примечание.
	 Перед настройкой подключения к репозиториям ознакомьтесь с [ограничениями
	 при работе с BI-сервером на Linux](Linux_constraints.htm).


	Настройки подключения к репозиториям могут храниться в файле registry.reg
	 и/или [Metabases.xml](../../06_AK_Client_Config/Configuring_repository_list_in_the_system_registry.htm#metabase_xml_list).
	 В ОС Linux удобнее редактировать файл Metabases.xml.


	Файл [Metabases.xml](../../06_AK_Client_Config/Configuring_repository_list_in_the_system_registry.htm#metabase_xml_list) должен
	 лежать в папке /opt/foresight/fp10.x-biserver/etc.


	Файл registry.reg можно получить путём экспорта ветки реестра Windows,
	 в которой хранится [информация
	 о репозиториях](../../06_AK_Client_Config/Configuring_repository_list_in_the_system_registry.htm). Для получения файла выполните следующие действия:


		- На рабочей станции с ОС Windows экспортируйте [ветку
		 реестра](../../06_AK_Client_Config/Configuring_repository_list_in_the_system_registry.htm#repository_list).


		- Скопируйте файл registry.reg в домашний каталог Linux и
		 при необходимости отредактируйте. После этого скопируйте файл
		 в папку /opt/foresight/fp10.x-biserver/etc/registry.
		 Предполагается, что в папке /opt/foresight/fp10.x-biserver/etc/registry
		 лежит ветка реестра [HKEY_LOCAL_MACHINE] или [HKEY_CURRENT_USER].


	Результат экспорта реестра сохранится в кодировке UTF-16, но BI-сервер
	 под Linux может работать с файлом в кодировке UTF-16 и UTF-8. Можно
	 перекодировать файл в UTF-8 для удобства редактирования в Linux, а
	 с UTF-16 может работать редактор vi.


	При сохранении конфиденциальных учётных данных для подключения к
	 БД с помощью утилиты [PP.Util](../../05_RepoMngr/Service_Applications/PP_Util.htm)
	 данные будут автоматически записываться в место хранения настроек
	 подключения к репозиториям: registry.reg или Metabases.xml.


	Для применения изменённых настроек подключения к репозиторию или
	 новых репозиториев необходимо перезапустить BI-сервер.


## Дополнительные настройки


	Дополнительные настройки хранятся в файле registry.reg или [settings.xml](BI_Server_Settings_XML.htm).
	 Файл settings.xml должен лежать в каталоге /opt/foresight/fp10.x-biserver/etc.


	В файле можно указать такие настройки, как ограничение количества
	 подключений BI-сервера к серверу СУБД и другие.


## Переменные окружения


	Переменные окружения, которые считываются при старте BI-сервера
	 с экземпляром Apache2, находятся в файле /opt/foresight/fp10.x-biserver/etc/envvars.


	Переменные добавляются в файл в формате: <наименование
	 переменной>=<значение>.


	Могут быть добавлены следующие переменные:


			 Переменные окружения
			 Описание


			 CURLOPT_VERBOSE=1
			 Для логирования действий, выполняемых через стороннюю библиотеку
			 libcurl, создайте переменную окружения со значением 1.

Вывод сообщений осуществляется в файл /var/log/apache2-fp10.x/error.log.


			 HOME=/root
			 Для изменения пути, относительно которого ищутся конфигурационные
			 файлы и файл лицензии укажите переменную HOME (по умолчанию
			 совпадает с домашней директорией пользователя, от которого
			 запускается родительский процесс Apache2, т.е. /root).


			 KRB5RCACHEDIR=/opt/foresight/fp10.x-biserver/var/cache
			 Для использования [интегрированной
			 доменной аутентификации](../Authentication/Domain_Authentication_Apache.htm) в ОС Linux. В указанной папке
			 создаётся файл *.rcache2 при работе модуля [mod_auth_gssapi](https://github.com/gssapi/mod_auth_gssapi#mod_auth_gssapi).


			 LSFORCEHOST=<имя
			 сервера лицензий или NO-NET>
			 Для указания использования [сетевой
			 лицензии](../../08_Licensing/Admin_Licensing_Variants.htm#network) укажите имя [сервера
			 лицензий](../../08_Licensing/RMS/LicenseServer.htm) на базе RMS, при использовании [автономной
			 лицензии](../../08_Licensing/Admin_Licensing_Variants.htm#standalone) - «NO-NET».


			 LSHOST=lserver1~lserver2
			 Для указания сетевого имени или IP-адреса сетевых серверов
			 лицензий используется переменная LSHOST, сервера перечисляются
			 через символ "~" (тильда).


			 MALLOC_MMAP_THRESHOLD_=8192
			 Для управления памятью в операционной системе создайте
			 переменную окружения MALLOC_MMAP_THRESHOLD_ со значением 8192.
			 Объем освобождаемой памяти будет возвращаться в операционную
			 систему, если переменная PP_RETMEM принимает значение 1.


			 PP_LOG=1
			 Для вывода отладочной информации о работе BI-сервера в
			 файл /var/log/apache2-fp10.x/error.log необходимо
			 добавить в конец файла или раскомментировать существующую
			 строку с PP_LOG.

Описание выводимой информации представлено
			 в подразделе «[Работа
			 с отладочной информацией](UiDevEnv.chm::/01_Development_Environment/02_Work_in_Development_Environment/Debugging/working_with_debugging_information.htm)».


			 PP_LOGTIME=1
			 Для вывода в отладочной информации временных меток, позволяющих
			 отслеживать затрачиваемое на выполнение различных операций
			 время, добавьте переменную PP_LOGTIME со значением 1.


			 PP_RETMEM_CO=1
			 Для принудительной очистки памяти при закрытии объектов
			 репозитория создайте переменную окружения PP_RETMEM_CO со
			 значением 1. По умолчанию используется значение 0, при этом
			 принудительная очистка памяти не производится или производится
			 при закрытии репозитория, если определена переменная PP_RETMEM.


			 PP_RETMEM=1
			 Для принудительной очистки памяти в операционной системе
			 при закрытии репозитория создайте переменную окружения PP_RETMEM
			 со значением 1. По умолчанию используется значение 0. Объем
			 освобождаемой памяти зависит от переменной MALLOC_MMAP_THRESHOLD_.


			 USER=root
			 Для изменения пользователя, от имени которого будет производится
			 расшифровка данных, сохранённых в реестре для авторизации
			 в СУБД, используется переменная USER (должна совпадать с пользователем,
			 от которого запускается родительский процесс Apache2, по умолчанию
			 root).


			 WEBFORMS_PORT=9093
			 Порт BI-сервера, через который будет осуществляться работа
			 веб-форм по протоколу WebSocket. Значение переменной окружения
			 имеет больший приоритет, чем порт, определённый в [системном
			 реестре](BI_Server_Registry_Key.htm#webforms)/[файле settings.xml](BI_Server_Settings_XML.htm).
			 По умолчанию используется порт 9091.

Указываемый порт должен быть открыт на BI-сервере.


## Файлы и папки BI-сервера


	Различные файлы BI-сервера будут располагаются в следующих папках:


			 Папка или файл
			 Описание


			 /opt/foresight/fp10.x-biserver/bin
			 Основные файлы BI-сервера.


			 /opt/foresight/fp10.x-biserver/etc
			 Конфигурационные файлы:


				- envvars для задания переменных окружения;


				- [Metabases.xml](../../06_AK_Client_Config/Configuring_repository_list_in_the_system_registry.htm#metabase_xml_list)
				 для настройки подключения к репозиторию;


				- [scheduler.xml](UiAppSrv.chm::/1_Work_AppSrv/UiAppSrv_Work_AppSrvXml.htm)
				 для запуска планировщика задач;


				- [settings.xml](BI_Server_Settings_XML.htm)
				 для формирования параметров, аналогичных параметрам в
				 реестре;


				- [registry/*.reg](BI_Server_Registry_Key.htm)
				 для настройки файлов реестра.


			Совет.
			 Рекомендуется обеспечить доступ на запись файлов и папок в
			 etc только администратору операционной системы root.


			 /opt/foresight/fp10.x-biserver/var/cache
			 Файлы, создаваемые при [кешировании
			 данных по технологии In-Memory](UiNav.chm::/02_Navigator/Cache_In_Blob.htm) и [кешировании
			 объектов среды разработки](UiNav.chm::/02_Navigator/object_caching.htm#devenv).


			 /opt/foresight/fp10.x-biserver/var/log
			 Файлы лога:


				- axis2.log для логирования базового модуля сервисов;


				- [AuditError.txt](Admin.chm::/05_AccessProtocol/Logging_operations.htm)
				 для протоколирования операций над объектами при сбое записи
				 информации в [протокол
				 доступа](Admin.chm::/05_AccessProtocol/Admin_AccessProtocol.htm);


				- Scheduler.log для логирования работы [планировщика
				 задач](UiAppSrv.chm::/UiAppSrv_purpose.htm).


			 /etc/apache2-fp10.x (для Debian-подобных
			 дистрибутивов)


			/etc/httpd-fp10.x (для RedHat-подобных
			 дистрибутивов)


			/etc/httpd2-fp10.x (для ALT Linux)


			 Конфигурационные файлы экземпляра Apache2 с
			 BI-сервером.


			 /var/log/apache2-fp10.x/error.log (для
			 Debian-подобных дистрибутивов)


			/var/log/httpd/error-fp10.x.log (для RedHat-подобных дистрибутивов)


			/var/log/httpd2/error-fp10.x.log (для ALT Linux)


			 Ошибки и отладочные сообщения экземпляра Apache2
			 с BI-сервером.


			 /var/log/apache2-fp10.x/access.log
			 (для Debian-подобных дистрибутивов)


			/var/log/httpd/access-fp10.x.log (для RedHat-подобных
			 дистрибутивов)


			/var/log/httpd2/access-fp10.x.log (для ALT
			 Linux)


			 Журнал доступа к экземпляру Apache2 с BI-сервером.


			 /root/.config/Foresight/Foresight Analytics Platform


			 Общие конфигурационные файлы BI-сервера (путь может отличаться
			 при изменении переменной окружения HOME).


			 /etc/init.d/foresight-xvfb
			 init-скрипт виртуального дисплея (X virtual framebuffer,
			 по умолчанию запускается на дисплее с номером 987 и dpi 96).


			 /opt/foresight/fp10.x-biserver/share/fonts


			 [Пользовательские
			 шрифты](General_for_linux/Loading_Custom_Fonts.htm), которые используются BI-сервером при работе с
			 объектами.


См. также:


[Установка
 BI-сервера в ОС Linux](../Install_Web_on_Linux.htm) | [Настройки
 в системном реестре](BI_Server_Registry_Key.htm) | [Настройки
 в settings.xml](BI_Server_Settings_XML.htm) | [Metabases.xml](../../06_AK_Client_Config/Configuring_repository_list_in_the_system_registry.htm)
 | [Дополнительные настройки](General_for_linux/Additional_settings.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
