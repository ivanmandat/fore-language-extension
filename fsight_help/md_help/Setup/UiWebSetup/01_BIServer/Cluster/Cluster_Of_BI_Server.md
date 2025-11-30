# Создание кластера BI-серверов

Создание кластера BI-серверов
-


# Создание кластера BI-серверов


На базе нескольких BI-серверов продукта «Форсайт. Аналитическая платформа»
 можно развернуть отказоустойчивый кластер. Для этого понадобится балансировщик,
 [сервер состояний](../StateServer/State_Server.htm) и несколько
 BI-серверов, настроенных на работу с одним сервером состояний. Связь всех
 элементов кластера можно условно изобразить в виде следующей схемы:


![](Scalability.png)


Балансировщик может быть установлен как перед веб-серверами, так и перед
 BI-серверами. Как правило, достаточно поставить балансировщик перед BI-сервером,
 а веб-приложение настроить на адрес балансировщика. В некоторых ситуациях
 веб-приложение может стать узким местом, в этом случае необходимо увеличивать
 количество веб-серверов и добавлять балансировщик перед ними. Таким образом,
 пользователи будут открывать адрес балансировщика, который будет направлять
 запросы на один из веб-серверов.


Примечание.
 Перед созданием кластера ознакомьтесь с [основными
 рекомендациями](general_recommendations.htm).


Рассмотрим пример развертывания кластера на базе нескольких BI-серверов
 продукта «Форсайт. Аналитическая платформа»,
 балансировщика и сервера состояний Memcached.
 Для создания кластера выполните следующие настройки:


[![](../../../Opened.gif)![](../../../Closed.gif)Настройка всех
 BI-серверов на использование одного сервера состояний](javascript:TextPopup(this))


	После [установки](../../UiWebSetup_TitlePage.htm) BI-серверов
	 для каждого из них измените конфирурационный файл [settings.xml](../../03_Setup_Web/BI_Server_Settings_XML.htm):


		- в параметре Statable
		 установите значение «Yes»;


		- в разделе StateServer
		 укажите параметры сервера состояний.


	Примечание.
	 Работа с сервером состояний доступна, если моникеры BI-сервером генерируются
	 через GUID, поэтому проверьте, чтобы параметр KeyIncr
	 в конфигурационном файле имел значение 0.


	Пример:


<...>
    <Key Name="PP">
        <BIS>
            <Key Name="System">
                <...>
                <Session ... Statable="Yes" ... />
                <StateServer Host="StateServer" Port="11211" Type="MemCached" />
                <...>
            </Key>
        </BIS>
    </Key>
</...>


В зависимости от используемого балансировщика
 задайте его настройки:


[![](../../../Opened.gif)![](../../../Closed.gif)Настройка
 балансировщика HAProxy](javascript:TextPopup(this))


	Установите HAProxy из репозитория:


	sudo apt install haproxy


	Для использования балансировщика HAProxy вместе с BI-серверами «Форсайт. Аналитическая платформа»
	 после его установки измените конфигурационный файл /etc/haproxy/haproxy.cfg.
	 Ниже приведён пример файла с балансировкой на четыре BI-сервера, используется
	 алгоритм кругового обслуживания (Round-robin) и отображение статистики
	 балансировщика на порту 8404:


global
        log /dev/log local0
        log /dev/log local1 notice
        chroot /var/lib/haproxy
        stats socket /run/haproxy/admin.sock mode 660 level admin
        stats timeout 30s
        user haproxy
        group haproxy
        daemon
        # Default SSL material locations.
        ca-base /etc/ssl/certs
        crt-base /etc/ssl/private
        # Default ciphers to use on SSL-enabled listening sockets.
        # For more information, see ciphers(1SSL). This list is from:
        #  https://hynek.me/articles/hardening-your-web-servers-ssl-ciphers/
        ssl-default-bind-ciphers ECDH+AESGCM:DH+AESGCM:ECDH+AES256:DH+AES256:ECDH+AES128:DH+AES:ECDH+3DES:DH+3DES:RSA+AESGCM:RSA+AES:RSA+3DES:!aNULL:!MD5:!DSS
        ssl-default-bind-options no-sslv3
defaults
        log global
        mode http
        option httplog     # Расширенный лог HTTP.
        option dontlognull # Отключение логирования соединений, в которых не были переданы данные.
        timeout connect 60s
        timeout client  500s
        timeout server  500s
        timeout http-keep-alive 100s
