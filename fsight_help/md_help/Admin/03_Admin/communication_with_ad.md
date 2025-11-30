# Механизм работы со службами каталогов

Механизм работы со службами каталогов
-


# Механизм работы со службами каталогов


	При формировании подсистемы безопасности репозитория в менеджере
	 безопасности создаются пользователи и группы. Если предполагается
	 вход в репозитории с использованием [доменной](Setup.chm::/UiWebSetup/Authentication/Authentication.htm#domain)/[интегрированной
	 доменной аутентификации](Setup.chm::/UiWebSetup/Authentication/Authentication.htm#integrated_domain), то в менеджере безопасности
	 добавьте [доменных пользователей](Users/Admin_UserCreate_Domain.htm)
	 или [группы](Groups/Admin_GroupsCreateDomain.htm) после
	 настройки файла settings.xml.


	«Форсайт. Аналитическая платформа»
	 получает информацию о доменных субъектах безопасности из службы каталогов
	 домена или глобального каталога, которые должны быть настроены в компьютерной
	 сети. Взаимодействие со службой каталогов осуществляется по протоколу
	 LDAP/LDAPS.


	Если служба каталогов текущего домена (глобального каталога текущей
	 сети) сформирована на базе Active Directory и работа с «Форсайт. Аналитическая платформа»
	 осуществляется в ОС Windows, то для подключения к данной службе не
	 требуются дополнительные настройки.


	Если служба каталогов расположена на сервере с ОС Linux или необходимо
	 подключиться к службе каталогов не текущей, а какой-либо другой сети
	 (сервер с ОС Linux или Windows), то выполните следующие действия в
	 зависимости от операционной системы:


		ОС Linux
		 ОС Windows


				- Установите недостающие пакеты в зависимости от версии
				 ОС Linux:


					- Debian-подобные дистрибутивы:


sudo apt install libldap-2.4-2 libsasl2-modules-gssapi-mit


					- RedHat-подобные
					 дистрибутивы:


sudo yum install openldap openldap-clients


					- ALT Linux:


sudo apt-get install openldap-common


			Где:


					- BASE.
					 Компоненты домена. Всю необходимую информацию можно
					 получить у администратора сети, в которой расположен
					 сервер;


					- URI.
					 Адрес сервера службы каталогов. Схема ldap указывается,
					 если работа сервера настроена по протоколу TCP, и
					 ldaps, если используется TLS/SSL. В качестве порта
					 обычно указывается: 389 для ldap, 636 для ldaps. Для
					 работы с поддоменами через основной контроллер домена
					 указывается порт 3268 для ldap, 3269 для ldaps (глобальный
					 каталог).


				- Задайте параметры сопоставления атрибутов службы
				 каталогов и атрибутов субъектов безопасности «Форсайт. Аналитическая платформа»,
				 укажите учётные данные для подключения к службе каталогов
				 в файле [settings.xml](Setup.chm::/UiWebSetup/03_Setup_Web/BI_Server_Settings_XML.htm).
				 При необходимости для доменов или поддоменов подключите
				 [дополнительные контроллеры](#controllers).


				- Скачайте и запустите [инсталлятор
				 OpenSSL](https://slproweb.com/products/Win32OpenSSL.html). По умолчанию OpenSSL устанавливается в папку
				 C:\Program Files\OpenSSL-Win64.


				- Добавьте в системную переменную PATH путь до папки
				 bin - C:\Program Files\OpenSSL-Win64\bin.


				- Задайте параметры сопоставления атрибутов службы
				 каталогов и атрибутов субъектов безопасности «Форсайт. Аналитическая платформа»,
				 укажите учётные данные для подключения к службе каталогов
				 в файле [settings.xml](Setup.chm::/UiWebSetup/03_Setup_Web/BI_Server_Settings_XML.htm).
				 При необходимости для основного контроллера домена или
				 поддоменов подключите [дополнительные
				 контроллеры](#controllers).


				- Задайте настройки, управляющие работой в текущей
				 сети и определяющие параметры подключения к различным
				 доменам в конфигурационных файлах OpenLDAP и Kerberos.
				 Настройка осуществляется в соответствии с документацией
				 OpenLDAP и Kerberos. Задаваемые настройки должны учитывать
				 параметры работы текущей компьютерной сети и должны быть
				 скоординированы с администратором сети.


			Если предполагается аутентификация по протоколу GSSAPI на
			 серверах LDAP и PostgreSQL, то дополнительно установите «[MIT Kerberos for Windows 4.1](http://web.mit.edu/kerberos/dist/index.html#kfw-4.1)» (разрядность
			 должна совпадать с разрядностью используемой версии «Форсайт. Аналитическая платформа»).


	Примечание.
	 Настройки конфигурации файла settings.xml для настольного и веб-приложения
	 должны совпадать при одновременной работе в ОС Windows и Linux с одним
	 репозиторием.


	Примеры файла settings.xml для службы каталогов Active Directory
	 в зависимости от типа ОС, на базе которой работает «Форсайт. Аналитическая платформа»:


		 ОС Linux
		  ОС Windows


<Configuration>
  <Root>
    <Key Name="PP">
      <BIS>
        <Key Name="System">
          <MultiDomain>
            <Key Name="наименование домена 1" aliases="список альтернативных наименований домена 1" Proto="LDAP" url="ldap[s]://IP-адрес или доменное имя сервера:порт" base="dc=...,dc=..." libldap="libldap-2.4.so.2" liblber="liblber-2.4.so.2">

              <controllers>
                <Key Name="наименование контроллера 1" url="ldap[s]://IP-адрес или доменное имя сервера:порт" />

                <Key Name="наименование контроллера 2" url="ldap[s]://IP-адрес или доменное имя сервера:порт" />

              </controllers>
              <user filter="(&amp;(objectClass=user)(sAMAccountType=805306368))" groupsFilter="(&amp;(member=%1)(objectClass=group)(sAMAccountType=268435456))">
                <Key Name="a0" filter="user" ldap="objectClass"/>
                <Key Name="a1" map_to="DistinguishedName" ldap="distinguishedName" get_full_domain="1"/>
                <Key Name="a2" map_to="Name" ldap="sAMAccountName" make_upn="1"/>
                <Key Name="a3" map_to="Sid" ldap="objectSid"/>
                <Key Name="a4" map_to="DisplayName" ldap="cn"/>
                <Key Name="a5" map_to="Descr" ldap="displayName"/>
                <Key Name="a6" map_to="LookupName" ldap="sAMAccountName"/>
                <Key Name="a7" map_to="LookupName" ldap="userPrincipalName"/>
                <Key Name="a8" map_to="LookupName" ldap="displayName"/>
                <Key Name="a9" map_to="LookupName" ldap="cn"/>
              </user>
              <group filter="(&amp;(objectClass=group)(sAMAccountType=268435456))">
                <Key Name="a0" filter="group" ldap="objectClass"/>
                <Key Name="a1" map_to="DistinguishedName" ldap="distinguishedName" get_full_domain="1"/>
                <Key Name="a2" map_to="Name" ldap="sAMAccountName"/>
                <Key Name="a3" map_to="Sid" ldap="objectSid"/>
                <Key Name="a4" map_to="DisplayName" ldap="cn"/>
                <Key Name="a5" map_to="Descr" ldap="description"/>
                <Key Name="a6" map_to="LookupName" ldap="sAMAccountName"/>
                <Key Name="a7" map_to="LookupName" ldap="description"/>
              </group>
              <credentials realm="" Crs="..." Crsa="..." mechanism="GSSAPI"/>
            </Key>
            <Key Name="наименование поддомена 1" aliases="список альтернативных наименований поддомена 1" url="ldap[s]://IP-адрес или доменное имя сервера:порт" base="dc=...,dc=...">

              <controllers>
                <Key Name="наименование контроллера 1" url="ldap[s]://IP-адрес или доменное имя сервера:порт" />

                <Key Name="наименование контроллера 2" url="ldap[s]://IP-адрес или доменное имя сервера:порт" />

              </controllers>
              <user filter="(&amp;(objectClass=user)(sAMAccountType=805306368))" groupsFilter="(&amp;(member=%1)(objectClass=group)(sAMAccountType=268435456))">
                ...
              </user>
              <group filter="(&amp;(objectClass=group)(sAMAccountType=268435456))">
                ...
              </group>
              <credentials realm="" Crs="..." Crsa="..." mechanism="GSSAPI"/>
            </Key>
            <Key Name="наименование поддомена 2" aliases="список альтернативных наименований поддомена 2" url="ldap[s]://IP-адрес или доменное имя сервера:порт" base="dc=...,dc=...">

              <controllers>
                <Key Name="наименование контроллера 1" url="ldap[s]://IP-адрес или доменное имя сервера:порт" />

                <Key Name="наименование контроллера 2" url="ldap[s]://IP-адрес или доменное имя сервера:порт" />

              </controllers>
              <user filter="(&amp;(objectClass=user)(sAMAccountType=805306368))" groupsFilter="(&amp;(member=%1)(objectClass=group)(sAMAccountType=268435456))">
                ...
              </user>
              <group filter="(&amp;(objectClass=group)(sAMAccountType=268435456))">
                ...
              </group>
              <credentials realm="" Crs="..." Crsa="..." mechanism="GSSAPI"/>
            </Key>
            <Key Name="наименование домена 2" aliases="список альтернативных наименований домена 2" Proto="LDAP" url="ldap[s]://IP-адрес или доменное имя сервера:порт" base="dc=...,dc=..." libldap="libldap-2.4.so.2" liblber="liblber-2.4.so.2">

              ...
            </Key>
          </MultiDomain>
          <Gssapi libgssapi="libgssapi_krb5.so.2" libkrb5="libkrb5.so.3"/>
        </Key>
      </BIS>
    </Key>
  </Root>
</Configuration>


<Configuration>
  <Root>
    <Key Name="PP">
      <BIS>
        <Key Name="System">
          <MultiDomain>
            <Key Name="наименование домена 1" aliases="список альтернативных наименований домена 1" Proto="LDAP" url="ldap[s]://IP-адрес или доменное имя сервера:порт" base="dc=...,dc=..." libldap="libldap.dll" liblber="libldap.dll">

              <controllers>
                <Key Name="наименование контроллера 1" url="ldap[s]://IP-адрес или доменное имя сервера:порт" />

                <Key Name="наименование контроллера 2" url="ldap[s]://IP-адрес или доменное имя сервера:порт" />

              </controllers>
              <user filter="(&amp;(objectClass=user)(sAMAccountType=805306368))" groupsFilter="(&amp;(member=%1)(objectClass=group)(sAMAccountType=268435456))">
                <Key Name="a0" filter="user" ldap="objectClass"/>
                <Key Name="a1" map_to="DistinguishedName" ldap="distinguishedName" get_full_domain="1"/>
                <Key Name="a2" map_to="Name" ldap="sAMAccountName" make_upn="1"/>
                <Key Name="a3" map_to="Sid" ldap="objectSid"/>
                <Key Name="a4" map_to="DisplayName" ldap="cn"/>
                <Key Name="a5" map_to="Descr" ldap="displayName"/>
                <Key Name="a6" map_to="LookupName" ldap="sAMAccountName"/>
                <Key Name="a7" map_to="LookupName" ldap="userPrincipalName"/>
                <Key Name="a8" map_to="LookupName" ldap="displayName"/>
                <Key Name="a9" map_to="LookupName" ldap="cn"/>
              </user>
              <group filter="(&amp;(objectClass=group)(sAMAccountType=268435456))">
                <Key Name="a0" filter="group" ldap="objectClass"/>
                <Key Name="a1" map_to="DistinguishedName" ldap="distinguishedName" get_full_domain="1"/>
                <Key Name="a2" map_to="Name" ldap="sAMAccountName"/>
                <Key Name="a3" map_to="Sid" ldap="objectSid"/>
                <Key Name="a4" map_to="DisplayName" ldap="cn"/>
                <Key Name="a5" map_to="Descr" ldap="description"/>
                <Key Name="a6" map_to="LookupName" ldap="sAMAccountName"/>
                <Key Name="a7" map_to="LookupName" ldap="description"/>
              </group>
              <credentials realm="" Crs="..." Crsa="..." mechanism="GSSAPI"/>
            </Key>
            <Key Name="наименование поддомена 1" aliases="список альтернативных наименований поддомена 1" url="ldap[s]://IP-адрес или доменное имя сервера:порт" base="dc=...,dc=...">

              <controllers>
                <Key Name="наименование контроллера 1" url="ldap[s]://IP-адрес или доменное имя сервера:порт" />

                <Key Name="наименование контроллера 2" url="ldap[s]://IP-адрес или доменное имя сервера:порт" />

              </controllers>
              <user filter="(&amp;(objectClass=user)(sAMAccountType=805306368))" groupsFilter="(&amp;(member=%1)(objectClass=group)(sAMAccountType=268435456))">
                ...
              </user>
              <group filter="(&amp;(objectClass=group)(sAMAccountType=268435456))">
                ...
              </group>
              <credentials realm="" Crs="..." Crsa="..." mechanism="GSSAPI"/>
            </Key>
            <Key Name="наименование поддомена 2" aliases="список альтернативных наименований поддомена 2" url="ldap[s]://IP-адрес или доменное имя сервера:порт" base="dc=...,dc=...">

              <controllers>
                <Key Name="наименование контроллера 1" url="ldap[s]://IP-адрес или доменное имя сервера:порт" />

                <Key Name="наименование контроллера 2" url="ldap[s]://IP-адрес или доменное имя сервера:порт" />

              </controllers>
              <user filter="(&amp;(objectClass=user)(sAMAccountType=805306368))" groupsFilter="(&amp;(member=%1)(objectClass=group)(sAMAccountType=268435456))">
                ...
              </user>
              <group filter="(&amp;(objectClass=group)(sAMAccountType=268435456))">
                ...
              </group>
              <credentials realm="" Crs="..." Crsa="..." mechanism="GSSAPI"/>
            </Key>
            <Key Name="наименование домена 2" aliases="список альтернативных наименований домена 2" Proto="LDAP" url="ldap[s]://IP-адрес или доменное имя сервера:порт" base="dc=...,dc=..." libldap="libldap.dll" liblber="libldap.dll">

              ...
            </Key>
          </MultiDomain>
          <Gssapi libgssapi_32="gssapi32.dll" libgssapi_64="gssapi64.dll" libkrb5_32="krb5_32.dll" libkrb5_64="krb5_64.dll"/>
        </Key>
      </BIS>
    </Key>
  </Root>
</Configuration>


## Раздел MultiDomain


	В разделе MultiDomain содержатся
	 настройки доменов и поддоменов. Для доменов и поддоменов доступно
	 [подключение дополнительных контроллеров домена](#controllers).
	 Параметры подключения к доменам и поддоменам указываются в дочерних
	 элементах Key.


	Если в именах пользователей не содержится имя домена, то при настройке
	 мультидоменной аутентификации предварительно [переподключите
	 пользователей](Users/Admin_UserCreate_Domain.htm) в текущем репозитории.


	Примечание.
	 Указание нескольких независимых доменов поддерживается только при
	 использовании [встроенной
	 авторизации](setup.chm::/UiWebSetup/Authentication/Integrated_Authorization.htm). Если встроенная авторизация не используется,
	 то рекомендуется указывать один домен во избежание некорректной работы,
	 например, при использовании групп с одинаковыми именами в разных доменах.


	Особенности использования атрибутов в элементе Key:


		- Name. Наименование
		 домена или поддомена. Значение атрибута регистронезависимо. При
		 работе с Active Directory задаётся NetBIOS доменное имя (уникальное
		 имя в рамках конфигурации файла settings.xml);


		- aliases. Список
		 альтернативных наименований домена или поддомена, указанных через
		 точку с запятой «;». Используется для поиска настроек домена/поддомена
		 в разных контекстах имён (NC). Значение атрибута регистронезависимо.


	При работе с Active Directory учитывайте
	 следующие особенности:


			- если NetBIOS доменное имя, указанное в атрибуте Name, совпадает с частью
			 FQDN, указанной до первой точки, то в атрибуте aliases
			 достаточно указать полное доменное имя FQDN. Например:


<Key Name="DOMAIN" aliases="domain.server.name" Proto="LDAP" url="ldap://domain.server.name" base="dc=domain,dc=server,dc=name" libldap="libldap-2.4.so.2" liblber="liblber-2.4.so.2">


			- если NetBIOS доменное имя, указанное в атрибуте Name, не совпадает с частью
			 FQDN, указанной до первой точки, то в атрибуте aliases
			 должно содержаться два альтернативных наименования - полное
			 доменное имя FQDN и его первая часть. Например:


<Key Name="DMN" aliases="domain.server.name;domain" Proto="LDAP" url="ldap://domain.server.name" base="dc=domain,dc=server,dc=name" libldap="libldap-2.4.so.2" liblber="liblber-2.4.so.2">


		- Proto. Используемая
		 реализация взаимодействия со службами каталогов:


			- LDAP. Для клиента
			 OpenLDAP;


			- GC. Для клиента
			 Active Directory Windows. Поддерживается только в ОС Windows
			 и рекомендуется для использования.


	При [настройке
	 прав доступа](../02_ComonFunction/Admin_SecManager_CommonFunction.htm) и [распределении
	 привилегий](../04_SecurityPolicy/Admin_Priv.htm) доменным пользователям через группы учитывайте следующие
	 особенности:


			- если атрибут принимает значение «GC»,
			 то при подключении к репозиторию возвращается информация обо
			 всех доменных группах, включая вложенные;


			- если атрибут принимает значение «LDAP»,
			 то при подключении к репозиторию возвращается информация только
			 о доменных группах первого уровня.


	Важно.
	 Значения атрибутов Proto,
	 libldap и liblber,
	 учитываются только в первом указанном элементе Key.
	 Остальные настройки доменов и поддоменов должны соответствовать одному
	 и тому же значению атрибута Proto.


		- url.
		 Адрес сервера службы каталогов в формате: ldap[s]://<IP-адрес или доменное имя сервера>:<порт>. Схема ldap указывается,
		 если работа сервера настроена по протоколу TCP, и ldaps, если
		 используется TLS/SSL. В качестве порта обычно указывается: 389
		 для ldap, 636 для ldaps;


	Примечание.
	 Если задан порт глобального каталога (3268 для ldap, 3269 для ldaps),
	 то при выборе пользователей или групп в окне «[Поиск пользователей и групп](Admin_UsersGroups.htm)»
	 в веб-приложении будет выполняться поиск всех субъектов в рамках домена
	 и его поддоменов, независимо от указания конкретного домена.


		- base. Уникальный
		 идентификатор, соответствующий корневому элементу домена или поддомена,
		 для поиска объектов в каталоге. Идентификатор состоит из набора
		 компонентов домена или поддомена в виде строки - «[Distinguished
		 Names](https://www.rfc-editor.org/rfc/rfc4514)» в службе каталогов. Всю необходимую информацию
		 можно получить у администратора сети, в которой расположен сервер.


	Примечание.
	 Атрибут может быть задан только в одном из файлов: [ldap.conf](https://www.openldap.org/software/man.cgi?query=ldap.conf)
	 или [settings.xml](Setup.chm::/UiWebSetup/03_Setup_Web/BI_Server_Settings_XML.htm).
	 По умолчанию ldap.conf содержится в папке: /etc/ldap в Debian-подобных
	 дистрибутивах, /etc/openldap в RedHat-подобных дистрибутивах и ALT
	 Linux, C:\OpenLDAP в ОС Windows.


### Дополнительные контроллеры домена


	Дополнительные контроллеры домена используются в качестве альтернативных,
	 если основной контроллер домена или поддомен недоступны после трёх
	 попыток подключения к ним. При разрыве соединения с одним контроллером
	 и переключении на другой контроллер активная сессия пользователя сохраняется.


	Список дополнительных контроллеров домена задаётся в разделе controllers с элементами Key
	 в родительском элементе Key,
	 который соответствует заданному основному контроллеру домена или поддомену.
	 Допустимые атрибуты раздела Key:


		- Name. Наименование
		 контроллера;


		- url. Адрес контроллера
		 в формате: ldap[s]://<IP-адрес
		 или доменное имя сервера>:<порт>.
		 Задаётся аналогично атрибуту «[url](#url)», определяющему адрес сервера службы
		 каталогов.


	Пример раздела controllers:


<controllers>
  <Key Name="наименование контроллера 1" url="ldap[s]://IP-адрес или доменное имя сервера:порт" />

  <Key Name="наименование контроллера 2" url="ldap[s]://IP-адрес или доменное имя сервера:порт" />

</controllers>


### Настройки домена или поддомена


	В каждом домене или поддомене могут содержаться разделы user
	 и group, в которых определены
	 элементы Key.


	Особенности использования атрибутов в элементе Key:


		- filter. Дополнительный
		 фильтр поиска по типу субъекта: user или group;


		- map_to. Соответствие
		 ldap-атрибутов для поиска и добавления доменных субъектов ([пользователей](Users/Admin_UserCreate_Domain.htm) или
		 [групп](Groups/Admin_GroupsCreateDomain.htm)) в менеджере
		 безопасности. Атрибут содержит следующие значения:


			- Descr. Описание
			 субъекта. Отображается в качестве значения параметра «Описание» в [свойствах
			 пользователя](Users/Admin_UserProp_Common.htm) или [группы](Groups/Admin_GroupProp_Common.htm);


			- DisplayName.
			 Полное наименование доменного пользователя. Отображается в
			 качестве значения параметра «Полное
			 наименование» в [свойствах
			 пользователя](Users/Admin_UserProp_Common.htm);


			- EMail. Адрес
			 электронной почты субъекта по умолчанию. Задаётся в качестве
			 значения свойства [IUserProfile.Email](KeSom.chm::/Interface/IUserProfile/IUserProfile.Email.htm);


			- SamAccountName.
			 Наименование пользователя без учёта домена в формате <домен>\<имя>;


			- UserPrincipalName.
			 Наименование пользователя с учётом домена в формате <имя>@<домен>.
			 Если не указано, то значение должно быть сформировано с помощью
			 значения «Name» с
			 атрибутом make_upn.
			 Задаётся в качестве значения свойства [ISecuritySubject.UserPrincipalName](KeSom.chm::/Interface/ISecuritySubject/ISecuritySubject.UserPrincipalName.htm);


			- Name. Способ
			 формирования наименования субъекта. Может содержать атрибут
			 make_upn со значением
			 «1» для формирования «UserPrincipalName»
			 на основе значения «Name»
			 с учётом домена.


	Примечание.
	 При использовании значения «Name»
	 с атрибутом make_upn, «DistinguishedName» должен быть задан
	 с атрибутом get_full_domain.


	Если атрибут map_to
	 принимает значение «Name»
	 и атрибут ldap принимает значение
	 «sAMAccountName», то к значению,
	 полученному из LDAP-каталога, всегда добавляется имя домена: DOMAIN\ATTRVALUE;


			- DistinguishedName.
			 Уникальное имя для субъекта в формате, который определен для
			 службы каталогов, например: CN=user,OU=group,DC=domain,DC=ru.
			 Используется для формирования значения «UserPrincipalName»,
			 если задано значение «Name»
			 с атрибутом make_upn.
			 Может содержать атрибут get_full_domain
			 со значением «1». Задаётся в качестве значения свойства [ISecuritySubject.DistinguishedName](KeSom.chm::/Interface/ISecuritySubject/ISecuritySubject.DistinguishedName.htm);


			- Sid. Идентификатор
			 субъекта. Может содержать атрибут sid_prefix
			 со значением «1», который добавляет префикс «LDAP-» к оригинальному
			 SID-идентификатору. Задаётся в качестве значения свойства
			 [ISecuritySubject.Sid](KeSom.chm::/Interface/ISecuritySubject/ISecuritySubject.Sid.htm);


			- LookupName.
			 Значение ldap-атрибута, по которому будет выполняться поиск
			 доменных субъектов.


	Примечание.
	 Для ldap-атрибута должен быть указан хотя бы один атрибут map_to
	 со значением «LookupName».


	При указании способа формирования наименования субъекта «Name»
	 убедитесь, что выполняются следующие условия для имён субъектов:


		- имя не может быть пустым, не заканчивается символом «\»
		 и содержит домен (DOMAIN\NAME);


		- имя может совпадать с UPN. Для пользователей UPN не может
		 быть пустым и должен содержать символ «@»;


		- Sid не может быть пустым.


	Субъекты с невалидными именами пропускаются и в лог выводится одна
	 из следующих ошибок:


		- LDAP: Name cannot be empty;


		- LDAP: Name '<NAME>' should contain domain;


		- LDAP: Name '<NAME>' should not end with '\\' symbol;


		- LDAP: Sid cannot be empty;


		- LDAP: UserPrincipalName cannot be empty;


		- LDAP: UserPrincipalName '<UPN>' should contain '@'.


	Если были пропущены все субъекты, то перепроверьте настройки атрибута
	 map_to.


### Учётные данные для подключения к серверу службы каталогов


	В каждом домене или поддомене должен содержаться элемент credentials
	 с атрибутами:


		- realm. Доменное
		 имя;


		- Crs/Crsa.
		 Учётные данные для подключения к серверу службы каталогов в зашифрованном
		 виде. Зашифрованные значения этих атрибутов можно получить с помощью
		 утилиты [PP.Util](Setup.chm::/05_RepoMngr/Service_Applications/PP_Util.htm),
		 используя параметр /encrypt_creds;


		- username/password.
		 Имя пользователя и пароль в открытом виде. Используются для совместимости
		 с предыдущими версиями «Форсайт. Аналитическая платформа».
		 Если указаны обе пары атрибутов, то будут использоваться зашифрованные
		 учётные данные.


	Совет.
	 В целях безопасности рекомендуется использовать учётные данные в зашифрованном
	 виде. Если указаны обе пары атрибутов Crs/Crsa и username/password, то наибольший приоритет
	 у атрибутов Crs/Crsa.


		- mechanism. Механизм
		 подключения к серверу службы каталогов, например «GSSAPI». Если
		 указана пустая строка или в атрибуте «[url](#url)» задан адрес сервера службы каталогов
		 с протоколом ldaps, то используется механизм SASL SIMPLE.


	Примечание.
	 Убедитесь, что используемый механизм поддерживается сервером службы
	 каталогов.


См. также:


[Создание
 учетных записей пользователей и работа с ними](Users/Admin_Users.htm) | [Подключение
 доменного пользователя](Users/Admin_UserCreate_Domain.htm) | [Подключение
 доменной группы](Groups/Admin_GroupsCreateDomain.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
