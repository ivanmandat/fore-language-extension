# Настройка Apache2 для доступа к ресурсам веб-приложения на RedHat-подобные дистрибутивы

Настройка Apache2 для доступа к ресурсам веб-приложения на RedHat-подобные дистрибутивы
-


# Настройка Apache2 для доступа к ресурсам веб-приложения на RedHat-подобные
 дистрибутивы


Ниже приведена дополнительная настройка Apache2 для доступа к ресурсам
 веб-приложения на RedHat-подобные дистрибутивы, если [серверная
 часть веб-приложения](../Web_server_setup.htm) была установлена [вручную](../configure_apache.htm).


Для доступа к ресурсам веб-приложения:


	- Убедитесь, что веб-приложение [распаковано](../configure_apache.htm)
	 и расположено в папке /opt/foresight/fp/10.x.


	- Установите веб-сервер Apache2 с помощью команды:


	sudo yum install httpd

После установки веб-сервера в РЕД ОС и Rocky
 Linux:


		- Создайте файл httpd в каталоге /etc/sysconfig и раздайте
		 права доступа Apache2 к нему:


touch /etc/sysconfig/httpd


		- Откройте на редактирование конфигурационный файл Apache2
		 - override.conf, содержащийся в /etc/systemd/system/httpd.service.d:


systemctl edit httpd


После чего вставьте следующие строки в открывшемся
 файле:


[Service]

EnvironmentFile=/etc/sysconfig/httpd


		- Перезапустите httpd для применения изменений:


sudo systemctl restart
 httpd


	- Укажите путь до папки с установленным веб-приложением и адрес
	 BI-сервера в файле /etc/sysconfig/httpd:


	export PATH_TO_WEB=/opt/foresight/fp/10.x

export PP_SOM=http://localhost:8810/FPBI_App_v10.x/axis2/services/PP.SOM.Som

При использовании systemd в качестве системы
 инициализации для корректной настройки не используйте команду export:


	PATH_TO_WEB=/opt/foresight/fp/10.x

PP_SOM=http://localhost:8810/FPBI_App_v10.x/axis2/services/PP.SOM.Som

Примечание.
 Значение переменной окружения PP_SOM может быть другим, в зависимости
 от того, где и на каком порту запущен BI-сервер.


	- Создайте файл /etc/httpd/conf.d/webserver.conf с содержимым:


	<VirtualHost *:80>

    Alias /fp10.x/app/ ${PATH_TO_WEB}/app/

    Alias /fp10.x/build/ ${PATH_TO_WEB}/build/

    Alias /fp10.x/dashboard/ ${PATH_TO_WEB}/dashboard/

    Alias /fp10.x/resources/ ${PATH_TO_WEB}/resources/

    Alias /fp10.x/index.html ${PATH_TO_WEB}/index.html

    Alias /fp10.x/libs/ ${PATH_TO_WEB}/libs/

    Alias /fp10.x/ ${PATH_TO_WEB}/

    ProxyPass /fp10.x/app/PPService.axd
	 ${PP_SOM} retry=1 acquire=3000 timeout=6000 Keepalive=On

    RewriteEngine On

    RewriteCond %{QUERY_STRING}
	 (.*(?:^|&))cache(=1)?((?:&|$).*)

    RewriteRule .* - [env=CACHEBLE]

    KeepAlive Off

    <Directory "${PATH_TO_WEB}/">

        Require
	 all granted

        Options
	 Indexes

        AllowOverride
	 All

        Order
	 allow,deny

        Allow
	 from all

        FileETag
	 None

        SetEnv
	 no-gzip 1

        SetEnv
	 dont-vary 1

        <FilesMatch
	 "\.([^.]+)$">

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

        <FilesMatch
	 "\.cache\.(js|html)$">

            Header
	 set Cache-Control "public, max-age=31536000"

        </FilesMatch>

    </Directory>

</VirtualHost>

В подстановках:


		- <BI-сервер>.
		 Укажите IP-адрес или DNS-имя, на котором установлен BI-сервер;


		- <номер порта>.
		 Укажите номер порта, по которому доступен BI-сервер. По умолчанию
		 используется порт 8810.


