# Пример импорта данных в Wazuh

Пример импорта данных в Wazuh
-


# Пример импорта данных в Wazuh


Для установки, настройки Wazuh и подключения импорта данных из файла
 через rsyslog/Logstash используйте [документацию производителя](https://documentation.wazuh.com/current/getting-started/index.html).


Для разбора события из CEF-файла необходимо создать декодер. Для каждого
 события требуется свой декодер.


Пример декодера для разбора события FSAP_EV_LOGONS_IN - вход в систему:


Wazuh


<!--


08/08/2025


Log Sample:


CEF:0|Foresight|Foresight Analytics Platform|10.9.0|FSAP_EV_LOGONS_IN|AuditLog|Unknown|act=
 cs1Label=MetabaseId cs1=WAREHOUSE rt=Aug 05 2025 12:00:10+05:00 outcome=Success
 shost=IVANOV suser=ivan.ivanov cs2Label=PlatformUser cs2=ADMIN cs3Label=IPAddresses
 cs3=10.10.10.1 msg=Версия платформы: 10.9.15.0 x64 Настольное приложение


-->


<decoder name= "fap-cef-logon">


  <prematch>CEF:0\|Foresight\|Foresight
 Analytics Platform\|\d+.\d+.\d+\|FSAP_EV_LOGONS_IN\|AuditLog\|Unknown\|</prematch>


</decoder>


<decoder name="fap-cef-logon-fields">


  <parent>fap-cef-logon</parent>


  <regex>act=(\.+) cs1Label=(\.+)
 cs1=(\.+) rt=(\.+) outcome=(\.+) shost=(\.+) suser=(\.+) cs2Label=(\.+)
 cs2=(\.+) cs3Label=(\.+) cs3=(\.+) msg=(\.*)</regex>


  <order>audit.act, audit.cs1Label,
 audit.cs1, audit.rt, audit.outcome, audit.shost, audit.suser, audit.cs2Label,
 audit.cs2, audit.cs3Label, audit.cs3, audit.msg</order>


</decoder>


Для разбора других событий, необходимо написать декодеры аналогично
 примеру.


См. также:


[Поддержка работы
 с системами управления событиями безопасности](SIEM.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
