# Настройка веб-приложения для работы в браузере Chromium-Gost

Настройка веб-приложения для работы в браузере Chromium-Gost
-


# Настройка веб-приложения для работы в браузере Chromium-Gost


	Браузер Chromium-Gost поддерживает криптографические алгоритмы шифрования
	 ГОСТ.


	Примечание.
	 Настройка веб-приложения для работы в браузере Chromium-Gost доступна
	 только в Astra Linux SE 1.7.


	Для работы веб-приложения в браузере Chromium-Gost выполните шаги,
	 указанные ниже.


	Рассмотрим использование удостоверяющего центра на примере тестового удостоверяющего центра КриптоПро. Для
	 этого предварительно установите КриптоПро CSP.


## Шаг 1. Добавление закрытого ключа и сертификата


	Закрытый ключ и сертификат, использующий алгоритмы шифрования ГОСТ,
	 генерируются в форматах PEM и CER при помощи специальных программных
	 средств, например, [OpenSSL](http://www.openssl.org/).
	 Для установки OpenSSL выполните команду:


	sudo apt-get install openssl


	По умолчанию в операционной системе установлена и настроена библиотека
	 [libgost-astra](https://wiki.astralinux.ru/pages/viewpage.action?pageId=27362269) для поддержки алгоритмов шифрования
	 ГОСТ.


	Для добавления закрытого ключа и сертификата:


		- Создайте каталог ssl в папке установки Apache2 /etc/apache2
		 и перейдите в него:


	cd /etc/apache2/ssl


		- Сгенерируйте закрытый ключ:


	openssl genpkey -algorithm
	 gost2012_256 -pkeyopt paramset:A -out seckey.pem


		- Создайте запрос на получение сертификата:


	openssl req -key seckey.pem
	 -new -out domain.csr


		- Отправьте содержимое domain.csr без заголовков из полученного
		 запроса в службу сертификации.


		- Сохраните полученный сертификат в формате base64.


	После выполнения действий в каталоге /etc/apache2/ssl будут содержаться
	 файлы:


		- seckey.pem. Закрытый
		 ключ;


		- certnew.cer. Сертификат,
		 использующий алгоритмы шифрования ГОСТ.


## Шаг 2. Настройка Apache2 с использованием сертификата


	Для настройки Apache2 с использованием сертификата:


		- Укажите доменное имя в файле /etc/apache2/apache2.conf:


	ServerName <доменное имя>


		- Удалите все файлы, кроме default-ssl.conf, в каталоге /etc/apache2/sites-enabled.


		- Откройте файл /etc/apache2/sites-enabled/default-ssl.conf
		 и выполните следующие действия:


			- укажите закрытый ключ и сертификат:


	SSLCertificateFile
	 "ssl/certnew.cer"

	SSLCertificateKeyFile "ssl/seckey.pem"


			- убедитесь, что содержится строка:


	SSLEngine On


			- добавьте строку:


	SSLProtocol TLSv1 +TLSv1.1
	 +TLSv1.2


		- Перезапустите Apache2:


	sudo systemctl restart
	 apache2


	После выполнения действий в браузере Chromium-Gost будет отображаться
	 сертификат, использующий алгоритмы шифрования ГОСТ.


## Шаг 3. Настройка работы веб-приложения по протоколу HTTPS


	Для настройки работы веб-приложения по протоколу HTTPS, поддерживающему
	 шифрование:


		- Остановите работу веб-сервисов «Форсайт. Аналитическая платформа»:


	sudo systemctl disable
	 apache2-fp10.x

	sudo systemctl disable apache2-fp10.x-web


		- Скопируйте файлы конфигурации BI-сервера fp10.x-biserver.conf,
		 fp10.x-biserver.load из
		 каталога /etc/apache2-fp10.x/mods-available
		 в папку установки Apache2 /etc/apache2/mods-available:


	sudo cp /etc/apache2-fp10.x/mods-available/fp10.x-biserver.conf
	 /etc/apache2/mods-available/fp10.x-biserver.conf

	sudo cp /etc/apache2-fp10.x/mods-available/fp10.x-biserver.load
	 /etc/apache2/mods-available/fp10.x-biserver.load


		- Создайте символьные ссылки файлов конфигурации fp10.x-biserver.conf,
		 fp10.x-biserver.load в
		 каталоге /etc/apache2/mods-enabled:


	sudo ln -s /etc/apache2/mods-available/fp10.x-biserver.conf
	 /etc/apache2/mods-enabled/fp10.x-biserver.conf

	sudo ln -s /etc/apache2/mods-available/fp10.x-biserver.load /etc/apache2/mods-enabled/fp10.x-biserver.load


		- Переключите Apache2 в режим worker:


			- Удалите файлы:


				- /etc/apache2/mods-enabled/mpm_prefork.load;


				- /etc/apache2/mods-enabled/mpm_prefork.conf.


			- Создайте символьные ссылки файлов mpm_worker.conf, mpm_worker.load
			 в каталоге /etc/apache2/mods-enabled:


	sudo ln -s /etc/apache2/mods-available/mpm_worker.conf
	 /etc/apache2/mods-enabled/mpm_worker.conf

	sudo ln -s /etc/apache2/mods-available/mpm_worker.load /etc/apache2/mods-enabled/mpm_worker.load


			- Измените содержимое файла /etc/apache2/mods_enabled/mpm_worker.conf:


	<IfModule mpm_worker_module>

	   MaxSpareThreads 64

	   StartServers 1

	   ThreadsPerChild 64

	   MaxRequestWorkers 64

	   MinSpareThreads 32

	   MaxConnectionsPerChild 0

	   ServerLimit 1

	</IfModule>


		- Настройте механизм [CORS](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS) для повышения
		 безопасности системы при обмене данными между разными доменами:


			- Откройте файл /etc/apache2/apache2.conf.


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


			- Подключите модули headers и rewrite:


	sudo a2enmod headers
	 rewrite


		- Создайте файл envvars с переменными окружения для работы
		 веб-приложения в каталоге /etc/opt/foresight:


	DISPLAY=:987

	PP_LOG=1

	PP_RETMEM=1

	MALLOC_MMAP_THRESHOLD_=8192

	PP_RETMEM_CO=1

	PATH_TO_WEB=/opt/foresight/fp10.x-webserver

	PP_SOM=https://<BI-сервер>/FPBI_App_v10.x/axis2/services/PP.SOM.Som

	APACHE_LOG_DIR=logs


	В подстановке <BI-сервер> укажите IP-адрес или DNS-имя
	 сервера, на котором установлен BI-сервер.


		- Укажите путь до файла /etc/opt/foresight/envvars
		 в файле настроек сервиса Apache2 /usr/lib/systemd/system/apache2.service
		 после параметра Environment:


	EnvironmentFile=/etc/opt/foresight/envvars


		- Создайте файл default-ssl.conf с настройками веб-сервера
		 в каталоге /etc/apache2/sites-enabled:


	<VirtualHost *>

	    ErrorLog ${APACHE_LOG_DIR}/error.log

	    CustomLog ${APACHE_LOG_DIR}/access.log combined

	    Alias /fp10.x/app/ ${PATH_TO_WEB}/app/

	    Alias /fp10.x/build/ ${PATH_TO_WEB}/build/

	    Alias /fp10.x/dashboard/ ${PATH_TO_WEB}/dashboard/

	    Alias /fp10.x/resources/ ${PATH_TO_WEB}/resources/

	    Alias /fp10.x/index.html ${PATH_TO_WEB}/index.html

	    Alias /fp10.x/libs/ ${PATH_TO_WEB}/libs/

	    Alias /fp10.x/ ${PATH_TO_WEB}/

	    RewriteEngine On

	    RewriteCond %{QUERY_STRING} (.*(?:^|&))cache(=1)?((?:&|$).*)

	    RewriteRule .* - [env=CACHEABLE]

	    KeepAlive Off

	    <Directory "${PATH_TO_WEB}/">

	        Options Indexes

	        AllowOverride All

	        Require all granted

	        FileETag None

	        SetEnv no-gzip 1

	        SetEnv dont-vary 1

	        <FilesMatch "\.([^.]+)$">

	            Header
	 set Cache-Control "public, max-age=31536000" env=CACHEABLE

	            Header
	 unset Pragma

	            Header
	 unset ETag

	            UnsetEnv
	 CACHEABLE

	        </FilesMatch>

	        <FilesMatch "\.cache\.(js|html)$">

	            Header
	 set Cache-Control "public, max-age=31536000"

	        </FilesMatch>

	    </Directory>

	</VirtualHost>


		- Перезапустите Apache2:


	sudo systemctl restart
	 apache2


	После выполнения действий работа веб-приложения будет выполняться
	 через HTTPS.


См. также:


[Настройка
 конфигурации веб-приложения](../03_Setup_Web/PP_config_Java.htm) | [Открытие веб-приложения](../03_Setup_Web/Opening_Web_Application.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
