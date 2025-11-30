# Открытие бизнес-приложения

Открытие бизнес-приложения
-


# Открытие бизнес-приложения


Для открытия бизнес-приложения в веб-интерфейсе используйте [поддерживаемый](../03_DB_Server_Config/Setup_DB_ServerSysReq.htm#client)
 браузер и укажите адрес в строке подключения в зависимости от способа
 установки серверной части конструктора бизнес-приложений:


	- если серверная часть конструктора бизнес-приложений была установлена
	 автоматически на [Apache2](Apache2/Install_Backend_Designer_of_Business_Applications_Apache.htm)
	 в ОС Linux:


http://<веб-сервер>:<номер порта>/dba/


Где:


		- <веб-сервер>.
		 IP-адрес или DNS-имя сервера, на котором установлена [серверная
		 часть конструктора бизнес-приложений](Backend_Designer_of_Business_Applications.htm);


		- <номер
		 порта>. Номер [порта](../01_SysReq/EnviromentRequirements.htm#ports_and_protocols),
		 по которому доступна серверная часть конструктора бизнес-приложений.
		 По умолчанию используется порт 8210.


	- если серверная часть конструктора бизнес-приложений была установлена
	 вручную на [Apache2](Apache2/Manual_Install_Designer_of_Business_Applications_Apache.htm)
	 в ОС Linux:


http://<веб-сервер>/dba/


Где:


		- <веб-сервер>.
		 IP-адрес или DNS-имя сервера, на котором установлена [серверная
		 часть конструктора бизнес-приложений](Backend_Designer_of_Business_Applications.htm);


	- если серверная часть конструктора бизнес-приложений была установлена
	 автоматически на веб-сервер [IIS](ASP_NET/Install_Backend_Designer_of_Business_Applications_ASP_NET.htm)
	 в ОС Windows:


http://<веб-сервер>/DBA_App_v10.x/


Где:


		- <веб-сервер>.
		 IP-адрес или DNS-имя сервера, на котором установлена [серверная
		 часть конструктора бизнес-приложений](Backend_Designer_of_Business_Applications.htm);


	- если серверная часть конструктора бизнес-приложений была установлена
	 вручную на веб-сервер [IIS](ASP_NET/Manual_Install_Designer_of_Business_Applications_ASP_NET.htm)
	 в ОС Windows:


http://<веб-сервер>/DBA_v10.x/


Где:


		- <веб-сервер>.
		 IP-адрес или DNS-имя сервера, на котором установлена [серверная
		 часть конструктора бизнес-приложений](Backend_Designer_of_Business_Applications.htm);


	- если серверная часть конструктора бизнес-приложений была установлена
	 на [Java](Java/Install_Backend_Designer_of_Business_Applications_Java.htm)
	 в ОС Linux:


http://<IP-адрес
 или имя рабочей станции>:<порт>/dba/


	- если серверная часть конструктора бизнес-приложений была установлена
	 на [Java](Java/Install_Backend_Designer_of_Business_Applications_Java.htm)
	 в ОС Windows:


http://<IP-адрес
 или имя рабочей станции>:<порт>/path/


Где:


		- path. Контекстный
		 путь, указанный на [четвертом
		 шаге установки](Java/Install_Backend_Designer_of_Business_Applications_Java.htm) Apache Tomcat.


После выполнения действий будет открыта стартовая
 страница конструктора бизнес-приложений для авторизации в репозитории.
 Бизнес-приложение использует настройки, заданные в файле [config.json](Configuration_Designer_of_Business_Applications.htm#config_json)
 или [DBA.config.json](Configuration_Designer_of_Business_Applications.htm#dba_config_json).
 При работе с адресом по умолчанию, например: http://localhost/DBA_App_v10.x/, открывается бизнес-приложение,
 указанное в поле [targetApp](Configuration_Designer_of_Business_Applications.htm#targetapp), из репозитория, указанного в поле
 [targetRepo](Configuration_Designer_of_Business_Applications.htm#targetrepo).


Для подключения к другому репозиторию и открытию бизнес-приложения,
 настройки которого заданы в поле [repositories](Configuration_Designer_of_Business_Applications.htm#repositories)
 в файле [config.json](Configuration_Designer_of_Business_Applications.htm#config_json)
 или [DBA.config.json](Configuration_Designer_of_Business_Applications.htm#dba_config_json),
 к адресу могут быть добавлены дополнительные параметры:


	- repo. Идентификатор
	 репозитория;


	- appId. Идентификатор
	 бизнес-приложения при использовании файла конфигурации [config.json](Configuration_Designer_of_Business_Applications.htm#config_json);


	- app. Идентификатор бизнес-приложения
	 при использовании файла конфигурации [DBA.config.json](Configuration_Designer_of_Business_Applications.htm#dba_config_json).


Например:


http://localhost/DBA_App_v10.x/#/login?repo=REPOSITORY_ID&appId=BUSINESS_APP_1


Если задан один параметр repo,
 то выполняется открытие бизнес-приложения, указанного первым для репозитория
 в поле [repositories](Configuration_Designer_of_Business_Applications.htm#repositories).


Если параметры не заданы или задан несуществующий идентификатор репозитория/бизнес-приложения,
 то будет выполняться подключение к репозиторию и бизнес-приложению по
 умолчанию, которые заданы в полях [targetRepo](Configuration_Designer_of_Business_Applications.htm#targetrepo),
 [targetApp](Configuration_Designer_of_Business_Applications.htm#targetapp).


См. также:


[Серверная
 часть конструктора бизнес-приложений](Backend_Designer_of_Business_Applications.htm) | [Настройка
 конфигурации конструктора бизнес-приложений](Configuration_Designer_of_Business_Applications.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