# Файлы ошибок по умолчанию. HAProxy отправляет их, если так настроены правила и от BI-серверов не пришёл ответ.
        errorfile 400 /etc/haproxy/errors/400.http
        errorfile 403 /etc/haproxy/errors/403.http
        errorfile 408 /etc/haproxy/errors/408.http
        errorfile 500 /etc/haproxy/errors/500.http
        errorfile 502 /etc/haproxy/errors/502.http
        errorfile 503 /etc/haproxy/errors/503.http
        errorfile 504 /etc/haproxy/errors/504.http
frontend ft_bi
        bind 0.0.0.0:555      #Порт для работы балансировщика.
        bind-process all      #Прикрепляет прослушивание порта к определённым номерам процессов. Значение all по умолчанию. Можно не указывать.
        default_backend bk_bi #Группа BI-серверов.
        http-response set-header Keep-Alive timeout=100 # Отправка в ответах значения таймаута keep-alive на стороне балансировщика (в секундах).
backend bk_bi #Название группы BI-серверов.
        option forwardfor
        balance roundrobin #Алгоритм балансировки.
        cookie IDBI insert indirect nocache #Добавление cookie для обеспечения режима липких сессий.
        default-server check inter 2s rise 2 fall 3 #Включить проверку работоспособности для всех BI-серверов. Проверка каждые 2 секунды. Считаем BI-сервер упавшим после 3 провалившихся проверок, восстановившемся в работу после 2 успешных. Упавшие BI-сервера выключаются из балансировки.
        default-server maxconn 64 # Включить для серверов максимальное число соединений, по умолчанию 64 (число воркеров в конфигурационном файле Apache2 по умолчанию). Если все BI-сервера заняты, то соединения встанут в очередь. Если время ожидания в очереди превысит timeout connect, то балансировщик вернёт ошибку 503.
        server bi1 127.0.0.1:81 cookie sb1 #Название и адрес BI-сервера. Нужно прописать свои.
        server bi2 127.0.0.1:82 cookie sb2
        server bi3 127.0.0.1:83 cookie sb3
        server bi4 127.0.0.1:84 cookie sb4
