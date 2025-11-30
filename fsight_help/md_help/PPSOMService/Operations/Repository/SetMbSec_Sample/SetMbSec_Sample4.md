# Изменение профиля пользователя: Операция SetMbSec

Изменение профиля пользователя: Операция SetMbSec
-


**


# Изменение профиля пользователя


Ниже приведён пример использования операции [SetMbSec](../SetMbSec.htm)
 для изменения профиля пользователя. В запросе передаётся пользователь
 и новые параметры его профиля. В ответе приходит обновленный список профилей
 пользователей репозитория.


	 SOAP
	  JSON C#


### SOAP-запрос:


		[![](../../../minus.gif)](../../../#)<s:Envelope xmlns:s="http://schemas.xmlsoap.org/soap/envelope/**">


			[![](../../../minus.gif)](../../../#)<s:Body xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**" xmlns:xsd="**http://www.w3.org/2001/XMLSchema**">


				[![](../../../minus.gif)](../../../#)<SetMbSec
				 xmlns="**http://www.fsight.ru/PP.SOM.Som**">


					[![](../../../minus.gif)](../../../#)<tMbSec xmlns="** **">


						  <id>S1!M</id>


					  </tMbSec>


					[![](../../../minus.gif)](../../../#)<tArg xmlns="** **">


						[![](../../../minus.gif)](../../../#)<pattern>


							  <users>Change</users>


							[![](../../../minus.gif)](../../../#)<user>


								  <profile>true</profile>


							  </user>


						  </pattern>


						[![](../../../minus.gif)](../../../#)<meta>


							[![](../../../minus.gif)](../../../#)<users>


								[![](../../../minus.gif)](../../../#)<its>


									[![](../../../minus.gif)](../../../#)<it>


										  <k>2147483649</k>


										  <id>ADMIN</id>


										  <vis>true</vis>


										  <type>User</type>


										[![](../../../minus.gif)](../../../#)<sid>


											  <sid>PS-1-1</sid>


											  <type>User</type>


										  </sid>


										[![](../../../minus.gif)](../../../#)<data>


										  <desc />


											[![](../../../minus.gif)](../../../#)<memberOf>


												[![](../../../minus.gif)](../../../#)<its>


													[![](../../../minus.gif)](../../../#)<it>


														  <k>2147483649</k>


														  <id>АДМИНИСТРАТОРЫ</id>


														  <n>АДМИНИСТРАТОРЫ</n>


														  <vis>true</vis>


														  <type>Group</type>


														[![](../../../minus.gif)](../../../#)<sid>


															  <sid>PS-2-1</sid>


															  <type>Group</type>


														  </sid>


													  </it>


												  </its>


											  </memberOf>


											  <isNT>false</isNT>


											  <isExternal>false</isExternal>


											  <isBuiltin>true</isBuiltin>


											[![](../../../minus.gif)](../../../#)<user>


												  <mustChangePasswordAtNextLogon>false</mustChangePasswordAtNextLogon>


												  <cannotChangePassword>false</cannotChangePassword>


												  <lockedState>NotLocked</lockedState>


												  <manageDBGrants>true</manageDBGrants>


												  <maxLogonSessions>0</maxLogonSessions>


												  <lastLoginStamp>2018-10-24T11:31:20.847</lastLoginStamp>


												  <hasAccessToRepository>true</hasAccessToRepository>


												  <isAdmin>true</isAdmin>


												  <isIsa>false</isIsa>


												  <isRoled>false</isRoled>


												  <changePassStamp>2018-10-24T06:31:43</changePassStamp>


											  <autoRun />


												  <temporaryAge>0</temporaryAge>


												  <eternalPass>false</eternalPass>


											  <certificate />


											  </user>


										  </data>


										[![](../../../minus.gif)](../../../#)<profile>


											  <k>0</k>


											[![](../../../minus.gif)](../../../#)<sid>


												  <sid>PS-1-1</sid>


												  <type>User</type>


											  </sid>


											[![](../../../minus.gif)](../../../#)<emails>


											  <its />


												[![](../../../minus.gif)](../../../#)<work>


													  <name>Рабочий</name>


													  <email>NewWork@example.ru</email>


												  </work>


												[![](../../../minus.gif)](../../../#)<personal>


													  <name>Персональный</name>


													  <email>NewHome@example.ru</email>


												  </personal>


												[![](../../../minus.gif)](../../../#)<mobile>


													  <name>Мобильный</name>


													  <email>NewMobile@example.ru</email>


												  </mobile>


											  </emails>


											[![](../../../minus.gif)](../../../#)<props>


												[![](../../../minus.gif)](../../../#)<its>


													[![](../../../minus.gif)](../../../#)<it>


														  <k>0</k>


														  <id>Location</id>


														  <value>Home</value>


													  </it>


												  </its>


											  </props>


										  </profile>


									  </it>


								  </its>


							  </users>


						  </meta>


						[![](../../../minus.gif)](../../../#)<metaGet>


							[![](../../../minus.gif)](../../../#)<pattern>


								  <profiles>Get</profiles>


							  </pattern>


						  </metaGet>


					  </tArg>


				  </SetMbSec>


			  </s:Body>


		  </s:Envelope>


### SOAP-ответ:


		[![](../../../minus.gif)](../../../#)<soapenv:Envelope xmlns:soapenv="**http://schemas.xmlsoap.org/soap/envelope/**">


			[![](../../../minus.gif)](../../../#)<soapenv:Body>


				[![](../../../minus.gif)](../../../#)<SetMbSecResult
				 xmlns="**http://www.fsight.ru/PP.SOM.Som**"
				 xmlns:q1="**http://www.fsight.ru/PP.SOM.Som**"
				 xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**">


					[![](../../../minus.gif)](../../../#)<id xmlns="** **">


						  <id>S1!M</id>


					  </id>


					[![](../../../minus.gif)](../../../#)<metaGet xmlns="** **">


						[![](../../../minus.gif)](../../../#)<id>


							  <id>S1!M</id>


						  </id>


						[![](../../../minus.gif)](../../../#)<meta>


							[![](../../../minus.gif)](../../../#)<profiles>


								[![](../../../minus.gif)](../../../#)<its>


									[![](../../../minus.gif)](../../../#)<it>


										  <k>0</k>


										  <id>PS-1-1</id>


										  <n>ADMIN</n>


										  <vis>1</vis>


										[![](../../../minus.gif)](../../../#)<sid>


											  <sid>PS-1-1</sid>


										  </sid>


										[![](../../../minus.gif)](../../../#)<emails>


											[![](../../../minus.gif)](../../../#)<its>


												[![](../../../minus.gif)](../../../#)<it>


													  <name>Рабочий</name>


													  <email>NewWork@example.ru</email>


												  </it>


												[![](../../../minus.gif)](../../../#)<it>


													  <name>Мобильный</name>


													  <email>NewMobile@example.ru</email>


												  </it>


												[![](../../../minus.gif)](../../../#)<it>


													  <name>Персональный</name>


													  <email>NewHome@example.ru</email>


												  </it>


											  </its>


											[![](../../../minus.gif)](../../../#)<def>


												  <name>Рабочий</name>


												  <email>NewWork@example.ru</email>


											  </def>


											[![](../../../minus.gif)](../../../#)<work>


												  <name>Рабочий</name>


												  <email>NewWork@example.ru</email>


											  </work>


											[![](../../../minus.gif)](../../../#)<personal>


												  <name>Персональный</name>


												  <email>NewHome@example.ru</email>


											  </personal>


											[![](../../../minus.gif)](../../../#)<mobile>


												  <name>Мобильный</name>


												  <email>NewMobile@example.ru</email>


											  </mobile>


										  </emails>


										[![](../../../minus.gif)](../../../#)<props>


											[![](../../../minus.gif)](../../../#)<its>


												[![](../../../minus.gif)](../../../#)<it>


													  <k>1</k>


													  <id>Location</id>


													  <value>Home</value>


													  <dt>1</dt>


												  </it>


											  </its>


										  </props>


									  </it>


									[![](../../../minus.gif)](../../../#)<it>


										  <k>0</k>


										  <id>PS-1-532</id>


										  <n>GUEST</n>


										  <vis>1</vis>


										[![](../../../minus.gif)](../../../#)<sid>


											  <sid>PS-1-532</sid>


										  </sid>


										[![](../../../minus.gif)](../../../#)<emails>


											[![](../../../minus.gif)](../../../#)<its>


												[![](../../../minus.gif)](../../../#)<it>


													  <name>Рабочий</name>


												  <email />


												  </it>


												[![](../../../minus.gif)](../../../#)<it>


													  <name>Мобильный</name>


												  <email />


												  </it>


												[![](../../../minus.gif)](../../../#)<it>


													  <name>Персональный</name>


												  <email />


												  </it>


											  </its>


										  </emails>


										[![](../../../minus.gif)](../../../#)<props>


										  <its />


										  </props>


									  </it>


									[![](../../../minus.gif)](../../../#)<it>


										  <k>0</k>


										  <id>PS-1-537</id>


										  <n>NEWADMIN</n>


										  <vis>1</vis>


										[![](../../../minus.gif)](../../../#)<sid>


											  <sid>PS-1-537</sid>


										  </sid>


										[![](../../../minus.gif)](../../../#)<emails>


											[![](../../../minus.gif)](../../../#)<its>


												[![](../../../minus.gif)](../../../#)<it>


													  <name>Рабочий</name>


												  <email />


												  </it>


												[![](../../../minus.gif)](../../../#)<it>


													  <name>Мобильный</name>


												  <email />


												  </it>


												[![](../../../minus.gif)](../../../#)<it>


													  <name>Персональный</name>


												  <email />


												  </it>


											  </its>


										  </emails>


										[![](../../../minus.gif)](../../../#)<props>


										  <its />


										  </props>


									  </it>


									[![](../../../minus.gif)](../../../#)<it>


										  <k>0</k>


										  <id>PS-1-539</id>


										  <n>NEWADMIN</n>


										  <vis>1</vis>


										[![](../../../minus.gif)](../../../#)<sid>


											  <sid>PS-1-539</sid>


										  </sid>


										[![](../../../minus.gif)](../../../#)<emails>


											[![](../../../minus.gif)](../../../#)<its>


												[![](../../../minus.gif)](../../../#)<it>


													  <name>Рабочий</name>


												  <email />


												  </it>


												[![](../../../minus.gif)](../../../#)<it>


													  <name>Мобильный</name>


												  <email />


												  </it>


												[![](../../../minus.gif)](../../../#)<it>


													  <name>Персональный</name>


												  <email />


												  </it>


											  </its>


										  </emails>


										[![](../../../minus.gif)](../../../#)<props>


										  <its />


										  </props>


									  </it>


									[![](../../../minus.gif)](../../../#)<it>


										  <k>0</k>


										  <id>PS-1-541</id>


										  <n>NEWADMIN</n>


										  <vis>1</vis>


										[![](../../../minus.gif)](../../../#)<sid>


											  <sid>PS-1-541</sid>


										  </sid>


										[![](../../../minus.gif)](../../../#)<emails>


											[![](../../../minus.gif)](../../../#)<its>


												[![](../../../minus.gif)](../../../#)<it>


													  <name>Рабочий</name>


												  <email />


												  </it>


												[![](../../../minus.gif)](../../../#)<it>


													  <name>Мобильный</name>


												  <email />


												  </it>


												[![](../../../minus.gif)](../../../#)<it>


													  <name>Персональный</name>


												  <email />


												  </it>


											  </its>


										  </emails>


										[![](../../../minus.gif)](../../../#)<props>


										  <its />


										  </props>


									  </it>


									[![](../../../minus.gif)](../../../#)<it>


										  <k>0</k>


										  <id>PS-1-543</id>


										  <n>NEWADMIN</n>


										  <vis>1</vis>


										[![](../../../minus.gif)](../../../#)<sid>


											  <sid>PS-1-543</sid>


										  </sid>


										[![](../../../minus.gif)](../../../#)<emails>


											[![](../../../minus.gif)](../../../#)<its>


												[![](../../../minus.gif)](../../../#)<it>


													  <name>Рабочий</name>


												  <email />


												  </it>


												[![](../../../minus.gif)](../../../#)<it>


													  <name>Мобильный</name>


												  <email />


												  </it>


												[![](../../../minus.gif)](../../../#)<it>


													  <name>Персональный</name>


												  <email />


												  </it>


											  </its>


										  </emails>


										[![](../../../minus.gif)](../../../#)<props>


										  <its />


										  </props>


									  </it>


									[![](../../../minus.gif)](../../../#)<it>


										  <k>0</k>


										  <id>PS-1-545</id>


										  <n>NEWADMIN</n>


										  <vis>1</vis>


										[![](../../../minus.gif)](../../../#)<sid>


											  <sid>PS-1-545</sid>


										  </sid>


										[![](../../../minus.gif)](../../../#)<emails>


											[![](../../../minus.gif)](../../../#)<its>


												[![](../../../minus.gif)](../../../#)<it>


													  <name>Рабочий</name>


												  <email />


												  </it>


												[![](../../../minus.gif)](../../../#)<it>


													  <name>Мобильный</name>


												  <email />


												  </it>


												[![](../../../minus.gif)](../../../#)<it>


													  <name>Персональный</name>


												  <email />


												  </it>


											  </its>


										  </emails>


										[![](../../../minus.gif)](../../../#)<props>


										  <its />


										  </props>


									  </it>


									[![](../../../minus.gif)](../../../#)<it>


										  <k>0</k>


										  <id>S-1-5-21-2210245889-1953428358-4221806923-2817</id>


										  <n>FS\ASBADMIN</n>


										  <vis>1</vis>


										[![](../../../minus.gif)](../../../#)<sid>


											  <sid>S-1-5-21-2210245889-1953428358-4221806923-2817</sid>


										  </sid>


										[![](../../../minus.gif)](../../../#)<emails>


											[![](../../../minus.gif)](../../../#)<its>


												[![](../../../minus.gif)](../../../#)<it>


													  <name>Рабочий</name>


												  <email />


												  </it>


												[![](../../../minus.gif)](../../../#)<it>


													  <name>Мобильный</name>


												  <email />


												  </it>


												[![](../../../minus.gif)](../../../#)<it>


													  <name>Персональный</name>


												  <email />


												  </it>


											  </its>


										  </emails>


										[![](../../../minus.gif)](../../../#)<props>


										  <its />


										  </props>


									  </it>


								  </its>


							  </profiles>


							  <bisearchEnable>Disable</bisearchEnable>


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
         "profile" : "true"
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
               "k" : "2147483649",
               "id" : "ADMIN",
               "vis" : "true",
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
                         "vis" : "true",
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
                 "isNT" : "false",
                 "isExternal" : "false",
                 "isBuiltin" : "true",
                 "user" :
                  {
                   "mustChangePasswordAtNextLogon" : "false",
                   "cannotChangePassword" : "false",
                   "lockedState" : "NotLocked",
                   "manageDBGrants" : "true",
                   "maxLogonSessions" : "0",
                   "lastLoginStamp" : "2018-10-24T11:31:20.847",
                   "hasAccessToRepository" : "true",
                   "isAdmin" : "true",
                   "isIsa" : "false",
                   "isRoled" : "false",
                   "changePassStamp" : "2018-10-24T06:31:43",
                   "autoRun" : "",
                   "temporaryAge" : "0",
                   "eternalPass" : "false",
                   "certificate" : ""
                  }
                },
               "profile" :
                {
                 "k" : "0",
                 "sid" :
                  {
                   "sid" : "PS-1-1",
                   "type" : "User"
                  },
                 "emails" :
                  {
                   "its" : "",
                   "work" :
                    {
                     "name" : "Рабочий",
                     "email" : "NewWork@example.ru"
                    },
                   "personal" :
                    {
                     "name" : "Персональный",
                     "email" : "NewHome@example.ru"
                    },
                   "mobile" :
                    {
                     "name" : "Мобильный",
                     "email" : "NewMobile@example.ru"
                    }
                  },
                 "props" :
                  {
                   "its" :
                    {
                     "it" :
                      [
                        {
                         "k" : "0",
                         "id" : "Location",
                         "value" : "Home"
                        }
                      ]
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
         "profiles" : "Get"
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
       "profiles" :
        {
         "its" :
          {
           "it" :
            [
              {
               "k" : "0",
               "id" : "PS-1-1",
               "n" : "ADMIN",
               "vis" : "1",
               "sid" :
                {
                 "sid" : "PS-1-1"
                },
               "emails" :
                {
                 "its" :
                  {
                   "it" :
                    [
                      {
                       "name" : "Рабочий",
                       "email" : "NewWork@example.ru"
                      },
                      {
                       "name" : "Мобильный",
                       "email" : "NewMobile@example.ru"
                      },
                      {
                       "name" : "Персональный",
                       "email" : "NewHome@example.ru"
                      }
                    ]
                  },
                 "def" :
                  {
                   "name" : "Рабочий",
                   "email" : "NewWork@example.ru"
                  },
                 "work" :
                  {
                   "name" : "Рабочий",
                   "email" : "NewWork@example.ru"
                  },
                 "personal" :
                  {
                   "name" : "Персональный",
                   "email" : "NewHome@example.ru"
                  },
                 "mobile" :
                  {
                   "name" : "Мобильный",
                   "email" : "NewMobile@example.ru"
                  }
                },
               "props" :
                {
                 "its" :
                  {
                   "it" :
                    [
                      {
                       "k" : "1",
                       "id" : "Location",
                       "value" : "Home",
                       "dt" : "1"
                      }
                    ]
                  }
                }
              },
              {
               "k" : "0",
               "id" : "PS-1-532",
               "n" : "GUEST",
               "vis" : "1",
               "sid" :
                {
                 "sid" : "PS-1-532"
                },
               "emails" :
                {
                 "its" :
                  {
                   "it" :
                    [
                      {
                       "name" : "Рабочий",
                       "email" : ""
                      },
                      {
                       "name" : "Мобильный",
                       "email" : ""
                      },
                      {
                       "name" : "Персональный",
                       "email" : ""
                      }
                    ]
                  }
                },
               "props" :
                {
                 "its" : ""
                }
              },
              {
               "k" : "0",
               "id" : "PS-1-537",
               "n" : "NEWADMIN",
               "vis" : "1",
               "sid" :
                {
                 "sid" : "PS-1-537"
                },
               "emails" :
                {
                 "its" :
                  {
                   "it" :
                    [
                      {
                       "name" : "Рабочий",
                       "email" : ""
                      },
                      {
                       "name" : "Мобильный",
                       "email" : ""
                      },
                      {
                       "name" : "Персональный",
                       "email" : ""
                      }
                    ]
                  }
                },
               "props" :
                {
                 "its" : ""
                }
              },
              {
               "k" : "0",
               "id" : "PS-1-539",
               "n" : "NEWADMIN",
               "vis" : "1",
               "sid" :
                {
                 "sid" : "PS-1-539"
                },
               "emails" :
                {
                 "its" :
                  {
                   "it" :
                    [
                      {
                       "name" : "Рабочий",
                       "email" : ""
                      },
                      {
                       "name" : "Мобильный",
                       "email" : ""
                      },
                      {
                       "name" : "Персональный",
                       "email" : ""
                      }
                    ]
                  }
                },
               "props" :
                {
                 "its" : ""
                }
              },
              {
               "k" : "0",
               "id" : "PS-1-541",
               "n" : "NEWADMIN",
               "vis" : "1",
               "sid" :
                {
                 "sid" : "PS-1-541"
                },
               "emails" :
                {
                 "its" :
                  {
                   "it" :
                    [
                      {
                       "name" : "Рабочий",
                       "email" : ""
                      },
                      {
                       "name" : "Мобильный",
                       "email" : ""
                      },
                      {
                       "name" : "Персональный",
                       "email" : ""
                      }
                    ]
                  }
                },
               "props" :
                {
                 "its" : ""
                }
              },
              {
               "k" : "0",
               "id" : "PS-1-543",
               "n" : "NEWADMIN",
               "vis" : "1",
               "sid" :
                {
                 "sid" : "PS-1-543"
                },
               "emails" :
                {
                 "its" :
                  {
                   "it" :
                    [
                      {
                       "name" : "Рабочий",
                       "email" : ""
                      },
                      {
                       "name" : "Мобильный",
                       "email" : ""
                      },
                      {
                       "name" : "Персональный",
                       "email" : ""
                      }
                    ]
                  }
                },
               "props" :
                {
                 "its" : ""
                }
              },
              {
               "k" : "0",
               "id" : "PS-1-545",
               "n" : "NEWADMIN",
               "vis" : "1",
               "sid" :
                {
                 "sid" : "PS-1-545"
                },
               "emails" :
                {
                 "its" :
                  {
                   "it" :
                    [
                      {
                       "name" : "Рабочий",
                       "email" : ""
                      },
                      {
                       "name" : "Мобильный",
                       "email" : ""
                      },
                      {
                       "name" : "Персональный",
                       "email" : ""
                      }
                    ]
                  }
                },
               "props" :
                {
                 "its" : ""
                }
              },
              {
               "k" : "0",
               "id" : "S-1-5-21-2210245889-1953428358-4221806923-2817",
               "n" : "FS\ASBADMIN",
               "vis" : "1",
               "sid" :
                {
                 "sid" : "S-1-5-21-2210245889-1953428358-4221806923-2817"
                },
               "emails" :
                {
                 "its" :
                  {
                   "it" :
                    [
                      {
                       "name" : "Рабочий",
                       "email" : ""
                      },
                      {
                       "name" : "Мобильный",
                       "email" : ""
                      },
                      {
                       "name" : "Персональный",
                       "email" : ""
                      }
                    ]
                  }
                },
               "props" :
                {
                 "its" : ""
                }
              }
            ]
          }
        },
       "bisearchEnable" : "Disable"
      }
    }
  }
}


public static SetMbSecResult ChangeUserProfile(string mb, MbSubject user)
{
    var somClient = new SomPortTypeClient(); //Прокси-объект для выполнения операций
    //Изменение профиля для указанного пользователя
    user.profile = new MbSecProfile()
    {
        sid = user.sid,
        emails = new MbSecProfileEmails()
        {
            its = new MbSecProfileEmail[3],
            mobile = new MbSecProfileEmail() { name = "Мобильный", email = "NewMobile@example.ru" },
            personal = new MbSecProfileEmail() { name = "Персональный", email = "NewHome@example.ru" },
            work = new MbSecProfileEmail() { name = "Рабочий", email = "NewWork@example.ru" }
        },
        props = new MbSecProfileProps()
        {
            its = new MbSecProfileProp[1]
            {
                new MbSecProfileProp() { id = "Location", value = "Home"}
            }
        }
    };
    //Параметры выполнения операции
    var setMbSec = new SetMbSec()
    {
        tArg = new SetMbSecArg()
        {
            pattern = new MbSecMdPattern()
            {
                users = ListOperation.Change,
                user = new MbSubjectPattern()
                {
                    profile = true
                }
            },
            meta = new MbSecMd()
            {
                users = new MbSubjects()
                {
                    its = new MbSubject[1]
                    {
                        user
                    }
                }
            },
            metaGet = new GetMbSecArg()
            {
                pattern = new MbSecMdPattern()
                {
                    profiles = ListOperation.Get
                }
            }
        },
        tMbSec = new MbId() { id = mb }
    };
    //Изменение профиля пользователя
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
