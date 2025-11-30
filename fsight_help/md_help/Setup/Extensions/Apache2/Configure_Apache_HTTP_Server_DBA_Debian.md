# Настройка Apache2 для доступа к ресурсам конструктора бизнес-приложений на Debian-подобных

Настройка Apache2 для доступа к ресурсам конструктора бизнес-приложений на Debian-подобных
-


# Настройка Apache2 для доступа к ресурсам конструктора бизнес-приложений
 на Debian-подобных дистрибутивах


Ниже приведена дополнительная настройка Apache2 для доступа к ресурсам
 конструктора бизнес-приложений на Debian-подобных дистрибутивах, если
 [серверная часть
 конструктора бизнес-приложений](../Backend_Designer_of_Business_Applications.htm) была установлена [вручную](Manual_Install_Designer_of_Business_Applications_Apache.htm).


Для доступа к ресурсам конструктора бизнес-приложений:


	- Убедитесь, что выполнены следующие условия:


		- конструктор бизнес-приложений распакован и расположен в
		 папке /opt/foresight/dba/10.x;


		- настроен конфигурационный файл [DBA.config.json](../Configuration_Designer_of_Business_Applications.htm#dba_config_json).


	- Укажите путь до папки с установленным конструктором бизнес-приложений
	 в /etc/apache2/envvars:


	export PATH_TO_DBA=/opt/foresight/dba/10.x


В конце файла /etc/apache2/envvars укажите
 адрес сервера или IP-адрес с портом BI-сервера:


	export BI_HOST=10.9.43.13:8810


При использовании systemd в качестве системы
 инициализации для корректной настройки не используйте команду export:


	PATH_TO_DBA=/opt/foresight/dba/10.x


	- Откройте на редактирование файл /etc/apache2/sites-available/webserver.conf,
	 созданный при [настройке
	 Apache2 для доступа к ресурсам веб-приложения](../../UiWebSetup/03_Setup_Web/Astra_Linux/configure_apache_to_access_resources_web_pp.htm) в шаге 4, и добавьте
	 следующие строки перед закрывающимся тэгом </VirtualHost>:


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
	 'unsafe-eval';object-src 'self' ${BI_HOST};frame-src 'self' ${BI_HOST};
	 script-src 'self' 'unsafe-inline' 'unsafe-eval';connect-src 'self'
	 ws: wss: data: ${BI_HOST} data:;img-src 'self' data: ${BI_HOST}"


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
 "http://<веб-сервер>/dba/PPService.axd"


Примечание.
 Наименование директории «dba» может быть изменено. Для получения подробной
 информации о настройке виртуальных хостов в Apache2 смотрите [официальную документацию](https://httpd.apache.org/docs/2.2/ru/vhosts/).


	- Раздайте права доступа Apache2 к файлам конструктора бизнес-приложений:


	sudo chown -R www-data:www-data /opt/foresight/dba/10.x


	- Перезапустите Apache2:


	sudo systemctl restart apache2

После выполнения действий откройте конструктор бизнес-приложений по
 адресу:


http://localhost/dba/#/login?repo=FPREPOSITORY


Где:


	- FPREPOSITORY. Идентификатор
	 репозитория.


Если не удаётся авторизоваться, то [проверьте
 работу BI-сервера](../../UiWebSetup/01_BIServer/CheckBIServices.htm) и его настройки в соответствии со статьей «[Установка
 и настройка BI-сервера в Debian-подобных дистрибутивах](../../UiWebSetup/03_Setup_Web/Debian/Install_BI_server_to_Debian.htm)».


См. также:


[Ручная
 установка и настройка Apache2 для доступа к конструктору бизнес-приложений](Manual_Install_Designer_of_Business_Applications_Apache.htm)
 | [Установка
 и настройка BI-сервера в Debian-подобных дистрибутивах](../../UiWebSetup/03_Setup_Web/Debian/Install_BI_server_to_Debian.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