frontend stats #Конфигурирование страницы статистики балансировщика.
        bind *:8404
        stats enable
        stats uri /stats
        stats refresh 10s

	Если версия HAProxy из репозитория по каким-либо причинам не подходит,
	 то можно собрать нужную версию из исходных файлов. Ссылки на различные
	 версии HAProxy доступны на официальном сайте [https://www.haproxy.org/](https://www.haproxy.org/).
	 Также можно использовать официальный репозиторий на [GitHub](https://github.com/haproxy/haproxy).


[![](../../../Opened.gif)![](../../../Closed.gif)Настройка
 балансировщика nginx](javascript:TextPopup(this))


	Для использования балансировщика nginx
	 вместе с BI-серверами «Форсайт. Аналитическая платформа»
	 после его установки измените конфигурационный файл nginx.conf
	 (располагается в папке ...\nginx\conf\ при работе в ОС Windows или
	 /etc/nginx/ при работе в ОС Linux).


	Примечание.
	 Убедитесь, что балансировщик nginx используется с модулем sticky.


	Файл должен иметь примерно следующее содержимое:


worker_processes  1;
worker_rlimit_nofile 20240;
events {
    worker_connections  20240;
}
http {
    log_format upstream   '$upstream_addr - $upstream_status | $request - [ $upstream_response_time ]';
    upstream backend {
        sticky;
        server <BIServer1>;
        server <BIServer2>;
    }
    server {
        listen   555;
        server_name  <NginxServerName>;
        access_log   logs/nginx_upstream_access.log  upstream;
        location / {
            proxy_set_header X-Real-IP $remote_addr;
            proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
            proxy_set_header Host $host:555;
            proxy_pass  http://backend;
        }
    }
}

	Настройте параметры балансировщика:


		- в директиве upstream
		 задайте список серверов, на которые переадресуются запросы. После
		 ключевого слова upstream
		 укажите имя, которое в дальнейшем будет использоваться в директиве
		 location:


			- укажите директиву sticky
			 для того, чтобы все запросы одного клиента привязывались и
			 передавались одному BI-серверу, выбранному согласно настроенной
			 методике балансировки. Если назначенный сервер не может обработать
			 запрос, то выбирается новый сервер также, как если бы клиент
			 не имел привязки к серверу. Передача информации о том, к какому
			 серверу должны передаваться те или иные запросы, осуществляется
			 через случайные наборы данных (cookie), которые генерируются
			 для каждого клиента. Для работы данной директивы в nginx
			 установите дополнительный модуль nginx-sticky
			 (по умолчанию он отсутствует в сборке);


			- в директивах server
			 задайте имена или IP-адреса BI-серверов, на которые будут
			 переадресованы запросы;


		- в директиве server
		 задайте параметры виртуального сервера, к которому в дальнейшем
		 будет обращаться веб-приложение:


			- в директиве listen
			 задайте порт, через который будет производиться работа;


			- в директиве server_name
			 задайте наименование сервера, на котором запущен nginx;


			- в директиве location
			 задайте правила переадресации запросов. Для получения подробной
			 информации о возможности прокотолирования IP-адреса в зависимости
			 от расположения балансировщика обратитесь к разделу «[Настройка
			 протоколирования IP-адреса в ОС Linux](../../04_FAQ/Balancer_Additional_Settings.htm)»;


			- в директиве proxy_pass
			 задайте раздел, описывающий сервера, на которые необходимо
			 выполнять переадресацию.


	Например, в конфигурационном файле указаны следующие значения:


upstream backend {
    sticky;
    server BIServer1;
    server BIServer2;
}
server {
    listen   555;
    server_name  BIServer;
    access_log   logs/nginx_upstream_access.log  upstream;
    location / {
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header Host $host:555;
        proxy_pass  http://backend;
    }
}

	В этом случае все запросы, пришедшие на адрес http://BIServer:555/axis2/services/PP.SOM.Som
	 будут перенаправлены на BI-сервера по адресам http://BIServer1/axis2/services/PP.SOM.Som
	 и http://BIServer2/axis2/services/PP.SOM.Som/.


	Более подробную информацию о параметрах, указываемых в конфигурационном
	 файле nginx.conf, можно найти
	 в документации по nginx: [http://nginx.org/ru/](http://nginx.org/ru/).


Настройте веб-приложение:


[![](../../../Opened.gif)![](../../../Closed.gif)Настройка веб-приложения
 для работы с балансировщиком](javascript:TextPopup(this))


	Для того чтобы веб-приложение работало через балансировщик в файле
	 [PP.xml](../../03_Setup_Web/PP_config_Java.htm)
	 вместо пути к BI-серверу укажите путь и порт балансировщика:


<?xml version="1.0" encoding="utf-8" ?>
<pp>
    <service url="http://BIServer:555/axis2/services/PP.SOM.Som" timeout="120000"/>
    <metabase id="Warehouse" ping="120000" recentObjects="false" />
    <cultures>
        <culture cultureName="ru" />
        <culture cultureName="en" />
    </cultures>
    <...>
</pp>


Таким образом, запрос от клиента поступает через веб-сервер на балансировщик.
 Балансировщик выбирает BI-сервер и в дальнейшем все запросы от этого клиента
 будут отправляться на выбранный BI-сервер. Сам BI-сервер после обработки
 запроса и обращения к СУБД будет сохранять параметры всех объектов на
 сервере состояний. Если при выполнении какого-либо запроса произошел сбой
 BI-сервера, то балансировщик повторно отправит запрос на другой BI-сервер,
 который восстановит все необходимые объекты с сервера состояний, выполнит
 запрос и сформирует ответ пользователю.


Если предполагается работа с веб-формами, которые при своей работе используют
 протокол WebSocket, то используйте балансировщик HAProxy. Для получения
 подробной информации обратитесь к разделу «[Настройка
 балансировщика HAProxy для работы веб-форм](HAProxy_settings.htm)».


Если используется [сервис
 лицензирования](../../../08_Licensing/Service/Licensing_Service.htm) в ОС Linux, то для обеспечения его отказоустойчивости
 используйте балансировщик HAProxy. Для получения подробной информации
 обратитесь к разделу «[Настройка
 балансировщика HAProxy при использовании сервиса лицензирования](License_HAProxy_Settings.htm)».


## Штатный режим работы кластера


Схема штатной работы кластера:


![](clustersample.png)


	- Запрос.


	- Запрос BI-серверу.


	- Запрос к СУБД.


	- Получение ответа от СУБД.


	- Сохранение состояния.


	- Ответ от BI-сервера.


	- Передача полученных данных веб-серверу.


## Сбой при передаче запроса кластеру


Схема работы кластера при сбое передачи запроса:


![](ClusterSample2.png)


	- Запрос.


	- Запрос BI-серверу. При ошибке перенаправление запроса на другой
	 BI-сервер.


	- Восстановление состояния.


	- Запрос к СУБД.


	- Получение ответа от СУБД.


	- Ответ от BI-сервера.


	- Передача полученных данных веб-серверу.


См. также:


[Рекомендации по созданию кластера
 BI-серверов](general_recommendations.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
