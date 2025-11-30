# Настройки в settings.xml

Настройки в settings.xml
-


# Настройки в settings.xml


Наличие файла настроек settings.xml проверяется при запуске веб- или
 настольного приложения.


Пути расположения файла settings.xml:


	- /opt/foresight/fp10.x-biserver/etc
	 в ОС Linux;


	- %PROGRAMDATA%\Foresight\Foresight Analytics Platform в
	 ОС Windows.


Настройки, хранящиеся в файле, аналогичны тем, которые сохраняются в
 [реестре](BI_Server_Registry_Key.htm). В файле они представлены
 в виде XML-структуры, наименования вершин соответствуют наименованиям
 подразделов реестра, значения атрибутов соответствуют значениям параметров.


Пример файла с настройками: [settings_xml.zip](../settings_xml.zip).


Все настройки указываются в рамках отдельных вершин <Key
 ...></Key>, которые,
 в свою очередь, являются дочерними для вершин <Configuration><Root>...</Root></Configuration>.


<Configuration>


  <Root>


    <Key ...>


    </Key>


    <Key ...>


    </Key>


  </Root>


</Configuration>


Примечание.
 Для указания значений параметров используйте экранирование XML-символов.


## Раздел System


Настройки BI-сервера, хранящиеся в ветке реестра System, в файле сохраняются
 в виде дочерних вершин для вершины <Key
 Name="System">. Данная вершина является дочерней для
 вершин <Key Name="PP"><BIS>...</BIS></Key>.


<...>


  <Key Name="PP">


    <BIS>


      <Key Name="System" GetSystemInfoExtended="true"
 AllowDevEnv="true">


        <Cert
 Alg="pro" Data="..." Id="SPCERT" Key="6E8E6325-496F-4177-BCEE-8A7859225C99"
 />


        <OAuth>


          <Key
 Name="Google"


            PPUserNameFormat="%s"


            ConsumerKey="214433571309-nl9btulcqc3u05d8128uaei3fjrdni8r.apps.googleusercontent.com"


            ConsumerSecret="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"


            AuthUrl="https://accounts.google.com/o/oauth2/auth/authorize?client_id=214433571309-nl9btulcqc3u05d8128uaei3fjrdni8r.apps.googleusercontent.com&amp;response_type=code&amp;access_type=offline&amp;scope=https%3A//www.googleapis.com/auth/userinfo.profile&amp;response_mode=query&amp;redirect_uri="


            Icon="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAIAAACQkWg2AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAB5SURBVDhPlZHJEQAhCASNy4CMx2hMxmBwPaBgxLXsJ9IyaKBHUKg5BiDmug47SnB6GeWwoLrtjVSSJ/TqIJVZODIF7r+2L4HzQBiXIWwDJOFCTTaCTEABl5Ynwh22m3hpMWCLo2D+QY35ET4wuMIXBo5lY6Jw5VEgatYLFxcSCQWXAAAAAElFTkSuQmCC"


            RequestTokenUrl="https://oauth2.googleapis.com/token"


            RequestCallbackParam="redirect_uri"


            UserDataUrl="https://www.googleapis.com/oauth2/v3/userinfo"


            UserIdAttr="given_name"


            UserNameAttr="name"


            UserRolesAttr="groups"
 />


        </OAuth>


        <ExtService>


          <Key
 Name="JWT_PROVIDER" Type="JWT"


            AuthUrl="https://example.com/jwt/login"


            UserIdAttr="login"


            UserNameAttr="name"


            UserRolesAttr="groups"


            SignaturePublicKey="LS0tLS1CR...tFWS0tLS0t"


            UPN
 = "upn"


            Email
 = "email">


              <Key
 Name="AdditionalAttributes">


                <Key
 Name="GlobalVar1" IdVariable="GLOBALVAR_REPO" />


                <Key
 Name="GlobalVar2" />


              </Key>


          </Key>


          <Key
 Name="HTTP_PROVIDER" Type="HttpHeaders"


            AuthUrl="https://example.com/httpheaders/login"


            UserIdAttr="login"


            UserNameAttr="name"


            UserRolesAttr="groups"


            CertificateHash="AB1CD5194EFDAAC2139BE224DEC6EC28280F1234">


              <Key
 Name="AdditionalAttributes">


                <Key
 Name="GlobalVar1" IdVariable="GLOBALVAR_REPO" />


                <Key
 Name="GlobalVar2" />


              </Key>


          </Key>


        </ExtService>


        <Session
 KeyIncr="0" LockSession="-2" RWLockSlim="-2"
 LockAd="-2" Cache="1" Statable="Never"
 StoreBins="3" StoreBinSize="2M" TimeoutSec="-1" SecureSession = "0"
 />


        <StateServer
 Type="Redis" Host="localhost" Port="-1"
 ExpireTime="3600" />


        <Pool
 MaxConnections="1" UserMaxConnections="0" Strategy="LRU"
 RetryCount = "20" RetryInterval = "2000">


          <Key
 Name="K1" Db="USER:FPRepository@FPServer" UserMaxConnections="1"
 />


        </Pool>


        <MbDefs
 AccessMode="1" />


        <Mbs>


          <Key
 Name="FPRepository" StatKeys="57637,150" />


        </Mbs>

       ...


      </Key>


    </BIS>


  </Key>


</...>


