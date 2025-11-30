# Изменение параметров пользователя: Операция SetMbSec

Изменение параметров пользователя: Операция SetMbSec
-


**


# Изменение параметров пользователя


Ниже приведен пример использования операции [SetMbSec](../SetMbSec.htm)
 для изменения параметров пользователя. В запросе передается новый пароль
 пользователя и группа, в которую будет включен пользователь. В ответе
 приходит обновленный список пользователей репозитория.


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
  <users>Change</users>[![](../../../minus.gif)](../../../#)<user>
  <data>true</data>  <memberOf>Set</memberOf>  </user>
  </pattern>
[![](../../../minus.gif)](../../../#)<meta>
[![](../../../minus.gif)](../../../#)<users>
[![](../../../minus.gif)](../../../#)<its>
[![](../../../minus.gif)](../../../#)<it>
  <k>-1</k>  <id>NewRepoAdmin</id>  <vis>true</vis>  <type>User</type>[![](../../../minus.gif)](../../../#)<sid>
  <sid />
  </sid>
[![](../../../minus.gif)](../../../#)<data>
[![](../../../minus.gif)](../../../#)<memberOf>
[![](../../../minus.gif)](../../../#)<its>
[![](../../../minus.gif)](../../../#)<it>
  <k>2147483649</k>  <id>АДМИНИСТРАТОРЫ</id>  <n>АДМИНИСТРАТОРЫ</n>  <vis>true</vis>  <type>Group</type>[![](../../../minus.gif)](../../../#)<sid>
  <sid>PS-2-1</sid>  <type>Group</type>  </sid>
[![](../../../minus.gif)](../../../#)<data>
  <desc>Встроенная группа администраторов</desc>  <isNT>false</isNT>  <isExternal>true</isExternal>  <isBuiltin>true</isBuiltin>[![](../../../minus.gif)](../../../#)<group>
[![](../../../minus.gif)](../../../#)<members>
[![](../../../minus.gif)](../../../#)<its>
[![](../../../minus.gif)](../../../#)<it>
  <k>2147483649</k>  <id>ADMIN</id>  <n>Пользователь</n>  <vis>true</vis>  <type>User</type>[![](../../../minus.gif)](../../../#)<sid>
  <sid>PS-1-1</sid>  <type>User</type>  </sid>
  </it>
[![](../../../minus.gif)](../../../#)<it>
  <k>35005</k>  <id>USER123456789</id>  <vis>true</vis>  <type>User</type>[![](../../../minus.gif)](../../../#)<sid>
  <sid>PS-1-35005</sid>  <type>User</type>  </sid>
  </it>
[![](../../../minus.gif)](../../../#)<it>
  <k>2147483637</k>  <id>PROGNOZ\GNRSPO</id>  <n>PROGNOZ\GNRSPO</n>  <vis>true</vis>  <type>Group</type>[![](../../../minus.gif)](../../../#)<sid>
  <sid>S-1-5-21-1287548229-1982989762-879972363-11463</sid>  <type>Group</type>  </sid>
  </it>
[![](../../../minus.gif)](../../../#)<it>
  <k>67467</k>  <id>USER_ANN</id>  <vis>true</vis>  <type>User</type>[![](../../../minus.gif)](../../../#)<sid>
  <sid>PS-1-67467</sid>  <type>User</type>  </sid>
  </it>
[![](../../../minus.gif)](../../../#)<it>
  <k>2147483646</k>  <id>FS\IVANOV.IVAN</id>  <n>Иванов Иван Иванович</n>  <vis>true</vis>  <type>User</type>[![](../../../minus.gif)](../../../#)<sid>
  <sid>S-1-5-21-2210245889-1953428358-4221806923-1269</sid>  <type>User</type>  </sid>
  </it>
[![](../../../minus.gif)](../../../#)<it>
  <k>105163</k>  <id>USER_1234</id>  <vis>true</vis>  <type>User</type>[![](../../../minus.gif)](../../../#)<sid>
  <sid>PS-1-105163</sid>  <type>User</type>  </sid>
  </it>
  </its>
  </members>
  <hasAccessToken>false</hasAccessToken>  </group>
  </data>
  </it>
  </its>
  </memberOf>
[![](../../../minus.gif)](../../../#)<user>
[![](../../../minus.gif)](../../../#)<credentials>
  <pass>q1</pass>  </credentials>
[![](../../../minus.gif)](../../../#)<oldCredentials>
  <pass>NewRepoAdmin</pass>  </oldCredentials>
  </user>
  </data>
  </it>
  </its>
  </users>
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
  <isNT>0</isNT>  <isExternal>0</isExternal>  <isBuiltin>1</isBuiltin>[![](../../../minus.gif)](../../../#)<user>
  <mustChangePasswordAtNextLogon>0</mustChangePasswordAtNextLogon>  <cannotChangePassword>0</cannotChangePassword>  <lockedState>NotLocked</lockedState>  <manageDBGrants>1</manageDBGrants>  <maxLogonSessions>0</maxLogonSessions>  <lastLoginStamp>2020-03-23T14:06:51.600</lastLoginStamp>  <hasAccessToRepository>1</hasAccessToRepository>  <isAdmin>1</isAdmin>  <isIsa>0</isIsa>  <isRoled>0</isRoled>  <changePassStamp>2020-03-23T09:07:03.000</changePassStamp>  <autoRun />
  <temporaryAge>0</temporaryAge>  <eternalPass>1</eternalPass>  <certificate />
  </user>
  </data>
  </it>
[![](../../../minus.gif)](../../../#)<it>
  <k>2147483646</k>  <id>FS\IVANOV.IVAN</id>  <n>Иванов Иван Иванович</n>  <vis>1</vis>  <type>User</type>[![](../../../minus.gif)](../../../#)<sid>
  <sid>S-1-5-21-2210245889-1953428358-4221806923-1269</sid>  <type>User</type>  </sid>
[![](../../../minus.gif)](../../../#)<data>
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
  <isNT>0</isNT>  <isExternal>0</isExternal>  <isBuiltin>0</isBuiltin>[![](../../../minus.gif)](../../../#)<user>
  <mustChangePasswordAtNextLogon>0</mustChangePasswordAtNextLogon>  <cannotChangePassword>0</cannotChangePassword>  <lockedState>NotLocked</lockedState>  <manageDBGrants>1</manageDBGrants>  <maxLogonSessions>0</maxLogonSessions>  <lastLoginStamp>2015-12-29T17:36:03.743</lastLoginStamp>  <hasAccessToRepository>1</hasAccessToRepository>  <isAdmin>0</isAdmin>  <isIsa>0</isIsa>  <isRoled>0</isRoled>  <changePassStamp>2015-12-28T12:48:50.000</changePassStamp>  <autoRun />
  <temporaryAge>0</temporaryAge>  <eternalPass>0</eternalPass>  <certificate />
  </user>
  </data>
  </it>
[![](../../../minus.gif)](../../../#)<it>
  <k>20798</k>  <id>SIDOROV_IV</id>  <vis>1</vis>  <type>User</type>[![](../../../minus.gif)](../../../#)<sid>
  <sid>PS-1-20798</sid>  <type>User</type>  </sid>
[![](../../../minus.gif)](../../../#)<data>
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
  <desc>TESTUSER</desc>  <isNT>0</isNT>  <isExternal>0</isExternal>  <isBuiltin>0</isBuiltin>[![](../../../minus.gif)](../../../#)<user>
  <mustChangePasswordAtNextLogon>0</mustChangePasswordAtNextLogon>  <cannotChangePassword>1</cannotChangePassword>  <lockedState>NotLocked</lockedState>  <manageDBGrants>1</manageDBGrants>  <maxLogonSessions>0</maxLogonSessions>  <lastLoginStamp>1899-12-30T00:00:00.000</lastLoginStamp>  <hasAccessToRepository>1</hasAccessToRepository>  <isAdmin>0</isAdmin>  <isIsa>0</isIsa>  <isRoled>0</isRoled>  <changePassStamp>2019-07-19T05:57:50.000</changePassStamp>  <autoRun />
  <temporaryAge>0</temporaryAge>  <eternalPass>1</eternalPass>  <certificate />
  </user>
  </data>
  </it>
[![](../../../minus.gif)](../../../#)<it>
  <k>105159</k>  <id>USER1234</id>  <vis>1</vis>  <type>User</type>[![](../../../minus.gif)](../../../#)<sid>
  <sid>PS-1-105159</sid>  <type>User</type>  </sid>
[![](../../../minus.gif)](../../../#)<data>
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
  <desc>USER123456789 / USER123456789</desc>  <isNT>0</isNT>  <isExternal>0</isExternal>  <isBuiltin>0</isBuiltin>[![](../../../minus.gif)](../../../#)<user>
  <mustChangePasswordAtNextLogon>0</mustChangePasswordAtNextLogon>  <cannotChangePassword>0</cannotChangePassword>  <lockedState>NotLocked</lockedState>  <manageDBGrants>1</manageDBGrants>  <maxLogonSessions>0</maxLogonSessions>  <lastLoginStamp>2017-09-13T12:42:15.000</lastLoginStamp>  <hasAccessToRepository>1</hasAccessToRepository>  <isAdmin>0</isAdmin>  <isIsa>0</isIsa>  <isRoled>0</isRoled>  <changePassStamp>2016-06-23T06:49:07.000</changePassStamp>  <autoRun />
  <temporaryAge>0</temporaryAge>  <eternalPass>0</eternalPass>  <certificate />
  </user>
  </data>
  </it>
[![](../../../minus.gif)](../../../#)<it>
  <k>105163</k>  <id>USER_1234</id>  <vis>1</vis>  <type>User</type>[![](../../../minus.gif)](../../../#)<sid>
  <sid>PS-1-105163</sid>  <type>User</type>  </sid>
[![](../../../minus.gif)](../../../#)<data>
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
  <isNT>0</isNT>  <isExternal>0</isExternal>  <isBuiltin>0</isBuiltin>[![](../../../minus.gif)](../../../#)<user>
  <mustChangePasswordAtNextLogon>0</mustChangePasswordAtNextLogon>  <cannotChangePassword>0</cannotChangePassword>  <lockedState>NotLocked</lockedState>  <manageDBGrants>1</manageDBGrants>  <maxLogonSessions>0</maxLogonSessions>  <lastLoginStamp>2019-04-09T11:53:11.770</lastLoginStamp>  <hasAccessToRepository>1</hasAccessToRepository>  <isAdmin>0</isAdmin>  <isIsa>0</isIsa>  <isRoled>0</isRoled>  <changePassStamp>2019-04-09T06:53:02.000</changePassStamp>  <autoRun />
  <temporaryAge>0</temporaryAge>  <eternalPass>0</eternalPass>  <certificate />
  </user>
  </data>
  </it>
[![](../../../minus.gif)](../../../#)<it>
  <k>197730</k>  <id>NEWREPOADMIN</id>  <n>NewRepoAdmin</n>  <vis>1</vis>  <type>User</type>[![](../../../minus.gif)](../../../#)<sid>
  <sid>PS-1-197730</sid>  <type>User</type>  </sid>
[![](../../../minus.gif)](../../../#)<data>
  <isNT>0</isNT>  <isExternal>0</isExternal>  <isBuiltin>0</isBuiltin>[![](../../../minus.gif)](../../../#)<user>
  <mustChangePasswordAtNextLogon>0</mustChangePasswordAtNextLogon>  <cannotChangePassword>0</cannotChangePassword>  <lockedState>NotLocked</lockedState>  <manageDBGrants>1</manageDBGrants>  <maxLogonSessions>3</maxLogonSessions>  <lastLoginStamp>1899-12-30T00:00:00.000</lastLoginStamp>  <hasAccessToRepository>1</hasAccessToRepository>  <isAdmin>0</isAdmin>  <isIsa>0</isIsa>  <isRoled>0</isRoled>  <changePassStamp>2020-03-23T09:07:03.000</changePassStamp>  <autoRun />
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
       "users" : "Change",
       "user" :
        {
         "data" : "true",
         "memberOf" : "Set"
        }
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
               "k" : "-1",
               "id" : "NewRepoAdmin",
               "vis" : "true",
               "type" : "User",
               "sid" :
                {
                 "sid" : ""
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
                         "vis" : "true",
                         "type" : "Group",
                         "sid" :
                          {
                           "sid" : "PS-2-1",
                           "type" : "Group"
                          },
                         "data" :
                          {
                           "desc" : "Встроенная группа администраторов",
                           "isNT" : "false",
                           "isExternal" : "true",
                           "isBuiltin" : "true",
                           "group" :
                            {
                             "members" :
                              {
                               "its" :
                                {
                                 "it" :
                                  [
                                    {
                                     "k" : "2147483649",
                                     "id" : "ADMIN",
                                     "n" : "Пользователь",
                                     "vis" : "true",
                                     "type" : "User",
                                     "sid" :
                                      {
                                       "sid" : "PS-1-1",
                                       "type" : "User"
                                      }
                                    },
                                    {
                                     "k" : "35005",
                                     "id" : "USER123456789",
                                     "vis" : "true",
                                     "type" : "User",
                                     "sid" :
                                      {
                                       "sid" : "PS-1-35005",
                                       "type" : "User"
                                      }
                                    },
                                    {
                                     "k" : "2147483637",
                                     "id" : "PROGNOZ\GNRSPO",
                                     "n" : "PROGNOZ\GNRSPO",
                                     "vis" : "true",
                                     "type" : "Group",
                                     "sid" :
                                      {
                                       "sid" : "S-1-5-21-1287548229-1982989762-879972363-11463",
                                       "type" : "Group"
                                      }
                                    },
                                    {
                                     "k" : "67467",
                                     "id" : "USER_ANN",
                                     "vis" : "true",
                                     "type" : "User",
                                     "sid" :
                                      {
                                       "sid" : "PS-1-67467",
                                       "type" : "User"
                                      }
                                    },
                                    {
                                     "k" : "2147483646",
                                     "id" : "FS\IVANOV.IVAN",
                                     "n" : "Иванов Иван Иванович",
                                     "vis" : "true",
                                     "type" : "User",
                                     "sid" :
                                      {
                                       "sid" : "S-1-5-21-2210245889-1953428358-4221806923-1269",
                                       "type" : "User"
                                      }
                                    },
                                    {
                                     "k" : "105163",
                                     "id" : "USER_1234",
                                     "vis" : "true",
                                     "type" : "User",
                                     "sid" :
                                      {
                                       "sid" : "PS-1-105163",
                                       "type" : "User"
                                      }
                                    }
                                  ]
                                }
                              },
                             "hasAccessToken" : "false"
                            }
                          }
                        }
                      ]
                    }
                  },
                 "user" :
                  {
                   "credentials" :
                    {
                     "pass" : "q1"
                    },
                   "oldCredentials" :
                    {
                     "pass" : "NewRepoAdmin"
                    }
                  }
                }
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
                   "lastLoginStamp" : "2020-03-23T14:06:51.600",
                   "hasAccessToRepository" : "1",
                   "isAdmin" : "1",
                   "isIsa" : "0",
                   "isRoled" : "0",
                   "changePassStamp" : "2020-03-23T09:07:03.000",
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
               "k" : "197730",
               "id" : "NEWREPOADMIN",
               "n" : "NewRepoAdmin",
               "vis" : "1",
               "type" : "User",
               "sid" :
                {
                 "sid" : "PS-1-197730",
                 "type" : "User"
                },
               "data" :
                {
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
                   "changePassStamp" : "2020-03-23T09:07:03.000",
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


public static SetMbSecResult ChangeUser(string mb, string userName, string oldPassword, string newPassword, MbSubject group)
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
                users = ListOperation.Change,
                user = new MbSubjectPattern()
                {
                    data = true,
                    memberOf = ListOperation.Set
                }
            },
            meta = new MbSecMd()
            {
                users = new MbSubjects()
                {
                    its = new MbSubject[1]
                    {
                        new MbSubject()
                        {
                            k = uint.MaxValue,
                            id = userName,
                            vis = true,
                            type = MbSubjectType.User,
                            sid = new SubjectSid() {sid = string.Empty},
                            data = new MbSubjectData()
                            {
                                user = new MbUserData()
                                {
                                    //Старый пароль
                                    oldCredentials = new UserCreds() {pass = oldPassword},
                                    //Новый пароль
                                    credentials = new UserCreds() {pass = newPassword}
                                },
                                //Группа, в которую будет включен пользователь
                                memberOf = new MbSubjects()
                                {
                                    its =  new MbSubject[1]
                                    {
                                        group
                                    }
                                }
                            }
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
    //Изменение параметров пользователя
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
