# Настройка Apache2 для доступа к ресурсам конструктора бизнес-приложений на RedHat-подобных

Настройка Apache2 для доступа к ресурсам конструктора бизнес-приложений на RedHat-подобных
-


# Настройка Apache2 для доступа к ресурсам конструктора бизнес-приложений
 на RedHat-подобных дистрибутивах


Ниже приведена дополнительная настройка Apache2 для доступа к ресурсам
 конструктора бизнес-приложений на RedHat-подобных дистрибутивах, если
 [серверная часть
 конструктора бизнес-приложений](../Backend_Designer_of_Business_Applications.htm) была установлена [вручную](Manual_Install_Designer_of_Business_Applications_Apache.htm).


Для доступа к ресурсам конструктора бизнес-приложений:


	- Убедитесь, что выполнены следующие условия:


		- конструктор бизнес-приложений распакован и расположен в
		 папке /opt/foresight/dba/10.x;


		- настроен конфигурационный файл [DBA.config.json](../Configuration_Designer_of_Business_Applications.htm#dba_config_json).


	- Укажите путь до папки с установленным конструктором бизнес-приложений
	 в /etc/sysconfig/httpd:


	export PATH_TO_DBA=/opt/foresight/dba/10.x


При использовании systemd в качестве системы
 инициализации для корректной настройки не используйте команду export:


	PATH_TO_DBA=/opt/foresight/dba/10.x


	- Откройте на редактирование файл /etc/httpd/conf.d/webserver.conf,
	 созданный при [настройке
	 Apache2 для доступа к ресурсам веб-приложения](../../UiWebSetup/03_Setup_Web/RHEL/configure_apache_to_access_resources_web_pp.htm) в шаге
	 4, и добавьте следующие строки перед закрывающимся тэгом </VirtualHost>:


	Alias /dba/index.html
	 ${PATH_TO_DBA}/index.html

Alias /dba/
	 ${PATH_TO_DBA}/

ProxyPass /dba/PPService.axd
	 ${PP_SOM} retry=1 acquire=3000 timeout=6000 Keepalive=On

<Directory "${PATH_TO_DBA}/">

    Options Indexes FollowSymLinks


    AllowOverride All

    Require all granted

    FileETag None

    SetEnv no-gzip 1

    SetEnv dont-vary 1

    <FilesMatch "\.([^.]+)$">


        Header
	 set Cache-Control "public, max-age=31536000" env=CACHEBLE


        Header
	 set X-Frame-Options "SAMEORIGIN"

        Header
	 set Content-Security-Policy "default-src 'self' 'unsafe-inline'
	 'unsafe-eval';object-src 'self' <BI-сервер>:<номер порта>;frame-src
	 'self' <BI-сервер>:<номер порта>; script-src 'self' 'unsafe-inline'
	 'unsafe-eval';connect-src 'self' ws: wss: data: <BI-сервер>:<номер
	 порта> data:;img-src 'self' data: <BI-сервер>:<номер порта>"


        Header
	 unset Pragma

        Header
	 unset ETag

        UnsetEnv
	 CACHEBLE

    </FilesMatch>

    <FilesMatch "\.cache\.(js|html)$">


        Header
	 set Cache-Control "public, max-age=31536000"

    </FilesMatch>

</Directory>

Укажите адрес, заданный в ProxyPass, в качестве
 значения поля ppServiceUrl в файле
 [DBA.config.json](../Configuration_Designer_of_Business_Applications.htm#dba_config_json):


"ppServiceUrl":
 "http://<BI-сервер>/dba/PPService.axd"


В подстановках:


		- <BI-сервер>.
		 Укажите IP-адрес или DNS-имя, на котором установлен BI-сервер,
		 в файлах webserver.conf и DBA.config.json;


		- <номер порта>.
		 Укажите номер порта, по которому доступен BI-сервер. По умолчанию
		 используется порт 8810.


Примечание.
 Наименование директории «dba» может быть изменено. Для получения подробной
 информации о настройке виртуальных хостов в Apache2 смотрите
 [официальную
 документацию](https://httpd.apache.org/docs/2.2/ru/vhosts/).


	- Раздайте права доступа httpd к файлам конструктора бизнес-приложений:


	sudo chown -R apache:apache /opt/foresight/dba/10.x


	- Перезапустите httpd:


	sudo systemctl restart httpd

После выполнения действий откройте конструктор бизнес-приложений по
 адресу:


http://localhost/dba/#/login?repo=FPREPOSITORY


Где:


	- FPREPOSITORY. Идентификатор
	 репозитория.


Если не удаётся авторизоваться, то проверьте работу [BI-сервера](../../UiWebSetup/01_BIServer/CheckBIServices.htm)
 и его настройки в соответствии со статьей «[Установка
 и настройка BI-сервера на RedHat-подобные дистрибутивы](../../UiWebSetup/03_Setup_Web/Setup_Linux.htm)».


См. также:


[Ручная
 установка и настройка Apache2 для доступа к конструктору бизнес-приложений](Manual_Install_Designer_of_Business_Applications_Apache.htm)
 | [Установка и
 настройка BI-сервера на RedHat-подобные дистрибутивы](../../UiWebSetup/03_Setup_Web/Setup_Linux.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
