# Настройка веб-форм при работе через HTTPS

Настройка веб-форм при работе через HTTPS
-


# Настройка веб-форм при работе через HTTPS


Если работа веб-приложения осуществляется по протоколу [HTTPS](setting_https.htm),
 то для корректной работы веб-форм, использующих протокол WebSocket, потребуется
 дополнительная настройка, чтобы использовалось шифрованное соединение
 WSS.


Для настройки веб-форм при работе веб-приложения по протоколу HTTPS:


	- Добавьте новый раздел <VirtualHost *:9091> после существующего
	 раздела <VirtualHost> в файле конфигурации веб-сервера:


		- /etc/apache2-fp10.x-web/sites-available/webserver.conf
		 в Debian-подобных дистрибутивах;


		- /etc/httpd-fp10.x-web/conf.d/00-virtualhost.conf
		 в RedHat-подобных дистрибутивах;


		- /etc/httpd2-fp10.x-web/conf/sites-enabled/000-default.conf
		 в ALT Linux.


<VirtualHost *:9091>

  ProxyPass /service ws://localhost:${WEBFORMS_PORT}/service

  ProxyPassReverse /service ws://localhost:${WEBFORMS_PORT}/service

  SSLEngine on

  SSLCertificateFile <путь
 до папки>/server.cer

  SSLCertificateKeyFile <путь
 до папки>/server.key

  SSLProxyEngine On

  RewriteEngine On

  RewriteCond %{HTTP:Connection} upgrade [NC]

  RewriteCond %{HTTP:Upgrade} websocket [NC]

  RewriteRule ^(.*) ws://localhost:${WEBFORMS_PORT}/$1 [P,L]

</VirtualHost>


В подстановке <путь до папки> укажите папку, в которой расположен
 сертификат сервера и его закрытый ключ. Сертификат может быть подготовлен
 с помощью специальных криптографических программных средств, например,
 [OpenSSL](https://www.openssl.org/).


Примечание.
 По умолчанию для работы веб-форм используется порт 9091. При необходимости
 используйте порт 9093 и измените раздел <VirtualHost *:9091> на
 <VirtualHost *:9093>.


	- Добавьте переменную окружения WEBFORMS_PORT в конец файла /etc/opt/foresight/fp10.x-webserver/envvars:


WEBFORMS_PORT=<номер порта>


В подстановке <номер порта> укажите порт, на который будут
 перенаправляться запросы с веб-сервера на BI-сервер, в зависимости от
 используемого порта в шаге 1:


		- если в шаге 1 добавлен раздел <VirtualHost *:9091>,
		 то укажите порт 9093;


		- если в шаге 1 добавлен раздел <VirtualHost *:9093>,
		 то укажите порт 9091.


	- Добавьте строку для прослушивания порта, на который будут направляться
	 запросы с клиента, в файле конфигурации веб-сервера:


		- /etc/apache2-fp10.x-web/ports.conf
		 в Debian-подобных дистрибутивах;


		- /etc/httpd-fp10.x-web/conf/httpd-fp10.x-web.conf
		 в RedHat-подобных дистрибутивах;


		- /etc/httpd2-fp10.x-web/conf/ports-enabled/http-fp10.x-web.conf
		 в ALT Linux.


Listen <номер
 порта>


В подстановке <номер порта> укажите порт в зависимости
 от используемого порта в шаге 1:


		- если в шаге 1 добавлен раздел <VirtualHost *:9091>,
		 то укажите порт 9091;


		- если в шаге 1 добавлен раздел <VirtualHost *:9093>,
		 то укажите порт 9093.


	- Включите модули proxy_http, proxy_wstunnel при использовании
	 Debian-подобных дистрибутивов и ALT Linux:


sudo a2enmod-fp10.x-web
 proxy_http

sudo a2enmod-fp10.x-web proxy_wstunnel


	- Выполните одно из действий:


		- если в шаге 1 добавлен раздел
		 <VirtualHost *:9091>, то определите порт веб-форм для работы
		 по протоколу WebSocket в файле настроек BI-сервера [settings.xml](../03_Setup_Web/BI_Server_Settings_XML.htm):


<Configuration>

  <Root>

    <Key Name="PP">

      <BIS>

        <Key Name="System">

          <WebForms
 Port="9093"/>

        </Key>

      </BIS>

    </Key>

  </Root>

</Configuration>


		- если в шаге 1 добавлен раздел <VirtualHost *:9093>,
		 то укажите порт, на котором будут работать веб-формы, в конфигурационном
		 файле веб-приложения [config.json](../03_Setup_Web/PP_config_Java.htm#config_json):


"webSocketPort":
 "9093"


	- [Перезапустите
	 серверную часть веб-приложения](../03_Setup_Web/Web_Server_Restart.htm).


После выполнения действий веб-формы будут настроены на работу по протоколу
 WebSocket с шифрованием соединения WSS.


См. также:


[Серверная
 часть веб-приложения](../03_Setup_Web/Web_server_setup.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
