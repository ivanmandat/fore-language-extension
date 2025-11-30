# Настройка балансировщика HAProxy при использовании веб-форм

Настройка балансировщика HAProxy при использовании веб-форм
-


# Настройка балансировщика HAProxy
 при использовании веб-форм


Работа веб-форм осуществляется по протоколу WebSocket. Если для разрабатываемого
 приложения формируется кластер и предполагается использование веб-форм,
 то потребуется задать дополнительные настройки для балансировщика. Представленные
 ниже настройки предполагают работу балансировщика по протоколу HTTP. Для
 получения информации о работе балансировщика по протоколу HTTPS обратитесь
 к разделу «[Настройка балансировщика
 HAProxy для работы по протоколу HTTPS](HAProxy_WebForms_by_https.htm)».


Предполагается, что развёртывание балансировщика и веб-приложения осуществляется
 на одном компьютере.


	- Установите HAProxy:


sudo apt-get install
 haproxy


	- Откройте файл настроек:


sudo nano /etc/haproxy/haproxy.cfg


В файле имеется четыре основных раздела:
 global, defaults, frontend и backend.


	- В разделе defaults задайте время ожидания подключения, время
	 бездействия клиента, время обработки запроса сервером. Также добавьте
	 время работы в туннельном режиме, который используется при работе
	 по протоколу WebSocket. Время без префикса задаётся в миллисекундах,
	 время с префиксом s - в секундах:


defaults


...


timeout connect 5s


timeout client 300s


timeout server 300s


timeout tunnel 3600s


...


	- Добавьте раздел frontend с настройками балансировщика для HTTP-запросов:


frontend ft_web_bi


bind *:555


bind-process all


acl bisom path -i -m
 sub /FPBI_App_v10.x/axis2/services


acl biproxy path -i -m
 sub /PPService.axd


use_backend bk_bi if
  bisom || biproxy


default_backend bk_web


	- Добавьте раздел backend с настройками веб-приложения:


backend bk_web


mode http


option forwardfor


server web <IP-адрес
 балансировщика>:8110 check #Адрес сервера с развёрнутым балансировщиком
 и веб-приложением


	- Добавьте раздел backend с настройками для группы BI-серверов,
	 между которыми будет осуществляться распределение нагрузки:


backend bk_bi


mode http


option forwardfor


balance roundrobin #Алгоритм
 балансировки


cookie IDBI insert indirect
 nocache


server bi1 <IP-адрес
 первого BI-сервера>:8810 cookie sb1


server bi2 <IP-адрес
 второго BI-сервера>:8810 cookie sb2


...


	- Добавьте раздел frontend с настройками балансировщика для WebSocket:


frontend ft_ws_bi


bind *:8080


bind-process all


default_backend bk_ws_bi


	- Добавьте раздел backend с настройками для группы BI-серверов
	 при работе через WebSocket:


backend bk_ws_bi


option forwardfor


balance roundrobin


cookie IDBI insert indirect
 nocache


server bi1 <IP-адрес
 первого BI-сервера>:9091 cookie sb1


server bi1 <IP-адрес
 второго BI-сервера>:9092 cookie sb2


...


	- Добавьте настройки для включения сбора статистики работы балансировщика,
	 в дальнейшем статистика будет доступна по адресу http://<IP-адрес
	 балансировщика>:8404/stat:


frontend stats


bind *:8404


stats enable


stats uri /stats


stats refresh 10s


	- Перезапустите HAProxy:


sudo systemctl restart
 haproxy


На этом настройка HAProxy завершена. Также необходимо настроить веб-приложение
 и BI-сервера, чтобы вся работа осуществлялась через установленный балансировщик.


	- В конфигурационном файле веб-приложения [config.json](../../03_Setup_Web/PP_config_Java.htm#config_json)
	 укажите адрес балансировщика и порт для работы через WebSocket:


{


  "targetRepo":
 "",


  "serviceUrl":
 "http://<IP-адрес балансировщика>:555/fp10.x/app/PPService.axd",


  "locale":
 "ru",


  "locales":
 ["ru"],


  "title":
 "FAP10",


  "baseUrl":
 "",


  "themes":
 ["fap10"],


  "webSocketPort":
 8080


}


В serviceUrl в адресе балансировщика указывается
 порт, который был указан в разделе ft_web_bi, а в webSocketPort указывается
 порт из раздела ft_ws_bi настроек балансировщика HAProxy.


	- В [реестре](../../03_Setup_Web/BI_Server_Registry_Key.htm)
	 или файле настроек [settings.xml](../../03_Setup_Web/BI_Server_Settings_XML.htm)
	 каждого BI-сервера задайте собственный порт, через который будет осуществляться
	 работа по протоколу WebSocket. Порты должны соответствовать тем портам,
	 которые были указаны в разделе bk_ws_bi настроек балансировщика HAProxy:


<Configuration>


<Root>


<Key Name="PP">


<BIS>


<Key Name="System">


<WebForms Port="9091"/>


</Key>


</BIS>


</Key>


</Root>


</Configuration>


На этом настройка завершена. Если все сделано верно, то веб-приложение
 будет доступно по адресу http://<IP-адрес балансировщика>:555/fp10.x/r/#/.


См. также:


[Создание кластера BI-серверов](Cluster_Of_BI_Server.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