Описание настроек смотрите в разделе «[Настройки
 в системном реестре](BI_Server_Registry_Key.htm#system)».


Для работы со службами каталогов при [настройке
 доменной или интегированной доменной аутентификации](../Authentication/Domain_Authentication_Apache.htm) создайте подраздел
 MultiDomain в разделе System. Для получения подробной информации обратитесь
 к разделу «[Механизм
 работы со службами каталогов](Admin.chm::/03_Admin/communication_with_ad.htm)».


Примечание.
 Механизм работы со службами каталогов настраивается только в settings.xml.


## Раздел Audit


В разделе с ключом Audit находятся учётные данные [служебного
 пользователя подсистемы безопасности](../../05_RepoMngr/Setup_RepoMngr_Service_User.htm). Все параметры указываются в
 дочерних элементах элемента <Key Name="Audit">,
 который, в свою очередь, является дочерним элементом элемента <Root>.


<...>


  <Key Name="Audit">


    <Key Name="Credentials">


      <Key Name="Item0"
 Realm="<...>" Crs="<...>" Crsa="<...>"
 />


      <...>


    </Key>


  </Key>


</...>


Описание настроек смотрите в разделе «[Настройки
 в системном реестре](BI_Server_Registry_Key.htm#audit)».


## Раздел Service


В разделе с ключом Service находятся настройки для обращения к удалённому
 BI-серверу. Все параметры указываются в дочерних
 элементах элемента <Key Name="Service">,
 который, в свою очередь, является дочерним элементом элемента <Root>.


<...>


  <Key Name="Service">


    <Epts>


      <Key Name="s0"
 address="https://bi-server0.sample.com/FPBI_App_v10.x64/axis2/services/PP.SOM.Som"
 />


      <Key Name="s1"
 address="https://bi-server1.sample.com/FPBI_App_v10.x64/axis2/services/PP.SOM.Som"
 />


      <Key Name="s2"
 address="https://bi-server2.sample.com/FPBI_App_v10.x64/axis2/services/PP.SOM.Som"
 />


    </Epts>


    <Mbs>


      <Key Name="FPRepository1"
 endpoint="s0">


        <Cubes>


          <Key
 Name="k1" Keys="5" endpoint="s2" />


          <Key
 Name="k2" Keys="59,13837" endpoint="s0"
 />


        </Cubes>


        <UpdCache
 endpoint="s0" />


      </Key>


      <Key Name="FPRepository2"
 endpoint="s1">


        <Cubes>


          <Key
 Name="k1" Keys="18933,115978" endpoint="s1"
 />


        </Cubes>


        <UpdCache
 endpoint="s1" />


      </Key>


    </Mbs>


    ...


  </Key>


</...>


Описание настроек смотрите в разделе «[Настройки
 в системном реестре](BI_Server_Registry_Key.htm#service)».


## Раздел InMem


Настройки, хранящиеся в ветке реестра [InMem](BI_Server_Registry_Key.htm#inmem),
 в файле сохраняются в виде дочерних вершин для вершины <Key
 Name="InMem">. Для получения подробной информации
 обратитесь к разделу «[Кеширование
 данных по технологии In-Memory](UiNav.chm::/02_Navigator/In-Memory.htm)».


<...>


  <Key Name="InMem">


    <Key Name="CacheType"
 Value="global" />


    <Key Name="DataDir"
 Value="C:\ProgramData\Foresight\Foresight Analytics Platform\inmem_data\"
 />


    <Key Name="MemLimitMb"
 Value="6000" />


  </Key>


</...>


Описание настроек смотрите в разделе «[Настройки
 в системном реестре](BI_Server_Registry_Key.htm#inmem)».


## Раздел Dimensions


Настройки, хранящиеся в ветке реестра [Dimensions](BI_Server_Registry_Key.htm#dimensions),
 в файле сохраняются для вершины <Key
 Name="Dimensions">, которая является дочерним элементом
 элемента <Root>. Для получения
 подробной информации обратитесь к разделу «[Работа с глобальным
 кешем](UiNav.chm::/02_Navigator/Cache_In_Blob.htm)».


<...>


  <Key Name="Dimensions"
 Cache="true" />


</...>


Описание настроек смотрите в разделе «[Настройки
 в системном реестре](BI_Server_Registry_Key.htm#dimensions)».


## Раздел License


В разделе с ключом License находятся параметры подключения сервиса лицензирования.
 Раздел License является дочерним элементом элемента <Root>
 и содержит подраздел с ключом Service. Для получения подробной информации
 обратитесь к разделу «[Сервис
 лицензирования и особенности его использования](../../08_Licensing/Service/Licensing_Service.htm#connection)».


<...>


  <Key Name="License">


    <Key Name="Service"
 Active="True" Host="localhost" Port="8511"
 TlsVersion="1.2"/>


  </Key>

</...>


Примечание.
 Раздел License доступен для использования только в settings.xml.


## Раздел SysLogServer


В разделе с ключом SysLogServer находятся настройки подключения к syslog-серверу
 для пересылки сообщений о событиях аудита. Раздел SysLogServer является
 дочерним элементом элемента <Root>.
 Для получения подробной информации обратитесь к разделу «[Поддержка
 работы с системами управления событиями информационной безопасности](../../01_SysReq/SIEM.htm)».


<...>


  <Key Name="SysLogServer"
 Active="true" Host="10.9.2.13" Port="514"
 Protocol="0" />


</...>


Описание настроек смотрите в разделе «[Настройки
 в системном реестре](BI_Server_Registry_Key.htm#syslogserver)».


## Дополнительные подразделы


<...>


  <Key Name="VirtualMemoryThreshold"
 Value="55" />


</...>


Описание настроек смотрите в разделе «[Настройки
 в системном реестре](BI_Server_Registry_Key.htm#additionalsubsections)».


См. также:


[Системные
 настройки для версии «Форсайт. Аналитическая платформа»](BI_Server_Settings.htm) | [Настройки в системном реестре](BI_Server_Registry_Key.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
