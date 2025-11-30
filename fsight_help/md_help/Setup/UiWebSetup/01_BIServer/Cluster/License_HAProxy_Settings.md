# Настройка балансировщика HAProxy при использовании сервиса лицензирования

Настройка балансировщика HAProxy при использовании сервиса лицензирования
-


# Настройка балансировщика HAProxy при использовании сервиса лицензирования


Для обеспечения отказоустойчивости [сервиса
 лицензирования](../../../08_Licensing/Service/Licensing_Service.htm) при использовании одного BI-сервера или [кластера
 BI-серверов](Cluster_Of_BI_Server.htm) в ОС Linux настройте балансировщик HAProxy:


	- Установите HAProxy:


sudo apt-get install
 haproxy


	- Откройте файл /etc/haproxy/haproxy.cfg с настройками HAProxy
	 и выполните следующие действия:


		- измените значения параметров в разделе defaults:


			- timeout connect.
			 Время ожидания установки соединения с сервисом лицензирования
			 и отправления первого запроса к нему;


			- timeout client.
			 Время бездействия клиента;


			- timeout server.
			 Время обработки запроса при открытом соединении с сервисом
			 лицензирования.


timeout connect 30s


timeout client  30s


timeout server  30s


Время без единицы измерения задаётся в миллисекундах,
 время с единицей измерения «s» - в секундах.


Совет.
 Рекомендуется задавать одинаковые значения параметрам timeout connect,
 timeout client, timeout server. Значение поля [serverTimeout](../../../08_Licensing/Service/Licensing_Service_Configuration.htm#server_timeout),
 заданное в файле [settings.json](../../../08_Licensing/Service/Licensing_Service_Configuration.htm),
 должно быть меньше указанных значений.


		- сформируйте раздел frontend ft_bi:


frontend ft_bi

    bind <IP-адрес
 и DNS-имя балансировщика>:<номер
 порта>

    default_backend bk_licman  #Группа для работы
 с сервисами лицензирования


		- сформируйте раздел peers sticktables:


peers sticktables

    bind :10000

    server <IP-адрес
 или DNS-имя сервера лицензий> #Основной сервер лицензий, по
 умолчанию localhost

    table sticky-sessions type ip size 1m


Примечание.
 IP-адрес или DNS-имя сервера лицензий должно совпадать со значением поля
 [server](../../../08_Licensing/Service/Licensing_Service_Configuration.htm#server),
 заданного в файле [settings.json](../../../08_Licensing/Service/Licensing_Service_Configuration.htm).


		- сформируйте раздел backend bk_licman:


backend bk_licman

    option forwardfor

    default-server check inter 25s rise 2 fall 5

    default-server on-marked-down shutdown-sessions

    balance roundrobin

    stick match src table sticktables/sticky-sessions

    stick store-request src table sticktables/sticky-sessions

    server licman1 <IP-адрес
 или DNS-имя сервиса лицензирования 1>:<номер
 порта 1>

    server licman2 <IP-адрес
 или DNS-имя сервиса лицензирования 2>:<номер
 порта 2>

    ...

    server licmanN <IP-адрес
 или DNS-имя сервиса лицензирования N>:<номер
 порта N>


Укажите список сервисов лицензирования в
 параметре server.


Примечание.
 Порт соответствующего сервиса лицензирования должен совпадать со значением
 поля [port](../../../08_Licensing/Service/Licensing_Service_Configuration.htm#port),
 заданного в файле [settings.json](../../../08_Licensing/Service/Licensing_Service_Configuration.htm).


	- Сформируйте раздел License, содержащий подраздел Service с параметрами
	 подключения к сервису лицензирования, в файле [settings.xml](../../03_Setup_Web/BI_Server_Settings_XML.htm):


		- Active.
		 Признак взаимодействия BI-сервера с сервером лицензий через сервис
		 лицензирования. Задайте параметру значение True.
		 По умолчанию параметр принимает значение False,
		 взаимодействие BI-сервера с сервером лицензий осуществляется напрямую;


		- Host.
		 IP-адрес или DNS-имя балансировщика;


		- Port.
		 Номер порта, по которому доступен балансировщик.


Пример раздела License в settings.xml:


<...>


  <Key Name="License">


    <Key
 Name="Service" Active="True" Host="blncr-web"
 Port="555"/>


  </Key>

</...>


	- [Перезапустите BI-сервер](../bi-service_restart.htm).


После выполнения действий BI-сервер или кластер BI-серверов будет взаимодействовать
 с сервисами лицензирования через балансировщик HAProxy.


См. также:


[Создание кластера BI-серверов](Cluster_Of_BI_Server.htm)
 | [Сервис
 лицензирования и особенности его использования](../../../08_Licensing/Service/Licensing_Service.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
