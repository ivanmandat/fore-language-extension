# Получение информации о профилях пользователей: Операция GetMbSec

Получение информации о профилях пользователей: Операция GetMbSec
-


**


# Получение информации о профилях пользователей


Ниже приведен пример использования операции [GetMbSec](../GetMbSec.htm)
 для получения информации о профиле текущего пользователя. В запросе передается
 моникёр соединения с репозиторием. В ответе приходит информация об адресах
 электронной почты и дополнительных свойствах пользователя, которые сохранены
 в профиле.


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
  <profiles>Get</profiles>[![](../../../minus.gif)](../../../#)<profilesFilter>
  <current>true</current>  </profilesFilter>
[![](../../../minus.gif)](../../../#)<profile>
  <subject>true</subject>  <data>true</data>  </profile>
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
[![](../../../minus.gif)](../../../#)<profiles>
[![](../../../minus.gif)](../../../#)<its>
[![](../../../minus.gif)](../../../#)<it>
  <k>0</k>  <id>PS-1-1</id>  <n>ADMIN</n>  <vis>1</vis>[![](../../../minus.gif)](../../../#)<sid>
  <sid>PS-1-1</sid>  </sid>
[![](../../../minus.gif)](../../../#)<subject>
  <k>2147483649</k>  <id>ADMIN</id>  <n>Пользователь</n>  <vis>1</vis>  <type>User</type>[![](../../../minus.gif)](../../../#)<sid>
  <sid>PS-1-1</sid>  <type>User</type>  </sid>
  </subject>
[![](../../../minus.gif)](../../../#)<emails>
[![](../../../minus.gif)](../../../#)<its>
[![](../../../minus.gif)](../../../#)<it>
  <name>Рабочий</name>  <email />
  </it>
[![](../../../minus.gif)](../../../#)<it>
  <name>Мобильный</name>  <email />
  </it>
[![](../../../minus.gif)](../../../#)<it>
  <name>Персональный</name>  <email />
  </it>
[![](../../../minus.gif)](../../../#)<it>
  <name>324</name>  <email>123@mail.ru</email>  </it>
  </its>
  </emails>
[![](../../../minus.gif)](../../../#)<props>
  <its />
  </props>
  </it>
  </its>
  </profiles>
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
       "profiles" : "Get",
       "profilesFilter" :
        {
         "current" : "true"
        },
       "profile" :
        {
         "subject" : "true",
         "data" : "true"
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
             "subject" :
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
                    },
                    {
                     "name" : "324",
                     "email" : "123@mail.ru"
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


public static GetMbSecResult GetUserProfiles(string mb)
{
    var somClient = new SomPortTypeClient(); //Прокси-объект для выполнения операций
    //Параметры выполнения операции
    var getMbSec = new GetMbSec()
    {
        tArg = new GetMbSecArg()
        {
            pattern = new MbSecMdPattern()
            {
                //Параметры извлечения информации о профиле пользователя
                profiles = ListOperation.Get,
                profile = new MbSecProfilePattern()
                {
                    subject = true
                },
                profilesFilter = new MbSecProfilesFilter()
                {
                    current = true
                }
            }
        },
        tMbSec = new MbId() { id = mb }
    };
    //Получение информации о профилях пользователей
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
