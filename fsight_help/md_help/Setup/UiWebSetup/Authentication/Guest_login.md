# Настройка гостевого входа в платформу

Настройка гостевого входа в платформу
-


# Настройка гостевого входа


Для настройки гостевого входа:


	- Создайте [учётную
	 запись пользователя](admin.chm::/03_Admin/Users/Admin_Users.htm) в менеджере безопасности. Если предполагается,
	 что пользователь будет подключаться с сервера СУБД, то выполните следующие
	 действия:


		- Создайте пользователя на сервере СУБД. Пример для PostgreSQL:


CREATE ROLE "<имя пользователя>" LOGIN
 ENCRYPTED PASSWORD '<пароль пользователя>'
 NOSUPERUSER INHERIT NOCREATEDB NOCREATEROLE NOREPLICATION;


		- Установите флажок «[Подключаемый с сервера](admin.chm::/03_Admin/Users/Admin_UserProp_Common.htm#restriction)»
		 на вкладке «[Общие свойства](admin.chm::/03_Admin/Users/Admin_UserProp_Common.htm)»
		 боковой панели «Свойства»
		 в веб-приложении или в окне «Свойства
		 пользователя» в настольном приложении.


	- Добавьте созданного пользователя во встроенную группу «[Пользователи](admin.chm::/03_Admin/Groups/Admin_Groups.htm)»
	 на вкладке «[Членство в группах](admin.chm::/03_Admin/Users/Admin_UserProp_Groups.htm)»
	 боковой панели «Свойства»
	 в веб-приложении или в окне «Свойства
	 пользователя» в настольном приложении. Пользователь наследует
	 [привилегии](admin.chm::/04_SecurityPolicy/Admin_Priv.htm)
	 данной группы для подключения к репозиторию и работы с навигатором
	 объектов.


	- Сохраните учётные данные пользователя с помощью утилиты [PP.Util](../../05_RepoMngr/Service_Applications/PP_Util.htm):


		- в ОС Linux:


./PP.Util_start.sh /save_creds
 metabase_id /GC login [password]


		- в ОС Windows:


PP.Util.exe /save_creds metabase_id
 /GC login [password]


Например:


./PP.Util_start.sh /save_creds
 REPOSITORY_ID /GC GUEST guest


Где:


		- REPOSITORY_ID. Идентификатор
		 репозитория;


		- GUEST. Имя пользователя;


		- guest. Пароль пользователя.


После выполнения действий:


		- в ОС Linux учётные данные пользователя будут сохранены в
		 файле [Metabases.xml](../../06_AK_Client_Config/Configuring_repository_list_in_the_system_registry.htm)
		 в разделе [Credentials](../../06_AK_Client_Config/Configuring_repository_list_in_the_system_registry.htm#credentials),
		 соответствующем идентификатору репозитория, и в [settings.xml](../03_Setup_Web/BI_Server_Settings_XML.htm)
		 в разделе [Audit](../03_Setup_Web/BI_Server_Settings_XML.htm#audit);


		- в ОС Windows учётные данные пользователя будут сохранены
		 в разделе реестра [HKLM\SOFTWARE\Foresight\Foresight Analytics Platform\10.0\Metabases\<идентификатор репозитория>]
		 и в файле [Metabases.xml](../../06_AK_Client_Config/Configuring_repository_list_in_the_system_registry.htm),
		 если он используется.


	- Добавьте атрибут authentication
	 со значением «Guest» в разделе
	 [<metabase>](../03_Setup_Web/PP_config_Java.htm#metabase)
	 файла конфигурации [PP.xml](../03_Setup_Web/PP_config_Java.htm).
	 Например:


<pp>

    ...

    <metabase id="REPOSITORY_ID" authentication="Guest"/>

    ...

</pp>


	- Перезапустите [BI-сервер](../01_BIServer/bi-service_restart.htm)
	 и [серверную часть
	 веб-приложения](../03_Setup_Web/Web_Server_Restart.htm).


После выполнения действий будет настроен гостевой вход в указанный репозиторий.
 [Откройте веб-приложение](../03_Setup_Web/Opening_Web_Application.htm)
 на любой странице, содержащейся в папке установки веб-приложения, кроме
 login.html:


	- в ОС Linux: /opt/foresight/fp10.x-webserver/app;


	- в ОС Windows: C:\Program Files (x86)\Foresight\Analytics Platform 10.x Web Application\App.


Например, ссылка на открытие навигатора объектов в ОС Linux:


http://<веб-сервер>:<номер порта>/fp10.x/r/#/app/navigator?repo=<идентификатор репозитория>


Где:


	- <веб-сервер>.
	 IP-адрес или DNS-имя сервера, на котором установлена [серверная
	 часть веб-приложения](../03_Setup_Web/Web_server_setup.htm);


	- <номер
	 порта>. Номер [порта](../../01_SysReq/EnviromentRequirements.htm#ports_and_protocols),
	 по которому доступна серверная часть веб-приложения. По умолчанию
	 используется порт 8110;


	- <идентификатор
	 репозитория>. Репозиторий,
	 в который осуществляется гостевой вход.


См.
 также:


[Аутентификация
 в продукте](Authentication.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
