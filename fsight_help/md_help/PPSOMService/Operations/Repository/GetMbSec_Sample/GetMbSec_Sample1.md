# Получение информации о группах пользователей: Операция GetMbSec

Получение информации о группах пользователей: Операция GetMbSec
-


**


# Получение информации о группах пользователей


Ниже приведен пример использования операции [GetMbSec](../GetMbSec.htm)
 для получения информации о группах пользователей, созданных в менеджере
 безопасности репозитория. В запросе передается моникёр соединения с репозиторием.
 В ответе приходит информация о группах пользователей.


	 SOAP
	  JSON C#


### SOAP-запрос:


[![](../../../minus.gif)](../../../#)<s:Envelope xmlns:s="http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../../minus.gif)](../../../#)<s:Body xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**" xmlns:xsd="**http://www.w3.org/2001/XMLSchema**">
[![](../../../minus.gif)](../../../#)<GetMbSec xmlns="**http://www.fsight.ru/PP.SOM.Som**">
[![](../../../minus.gif)](../../../#)<tMbSec xmlns="****">
  <id>S1!M</id>  </tMbSec>
[![](../../../minus.gif)](../../../#)<tArg xmlns="****">
[![](../../../minus.gif)](../../../#)<pattern>
  <groups>Get</groups>[![](../../../minus.gif)](../../../#)<group>
  <data>true</data>  <members>Get</members>  </group>
  </pattern>
  </tArg>
  </GetMbSec>
  </s:Body>
  </s:Envelope>


### SOAP-ответ:


[![](../../../minus.gif)](../../../#)<soapenv:Envelope xmlns:soapenv="**http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../../minus.gif)](../../../#)<soapenv:Body>
[![](../../../minus.gif)](../../../#)<GetMbSecResult xmlns="**http://www.fsight.ru/PP.SOM.Som**" xmlns:q1="**http://www.fsight.ru/PP.SOM.Som**" xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**">
[![](../../../minus.gif)](../../../#)<id xmlns="****">
  <id>S1!M</id>  </id>
[![](../../../minus.gif)](../../../#)<meta xmlns="****">
[![](../../../minus.gif)](../../../#)<groups>
[![](../../../minus.gif)](../../../#)<its>
[![](../../../minus.gif)](../../../#)<it>
  <k>2147483649</k>  <id>АДМИНИСТРАТОРЫ</id>  <n>АДМИНИСТРАТОРЫ</n>  <vis>1</vis>  <type>Group</type>[![](../../../minus.gif)](../../../#)<sid>
  <sid>PS-2-1</sid>  <type>Group</type>  </sid>
[![](../../../minus.gif)](../../../#)<data>
  <desc>Встроенная группа администраторов</desc>  <isNT>0</isNT>  <isExternal>1</isExternal>  <isBuiltin>1</isBuiltin>[![](../../../minus.gif)](../../../#)<group>
[![](../../../minus.gif)](../../../#)<members>
[![](../../../minus.gif)](../../../#)<its>
[![](../../../minus.gif)](../../../#)<it>
  <k>2147483649</k>  <id>ADMIN</id>  <n>Пользователь</n>  <vis>1</vis>  <type>User</type>[![](../../../minus.gif)](../../../#)<sid>
  <sid>PS-1-1</sid>  <type>User</type>  </sid>
  </it>
[![](../../../minus.gif)](../../../#)<it>
  <k>35005</k>  <id>USER123456789</id>  <vis>1</vis>  <type>User</type>[![](../../../minus.gif)](../../../#)<sid>
  <sid>PS-1-35005</sid>  <type>User</type>  </sid>
  </it>
[![](../../../minus.gif)](../../../#)<it>
  <k>2147483637</k>  <id>PROGNOZ\GNRSPO</id>  <n>PROGNOZ\GNRSPO</n>  <vis>1</vis>  <type>Group</type>[![](../../../minus.gif)](../../../#)<sid>
  <sid>S-1-5-21-1287548229-1982989762-879972363-11463</sid>  <type>Group</type>  </sid>
  </it>
[![](../../../minus.gif)](../../../#)<it>
  <k>67467</k>  <id>USER_ANN</id>  <vis>1</vis>  <type>User</type>[![](../../../minus.gif)](../../../#)<sid>
  <sid>PS-1-67467</sid>  <type>User</type>  </sid>
  </it>
[![](../../../minus.gif)](../../../#)<it>
  <k>2147483646</k>  <id>FS\IVANOV.IVAN</id>  <n>Иванов Иван Иванович</n>  <vis>1</vis>  <type>User</type>[![](../../../minus.gif)](../../../#)<sid>
  <sid>S-1-5-21-2210245889-1953428358-4221806923-1269</sid>  <type>User</type>  </sid>
  </it>
[![](../../../minus.gif)](../../../#)<it>
  <k>105163</k>  <id>USER_1234</id>  <vis>1</vis>  <type>User</type>[![](../../../minus.gif)](../../../#)<sid>
  <sid>PS-1-105163</sid>  <type>User</type>  </sid>
  </it>
[![](../../../minus.gif)](../../../#)<it>
  <k>197730</k>  <id>NEWREPOADMIN</id>  <n>NewRepoAdmin</n>  <vis>1</vis>  <type>User</type>[![](../../../minus.gif)](../../../#)<sid>
  <sid>PS-1-197730</sid>  <type>User</type>  </sid>
  </it>
  </its>
  </members>
  <hasAccessToken>0</hasAccessToken>  </group>
  </data>
  </it>
[![](../../../minus.gif)](../../../#)<it>
  <k>2147483650</k>  <id>ПОЛЬЗОВАТЕЛИ</id>  <n>ПОЛЬЗОВАТЕЛИ</n>  <vis>1</vis>  <type>Group</type>[![](../../../minus.gif)](../../../#)<sid>
  <sid>PS-2-2</sid>  <type>Group</type>  </sid>
[![](../../../minus.gif)](../../../#)<data>
  <desc>Встроенная группа пользователей</desc>  <isNT>0</isNT>  <isExternal>1</isExternal>  <isBuiltin>1</isBuiltin>[![](../../../minus.gif)](../../../#)<group>
[![](../../../minus.gif)](../../../#)<members>
[![](../../../minus.gif)](../../../#)<its>
[![](../../../minus.gif)](../../../#)<it>
  <k>20798</k>  <id>SIDOROV_IV</id>  <vis>1</vis>  <type>User</type>[![](../../../minus.gif)](../../../#)<sid>
  <sid>PS-1-20798</sid>  <type>User</type>  </sid>
  </it>
  </its>
  </members>
  <hasAccessToken>0</hasAccessToken>  </group>
  </data>
  </it>
[![](../../../minus.gif)](../../../#)<it>
  <k>2147483637</k>  <id>PROGNOZ\GNRSPO</id>  <n>PROGNOZ\GNRSPO</n>  <vis>1</vis>  <type>Group</type>[![](../../../minus.gif)](../../../#)<sid>
  <sid>S-1-5-21-1287548229-1982989762-879972363-11463</sid>  <type>Group</type>  </sid>
[![](../../../minus.gif)](../../../#)<data>
  <desc>Направление разработки системного ПО</desc>  <isNT>1</isNT>  <isExternal>1</isExternal>  <isBuiltin>0</isBuiltin>[![](../../../minus.gif)](../../../#)<user>
  <mustChangePasswordAtNextLogon>0</mustChangePasswordAtNextLogon>  <cannotChangePassword>0</cannotChangePassword>  <lockedState>NotLocked</lockedState>  <manageDBGrants>1</manageDBGrants>  <maxLogonSessions>0</maxLogonSessions>  <lastLoginStamp>1899-12-30T00:00:00.000</lastLoginStamp>  <hasAccessToRepository>1</hasAccessToRepository>  <isAdmin>0</isAdmin>  <isIsa>0</isIsa>  <isRoled>0</isRoled>  <changePassStamp>2020-03-23T09:07:03.000</changePassStamp>  <autoRun />
  <temporaryAge>0</temporaryAge>  <eternalPass>0</eternalPass>  <certificate />
  </user>
[![](../../../minus.gif)](../../../#)<group>
[![](../../../minus.gif)](../../../#)<members>
  <its />
  </members>
  <hasAccessToken>0</hasAccessToken>  </group>
  </data>
  </it>
[![](../../../minus.gif)](../../../#)<it>
  <k>8835</k>  <id>PROGNOZ\TESTGROUP1</id>  <n>PROGNOZ\TESTGROUP1</n>  <vis>1</vis>  <type>Group</type>[![](../../../minus.gif)](../../../#)<sid>
  <sid>S-1-5-21-1287548229-1982989762-879972363-10952</sid>  <type>Group</type>  </sid>
[![](../../../minus.gif)](../../../#)<data>
  <isNT>1</isNT>  <isExternal>1</isExternal>  <isBuiltin>0</isBuiltin>[![](../../../minus.gif)](../../../#)<group>
[![](../../../minus.gif)](../../../#)<members>
  <its />
  </members>
  <hasAccessToken>0</hasAccessToken>  </group>
  </data>
  </it>
[![](../../../minus.gif)](../../../#)<it>
  <k>2147483615</k>  <id>PROGNOZ\TESTGROUP2</id>  <n>PROGNOZ\TESTGROUP2</n>  <vis>1</vis>  <type>Group</type>[![](../../../minus.gif)](../../../#)<sid>
  <sid>S-1-5-21-1287548229-1982989762-879972363-10953</sid>  <type>Group</type>  </sid>
[![](../../../minus.gif)](../../../#)<data>
  <isNT>1</isNT>  <isExternal>0</isExternal>  <isBuiltin>0</isBuiltin>[![](../../../minus.gif)](../../../#)<user>
  <mustChangePasswordAtNextLogon>0</mustChangePasswordAtNextLogon>  <cannotChangePassword>0</cannotChangePassword>  <lockedState>NotLocked</lockedState>  <manageDBGrants>1</manageDBGrants>  <maxLogonSessions>0</maxLogonSessions>  <lastLoginStamp>1899-12-30T00:00:00.000</lastLoginStamp>  <hasAccessToRepository>1</hasAccessToRepository>  <isAdmin>0</isAdmin>  <isIsa>0</isIsa>  <isRoled>0</isRoled>  <changePassStamp>2020-03-23T09:07:03.000</changePassStamp>  <autoRun />
  <temporaryAge>0</temporaryAge>  <eternalPass>0</eternalPass>  <certificate />
  </user>
[![](../../../minus.gif)](../../../#)<group>
[![](../../../minus.gif)](../../../#)<members>
  <its />
  </members>
  <hasAccessToken>0</hasAccessToken>  </group>
  </data>
  </it>
[![](../../../minus.gif)](../../../#)<it>
  <k>2147483622</k>  <id>FS\DOMAIN GUESTS</id>  <n>FS\DOMAIN GUESTS</n>  <vis>1</vis>  <type>Group</type>[![](../../../minus.gif)](../../../#)<sid>
  <sid>S-1-5-21-2210245889-1953428358-4221806923-514</sid>  <type>Group</type>  </sid>
[![](../../../minus.gif)](../../../#)<data>
  <desc>All domain guests</desc>  <isNT>1</isNT>  <isExternal>1</isExternal>  <isBuiltin>0</isBuiltin>[![](../../../minus.gif)](../../../#)<group>
[![](../../../minus.gif)](../../../#)<members>
  <its />
  </members>
  <hasAccessToken>0</hasAccessToken>  </group>
  </data>
  </it>
[![](../../../minus.gif)](../../../#)<it>
  <k>144122</k>  <id>BPM_ALL_USERS</id>  <n>BPM_ALL_USERS</n>  <vis>1</vis>  <type>Group</type>[![](../../../minus.gif)](../../../#)<sid>
  <sid>PS-1-144122</sid>  <type>Group</type>  </sid>
[![](../../../minus.gif)](../../../#)<data>
  <desc>Группа, включающая всех пользователей бизнес-процессов</desc>  <isNT>0</isNT>  <isExternal>1</isExternal>  <isBuiltin>0</isBuiltin>[![](../../../minus.gif)](../../../#)<group>
[![](../../../minus.gif)](../../../#)<members>
[![](../../../minus.gif)](../../../#)<its>
[![](../../../minus.gif)](../../../#)<it>
  <k>105163</k>  <id>USER_1234</id>  <vis>1</vis>  <type>User</type>[![](../../../minus.gif)](../../../#)<sid>
  <sid>PS-1-105163</sid>  <type>User</type>  </sid>
  </it>
  </its>
  </members>
  <hasAccessToken>0</hasAccessToken>  </group>
  </data>
  </it>
  </its>
  </groups>
  <bisearchEnable>Full</bisearchEnable>[![](../../../minus.gif)](../../../#)<apply>
[![](../../../minus.gif)](../../../#)<onCredentialsRequired>
[![](../../../minus.gif)](../../../#)<logonParams>
  <descr>Введите имя и пароль пользователя, обладающего правами создания таблиц в базе данных 'База данных'</descr>  <realm>OBJ21909</realm>  <toAdmin>1</toAdmin>[![](../../../minus.gif)](../../../#)<logonData>
  <driver>MSSQL2012</driver>  <server>test-server</server>  <database>Warehouse</database>  </logonData>
  </logonParams>
  </onCredentialsRequired>
  </apply>
  </meta>
  </GetMbSecResult>
  </soapenv:Body>
  </soapenv:Envelope>


### JSON-запрос:


{
 "GetMbSec" :
  {
   "tMbSec" :
    {
     "id" : "S1!M"
    },
   "tArg" :
    {
     "pattern" :
      {
       "groups" : "Get",
       "group" :
        {
         "data" : "true",
         "members" : "Get"
        }
      }
    }
  }
}

### JSON-ответ:


{
 "GetMbSecResult" :
  {
   "id" :
    {
     "id" : "S1!M"
    },
   "meta" :
    {
     "groups" :
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
              },
             "data" :
              {
               "desc" : "Встроенная группа администраторов",
               "isNT" : "0",
               "isExternal" : "1",
               "isBuiltin" : "1",
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
                         "vis" : "1",
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
                         "vis" : "1",
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
                         "vis" : "1",
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
                         "vis" : "1",
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
                         "vis" : "1",
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
                         "vis" : "1",
                         "type" : "User",
                         "sid" :
                          {
                           "sid" : "PS-1-105163",
                           "type" : "User"
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
                          }
                        }
                      ]
                    }
                  },
                 "hasAccessToken" : "0"
                }
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
              },
             "data" :
              {
               "desc" : "Встроенная группа пользователей",
               "isNT" : "0",
               "isExternal" : "1",
               "isBuiltin" : "1",
               "group" :
                {
                 "members" :
                  {
                   "its" :
                    {
                     "it" :
                      [
                        {
                         "k" : "20798",
                         "id" : "SIDOROV_IV",
                         "vis" : "1",
                         "type" : "User",
                         "sid" :
                          {
                           "sid" : "PS-1-20798",
                           "type" : "User"
                          }
                        }
                      ]
                    }
                  },
                 "hasAccessToken" : "0"
                }
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
              },
             "data" :
              {
               "desc" : "Направление разработки системного ПО",
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
                },
               "group" :
                {
                 "members" :
                  {
                   "its" : ""
                  },
                 "hasAccessToken" : "0"
                }
              }
            },
            {
             "k" : "8835",
             "id" : "PROGNOZ\TESTGROUP1",
             "n" : "PROGNOZ\TESTGROUP1",
             "vis" : "1",
             "type" : "Group",
             "sid" :
              {
               "sid" : "S-1-5-21-1287548229-1982989762-879972363-10952",
               "type" : "Group"
              },
             "data" :
              {
               "isNT" : "1",
               "isExternal" : "1",
               "isBuiltin" : "0",
               "group" :
                {
                 "members" :
                  {
                   "its" : ""
                  },
                 "hasAccessToken" : "0"
                }
              }
            },
            {
             "k" : "2147483615",
             "id" : "PROGNOZ\TESTGROUP2",
             "n" : "PROGNOZ\TESTGROUP2",
             "vis" : "1",
             "type" : "Group",
             "sid" :
              {
               "sid" : "S-1-5-21-1287548229-1982989762-879972363-10953",
               "type" : "Group"
              },
             "data" :
              {
               "isNT" : "1",
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
                 "changePassStamp" : "2020-03-23T09:07:03.000",
                 "autoRun" : "",
                 "temporaryAge" : "0",
                 "eternalPass" : "0",
                 "certificate" : ""
                },
               "group" :
                {
                 "members" :
                  {
                   "its" : ""
                  },
                 "hasAccessToken" : "0"
                }
              }
            },
            {
             "k" : "2147483622",
             "id" : "FS\DOMAIN GUESTS",
             "n" : "FS\DOMAIN GUESTS",
             "vis" : "1",
             "type" : "Group",
             "sid" :
              {
               "sid" : "S-1-5-21-2210245889-1953428358-4221806923-514",
               "type" : "Group"
              },
             "data" :
              {
               "desc" : "All domain guests",
               "isNT" : "1",
               "isExternal" : "1",
               "isBuiltin" : "0",
               "group" :
                {
                 "members" :
                  {
                   "its" : ""
                  },
                 "hasAccessToken" : "0"
                }
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
              },
             "data" :
              {
               "desc" : "Группа, включающая всех пользователей бизнес-процессов",
               "isNT" : "0",
               "isExternal" : "1",
               "isBuiltin" : "0",
               "group" :
                {
                 "members" :
                  {
                   "its" :
                    {
                     "it" :
                      [
                        {
                         "k" : "105163",
                         "id" : "USER_1234",
                         "vis" : "1",
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
                 "hasAccessToken" : "0"
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


public static GetMbSecResult GetGroupInfo(string mb)
{
    var somClient = new SomPortTypeClient(); //Прокси-объект для выполнения операций
    //Параметры выполнения операции
    var getMbSec = new GetMbSec()
    {
        tArg = new GetMbSecArg()
        {
            pattern = new MbSecMdPattern()
            {
                groups = ListOperation.Get,
                group = new MbSubjectPattern()
                {
                    data = true,
                    members = ListOperation.Get
                }
            }
        },
        tMbSec = new MbId() { id = mb}
    };
    //Получение информации о группах пользователей
    var result = somClient.GetMbSec(getMbSec);
    return result;
}


См. также:


[GetMbSec:
 Операция](../GetMbSec.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
