# Настройка аутентификации на сервере состояний

Настройка аутентификации на сервере состояний
-


# Настройка аутентификации на сервере состояний


	Для повышения безопасности при использовании [сервера
	 состояний](State_Server.htm) на базе [Redis](Redis.htm) или [Memcached](Memcached.htm)
	 настройте аутентификацию пользователей:


		- [Настройте конфигурационный файл на сервере
		 состояний](#conf).


		- [Зашифруйте учётные данные пользователя
		 в «Форсайт. Аналитическая платформа»](#credentials).


	Примечание.
	 Настройка аутентификации на сервере состояний доступна для Redis версии
	 6.0.0 и выше, для Memcached версии 1.5.15 и выше.


## Настройка конфигурационного файла на сервере
	 состояний


	Для аутентификации пользователя на сервере состояний измените конфигурационный
	 файл:


		- redis.conf. При
		 использовании сервера состояний на базе Redis;


		- memcached.conf.
		 При использовании сервера состояний на базе Memcached.


### Redis


	В файле redis.conf добавьте учётные данные администратора и пользователя,
	 под которым будет выполняться вход в систему:


	user default on #<зашифрованный
	 пароль администратора> ~* &* +@all

	user <имя пользователя>
	 on <зашифрованный пароль пользователя>
	 ~FP_* resetchannels -@all +setex +info +del +incr +get +set +expire


	Совет. Рекомендуется
	 использовать имя администратора по умолчанию - default.


	Для получения подробной информации обратитесь к документации Redis:


		- [шифрование пароля](https://redis.io/docs/management/security/acl#how-passwords-are-stored-internally);


		- [сохранение учётных данных пользователя](https://redis.io/docs/management/security/acl#use-an-external-acl-file).


### Memcached


	В файле memcached.conf задайте параметр -Y
	 - путь к файлу memcached.pwd, в котором содержатся учётные данные
	 пользователя в формате: <имя
	 пользователя>:<пароль>.


	Примечание.
	 В файле memcached.pwd после ввода учётных данных должен быть выполнен
	 переход на новую строку с помощью клавиши ENTER.


	Пример файла memcached.pwd:


	user_name:password


	Пример файла memcached.conf в ОС Linux:


	-Y /etc/memcached.pwd


	Примечание.
	 Для указания учётных данных пользователя доступно только использование
	 параметра -Y, аутентификация
	 с помощью SASL не поддерживается.


## Шифрование учётных данных пользователя
	 в «Форсайт. Аналитическая платформа»


	Для взаимодействия [кластера
	 BI-серверов](../Cluster/Cluster_Of_BI_Server.htm) с сервером состояний зашифруйте учётные данные пользователя
	 в «Форсайт. Аналитическая платформа»:


		- Запустите приложение [PP.Util](../../../05_RepoMngr/Service_Applications/PP_Util.htm),
		 которое расположено в папке установки продукта «Форсайт. Аналитическая платформа»,
		 со следующим параметром:


	PP.Util /encrypt_creds
	 <имя пользователя>
	 <пароль>


	Вместо PP.Util используйте PP.Util_start.sh
	 для выполнения команды в ОС Linux, PP.Util.exe для ОС Windows.


		- Скопируйте полученные зашифрованные учётные данные пользователя
		 и вставьте их в качестве значений параметров Crs
		 и Crsa подраздела [Credentials](../../03_Setup_Web/BI_Server_Registry_Key.htm#credentials)
		 в файле [settings.xml](../../03_Setup_Web/BI_Server_Settings_XML.htm)
		 или [реестре](../../03_Setup_Web/BI_Server_Registry_Key.htm).


	Пример файла settings.xml:


	<Configuration>

	 <Root>

	   <Key Name="PP">

	     <BIS>

	       <Key Name="System">

	         <Session KeyIncr="0"
	 Statable="Yes" />

	         <StateServer
	 Host="state-server.sample.com" Port="6379" Type="Redis">

	           <Credentials
	 Crsa="ALIHJDOCHDGAGOAEJJBPAPDGBHBLDEHKDIFLAGEMDHOEMMKC://gos"
	 Crs="U2FsdGVkX1+JUMi2hGBLY1oDJkJ9tJza8v0ZXXVOyQRxG+CezITE/4tNHMHB9qBPfNSk+5Ke0aHlOdnW5X0lGLzzG/ISf06FpkqRjYInxCvzBS6r9UpamDQYMZz0p+RuQnhf/76QwX7w1bAapLkbEhhzlhipksXtOjjaFZNP4ZoVlPd+iZLmivtjqzEHSgM/pf3K3aec+LF8Xk1KB9R9dX4OynBf7i0eLTBN4rg76m7JuVZn9UYW5ReBWjcfngPU3kdQH/+UjnQpAhEYOj6WGRSiRl13K28uQ/9Vhjy+zFQRylErDr1rPGsttST4rQsBsyQlZTV/elN61IqAMLRslh0qOB38J04YvgfkJKUuc3rveIOpIWVTc5fwendODnTyQ+v9wKBwW7GHwjxqkrsX4CGsDLeGRYbggrg0u9hkayky9T8cGE0sorXKNU7pMo45qhKyvQM1ymfYI4aSH3qdCarauI+i5+aw1UifsgON9wQyhpp4BCBCK"/>

	         </StateServer>

	       </Key>

	     </BIS>

	   </Key>

	 </Root>

	</Configuration>


		- Перезапустите сервер состояний и кластер BI-серверов.


	После выполнения действий будут зашифрованы учётные данные пользователя
	 для подключения к серверу состояний.


См. также:


[Сервер
 состояний](State_Server.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
