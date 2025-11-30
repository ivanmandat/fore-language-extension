# Настройка балансировщика HAProxy для работы по протоколу HTTPS при использовании

Настройка балансировщика HAProxy для работы по протоколу HTTPS при использовании
-


# Настройка балансировщика HAProxy для работы по протоколу HTTPS
	 при использовании веб-форм


	Для работы по протоколу HTTPS перед настройкой BI-серверов, веб-приложения
	 и балансировщика необходимо подготовить корневой сертификат и сертификаты
	 безопасности для каждого сервера. Сертификаты должны быть подписаны
	 корневым сертификатом. Все сертификаты могут быть подготовлен с помощью
	 специальных криптографических программных средств, например, [OpenSSL](https://www.openssl.org/).


	Объедините ключ и корневой сертификат в один файл, полученный файл
	 в дальнейшем будет использоваться при настройке HAProxy.


## Настройка BI-серверов


	Предполагается, что [BI-сервера](../../UiWebSetup_TitlePage.htm)
	 продукта «Форсайт. Аналитическая платформа»
	 уже установлены. Произведите указанные ниже действия на каждом [BI-сервер](../../UiWebSetup_TitlePage.htm)е с указанием нужных
	 сертификатов:


		- Установите модули proxy_http, proxy_wstunnel:


	sudo a2enmod proxy_http
	 proxy_wstunnel


		- В файле настроек /etc/httpd2-fp10.x/conf/sites-enabled/default_https.conf
		 добавьте строки:


	Listen 443


	<VirtualHost _default_:443>


	    ServerName
	 biserver1


	    SSLEngine
	 on


	    SSLCertificateFile
	 /etc/httpd2-fp10.x/conf/ssl.crt/<BI-server
	 N cert>.pem


	    SSLCertificateKeyFile
	 /etc/httpd2-fp10.x/conf/ssl.key/<BI-server
	 N key>.pem


	    SSLCACertificateFile
	 /etc/httpd2-fp10.x/conf/ssl.crt/CACert.pem


	</VirtualHost>


## Настройка веб-приложения


	Предполагается, что [веб-приложение](../../03_Setup_Web/Web_server_setup.htm)
	 уже установлено. В файле настроек /etc/httpd2-fp10.x-web/conf/sites-enabled/default_https.conf
	 добавьте строки:


	<VirtualHost _default_:443>


	    ServerName server


	    SSLEngine on


	    SSLCertificateFile /etc/ssl/certs/balancer/server/server-cert.pem


	    SSLCertificateKeyFile
	 /etc/ssl/certs/balancer/server/server-key.pem


	    SSLCACertificateFile
	 /etc/ssl/certs/balancer/CACert.pem


	    # Настройки веб-приложения


	    ErrorLog ${APACHE_LOG_DIR}/error.log


	    CustomLog ${APACHE_LOG_DIR}/access.log
	 combined


	        Alias
	 /fp10.x/app/ ${PATH_TO_WEB}/app/


	        Alias
	 /fp10.x/build/ ${PATH_TO_WEB}/build/


	        Alias
	 /fp10.x/dashboard/ ${PATH_TO_WEB}/dashboard/


	        Alias
	 /fp10.x/resources/ ${PATH_TO_WEB}/resources/


	        Alias
	 /fp10.x/index.html ${PATH_TO_WEB}/index.html


	        Alias
	 /fp10.x/libs/ ${PATH_TO_WEB}/libs/


	        Alias
	 /fp10.x/ ${PATH_TO_WEB}/


	        ProxyPass
	 /fp10.x/app/PPService.axd ${PP_SOM}
	 retry=1 acquire=3000 timeout=6000 Keepalive=On


	        RewriteEngine
	 On


	        RewriteCond
	 %{QUERY_STRING} (.*(?:^|&))cache(=1)?((?:&|$).*)


	        RewriteRule
	 .* - [env=CACHEABLE]


	        KeepAlive
	 Off


	        <Directory
	 "${PATH_TO_WEB}/">


	            Options
	 Indexes


	            AllowOverride
	 All


	            Require
	 all granted


	            FileETag
	 None


	            SetEnv
	 no-gzip 1


	            SetEnv
	 dont-vary 1


	            <FilesMatch
	 "\.([^.]+)$">


	                Header
	 set Cache-Control "public, max-age=31536000" env=CACHEABLE


	                Header
	 unset Pragma


	                Header
	 unset ETag


	                UnsetEnv
	 CACHEABLE


	            </FilesMatch>


	            <FilesMatch
	 "\.cache\.(js|html)$">


	                 Header
	 set Cache-Control "public, max-age=31536000"


	            </FilesMatch>


	        </Directory>


	</VirtualHost>


## Настройка WSS


		- В файле настроек [settings.xml](../../03_Setup_Web/BI_Server_Settings_XML.htm)
		 каждого BI-сервера определите порт веб-форм для работы по протоколу
		 WebSocket:


	<Configuration>


	  <Root>


	    <Key
	 Name="PP">


	      <BIS>


	        <Key
	 Name="System">


	          <WebForms
	 Port="9099"/>


	        </Key>


	      </BIS>


	    </Key>


	  </Root>


	</Configuration>


		- В файл настроек /etc/apache2-fp10.x/sites-enabled/000-default.conf
		 добавьте новый подраздел VirtualHost. Для каждого BI-сервера укажите
		 свой номер порта и путь до сертификатов:


	<VirtualHost *:9091>


	ProxyPass /service
	 ws://localhost:${WS_PORT}/service


	ProxyPassReverse
	 /service ws://localhost:${WS_PORT}/service


	SSLEngine on


	SSLCertificateFile
	 /etc/httpd2-fp10.x/conf/ssl.crt/<BI-server
	 N cert>.pem


	SSLCertificateKeyFile
	 /etc/httpd2-fp10.x/conf/ssl.key/<BI-server
	 N key>.pem


	SSLCACertificateFile
	 /etc/httpd2-fp10.x/conf/ssl.crt/CACert.pem


	SSLProxyEngine On


	RewriteEngine On


	RewriteCond %{HTTP:Connection}
	 upgrade [NC]


	RewriteCond %{HTTP:Upgrade}
	 websocket [NC]


	RewriteRule ^(.*)
	 ws://localhost:${WS_PORT}/$1 [P,L]


	</VirtualHost>


		- В файлах /etc/apache2-fp10.x/ports.conf каждого
		 BI-сервера добавьте соответствующий порт для прослушивания:


	<IfModule ssl_module>


	Listen 443


	Listen 9091


	</IfModule>


		- В файле с переменными окружения /etc/apache2-fp10.x/envvars
		 каждого BI-сервера в конец добавьте строку:


	export WS_PORT=9099


	где 9099 - это порт, который будет определён
	 в пункте 1.


		- В файле настроек веб-приложения [config.json](../../03_Setup_Web/PP_config_Java.htm)
		 укажите порт, на котором будут работать веб-формы:


	{

	  ...

	  "webSocketPort": "8080",

	  ...

	}


		- На сервере, где расположен балансировщик, в /etc/hosts пропишите
		 сопоставление доменного имени и IP-адреса серверов:


	10.0.0.10 server


	10.0.0.20 biserver1


	10.0.0.30 biserver2


## Настройка HAProxy


	В конфигурационном файле балансировщика /etc/haproxy/haproxy.cfg
	 укажите следующие строки:


	global


	        log
	 /dev/log local0


	        log
	 /dev/log local1 notice


	        chroot
	 /var/lib/haproxy


	        stats
	 socket /run/haproxy/admin.sock mode 660 level admin expose-fd listeners


	        stats
	 timeout 30s


	        user
	 haproxy


	        group
	 haproxy


	        daemon


	        #
	 Allows to enable or disable support mandatory access control (default:
	 on)


	        #
	 The fetch methods (at Layer 4) was added:


	        #
	 * maclev - returns an integer value corresponding to the mandatory
	 access control privacy level


	        #
	 * maccat - returns an integer value corresponding to the mandatory
	 access control category


	        #
	 astra-mode on


	        #
	 Default SSL material locations


	        ca-base
	 /etc/ssl/certs


	        crt-base
	 /etc/ssl/private


	        #
	 See: https://ssl-config.mozilla.org/#server=haproxy&server-version=2.0.3&config=intermediate


	        ssl-default-bind-ciphers
	 ECDHE-ECDSA-AES128-GCM-SHA256:ECDHE-RSA-AES128-GCM-SHA256:ECDHE-ECDSA-AES256-GCM-SHA384:ECDHE-RSA-AES256-GCM-SHA384:ECDHE-ECDSA-CHACHA20-POLY1305:ECDHE-RSA-CHACHA20-POLY1305:DHE-RSA-AES128-GCM-SHA256:DHE-RSA-AES256-GCM-SHA384


	        ssl-default-bind-ciphersuites
	 TLS_AES_128_GCM_SHA256:TLS_AES_256_GCM_SHA384:TLS_CHACHA20_POLY1305_SHA256


	        ssl-default-bind-options
	 ssl-min-ver TLSv1.2 no-tls-tickets


	defaults


	        log
	 global


	        mode
	 http


	        option
	 httplog


	        option
	 dontlognull


	        timeout
	 connect 5s


	        timeout
	 client  500s


	        timeout
	 server  500s


	        timeout
	 tunnel  3600s


	        errorfile
	 400 /etc/haproxy/errors/400.http


	        errorfile
	 403 /etc/haproxy/errors/403.http


	        errorfile
	 408 /etc/haproxy/errors/408.http


	        errorfile
	 500 /etc/haproxy/errors/500.http


	        errorfile
	 502 /etc/haproxy/errors/502.http


	        errorfile
	 503 /etc/haproxy/errors/503.http


	        errorfile
	 504 /etc/haproxy/errors/504.http


	frontend ft_web_bi


	        bind
	 *:555 ssl crt /etc/ssl/certs/balancer/CA.pem


	        http-request
	 redirect scheme https unless { ssl_fc }


	        bind-process
	 all


	        acl
	 bisom path -i -m sub /FPBI_App_v10.x/axis2/services


	        acl
	 biproxy path -i -m sub /PPService.axd


	        use_backend
	 bk_bi if bisom || biproxy


	        default_backend
	 bk_web


	backend bk_web


	        mode
	 http


	        option
	 forwardfor


	        server
	 web server:443 check ssl verify none


	backend bk_bi


	        mode
	 http


	        option
	 forwardfor


	        balance
	 roundrobin


	        cookie
	 IDBI insert indirect nocache


	        server
	 bi1 biserver1:443 check cookie sb1 ssl verify required ca-file /etc/ssl/certs/balancer/CA.pem


	        server
	 bi2 biserver2:443 check cookie sb2 ssl verify required ca-file /etc/ssl/certs/balancer/CA.pem


	frontend ft_ws_bi


	        bind
	 *:8080 ssl crt /etc/ssl/certs/balancer/CA.pem


	        bind-process
	 all


	        default_backend
	 bk_ws_bi


	backend bk_ws_bi


	        option
	 forwardfor


	        balance
	 roundrobin


	        cookie
	 IDBI insert indirect nocache


	        server
	 bi1 biserver1:9091 cookie sb1 ssl verify required ca-file /etc/ssl/certs/balancer/CA.pem


	        server
	 bi2 biserver2:9092 cookie sb2 ssl verify required ca-file /etc/ssl/certs/balancer/CA.pem


	frontend stats


	        bind
	 *:8404


	        stats
	 enable


	        stats
	 uri /stats


	        stats
	 refresh 10s


	Для проверки корректности полученного конфигурационного файла можно
	 использовать следующую команду:


	sudo haproxy -c -f /etc/haproxy/haproxy.cfg


	Если все настройки заданы корректно, то веб-приложение будет доступно
	 по адресу https://server:555/fp10.x/r. При запуске веб-форм
	 соединение открывается по адресу wss://server:8080/service?id={моникер_веб-формы}.


См. также:


[Настройка
 балансировщика HAProxy при использовании веб-форм](HAProxy_settings.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
