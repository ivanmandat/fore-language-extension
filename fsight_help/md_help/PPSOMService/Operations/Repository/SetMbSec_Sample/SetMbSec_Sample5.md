# Добавление доменного пользователя: Операция SetMbSec

Добавление доменного пользователя: Операция SetMbSec
-


**


# Добавление доменного пользователя


Ниже приведён пример использования операции [SetMbSec](../SetMbSec.htm)
 для добавления доменного пользователя, подключаемого с сервера. В запросе
 передаётся наименование пользователя (пользователь должен существовать
 в домене) и необходимые параметры. В ответе приходит обновленный список
 пользователей репозитория.


	 SOAP
	  JSON C#


### SOAP-запрос:


[![](../../../minus.gif)](../../../#)<s:Envelope xmlns:s="http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../../minus.gif)](../../../#)<s:Body xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**" xmlns:xsd="**http://www.w3.org/2001/XMLSchema**">
[![](../../../minus.gif)](../../../#)<SetMbSec xmlns="**http://www.fsight.ru/PP.SOM.Som**">
[![](../../../minus.gif)](../../../#)<tMbSec xmlns="****">
  <id>S1!M</id>  </tMbSec>
[![](../../../minus.gif)](../../../#)<tArg xmlns="****">
[![](../../../minus.gif)](../../../#)<pattern>
  <users>Add</users>[![](../../../minus.gif)](../../../#)<user>
  <data>true</data>  </user>
  <credsCache>Add</credsCache>  </pattern>
[![](../../../minus.gif)](../../../#)<meta>
[![](../../../minus.gif)](../../../#)<users>
[![](../../../minus.gif)](../../../#)<its>
[![](../../../minus.gif)](../../../#)<it>
  <k>0</k>  <id>FS\ASBADMIN</id>  <type>User</type>[![](../../../minus.gif)](../../../#)<sid>
  <sid />
  </sid>
[![](../../../minus.gif)](../../../#)<data>
  <isNT>true</isNT>  </data>
  </it>
  </its>
  </users>
[![](../../../minus.gif)](../../../#)<credsCache>
[![](../../../minus.gif)](../../../#)<its>
[![](../../../minus.gif)](../../../#)<it>
  <realm>$SYSTEM</realm>  <admin>true</admin>[![](../../../minus.gif)](../../../#)<creds>
[![](../../../minus.gif)](../../../#)<user>
  <id>sa</id>  </user>
  <pass>Qwerty1</pass>  </creds>
  </it>
  </its>
  </credsCache>
[![](../../../minus.gif)](../../../#)<currentDomainSubjectAddStates>
[![](../../../minus.gif)](../../../#)<its>
[![](../../../minus.gif)](../../../#)<it>
  <subjectType>User</subjectType>  <state>98</state>  </it>
  </its>
  </currentDomainSubjectAddStates>
  </meta>
[![](../../../minus.gif)](../../../#)<metaGet>
[![](../../../minus.gif)](../../../#)<pattern>
  <users>Get</users>  </pattern>
  </metaGet>
  </tArg>
  </SetMbSec>
  </s:Body>
  </s:Envelope>


### SOAP-ответ:


[![](../../../minus.gif)](../../../#)<soapenv:Envelope xmlns:soapenv="**http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../../minus.gif)](../../../#)<soapenv:Body>
[![](../../../minus.gif)](../../../#)<SetMbSecResult xmlns="**http://www.fsight.ru/PP.SOM.Som**" xmlns:q1="**http://www.fsight.ru/PP.SOM.Som**" xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**">
[![](../../../minus.gif)](../../../#)<id xmlns="****">
  <id>S1!M</id>  </id>
[![](../../../minus.gif)](../../../#)<metaGet xmlns="****">
[![](../../../minus.gif)](../../../#)<id>
  <id>S1!M</id>  </id>
[![](../../../minus.gif)](../../../#)<meta>
[![](../../../minus.gif)](../../../#)<users>
[![](../../../minus.gif)](../../../#)<its>
[![](../../../minus.gif)](../../../#)<it>
  <k>2147483649</k>  <id>ADMIN</id>  <n>Пользователь</n>  <vis>1</vis>  <type>User</type>[![](../../../minus.gif)](../../../#)<sid>
  <sid>PS-1-1</sid>  <type>User</type>  </sid>
[![](../../../minus.gif)](../../../#)<data>
  <desc />
[![](../../../minus.gif)](../../../#)<memberOf>
[![](../../../minus.gif)](../../../#)<its>
[![](../../../minus.gif)](../../../#)<it>
  <k>2147483649</k>  <id>АДМИНИСТРАТОРЫ</id>  <n>АДМИНИСТРАТОРЫ</n>  <vis>1</vis>  <type>Group</type>[![](../../../minus.gif)](../../../#)<sid>
  <sid>PS-2-1</sid>  <type>Group</type>  </sid>
  </it>
  </its>
  </memberOf>
  <isNT>0</isNT>  <isExternal>0</isExternal>  <isBuiltin>1</isBuiltin>[![](../../../minus.gif)](../../../#)<user>
  <mustChangePasswordAtNextLogon>0</mustChangePasswordAtNextLogon>  <cannotChangePassword>0</cannotChangePassword>  <lockedState>NotLocked</lockedState>  <manageDBGrants>1</manageDBGrants>  <maxLogonSessions>0</maxLogonSessions>  <lastLoginStamp>2020-03-23T11:10:44.670</lastLoginStamp>  <hasAccessToRepository>1</hasAccessToRepository>  <isAdmin>1</isAdmin>  <isIsa>0</isIsa>  <isRoled>0</isRoled>  <changePassStamp>2020-03-23T06:10:52.000</changePassStamp>  <autoRun />
  <temporaryAge>0</temporaryAge>  <eternalPass>1</eternalPass>  <certificate />
  </user>
  </data>
  </it>
[![](../../../minus.gif)](../../../#)<it>
  <k>2147483646</k>  <id>FS\IVANOV.IVAN</id>  <n>Иванов Иван Иванович</n>  <vis>1</vis>  <type>User</type>[![](../../../minus.gif)](../../../#)<sid>
  <sid>S-1-5-21-2210245889-1953428358-4221806923-1269</sid>  <type>User</type>  </sid>
[![](../../../minus.gif)](../../../#)<data>
[![](../../../minus.gif)](../../../#)<memberOf>
[![](../../../minus.gif)](../../../#)<its>
[![](../../../minus.gif)](../../../#)<it>
  <k>2147483649</k>  <id>АДМИНИСТРАТОРЫ</id>  <n>АДМИНИСТРАТОРЫ</n>  <vis>1</vis>  <type>Group</type>[![](../../../minus.gif)](../../../#)<sid>
  <sid>PS-2-1</sid>  <type>Group</type>  </sid>
  </it>
  </its>
  </memberOf>
  <isNT>1</isNT>  <isExternal>1</isExternal>  <isBuiltin>0</isBuiltin>[![](../../../minus.gif)](../../../#)<user>
  <mustChangePasswordAtNextLogon>0</mustChangePasswordAtNextLogon>  <cannotChangePassword>0</cannotChangePassword>  <lockedState>NotLocked</lockedState>  <manageDBGrants>1</manageDBGrants>  <maxLogonSessions>0</maxLogonSessions>  <lastLoginStamp>2019-03-21T16:05:39.630</lastLoginStamp>  <hasAccessToRepository>1</hasAccessToRepository>  <isAdmin>0</isAdmin>  <isIsa>0</isIsa>  <isRoled>0</isRoled>  <changePassStamp>2018-04-04T05:24:46.000</changePassStamp>  <autoRun />
  <temporaryAge>0</temporaryAge>  <eternalPass>0</eternalPass>  <certificate />
  </user>
  </data>
  </it>
[![](../../../minus.gif)](../../../#)<it>
  <k>173284</k>  <id>INS_FORM</id>  <vis>1</vis>  <type>User</type>[![](../../../minus.gif)](../../../#)<sid>
  <sid>PS-1-173284</sid>  <type>User</type>  </sid>
[![](../../../minus.gif)](../../../#)<data>
[![](../../../minus.gif)](../../../#)<memberOf>
  <its />
  </memberOf>
  <isNT>0</isNT>  <isExternal>0</isExternal>  <isBuiltin>0</isBuiltin>[![](../../../minus.gif)](../../../#)<user>
  <mustChangePasswordAtNextLogon>1</mustChangePasswordAtNextLogon>  <cannotChangePassword>0</cannotChangePassword>  <lockedState>NotLocked</lockedState>  <manageDBGrants>1</manageDBGrants>  <maxLogonSessions>0</maxLogonSessions>  <lastLoginStamp>1899-12-30T00:00:00.000</lastLoginStamp>  <hasAccessToRepository>1</hasAccessToRepository>  <isAdmin>0</isAdmin>  <isIsa>0</isIsa>  <isRoled>0</isRoled>  <changePassStamp>2019-12-25T05:18:35.000</changePassStamp>  <autoRun />
  <temporaryAge>0</temporaryAge>  <eternalPass>0</eternalPass>  <certificate />
  </user>
  </data>
  </it>
[![](../../../minus.gif)](../../../#)<it>
  <k>29500</k>  <id>WAREHOUSE_ISA</id>  <vis>1</vis>  <type>User</type>[![](../../../minus.gif)](../../../#)<sid>
  <sid>PS-1-29500</sid>  <type>User</type>  </sid>
[![](../../../minus.gif)](../../../#)<data>
[![](../../../minus.gif)](../../../#)<memberOf>
  <its />
  </memberOf>
  <isNT>0</isNT>  <isExternal>0</isExternal>  <isBuiltin>0</isBuiltin>[![](../../../minus.gif)](../../../#)<user>
  <mustChangePasswordAtNextLogon>0</mustChangePasswordAtNextLogon>  <cannotChangePassword>0</cannotChangePassword>  <lockedState>NotLocked</lockedState>  <manageDBGrants>1</manageDBGrants>  <maxLogonSessions>0</maxLogonSessions>  <lastLoginStamp>2015-12-29T17:36:03.743</lastLoginStamp>  <hasAccessToRepository>1</hasAccessToRepository>  <isAdmin>0</isAdmin>  <isIsa>0</isIsa>  <isRoled>0</isRoled>  <changePassStamp>2015-12-28T12:48:50.000</changePassStamp>  <autoRun />
  <temporaryAge>0</temporaryAge>  <eternalPass>0</eternalPass>  <certificate />
  </user>
  </data>
  </it>
[![](../../../minus.gif)](../../../#)<it>
  <k>2147483646</k>  <id>PROGNOZ\KOROVIN</id>  <n>Korovin, Aleksandr A.</n>  <vis>1</vis>  <type>User</type>[![](../../../minus.gif)](../../../#)<sid>
  <sid>S-1-5-21-1287548229-1982989762-879972363-21822</sid>  <type>User</type>  </sid>
[![](../../../minus.gif)](../../../#)<data>
  <desc>Коровин Александр Анатольевич</desc>[![](../../../minus.gif)](../../../#)<memberOf>
[![](../../../minus.gif)](../../../#)<its>
[![](../../../minus.gif)](../../../#)<it>
  <k>2147483649</k>  <id>АДМИНИСТРАТОРЫ</id>  <n>АДМИНИСТРАТОРЫ</n>  <vis>1</vis>  <type>Group</type>[![](../../../minus.gif)](../../../#)<sid>
  <sid>PS-2-1</sid>  <type>Group</type>  </sid>
  </it>
[![](../../../minus.gif)](../../../#)<it>
  <k>2147483650</k>  <id>ПОЛЬЗОВАТЕЛИ</id>  <n>ПОЛЬЗОВАТЕЛИ</n>  <vis>1</vis>  <type>Group</type>[![](../../../minus.gif)](../../../#)<sid>
  <sid>PS-2-2</sid>  <type>Group</type>  </sid>
  </it>
  </its>
  </memberOf>
  <isNT>1</isNT>  <isExternal>1</isExternal>  <isBuiltin>0</isBuiltin>[![](../../../minus.gif)](../../../#)<user>
  <mustChangePasswordAtNextLogon>0</mustChangePasswordAtNextLogon>  <cannotChangePassword>0</cannotChangePassword>  <lockedState>NotLocked</lockedState>  <manageDBGrants>0</manageDBGrants>  <maxLogonSessions>0</maxLogonSessions>  <lastLoginStamp>2016-11-09T10:39:14.273</lastLoginStamp>  <hasAccessToRepository>1</hasAccessToRepository>  <isAdmin>0</isAdmin>  <isIsa>0</isIsa>  <isRoled>0</isRoled>  <changePassStamp>2016-08-01T12:38:02.000</changePassStamp>  <autoRun />
  <temporaryAge>0</temporaryAge>  <eternalPass>0</eternalPass>  <certificate />
  </user>
  </data>
  </it>
[![](../../../minus.gif)](../../../#)<it>
  <k>2147483646</k>  <id>COMPANY\IVANOV</id>  <n>Ivanov, Ivan I.</n>  <vis>1</vis>  <type>User</type>[![](../../../minus.gif)](../../../#)<sid>
  <sid>S-1-5-21-1287548229-1982989762-879972363-4170</sid>  <type>User</type>  </sid>
[![](../../../minus.gif)](../../../#)<data>
  <desc>Иванов Иван Иванович</desc>[![](../../../minus.gif)](../../../#)<memberOf>
[![](../../../minus.gif)](../../../#)<its>
[![](../../../minus.gif)](../../../#)<it>
  <k>2147483650</k>  <id>ПОЛЬЗОВАТЕЛИ</id>  <n>ПОЛЬЗОВАТЕЛИ</n>  <vis>1</vis>  <type>Group</type>[![](../../../minus.gif)](../../../#)<sid>
  <sid>PS-2-2</sid>  <type>Group</type>  </sid>
  </it>
[![](../../../minus.gif)](../../../#)<it>
  <k>2147483637</k>  <id>PROGNOZ\GNRSPO</id>  <n>PROGNOZ\GNRSPO</n>  <vis>1</vis>  <type>Group</type>[![](../../../minus.gif)](../../../#)<sid>
  <sid>S-1-5-21-1287548229-1982989762-879972363-11463</sid>  <type>Group</type>  </sid>
  </it>
  </its>
  </memberOf>
  <isNT>1</isNT>  <isExternal>1</isExternal>  <isBuiltin>0</isBuiltin>[![](../../../minus.gif)](../../../#)<user>
  <mustChangePasswordAtNextLogon>0</mustChangePasswordAtNextLogon>  <cannotChangePassword>0</cannotChangePassword>  <lockedState>NotLocked</lockedState>  <manageDBGrants>1</manageDBGrants>  <maxLogonSessions>0</maxLogonSessions>  <lastLoginStamp>2015-10-30T17:03:41.350</lastLoginStamp>  <hasAccessToRepository>1</hasAccessToRepository>  <isAdmin>0</isAdmin>  <isIsa>0</isIsa>  <isRoled>0</isRoled>  <changePassStamp>2015-10-30T06:34:09.000</changePassStamp>  <autoRun />
  <temporaryAge>0</temporaryAge>  <eternalPass>0</eternalPass>  <certificate />
  </user>
  </data>
  </it>
[![](../../../minus.gif)](../../../#)<it>
  <k>20798</k>  <id>SIDOROV_IV</id>  <vis>1</vis>  <type>User</type>[![](../../../minus.gif)](../../../#)<sid>
  <sid>PS-1-20798</sid>  <type>User</type>  </sid>
[![](../../../minus.gif)](../../../#)<data>
[![](../../../minus.gif)](../../../#)<memberOf>
[![](../../../minus.gif)](../../../#)<its>
[![](../../../minus.gif)](../../../#)<it>
  <k>2147483650</k>  <id>ПОЛЬЗОВАТЕЛИ</id>  <n>ПОЛЬЗОВАТЕЛИ</n>  <vis>1</vis>  <type>Group</type>[![](../../../minus.gif)](../../../#)<sid>
  <sid>PS-2-2</sid>  <type>Group</type>  </sid>
  </it>
  </its>
  </memberOf>
  <isNT>0</isNT>  <isExternal>1</isExternal>  <isBuiltin>0</isBuiltin>[![](../../../minus.gif)](../../../#)<user>
  <mustChangePasswordAtNextLogon>0</mustChangePasswordAtNextLogon>  <cannotChangePassword>0</cannotChangePassword>  <lockedState>NotLocked</lockedState>  <manageDBGrants>1</manageDBGrants>  <maxLogonSessions>0</maxLogonSessions>  <lastLoginStamp>2018-05-04T16:56:01.790</lastLoginStamp>  <hasAccessToRepository>1</hasAccessToRepository>  <isAdmin>0</isAdmin>  <isIsa>0</isIsa>  <isRoled>0</isRoled>  <changePassStamp>2016-11-07T09:55:24.000</changePassStamp>  <autoRun />
  <temporaryAge>0</temporaryAge>  <eternalPass>0</eternalPass>  <certificate />
  </user>
  </data>
  </it>
[![](../../../minus.gif)](../../../#)<it>
  <k>158195</k>  <id>TESTUSER</id>  <n>TESTUSER</n>  <vis>1</vis>  <type>User</type>[![](../../../minus.gif)](../../../#)<sid>
  <sid>PS-1-158195</sid>  <type>User</type>  </sid>
[![](../../../minus.gif)](../../../#)<data>
  <desc>TESTUSER</desc>[![](../../../minus.gif)](../../../#)<memberOf>
  <its />
  </memberOf>
  <isNT>0</isNT>  <isExternal>0</isExternal>  <isBuiltin>0</isBuiltin>[![](../../../minus.gif)](../../../#)<user>
  <mustChangePasswordAtNextLogon>0</mustChangePasswordAtNextLogon>  <cannotChangePassword>1</cannotChangePassword>  <lockedState>NotLocked</lockedState>  <manageDBGrants>1</manageDBGrants>  <maxLogonSessions>0</maxLogonSessions>  <lastLoginStamp>1899-12-30T00:00:00.000</lastLoginStamp>  <hasAccessToRepository>1</hasAccessToRepository>  <isAdmin>0</isAdmin>  <isIsa>0</isIsa>  <isRoled>0</isRoled>  <changePassStamp>2019-07-19T05:57:50.000</changePassStamp>  <autoRun />
  <temporaryAge>0</temporaryAge>  <eternalPass>1</eternalPass>  <certificate />
  </user>
  </data>
  </it>
[![](../../../minus.gif)](../../../#)<it>
  <k>105159</k>  <id>USER1234</id>  <vis>1</vis>  <type>User</type>[![](../../../minus.gif)](../../../#)<sid>
  <sid>PS-1-105159</sid>  <type>User</type>  </sid>
[![](../../../minus.gif)](../../../#)<data>
[![](../../../minus.gif)](../../../#)<memberOf>
  <its />
  </memberOf>
  <isNT>0</isNT>  <isExternal>0</isExternal>  <isBuiltin>0</isBuiltin>[![](../../../minus.gif)](../../../#)<user>
  <mustChangePasswordAtNextLogon>0</mustChangePasswordAtNextLogon>  <cannotChangePassword>0</cannotChangePassword>  <lockedState>NotLocked</lockedState>  <manageDBGrants>1</manageDBGrants>  <maxLogonSessions>0</maxLogonSessions>  <lastLoginStamp>1899-12-30T00:00:00.000</lastLoginStamp>  <hasAccessToRepository>1</hasAccessToRepository>  <isAdmin>0</isAdmin>  <isIsa>0</isIsa>  <isRoled>0</isRoled>  <changePassStamp>2018-08-31T09:49:02.000</changePassStamp>  <autoRun />
  <temporaryAge>0</temporaryAge>  <eternalPass>0</eternalPass>  <certificate />
  </user>
  </data>
  </it>
[![](../../../minus.gif)](../../../#)<it>
  <k>35005</k>  <id>USER123456789</id>  <vis>1</vis>  <type>User</type>[![](../../../minus.gif)](../../../#)<sid>
  <sid>PS-1-35005</sid>  <type>User</type>  </sid>
[![](../../../minus.gif)](../../../#)<data>
  <desc>USER123456789 / USER123456789</desc>[![](../../../minus.gif)](../../../#)<memberOf>
[![](../../../minus.gif)](../../../#)<its>
[![](../../../minus.gif)](../../../#)<it>
  <k>2147483649</k>  <id>АДМИНИСТРАТОРЫ</id>  <n>АДМИНИСТРАТОРЫ</n>  <vis>1</vis>  <type>Group</type>[![](../../../minus.gif)](../../../#)<sid>
  <sid>PS-2-1</sid>  <type>Group</type>  </sid>
  </it>
  </its>
  </memberOf>
  <isNT>0</isNT>  <isExternal>0</isExternal>  <isBuiltin>0</isBuiltin>[![](../../../minus.gif)](../../../#)<user>
  <mustChangePasswordAtNextLogon>0</mustChangePasswordAtNextLogon>  <cannotChangePassword>0</cannotChangePassword>  <lockedState>NotLocked</lockedState>  <manageDBGrants>1</manageDBGrants>  <maxLogonSessions>0</maxLogonSessions>  <lastLoginStamp>2017-09-13T12:42:15.000</lastLoginStamp>  <hasAccessToRepository>1</hasAccessToRepository>  <isAdmin>0</isAdmin>  <isIsa>0</isIsa>  <isRoled>0</isRoled>  <changePassStamp>2016-06-23T06:49:07.000</changePassStamp>  <autoRun />
  <temporaryAge>0</temporaryAge>  <eternalPass>0</eternalPass>  <certificate />
  </user>
  </data>
  </it>
[![](../../../minus.gif)](../../../#)<it>
  <k>105163</k>  <id>USER_1234</id>  <vis>1</vis>  <type>User</type>[![](../../../minus.gif)](../../../#)<sid>
  <sid>PS-1-105163</sid>  <type>User</type>  </sid>
[![](../../../minus.gif)](../../../#)<data>
[![](../../../minus.gif)](../../../#)<memberOf>
[![](../../../minus.gif)](../../../#)<its>
[![](../../../minus.gif)](../../../#)<it>
  <k>2147483649</k>  <id>АДМИНИСТРАТОРЫ</id>  <n>АДМИНИСТРАТОРЫ</n>  <vis>1</vis>  <type>Group</type>[![](../../../minus.gif)](../../../#)<sid>
  <sid>PS-2-1</sid>  <type>Group</type>  </sid>
  </it>
[![](../../../minus.gif)](../../../#)<it>
  <k>144122</k>  <id>BPM_ALL_USERS</id>  <n>BPM_ALL_USERS</n>  <vis>1</vis>  <type>Group</type>[![](../../../minus.gif)](../../../#)<sid>
  <sid>PS-1-144122</sid>  <type>Group</type>  </sid>
  </it>
  </its>
  </memberOf>
  <isNT>0</isNT>  <isExternal>0</isExternal>  <isBuiltin>0</isBuiltin>[![](../../../minus.gif)](../../../#)<user>
  <mustChangePasswordAtNextLogon>0</mustChangePasswordAtNextLogon>  <cannotChangePassword>0</cannotChangePassword>  <lockedState>NotLocked</lockedState>  <manageDBGrants>1</manageDBGrants>  <maxLogonSessions>0</maxLogonSessions>  <lastLoginStamp>2020-03-06T10:24:31.680</lastLoginStamp>  <hasAccessToRepository>1</hasAccessToRepository>  <isAdmin>0</isAdmin>  <isIsa>0</isIsa>  <isRoled>0</isRoled>  <changePassStamp>2020-03-05T08:16:42.000</changePassStamp>  <autoRun />
  <temporaryAge>0</temporaryAge>  <eternalPass>0</eternalPass>  <certificate />
  </user>
  </data>
  </it>
[![](../../../minus.gif)](../../../#)<it>
  <k>67467</k>  <id>USER_ANN</id>  <vis>1</vis>  <type>User</type>[![](../../../minus.gif)](../../../#)<sid>
  <sid>PS-1-67467</sid>  <type>User</type>  </sid>
[![](../../../minus.gif)](../../../#)<data>
[![](../../../minus.gif)](../../../#)<memberOf>
[![](../../../minus.gif)](../../../#)<its>
[![](../../../minus.gif)](../../../#)<it>
  <k>2147483649</k>  <id>АДМИНИСТРАТОРЫ</id>  <n>АДМИНИСТРАТОРЫ</n>  <vis>1</vis>  <type>Group</type>[![](../../../minus.gif)](../../../#)<sid>
  <sid>PS-2-1</sid>  <type>Group</type>  </sid>
  </it>
  </its>
  </memberOf>
  <isNT>0</isNT>  <isExternal>0</isExternal>  <isBuiltin>0</isBuiltin>[![](../../../minus.gif)](../../../#)<user>
  <mustChangePasswordAtNextLogon>0</mustChangePasswordAtNextLogon>  <cannotChangePassword>0</cannotChangePassword>  <lockedState>NotLocked</lockedState>  <manageDBGrants>1</manageDBGrants>  <maxLogonSessions>0</maxLogonSessions>  <lastLoginStamp>2019-04-09T11:53:11.770</lastLoginStamp>  <hasAccessToRepository>1</hasAccessToRepository>  <isAdmin>0</isAdmin>  <isIsa>0</isIsa>  <isRoled>0</isRoled>  <changePassStamp>2019-04-09T06:53:02.000</changePassStamp>  <autoRun />
  <temporaryAge>0</temporaryAge>  <eternalPass>0</eternalPass>  <certificate />
  </user>
  </data>
  </it>
[![](../../../minus.gif)](../../../#)<it>
  <k>197697</k>  <id>NEWREPOADMIN</id>  <n>NewRepoAdmin</n>  <vis>1</vis>  <type>User</type>[![](../../../minus.gif)](../../../#)<sid>
  <sid>PS-1-197697</sid>  <type>User</type>  </sid>
[![](../../../minus.gif)](../../../#)<data>
[![](../../../minus.gif)](../../../#)<memberOf>
[![](../../../minus.gif)](../../../#)<its>
[![](../../../minus.gif)](../../../#)<it>
  <k>2147483649</k>  <id>АДМИНИСТРАТОРЫ</id>  <n>АДМИНИСТРАТОРЫ</n>  <vis>1</vis>  <type>Group</type>[![](../../../minus.gif)](../../../#)<sid>
  <sid>PS-2-1</sid>  <type>Group</type>  </sid>
  </it>
  </its>
  </memberOf>
  <isNT>0</isNT>  <isExternal>0</isExternal>  <isBuiltin>0</isBuiltin>[![](../../../minus.gif)](../../../#)<user>
  <mustChangePasswordAtNextLogon>0</mustChangePasswordAtNextLogon>  <cannotChangePassword>0</cannotChangePassword>  <lockedState>NotLocked</lockedState>  <manageDBGrants>1</manageDBGrants>  <maxLogonSessions>3</maxLogonSessions>  <lastLoginStamp>1899-12-30T00:00:00.000</lastLoginStamp>  <hasAccessToRepository>1</hasAccessToRepository>  <isAdmin>0</isAdmin>  <isIsa>0</isIsa>  <isRoled>0</isRoled>  <changePassStamp>2020-03-23T06:10:52.000</changePassStamp>  <autoRun />
  <temporaryAge>0</temporaryAge>  <eternalPass>0</eternalPass>  <certificate />
  </user>
  </data>
  </it>
  </its>
  </users>
  <bisearchEnable>Full</bisearchEnable>[![](../../../minus.gif)](../../../#)<apply>
[![](../../../minus.gif)](../../../#)<onCredentialsRequired>
[![](../../../minus.gif)](../../../#)<logonParams>
  <descr>Введите имя и пароль пользователя, обладающего правами создания таблиц в базе данных 'База данных'</descr>  <realm>OBJ21909</realm>  <toAdmin>1</toAdmin>[![](../../../minus.gif)](../../../#)<logonData>
  <driver>MSSQL2012</driver>  <server>test-server</server>  <database>Warehouse</database>  </logonData>
  </logonParams>
  </onCredentialsRequired>
  </apply>
  </meta>
  </metaGet>
  </SetMbSecResult>
  </soapenv:Body>
  </soapenv:Envelope>


### JSON-запрос:


{
 "SetMbSec" :
  {
   "tMbSec" :
    {
     "id" : "S1!M"
    },
   "tArg" :
    {
     "pattern" :
      {
       "users" : "Add",
       "user" :
        {
         "data" : "true"
        },
       "credsCache" : "Add"
      },
     "meta" :
      {
       "users" :
        {
         "its" :
          {
           "it" :
            [
              {
               "k" : "0",
               "id" : "FS\ASBADMIN",
               "type" : "User",
               "sid" :
                {
                 "sid" : ""
                },
               "data" :
                {
                 "isNT" : "true"
                }
              }
            ]
          }
        },
       "credsCache" :
        {
         "its" :
          {
           "it" :
            [
              {
               "realm" : "$SYSTEM",
               "admin" : "true",
               "creds" :
                {
                 "user" :
                  {
                   "id" : "sa"
                  },
                 "pass" : "Qwerty1"
                }
              }
            ]
          }
        },
       "currentDomainSubjectAddStates" :
        {
         "its" :
          {
           "it" :
            [
              {
               "subjectType" : "User",
               "state" : "98"
              }
            ]
          }
        }
      },
     "metaGet" :
      {
       "pattern" :
        {
         "users" : "Get"
        }
      }
    }
  }
}

### JSON-ответ:


{
 "SetMbSecResult" :
  {
   "id" :
    {
     "id" : "S1!M"
    },
   "metaGet" :
    {
     "id" :
      {
       "id" : "S1!M"
      },
     "meta" :
      {
       "users" :
        {
         "its" :
          {
           "it" :
            [
              {
               "k" : "2147483649",
               "id" : "ADMIN",
               "n" : "Пользователь",
               "vis" : "1",
               "type" : "User",
               "sid" :
                {
                 "sid" : "PS-1-1",
                 "type" : "User"
                },
               "data" :
                {
                 "desc" : "  ",
                 "memberOf" :
                  {
                   "its" :
                    {
                     "it" :
                      [
                        {
                         "k" : "2147483649",
                         "id" : "АДМИНИСТРАТОРЫ",
                         "n" : "АДМИНИСТРАТОРЫ",
                         "vis" : "1",
                         "type" : "Group",
                         "sid" :
                          {
                           "sid" : "PS-2-1",
                           "type" : "Group"
                          }
                        }
                      ]
                    }
                  },
                 "isNT" : "0",
                 "isExternal" : "0",
                 "isBuiltin" : "1",
                 "user" :
                  {
                   "mustChangePasswordAtNextLogon" : "0",
                   "cannotChangePassword" : "0",
                   "lockedState" : "NotLocked",
                   "manageDBGrants" : "1",
                   "maxLogonSessions" : "0",
                   "lastLoginStamp" : "2020-03-23T11:10:44.670",
                   "hasAccessToRepository" : "1",
                   "isAdmin" : "1",
                   "isIsa" : "0",
                   "isRoled" : "0",
                   "changePassStamp" : "2020-03-23T06:10:52.000",
                   "autoRun" : "",
                   "temporaryAge" : "0",
                   "eternalPass" : "1",
                   "certificate" : ""
                  }
                }
              },
              {
               "k" : "2147483646",
               "id" : "FS\IVANOV.IVAN",
               "n" : "Иванов Иван Иванович",
               "vis" : "1",
               "type" : "User",
               "sid" :
                {
                 "sid" : "S-1-5-21-2210245889-1953428358-4221806923-1269",
                 "type" : "User"
                },
               "data" :
                {
                 "memberOf" :
                  {
                   "its" :
                    {
                     "it" :
                      [
                        {
                         "k" : "2147483649",
                         "id" : "АДМИНИСТРАТОРЫ",
                         "n" : "АДМИНИСТРАТОРЫ",
                         "vis" : "1",
                         "type" : "Group",
                         "sid" :
                          {
                           "sid" : "PS-2-1",
                           "type" : "Group"
                          }
                        }
                      ]
                    }
                  },
                 "isNT" : "1",
                 "isExternal" : "1",
                 "isBuiltin" : "0",
                 "user" :
                  {
                   "mustChangePasswordAtNextLogon" : "0",
                   "cannotChangePassword" : "0",
                   "lockedState" : "NotLocked",
                   "manageDBGrants" : "1",
                   "maxLogonSessions" : "0",
                   "lastLoginStamp" : "2019-03-21T16:05:39.630",
                   "hasAccessToRepository" : "1",
                   "isAdmin" : "0",
                   "isIsa" : "0",
                   "isRoled" : "0",
                   "changePassStamp" : "2018-04-04T05:24:46.000",
                   "autoRun" : "",
                   "temporaryAge" : "0",
                   "eternalPass" : "0",
                   "certificate" : ""
                  }
                }
              },
              {
               "k" : "173284",
               "id" : "INS_FORM",
               "vis" : "1",
               "type" : "User",
               "sid" :
                {
                 "sid" : "PS-1-173284",
                 "type" : "User"
                },
               "data" :
                {
                 "memberOf" :
                  {
                   "its" : ""
                  },
                 "isNT" : "0",
                 "isExternal" : "0",
                 "isBuiltin" : "0",
                 "user" :
                  {
                   "mustChangePasswordAtNextLogon" : "1",
                   "cannotChangePassword" : "0",
                   "lockedState" : "NotLocked",
                   "manageDBGrants" : "1",
                   "maxLogonSessions" : "0",
                   "lastLoginStamp" : "1899-12-30T00:00:00.000",
                   "hasAccessToRepository" : "1",
                   "isAdmin" : "0",
                   "isIsa" : "0",
                   "isRoled" : "0",
                   "changePassStamp" : "2019-12-25T05:18:35.000",
                   "autoRun" : "",
                   "temporaryAge" : "0",
                   "eternalPass" : "0",
                   "certificate" : ""
                  }
                }
              },
              {
               "k" : "29500",
               "id" : "WAREHOUSE_ISA",
               "vis" : "1",
               "type" : "User",
               "sid" :
                {
                 "sid" : "PS-1-29500",
                 "type" : "User"
                },
               "data" :
                {
                 "memberOf" :
                  {
                   "its" : ""
                  },
                 "isNT" : "0",
                 "isExternal" : "0",
                 "isBuiltin" : "0",
                 "user" :
                  {
                   "mustChangePasswordAtNextLogon" : "0",
                   "cannotChangePassword" : "0",
                   "lockedState" : "NotLocked",
                   "manageDBGrants" : "1",
                   "maxLogonSessions" : "0",
                   "lastLoginStamp" : "2015-12-29T17:36:03.743",
                   "hasAccessToRepository" : "1",
                   "isAdmin" : "0",
                   "isIsa" : "0",
                   "isRoled" : "0",
                   "changePassStamp" : "2015-12-28T12:48:50.000",
                   "autoRun" : "",
                   "temporaryAge" : "0",
                   "eternalPass" : "0",
                   "certificate" : ""
                  }
                }
              },
              {
               "k" : "2147483646",
               "id" : "PROGNOZ\KOROVIN",
               "n" : "Korovin, Aleksandr A.",
               "vis" : "1",
               "type" : "User",
               "sid" :
                {
                 "sid" : "S-1-5-21-1287548229-1982989762-879972363-21822",
                 "type" : "User"
                },
               "data" :
                {
                 "desc" : "Коровин Александр Анатольевич",
                 "memberOf" :
                  {
                   "its" :
                    {
                     "it" :
                      [
                        {
                         "k" : "2147483649",
                         "id" : "АДМИНИСТРАТОРЫ",
                         "n" : "АДМИНИСТРАТОРЫ",
                         "vis" : "1",
                         "type" : "Group",
                         "sid" :
                          {
                           "sid" : "PS-2-1",
                           "type" : "Group"
                          }
                        },
                        {
                         "k" : "2147483650",
                         "id" : "ПОЛЬЗОВАТЕЛИ",
                         "n" : "ПОЛЬЗОВАТЕЛИ",
                         "vis" : "1",
                         "type" : "Group",
                         "sid" :
                          {
                           "sid" : "PS-2-2",
                           "type" : "Group"
                          }
                        }
                      ]
                    }
                  },
                 "isNT" : "1",
                 "isExternal" : "1",
                 "isBuiltin" : "0",
                 "user" :
                  {
                   "mustChangePasswordAtNextLogon" : "0",
                   "cannotChangePassword" : "0",
                   "lockedState" : "NotLocked",
                   "manageDBGrants" : "0",
                   "maxLogonSessions" : "0",
                   "lastLoginStamp" : "2016-11-09T10:39:14.273",
                   "hasAccessToRepository" : "1",
                   "isAdmin" : "0",
                   "isIsa" : "0",
                   "isRoled" : "0",
                   "changePassStamp" : "2016-08-01T12:38:02.000",
                   "autoRun" : "",
                   "temporaryAge" : "0",
                   "eternalPass" : "0",
                   "certificate" : ""
                  }
                }
              },
              {
               "k" : "2147483646",
               "id" : "COMPANY\IVANOV",
               "n" : "Ivanov, Ivan I.",
               "vis" : "1",
               "type" : "User",
               "sid" :
                {
                 "sid" : "S-1-5-21-1287548229-1982989762-879972363-4170",
                 "type" : "User"
                },
               "data" :
                {
                 "desc" : "Иванов Иван Иванович",
                 "memberOf" :
                  {
                   "its" :
                    {
                     "it" :
                      [
                        {
                         "k" : "2147483650",
                         "id" : "ПОЛЬЗОВАТЕЛИ",
                         "n" : "ПОЛЬЗОВАТЕЛИ",
                         "vis" : "1",
                         "type" : "Group",
                         "sid" :
                          {
                           "sid" : "PS-2-2",
                           "type" : "Group"
                          }
                        },
                        {
                         "k" : "2147483637",
                         "id" : "PROGNOZ\GNRSPO",
                         "n" : "PROGNOZ\GNRSPO",
                         "vis" : "1",
                         "type" : "Group",
                         "sid" :
                          {
                           "sid" : "S-1-5-21-1287548229-1982989762-879972363-11463",
                           "type" : "Group"
                          }
                        }
                      ]
                    }
                  },
                 "isNT" : "1",
                 "isExternal" : "1",
                 "isBuiltin" : "0",
                 "user" :
                  {
                   "mustChangePasswordAtNextLogon" : "0",
                   "cannotChangePassword" : "0",
                   "lockedState" : "NotLocked",
                   "manageDBGrants" : "1",
                   "maxLogonSessions" : "0",
                   "lastLoginStamp" : "2015-10-30T17:03:41.350",
                   "hasAccessToRepository" : "1",
                   "isAdmin" : "0",
                   "isIsa" : "0",
                   "isRoled" : "0",
                   "changePassStamp" : "2015-10-30T06:34:09.000",
                   "autoRun" : "",
                   "temporaryAge" : "0",
                   "eternalPass" : "0",
                   "certificate" : ""
                  }
                }
              },
              {
               "k" : "20798",
               "id" : "SIDOROV_IV",
               "vis" : "1",
               "type" : "User",
               "sid" :
                {
                 "sid" : "PS-1-20798",
                 "type" : "User"
                },
               "data" :
                {
                 "memberOf" :
                  {
                   "its" :
                    {
                     "it" :
                      [
                        {
                         "k" : "2147483650",
                         "id" : "ПОЛЬЗОВАТЕЛИ",
                         "n" : "ПОЛЬЗОВАТЕЛИ",
                         "vis" : "1",
                         "type" : "Group",
                         "sid" :
                          {
                           "sid" : "PS-2-2",
                           "type" : "Group"
                          }
                        }
                      ]
                    }
                  },
                 "isNT" : "0",
                 "isExternal" : "1",
                 "isBuiltin" : "0",
                 "user" :
                  {
                   "mustChangePasswordAtNextLogon" : "0",
                   "cannotChangePassword" : "0",
                   "lockedState" : "NotLocked",
                   "manageDBGrants" : "1",
                   "maxLogonSessions" : "0",
                   "lastLoginStamp" : "2018-05-04T16:56:01.790",
                   "hasAccessToRepository" : "1",
                   "isAdmin" : "0",
                   "isIsa" : "0",
                   "isRoled" : "0",
                   "changePassStamp" : "2016-11-07T09:55:24.000",
                   "autoRun" : "",
                   "temporaryAge" : "0",
                   "eternalPass" : "0",
                   "certificate" : ""
                  }
                }
              },
              {
               "k" : "158195",
               "id" : "TESTUSER",
               "n" : "TESTUSER",
               "vis" : "1",
               "type" : "User",
               "sid" :
                {
                 "sid" : "PS-1-158195",
                 "type" : "User"
                },
               "data" :
                {
                 "desc" : "TESTUSER",
                 "memberOf" :
                  {
                   "its" : ""
                  },
                 "isNT" : "0",
                 "isExternal" : "0",
                 "isBuiltin" : "0",
                 "user" :
                  {
                   "mustChangePasswordAtNextLogon" : "0",
                   "cannotChangePassword" : "1",
                   "lockedState" : "NotLocked",
                   "manageDBGrants" : "1",
                   "maxLogonSessions" : "0",
                   "lastLoginStamp" : "1899-12-30T00:00:00.000",
                   "hasAccessToRepository" : "1",
                   "isAdmin" : "0",
                   "isIsa" : "0",
                   "isRoled" : "0",
                   "changePassStamp" : "2019-07-19T05:57:50.000",
                   "autoRun" : "",
                   "temporaryAge" : "0",
                   "eternalPass" : "1",
                   "certificate" : ""
                  }
                }
              },
              {
               "k" : "105159",
               "id" : "USER1234",
               "vis" : "1",
               "type" : "User",
               "sid" :
                {
                 "sid" : "PS-1-105159",
                 "type" : "User"
                },
               "data" :
                {
                 "memberOf" :
                  {
                   "its" : ""
                  },
                 "isNT" : "0",
                 "isExternal" : "0",
                 "isBuiltin" : "0",
                 "user" :
                  {
                   "mustChangePasswordAtNextLogon" : "0",
                   "cannotChangePassword" : "0",
                   "lockedState" : "NotLocked",
                   "manageDBGrants" : "1",
                   "maxLogonSessions" : "0",
                   "lastLoginStamp" : "1899-12-30T00:00:00.000",
                   "hasAccessToRepository" : "1",
                   "isAdmin" : "0",
                   "isIsa" : "0",
                   "isRoled" : "0",
                   "changePassStamp" : "2018-08-31T09:49:02.000",
                   "autoRun" : "",
                   "temporaryAge" : "0",
                   "eternalPass" : "0",
                   "certificate" : ""
                  }
                }
              },
              {
               "k" : "35005",
               "id" : "USER123456789",
               "vis" : "1",
               "type" : "User",
               "sid" :
                {
                 "sid" : "PS-1-35005",
                 "type" : "User"
                },
               "data" :
                {
                 "desc" : "USER123456789 \/ USER123456789",
                 "memberOf" :
                  {
                   "its" :
                    {
                     "it" :
                      [
                        {
                         "k" : "2147483649",
                         "id" : "АДМИНИСТРАТОРЫ",
                         "n" : "АДМИНИСТРАТОРЫ",
                         "vis" : "1",
                         "type" : "Group",
                         "sid" :
                          {
                           "sid" : "PS-2-1",
                           "type" : "Group"
                          }
                        }
                      ]
                    }
                  },
                 "isNT" : "0",
                 "isExternal" : "0",
                 "isBuiltin" : "0",
                 "user" :
                  {
                   "mustChangePasswordAtNextLogon" : "0",
                   "cannotChangePassword" : "0",
                   "lockedState" : "NotLocked",
                   "manageDBGrants" : "1",
                   "maxLogonSessions" : "0",
                   "lastLoginStamp" : "2017-09-13T12:42:15.000",
                   "hasAccessToRepository" : "1",
                   "isAdmin" : "0",
                   "isIsa" : "0",
                   "isRoled" : "0",
                   "changePassStamp" : "2016-06-23T06:49:07.000",
                   "autoRun" : "",
                   "temporaryAge" : "0",
                   "eternalPass" : "0",
                   "certificate" : ""
                  }
                }
              },
              {
               "k" : "105163",
               "id" : "USER_1234",
               "vis" : "1",
               "type" : "User",
               "sid" :
                {
                 "sid" : "PS-1-105163",
                 "type" : "User"
                },
               "data" :
                {
                 "memberOf" :
                  {
                   "its" :
                    {
                     "it" :
                      [
                        {
                         "k" : "2147483649",
                         "id" : "АДМИНИСТРАТОРЫ",
                         "n" : "АДМИНИСТРАТОРЫ",
                         "vis" : "1",
                         "type" : "Group",
                         "sid" :
                          {
                           "sid" : "PS-2-1",
                           "type" : "Group"
                          }
                        },
                        {
                         "k" : "144122",
                         "id" : "BPM_ALL_USERS",
                         "n" : "BPM_ALL_USERS",
                         "vis" : "1",
                         "type" : "Group",
                         "sid" :
                          {
                           "sid" : "PS-1-144122",
                           "type" : "Group"
                          }
                        }
                      ]
                    }
                  },
                 "isNT" : "0",
                 "isExternal" : "0",
                 "isBuiltin" : "0",
                 "user" :
                  {
                   "mustChangePasswordAtNextLogon" : "0",
                   "cannotChangePassword" : "0",
                   "lockedState" : "NotLocked",
                   "manageDBGrants" : "1",
                   "maxLogonSessions" : "0",
                   "lastLoginStamp" : "2020-03-06T10:24:31.680",
                   "hasAccessToRepository" : "1",
                   "isAdmin" : "0",
                   "isIsa" : "0",
                   "isRoled" : "0",
                   "changePassStamp" : "2020-03-05T08:16:42.000",
                   "autoRun" : "",
                   "temporaryAge" : "0",
                   "eternalPass" : "0",
                   "certificate" : ""
                  }
                }
              },
              {
               "k" : "67467",
               "id" : "USER_ANN",
               "vis" : "1",
               "type" : "User",
               "sid" :
                {
                 "sid" : "PS-1-67467",
                 "type" : "User"
                },
               "data" :
                {
                 "memberOf" :
                  {
                   "its" :
                    {
                     "it" :
                      [
                        {
                         "k" : "2147483649",
                         "id" : "АДМИНИСТРАТОРЫ",
                         "n" : "АДМИНИСТРАТОРЫ",
                         "vis" : "1",
                         "type" : "Group",
                         "sid" :
                          {
                           "sid" : "PS-2-1",
                           "type" : "Group"
                          }
                        }
                      ]
                    }
                  },
                 "isNT" : "0",
                 "isExternal" : "0",
                 "isBuiltin" : "0",
                 "user" :
                  {
                   "mustChangePasswordAtNextLogon" : "0",
                   "cannotChangePassword" : "0",
                   "lockedState" : "NotLocked",
                   "manageDBGrants" : "1",
                   "maxLogonSessions" : "0",
                   "lastLoginStamp" : "2019-04-09T11:53:11.770",
                   "hasAccessToRepository" : "1",
                   "isAdmin" : "0",
                   "isIsa" : "0",
                   "isRoled" : "0",
                   "changePassStamp" : "2019-04-09T06:53:02.000",
                   "autoRun" : "",
                   "temporaryAge" : "0",
                   "eternalPass" : "0",
                   "certificate" : ""
                  }
                }
              },
              {
               "k" : "197697",
               "id" : "NEWREPOADMIN",
               "n" : "NewRepoAdmin",
               "vis" : "1",
               "type" : "User",
               "sid" :
                {
                 "sid" : "PS-1-197697",
                 "type" : "User"
                },
               "data" :
                {
                 "memberOf" :
                  {
                   "its" :
                    {
                     "it" :
                      [
                        {
                         "k" : "2147483649",
                         "id" : "АДМИНИСТРАТОРЫ",
                         "n" : "АДМИНИСТРАТОРЫ",
                         "vis" : "1",
                         "type" : "Group",
                         "sid" :
                          {
                           "sid" : "PS-2-1",
                           "type" : "Group"
                          }
                        }
                      ]
                    }
                  },
                 "isNT" : "0",
                 "isExternal" : "0",
                 "isBuiltin" : "0",
                 "user" :
                  {
                   "mustChangePasswordAtNextLogon" : "0",
                   "cannotChangePassword" : "0",
                   "lockedState" : "NotLocked",
                   "manageDBGrants" : "1",
                   "maxLogonSessions" : "3",
                   "lastLoginStamp" : "1899-12-30T00:00:00.000",
                   "hasAccessToRepository" : "1",
                   "isAdmin" : "0",
                   "isIsa" : "0",
                   "isRoled" : "0",
                   "changePassStamp" : "2020-03-23T06:10:52.000",
                   "autoRun" : "",
                   "temporaryAge" : "0",
                   "eternalPass" : "0",
                   "certificate" : ""
                  }
                }
              }
            ]
          }
        },
       "bisearchEnable" : "Full",
       "apply" :
        {
         "onCredentialsRequired" :
          {
           "logonParams" :
            {
             "descr" : "Введите имя и пароль пользователя, обладающего правами создания таблиц в базе данных 'База данных'",
             "realm" : "OBJ21909",
             "toAdmin" : "1",
             "logonData" :
              {
               "driver" : "MSSQL2012",
               "server" : "test-server",
               "database" : "Warehouse"
              }
            }
          }
        }
      }
    }
  }
}


public static SetMbSecResult CreateDomainUser(string mb, string userName)
{
    var somClient = new SomPortTypeClient(); //Прокси-объект для выполнения операций
    //Параметры выполнения операции
    var setMbSec = new SetMbSec()
    {
        tArg = new SetMbSecArg()
        {
            //Шаблон выполнения операции
            pattern = new MbSecMdPattern()
            {
                users = ListOperation.Add,
                credsCache = ListOperation.Add,
                user = new MbSubjectPattern()
                {
                    data = true
                }
            },
            meta = new MbSecMd()
            {
                //Учётные данные, под которыми будет осуществляться подключение к серверу БД
                //Указанный пользователь должен обладать правами на создание пользователей на уровне СУБД
                credsCache = new UserCredsCache
                {
                    its = new RealmUserCreds[]
                    {
                        new RealmUserCreds
                        {
                            realm = "$SYSTEM",
                            admin = true,
                            creds = new UserCreds
                            {
                                user = new UserId { id = "sa" },
                                pass = "Qwerty1"
                            }
                        }
                    }
                },
                users = new MbSubjects()
                {
                    its = new MbSubject[1]
                    {
                        new MbSubject()
                        {
                            k = 0,
                            id = userName,
                            type = MbSubjectType.User,
                            sid = new SubjectSid() {sid = string.Empty},
                            data = new MbSubjectData()
                            {
                                isNT = true,
                            }
                        }
                    }
                },
                currentDomainSubjectAddStates = new MbSecDomainSubjectAddStateEntries()
                {
                    its = new MbSecDomainSubjectAddStateEntry[1]
                    {
                        new MbSecDomainSubjectAddStateEntry()
                        {
                            state = 98, //MakeExternalOn + ManageDBGrantsOn + Keep
                            subjectType = MbSubjectType.User
                        }
                    }
                }
            },
            //Параметры обновления списка пользователей после выполнения операции
            metaGet = new GetMbSecArg()
            {
                pattern = new MbSecMdPattern()
                {
                    users = ListOperation.Get
                }
            }
        },
        //Моникёр репозитория
        tMbSec = new MbId() { id = mb }
    };
    //Создание доменного пользователя, подключаемого с сервера
    var result = somClient.SetMbSec(setMbSec);
    return result;
}


См. также:


[SetMbSec:
 Операция](../SetMbSec.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