Примечание.
 Наименование директории «fp10.x» может быть изменено.
 Для получения подробной информации о настройке виртуальных хостов в Apache2
 смотрите [официальную
 документацию](https://httpd.apache.org/docs/2.2/ru/vhosts/).


	- Настройте механизм [CORS](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS) для повышения
	 безопасности системы при обмене данными между разными доменами.


		- Откройте файл /etc/httpd-fp10.x/conf/httpd-fp10.x.conf.


		- Задайте заголовки [Origin](https://developer.mozilla.org/ru/docs/Web/HTTP/Headers/Origin), [Access-Control-Allow-Origin](https://developer.mozilla.org/ru/docs/Web/HTTP/Headers/Access-Control-Allow-Origin), [Access-Control-Allow-Methods](https://developer.mozilla.org/ru/docs/Web/HTTP/Headers/Access-Control-Allow-Methods),
		 [Access-Control-Allow-Headers](https://developer.mozilla.org/ru/docs/Web/HTTP/Headers/Access-Control-Allow-Headers):


	<IfModule mod_headers.c>

    SetEnvIf Origin ^(<разрешённый домен>)$ CORS_ALLOW_ORIGIN=$1


    Header always set Access-Control-Allow-Origin
	 %{CORS_ALLOW_ORIGIN}e env=CORS_ALLOW_ORIGIN

    Header merge Vary "Origin"


    Header always set Access-Control-Allow-Methods
	 "POST, OPTIONS, <методы
	 HTTP-запросов>"

    Header always set Access-Control-Allow-Headers
	 "get-ppbi-time, content-type, soapaction, accept-language, cache-control,
	 Authorization, <заголовки HTTP-запросов>"


</IfModule>


RewriteEngine On

RewriteCond %{REQUEST_METHOD} OPTIONS

RewriteRule ^(.*)$ $1 [R=200,L]

В подстановках:


			- <разрешённый домен>.
			 Укажите домен, для которого будет разрешено получение запросов,
			 в виде регулярного выражения. Например, регулярное выражение
			 для домена example.com:


https?://(?:.+\.)?example\.com(?::\d{1,5})?


Данная настройка включает использование
 механизма CORS на родительском и дочерних ему доменах, а также динамически
 устанавливается на текущий протокол, домен, порт без использования правил
 перезаписи;


			- <методы HTTP-запросов>.
			 Укажите дополнительные методы для доступа к ресурсу. Методы
			 POST, OPTIONS являются обязательными;


			- <заголовки HTTP-запросов>.
			 Укажите заголовки, которые используются ресурсом. Заголовки
			 get-ppbi-time,content-type, soapaction, accept-language, cache-control,
			 Authorization являются обязательными.


Примечание.
 Убедитесь, что указанные параметры механизма CORS соответствуют требованиям
 используемого ресурса.


	- Включите запись информации об IP-адресе рабочей станции, с которой
	 осуществляется доступ к объекту, в [протоколе
	 доступа](Admin.chm::/05_AccessProtocol/Admin_AccessProtocol.htm) менеджера безопасности. Для этого добавьте
	 строки в конце файла /etc/httpd/conf/httpd.conf:


SetEnvIf REMOTE_ADDR "^(.+)$"
 USER_CLIENT_ADDR=$1

RequestHeader merge userhostaddress "%{USER_CLIENT_ADDR}e"


	- Раздайте права доступа httpd к файлам веб-приложения:


	sudo chown -R apache:apache /opt/foresight/fp/10.x


	- Перезапустите httpd и httpd-fp10.x:


	sudo systemctl restart httpd

sudo systemctl restart httpd-fp10.x

Примечание.
 Перезапуск httpd-fp10.x выполняется для использования
 механизма CORS, настроенного в шаге 5.


После выполнения действий откройте веб-приложение по адресу:


http://localhost:80/fp10.x/app/login.html?repo=REPOSITORY_ID


Где:


	- REPOSITORY_ID. Идентификатор
	 репозитория.


Если не удаётся авторизоваться, то проверьте работу [BI-сервера](../../01_BIServer/CheckBIServices.htm)
 и его настройки в соответствии со статьей «[Установка
 и настройка BI-сервера на RedHat-подобные дистрибутивы](../Setup_Linux.htm)».


См. также:


[Установка
 и настройка BI-сервера на RedHat-подобные дистрибутивы](../Setup_Linux.htm) | [Ручная
 установка и настройка Apache2 для доступа к ресурсам веб-приложения](../configure_apache.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
